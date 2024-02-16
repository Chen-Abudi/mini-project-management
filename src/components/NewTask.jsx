function NewTask() {
  return (
    <div className="flex items-center gap-4">
      <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" />
      <button className="text-[#36506C] hover:text-[#233142]">Add Task</button>
    </div>
  );
}

export default NewTask;
