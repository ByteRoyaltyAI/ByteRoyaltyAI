import React from 'react';
import ProductForm from './ProductForm';
import ResumeForm from './ResumeForm';
import { useParams } from 'react-router-dom';

const DynamicInputComponents: React.FC = () => {
  const params = useParams<{ subProduct: string }>();

  return (
    <div>
      {
        params.subProduct === "resumeMatching" ||
        params.subProduct === "interviewGeneration" ? (
          <ResumeForm /> 
        ) : (
          params.subProduct && <ProductForm productName={params.subProduct} />
        )
      }
    </div>
  );
};

export default DynamicInputComponents;
