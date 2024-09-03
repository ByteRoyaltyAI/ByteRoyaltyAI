import React, { useState, ChangeEvent, FormEvent, Suspense } from "react";
import axios from "axios";
import { InputField } from "./FormInputFeild";
import { z } from "zod";
import { toast } from "react-toastify";
// import InputDropdown from "./InputDropdown";

const ComingSoon = React.lazy(() => import("./ComingSoon"));

const LoanEligibility = () => {
  const formSchema = z.object({
    annual_income: z.number().positive(),
    existing_debt: z.number().nonnegative(),
    other_relevant_info: z.string().optional(),
    credit_score: z.number().int(),
    employment_status: z.string().optional(),
    minimum_credit_score: z.number().int(),
    max_debt_income_ratio: z.number().min(0.1).max(1),
    reqd_employment_status: z.string().optional(),
    required_income: z.number().positive(),
  });

  const validateFormData = (data: any) => {
    try {
      return formSchema.parse(data);
    } catch (error: any) {
      toast.warn("Kindly fill all feilds to continue");
      console.error("Validation error:", error.errors);
      return null;
    }
  };

  const [formData, setFormData] = useState<Record<string, string | number>>({});
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    const parsedValue = isNaN(Number(value)) ? value : Number(value);

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: parsedValue,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {
      annual_income,
      existing_debt,
      other_relevant_info,
      credit_score,
      employment_status,
      minimum_credit_score,
      max_debt_income_ratio,
      reqd_employment_status,
      required_income,
      loan_type,
    } = formData;

    let objectToSend = {
      finiancial_profile: {
        annual_income,
        existing_debt,
        other_relevant_info,
        credit_score,
        employment_status,
      },
      loan_criteria: {
        minimum_credit_score,
        max_debt_income_ratio,
        reqd_employment_status,
        required_income,
        loan_type,
      },
    };
    console.log(objectToSend);

    const validatedData = validateFormData(formData);
    if (!validatedData) {
      console.log(validatedData);
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setResult(null);

    const API_URL = import.meta.env.VITE_AI_API_URL + inputData.endPoint;
    try {
      const response = await axios.post(API_URL, objectToSend);
      setResult(response.data);
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message ||
          "An error occurred while processing your request."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  return (
    <div>
      {inputData !== undefined ? (
        <div className="flex items-center justify-center bg-gradient-to-br from-[#0C1220] via-[#18243f] to-[#21262f] px-8 py-28 -mx-8">
          <div className="w-full rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-r from-[#9656F5] via-[#CB759C] to-[#F98F55]">
            <div className="p-8">
              <h1 className="text-center mb-8">{inputData.title}</h1>
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex flex-col md:flex-row gap-10 lg:gap-20 mt-20 mb-10">
                  <div className="space-y-2">
                    <h2 className="text-center text-[20px]">
                      Financial Profile
                    </h2>
                    {inputData?.inputFields.map((input) => (
                      <InputField
                        onChange={handleFormChange}
                        id={input.id}
                        label={input.label}
                        type={input.type}
                        placeholder={input.placeholder}
                      />
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-center text-[20px]">Loan Criteria</h2>
                    {inputData?.inputFeilds2.map((input) => (
                      <InputField
                        onChange={handleFormChange}
                        id={input.id}
                        label={input.label}
                        type={input.type}
                        placeholder={input.placeholder}
                      />
                    ))}

                    {/* <div className="space-y-12">
                  {inputData.checkboxFeilds.map((feild,index)=>(
                    <div key={index}>
                    <InputDropdown feild={feild} options={feild.options} setFormData={setFormData}/>
                      </div>
                  ))}
                  </div> */}
                  <div className="space-y-10 ">
                    {inputData.checkboxFeilds.map((feild) => (
                      <div className="group space-y-1" key={feild.id}>
                        <label className="text-[15px]">{feild.label}</label>
                        <select
                          id={feild.id}
                          value={formData[feild.id]}
                          onChange={handleOptionChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 text-[12px] rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-black hover:cursor-pointer"
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
                    </div>

                  </div>
                </div>
                <button
                  type="submit"
                  className={`w-full py-3 px-4 border border-white text-[14px] rounded-lg ${
                    loading
                      ? "opacity-50 cursor-not-allowed"
                      : "transform hover:scale-105"
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
                    "Generate response"
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
                  <h2 className="text-xl font-semibold mb-4 text-indigo-700">
                    Result Data
                  </h2>
                  <pre className="whitespace-pre-wrap text-sm bg-white p-4 rounded-lg border border-indigo-200 overflow-x-auto text-black">
                    {result}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="flex justify-center items-center text-5xl font-semibold ">
              Loading...
            </div>
          }
        >
          <ComingSoon />
        </Suspense>
      )}
    </div>
  );
};

export default LoanEligibility;

const inputData = {
  title: "Loan Eligibilty Assesment",
  endPoint: "assess_eligibility",
  inputFields: [
    {
      id: "annual_income",
      label: "Annual Income",
      type: "number",
      placeholder: "Enter your annual income",
    },
    {
      id: "credit_score",
      label: "Credit Score",
      type: "number",
      placeholder: "Enter your credit score",
    },
    {
      id: "existing_debt",
      label: "Existing Debt",
      type: "number",
      placeholder: "Enter your existing debt",
    },
    {
      id: "employment_status",
      label: "Employment Status",
      type: "text",
      placeholder: "Enter your employment status",
    },
    {
      id: "other_relevant_info",
      label: "Other Relevant Information",
      type: "text",
      placeholder: "Enter other relevant info",
    },
  ],
  inputFeilds2: [
    {
      id: "required_income",
      label: "Required Income",
      type: "number",
      placeholder: "ex. 60,000",
    },
    {
      id: "minimum_credit_score",
      label: "Minimum Credit Score",
      type: "number",
      placeholder: "ex. 30,000",
    },
    {
      id: "max_debt_income_ratio",
      label: "Max Debt Income Ratio",
      type: "double",
      placeholder: "ex. 0.8",
    },
  ],
  checkboxFeilds: [
    {
      id: "reqd_employment_status",
      label: "Required Employment Status",
      options: ["Self Employed", "Salaried", "Buisness", "Unemployed"],
      placeholder: "ex. employed",
    },
    {
      id: "loan_type",
      label: "Loan Type",
      options: ["Personal", "Buisness", "Goverment"],
      placeholder: "ex. Personal",
    },
  ],
};
