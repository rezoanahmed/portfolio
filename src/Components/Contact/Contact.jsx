
const Contact = () => {
    return (
        <div className="mt-10">
            
            <div className="mt-10">
                <form className="max-w-6xl flex flex-col gap-4 p-4 md:p-16 bg-base-200 mx-auto shadow-[#2d3436] shadow-md  rounded-md">
                <div>
                <h1 className="font-bold text-4xl">For any further queries<span className="text-red-600">.</span></h1>
            </div>
                    <div className="flex justify-between gap-2">
                        <input type="text" className="input input-lg input-bordered w-full" placeholder="Full Name" />
                        <input type="email" className="input input-lg input-bordered w-full" placeholder="E-mail Address" />
                    </div>
                    <div>
                        <textarea name="" placeholder="Your Message" className="textarea textarea-lg textarea-bordered w-full"></textarea>
                    </div>
                    <input type="submit" value="Send" className="btn btn-outline" />
                </form>
            </div>

        </div>
    );
};

export default Contact;