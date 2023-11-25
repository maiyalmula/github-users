import { useEffect, useState } from "react";

const Input = (props) => {
  const [tempSearch, setTempSearch] = useState(props.value);

  useEffect(() => {
    setTempSearch(props.value);
  }, [props.value]);

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
