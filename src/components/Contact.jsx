import { RiMailFill } from "react-icons/ri";
import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  const [state, handleSubmit] = useForm("mdoqyvwg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <div className="bg-black text-white">
        <div className="relative ">
        <p className="ml-10 lg:rotate-90 lg:absolute lg:mt-10 lg:ml-16">
            <span className="border w-2/5 flex"></span> CONTACT
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2">
          <div className="m-auto mt-2">
            <p className="font-poppins text-3xl w-4/5  lg:text-3xl m-auto lg:ml-28 lg:w-3/5">
              Have You Any Project? Please Drop a Message
            </p>
            <p className="w-4/5 text-xl  lg:ml-28 lg:w-3/5 lg:text-base m-auto mt-5">
              Get in touch and let me know how i can help. Fill out the form and
              i’ll be in touch as soon as possible.
            </p>
            <div className="w-4/5 lg:ml-28 lg:w-3/5 m-auto mt-5">
              <p className="text-xl flex items-center">
                <RiMailFill />
                <span className="lg:ml-2">Email:</span>
              </p>
              <p>rawatvikas689@gmail.com</p>
            </div>
            {/* <div>
            <Link> <RiLinkedinBoxFill/> </Link>
          </div> */}
          </div>
          <div>
            <div className="border border-gray-500  mt-10 lg:mt-0 lg:w-3/5 rounded-xl  p-8 lg:mb-20">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 rounded-md bg-gray-500 text-orange-500 text-lg font-poppins outline-none"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-md bg-gray-500 text-orange-500 text-lg font-poppins outline-none"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Mobile Number:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-2 rounded-md bg-gray-500 text-orange-500 text-lg font-poppins outline-none"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    rows="4"
                    className="w-full px-4 py-2 rounded-md bg-gray-500 text-orange-500 text-lg font-poppins outline-none"
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md focus:outline-none"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>

            {/* // <form onSubmit={handleSubmit}>
            //   <label htmlFor="email">Email Address</label>
            //   <input id="email" type="email" name="email" />
            //   <ValidationError
            //     prefix="Email"
            //     field="email"
            //     errors={state.errors}
            //   />
            //   <textarea id="message" name="message" />
            //   <ValidationError
            //     prefix="Message"
            //     field="message"
            //     errors={state.errors}
            //   />
            //   <button type="submit" disabled={state.submitting}>
            //     Submit
            //   </button>
            // </form> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
