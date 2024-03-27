const Faq = () => {
  return (
    <section className="container px-4 lg:px-0 mt-14 lg:mt-28 mb-14">
      <h2 className="text-[clamp(24px,5vw,40px)] font-bold font-work-sans text-center ">
        Frequently Asked Question?
      </h2>
      <p className="max-w-xl text-center mx-auto mt-3 font-work-sans">
        Welcome to the Book Vibe FAQ section, where we address some of the most
        commonly asked questions about our e-book platform.
      </p>
      <div className=" flex items-center justify-center mt-10">
        <div className="join join-vertical mx-auto ">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title md:text-xl font-semibold font-work-sans bg-green-5 text-green-900">
              How do I access the books I{"'"}ve purchased or rented?
            </div>
            <div className="collapse-content text-black-100">
              <p className="text-lg  font-work-sans ">
                After purchasing or renting a book, you can access it instantly
                through your Book Vibe account. Simply log in, navigate to your
                library, and you{"'"}ll find your purchased or rented books
                ready to read.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title md:text-xl font-semibold font-work-sans bg-green-5 text-green-900">
              Can I read books offline?
            </div>
            <div className="collapse-content text-black-100">
              <p className="text-lg  font-work-sans text-black-100">
                Yes, you can download purchased or rented books to your device
                and read them offline using compatible e-reader apps or
                software. This allows you to enjoy your favorite books anytime,
                anywhere, even without an internet connection.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title md:text-xl font-semibold font-work-sans bg-green-5 text-green-900">
              Do you offer refunds for purchased or rented books?
            </div>
            <div className="collapse-content text-black-100">
              <p className="text-lg  font-work-sans text-black-100">
                We offer refunds in certain circumstances, such as if there{"'"}
                s a technical issue with the book file or if you accidentally
                purchase the wrong book. Please contact our customer support
                team for assistance with refunds.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title md:text-xl font-semibold font-work-sans bg-green-5 text-green-900">
              Do you offer e-book rentals or subscriptions?
            </div>
            <div className="collapse-content text-black-100">
              <p className="text-lg  font-work-sans text-black-100">
                Yes, we offer both e-book rentals and subscriptions. You can
                choose the option that best fits your reading habits and
                preferences. Rentals typically allow you to access the book for
                a specific duration, while subscriptions provide unlimited
                access to a selection of books for a monthly fee.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title md:text-xl font-semibold font-work-sans bg-green-5 text-green-900">
              Are there any restrictions on how many books I can purchase or
              rent at once?
            </div>
            <div className="collapse-content text-black-100">
              <p className="text-lg  font-work-sans text-black-100">
                No, there are no limits on the number of books you can purchase
                or rent at once. Feel free to explore our collection and select
                as many books as you{"'"}d like to add to your library.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title md:text-xl font-semibold font-work-sans bg-green-5 text-green-900">
              What formats are available for the e-books?
            </div>
            <div className="collapse-content text-black-100">
              <p className="text-lg  font-work-sans text-black-100">
                Our e-books are available in various formats compatible with
                most e-readers and devices, including EPUB, PDF, and MOBI. You
                can select the format that works best for you during the
                checkout process.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title md:text-xl font-semibold font-work-sans bg-green-5 text-green-900">
              How do I access the books I{"'"}ve purchased or rented?
            </div>
            <div className="collapse-content text-black-100">
              <p className="text-lg  font-work-sans text-black-100">
                After purchasing or renting a book, you can access it instantly
                through your Book Vibe account. Simply log in, navigate to your
                library, and you{"'"}ll find your purchased or rented books
                ready to read.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title md:text-xl font-semibold font-work-sans bg-green-5 text-green-900">
              Can I gift books to friends or family members?
            </div>
            <div className="collapse-content text-black-100">
              <p className="text-lg  font-work-sans text-black-100">
                Yes, you can easily gift books to your friends or family members
                through Book Vibe. Simply select the book you{"'"}d like to
                gift, choose the Gift option during checkout, and enter the
                recipient
                {"'"}s email address. They{"'"}ll receive a notification and
                instructions on how to redeem their gift.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
