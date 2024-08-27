interface servicesDataInterface {
  title: string;
  desc: string;
  serviceDesc: string[];
  features: string[];
  img: string;
  benifits: Array<{ emphasis: string; text: string }>;
}

export const data: { [key: string]: servicesDataInterface } = {
  "ai-consulting": {
    title: "AI Consultation",
    desc: "Encompasses building and maintaining websites, including front-end (user interface) and back-end (server-side) development.",
    serviceDesc: [
      "We offer Web Development Services to businesses of all sizes to give them a boost.",
      "Web development involves a range of tasks, it involves a range of tasks, including designing the user interface, developing the back-end functionality, and ensuring that the website or web app is responsive and user-friendly.",
      "Web development encompasses both the visual aspects of a website and its underlying technical infrastructure.",
    ],
    features: [
      "Front-end Development",
      "Back-end Development",
      "Content Management System (CMS) Integration",
      "E-commerce Features",
      "Responsive Design",
    ],
    img: "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6601698cb7dff0363a482d7d_Web%20Development%20Service-p-800.webp",
    benifits: [
      {
        emphasis: "Tailored to Specific Needs: ",
        text: "Custom software is designed to address your organization's unique requirements and challenges, ensuring a perfect fit for your operations.",
      },
      {
        emphasis: "Enhanced Efficiency: ",
        text: "Custom solutions streamline processes, automate tasks, and eliminate inefficiencies, boosting productivity and reducing manual work.",
      },
      {
        emphasis: "Tailored to Specific Needs: ",
        text: "Custom software is designed to address your organization's unique requirements and challenges, ensuring a perfect fit for your operations.",
      },
      {
        emphasis: "Tailored to Specific Needs: ",
        text: "Custom software is designed to address your organization's unique requirements and challenges, ensuring a perfect fit for your operations.",
      },
    ],
  },
  "data-science": {
    title: "Data Science",
    desc: "Encompasses building and maintaining websites, including front-end (user interface) and back-end (server-side) development.",
    serviceDesc: [
      "We offer Web Development Services to businesses of all sizes to give them a boost.",
      "Web development involves a range of tasks, it involves a range of tasks, including designing the user interface, developing the back-end functionality, and ensuring that the website or web app is responsive and user-friendly.",
      "Web development encompasses both the visual aspects of a website and its underlying technical infrastructure.",
    ],
    features: [
      "Front-end Development",
      "Back-end Development",
      "Content Management System (CMS) Integration",
      "E-commerce Features",
      "Responsive Design",
    ],
    img: "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6601698cb7dff0363a482d7d_Web%20Development%20Service-p-800.webp",
    benifits: [
      {
        emphasis: "Tailored to Specific Needs: ",
        text: "Custom software is designed to address your organization's unique requirements and challenges, ensuring a perfect fit for your operations.",
      },
      {
        emphasis: "Enhanced Efficiency: ",
        text: "Custom solutions streamline processes, automate tasks, and eliminate inefficiencies, boosting productivity and reducing manual work.",
      },
      {
        emphasis: "Tailored to Specific Needs: ",
        text: "Custom software is designed to address your organization's unique requirements and challenges, ensuring a perfect fit for your operations.",
      },
      {
        emphasis: "Tailored to Specific Needs: ",
        text: "Custom software is designed to address your organization's unique requirements and challenges, ensuring a perfect fit for your operations.",
      },
    ],
  },
};
