import { professionalProjects, personalProjects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import Layout from "../components/Layout"

const description = "Software Engineer specializing in Unity development with 2+ years of professional experience architecting real-time 3D simulation systems in C#. Focused on deterministic system design, modular gameplay logic, and translating complex requirements into maintainable interactive applications. Below are selected projects highlighting both professional and personal work.";

export default function Home() {
  return (
    <Layout>
        <header className="site-header">
            <h1 className="centered-text">Johnathan Browning</h1>
            <p className="centered-text">{description}</p>
        </header>

        <div className="home-grid">
            <div>
                <h2 className="centered-text">Professional Work</h2>
                {professionalProjects.map(p => (
                <ProjectCard key={p.id} project={p} />
                ))}
            </div>

            <div>
                <h2 className="centered-text">Personal Projects</h2>
                {personalProjects.map(p => (
                <ProjectCard key={p.id} project={p} />
                ))}
            </div>
        </div>
    </Layout>
  )
}
