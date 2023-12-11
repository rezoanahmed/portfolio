import { useEffect } from "react";
import { useState } from "react";
import ProjectsCard from "./ProjectsCard";


const Projects = () => {
    const [project, setProject] = useState();
    useEffect(() => {
        fetch("projectDetails.json")
            .then(res => {
                console.log("Response from server:", res);
                return res.json();
            })
            .then(data => {
                console.log("Parsed JSON data:", data);
                setProject(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    console.log(project);
    return (
        <div className="mt-20">


            <div className="p-4 md:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-10">
                {
                    project?.map(element=><ProjectsCard key={element.id} project={element}></ProjectsCard>)
                }
            </div>

        </div>
    );
};

export default Projects;