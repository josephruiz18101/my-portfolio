import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
      <section className="max-w-lg mx-auto space-y-8 text-center">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="text-lg">
          I'm open to new opportunities—feel free to reach out!
        </p>
        <form
          action="mailto:joseph123920@gmail.com"
          method="post"
          encType="text/plain"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg dark:bg-gray-800"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg dark:bg-gray-800"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-3 border rounded-lg dark:bg-gray-800"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }
  