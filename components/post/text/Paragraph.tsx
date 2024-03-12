import React from 'react'

interface IParagraph {
    children: React.ReactNode;
  }

const Paragraph = ({ children }: IParagraph) => {
    return (
      <div className="w-full my-4">
        {children}
      </div>
    );
  };
  
  export default Paragraph;
  