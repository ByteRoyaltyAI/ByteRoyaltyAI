// Import images
import uploadImg from "../subProductImages/upload_img.jpg";
import enterJobDesc from "../subProductImages/Enter-Job_Desc.jpg";
import generateInterviewQuestions from "../subProductImages/Generate_Interview_Questions.jpg";
import selectdifficulty from "../subProductImages/Select_Difficulty.jpg";
import similarityAnalysis from "../subProductImages/Similarity_Analysis.jpg";
import analyzeSimility from "../subProductImages/Analyze_Similarity.jpg";
import img1 from "../productImages/img1.jpg";
import img2 from "../productImages/img2.jpg";
import img3 from "../productImages/img3.jpg";


export interface ProductTopic {
  name: string;
  desc: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProductDataInterface {
  topic: ProductTopic;
  faq: FAQ[];
  imagesData?: { img: string; text: string }[]; // Optional if imagesData is not always present
}

// Define productsData
export const productsData: Record<string, ProductDataInterface> = {
  hrChatbot: {
    topic: {
      name: "HR query chatbot",
      desc: "Introducing our employee-centric chatbot - a powerful tool designed to streamline HR-related inquiries and provide your workforce with instant access to vital organizational information. This conversational interface empowers your employees to quickly find answers, freeing up your HR team to focus on more strategic initiatives.",
    },
    faq: [
      {
        question: "What type of queries can the chatbot assist with?",
        answer: "The chatbot is designed to handle a wide range of HR-related inquiries, including questions about company policies, benefits, payroll, time-off requests, and more. It can also provide general information about the organization and its procedures.",
      },
      {
        question: "Is the chatbot available 24/7?",
        answer: "Yes, the chatbot is accessible 24 hours a day, 7 days a week, allowing employees to get the information they need at their convenience.",
      },
      {
        question: "How accurate are the chatbot's responses?",
        answer: "The chatbot's responses are powered by a comprehensive and regularly updated knowledge base, ensuring the information provided is accurate and up-to-date. We also have a team of HR experts who continuously monitor and refine the chatbot's capabilities.",
      },
      {
        question: "Can I customize the chatbot's appearance and branding?",
        answer: "Absolutely! The chatbot can be tailored to match your company's branding, allowing it to seamlessly integrate with your existing digital ecosystem.",
      },
      {
        question: "How do I get started with the chatbot?",
        answer: "Getting started is easy. Simply reach out to our sales team, and we'll guide you through the onboarding process, including the integration of the chatbot into your website or internal systems.",
      },
    ],
  },
  interviewGeneration: {
    topic: {
      name: "AI Powered Interview",
      desc: "Our revolutionary AI interview system takes the hassle out of candidate screening, delivering a seamless and efficient hiring process. By leveraging natural language processing, our AI assistant conducts in-depth interviews, evaluating candidates' skills, knowledge, and fit for your organization.",
    },
    faq: [
      {
        question: "How does the AI interview assistant work?",
        answer: "The AI assistant uses advanced natural language processing to engage candidates in conversational interviews. It asks tailored questions, analyzes responses, and provides comprehensive reports on candidate performance.",
      },
      {
        question: "Can the AI system handle complex technical interviews?",
        answer: "Yes, our AI assistant is capable of conducting in-depth technical interviews, assessing candidates' skills, problem-solving abilities, and domain-specific knowledge.",
      },
      {
        question: "How accurate are the AI's candidate assessments?",
        answer: "Our AI assistant's assessments have been validated through extensive testing and real-world deployment, ensuring a high degree of accuracy in predicting candidate suitability.",
      },
      {
        question: "Is the AI interview process GDPR and data privacy compliant?",
        answer: "Absolutely. We take data privacy and security very seriously, and our AI interview system is designed to comply with all relevant data protection regulations, including GDPR.",
      },
      {
        question: "Can the AI assistant be customized to our company's specific needs?",
        answer: "Yes, our solution is highly customizable. We work closely with our clients to tailor the interview process and assessment criteria to align with your organization's unique requirements and hiring goals.",
      },
    ],
    imagesData: [
      {
        img: enterJobDesc,
        text: "Step 1: Enter Job Description",
      },
      {
        img: selectdifficulty,
        text: "Step 2: Enter Difficulty",
      },
      {
        img: generateInterviewQuestions,
        text: "Step 3: Generate Interview Questions",
      },
    ],
  },
  resumeMatching: {
    topic: {
      name: "AI Powered Resume Matching",
      desc: "Our AI-powered resume matching system automates the process of matching resumes to job descriptions, enhancing candidate selection and reducing turnover.",
    },
    faq: [
      {
        question: "How does the AI resume matching system work?",
        answer: "The AI system analyzes resumes and job descriptions to identify matches based on skills, experience, and qualifications, improving candidate fit and reducing turnover.",
      },
      {
        question: "Can the AI system handle large volumes of resumes?",
        answer: "Yes, our AI system is designed to efficiently process and analyze large volumes of resumes, ensuring timely and accurate matching.",
      },
      {
        question: "How accurate are the AI's matching results?",
        answer: "Our AI system's matching results are validated through extensive testing and real-world use, ensuring a high degree of accuracy in identifying the best candidates.",
      },
      {
        question: "Is the AI system customizable to our specific needs?",
        answer: "Yes, our AI system can be customized to align with your organization's specific criteria and requirements for resume matching.",
      },
      {
        question: "How do I get started with the resume matching system?",
        answer: "Contact our sales team to learn more about how our resume matching system can benefit your organization and to start the implementation process.",
      },
    ],
    imagesData: [
      {
        img: uploadImg,
        text: "Step 1: Upload Resume",
      },
      {
        img: enterJobDesc,
        text: "Step 2: Enter Job Description",
      },
      {
        img: selectdifficulty,
        text: "Step 3: Enter Difficulty",
      },
      {
        img: analyzeSimility,
        text: "Step 4: Analyze Similarity",
      },
      {
        img: similarityAnalysis,
        text: "Step 5: Review Similarity",
      },
    ],
  },
  investmentInsights: {
    topic: {
      name: "AI-Driven Investment Insights",
      desc: "Our AI-driven investment insights platform helps you make informed decisions by analyzing your financial data and providing tailored recommendations to optimize your portfolio.",
    },
    faq: [
      {
        question: "How does the AI investment insights system work?",
        answer: "The AI system analyzes your financial data, including income, credit score, and existing debt, to provide personalized investment recommendations that align with your financial goals.",
      },
      {
        question: "Can the AI system accommodate different financial profiles?",
        answer: "Yes, our AI system is designed to handle various financial profiles, offering insights and recommendations that are tailored to your specific situation and objectives.",
      },
      {
        question: "How accurate are the AI's investment recommendations?",
        answer: "Our AI system's recommendations are based on extensive data analysis and real-world performance, ensuring accurate and reliable investment guidance.",
      },
      {
        question: "Is the AI system customizable to my financial goals?",
        answer: "Yes, the AI system can be customized to reflect your unique financial goals and preferences, ensuring that the recommendations align with your investment strategy.",
      },
      {
        question: "How do I get started with the investment insights system?",
        answer: "Contact our support team to learn more about how our AI-driven investment insights platform can help you achieve your financial goals and to start using the service.",
      },
    ],
    imagesData: [
      {
        img: enterJobDesc,
        text: "Step 1: Enter Annual Income",
      },
      {
        img: enterJobDesc,
        text: "Step 2: Enter Credit Score",
      },
      {
        img: enterJobDesc,
        text: "Step 3: Enter Existing Debt",
      },
      {
        img: enterJobDesc,
        text: "Step 4: Enter Employment Status",
      },
      {
        img: enterJobDesc,
        text: "Step 5: Enter Other Relevant Info",
      },
      {
        img: enterJobDesc,
        text: "Step 6: Select Country",
      },
      {
        img: enterJobDesc,
        text: "Step 7: Select City",
      },
      {
        img: enterJobDesc,
        text: "Step 8: Analyze Investment Options",
      },
      {
        img: enterJobDesc,
        text: "Step 9: Review Investment Insights",
      },
    ],
  },
  loanRecommendation: {
    topic: {
      name: "AI-Powered Loan Recommendation",
      desc: "Our AI-powered loan recommendation system evaluates your financial profile and provides personalized loan options to help you find the best fit for your needs.",
    },
    faq: [
      {
        question: "How does the AI loan recommendation system work?",
        answer: "The AI system assesses your financial data, such as income, credit score, and existing debt, to suggest loan options that align with your financial situation and goals.",
      },
      {
        question: "Can the AI system handle different types of loans?",
        answer: "Yes, our AI system can recommend various types of loans, including personal, auto, and home loans, based on your specific needs and financial profile.",
      },
      {
        question: "How reliable are the AI's loan recommendations?",
        answer: "The AI system's recommendations are based on comprehensive data analysis and real-world insights, ensuring reliable and relevant loan options.",
      },
      {
        question: "Is the AI system customizable for different loan requirements?",
        answer: "Yes, the AI system can be tailored to accommodate different loan requirements and preferences, providing recommendations that fit your unique needs.",
      },
      {
        question: "How do I start using the loan recommendation system?",
        answer: "Reach out to our support team to learn more about how our AI-powered loan recommendation system can assist you and to begin the process.",
      },
    ],
    imagesData: [
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 1: Enter Annual Income",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 2: Enter Credit Score",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 3: Enter Existing Debt",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 4: Enter Employment Status",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 5: Enter Profession",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 6: Enter Location",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 7: Review Loan Options",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 8: Apply for a Loan",
      },
    ],
  },
  loanEligibility: {
    topic: {
      name: "AI-Powered Loan Eligibility Assessment",
      desc: "Our AI-driven loan eligibility assessment takes into account your financial and personal information to evaluate your eligibility for various loan options, ensuring you get the most suitable recommendation for your financial needs.",
    },
    faq: [
      {
        question: "How does the AI loan eligibility assessment work?",
        answer: "The AI system analyzes key financial inputs like your income, credit score, employment status, and existing debt to determine your eligibility for different loan types and offers personalized recommendations.",
      },
      {
        question: "What factors are considered in the loan eligibility assessment?",
        answer: "The AI considers several factors, including your annual income, credit score, existing debt, employment status, and location to assess your loan eligibility.",
      },
      {
        question: "Can I trust the loan eligibility results from the AI system?",
        answer: "Yes, the AI system is designed to provide accurate and reliable loan eligibility assessments based on a comprehensive analysis of your financial data.",
      },
      {
        question: "Are the loan options recommended by the AI system flexible?",
        answer: "Absolutely! The AI system can recommend flexible loan options that cater to various financial needs, whether you’re looking for personal, auto, or home loans.",
      },
      {
        question: "How can I start the loan eligibility assessment?",
        answer: "Simply input your financial details into our system, and the AI will guide you through the process, providing instant feedback on your loan eligibility and the best options available.",
      },
    ],
    imagesData: [
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 1: Enter Annual Income",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 2: Enter Credit Score",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 3: Enter Existing Debt",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 4: Enter Employment Status",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 5: Enter Profession",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 6: Enter Location",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 7: Review Eligibility and Loan Options",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 8: Apply for a Loan",
      },
    ],
  },
  careerAdvice: {
    topic: {
      name: "AI-Powered Career Advice",
      desc: "Our AI-driven career advice system offers personalized guidance to help you make informed decisions about your career path, whether you're just starting or looking to advance in your field.",
    },
    faq: [
      {
        question: "How does the AI career advice system work?",
        answer: "The AI system analyzes your current profession, years of experience, location, geographical preferences, personal commitments, and interests to provide tailored career advice that aligns with your professional goals.",
      },
      {
        question: "Can the AI system help both experienced professionals and freshers?",
        answer: "Yes, the AI system is designed to assist both experienced professionals and those new to the workforce, offering guidance that suits your level of experience and career aspirations.",
      },
      {
        question: "What inputs does the AI require for career advice?",
        answer: "The AI system considers your current profession, years of experience, location, geographical preferences, personal commitments, experience level, and areas of interest to generate personalized advice.",
      },
      {
        question: "Is the career advice provided by the AI system reliable?",
        answer: "The AI system uses a comprehensive data-driven approach to offer reliable and relevant career advice, helping you make the best decisions for your professional journey.",
      },
      {
        question: "How can I start using the career advice AI system?",
        answer: "Provide the necessary inputs, such as your current profession, experience, location, and interests, and the AI system will guide you through potential career paths and opportunities that match your profile.",
      },
    ],
    imagesData: [
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 1: Enter Current Profession",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 2: Enter Years of Experience",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 3: Enter Your Location",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 4: Specify Geographical Preferences",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 5: Enter Personal Commitments",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 6: Indicate If You're Experienced or a Fresher",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 7: Enter Your Interests",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 8: Review Career Recommendations",
      },
    ],
  }
  
};



