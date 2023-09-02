import React, { useEffect, useState } from "react";
import "../App.css";
// import "../Style/global.css";

const DropDown = (props) => {
  const [values, setValues] = useState([]);
  const [options, setOptions] = useState();

  useEffect(() => {
    // demo api
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((val) => setValues(val));
    //   setOptions(data[0].name)
  }, []);

  console.log(values, "values");
  return (
    <div className="w-[100%] flex justify-center items-center ">
      <div className=" flex ">
        <select
          onChange={(e) => setOptions(e.target.value)}
          className="bg-white border-[#000] border-none shadow-2xl h-16 w-28 rounded-[50px] text-xl font-bold small"
        >
          {values.map((opts, i) => (
            <option key={i} className="text-center">
              {props.name}
            </option>
          ))}
        </select>

        {/* // add some api endpoints  */}
        {/* <h1 className="text-black">{options} </h1> */}
      </div>
    </div>
  );
};

export default DropDown;
