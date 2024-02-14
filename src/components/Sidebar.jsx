function Sidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-[#233142] text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-100">
        You Projects
      </h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-[#36506C] text-[#EBF7FD] hover:bg-[#EBF7FD] hover:text-[#36506C]">
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}

export default Sidebar;
