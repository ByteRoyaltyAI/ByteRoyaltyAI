// GlassmorphismWrapper.tsx
import React, { ReactNode } from 'react';
import './GlassmorphismWrapper.css';

interface GlassmorphismWrapperProps {
  children: ReactNode;
}

const GlassmorphismWrapper: React.FC<GlassmorphismWrapperProps> = ({ children }) => {
  return <div className="glassmorphism">{children}</div>;
};

export default GlassmorphismWrapper;
