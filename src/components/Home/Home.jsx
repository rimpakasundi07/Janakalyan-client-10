import React from "react";
import BannerSlider from "./BannerSlider";
import IssueCategories from "./IssueCategories";
import RecentComplaints from "./RecentComplaints";

const RecentComplaintsPromise = fetch(
  "http://localhost:3000/latest-issue"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <BannerSlider></BannerSlider>
      <IssueCategories></IssueCategories>
      <RecentComplaints
        RecentComplaintsPromise={RecentComplaintsPromise}
      ></RecentComplaints>
    </div>
  );
};

export default Home;
