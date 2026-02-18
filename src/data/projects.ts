export interface Project {
  id: string
  title: string
  summary: string
  role: string
  tech: string[]
}

export const projects: Project[] = [
  {
    id: "test-project",
    title: "Test Project",
    summary: "Test summary for test project.",
    role: "Detailed test description for test project.",
    tech: ["Unity", "C#"]
  }
]
