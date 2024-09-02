import React from "react";
import ProductForm from "./ProductForm";
import ResumeForm from "./ResumeForm";
import { useParams } from "react-router-dom";
import LoanEligibility from "./LoanEligibility";

const DynamicInputComponents: React.FC = () => {
  const { subProduct } = useParams<{ subProduct: string }>();

  return (
    <div>
      {subProduct === "resumeMatching" ||
      subProduct === "interviewGeneration" ? (
        <ResumeForm />
      ) : subProduct === "loanEligibility" ? (
        <LoanEligibility  />
      ) : (
        subProduct && <ProductForm productName={subProduct} />
      )}
    </div>
  );
};

export default DynamicInputComponents;
