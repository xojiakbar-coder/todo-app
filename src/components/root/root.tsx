import React from "react";
import mainPageData from "@/utils/main";

const Root = () => {
  return (
    <div className="w-full">
      {mainPageData.map(({ id, element }) => (
        <div key={id} className="text-white">
          <h1>{element}</h1>
        </div>
      ))}
    </div>
  );
};

export default Root;
