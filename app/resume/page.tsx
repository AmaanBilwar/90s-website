import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="bg-[#eeeeee] text-black min-h-screen font-helvetica overflow-x-hidden">
      {/* Top Banner with logo */}
      <div className="bg-[#FFCA3A] p-3 text-center border-b-2 border-[#999999]">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          <span className="text-[#FF595E]">John</span>
          <span className="text-[#6A4C93]">Doe</span>
          <span className="text-[#000000]">.com</span>
          <span className="text-xs align-top ml-1">™</span>
        </h1>
        <p className="text-sm text-[#666666] mt-1">Personal Website & Digital Portfolio</p>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#1982C4] p-2 flex flex-wrap justify-center gap-1 md:gap-4 border-b-2 border-[#FFCA3A]">
        {["Home", "Blog", "Music", "Resume", "GitHub", "Hackathons", "Certifications", "Courses"].map((item) => (
          <Link
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            key={item}
            className={`text-white ${item === "Resume" ? "text-[#FFCA3A]" : "hover:text-[#FFCA3A]"} font-bold px-2 py-1 transition-colors duration-200`}
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white p-4 border-x border-[#cccccc] min-h-screen">
        <div className="bg-[#1982C4] text-white p-2 font-bold mb-4">My Resume</div>

        <div className="mb-6">
          <div className="border border-[#cccccc] p-4">
            <h2 className="font-bold text-xl text-[#FF595E] mb-3">John Doe</h2>
            <p className="text-sm mb-1">Software Developer</p>
            <p className="text-sm mb-1">San Francisco, CA</p>
            <p className="text-sm mb-1">Email: john@johndoe.com</p>
            <p className="text-sm">Phone: (555) 123-4567</p>

            <div className="h-1 bg-[#cccccc] my-4"></div>

            <h3 className="font-bold text-lg text-[#1982C4] mb-2">Professional Summary</h3>
            <p className="text-sm mb-4">
              Experienced software developer with a passion for creating efficient, scalable, and user-friendly
              applications. Skilled in front-end and back-end development with expertise in React, Node.js, and cloud
              technologies.
            </p>

            <h3 className="font-bold text-lg text-[#1982C4] mb-2">Work Experience</h3>

            <div className="mb-3">
              <h4 className="font-bold">Senior Software Developer</h4>
              <p className="text-sm text-[#666666]">TechCorp Inc. | San Francisco, CA | 2022 - Present</p>
              <ul className="text-sm list-disc pl-5 mt-1">
                <li>Lead development of the company's flagship web application using React and Node.js</li>
                <li>Implemented CI/CD pipelines that reduced deployment time by 40%</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Optimized database queries resulting in a 30% improvement in application performance</li>
              </ul>
            </div>

            <div className="mb-3">
              <h4 className="font-bold">Software Developer</h4>
              <p className="text-sm text-[#666666]">WebSolutions LLC | Oakland, CA | 2019 - 2022</p>
              <ul className="text-sm list-disc pl-5 mt-1">
                <li>Developed and maintained client websites using JavaScript, HTML, and CSS</li>
                <li>Created RESTful APIs using Express.js and MongoDB</li>
                <li>Collaborated with design team to implement responsive UI components</li>
                <li>Participated in agile development processes including daily stand-ups and sprint planning</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-bold">Junior Developer</h4>
              <p className="text-sm text-[#666666]">StartUp Co. | San Jose, CA | 2017 - 2019</p>
              <ul className="text-sm list-disc pl-5 mt-1">
                <li>Assisted in the development of a mobile application using React Native</li>
                <li>Fixed bugs and implemented minor features</li>
                <li>Wrote unit tests to ensure code quality</li>
              </ul>
            </div>

            <h3 className="font-bold text-lg text-[#1982C4] mb-2">Education</h3>

            <div className="mb-4">
              <h4 className="font-bold">Bachelor of Science in Computer Science</h4>
              <p className="text-sm text-[#666666]">University of California, Berkeley | 2013 - 2017</p>
              <p className="text-sm mt-1">GPA: 3.8/4.0</p>
            </div>

            <h3 className="font-bold text-lg text-[#1982C4] mb-2">Skills</h3>

            <table className="w-full border border-[#999999] mb-4">
              <thead>
                <tr className="bg-[#FFCA3A]">
                  <th className="border border-[#999999] p-2 text-sm text-left">Category</th>
                  <th className="border border-[#999999] p-2 text-sm text-left">Skills</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#999999] p-2 text-sm font-bold">Programming Languages</td>
                  <td className="border border-[#999999] p-2 text-sm">
                    JavaScript, TypeScript, Python, Java, HTML, CSS
                  </td>
                </tr>
                <tr className="bg-[#f9f9f9]">
                  <td className="border border-[#999999] p-2 text-sm font-bold">Frameworks & Libraries</td>
                  <td className="border border-[#999999] p-2 text-sm">React, Node.js, Express.js, Next.js, Vue.js</td>
                </tr>
                <tr>
                  <td className="border border-[#999999] p-2 text-sm font-bold">Databases</td>
                  <td className="border border-[#999999] p-2 text-sm">MongoDB, PostgreSQL, MySQL, Redis</td>
                </tr>
                <tr className="bg-[#f9f9f9]">
                  <td className="border border-[#999999] p-2 text-sm font-bold">Tools & Platforms</td>
                  <td className="border border-[#999999] p-2 text-sm">Git, Docker, AWS, Google Cloud, CI/CD, Jira</td>
                </tr>
              </tbody>
            </table>

            <div className="text-center">
              <button className="bg-[#6A4C93] text-white text-sm border border-[#999999] px-4 py-2">
                Download PDF Version
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1982C4] p-3 text-center border-t-2 border-[#FFCA3A] text-white">
        <div className="mb-2">
          <p className="text-xs">© 1999-2025 JohnDoe.com - All Rights Reserved</p>
          <p className="text-xs">This page is best viewed at 800x600 resolution</p>
        </div>
        <div className="flex justify-center gap-4">
          <div className="border border-white p-1 bg-black">
            <p className="text-white text-xs">Valid HTML 4.01</p>
          </div>
          <div className="border border-white p-1 bg-black">
            <p className="text-white text-xs">Made with Notepad</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

