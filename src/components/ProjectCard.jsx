import Icon from "./Icon";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image"><img src={project.image} alt="" /><span className="status-dot"></span><button><Icon name="MoreHorizontal" size={18}/></button></div>
      <div className="project-body">
        <div className="project-title"><div><span className="project-team">{project.team}</span><h3>{project.name}</h3></div><span className={`status ${project.status === "At risk" ? "risk" : project.status === "Needs focus" ? "focus" : ""}`}>{project.status}</span></div>
        <div className="progress-row"><span>Progress</span><b>{project.progress}%</b></div>
        <div className="progress"><i style={{width: `${project.progress}%`, background: project.color}}></i></div>
      </div>
    </article>
  );
}