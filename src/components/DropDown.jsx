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
    <div className="w-[75px] h-[23px] flex justify-center items-center rounded-[15px] bg-[#ffffff] shadow-lg">
      <select
        onChange={(e) => setOptions(e.target.value)}
        className=" w-fit h-[11px] flex justify-center items-center font-montserrat text-[8px] rounded-lg bg-white text-black"
      >
        {values.map((opts, i) => (
          <option key={i} className="text-black">
            {" "}
            {props.name}
          </option>
        ))}
      </select>

      {/* // add some api endpoints  */}
      {/* <h1 className="text-black">{options} </h1> */}
    </div>
  );
};

export default DropDown;
