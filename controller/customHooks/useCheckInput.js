import React from "react";

const useCheckInput = (value) => {
  const valueArr = [...value];
  if (valueArr.length > 15) {
    valueArr.splice(15, valueArr.length - 1);
  }
  const result = valueArr.filter((char) => {
    let val = char.charCodeAt(0);
    console.log(val);

    return (val >= 65 && val <= 90) || (val >= 97 && val <= 122) || val === 32 || val === 45 || val === 95;
  });

  if (result && result.length > 0) {
    return result.join("");
  } else {
    return "";
  }
};

export default useCheckInput;
