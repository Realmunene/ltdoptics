// components/Testimonials.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Customer",
    content: "Amazing service and quality! The staff helped me find the perfect frames that match my style.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Michael Kibwana",
    role: "Customer",
    content: "The lens renewal service is fantastic. My glasses feel brand new again! Highly recommended.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Emily Mwajuma",
    role: "Customer",
    content: "Beautiful collection of sunglasses. Great quality and reasonable prices. Will definitely return!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            What Our <span className="text-blue-600">Customers Say</span>
          </h2>
          <p className="text-gray-600 text-lg">Real experiences from real people</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Testimonials