import React, { useState } from 'react';
import { Mail, User, Briefcase, MessageSquare } from 'lucide-react';

export default function ModernContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent! (This is a demo - connect to your backend)');
  };

  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-gradient-to-br from-slate-400 to-slate-500 rounded-3xl shadow-2xl p-8 border-8 border-gray-800">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-900 to-red-950 rounded-2xl p-6 mb-8">
          <h1 className="text-4xl font-bold text-center text-white">Contact Me</h1>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-900 font-bold mb-2 flex items-center gap-2">
              <User size={20} className="text-orange-600" />
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl border-4 border-gray-700 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-600 transition-colors"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-900 font-bold mb-2 flex items-center gap-2">
              <Mail size={20} className="text-orange-600" />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border-4 border-gray-700 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-600 transition-colors"
            />
          </div>

          {/* Role Field */}
          <div>
            <label className="block text-gray-900 font-bold mb-2 flex items-center gap-2">
              <Briefcase size={20} className="text-orange-600" />
              Role
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Developer, Designer, Client, etc."
              className="w-full px-4 py-3 rounded-xl border-4 border-gray-700 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-600 transition-colors"
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-gray-900 font-bold mb-2 flex items-center gap-2">
              <MessageSquare size={20} className="text-orange-600" />
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell me about your request..."
              rows="5"
              className="w-full px-4 py-3 rounded-xl border-4 border-gray-700 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-600 transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-4 px-12 rounded-2xl shadow-lg transform transition-all hover:scale-105 active:scale-95"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl p-6">
          <div className="text-center space-y-2">
            <p className="text-white font-semibold">Or reach out directly:</p>
            <p className="text-orange-300">
              <strong className="text-white">Email:</strong> jfergusooon@gmail.com
            </p>
            <p className="text-orange-300">
              <strong className="text-white">LinkedIn:</strong> https://www.linkedin.com/in/jeffrey-ferguson-developer/
            </p>
            <p className="text-orange-300">
              <strong className="text-white">GitHub:</strong> https://github.com/JFergusooon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}