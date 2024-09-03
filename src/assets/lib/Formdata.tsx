interface InputField {
  id: string;
  label: string;
  type: "number" | "text" | "boolean" | "checkbox" | "file";
  placeholder: string;
  options?: string[];
}

interface FormSection {
  title: string;
  endPoint: string;
  inputFields: InputField[];
}

export const formInputData: Record<string, FormSection> = {
  loanRecommendation: {
    title: "Loan Recommendation",
    endPoint: "loan_recommendations",
    inputFields: [
      {
        id: "annual_income",
        label: "Annual Income",
        type: "number",
        placeholder: "Enter your annual income",
      },
      {
        id: "credit_score",
        label: "Credit Score",
        type: "number",
        placeholder: "Enter your credit score",
      },
      {
        id: "existing_debt",
        label: "Existing Debt",
        type: "number",
        placeholder: "Enter your existing debt",
      },
      {
        id: "employment_status",
        label: "Employment Status",
        type: "text",
        placeholder: "Enter your employment status",
      },
      {
        id: "Profession",
        label: "Profession",
        type: "text",
        placeholder: "ex. Data Scientist",
      },
      {
        id: "Location",
        label: "Location",
        type: "text",
        placeholder: "Delhi, India",
      },
    ],
  },
  careerAdvice: {
    title: "Career Advice ",
    endPoint: "career_advice",
    inputFields: [
      {
        id: "Current_profession",
        label: "Current Profession",
        type: "text",
        placeholder: "Enter your current profession",
      },
      {
        id: "Yrs_Experience",
        label: "Years of Experience",
        type: "number",
        placeholder: "Enter your years of experience",
      },
      {
        id: "Location",
        label: "Location",
        type: "text",
        placeholder: "Enter your location",
      },
      {
        id: "Geographical",
        label: "Geographical Preferences",
        type: "text",
        placeholder: "Enter your geographical preferences",
      },
      {
        id: "Commitments",
        label: "Personal Commitments",
        type: "text",
        placeholder: "Enter your personal commitments",
      },
      {
        id: "Experienced_or_Fresher",
        label: "Experienced or Fresher",
        type: "text",
        placeholder: "Enter true for experienced, false for fresher",
      },
      {
        id: "Interests",
        label: "Interests",
        type: "text",
        placeholder: "Enter your interests",
      },
    ],
  },
  careerCompass: {
    title: "Career Guidance ",
    endPoint: "get_guidance",
    inputFields: [
      {
        id: "age",
        label: "Age",
        type: "number",
        placeholder: "Ex. 20",
      },
      {
        id: "interests",
        label: "interests",
        type: "text",
        placeholder: "Ex. Sceince and Technology",
      },
    ],
  },
  investmentInsights: {
    title: "Investment Insights",
    endPoint: "investment_insights",
    inputFields: [
      {
        id: "annual_income",
        label: "Annual Income",
        type: "number",
        placeholder: "Enter your annual income",
      },
      {
        id: "credit_score",
        label: "Credit Score",
        type: "number",
        placeholder: "Enter your credit score",
      },
      {
        id: "existing_debt",
        label: "Existing Debt",
        type: "number",
        placeholder: "Enter your existing debt",
      },
      {
        id: "employment_status",
        label: "Employment Status",
        type: "text",
        placeholder: "Enter your employment status",
      },
      {
        id: "other_relevant_info",
        label: "Other Relevant Information",
        type: "text",
        placeholder: "Enter other relevant info",
      },
      {
        id: "Country",
        label: "Country",
        type: "text",
        placeholder: "Enter your country",
      },
      {
        id: "City",
        label: "City",
        type: "text",
        placeholder: "Enter your City",
      },
    ],
  },
};
