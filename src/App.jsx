import { useEffect, useState } from "react";
import "./styles.css";
import Input from "./components/Input/Input";
import List from "./components/List/List";
import Info from "./components/Info/Info";
import axios from "axios";

function App() {
  const [selectUser, setSelectUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("it-kamasutra");

  useEffect(() => {
    axios
      .get(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((res) => {
        setUsers(res.data.items);
      });
  }, [searchTerm]);

  return (
    <div className="app">
      <div>
        <Input
          setUsers={setUsers}
          value={""}
          onSubmit={(value) => {
            setSearchTerm(value);
          }}
        />
        <List
          users={users}
          setSelectUser={setSelectUser}
          selectUser={selectUser}
        />
        <Info selectUser={selectUser} />
      </div>
    </div>
  );
}

export default App;
