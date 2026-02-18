import { useParams, Link } from "react-router-dom"
import { projects } from "../data/projects"

export default function ProjectDetail() {
  const { id } = useParams()

  const project = projects.find(p => p.id === id)

  if (!project) {
    return <div>Project not found.</div>
  }

  return (
    <div>
      <Link to="/">← Back</Link>

      <h1>{project.title}</h1>

      <p>{project.summary}</p>

      <h3>Role</h3>
      <p>{project.role}</p>

      <h3>Tech</h3>
      <ul>
        {project.tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  )
}
