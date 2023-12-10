import Lottie from "lottie-react";
import Development from "../../../public/development.json"

const Hero = () => {
    return (
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between">
            <div className="">
                <h1 className="text-4xl font-medium">Hi there, I'm Rezoan</h1>
                <p className="text-6xl md:text-8xl font-bold">Front<span className="text-red-600">end</span> <br />Developer</p>
                <p className="mt-10 max-w-lg text-xl">I'm a frontend developer from Bangladesh, I'll help you build beautiful websites your users will love.</p>
                <div className="flex gap-2 mt-10">
                    <button className="btn btn-sm bg-red-500 hover:bg-red-600 duration-300 text-white">Get in touch</button>
                    <button className="btn btn-sm btn-neutral">Browse Projects</button>
                </div>
            </div>
            <div className="-z-10">
                <Lottie className="mt-10 md:h-[70vh]" animationData={Development}></Lottie>
            </div>
        </div>
    );
};

export default Hero;