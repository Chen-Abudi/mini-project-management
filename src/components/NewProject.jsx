import Input from "./Input";

function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-3">
        <li>
          <button className="text-stone-800 hover:text-[#36506C]">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 bg-[#36506C] rounded-lg text-[#EBF7FD] hover:bg-[#233142]">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textArea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}

export default NewProject;
