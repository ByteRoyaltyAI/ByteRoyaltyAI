import React from "react";
import ProductForm from "./ProductForm";
import ResumeForm from "./ResumeForm";
import { useParams } from "react-router-dom";
import LoanEligibility from "./LoanEligibility";
import PitchDeckEvaluator from "./PitchDeckEvaluator";
import PitchDeckSummarizer from "./PitchDeckSummarizer";

const DynamicInputComponents: React.FC = () => {
  const { subProduct } = useParams<{ subProduct: string }>();

  return (
    <div>
      {subProduct === "resumeMatching" ||
      subProduct === "interviewGeneration" ? (
        <ResumeForm />
      ) : subProduct === "pitchDeckAnalysis" ? (
        <PitchDeckEvaluator/>
      ) : subProduct === "PitchDeckSummarizer" ? (
        <PitchDeckSummarizer/>
      ) : subProduct === "pitchDeckAnalysis" ? (
        <LoanEligibility  />
      ) : (
        subProduct && <ProductForm productName={subProduct} />
      )}
    </div>
  );
};

export default DynamicInputComponents;
