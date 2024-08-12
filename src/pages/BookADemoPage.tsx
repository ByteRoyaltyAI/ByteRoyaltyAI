import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface FormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  companyName: string;
  message: string;
}

const BookADemoPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    workEmail: "",
    companyName: "",
    message: ""
  });

  const handleChange =async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!formData.firstName.trim()) {
      alert("First name cannot be empty.");
      return;
    }
  
    if (!formData.workEmail.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (!formData.message.trim()) {
      alert("Message cannot be empty.");
      return;
    }

    try {
      const response = await axios.post(
        import.meta.env.VITE_AI_API_URL +"book-a-demo",
        formData
      );
      console.log(response.data);
      alert("Demo Successfully Booked!");
      setFormData({ 
        firstName: "",
        lastName: "",
        workEmail: "",
        companyName: "",
        message: ""})
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Demo Booking Failed :(");
    }
  };
  

  return (
    <div className='flex flex-col items-center min-h-screen my-60'>
      <div className="flex flex-col lg:flex-row w-[80%] gap-10">
        {/* First Child Div */}
        <div className="flex flex-col w-full lg:w-1/2 p-4 text-white gap-3">
          <h1 className="text-[4rem] sm:text-[45px] text-center font-bold mb-4 w-full sm:w-5/6">CONTACT OUR SALES TEAM</h1>
          <p className="mb-6 text-[18px]">Let's explore how Imaigen can work for you.</p>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-[16px] ">AI-powered resume and job matching to streamline your hiring process.</li>
            <li className="text-[16px] ">AI-generated interview questions tailored for HR managers.</li>
            <li className="text-[16px] ">Versatile chatbots for HR management and educational purposes.</li>
          </ul>
          <p className="mt-12">
            Looking for support? <Link to="/#contact" className="text-blue-400">Contact us</Link>.
          </p>
        </div>

        {/* Second Child Div */}
        <div className="flex flex-col w-full lg:w-1/2 p-4 text-white">
          <form onSubmit={handleSubmit}>
            {/* First Name & Last Name */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex flex-col w-full">
                <label htmlFor="firstName" className="mb-2">First name</label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Tinker"
                  className="p-6 bg-[#2C3344] rounded-md focus:outline-none"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="lastName" className="mb-2">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Hatfield"
                  className="p-6 bg-[#2C3344] rounded-md focus:outline-none"
                />
              </div>
            </div>

            {/* Work Email */}
            <div className="flex flex-col mt-4">
              <label htmlFor="workEmail" className="mb-2">Work email</label>
              <input
                type="email"
                id="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
                placeholder="tinker.hatfield@air-max.com"
                className="p-6 bg-[#2C3344] rounded-md focus:outline-none"
              />
            </div>

            {/* Company Name */}
            <div className="flex flex-col mt-4">
              <label htmlFor="companyName" className="mb-2">Company name</label>
              <input
                type="text"
                id="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Air Max Inc."
                className="p-6 bg-[#2C3344] rounded-md focus:outline-none"
              />
            </div>

            {/* Anything Else */}
            <div className="flex flex-col mt-4">
              <label htmlFor="anythingElse" className="mb-2">Anything else?</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How are you looking to use Imaigen?"
                rows={5}
                className="p-6 bg-[#2C3344] rounded-md focus:outline-none "
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#FF5982] p-6 rounded-xl text-[16px] hover:opacity-95 mt-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookADemoPage;
