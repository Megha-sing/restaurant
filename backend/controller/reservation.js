import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservationSchema.js";
import { sendMail } from "./sendMail.js";


const send_reservation = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    date,
    time,
    phone,
    numberOfGuests,
    occasion,
    specialRequests,
    preferredSeating,
  } = req.body;

  if (!firstName || !lastName || !email || !date || !time || !phone || !numberOfGuests) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await Reservation.create({
      firstName,
      lastName,
      email,
      date,
      time,
      phone,
      numberOfGuests,
      occasion,
      specialRequests,
      preferredSeating,
    });
    await sendMail(
      email,
      "Reservation Confirmation",
      `Dear ${firstName} ${lastName},\n\nYour reservation for ${date} at ${time} has been confirmed.\n\nThank you!`,
      `<p>Dear ${firstName} ${lastName},</p><p>Your reservation for <strong>${date}</strong> at <strong>${time}</strong> has been confirmed.</p><p>Thank you!</p>`
    );
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};


export default send_reservation;
