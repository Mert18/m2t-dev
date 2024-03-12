import React from "react";

interface IHeaderTwo {
  children: React.ReactNode;
}

const HeaderTwo = ({ children }: IHeaderTwo) => {
  return <div className="w-full my-2 text-lg font-bold">{children}</div>;
};

export default HeaderTwo;
