import { Link } from "react-router-dom";


const ProjectsCard = ({ project }) => {
    return (
        <div className="">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
                <div className="flex gap-2">
                    <Link to={project.website} target="_blank" className="btn btn-outline btn-sm">Live Link</Link>
                    <Link to={project.client} target="_blank" className="btn btn-outline btn-sm">Client Repository</Link>
                    <Link to={project.server} target="_blank" className="btn btn-outline btn-sm">Server Repository</Link>
                </div>
            </div>
                <img src={project.thumbnail} alt="" className="mt-2 rounded-md brightness-50" />
        </div>
    );
};

export default ProjectsCard;