import { useEffect, useState } from "react";
import "./styles.css";
import Input from "./components/Input/Input";
import List from "./components/List/List";
import Info from "./components/Info/Info";
import axios from "axios";
import Timer from "./components/Timer/Timer";

function App() {
  const [selectUser, setSelectUser] = useState(null);

  const [searchTerm, setSearchTerm] = useState("it-kamasutra");

  useEffect(() => {
    if (selectUser) {
      document.title = selectUser.login;
    }
  }, [selectUser]);

  return (
    <div className="app">
      <div>
        <Input
          value={searchTerm}
          onSubmit={(value) => {
            setSearchTerm(value);
          }}
        />
        <button onClick={() => setSearchTerm("maiyalmula")}>reset</button>
        <List
          term={searchTerm}
          selectUser={selectUser}
          onUserSelect={(user) => {
            setSelectUser(user);
          }}
        />
        <Info user={selectUser} />
      </div>
    </div>
  );
}

export default App;
