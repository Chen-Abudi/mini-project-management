import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
  const [isProjectsState, setIsProjectsState] = useState({
    // Neither adding a new project nor have a project selected
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setIsProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if (isProjectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (isProjectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
