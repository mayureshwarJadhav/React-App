import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });
  
    const [errors, setErrors] = useState({
      name: '',
      email: '',
      password: '',
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors = { name: '', email: '', password: '' };
  
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
  
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
  
      if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long';
      }
  
      setErrors(newErrors);
  
      if (!newErrors.name && !newErrors.email && !newErrors.password) {
        console.log('Form submitted:', formData);
      }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-300 p-4 mt-5">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Registration Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 text-lg border-gray-300 rounded-md shadow-sm "
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
    
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 text-lg border-gray-300 rounded-md shadow-sm "
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
    
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 text-lg border-gray-300 rounded-md shadow-sm "
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
    
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600  "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      );
    };
    
    export default RegistrationForm;