import { useRef } from "react";
import { useLoaderData } from "react-router";

export default function IssueDetails() {
  const issue = useLoaderData();
  const issueModalRef = useRef(null);

  const handleModalOpen = () => {
    issueModalRef.current.showModal();
  };

  const handleIssueSubmit = (e) => {
    e.preventDefault();
  };

  console.log(issue);
  const { title, description, image, category, location, amount, date } = issue;
  return (
    <div className="max-w-3xl mx-auto bg-white lg:my-24 my-7 rounded-3xl shadow-lg overflow-hidden border-3 border-sky-200">
      {/* Image */}
      <div className="h-64 w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt="Garbage Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="lg:text-4xl text-xl font-bold text-center text-blue-900">
          {/* {title} */}
          {title}
        </h2>

        {/* Category + Location */}
        <div className="flex items-center gap-3 justify-between  text-gray-600 lg:pt-4 pt-2 ">
          <span className="flex items-center font-semibold gap-1">
            {category}
          </span>
          <span className="flex items-center text-green-600  font-semibold gap-1">
            📍{location}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 pt-2 lg:pt-5">{description}</p>

        {/* Cost + Date */}
        <div className=" mt-5 p-4 rounded-xl flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-800">
            <span className="font-semibold">Estimated Cost:</span>{" "}
            <span className="text-green-500 font-semibold">{amount}</span>
          </p>
          <p className="text-gray-800 font-bold text-sm">
            Reported on: <span className="font-semibold">{date}</span>{" "}
          </p>
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}

        {/* Button */}
        <button
          onClick={handleModalOpen}
          className="w-full bg-sky-400 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold mt-6"
        >
          Pay Clean-Up Contribution
        </button>
      </div>
    </div>
  );
}
