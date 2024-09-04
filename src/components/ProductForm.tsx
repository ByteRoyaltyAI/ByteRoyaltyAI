import React, { useState, ChangeEvent, FormEvent, Suspense } from "react";
import axios from "axios";
import { InputField } from "./FormInputFeild";
import { InputFieldInterface } from "../assets/lib/Formdata";
import { formInputData } from "../assets/lib/Formdata";
import {z} from "zod"
import {toast} from "react-toastify"
import LoadingIcon from "./LoadingIcon";

const ComingSoon = React.lazy(() => import("./ComingSoon"));

interface ProductFormProps {
  productName: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ productName }) => {
  const inputData = formInputData[productName];

  const [formData, setFormData] = useState<Record<string, string | number>>({});
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    const parsedValue = isNaN(Number(value)) ? value : Number(value);

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: parsedValue,
    }));
  };
 
  const validateFormData = (data: any,formSchema:any) => {
    try {
      return formSchema.parse(data);
    } catch (error:any) {
      const newErrors: Record<string, string> = {};
      error.errors.forEach((err:any) => {
        newErrors[err.path[0] as string] = err.message;
      });
      setErrors(newErrors);
      toast.warn("Kindly fill all feilds to continue");
      console.error("Validation error:", error.errors);
      return null;
    }
  };

const createZodSchema = (fields:Array<InputFieldInterface>) => {
  const schema = fields.reduce((acc, field) => {
    if (field.type === "number") {
      acc[field.id] = z.number().nonnegative({ message: `${field.label} must be a positive number` }).max(100000000);
    } else if (field.type === "text") {
      acc[field.id] = z.string().min(1, { message: `${field.label} cannot be empty` });
    }
    return acc;
  }, {}as Record<string,z.ZodTypeAny>);

  return z.object(schema);
};


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formSchema = createZodSchema(inputData.inputFields);
    if(!validateFormData(formData,formSchema))
      return
    setErrors({});
    setLoading(true);
    setErrorMessage("");
    setResult(null);

    const API_URL = import.meta.env.VITE_AI_API_URL + inputData.endPoint;
    try {
      const response = await axios.post(API_URL, formData);
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

  return (
    <div>
      {inputData !== undefined ? (
        <div className="bg-gradient-to-br from-[#0C1220] via-[#18243f] to-[#21262f] px-8 py-28 flex items-center justify-center">
          <div className="max-w-5xl w-full rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-r from-[#9656F5] via-[#CB759C] to-[#F98F55]">
            <div className="p-8 ">
              <h1 className="text-center mb-8">{inputData.title}</h1>
              <form onSubmit={handleSubmit} className="space-y-2">
                {inputData?.inputFields.map((input) => (
                  <div key={input.id} >
                  <InputField
                    onChange={handleFormChange}
                    id={input.id}
                    label={input.label}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                  <div className="h-6 mt-0.5">
                  {errors[input.id] && (
                    <p className=" text-[12px] "
                    style={{color:"#DC2626"}}>{errors[input.id]}</p>
                  )}
                  </div>
                </div>
                ))}
                <div className="mt-8"></div>
                <button
                  type="submit"
                  className={`w-full py-3 px-4 border border-white text-[14px] rounded-lg from-[#0C1220] via-[#18243f] to-[#21262f]  ${
                    loading
                      ? "opacity-50 cursor-not-allowed"
                      : "transform hover:scale-105"
                  }`}
                  disabled={loading}
                >
                  {loading ? (
                   <LoadingIcon/>
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

export default ProductForm;
