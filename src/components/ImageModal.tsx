import projects from "../assets/projects.json";

export default function ImageModal() {
  const projectsJson = projects.filter((p) => p.featured);

  return (
    <div className="imageModal is-hidden">
      <div className="imageModal__container">
        <img className="imageModal__image" src={projectsJson[0].imageLarge} />
      </div>
    </div>
  );
}
