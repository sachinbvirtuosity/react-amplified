import React from "react";

const Primary = () => {
  return (
    <div className="primary-setup">
      <h2 className="text-center font-bold text-2xl">Primary Setup</h2>
      <hr className="border-line mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div class="mt-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Incoming number:
          </label>
          <input
            class="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="incomingno"
            type="text"
            placeholder="Incoming Number"
          />
        </div>
        <div class="mt-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Welcome Prompt:
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="incomingno"
            type="text"
            placeholder="Welcome Prompt"
          />
        </div>
        <div class="mt-4 flex">
          <label class="block text-gray-700 text-sm font-bold" for="username">
            After Hour Prompt:
          </label>
          <input
            className="ml-4"
            id="incomingno"
            type="checkbox"
            placeholder="After hour prompt"
          />
        </div>
      </div>
    </div>
  );
};

export { Primary };
