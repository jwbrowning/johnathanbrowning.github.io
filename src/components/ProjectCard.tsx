import type { Project } from "../data/projects"

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <p><strong>Details:</strong> {project.details}</p>
      <div>
        {project.tech.map(t => (
          <span key={t}>{t} </span>
        ))}
      </div>
    </div>
  )
}
