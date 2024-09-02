import React from "react";
import ProductForm from "./ProductForm";
import ResumeForm from "./ResumeForm";
import { useParams } from "react-router-dom";
import LoanEligibility from "./LoanEligibility";
import PitchDeck from "./PitchDeck";

const DynamicInputComponents: React.FC = () => {
  const { subProduct } = useParams<{ subProduct: string }>();

  return (
    <div>
      {subProduct === "resumeMatching" ||
      subProduct === "interviewGeneration" ? (
        <ResumeForm />
      ) : subProduct === "pitchDeckAnalysis" ? (
        <PitchDeck/>
      ) : subProduct === "loanEligibility" ? (
        <LoanEligibility  />
      ) : (
        subProduct && <ProductForm productName={subProduct} />
      )}
    </div>
  );
};

export default DynamicInputComponents;
