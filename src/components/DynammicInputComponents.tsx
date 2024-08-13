import React from 'react';
import ProductForm from './ProductForm';
import ResumeJobMatcher from './ResumeMatcher';
import { useParams } from 'react-router-dom';

const DynamicInputComponents: React.FC = () => {
  const params = useParams<{ subProduct: string }>();

  return (
    <div>
      {
        params.subProduct === "resumeMatching" ? (
          <ResumeJobMatcher />
        ) : (
          params.subProduct && <ProductForm productName={params.subProduct} />
        )
      }
    </div>
  );
};

export default DynamicInputComponents;
