import { MdDownload } from "react-icons/md";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="mt-10">
            <div className="md:pt-10 flex flex-col md:flex-row gap-5 justify-center items-center">
                <div className="p-4 rounded-md">
                    <img src="https://i.ibb.co/KjHYGYn/01855673393.png" alt="" className="rounded-md" />
                    <div className="mt-2">
                        <Link to='' className="btn btn-outline text-center text-xl w-full">Download Resume<MdDownload className="text-3xl"></MdDownload></Link>
                    </div>
                </div>
                <div className="space-y-2 p-4 max-w-2xl">
                    <p className="text-4xl font-bold">Md Rezoan Ahmed</p>
                    <p className="text-2xl font-medium">Frontend Web Developer</p>
                    <p>Dhaka, Bangladesh</p>
                    <div className="divider">Objectives</div>
                    <p className="text-justify">As a recent graduate with expertise in React.js, MongoDB, Express.js, and Node.js, I am seeking a dynamic role in web development. Eager to apply my skills in creating efficient and scalable solutions for real-world challenges. I aim to contribute to a collaborative team, further enhance my technical proficiency, and play a key role in delivering impactful web applications.</p>
                    <div className="divider">Education</div>
                    <p className="font-medium text-2xl">BSc. (Hons) in Computer Science & Engineering</p>
                    <p className="text-xl">National University, Bangladesh</p>
                    <div className="divider">Skills Set</div>
                    <ul className="list-disc ml-10">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Tailwind CSS</li>
                        <li>React JS</li>
                        <li>Express JS</li>
                        <li>MongoDB</li>
                        <li>Node JS</li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
};

export default About;