import React from 'react'

interface IParagraph {
    children: React.ReactNode;
  }

const Paragraph = ({ children }: IParagraph) => {
    return (
      <div className="w-[98%] my-4">
        {children}
      </div>
    );
  };
  
  export default Paragraph;
  