import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();

  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((result) => result.json())
      .then((data) => setPost(data));
  }, []);
  //   console.log(post);
  return (
    <>
      <div className="w-4/5 mx-auto">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{post.name}</h2>
            <h5 className="badge badge-primary">@{post.username}</h5>
            <h5 className="text-sm text-slate-500">
              Address: {post?.address?.suite}, {post?.address?.street},{" "}
              {post?.address?.city}, {post?.address?.zipcode}
            </h5>
            <h5>Email: {post.email}</h5>
            <h5>Phone: {post.phone}</h5>
            <h5>Website: {post.website}</h5>
            <h5>
              Company Name: {post?.company?.name} ({post?.company?.catchPhrase})
            </h5>
            <p></p>
            <div className="card-actions justify-end">
              <Link className="btn btn-primary" to="/allPost">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
