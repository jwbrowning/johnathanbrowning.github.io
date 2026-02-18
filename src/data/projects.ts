export interface Project {
  id: string
  title: string
  summary: string
  details: string
  tech: string[]
}

export const projects: Project[] = [
  {
    id: "test-project",
    title: "Test Project",
    summary: "Test summary for test project.",
    details: "Detailed test description for test project.",
    tech: ["Unity", "C#"]
  }
]
