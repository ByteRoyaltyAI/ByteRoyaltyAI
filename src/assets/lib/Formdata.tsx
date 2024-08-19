
interface InputField {
    id: string;
    label: string;
    type: 'number' | 'text' | "boolean"; 
    placeholder: string;
}


interface FormSection {
    title: string;
    endPoint: string;
    inputFields: InputField[]; 
}


export const formInputData: Record<string, FormSection> = {
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
    loanEligibility: {
        title: "Loan Eligibilty Assesment",
        endPoint: "assess_eligibility",
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
                id: "required_income",
                label: "Required Income",
                type: "number",
                placeholder: "ex. 60,000",
            },
            {
                id: "minimum_credit_score",
                label: "Minimum Credit Score",
                type: "number",
                placeholder: "ex. 30,000",
            },
            {
                id: "max_debt_income_ratio",
                label: "Max Debt Income Ratio",
                type: "number",
                placeholder: "ex. 30,000",
            },
            {
                id: "reqd_employment_status",
                label: "Required Employment Status",
                type: "text",
                placeholder: "ex. employed",
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
    }
    
};
