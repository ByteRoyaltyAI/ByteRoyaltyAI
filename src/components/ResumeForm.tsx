import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LoadingIcon from './LoadingIcon';

interface MatchResult {
  error?: string;
  [key: string]: any;
}

const ResumeJobMatcher: React.FC = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [result, setResult] = useState<MatchResult | null>(null);
  const [jobDescription, setJobDescription] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('easy');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const params = useParams();
  const isInterviewGeneration = params.subProduct === 'interviewGeneration';

  const handleResumeUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setResume(event.target.files[0]);
      setErrorMessage('');
    }
  };

  const handleJobDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescription(event.target.value);
  };

  const handleDifficultyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setResult(null);

    const formData = new FormData();
    if (resume) {
      formData.append('pdf_file', resume);
    } else {
      setErrorMessage('Please upload a resume.');
      setLoading(false);
      return;
    }

    if (jobDescription) {
      formData.append('job_description', jobDescription);
    } else {
      setErrorMessage('Please provide a job description.');
      setLoading(false);
      return;
    }

    if (isInterviewGeneration) {
      formData.append('difficulty', difficulty);
    }

    const API_URL = import.meta.env.VITE_AI_API_URL + (isInterviewGeneration ? 'interview_generation' : 'extract_and_analyze');
    
    try {
      const response = await axios.post<MatchResult>(
        API_URL,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          timeout: 3000000,
        }
      );
      setResult(response.data);
    } catch (error) {
      console.error('Error:', error);
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setErrorMessage(`Server error: ${error.response.status} - ${error.response.data.message || 'Unknown error'}`);
        } else if (error.request) {
          setErrorMessage('No response received from server. Please try again later.');
        } else {
          setErrorMessage(`Error: ${error.message}`);
        }
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 bg-gradient-to-br from-[#0C1220] via-[#18243f] to-[#21262f] p-8 flex items-center justify-center">
      <div className="max-w-4xl  w-full rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-center mb-8">
           {isInterviewGeneration?" Interview Questions Generator " :
            "Resume Job Matcher"}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group space-y-2">
              <label htmlFor="resume" className="text-[15px]">
                Upload Resume (PDF only)
              </label>
              <div className="relative">
                <input
                  id="resume"
                  type="file"
                  accept=".pdf"
                  onChange={handleResumeUpload}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg  focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 "
                  required
                />
                <div className="absolute top-4 right-0 flex justify-center items-center pr-3 pointer-events-none">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="group">
              <label htmlFor="jobDescription" className="text-[15px]">
                Job Description
              </label>
              <textarea
                id="jobDescription"
                value={jobDescription}
                onChange={handleJobDescriptionChange}
                rows={5}
                className="w-full px-4 py-3 text-[15px] border-2 border-gray-300 rounded-lg focus:outline-none !text-black"
                placeholder="Paste the job description here..."
                required
              />
            </div>
            {isInterviewGeneration && (
              <div className="group ">
                <label htmlFor="difficulty" className="text-[12px]">
                  Difficulty Level
                </label>
                <select
                  id="difficulty"
                  value={difficulty}
                  onChange={handleDifficultyChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 text-[12px] rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-black"
                  required
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            )}
            <button
              type="submit"
              className={`w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-[14px] font-medium text-white bg-gradient-to-br from-[#0C1220] via-[#18243f] to-[#21262f] hover:opacity-95 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
              disabled={loading}
            >
              {loading ? (
                <LoadingIcon/>
              ) : 'Extract Resume Data'}
            </button>
          </form>
          {errorMessage && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {errorMessage}
            </div>
          )}
          {result && (
            <div className="mt-8 p-6 border-2 border-indigo-200 rounded-lg bg-indigo-50 transform transition-all duration-300 hover:shadow-lg">
              <h2 className="text-xl font-semibold mb-4 !text-indigo-700">Extracted Data</h2>
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

export default ResumeJobMatcher;
