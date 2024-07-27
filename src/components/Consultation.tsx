import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import axios from "axios";

const Consultation: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const daysOfWeek: string[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const generateTimeSlots = (): string[] => {
    const slots: string[] = [];
    for (let hour = 9; hour < 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        slots.push(time);
      }
    }
    return slots;
  };

  const timeSlots: string[] = generateTimeSlots();

  const getDaysInMonth = (
    date: Date
  ): { daysInMonth: number; firstDayOfMonth: number } => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    return { daysInMonth, firstDayOfMonth };
  };

  const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentDate);

  const handleDateClick = (day: number): void => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    );
  };

  const changeMonth = (delta: number): void => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + delta, 1)
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    const data = {
      date: formatDate(currentDate),
      time: selectedTime,
      email,
      message,
    };
  
    try {
      console.log("Submitted:", data);
      const response = await axios.post("https://imaigen-websitee-backend.onrender.com/bookconsultation", data);
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <>
      <h1 style={{ fontFamily: '"Righteous", sans-serif' }} className="text-center !text-icewhite text-5xl md:text-7xl border-2 w-min p-10 rounded-lg mx-auto glassmorphism relative">
        <span className="absolute text-3xl -top-2 -left-8 -rotate-[20deg] bg-yellow-300 text-black px-5 py-2 rounded-sm">Book Your</span>
        CONSULTATION </h1>
      <div className=" text-white p-4 rounded-lg flex flex-col md:flex-row md:justify-center md:items-center w-full md:h-[80vh]">
        <div className="w-full md:w-1/2  md:rounded-l-lg p-4 md:px-32 flex justify-center flex-col items-center md:items-end ">
          <div className=" p-4 rounded-t-xl w-3/4 md:w-2/4 bg-lightblue py-5 shadow-custom-shadow">
            <div className="flex justify-between items-center mb-2 text-2xl md:text-3xl text-darkblue font-bold">
              <span>{`${
                daysOfWeek[currentDate.getDay()]
              }, ${currentDate.getDate()} ${
                months[currentDate.getMonth()]
              }`}</span>
            </div>
            <div className="flex justify-between items-center mb-2 text-4xl md:text-6xl font-bold">
              <span>{`${
                months[currentDate.getMonth()]
              }, ${currentDate.getFullYear()}`}</span>
              <div>
                <button onClick={() => changeMonth(-1)} className="block mb-1">
                  <ChevronUp size={16} />
                </button>
                <button onClick={() => changeMonth(1)}>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-7 rounded-b-xl gap-2 mb-4 w-3/4 md:w-2/4 bg-darkblue p-5 shadow-custom-shadow">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center text-3xl w-16 h-16 text-lightblue font-semibold"
              >
                {day}
              </div>
            ))}
            {[...Array(firstDayOfMonth).keys()].map((i) => (
              <div key={`empty-${i}`} />
            ))}
            {[...Array(daysInMonth).keys()].map((i) => {
              const day = i + 1;
              const isSelected = day === currentDate.getDate();
              return (
                <div
                  key={day}
                  className={`text-center cursor-pointer p-1 rounded-full text-3xl h-16 w-16 place-content-center ${
                    isSelected ? "bg-lightblue" : "hover:bg-gray-700"
                  }`}
                  onClick={() => handleDateClick(day)}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 md:rounded-r-lg flex justify-center md:justify-start xs:mt-5 md:mt-0">
          <form onSubmit={handleSubmit} className="space-y-4 w-[90%] md:w-3/4">
            <div className="w-full md:w-2/4">
              <label
                htmlFor="time"
                className="block !text-4xl md:text-base font-medium mb-1 "
              ></label>
              <select
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full  rounded-lg px-3 py-2 text-darkblue font-semibold !text-4xl bg-[--blackblue] bg-lightblue"
                required
              >
                <option value="">Choose a time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-3xl md:text-base font-medium mb-1"
              ></label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full  rounded px-3 py-5 text-white bg-[--blackblue] !text-4xl my-5"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-3xl md:text-base font-medium mb-1"
              ></label>
              <textarea
                id="message"
                value={message}
                placeholder="Your Message"
                onChange={(e) => setMessage(e.target.value)}
                className="w-full  rounded px-5 py-5 text-white bg-[--blackblue]  "
                rows={10}
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className=" bg-orange text-white px-5 py-4 rounded-lg hover:bg-lightblue hover:translate-y-2 ease-in "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Consultation;
