import React, { useEffect, useState } from "react";
import Issues from "../Issues/Issues";
import axios from "axios";

const AllIssue = () => {
  const [allIssue, setAllIssue] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/issue")
      .then((res) => {
        setAllIssue(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="">
      <p className="lg:text-4xl text-sky-400 text-2xl font-bold text-center lg:py-10 py-4">
        All Issues are here
      </p>
      <div className="container px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto">
        {allIssue?.map((issue) => (
          <Issues key={issue._id} issue={issue}></Issues>
        ))}
      </div>
    </div>
  );
};

export default AllIssue;
