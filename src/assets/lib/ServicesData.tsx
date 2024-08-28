interface servicesDataInterface {
  title: string;
  desc: string;
  serviceDesc: string[];
  features: string[];
  img: string;
  benifitsHeader:string,
  benifits: Array<{ emphasis: string; text: string }>;
}

export const data: { [key: string]: servicesDataInterface } = {
  "ai-consulting": {
    title: "AI Consultation",
    desc: "Reveal hidden growth with Cutting-Edge AI Solutions",
    serviceDesc: [
      "Artificial Intelligence is revolutionizing how businesses operate, with 73% of companies already using AI to enhance efficiency and drive growth. If your business hasn’t yet tapped into the power of AI, now is the time.  ",
    ],
    features: [
      "AI Strategy Development",
      "AI Model Development and Optimization",
      "AI Training and Education",
      "AI Ethics and Compliance Consulting",
      "AI Innovation and R&D",
    ],
    img: "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6601698cb7dff0363a482d7d_Web%20Development%20Service-p-800.webp",
    benifitsHeader:"AI Consulting: A Game-Changer",
    benifits: [
      {
        emphasis: "Maximize ROI: ",
        text: "Boost Efficiency and Returns with Tailored AI Solutions. Companies using AI see up to 30% higher ROI.",
      },
      {
        emphasis: "Stay Ahead of the Curve: ",
        text: "Gain a Competitive Edge with Advanced AI. 84% of industry leaders use AI to stay ahead. ",
      },
      {
        emphasis: "Precision-Engineered Solutions: ",
        text: "Achieve 25% Greater Accuracy with Custom AI. Unlock Impact with Custom AI Models for Precision Results.",
      },
      {
        emphasis: "Outpace Competitors: ",
        text: "Harness AI to Lead the Market 70% of businesses use AI to gain a competitive edge.",
      },
      {
        emphasis: "Drive Innovation and R&D: ",
        text: "Lead with Cutting-Edge AI Solutions. Stay ahead in tech with AI R&D. ",
      },
      {
        emphasis: "Unlock Growth Opportunities: ",
        text: "Transform Your Business Potential. Reveal hidden growth with a tailored AI strategy. ",
      },
    ],
  },
  "data-science": {
    title: "Data Science",
    desc: "Reveal hidden growth with Cutting-Edge AI Solutions",
    serviceDesc: [
      "Artificial Intelligence is revolutionizing how businesses operate, with 73% of companies already using AI to enhance efficiency and drive growth. If your business hasn’t yet tapped into the power of AI, now is the time.  ",
    ],
    features: [
      "AI Strategy Development",
      "AI Model Development and Optimization",
      "AI Training and Education",
      "AI Ethics and Compliance Consulting",
      "AI Innovation and R&D",
    ],
    img: "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6601698cb7dff0363a482d7d_Web%20Development%20Service-p-800.webp",
    benifitsHeader:"AI Consulting: A Game-Changer",
    benifits: [
      {
        emphasis: "Maximize ROI: ",
        text: "Boost Efficiency and Returns with Tailored AI Solutions. Companies using AI see up to 30% higher ROI.",
      },
      {
        emphasis: "Stay Ahead of the Curve: ",
        text: "Gain a Competitive Edge with Advanced AI. 84% of industry leaders use AI to stay ahead. ",
      },
      {
        emphasis: "Precision-Engineered Solutions: ",
        text: "Achieve 25% Greater Accuracy with Custom AI. Unlock Impact with Custom AI Models for Precision Results.",
      },
      {
        emphasis: "Outpace Competitors: ",
        text: "Harness AI to Lead the Market 70% of businesses use AI to gain a competitive edge.",
      },
      {
        emphasis: "Drive Innovation and R&D: ",
        text: "Lead with Cutting-Edge AI Solutions. Stay ahead in tech with AI R&D. ",
      },
      {
        emphasis: "Unlock Growth Opportunities: ",
        text: "Transform Your Business Potential. Reveal hidden growth with a tailored AI strategy. ",
      },
    ],
  },
  "data-analytics": {
    "title": "Data Analytics",
    "desc": "Unleash the Power of Data to Drive Smart Business Decisions",
    "serviceDesc": [
      "Data is the new oil, and businesses that harness its power gain a significant edge. With 85% of companies investing in data analytics to stay competitive, the time to leverage your data is now."
    ],
    "features": [
      "Data Strategy Development",
      "Data Collection and Integration",
      "Data Visualization and Reporting",
      "Advanced Data Analytics and Machine Learning",
      "Predictive Analytics and Forecasting"
    ],
    "img": "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6601698cb7dff0363a482d7d_Web%20Development%20Service-p-800.webp",
    "benifitsHeader": "Data Analytics: The Key to Informed Decision-Making",
    "benifits": [
      {
        "emphasis": "Data-Driven Insights: ",
        "text": "Make Smarter Decisions with Real-Time Data. 90% of leading businesses prioritize data-driven strategies."
      },
      {
        "emphasis": "Boost Efficiency: ",
        "text": "Optimize Operations with Actionable Analytics. Companies using data analytics see a 15% increase in efficiency."
      },
      {
        "emphasis": "Enhance Customer Experience: ",
        "text": "Tailor Solutions with Customer-Centric Data. 80% of companies using data analytics report improved customer satisfaction."
      },
      {
        "emphasis": "Competitive Advantage: ",
        "text": "Outmaneuver Rivals with Predictive Analytics. 75% of businesses gain a competitive edge with advanced data analysis."
      },
      {
        "emphasis": "Innovative Growth: ",
        "text": "Unlock New Opportunities with Predictive Data. Use analytics to discover untapped markets and drive growth."
      },
      {
        "emphasis": "Improve Forecast Accuracy: ",
        "text": "Predict Market Trends with Precision. Achieve 20% better forecasting accuracy using advanced analytics."
      }
    ]
  },
  "chatbot-development": {
    "title": "Chatbot Development",
    "desc": "Revolutionize Customer Interaction with Intelligent Chatbots",
    "serviceDesc": [
      "In the era of instant communication, chatbots have become essential for businesses looking to enhance customer service and engagement. With 67% of consumers worldwide having used a chatbot for customer support, it's time to integrate this technology into your business."
    ],
    "features": [
      "Custom Chatbot Design",
      "Natural Language Processing (NLP)",
      "AI-Powered Conversational Interfaces",
      "Multi-Platform Integration",
      "Continuous Learning and Improvement"
    ],
    "img": "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6601698cb7dff0363a482d7d_Web%20Development%20Service-p-800.webp",
    "benifitsHeader": "Chatbot Development: Elevate Customer Experience",
    "benifits": [
      {
        "emphasis": "24/7 Customer Support: ",
        "text": "Provide Round-the-Clock Assistance. Businesses using chatbots see a 30% reduction in response times."
      },
      {
        "emphasis": "Enhance User Engagement: ",
        "text": "Boost Interaction and Satisfaction. Chatbots increase customer engagement by 25%."
      },
      {
        "emphasis": "Cost Efficiency: ",
        "text": "Reduce Operational Costs with Automated Support. Save up to 30% on customer service expenses using chatbots."
      },
      {
        "emphasis": "Personalized Experiences: ",
        "text": "Deliver Tailored Responses with AI. 80% of consumers are more likely to buy when offered a personalized experience."
      },
      {
        "emphasis": "Scalability: ",
        "text": "Handle Growing Customer Demand Seamlessly. Scale your support without increasing costs."
      },
      {
        "emphasis": "Data-Driven Insights: ",
        "text": "Gain Valuable Customer Insights. Use chatbot interactions to gather data and improve your offerings."
      }
    ]
  },
  "machine-learning": {
    "title": "Machine Learning",
    "desc": "Empower Your Business with Predictive and Adaptive Machine Learning Solutions",
    "serviceDesc": [
      "Machine Learning is transforming industries by enabling businesses to predict outcomes, automate processes, and personalize customer experiences. With 83% of companies reporting a significant ROI from machine learning, now is the time to leverage this powerful technology."
    ],
    "features": [
      "Custom Machine Learning Model Development",
      "Predictive Analytics",
      "Automation and Optimization",
      "Machine Learning Integration with Existing Systems",
      "Continuous Model Training and Improvement"
    ],
    "img": "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6601698cb7dff0363a482d7d_Web%20Development%20Service-p-800.webp",
    "benifitsHeader": "Machine Learning: The Future of Intelligent Business",
    "benifits": [
      {
        "emphasis": "Predictive Power: ",
        "text": "Make Data-Driven Decisions with Confidence. Companies using machine learning achieve up to 40% more accurate predictions."
      },
      {
        "emphasis": "Automate Processes: ",
        "text": "Boost Efficiency with Intelligent Automation. Businesses see a 20% reduction in operational costs through machine learning."
      },
      {
        "emphasis": "Personalized Customer Experience: ",
        "text": "Deliver Tailored Solutions with Adaptive Models. 75% of companies use machine learning to enhance customer personalization."
      },
      {
        "emphasis": "Scalable Solutions: ",
        "text": "Grow Your Business with Scalable ML Models. Easily scale machine learning applications as your business expands."
      },
      {
        "emphasis": "Innovation and R&D: ",
        "text": "Drive Innovation with Advanced Machine Learning Techniques. Stay ahead with continuous research and development."
      },
      {
        "emphasis": "Real-Time Insights: ",
        "text": "Gain Immediate Insights for Better Decision-Making. Leverage real-time data to stay competitive and responsive."
      }
    ]
  },
  "natural-language-processing": {
    "title": "Natural Language Processing",
    "desc": "Unlock the Power of Language with Advanced NLP Solutions",
    "serviceDesc": [
      "Natural Language Processing (NLP) is revolutionizing the way businesses interact with text and speech data, enabling deeper insights and more intuitive interactions. With 80% of enterprises expected to use NLP to enhance their services, now is the time to integrate this technology into your operations."
    ],
    "features": [
      "Text and Sentiment Analysis",
      "Speech Recognition and Processing",
      "Language Translation and Localization",
      "Chatbot and Voice Assistant Integration",
      "Advanced NLP Model Development"
    ],
    "img": "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6601698cb7dff0363a482d7d_Web%20Development%20Service-p-800.webp",
    "benifitsHeader": "Natural Language Processing: Enhance Understanding and Communication",
    "benifits": [
      {
        "emphasis": "Enhanced Customer Interaction: ",
        "text": "Improve Communication with AI-Powered NLP. 72% of businesses report better customer satisfaction using NLP."
      },
      {
        "emphasis": "Deeper Insights: ",
        "text": "Extract Meaningful Insights from Text Data. Companies using NLP achieve 35% more accurate sentiment analysis."
      },
      {
        "emphasis": "Automate Language Processing: ",
        "text": "Streamline Operations with Automated NLP Solutions. Reduce manual processing time by 25% with NLP automation."
      },
      {
        "emphasis": "Multilingual Capabilities: ",
        "text": "Expand Your Reach with Language Translation. 68% of global businesses use NLP for better localization and outreach."
      },
      {
        "emphasis": "Innovative Interaction: ",
        "text": "Lead the Market with Voice and Chatbot Integration. 70% of companies see increased engagement through NLP-driven interfaces."
      },
      {
        "emphasis": "Real-Time Language Processing: ",
        "text": "Respond Faster with Real-Time NLP. Enhance customer interactions and decision-making with immediate language analysis."
      }
    ]
  }
  
};
