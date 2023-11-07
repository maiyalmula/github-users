import { useEffect, useState } from "react";
import axios from "axios";

const Info = ({ selectUser }) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (selectUser) {
      axios
        .get(`https://api.github.com/users/${selectUser.login}`)
        .then((res) => {
          setUserDetails(res.data);
        });
    }
  }, [selectUser]);

  return (
    <div>
      <h2>Username</h2>
      {userDetails && (
        <div>
          <img src={userDetails.avatar_url} alt="" />
          <br />
          {userDetails.login}, followers: {userDetails.followers}
        </div>
      )}
    </div>
  );
};

export default Info;
