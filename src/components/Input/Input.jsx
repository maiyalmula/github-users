import { useEffect, useState } from "react";
import axios from "axios";

const Input = (props) => {
  const [tempSearch, setTempSearch] = useState("it-kamasutra");

  return (
    <div>
      <input
        type="text"
        placeholder="Type users..."
        value={tempSearch}
        onChange={(e) => {
          setTempSearch(e.currentTarget.value);
        }}
      />
      <button onClick={() => props.onSubmit(tempSearch)}>find</button>
    </div>
  );
};

export default Input;
