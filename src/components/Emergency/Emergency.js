import React from "react";

const Emergency = () => {
  return (
    <div className="emergency-setup my-20">
      <h2 className="text-center font-bold text-2xl">Emergency Setup</h2>
      <hr className="border-line mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div class="mt-4 grid items-start grid-cols-[150px_minmax(30px,30px)]">
          <label class="block text-gray-700 text-sm font-bold" for="username">
            Emergency turned on:
          </label>
          <input className="ml-4" id="incomingno" type="checkbox" />
        </div>
        <div class="mt-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Emergency Condition Prompt:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="incomingno"
            type="text"
            placeholder="Emergency Condition Prompt"
          />
        </div>
      </div>
    </div>
  );
};

export { Emergency };
