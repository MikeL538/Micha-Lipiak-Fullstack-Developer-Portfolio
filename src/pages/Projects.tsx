import { useState } from "react";

import ImageModal from "../components/ImageModal";
import ProjectsList from "../components/ProjectsList";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<any>(null);

  return (
    <>
      <div className="projects">
        <ProjectsList onImageClick={setActiveProject} />
        <ImageModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </>
  );
}
