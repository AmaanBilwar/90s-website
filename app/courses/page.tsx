import Link from "next/link"

export default function CoursesPage() {
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
            className={`text-white ${item === "Courses" ? "text-[#FFCA3A]" : "hover:text-[#FFCA3A]"} font-bold px-2 py-1 transition-colors duration-200`}
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white p-4 border-x border-[#cccccc] min-h-screen">
        <div className="bg-[#1982C4] text-white p-2 font-bold mb-4">Courses I'm Taking</div>

        <div className="mb-6">
          <div className="border border-[#cccccc] p-3 mb-4">
            <h2 className="font-bold text-xl text-[#FF595E] mb-3">Current Courses</h2>

            <div className="grid grid-cols-1 gap-4">
              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/4">
                    <div className="w-full aspect-square bg-[#cccccc] border border-[#999999] flex items-center justify-center">
                      <p className="text-xs text-[#666666]">[Course Image]</p>
                    </div>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h3 className="font-bold">Advanced Machine Learning</h3>
                    <p className="text-xs text-[#666666] mb-2">
                      Stanford University | Online | In Progress (75% Complete)
                    </p>
                    <p className="text-sm mb-2">
                      This course covers advanced topics in machine learning, including deep learning, reinforcement
                      learning, and generative models. The curriculum includes hands-on projects and real-world case
                      studies.
                    </p>
                    <div className="w-full bg-[#eeeeee] h-4 mb-2 border border-[#999999]">
                      <div className="bg-[#8AC926] h-full" style={{ width: "75%" }}></div>
                    </div>
                    <p className="text-xs text-[#666666] mb-2">Key Topics:</p>
                    <ul className="text-sm list-disc pl-5 mb-2">
                      <li>Neural Networks and Deep Learning</li>
                      <li>Convolutional Neural Networks</li>
                      <li>Recurrent Neural Networks</li>
                      <li>Generative Adversarial Networks</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/4">
                    <div className="w-full aspect-square bg-[#cccccc] border border-[#999999] flex items-center justify-center">
                      <p className="text-xs text-[#666666]">[Course Image]</p>
                    </div>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h3 className="font-bold">Blockchain Development</h3>
                    <p className="text-xs text-[#666666] mb-2">Udemy | Online | In Progress (40% Complete)</p>
                    <p className="text-sm mb-2">
                      This comprehensive course teaches blockchain development from the ground up. Topics include smart
                      contracts, decentralized applications, and blockchain architecture.
                    </p>
                    <div className="w-full bg-[#eeeeee] h-4 mb-2 border border-[#999999]">
                      <div className="bg-[#8AC926] h-full" style={{ width: "40%" }}></div>
                    </div>
                    <p className="text-xs text-[#666666] mb-2">Key Topics:</p>
                    <ul className="text-sm list-disc pl-5 mb-2">
                      <li>Ethereum and Solidity</li>
                      <li>Smart Contract Development</li>
                      <li>Web3.js and Ethers.js</li>
                      <li>Decentralized Finance (DeFi)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/4">
                    <div className="w-full aspect-square bg-[#cccccc] border border-[#999999] flex items-center justify-center">
                      <p className="text-xs text-[#666666]">[Course Image]</p>
                    </div>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h3 className="font-bold">UI/UX Design Principles</h3>
                    <p className="text-xs text-[#666666] mb-2">Coursera | Online | In Progress (60% Complete)</p>
                    <p className="text-sm mb-2">
                      This course covers the fundamentals of user interface and user experience design. It includes
                      principles of visual design, interaction design, and usability testing.
                    </p>
                    <div className="w-full bg-[#eeeeee] h-4 mb-2 border border-[#999999]">
                      <div className="bg-[#8AC926] h-full" style={{ width: "60%" }}></div>
                    </div>
                    <p className="text-xs text-[#666666] mb-2">Key Topics:</p>
                    <ul className="text-sm list-disc pl-5 mb-2">
                      <li>User Research and Personas</li>
                      <li>Information Architecture</li>
                      <li>Wireframing and Prototyping</li>
                      <li>Usability Testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#cccccc] p-3">
            <h2 className="font-bold text-xl text-[#FF595E] mb-3">Completed Courses</h2>

            <table className="w-full border border-[#999999] mb-4">
              <thead>
                <tr className="bg-[#FFCA3A]">
                  <th className="border border-[#999999] p-2 text-sm text-left">Course</th>
                  <th className="border border-[#999999] p-2 text-sm text-left">Provider</th>
                  <th className="border border-[#999999] p-2 text-sm text-left">Completion Date</th>
                  <th className="border border-[#999999] p-2 text-sm text-left">Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#999999] p-2 text-sm">Full Stack Web Development</td>
                  <td className="border border-[#999999] p-2 text-sm">Udemy</td>
                  <td className="border border-[#999999] p-2 text-sm">December 2023</td>
                  <td className="border border-[#999999] p-2 text-sm">98%</td>
                </tr>
                <tr className="bg-[#f9f9f9]">
                  <td className="border border-[#999999] p-2 text-sm">Data Structures and Algorithms</td>
                  <td className="border border-[#999999] p-2 text-sm">MIT OpenCourseWare</td>
                  <td className="border border-[#999999] p-2 text-sm">October 2023</td>
                  <td className="border border-[#999999] p-2 text-sm">95%</td>
                </tr>
                <tr>
                  <td className="border border-[#999999] p-2 text-sm">Cloud Architecture with AWS</td>
                  <td className="border border-[#999999] p-2 text-sm">A Cloud Guru</td>
                  <td className="border border-[#999999] p-2 text-sm">August 2023</td>
                  <td className="border border-[#999999] p-2 text-sm">92%</td>
                </tr>
                <tr className="bg-[#f9f9f9]">
                  <td className="border border-[#999999] p-2 text-sm">React Native - The Practical Guide</td>
                  <td className="border border-[#999999] p-2 text-sm">Udemy</td>
                  <td className="border border-[#999999] p-2 text-sm">June 2023</td>
                  <td className="border border-[#999999] p-2 text-sm">97%</td>
                </tr>
                <tr>
                  <td className="border border-[#999999] p-2 text-sm">Python for Data Science</td>
                  <td className="border border-[#999999] p-2 text-sm">Coursera</td>
                  <td className="border border-[#999999] p-2 text-sm">April 2023</td>
                  <td className="border border-[#999999] p-2 text-sm">94%</td>
                </tr>
              </tbody>
            </table>
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

