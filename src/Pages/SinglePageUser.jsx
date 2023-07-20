import React from "react";
import { useParams , Link } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

function SinglePageUser() {
  // write key here for the destructuring...first console the params and cheak the key.
  const { id } = useParams();
  const [userDetails, setUserDetails] = React.useState({});

  React.useEffect(() => {
     getData(`https://reqres.in/api/users/${id}`).then((res) =>
      setUserDetails(res.data)
    );
  }, [id]);

  // console.log(userDetails)

  return <>
      <img src={userDetails.avatar} alt="profile_pic" />
      <p>Name:{userDetails.first_name} {userDetails.last_name}</p>
      <p>Email:{userDetails.email}</p>
      <Link to="/users">Go Back</Link>
  </>;
}

export default SinglePageUser;
