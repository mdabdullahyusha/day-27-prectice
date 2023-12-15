import { useEffect, useState } from "react";
import Card from "../components/Card";
const AllPost = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-6 w-4/5 mx-auto">
        {post.map((u) => (
          <Card
            key={u.id}
            name={u.name}
            username={u.username}
            email={u.email}
            id={u.id}
          />
        ))}
      </div>
    </>
  );
};

export default AllPost;
