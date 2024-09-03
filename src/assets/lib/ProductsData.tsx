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
      name: "Cutting-edge Investment Insights Assistant",
      desc: "Introducing our powerful tool designed to provide personalized investment guidance and market analysis at your fingertips. This innovative platform empowers investors of all levels to make informed decisions, stay updated on market trends, and optimize their portfolio performance.",
    },
    faq: [
      {
        question: "What kind of investment insights does the assistant provide?",
        answer: "Our Investment Insights Assistant offers a wide range of insights, including personalized stock recommendations, market trend analysis, portfolio diversification suggestions, and risk assessment evaluations tailored to your investment goals and risk tolerance.",
      },
      {
        question: "Is the assistant suitable for both beginner and experienced investors?",
        answer: "Absolutely! The assistant is designed to cater to investors at all levels. Beginners can benefit from educational resources and basic investment guidance, while experienced investors can leverage advanced analytics and in-depth market insights.",
      },
      {
        question: "How often is the market data updated?",
        answer: "Our platform utilizes real-time data feeds to ensure that you have access to the most up-to-date market information. Stock prices, market indices, and other relevant data are updated continuously throughout trading hours.",
      },
      {
        question: "Can I connect my existing investment accounts to the assistant?",
        answer: "Yes, you can securely link your investment accounts to our platform. This allows the assistant to provide more accurate and personalized insights based on your current portfolio holdings and performance.",
      },
      {
        question: "How do I get started with the Investment Insights Assistant?",
        answer: "Getting started is easy. Simply sign up for an account on our website, complete a brief questionnaire about your investment goals and preferences, and you'll have immediate access to our powerful insights and tools.",
      },
    ],
    imagesData: [
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 1: Sign Up for an Account",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 2: Complete Investment Goals Questionnaire",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 3: Receive Personalized Insights",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 4: Optimize Your Portfolio",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 5: Stay Updated with Market Trends",
      },
      {
        img: enterJobDesc, // Replace with the actual image variable
        text: "Step 6: Monitor and Adjust Your Investments",
      },
    ],
  },
  
  loanRecommendation: {
    topic: {
      name: "State-of-the-Art Loan Recommendation Tool",
      desc: "Introducing our advanced solution designed to simplify the loan selection process and match borrowers with the most suitable loan options. Leveraging AI and machine learning, our platform analyzes user profiles, financial data, and market conditions to provide tailored loan recommendations for diverse borrowing needs.",
    },
    faq: [
      {
        question: "What types of loans does the tool recommend?",
        answer: "Our Loan Recommendation Tool covers a wide range of loan types, including personal loans, mortgages, auto loans, student loans, and business loans. It provides recommendations based on your specific financial situation and borrowing needs.",
      },
      {
        question: "How accurate are the loan recommendations?",
        answer: "The recommendations are highly accurate, as they are based on real-time data from our extensive lender network, your provided financial information, and current market conditions. However, final loan approval and terms are always subject to the lender's discretion.",
      },
      {
        question: "Does using the tool affect my credit score?",
        answer: "No, using our Loan Recommendation Tool does not impact your credit score. We use a soft credit inquiry for analysis purposes, which doesn't affect your credit rating. A hard credit check would only occur if you decide to proceed with a formal loan application with a lender.",
      },
      {
        question: "Can I compare multiple loan offers?",
        answer: "Absolutely! Our tool allows you to compare multiple loan offers side-by-side, including interest rates, repayment terms, and total cost of borrowing. This enables you to make an informed decision based on your specific needs and preferences.",
      },
      {
        question: "How do I get started with the Loan Recommendation Tool?",
        answer: "Getting started is simple. Visit our website, answer a few questions about your loan requirements and financial situation, and our tool will instantly provide you with personalized loan recommendations. You can then explore these options in detail and even initiate the application process directly through our platform.",
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
      desc: "Introducing our state-of-the-art Loan Eligibility Assessment Tool - a comprehensive platform designed to help you assess your eligibility for various loan options quickly and accurately. This innovative tool empowers borrowers to understand their borrowing capacity, explore loan options, and make informed financial decisions.",
    },
    faq: [
      {
        question: "What type of loans can I assess my eligibility for?",
        answer: "Our Loan Eligibility Assessment Tool covers a wide range of loan types, including personal loans, home loans, auto loans, and business loans. The tool provides personalized recommendations based on your financial profile and loan preferences.",
      },
      {
        question: "Is the tool suitable for individuals with varying credit scores?",
        answer: "Yes! The tool is designed to cater to borrowers with different credit profiles. Whether you have excellent credit or are looking to improve your score, the tool offers tailored advice and loan options that match your financial situation.",
      },
      {
        question: "How quickly can I get my eligibility results?",
        answer: "The tool delivers instant results. Once you input your financial details, you will receive an immediate assessment of your loan eligibility, along with recommended loan options and interest rate estimates.",
      },
      {
        question: "Can I compare different loan options using the tool?",
        answer: "Absolutely! Our platform includes a loan comparison feature that allows you to evaluate multiple loan offers side by side. This helps you choose the loan that best suits your needs and budget.",
      },
      {
        question: "How do I get started with the Loan Eligibility Assessment Tool?",
        answer: "It's simple! Sign up on our website, enter your financial details, and within minutes, you'll receive a detailed assessment of your loan eligibility, along with personalized loan recommendations.",
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

  pitchDeckAnalysis: {
    topic: {
      name: "AI-Powered Loan Eligibility Assessment",
      desc: "Introducing our state-of-the-art Loan Eligibility Assessment Tool - a comprehensive platform designed to help you assess your eligibility for various loan options quickly and accurately. This innovative tool empowers borrowers to understand their borrowing capacity, explore loan options, and make informed financial decisions.",
    },
    faq: [
      {
        question: "What type of loans can I assess my eligibility for?",
        answer: "Our Loan Eligibility Assessment Tool covers a wide range of loan types, including personal loans, home loans, auto loans, and business loans. The tool provides personalized recommendations based on your financial profile and loan preferences.",
      },
      {
        question: "Is the tool suitable for individuals with varying credit scores?",
        answer: "Yes! The tool is designed to cater to borrowers with different credit profiles. Whether you have excellent credit or are looking to improve your score, the tool offers tailored advice and loan options that match your financial situation.",
      },
      {
        question: "How quickly can I get my eligibility results?",
        answer: "The tool delivers instant results. Once you input your financial details, you will receive an immediate assessment of your loan eligibility, along with recommended loan options and interest rate estimates.",
      },
      {
        question: "Can I compare different loan options using the tool?",
        answer: "Absolutely! Our platform includes a loan comparison feature that allows you to evaluate multiple loan offers side by side. This helps you choose the loan that best suits your needs and budget.",
      },
      {
        question: "How do I get started with the Loan Eligibility Assessment Tool?",
        answer: "It's simple! Sign up on our website, enter your financial details, and within minutes, you'll receive a detailed assessment of your loan eligibility, along with personalized loan recommendations.",
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

   careerCompass : {
    topic: {
      name: "Your AI-Powered Career Advisor",
      desc: "Introducing Career Compass - an innovative AI-driven platform designed to provide personalized career guidance and empower individuals to make informed decisions about their professional journey. This cutting-edge tool offers tailored advice, industry insights, and actionable strategies to help you navigate your career path with confidence.",
    },
    faq: [
      {
        question: "What kind of career advice does Career Compass provide?",
        answer: "Career Compass offers a wide range of advice, including career path suggestions, skill development recommendations, industry insights, and job market trends tailored to your profile and goals.",
      },
      {
        question: "How accurate are the AI-generated recommendations?",
        answer: "Our AI model is trained on extensive, up-to-date career data and is continuously refined to provide highly accurate and relevant recommendations. However, we always encourage users to combine our advice with their personal judgment and additional research.",
      },
      {
        question: "Can Career Compass help me if I'm considering a career change?",
        answer: "Absolutely! Career Compass is especially useful for those considering a career transition. It can analyze your transferable skills, suggest potential new paths, and provide strategies for successfully pivoting to a new industry or role.",
      },
      {
        question: "Is my personal information secure?",
        answer: "We take data privacy very seriously. All personal information is encrypted and stored securely. We never share your data with third parties without your explicit consent.",
      },
      {
        question: "How often is the career and industry data updated?",
        answer: "Our AI model and database are updated regularly to reflect the latest job market trends, emerging industries, and in-demand skills, ensuring you receive the most current and relevant advice.",
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
  },

  careerAdvisor : {
    topic: {
      name: "Career Advisor",
      desc: "Introducing our cutting-edge Career Advisor Application - a comprehensive platform designed to guide individuals in making informed career choices based on their skills, interests, and market trends. This innovative tool empowers users to explore career options, receive personalized advice, and plan their professional journey effectively.",
    },
    faq: [
      {
        question: "What kind of career advice does the application provide?",
        answer: "Our Career Advisor Application offers a wide range of career insights, including personalized job recommendations, skills and interests assessment, market trend analysis, and career pathway suggestions tailored to your goals and preferences.",
      },
      {
        question: "Is the application suitable for both students and working professionals?",
        answer: "Absolutely! The application is designed to cater to both students and professionals at any stage of their career. Whether you're just starting out or considering a career change, the tool provides guidance tailored to your current situation.",
      },
      {
        question: "How quickly can I receive career recommendations?",
        answer: "The application provides instant results. After completing a brief assessment of your skills, interests, and goals, you will receive immediate career recommendations and suggestions for educational programs or job opportunities.",
      },
      {
        question: "Can I explore different career paths using the application?",
        answer: "Yes! Our platform allows you to explore various career paths based on your profile. You can compare different career options, view potential job roles, and plan your educational journey accordingly.",
      },
      {
        question: "How do I get started with the Career Advisor Application?",
        answer: "It's simple! Sign up on our website, complete a short questionnaire about your skills, interests, and career goals, and you'll receive personalized career advice and pathway planning tools to guide your professional journey.",
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

export interface ProductPageSectionInterface {
  title: string;
  desc: string;
  cards: ProductCardInterface[];
}


export const ProductPageData: { [key: string]: ProductPageSectionInterface } = {
  "hr-services": {
    title: "Transform Your Hiring Process",
    desc: "Streamline hiring, enhance candidate selection, and empower your HR team with AI-driven tools.",
    cards: [
      {
        title: "Resume-Job Matching",
        desc: "Use AI to automatically match resumes with job descriptions based on skills, experience, and qualifications. Improve candidate fit and reduce turnover.",
        img: img1, // Replace with actual image path or import
        link: "resumeMatching",
      },
      {
        title: "Interview Question Generation",
        desc: "Automatically generate relevant interview questions based on the candidate’s resume and the job description. Ensure consistency and fairness in the interview process.",
        img: img2, // Replace with actual image path or import
        link: "interviewGeneration",
      },
      {
        title: "HR Chatbot",
        desc: "Leverage AI to create an HR chatbot that can answer employee queries, assist with onboarding, and automate routine HR tasks.",
        img: img3, // Replace with actual image path or import
        link: "hrChatbot",
      },
    ],
  },
  "finance": {
    title: "Finance",
    desc: "Advanced AI solutions to assist with financial decision-making.",
    cards: [
      {
        title: "Loan Recommendation",
        desc: "Simplify the loan selection process with tailored loan recommendations to meet diverse borrowing needs.",
        img: img1, // Replace with actual image path or import
        link: "loanRecommendation",
      },
      {
        title: "Investment Insights",
        desc: "Receive personalized stock recommendations, market trend analysis, and portfolio diversification suggestions.",
        img: img2, // Replace with actual image path or import
        link: "investmentInsights",
      },
      {
        title: "Loan Eligibility Analysis",
        desc: "Quickly and accurately assess your eligibility for various loan options with our advanced tool.",
        img: img3, // Replace with actual image path or import
        link: "loanEligibility",
      },
    ],
  },
  "education": {
    title: "Education",
    desc: "Empower your learning journey with AI-driven educational tools.",
    cards: [
      {
        title: "Career Compass",
        desc: "Personalized career guidance to help individuals make informed decisions about their professional journey.",
        img: img1, // Replace with actual image path or import
        link: "careerCompass",
      },
      {
        title: "Career Advisor",
        desc: "Comprehensive career advice based on skills, interests, and market trends.",
        img: img2, // Replace with actual image path or import
        link: "careerAdvisor",
      },
    ],
  },
  "health-care": {
    title: "Health Care",
    desc: "AI solutions to enhance healthcare services and improve patient outcomes.",
    cards: [
      {
        title: "AI Doctor",
        desc: "Use AI to match symptoms with potential diagnoses, offering preliminary advice and reducing the burden on healthcare providers.",
        img: img1, // Replace with actual image path or import
        link: "aiDoctor",
      },
    ],
  },
  "investment&solutions": {
    title: "Investment & Funding Solutions",
    desc: "AI solutions to enhance healthcare services and improve patient outcomes.",
    cards: [
      {
        title: "Pitch Deck Analysis",
        desc: "Quickly and accurately assess your eligibility for various loan options with our advanced tool.",
        img: img3, 
        link: "pitchDeckAnalysis",
      },
    ],
  }
}