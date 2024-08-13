import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
interface MatchResult {
  error?: string;
  [key: string]: any;
}
const ResumeJobMatcher: React.FC = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [result, setResult] = useState<MatchResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleResumeUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setResume(event.target.files[0]);
      setErrorMessage('');
    }
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
    // Use a CORS proxy for development/testing purposes
    // const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    // const API_URL = 'http://localhost:8000/api/extract_resume';
    const API_URL = 'http://20.197.48.217:8000/api/extract_resume';
    try {
      const response = await axios.post<MatchResult>(
        API_URL,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          timeout: 30000, // 30 seconds timeout
        }
      );
      setResult(response.data);
    } catch (error) {
      console.error('Error:', error);
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setErrorMessage(`Server error: ${error.response.status} - ${error.response.data.message || 'Unknown error'}`);
        } else if (error.request) {
          // The request was made but no response was received
          setErrorMessage('No response received from server. Please try again later.');
        } else {
          // Something happened in setting up the request that triggered an Error
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full  rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
            Resume Job Matcher
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                Upload Resume (PDF only)
              </label>
              <div className="relative">
                <input
                  id="resume"
                  type="file"
                  accept=".pdf"
                  onChange={handleResumeUpload}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="group">
              <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                Job Description
              </label>
              <textarea
                id="jobDescription"
                // value={jobDescription}
                // onChange={handleJobDescriptionChange}
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 resize-none !text-black"
                placeholder="Paste the job description here..."
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105'}`}
              disabled={loading}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
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
