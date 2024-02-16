import Button from "./Button.jsx";

function Sidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-[#233142] text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-100">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-6">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-3 bg-[#EBF7FD] hover:text-[#233142] hover:bg-[#A5DEF1]";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-[#233142] text-[#A5DEF1]"; // Or "bg-stone-800 text-stone-200"
          } else {
            cssClasses += " text-[#36506C]";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
