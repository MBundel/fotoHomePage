import React, { useEffect } from "react";
import { useState } from "react";

// DATA

//CSS
import "../../styles/filterbar.css";
// Interface TS
interface Filter {
  filteredTags: any;
  sendFilteredValues: any
}
//function
function FilterCheckboxBar(props: Filter) {
// useState  
  const [values, setValues] = useState<any>(
    // break down tags to obj and state {tag: true}
    props.filteredTags.reduce((a: any, c: any) => ((a[c] = true), a), {})
  );

  //  ----- Handle Checkbox-----
  const handleChange = (e: any) => {
    setValues((prevState: any) => {
      const { name } = e.target;
      return {
        ...prevState,
        [name]: !prevState[name],
      };
    });
    
  };
  //update data by clicking Checkbox
  useEffect(() => {
    props.sendFilteredValues(values);
  }, [values]);

  //HTML Code
  return (
    <div className="filterbar">

      {Object.keys(values).map((list: any, i: any) => (
        <label key={i} htmlFor={list}>
          <input
            className="checkbox"
            type="checkbox"
            name={list}
            id={list}
            onChange={(e) => handleChange(e)}
            checked={values[list]}
          />
          {list}
        </label>
      ))}
    </div>
  );
}

export default FilterCheckboxBar;
