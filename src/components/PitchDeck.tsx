import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface MatchResult {
  error?: string;
  [key: string]: any;
}

const PicthDeckAnalysis: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<Record<string, string | number>>({});
  const [result, setResult] = useState<MatchResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handlefileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setErrorMessage("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setResult(null);

    const ObjectToSend = new FormData();
    if (file) {
      ObjectToSend.append("pdf_file", file);
    } else {
      setErrorMessage("Please upload a file.");
      setLoading(false);
      return;
    }
    const API_URL = import.meta.env.VITE_AI_API_URL + "pitchdeck_analysis";

    try {
      const response = await axios.post<MatchResult>(API_URL, ObjectToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 3000000,
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error:", error);
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setErrorMessage(
            `Server error: ${error.response.status} - ${
              error.response.data.message || "Unknown error"
            }`
          );
        } else if (error.request) {
          setErrorMessage(
            "No response received from server. Please try again later."
          );
        } else {
          setErrorMessage(`Error: ${error.message}`);
        }
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = event.target;
    console.log(id, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  return (
    <div className="py-10 bg-gradient-to-br from-[#0C1220] via-[#18243f] to-[#21262f] p-8 flex items-center justify-center">
      <div className="max-w-4xl  w-full rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-center mb-8">
            Pitchdeck Analysis
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group space-y-2">
              <label htmlFor="file" className="text-[15px]">
                Upload Pitch Deck (PDF only)
              </label>
              <div className="relative">
                <input
                  id="file"
                  type="file"
                  accept=".pdf"
                  onChange={handlefileUpload}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg  focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 "
                  required
                />
                <div className="absolute top-4 right-0 flex justify-center items-center pr-3 pointer-events-none">
                  <svg
                    className="w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {data.inputFields.map((feild) => (
              <div className="group " key={feild.id}>
                <label className="text-[12px]">{feild.label}</label>
                <select
                  id={feild.id}
                  value={formData[feild.id]}
                  onChange={handleOptionChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 text-[12px] rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-black"
                  required
                >
                  {feild.options.map((opt) => (
                    <option value={opt} key={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <button
              type="submit"
              className={`w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-[14px] font-medium text-white bg-gradient-to-br from-[#0C1220] via-[#18243f] to-[#21262f] hover:opacity-95 ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
              }`}
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mx-auto text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Extract  Data"
              )}
            </button>
          </form>
          {errorMessage && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {errorMessage}
            </div>
          )}
          {result && (
            <div className="mt-8 p-6 border-2 border-indigo-200 rounded-lg bg-indigo-50 transform transition-all duration-300 hover:shadow-lg">
              <h2 className="text-xl font-semibold mb-4 !text-indigo-700">
                Extracted Data
              </h2>
              <pre className="whitespace-pre-wrap text-sm bg-white p-4 rounded-lg border border-indigo-200 overflow-x-auto text-black">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const data = {
  title: "Evaluate Pitch Deck ",
  endPoint: "evaluate_pitch_deck",
  inputFields: [
    {
      id: "geographical_focus",
      label: "Geographical Focus",
      type: "checkbox",
      placeholder: "Ex. Asia",
      options: [
        "North America",
        "Europe",
        "Asia",
        "Latin America",
        "Middle East",
        "Africa",
        "Australia & Oceania",
        "Global/International",
      ],
    },
    {
      id: "industry_focus",
      label: "Industry Focus",
      type: "checkbox",
      placeholder: "Ex. Technology",
      options: [
        "Technology",
        "Healthcare",
        "Consumer Goods",
        "Energy & Sustainability",
        "Financial Services",
        "Media & Entertainment",
        "Real Estate & PropTech",
        "Agriculture & FoodTech",
        "Transportation & Logistics",
        "Education & EdTech",
        "Telecommunications",
        "Manufacturing & Industrial Tech",
        "Automotive & Mobility",
        "Cleantech & Environmental Tech",
        "Space & Aerospace",
      ],
    },
    {
      id: "investment_stage",
      label: "Investment Stage",
      type: "checkbox",
      placeholder: "Ex. Pre-Seed",
      options: [
        "Pre-Seed",
        "Seed",
        "Series A",
        "Series B",
        "Series C and Beyond",
        "Bridge/Mezzanine",
        "IPO (Initial Public Offering)",
        "Post-IPO/Secondary Market",
      ],
    },
    {
      id: "risk_appetite",
      label: "Risk Appetite",
      type: "checkbox",
      placeholder: "Ex. High",
      options: ["Low", "Moderate", "High"],
    },
  ],
};

export default PicthDeckAnalysis;
