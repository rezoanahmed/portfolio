

const ProjectsCard = ({ project }) => {
    return (
        <div className="mt-20 p-4">
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src={project?.thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{project?.name}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Live Link</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;