export interface ProductCardInterface {
  title: string;
  desc: string;
  img: string; 
  link: string;
}

// Define an object with keys and arrays of ProductCardInterface
export const productCardsData: { [key: string]: ProductCardInterface[] } = {
  "hr-services": [
    {
      title: "Resume-Job Matching",
      desc: "Use AI to automatically match resumes with job descriptions based on skills, experience, and qualifications. Improve candidate fit and reduce turnover.",
      img: img1,
      link: "resumeMatching",
    },
    {
      title: "Interview Question Generation",
      desc: "Automatically generate relevant interview questions based on the candidate’s resume and the job description. Ensure consistency and fairness in the interview process.",
      img: img2,
      link: "interviewGeneration",
    },
    {
      title: "HR Chatbot",
      desc: "Leverage AI to create an HR chatbot that can answer employee queries, assist with onboarding, and automate routine HR tasks.",
      img: img3,
      link: "hrChatbot",
    },
  ],
  "finance": [
    {
      title: "Loan Recommendation",
      desc: "Use AI to automatically match resumes with job descriptions based on skills, experience, and qualifications. Improve candidate fit and reduce turnover.",
      img: img1,
      link: "loanRecommendation",
    },
    {
      title: "Investment Insights",
      desc: "Automatically generate relevant interview questions based on the candidate’s resume and the job description. Ensure consistency and fairness in the interview process.",
      img: img2,
      link: "investmentInsights",
    },
    {
      title: "Loan Eligibilty Analysis",
      desc: "Leverage AI to create an HR chatbot that can answer employee queries, assist with onboarding, and automate routine HR tasks.",
      img: img3,
      link: "loanEligibility",
    },
  ],
  "education": [
    {
      title: "Career Advice",
      desc: "Use AI-driven career advice system offers personalized guidance to help you make informed decisions about your career path.",
      img: img1,
      link: "careerAdvice",
    },
  ],
  "health-care": [
    {
      title: "AI Doctor",
      desc: "Use AI to automatically match resumes with job descriptions based on skills, experience, and qualifications. Improve candidate fit and reduce turnover.",
      img: img1,
      link: "aiDoctor",
    },
  ],
  // You can add more keys here as needed
};