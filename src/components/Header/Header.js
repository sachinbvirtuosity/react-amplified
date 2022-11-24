import React from "react";

const Header = () => {
  return (
    <div className="flex mr-auto justify-end">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">
        MRC
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">
        CRC
      </button>
    </div>
  );
};

export { Header };
