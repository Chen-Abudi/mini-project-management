import { useState } from "react";

function NewTask({ onAdd }) {
  const [isEnteredTask, setIsEnteredTask] = useState("");

  function handleChange(evt) {
    setIsEnteredTask(evt.target.value);
  }

  function handleClick() {
    if (isEnteredTask.trim() === "") {
      return;
    }
    onAdd(isEnteredTask);
    setIsEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        onChange={handleChange}
        value={isEnteredTask}
      />
      <button
        className="text-[#36506C] hover:text-[#233142]"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
