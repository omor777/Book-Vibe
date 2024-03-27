import formImg from "../../assets/contact.png";

const ContactUs = () => {
  return (
    <section className="container  lg:mt-32 mb-14 px-4 lg:px-0">
      <h2 className="text-[clamp(24px,5vw,36px)] font-bold font-work-sans text-center">
        Contact Us
      </h2>
      <p className="max-w-xl text-center mx-auto mt-4 font-work-sans">
        Have a question, suggestion, or need assistance? We{"'"}re here to help!
        Feel free to reach out to the Book Vibe team through the contact methods
        below.
      </p>
      <div className=" flex items-center justify-center mt-12">
        <div className="grid grid-cols-1 gap-8 px-8 py-16 mx-auto  md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-white shadow-lg rounded-2xl items-center">
          {/* contact start */}
          <div className="order-1 md:-order-1">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <form action="#" className="space-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="text-lg block mb-2 font-semibold font-work-sans"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input input-success w-full font-work-sans"
                    placeholder="test@gmail.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="text-lg block mb-2 font-semibold font-work-sans"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="input input-success w-full font-work-sans"
                    placeholder="Let us know how we can help you"
                    required=""
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-lg block mb-2 font-semibold font-work-sans"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="textarea textarea-success w-full resize-none font-work-sans"
                    placeholder="Leave a comment..."
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="btn bg-green-900 text-white font-medium font-work-sans hover:bg-green-900 hover:border-green-900"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>

          {/* contact end */}
          <div className="flex flex-col justify-between ">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-center font-work-sans">
                Get in touch
              </h2>
              <div className="text-black-70 text-center text-lg">
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
