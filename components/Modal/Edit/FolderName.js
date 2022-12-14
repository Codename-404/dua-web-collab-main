import React from "react";
import useCheckInput from "../../../controller/customHooks/useCheckInput";

function FolderName() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <label className="block">
        <div className="mb-5">
          <span className="block font-inter font-medium text-base text-title mb-3 text-left ">Plan Name</span>

          <input
            className="w-full h-12 px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 
            focus:ring- dark:border-none dark:bg-[#223449] dark:placeholder:text-[#fff]  "
            type="text"
            name="folder"
            placeholder="Title Name"
            onChange={(e) => {
              setValue(useCheckInput(e.target.value));
            }}
            value={value}
          />
        </div>
      </label>
      <label className="block">
        <div className="mb-5">
          <span className="block font-inter font-medium text-base text-title mb-3 text-left ">Estimated Days</span>

          <input
            className="w-full h-12 px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 
            focus:ring- dark:border-none dark:bg-[#223449] dark:placeholder:text-[#fff]  "
            type="text"
            name="folder"
            placeholder="Input approximate date here"
          />
        </div>
      </label>
    </>
  );
}

export default FolderName;
