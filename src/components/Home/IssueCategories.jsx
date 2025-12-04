import { FaTrash, FaHouseDamage, FaBuilding, FaRoad } from "react-icons/fa";

export default function IssueCategories() {
  const categories = [
    {
      name: "Garbage",
      icon: <FaTrash />,
    },
    {
      name: "Illegal Construction",
      icon: <FaHouseDamage />,
    },
    {
      name: "Broken Property",
      icon: <FaBuilding />,
    },
    {
      name: "Road Damage",
      icon: <FaRoad />,
    },
  ];

  return (
    <section className="container mx-auto px-4 mt-12">
      <h2 className="text-3xl font-bold mb-8 text-sky-400 text-center">
        Issue Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="group bg-white backdrop-blur-md border border-white/30 shadow-2xl
                       p-6 rounded-2xl flex flex-col items-center transition-all duration-300 
                       hover:-translate-y-2 hover:shadow-xl"
          >
            <div
              className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-400 
                         rounded-full text-3xl group-hover:bg-blue-400 group-hover:text-white transition-all"
            >
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mt-4 group-hover:text-blue-400 transition">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
