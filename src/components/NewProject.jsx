import { useRef } from "react";
import Input from "./Input";

function NewProject({ onAdd }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    // Validation coming soon ...

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-3">
        <li>
          <button className="text-stone-800 hover:text-[#36506C]">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 bg-[#36506C] rounded-lg text-[#EBF7FD] hover:bg-[#233142]"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={titleRef} label="Title" type="text" />
        <Input ref={descriptionRef} label="Description" textArea />
        <Input ref={dueDateRef} label="Due Date" type="date" />
      </div>
    </div>
  );
}

export default NewProject;
