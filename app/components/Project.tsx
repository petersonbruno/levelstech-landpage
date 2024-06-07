import ProjectCard from "./ProjectCard"
import { projects } from "@/constants";

const Projects = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Our latest projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;