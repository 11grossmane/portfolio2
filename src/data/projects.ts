export interface Project {
  category: string
  title: string
  description: string
  thumbnail?: string
  uid?: string
}

export const projects: Project[] = [
  {
    category: "npm",
    title: "canasta.io",
    thumbnail: "",
    description: "online canasta simulator",
  },
]
