import { useEffect, useState } from "react";

const List = ({ users, setSelectUser, selectUser }) => {
  useEffect(() => {
    if (selectUser) {
      document.title = selectUser.login;
    }
  }, [selectUser]);
  return (
    <ul>
      {users.map((u) => (
        <li
          key={u.id}
          className={selectUser === u ? "selected" : ""}
          onClick={() => {
            setSelectUser(u);
          }}
        >
          {u.login}
        </li>
      ))}
    </ul>
  );
};

export default List;
