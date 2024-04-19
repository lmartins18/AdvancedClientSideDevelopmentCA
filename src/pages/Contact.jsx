import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import React, { useState } from 'react';

export const Contact = () => {
    const [state, handleSubmit] = useForm("xyyrjkoz");
    const [category, setCategory] = useState('');
    const [complaintType, setComplaintType] = useState('');

    // Custom validation function for email format
    const validateEmail = (value) => {
        // Restriction to match common email domains
        const emailRegex = /^(.+)@(yahoo|gmail|hotmail|outlook)\.(com|net|org)$/i;
        return emailRegex.test(value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        // Reset the complaint type when category changes
        setComplaintType('');
    };

    const handleComplaintTypeChange = (event) => {
        setComplaintType(event.target.value);
    };

    if (state.result === null) {
        return (
            <div className="flex justify-center p-6">
                <div className="mt-16 w-full lg:w-1/3">
                    <h2 className="text-3xl font-bold font-uncial text-emerald-700">Contact our team</h2>
                    <div className="mt-6 mb-12">
                        <p>Welcome to our website! We're thrilled to have you here.
                            Whether you're looking to get in touch with our friendly team,
                             explore our services, or simply learn more about what we offer, 
                             you've come to the right place.</p>
                             <br></br>
                        <p>At "Le Gros Chef", we're dedicated to providing top-notch services tailored to meet your needs.
                             Our team of experts is committed to delivering excellence in every aspect of our work. </p>
                    </div>
                    <form onSubmit={handleSubmit} className="max-w-md">
                        <div className="mb-4">
                            <label htmlFor="name" className="text-sm font-medium text-gray-600">
                                <FaUser className="inline-block mr-2" />
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                // Restriction for minimum 3 characters
                                minLength={3} 
                                // Field is required
                                required 
                                className={`w-full p-2 border ${state.errors?.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="text-sm font-medium text-gray-600">
                                <FaEnvelope className="inline-block mr-2" />
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                // Specific supported email domains
                                pattern="^(.+)@(yahoo|gmail|hotmail|outlook)\.(com|net|org)$" 
                                // Field is required
                                required 
                                className={`w-full p-2 border ${state.errors?.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="category" className="text-sm font-medium text-gray-600">
                                Category:
                            </label>
                            <select
                                id="category"
                                name="category"
                                value={category}
                                onChange={handleCategoryChange}
                                required
                                className={`w-full p-2 border ${state.errors?.category ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            >
                                <option value="">Select a category</option>
                                <option value="General">General</option>
                                <option value="Support">Support</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Complaints">Complaints</option>
                            </select>
                            <ValidationError
                                prefix="Category"
                                field="category"
                                errors={state.errors}
                            />
                        </div>
                        {category === 'Complaints' && (
                            <div className="mb-4">
                                <label className="text-sm font-medium text-gray-600">Type of Complaint:</label>
                                <div className="mt-2">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio"
                                            value="Site"
                                            checked={complaintType === 'Site'}
                                            onChange={handleComplaintTypeChange}
                                        />
                                        <span className="ml-2">About the site</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input
                                            type="radio"
                                            className="form-radio"
                                            value="Services"
                                            checked={complaintType === 'Services'}
                                            onChange={handleComplaintTypeChange}
                                        />
                                        <span className="ml-2">About services</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input
                                            type="radio"
                                            className="form-radio"
                                            value="Other"
                                            checked={complaintType === 'Other'}
                                            onChange={handleComplaintTypeChange}
                                        />
                                        <span className="ml-2">Other</span>
                                    </label>
                                </div>
                            </div>
                        )}
                        <div className="mb-4">
                            <label htmlFor="message" className="text-sm font-medium text-gray-600">
                                <FaComment className="inline-block mr-2" />
                                Message:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                // Maximum 500 characters
                                maxLength={500}
                                // Field is required
                                required 
                                className={`w-full p-2 border ${state.errors?.message ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            ></textarea>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <button type="submit" className="bg-emerald-500 text-white py-2 px-4 rounded-md flex items-center" disabled={state.submitting}>
                            <FaPaperPlane className="mr-2" />
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // If form is submitted, show success or error
    return (
        <div className="flex justify-center p-6">
            <div className="mt-16 w-full lg:w-1/3">
                {state.result.kind === "success" ? (
                    // Success message
                    <>
                        <h2 className="text-3xl font-bold font-uncial text-emerald-700">Success!</h2>
                        <p>Your message has been successfully sent. We'll get back to you shortly.</p>
                    </>
                ) : (
                    // Error message
                    <>
                        <h2 className="text-3xl font-bold font-uncial text-red-500">Oops!</h2>
                        <p>Something went wrong while submitting your form. Please try again later.</p>
                    </>
                )}
            </div>
        </div>
    );
};
