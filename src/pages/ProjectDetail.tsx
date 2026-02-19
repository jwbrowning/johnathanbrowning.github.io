import { useParams, Link } from "react-router-dom"
import Layout from "../components/Layout"
import { professionalProjects, personalProjects } from "../data/projects"

export default function ProjectDetail() {
  const { id } = useParams()
  const allProjects = [...professionalProjects, ...personalProjects]
  const project = allProjects.find(p => p.id === id)

  if (!project) return <div>Project not found.</div>

  return (
    <Layout>
    <div className="project-detail">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>

      <h1>{project.title}</h1>

      {project.content.map((block, index) => {
        switch (block.type) {
          case "header":
            return <h2 key={index}>{block.text}</h2>

          case "paragraph":
            return <p key={index}>{block.text}</p>

          case "image":
            return (
              <img
                key={index}
                src={block.src}
                alt={block.alt ?? ""}
                style={{ width: "100%", margin: "20px 0" }}
              />
            )

          case "small-image":
            return (
              <img
                key={index}
                src={block.src}
                alt={block.alt ?? ""}
                style={{ width: "50%", margin: "20px 0" }}
              />
            )

          case "gif":
            return (
              <img
                key={index}
                src={block.src}
                alt=""
                style={{ width: "100%", margin: "20px 0" }}
              />
            )

          case "youtube":
            return (
              <iframe
                className="project-video"
                key={index}
                width="100%"
                src={block.url}
                allowFullScreen
              />
            )

            case "video":
            return (
                <video
                className="project-video"
                key={index}
                src={block.url}
                muted
                autoPlay
                playsInline
                />
            )


          default:
            return null
        }
      })}
    </div></Layout>
  )
}
