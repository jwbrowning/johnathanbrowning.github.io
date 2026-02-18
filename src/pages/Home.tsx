import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

export default function Home() {
  return (
    <div>
      <h1>Johnathan Browning</h1>
      <p>Software Engineer (Unity)</p>

      <h2>Projects</h2>

      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
