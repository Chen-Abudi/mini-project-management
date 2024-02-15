import Button from "./Button";

function Sidebar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-[#233142] text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-100">
        You Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
}

export default Sidebar;
