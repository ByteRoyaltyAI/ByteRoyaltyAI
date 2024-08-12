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
      link: "loan-recommendation",
    },
    {
      title: "Investment Insights",
      desc: "Automatically generate relevant interview questions based on the candidate’s resume and the job description. Ensure consistency and fairness in the interview process.",
      img: img2,
      link: "investment-insights",
    },
    {
      title: "Loan Eligibilty Analysis",
      desc: "Leverage AI to create an HR chatbot that can answer employee queries, assist with onboarding, and automate routine HR tasks.",
      img: img3,
      link: "loan-eligibility",
    },
  ],
  "education": [
    {
      title: "AI Teacher",
      desc: "Use AI to automatically match resumes with job descriptions based on skills, experience, and qualifications. Improve candidate fit and reduce turnover.",
      img: img1,
      link: "ai-teacher",
    },
  ],
  "health-care": [
    {
      title: "AI Doctor",
      desc: "Use AI to automatically match resumes with job descriptions based on skills, experience, and qualifications. Improve candidate fit and reduce turnover.",
      img: img1,
      link: "ai-doctor",
    },
  ],
  // You can add more keys here as needed
};