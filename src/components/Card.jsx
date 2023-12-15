import { Link, useParams } from "react-router-dom";

const Card = (props) => {
  //   const { id } = useParams();
  return (
    <>
      <div className="card w-3/12 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p className="text-sm text-slate-500">@{props.username}</p>
          <p className="font-bold">{props.email}</p>
          <div className="card-actions">
            <Link className="btn btn-primary" to={`/allPost/${props.id}`}>
              See Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
