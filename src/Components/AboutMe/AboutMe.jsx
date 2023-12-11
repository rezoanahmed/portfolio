import { SiGmail } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";


const AboutMe = () => {
    return (
        <div className='mt-10'>
            <div>
                <p className='text-4xl font-bold'>About Me<span className='text-red-600'>.</span></p>
                <p className='text-xl mt-2'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>
            <div className='mt-10  flex flex-col md:flex-row gap-10'>
                <div className='max-w-xl text-justify'>
                    <div className="">
                        <p className='text-3xl font-bold'>Get to know me<span className='text-red-600'>!</span></p>
                        <p className='mt-5 text-xl'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. <br /><br /> I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                    </div>
                    <div className="mt-10 divider">
                        <h1 className="text-3xl font-bold">Keep in touch</h1>
                    </div>
                    <div className="mt-10 flex justify-center items-center gap-10">
                        <Link to='https://www.linkedin.com/in/rezoan-ahmed-12848517a/' target="_blank" className="btn btn-circle text-4xl btn-lg"><SiLinkedin></SiLinkedin></Link>
                        <Link to='https://wa.me/+8801855673393' target="_blank" className="btn btn-circle text-4xl btn-lg"><SiWhatsapp></SiWhatsapp></Link>
                        <Link to='mailto:rezoan.cse.2017@gmail.com' target="_blank" className="btn btn-circle text-4xl btn-lg"><SiGmail></SiGmail></Link>
                    </div>


                    <div className="mt-10"></div>
                </div>
                <div>
                    <p className='text-3xl font-bold'>I have expertise on<span className='text-red-600'>...</span></p>
                    <div className="text-4xl mt-5">
                        <img src="https://camo.githubusercontent.com/3e3f5e4caa6d3b6821a1a28cb810c219900e664236f155badb1e5e5560792cc5/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c2c6373732c6a732c7461696c77696e642c72656163742c66697265626173652c657870726573732c6d6f6e676f2c6e6f64656a732c6769742c6669676d61" alt="" />

                        <div>
                            <div className="mt-5">
                                <div className="w-full">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            HTML
                                        </h6>
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            95%
                                        </h6>
                                    </div>
                                    <div
                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                                        <div
                                            className="flex items-center justify-center w-[95%] h-full overflow-hidden text-white break-all bg-gray-900 rounded-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-2">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            CSS
                                        </h6>
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            85%
                                        </h6>
                                    </div>
                                    <div
                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                                        <div
                                            className="flex items-center justify-center w-[85%] h-full overflow-hidden text-white break-all bg-gray-900 rounded-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-2">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            Tailwind CSS
                                        </h6>
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            90%
                                        </h6>
                                    </div>
                                    <div
                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                                        <div
                                            className="flex items-center justify-center w-[90%] h-full overflow-hidden text-white break-all bg-gray-900 rounded-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-2">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            JavaScript
                                        </h6>
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            80%
                                        </h6>
                                    </div>
                                    <div
                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                                        <div
                                            className="flex items-center justify-center w-[80%] h-full overflow-hidden text-white break-all bg-gray-900 rounded-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-2">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            React JS
                                        </h6>
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            75%
                                        </h6>
                                    </div>
                                    <div
                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                                        <div
                                            className="flex items-center justify-center w-[75%] h-full overflow-hidden text-white break-all bg-gray-900 rounded-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-2">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            Express JS
                                        </h6>
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            75%
                                        </h6>
                                    </div>
                                    <div
                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                                        <div
                                            className="flex items-center justify-center w-[75%] h-full overflow-hidden text-white break-all bg-gray-900 rounded-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-2">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            MongoDB
                                        </h6>
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            75%
                                        </h6>
                                    </div>
                                    <div
                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                                        <div
                                            className="flex items-center justify-center w-[75%] h-full overflow-hidden text-white break-all bg-gray-900 rounded-full">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;