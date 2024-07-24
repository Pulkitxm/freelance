import { useState } from "react";
import toast from "react-hot-toast";
import { updateUserOnBoarded } from "../lib/user";

export default function OnBoardDialog() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const ideas = ["I have an Idea", "I have a Business"];
  function handleOnBoard() {
    if (selectedIndex === -1) {
      return toast.error("Please select an option");
    }
    toast.promise(updateUserOnBoarded(), {
      loading: "Updating...",
      success: "Onboarding complete",
      error: "Failed to onboard",
    });
    setSelectedIndex(-1);
  }
  return (
    <div className="w-3/5 h-3/6 p-10 bg-[#191919] shadow-inner-md text-white rounded-lg flex flex-col items-center justify-center">
      <h1 className="text-2xl">How would Identify yourself?</h1>
      <div className="grid grid-cols-2 grid-rows-1 w-full h-full">
        {ideas.map((idea, index) => (
          <div
            key={idea}
            className={`${
              selectedIndex === index
                ? "bg-green-500 text-black"
                : "bg-[#2E2E2E] text-white hover:bg-gray-900 "
            } p-2 rounded-lg m-5 flex items-center justify-center text-xl cursor-pointer select-none font-bold`}
            onClick={() => setSelectedIndex(index)}
          >
            {idea}
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end pr-5">
        <button
          onClick={handleOnBoard}
          className="bg-white hover:opacity-70 text-black px-5 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}
