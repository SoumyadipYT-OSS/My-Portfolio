
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 pt-8">
        <h1 className="my-10 text-center text-4xl">Get in Touch</h1>

        <div className="bg-gray-900 flex items-center justify-center h-screen">
            <div className="w-full max-w-xs mx-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact;