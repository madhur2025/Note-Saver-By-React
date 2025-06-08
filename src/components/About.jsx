export default function About() {
  return (
    <div className="w-full max-w-3xl min-h-[480px] mt-5 mx-auto px-4 overflow-x-hidden mb-5">
      <section className="mb-6">
        <h1 className="text-xl font-semibold text-indigo-600 mb-2">About Me</h1>
        <p className="text-gray-700 leading-relaxed">
          Hi, I'm <strong>Madhusudan Sharma</strong>, a <strong>BCA</strong> student at <strong>Career Point University</strong> and a passionate frontend developer from Kota, Rajasthan.
          I specialize in building responsive, user-friendly web applications using technologies like <strong>React, Redux, Tailwind CSS, and the MERN stack</strong>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">About NoteSafe</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>NoteSafe</strong> is a lightweight and reliable note-taking app designed to make your thoughts and ideas easy to store, manage, and retrieve.
          It supports localStorage for persistence, user-friendly navigation, code-friendly formatting, and seamless viewing, editing, and deletion of notes.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-indigo-600 mb-2">Contact</h3>
        <div className="space-y-2">
          <a className="block text-blue-600 hover:underline" href="tel:+918769376935">📞 +91 8769376935</a>
          <a className="block text-blue-600 hover:underline" href="mailto:madhusudansharma2324@gmail.com">📧 madhusudansharma2324@gmail.com</a>
          <p className="text-gray-700">🏠 Address: Kota, Rajasthan, India</p>
        </div>
      </section>

      <section>
        <h4 className="text-xl font-semibold text-indigo-600 mb-2">Social Links</h4>
        <div className="flex flex-wrap gap-3">
          <a className="text-blue-500 hover:underline" href="https://www.instagram.com/madhurr.sharma?igsh=MXFtdnNoZmpsYmFqNQ==" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="text-blue-500 hover:underline" href="https://x.com/Madhurr2025" target="_blank" rel="noopener noreferrer">Twitter (X)</a>
          <a className="text-blue-500 hover:underline" href="https://github.com/madhur2025" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-blue-500 hover:underline" href="https://www.linkedin.com/in/madhusudan-sharma-k24169/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-blue-500 hover:underline" href="https://wa.me/8769376935" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
