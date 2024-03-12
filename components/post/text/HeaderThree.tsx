import React from "react";

interface IHeaderThree {
  children: React.ReactNode;
}

const HeaderThree = ({ children }: IHeaderThree) => {
  return (
    <div className="w-full my-2 text-base font-bold">
      {children}
      <hr />
    </div>
  );
};

export default HeaderThree;
