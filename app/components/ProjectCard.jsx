// components/ProjectCard.js
const ProjectCard = ({ image, title, category, description, link }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{category}</p>
        <p className="text-gray-800 mb-4">{description}</p>
        <a href={link} className="text-blue-600 hover:underline">View Project</a>
      </div>
    </div>
  );
  
  export default ProjectCard;
  
  