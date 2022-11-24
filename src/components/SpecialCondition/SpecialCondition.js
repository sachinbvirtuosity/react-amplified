import React from "react";

const SpecialCondition = () => {
  return (
    <div className="special-condition-setup my-10">
      <h2 className="text-center font-bold text-2xl">Special Condition</h2>
      <hr className="border-line mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div class="mt-4 grid items-start grid-cols-[180px_minmax(30px,30px)]">
          <label class="block text-gray-700 text-sm font-bold" for="username">
            Enable special condition:
          </label>
          <input className="ml-4" id="incomingno" type="checkbox" />
        </div>
        <div class="mt-4 grid items-start grid-cols-[180px_minmax(30px,30px)]">
          <label class="block text-gray-700 text-sm font-bold" for="username">
            Special Condition Prompt:
          </label>
          <input className="ml-4" id="incomingno" type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export { SpecialCondition };
