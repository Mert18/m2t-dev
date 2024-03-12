import React from "react";

interface IHeaderOne {
  children: React.ReactNode;
}

const HeaderOne = ({ children }: IHeaderOne) => {
  return (
    <div className="w-full my-2 text-xl font-bold">
      {children}
      <hr />
    </div>
  );
};

export default HeaderOne;
