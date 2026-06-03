export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
};

export const featuredProjects: Project[] = [
  {
    id: "1",
    title: "Project Title One",
    description: "Short placeholder description for a featured project.",
    category: "Category",
  },
  {
    id: "2",
    title: "Project Title Two",
    description: "Short placeholder description for a featured project.",
    category: "Category",
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    id: "3",
    title: "Project Title Three",
    description: "Short placeholder description for another project.",
    category: "Category",
  },
  {
    id: "4",
    title: "Project Title Four",
    description: "Short placeholder description for another project.",
    category: "Category",
  },
  {
    id: "5",
    title: "Project Title Five",
    description: "Short placeholder description for another project.",
    category: "Category",
  },
  {
    id: "6",
    title: "Project Title Six",
    description: "Short placeholder description for another project.",
    category: "Category",
  },
];
