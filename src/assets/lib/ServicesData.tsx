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
};
