import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

// const getCurrentPageFromUrl = (value) => {
//   value = Number(value);
//   if (typeof value === "number" && value <= 0) {
//     value = 1;
//   }
//   if (!value) {
//     value = 1;
//   }
//   return value;
// };

// on component load i want a list of user in this page.

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  // const initialPage = getCurrentPageFromUrl(searchParams.get("page"));
  const [page, setPage] = useState(1);
  const [text , setText] = useState();

  // const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    getData(`https://reqres.in/api/users?page=${page}`).then((res) => {
      setData(res);
    });
  }, [page]);

  // if (true) {
  //   return <Navigate to="/" />;

  // }

  useEffect(() => {
    setSearchParams({ page , text });
  }, [page , text]);

  return (
    <>
      <h1>Users</h1>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>


      <button onClick={() => navigate("/")}>go to home page by Navigate</button>
      <Link to="/">
        <button>go to home page by link</button>
      </Link>
      <div>
        {data &&
          data.data &&
          data?.data?.map((user) => (
            <div
              key={user.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={user.avatar} alt="prof-pic" />
              <Link to={`/users/${user.id}`}>More details</Link>
            </div>
          ))}
      </div>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        prev
      </button>
      <button>{page}</button>
      <button disabled={page === 2} onClick={() => setPage(page + 1)}>
        next
      </button>
    </>
  );
}

export default Users;
