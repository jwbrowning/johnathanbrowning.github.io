import { professionalProjects, personalProjects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import Layout from "../components/Layout"

const description = "Unity Software Engineer with 2+ years of experience building real-time 3D simulations in C#. My work centers on modular gameplay systems, deterministic logic, and translating complex technical specifications into interactive software.";
const description2 = "Below are my professional experiences and selected personal projects."
const description3 = "Reach me at contact@johnathanbrowning.com"

export default function Home() {
  return (
    <Layout>
        <header className="site-header">
            <h1 className="centered-text">Johnathan Browning</h1>
            <p className="centered-text">{description}</p>
            <p className="centered-text">{description2}</p>
            <p className="centered-text">{description3}</p>
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
