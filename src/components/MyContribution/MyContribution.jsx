import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const MyContribution = () => {
  const { user } = useContext(AuthContext);
  const [contribution, setContributions] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/myContribution?email=${user.email}`)
      .then((res) => {
        setContributions(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="lg:pb-20 lg:pt-5 py-6">
      <h2 className="text-sky-400 py-3 lg:text-4xl text-center text-xl font-bold">
        My Contribution Page
      </h2>
      <div className="w-full">
        <div className="container  mx-auto bg-white/60 backdrop-blur-sm rounded-2xl shadow-md p-4 md:p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y align-middle">
              <thead>
                <tr className="bg-gray-50 ">
                  <th className="text-center text-xs md:text-sm uppercase tracking-wider py-3 px-4 text-gray-600">
                    SL No.
                  </th>

                  <th className="text-center text-xs md:text-sm uppercase tracking-wider py-3 px-4 text-gray-600">
                    Title
                  </th>

                  <th className="text-center text-xs md:text-sm uppercase tracking-wider py-3 px-4 text-gray-600">
                    Email
                  </th>
                  <th className="text-center text-xs md:text-sm uppercase tracking-wider py-3 px-4 text-gray-600">
                    Category
                  </th>
                  <th className="text-center text-xs md:text-sm uppercase tracking-wider py-3 px-4 text-gray-600">
                    Amount
                  </th>
                  <th className="text-center text-xs md:text-sm uppercase tracking-wider py-3 px-4 text-gray-600">
                    Date
                  </th>

                  <th className="text-center text-xs md:text-sm uppercase tracking-wider py-3 px-4 text-gray-600">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="md:text-base text-center ">
                {contribution.map((contribution, index) => (
                  <tr key={contribution._id} className="py-4">
                    <th className="py-4"> {index + 1} </th>
                    <td className="space-y-3 py-4">
                      <p className="font-bold">{contribution.title}</p>
                    </td>
                    <td className="space-y-3 py-4">
                      <p className="text-green-500">{contribution.email}</p>
                    </td>
                    <td className="py-4">{contribution.category}</td>
                    <td className="py-4">{contribution.amount}</td>
                    <td className="py-4 text-blue-800">{contribution.date}</td>
                    <td className="py-4 text-black font-semibold">
                      <p className="bg-amber-300 px-3 py-2 rounded-lg text-center ">
                        {contribution.status}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContribution;
