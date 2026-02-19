import { Link } from "react-router-dom"
import type { Project } from "../data/projects"

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      to={`/project/${project.id}`}
      className="project-card-link"
    >
      <div className="project-card">
        {project.previewMedia && (
        <>
            {project.previewMedia.type === "image" ||
            project.previewMedia.type === "gif" ? (
            <img
                src={project.previewMedia.src}
                alt={project.title}
                className="project-preview-media"
            />
            ) : project.previewMedia.type === "video" ? (
            <video
                src={project.previewMedia.src}
                muted
                loop
                autoPlay
                playsInline
                className="project-preview-media"
            />
            ) : (
            <iframe
                src={project.previewMedia.src}
                title={project.title}
                allowFullScreen
                className="project-preview-media"
            />
            )}
        </>
        )}

        <div className="project-card-header">
          <h3>{project.title}</h3>
          <span className="project-dates">
            {project.startDate} – {project.endDate}
          </span>
        </div>

        <p className="project-description">
          {project.previewDescription}
        </p>

        <div className="tech-tags">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
