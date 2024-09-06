import React from "react";
import mainPageData from "@/utils/main";

const Root = () => {
  return (
    <div className="w-full">
      {mainPageData.map(({ id, element }) => {
        const Element = element;
        return typeof element === "string" ? (
          <div key={id} className="text-white">
            <h1>{element}</h1>
          </div>
        ) : (
          <Element key={id} />
        );
      })}
    </div>
  );
};

export default Root;
