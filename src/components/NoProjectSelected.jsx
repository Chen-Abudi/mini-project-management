import noProjectsImage from "../assets/no-projects.png";
import Button from "./Button.jsx";

function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-20 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProjectsImage}
        alt="An image of empty projects task list"
      />
      <h2 className="text-xl font-bold text-stone-600 my-4">
        No Projects Selected
      </h2>
      <p className="text-stone-500 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}

export default NoProjectSelected;
