import { useEffect, useState } from "react";
import axios from "axios";

const List = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/search/users?q=${props.term}`)
      .then((res) => {
        setUsers(res.data.items);
      });
  }, [props.term]);

  return (
    <ul>
      {users.map((u) => (
        <li
          key={u.id}
          className={props.selectUser === u ? "selected" : ""}
          onClick={() => {
            props.onUserSelect(u);
          }}
        >
          {u.login}
        </li>
      ))}
    </ul>
  );
};

export default List;
