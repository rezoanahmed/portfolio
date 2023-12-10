import AboutMe from "../../Components/AboutMe/AboutMe";
import Hero from "../../Components/Hero/Hero";

const Homepage = () => {
    return (
        <div className="w-9/12 mx-auto">
           <Hero></Hero>
           <AboutMe></AboutMe> 
        </div>
    );
};

export default Homepage;