import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { InputField } from './FormInputFeild';
import { formInputData } from '../assets/lib/Formdata';


interface ProductFormProps {
  productName: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ productName }) =>  {
  const inputData=formInputData[productName] 

  if(inputData===undefined){
    return null
  }

  const [formData, setFormData] = useState<Record<string, string | number>>({});
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');


  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setResult(null);
    console.log(formData)
    
    const API_URL = import.meta.env.VITE_AI_API_URL + inputData.endPoint;
    try {
      const response = await axios.post(API_URL, formData);
      setResult(response.data);
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message || 'An error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0C1220] via-[#18243f] to-[#21262f] px-8 py-28 flex items-center justify-center">
      <div className="max-w-5xl w-full rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-r from-[#9656F5] via-[#CB759C] to-[#F98F55]">
        <div className="p-8">
          <h1 className="text-center mb-8">{inputData.title}</h1>
          <form onSubmit={handleSubmit} className="space-y-2">
            {inputData?.inputFields.map((input)=>(

              <InputField onChange={handleFormChange} id={input.id} label={input.label} type={input.type} placeholder={input.placeholder}  />
            )) 
              }
            <button
              type="submit"
              className={`w-full py-3 px-4 border border-white text-[14px] rounded-lg from-[#0C1220] via-[#18243f] to-[#21262f] ${loading ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105'}`}
              disabled={loading}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Generate response'}
            </button>
          </form>
          {errorMessage && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {errorMessage}
            </div>
          )}
          {result && (
            <div className="mt-8 p-6 border-2 border-indigo-200 rounded-lg bg-indigo-50 transform transition-all duration-300 hover:shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-indigo-700">Result Data</h2>
              <pre className="whitespace-pre-wrap text-sm bg-white p-4 rounded-lg border border-indigo-200 overflow-x-auto text-black">
                {result}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
