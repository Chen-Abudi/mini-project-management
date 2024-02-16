import NewTask from "./NewTask.jsx";

function Tasks() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-[#233142] mb-4">Tasks</h2>
      <NewTask />
      <p className="text-stone-800 my-5">
        This project does not have any tasks yet.
      </p>
      <ul></ul>
    </section>
  );
}

export default Tasks;
