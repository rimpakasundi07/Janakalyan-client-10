import React, { use } from "react";
import Issues from "../Issues/Issues";

const RecentComplaints = ({ RecentComplaintsPromise }) => {
  const issues = use(RecentComplaintsPromise);
  console.log(issues);
  return (
    <div className=" lg:m-8">
      <p className="lg:text-4xl text-center text-xl lg:py-8 font-bold  text-sky-400">
        Recent Complaints
      </p>
      <div className=" container  px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto">
        {issues.map((issue) => (
          <Issues key={issue._id} issue={issue}></Issues>
        ))}
      </div>
    </div>
  );
};

export default RecentComplaints;
