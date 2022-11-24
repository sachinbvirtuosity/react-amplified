import React from "react";

const Agent = () => {
  return (
    <div className="agent-setup my-20">
      <h2 className="text-center font-bold text-2xl">Agent Setup</h2>
      <hr className="border-line mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div class="mt-4 flex">
          <label class="block text-gray-700 text-sm font-bold" for="username">
            Agents not available:
          </label>
          <input
            className="ml-4"
            id="incomingno"
            type="checkbox"
            placeholder="Agents not available"
          />
        </div>
        <div class="mt-4 flex">
          <label class="block text-gray-700 text-sm font-bold" for="username">
            Agents not staffed:
          </label>
          <input
            className="ml-4"
            id="incomingno"
            type="checkbox"
            placeholder="Agents not staffed"
          />
        </div>
      </div>
    </div>
  );
};

export { Agent };
