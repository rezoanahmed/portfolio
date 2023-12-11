import { Link } from "react-router-dom";

const LatestProjects = () => {
    return (
        <div className="mt-10">
            <div>
                <h1 className="font-bold text-4xl">See My Works<span className="text-red-600">.</span></h1>
            </div>
            {/* travego */}
            <div className="mt-10 flex flex-col md:flex-row items-center md:gap-10">
                <img src="https://i.ibb.co/bLqdvgL/travego.png" alt="" className="md:w-1/2" />
                <div className="space-y-5">
                    <h1 className="mt-5 md:mt-0 text-xl md:text-3xl font-bold">Travel Service Provider Website</h1>
                    <p className="text-lg md:text-xl"><span className="font-bold">Technologies Used:</span> React JS, Express JS, Node JS, MongoDB, Tailwind CSS, Preline UI Component, Firebase</p>
                    <p><span className="font-bold">Features:</span>
                        <ul className="list-disc ml-10">
                            <li>User can book or provide service</li>
                            <li>User Friendly UI</li>
                            <li>Dark Mode</li>
                            <li>Google Login System</li>
                            <li>Fully Device Responsive</li>
                        </ul>
                    </p>
                    <div className="flex flex-col md:flex-row gap-5">
                        <Link to='https://traveg0.web.app/' target="_blank" className="btn btn-outline">Live Website Link</Link>
                        <Link to='https://github.com/rezoanahmed/travego-client' target="_blank" className="btn btn-outline">Client Site Repository</Link>
                        <Link to='https://github.com/rezoanahmed/travego-server' target="_blank" className="btn btn-outline">Server Site Repository</Link>
                    </div>
                </div>
            </div>
            {/* cars palace */}
            <div className="mt-10 flex flex-col md:flex-row-reverse items-center md:gap-10">
                <img src="https://i.ibb.co/0G5njnk/Minimalist-Website-Launch-Computer-Mockup-Instagram-Post-3.png" alt="" className="md:w-1/2" />
                <div className="space-y-5">
                    <h1 className="mt-5 md:mt-0 text-xl md:text-3xl font-bold">Car Dealership Website</h1>
                    <p className="text-lg md:text-xl"><span className="font-bold">Technologies Used:</span> React JS, Express JS, Node JS, MongoDB, Tailwind CSS, Daisy UI Component, Firebase</p>
                    <p><span className="font-bold">Features:</span>
                        <ul className="list-disc ml-10">
                            <li>User can add sell cars post</li>
                            <li>User can buy new cars</li>
                            <li>User Friendly UI</li>
                            <li>Dark Mode</li>
                            <li>Google Login System</li>
                            <li>Fully Device Responsive</li>
                        </ul>
                    </p>
                    <div className="flex flex-col md:flex-row gap-5">
                        <Link to='https://cars-palace.web.app/' target="_blank" className="btn btn-outline">Live Website Link</Link>
                        <Link to='https://github.com/rezoanahmed/cars-palace-client' target="_blank" className="btn btn-outline">Client Site Repository</Link>
                        <Link to='https://github.com/rezoanahmed/cars-palace-server' target="_blank" className="btn btn-outline">Server Site Repository</Link>
                    </div>
                </div>
            </div>
            {/* cars palace */}
            <div className="mt-10 flex flex-col md:flex-row items-center md:gap-10">
                <img src="https://i.ibb.co/NsmHB6r/Minimalist-Website-Launch-Computer-Mockup-Instagram-Post-1.png" alt="" className="md:w-1/2" />
                <div className="space-y-5">
                    <h1 className="mt-5 md:mt-0 text-xl md:text-3xl font-bold">Fitness Center Website</h1>
                    <p className="text-lg md:text-xl"><span className="font-bold">Technologies Used:</span> React JS, Node JS, Tailwind CSS, Daisy UI Component, Firebase</p>
                    <p><span className="font-bold">Features:</span>
                        <ul className="list-disc ml-10">
                            <li>User Friendly UI</li>
                            <li>Google Login System</li>
                            <li>Fully Device Responsive</li>
                        </ul>
                    </p>
                    <div className="flex flex-col md:flex-row gap-5">
                        <Link to='https://gym-zone-abd0e.web.app/' target="_blank" className="btn btn-outline">Live Website Link</Link>
                        <Link to='https://github.com/rezoanahmed/fitness-zone' target="_blank" className="btn btn-outline">Client Site Repository</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestProjects;