import React from "react";

const page = () => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 sm:p-4 md:p-6 lg:p-8">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="bg-blue-500 text-white p-6 rounded-lg flex items-center justify-center"
        >
          Item {i + 1}
        </div>
      ))}
    </div>
  );
};

export default page;
