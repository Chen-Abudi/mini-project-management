import Button from "./Button";

function Sidebar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-[#233142] text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-100">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-6">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-3 text-[#36506C] bg-[#EBF7FD] hover:text-[#233142] hover:bg-[#A5DEF1]">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
