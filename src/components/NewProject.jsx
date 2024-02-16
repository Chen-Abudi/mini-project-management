import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    // Input validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // Show the error modal
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-[#36506C] my-3">Invalid Input</h2>
        <p className="text-[#233142] mb-0.5">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-[#233142] mb-6">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-3">
          <li>
            <button
              className="text-stone-800 hover:text-[#36506C]"
              onClick={onCancel}
            >
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
    </>
  );
}

export default NewProject;
