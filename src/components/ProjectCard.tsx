import { Link } from "react-router-dom"
import type { Project } from "../data/projects"

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>

      <Link to={`/project/${project.id}`}>
        View Details →
      </Link>
    </div>
  )
}
