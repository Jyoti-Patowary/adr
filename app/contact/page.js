import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="min-h-screen bg-slate-50 text-black pt-44 pb-16 px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-3xl lg:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg mb-2">
                Email, call, or complete the form to learn how Snappy can solve your messaging problem.
              </p>
              <p className="mb-4">alldayride6@gmil.com</p>
              <p className="mb-4">321-221-231</p>
              <a href="#" className="text-blue-500 underline mb-8 inline-block">
                Customer Support
              </a>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">Customer Support</h3>
                  <p className="mb-4">
                    Our support team is available around the clock to address any concerns or queries you may have.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Feedback and Suggestions</h3>
                  <p className="mb-4">
                    We value your feedback and are continuously working to improve Snappy. Your input is crucial in shaping the future of Snappy.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Media Inquiries</h3>
                  <p>
                    For media-related questions or press inquiries, please contact us at media@snappyapp.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-white text-black border-black p-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-4">You can reach us anytime</p>
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full sm:w-1/2 p-3 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full sm:w-1/2 p-3 border border-gray-300 rounded"
                />
              </div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <select className="w-full sm:w-1/4 p-3 border border-gray-300 rounded">
                  <option value="+91">+91</option>
                </select>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full sm:w-3/4 p-3 border border-gray-300 rounded"
                />
              </div>
              <textarea
                placeholder="How can we help?"
                className="w-full p-3 border border-gray-300 rounded"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-blue-500 text-white rounded"
              >
                Submit
              </button>
              <p className="text-sm text-gray-600 mt-4">
                By contacting us, you agree to our{" "}
                <a href="#" className="text-blue-500 underline">
                  Terms of service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500 underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
