import axios from "axios";

interface CurrentSituation {
  current_profession: string;
  years_experience: number;
  location: string;
  geographical_preference: string;
  commitments: string;
}

interface CareerAdviceData {
  current_situation: CurrentSituation;
  is_fresh_graduate: boolean;
  interests: string;
}

const CareerAdvice = () => {

  const handleSubmit = async () => {

    const data: CareerAdviceData = {
      current_situation: {
        current_profession: "Student",
        years_experience: 0,
        location: "Hyderabad, India",
        geographical_preference: "Africa",
        commitments: "I want to marry and settle in Africa with girlfriend"
      },
      is_fresh_graduate: true,
      interests: "Playing chess"
    };
    console.log(data)
    try {
      const response = await axios.post(import.meta.env.VITE_AI_API_URL + "career_advice", data);
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }

  return (
    <div className='flex justify-center  min-h-screen mt-32 bg-[#0C1220] '>
      <div className="flex flex-col gap-16 w-[80%] text-[#FFFFFF]">
     
     <div className="flex flex-col gap-5 mt-40">
     <h1 className="font-bold text-[4rem]">
     Custom AI Agents
     </h1>
     <h3 className="text-[2rem] text-[#E8E8E8]">Create custom AI agents to automate tasks and boost productivity.</h3>
     <h3 className="text-[1.6rem] text-[#E8E8E8] mt-5">Updated over a week ago</h3>
     </div>

     <div className="flex flex-col gap-5">
     <h2 className="font-semibold" >What Are Custom Agents?</h2>
     <h3 className="text-[2rem] text-[#E8E8E8]">AI Agents are specialized assistants designed to automate activities like research, data analysis, and content creation. You can create custom AI Agents and use them in your projects to save time and get more done faster and smarter.</h3>
      </div>

      <div className="">
      <button className="h-30 w-48 bg-grey rounded-md " onClick={handleSubmit}>
        Submit
      </button>
      </div>

      </div>
    </div>
  );
}

export default CareerAdvice;

