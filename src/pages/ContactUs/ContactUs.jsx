import formImg from "../../assets/contact.png";

const ContactUs = () => {
  return (
    <section className="container ">
      <h2 className="text-[clamp(24px,5vw,36px)] font-bold font-work-sans text-center mt-40">
        Contact Us
      </h2>
      <p className="max-w-xl text-center mx-auto mt-4">
        Have a question, suggestion, or need assistance? We{"'"}re here to help!
        Feel free to reach out to the Book Vibe team through the contact methods
        below.
      </p>
      <div className=" flex items-center justify-center mt-12">
        <div className="grid grid-cols-1 gap-8 px-8 py-16 mx-auto  md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 rounded-2xl items-center">
          <form className="space-y-6 order-1 md:-order-1">
            <div>
              <label htmlFor="name" className="mb-2 block text-lg font-medium">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name..."
                className="w-full p-3 rounded input input-success"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-lg font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded input input-success"
                placeholder="Enter your email..."
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-lg font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded textarea textarea-success resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full   btn bg-green-900 text-white font-semibold text-lg hover:bg-green-900 hover:border-green-900"
            >
              Submit
            </button>
          </form>
          <div className="flex flex-col justify-between ">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-center font-work-sans">
                Get in touch
              </h2>
              <div className="text-black-70 text-center">
                Fill the form to contact with us.
              </div>
            </div>
            <img src={formImg} alt="" className="p-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
