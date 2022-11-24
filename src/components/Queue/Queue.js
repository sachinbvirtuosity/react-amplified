import React from "react";

const Queue = () => {
  return (
    <div className="queue-setup my-20">
      <h2 className="text-center font-bold text-2xl">Queue Setup</h2>
      <hr className="border-line mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div class="mt-4 grid items-start grid-cols-[150px_minmax(100px,100px)]">
          <label class="block text-gray-700 text-sm font-bold" for="username">
            Enable Callback:
          </label>
          <input className="ml-4" id="incomingno" type="checkbox" />
        </div>
        <div class="mt-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Queue Prompt:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="incomingno"
            type="text"
            placeholder="Queue Prompt"
          />
        </div>
      </div>
    </div>
  );
};

export { Queue };
