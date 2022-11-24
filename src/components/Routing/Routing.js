import React from "react";

const Routing = () => {
  return (
    <div className="routing-setup my-20">
      <h2 className="text-center font-bold text-2xl">Routing Setup</h2>
      <hr className="border-line mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div class="mt-4 grid items-start grid-cols-[150px_minmax(100px,100px)]">
          <label class="block text-gray-700 text-sm font-bold" for="username">
            Route Call to Queue:
          </label>
          <input className="ml-4" id="incomingno" type="checkbox" />
        </div>
        <div class="mt-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Call routing extension number:
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="incomingno"
            type="text"
            placeholder="Call routing extension number"
          />
        </div>
        <div class="mt-4 grid items-start grid-cols-[150px_minmax(100px,100px)]">
          <label class="block text-gray-700 text-sm font-bold" for="username">
            Play options menu:
          </label>
          <input className="ml-4" id="incomingno" type="checkbox" />
        </div>
        <div class="mt-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Menu options prompt:
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="incomingno"
            type="text"
            placeholder="Menu options prompt"
          />
        </div>
        <div class="mt-4 grid items-start grid-cols-[150px_minmax(100px,100px)]">
          <label class="block text-gray-700 text-sm font-bold" for="username">
            Enable Voice Mail:
          </label>
          <input className="ml-4" id="incomingno" type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export { Routing };
