import { RiMailFill } from "react-icons/ri";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react"; 

function Contact() {
  const [state, handleSubmit] = useForm("xkndynwy");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" }); 

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    if (state.succeeded) {
      setFormData({ name: "", email: "", message: "" });
    }
  }; dfgdf
dfgsdfsdsdfsdf
  return (
    <>
      <div className="bg-black text-white mt-20">
        <div className="relative">
          <p className="ml-10 lg:rotate-90 lg:absolute lg:mt-10 lg:ml-16">
            <span className="border w-16 lg:w-4/5 flex"></span> CONTACT
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2">
          <div className="m-auto mt-2">
            <p className="font-poppins text-3xl w-4/5  lg:text-3xl m-auto lg:ml-30 lg:w-3/5">
              Have You Any Project? Please Drop a Message
            </p>
            <p className="w-4/5 text-xl  lg:ml-30 lg:w-3/5 lg:text-base m-auto mt-5">
              Get in touch and let me know how I can help. Fill out the form and
              I’ll be in touch as soon as possible.
            </p>
            <div className="w-4/5 lg:ml-30 lg:w-3/5 m-auto mt-5">
              <p className="text-xl flex items-center">
                <RiMailFill />
                <span className="lg:ml-2">Email:</span>
              </p>
              <p>rawatvikas689@gmail.com</p>
            </div>
          </div>
          <div>
            <div className="border border-gray-500 mt-10 lg:mt-0 lg:w-3/5 rounded-xl p-8 lg:mb-20">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <form onSubmit={handleFormSubmit}>
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
                    value={formData.name} // Bind value to form data state
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
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
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
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
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
