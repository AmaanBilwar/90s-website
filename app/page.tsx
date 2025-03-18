import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-[#eeeeee] text-black min-h-screen font-helvetica overflow-x-hidden">
      {/* Top Banner with logo */}
      <div className="bg-[#FFCA3A] p-3 text-center border-b-2 border-[#999999]">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          <span className="text-[#FF595E]">Amaan</span>
          <span className="text-[#6A4C93]">Bilwar</span>
          <span className="text-[#000000]"></span>
          <span className="text-xs align-top ml-1">™</span>
        </h1>
        <p className="text-sm text-[#666666] mt-1">Personal Website & Digital Portfolio</p>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#1982C4] p-2 flex flex-wrap justify-center gap-1 md:gap-4 border-b-2 border-[#FFCA3A]">
        {["Home", "Blog", "Music", "Resume", "GitHub", "Hackathons", "Certifications", "Courses"].map((item) => (
          <Link
            href="#"
            key={item}
            className="text-white hover:text-[#FFCA3A] font-bold px-2 py-1 transition-colors duration-200"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Main Content Area with Table Layout */}
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/4 bg-[#eeeeee] p-4 border-r border-[#cccccc]">
          <div className="text-center mb-6">
            <div className="border-2 border-[#999999] p-3 bg-white mb-4">
              <div className="w-32 h-32 mx-auto bg-[#cccccc] border border-[#999999] mb-2 flex items-center justify-center">
                <p className="text-xs text-[#666666]">[Profile Photo]</p>
              </div>
              <h2 className="font-bold text-lg">Amaan Bilwar</h2>
              <p className="text-sm text-[#666666]">Software Developer</p>
              <p className="text-sm text-[#666666]">Cincinnati, Ohio</p>
            </div>

            <div className="border border-[#999999] bg-[#8AC926] p-2 mb-4">
              <h3 className="font-bold text-[#FF595E] mb-1">Site Stats</h3>
              <p className="text-xs">Visitors: 12,345</p>
              <p className="text-xs">Last Updated: 3/18/2025</p>
            </div>

            <div className="border border-[#999999] bg-white p-2">
              <h3 className="font-bold text-[#1982C4] mb-1">Contact Me</h3>
              <p className="text-xs mb-1">Email: bilwarad@mail.uc.edu</p>
              <div className="flex justify-center gap-2 mt-2">
                <button className="bg-[#cccccc] text-black text-xs border border-[#999999] px-2 py-1">Email Me</button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-2/4 bg-white p-4 border-x border-[#cccccc]">
          <div className="mb-6">
            <div className="bg-[#1982C4] text-white p-2 font-bold mb-3">Welcome to My Personal Website!</div>

            <p className="text-sm mb-4">
              Hello and welcome to my corner of the web! I'm Amaan Bilwar, a software developer based in San Francisco. This
              website showcases my projects, skills, and interests. Feel free to explore!
            </p>

            <div className="border border-[#cccccc] p-3 mb-4">
              <div className="bg-[#FFCA3A] p-2 font-bold text-[#FF595E] mb-2">Latest Blog Post</div>
              <h3 className="font-bold mb-1">Building My First React Application</h3>
              <p className="text-xs text-[#666666] mb-2">Posted on March 15, 2025</p>
              <p className="text-sm mb-2">
                In this post, I share my experience building my first React application and the lessons I learned along
                the way...
              </p>
              <div className="text-right">
                <Link href="#" className="text-[#6A4C93] text-sm underline">
                  Read More
                </Link>
              </div>
            </div>

            <div className="border border-[#cccccc] p-3 mb-4">
              <div className="bg-[#FFCA3A] p-2 font-bold text-[#FF595E] mb-2">Featured GitHub Projects</div>
              <div className="grid grid-cols-1 gap-3">
                <div className="border border-[#cccccc] p-2 bg-[#f9f9f9]">
                  <h4 className="font-bold">Weather App</h4>
                  <p className="text-xs text-[#666666] mb-1">React, Node.js, OpenWeather API</p>
                  <p className="text-sm">
                    A responsive weather application that displays current weather and 5-day forecast.
                  </p>
                </div>
                <div className="border border-[#cccccc] p-2 bg-[#f9f9f9]">
                  <h4 className="font-bold">Task Manager</h4>
                  <p className="text-xs text-[#666666] mb-1">Vue.js, Firebase</p>
                  <p className="text-sm">
                    A simple task management application with user authentication and real-time updates.
                  </p>
                </div>
              </div>
              <div className="text-right mt-2">
                <Link href="#" className="text-[#6A4C93] text-sm underline">
                  View All Projects
                </Link>
              </div>
            </div>

            <div className="border border-[#cccccc] p-3">
              <div className="bg-[#FFCA3A] p-2 font-bold text-[#FF595E] mb-2">Recent Hackathon Wins</div>
              <div className="mb-2">
                <h4 className="font-bold">SF Tech Hackathon 2024</h4>
                <p className="text-xs text-[#666666] mb-1">1st Place - Innovation Category</p>
                <p className="text-sm">Developed an AI-powered accessibility tool for visually impaired users.</p>
              </div>
              <div className="text-right">
                <Link href="#" className="text-[#6A4C93] text-sm underline">
                  View All Hackathons
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full md:w-1/4 bg-[#eeeeee] p-4 border-l border-[#cccccc]">
          <div className="mb-6">
            <div className="border border-[#999999] bg-[#8AC926] p-2 mb-4">
              <h3 className="font-bold text-[#FF595E] mb-1">Currently Listening To</h3>
              <div className="border border-[#cccccc] bg-white p-2 mb-2">
                <p className="text-sm font-bold">Nirvana - Nevermind</p>
                <p className="text-xs text-[#666666]">Album (1991)</p>
              </div>
              <div className="border border-[#cccccc] bg-white p-2 mb-2">
                <p className="text-sm font-bold">Pearl Jam - Ten</p>
                <p className="text-xs text-[#666666]">Album (1991)</p>
              </div>
              <div className="border border-[#cccccc] bg-white p-2">
                <p className="text-sm font-bold">Radiohead - OK Computer</p>
                <p className="text-xs text-[#666666]">Album (1997)</p>
              </div>
            </div>

            <div className="border border-[#999999] bg-white p-2 mb-4">
              <h3 className="font-bold text-[#1982C4] mb-1">Certifications</h3>
              <ul className="text-xs list-disc pl-4">
                <li>AWS Certified Developer</li>
                <li>Google Cloud Professional</li>
                <li>MongoDB Certified Developer</li>
                <li>React Developer Certification</li>
              </ul>
            </div>

            <div className="border border-[#999999] bg-white p-2">
              <h3 className="font-bold text-[#1982C4] mb-1">Current Courses</h3>
              <ul className="text-xs list-disc pl-4">
                <li>Advanced Machine Learning</li>
                <li>Blockchain Development</li>
                <li>UI/UX Design Principles</li>
              </ul>
            </div>
          </div>

          <div className="border border-[#999999] bg-[#8AC926] p-2 mb-4">
            <h3 className="font-bold text-[#FF595E] mb-1">Cool Links</h3>
            <div className="text-xs">
              <Link href="#" className="text-[#6A4C93] block hover:underline mb-1">
                → GitHub
              </Link>
              <Link href="#" className="text-[#6A4C93] block hover:underline mb-1">
                → LinkedIn
              </Link>
              <Link href="#" className="text-[#6A4C93] block hover:underline mb-1">
                → Twitter
              </Link>
              <Link href="#" className="text-[#6A4C93] block hover:underline mb-1">
                → Dev.to
              </Link>
              <Link href="#" className="text-[#6A4C93] block hover:underline">
                → Medium
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1982C4] p-3 text-center border-t-2 border-[#FFCA3A] text-white">
        <div className="mb-2">
          <p className="text-xs">© 1999-2025 AmaanBilwar.com - All Rights Reserved</p>
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

