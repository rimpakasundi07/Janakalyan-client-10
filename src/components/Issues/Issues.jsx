import React from "react";
import { Link } from "react-router";

const Issues = ({ issue }) => {
  const { _id, title, description, image, category, location } = issue;
  return (
    <div className="shadow-2xl border  border-sky-400 p-2 hover:border-3 hover:border-dashed hover:border-sky-400 rounded-2xl">
      <div className="card ">
        <figure className="lg:px-10 px-5 pt-5 lg:pt-10">
          <img src={image} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title lg:py-5 hover:text-sky-400">{title}</h2>
          <p>
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
          <div className="flex items-center justify-between lg:py-5 lg:gap-x-28">
            <p className="font-bold">
              Category: <span className="font-semibold">{category}</span>{" "}
            </p>
            <p className="font-bold">
              Location: <span className="font-semibold">{location}</span>{" "}
            </p>
          </div>
          <div className="card-actions">
            <Link
              to={`/issueDetails/${_id}`}
              className="btn bg-sky-400 w-[500px] text-white hover:bg-sky-600"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issues;
