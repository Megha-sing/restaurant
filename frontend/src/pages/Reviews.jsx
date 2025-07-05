import React from "react";
import { data } from "../restApi.json";

const Reviews = () => {
  const testimonials = data[0].testimonials;
  return (
    <section className="reviews-page" style={{ minHeight: '80vh', background: '#f9fbf2', padding: '40px 0' }}>
      <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
        <h1 className="heading" style={{ color: '#E36925', textAlign: 'center', marginBottom: 32 }}>CUSTOMER REVIEWS</h1>
        <div style={{ display: 'flex', flexWrap: 'nowrap', gap: 32, justifyContent: 'center', alignItems: 'stretch' }}>
          {testimonials.map((review) => (
            <div key={review.id} style={{ background: '#fff', borderRadius: 20, boxShadow: '0 2px 16px #0001', padding: 24, width: 280, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={review.image} alt={review.userName} style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', marginBottom: 16 }} />
              <p style={{ fontStyle: 'italic', marginBottom: 12 }}>&ldquo;{review.description}&rdquo;</p>
              <div style={{ fontWeight: 500, marginBottom: 8 }}>{review.userName}</div>
              <div style={{ color: '#f5b301', fontWeight: 700 }}>Rating: {review.rating} / 5</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
