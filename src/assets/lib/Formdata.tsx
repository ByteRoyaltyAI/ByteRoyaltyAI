
interface InputField {
    id: string;
    label: string;
    type: 'number' | 'text'; 
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
        endPoint: "loan_recommendation",
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
};
