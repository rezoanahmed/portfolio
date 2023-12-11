import AboutMe from "../../Components/AboutMe/AboutMe";
import Hero from "../../Components/Hero/Hero";
import LatestProjects from "../../Components/LatestProjects/LatestProjects";

const Homepage = () => {
    return (
        <div className="w-9/12 mx-auto">
           <Hero></Hero>
           <AboutMe></AboutMe> 
           <LatestProjects></LatestProjects>
        </div>
    );
};

export default Homepage;