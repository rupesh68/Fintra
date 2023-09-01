import React, { useEffect, useState } from "react";
import '../App.css'

const DropDown = () => {
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
    <div className=''>
    <div className=" flex" >
      <select
        onChange={(e) => setOptions(e.target.value)}
        className="  small">
        {values.map((opts, i) => (
          
          <option key={i} className="text-center">
            {opts.name}
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
