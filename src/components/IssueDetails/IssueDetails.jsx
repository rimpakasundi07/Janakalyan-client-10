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

        <dialog
          ref={issueModalRef}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold lg:text-3xl text-center text-sky-400 text-lg">
              Pay Clean-Up Contribution!
            </h3>

            {/* form should NOT be inside modal-action */}
            <form
              onSubmit={handleIssueSubmit}
              method="dialog"
              className="space-y-3"
            >
              {/* Title */}
              <div>
                <label className="block text-sm mb-1">Title</label>
                <input
                  name="title"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>

              {/* Category + Amount */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Category</label>
                  <select
                    name="category"
                    className="w-full border rounded-md px-3 py-2 text-sm"
                  >
                    <option value="">Select a category</option>
                    <option value="garbage">Garbage</option>
                    <option value="road">Road</option>
                    <option value="water">Water</option>
                    <option value="Broken Property">Broken Property</option>
                    <option value="Illegal Construction">
                      Illegal Construction
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-1">Amount</label>
                  <input
                    name="amount"
                    placeholder="Amount"
                    className="w-full border rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>

              {/* Contributor */}
              <div>
                <label className="block text-sm mb-1">Contributor name</label>
                <input
                  name="contributor"
                  placeholder="Contributor Name"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  name="email"
                  className="w-full border rounded-md px-3 py-2 text-sm bg-gray-50"
                />
              </div>

              {/* Phone + Address */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Phone no</label>
                  <input
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full border rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Address</label>
                  <input
                    name="address"
                    placeholder="Address"
                    className="w-full border rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>

              {/* Additional Info */}
              <div>
                <label className="block text-sm mb-1">Additional info</label>
                <textarea
                  name="info"
                  placeholder="Additional info"
                  rows={3}
                  className="w-full border rounded-md px-3 py-2 text-sm resize-none"
                />
              </div>

              {/* Buttons → Only here modal-action */}
              <div className="modal-action flex justify-center">
                <button
                  type="button"
                  onClick={() => issueModalRef.current.close()}
                  className="px-6 py-2 rounded-full border border-sky-300 text-sky-500"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-sky-400 text-white font-semibold shadow-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </dialog>

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
