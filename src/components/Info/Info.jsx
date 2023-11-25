import { useEffect, useState } from "react";
import axios from "axios";
import Timer from "../Timer/Timer";

const Info = (props) => {
  const [userDetails, setUserDetails] = useState(null);
  const [seconds, setSeconds] = useState(10);
  useEffect(() => {
    if (props.user) {
      axios
        .get(`https://api.github.com/users/${props.user.login}`)
        .then((res) => {
          setUserDetails(res.data);
        });
    }
  }, [props.user]);

  return (
    <div>
      <h2>Username</h2>

      {userDetails && (
        <div>
          <Timer
            seconds={seconds}
            onChange={(actualSeconds) => {
              setSeconds(actualSeconds);
            }}
          />
          <img src={userDetails.avatar_url} alt="" />
          <br />
          {userDetails.login}, followers: {userDetails.followers}
        </div>
      )}
    </div>
  );
};

export default Info;
