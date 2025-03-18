import Link from "next/link"

export default function GitHubPage() {
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
            className={`text-white ${item === "GitHub" ? "text-[#FFCA3A]" : "hover:text-[#FFCA3A]"} font-bold px-2 py-1 transition-colors duration-200`}
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white p-4 border-x border-[#cccccc] min-h-screen">
        <div className="bg-[#1982C4] text-white p-2 font-bold mb-4">My GitHub Projects</div>

        <div className="mb-6">
          <div className="border border-[#cccccc] p-3 mb-4">
            <h2 className="font-bold text-xl text-[#FF595E] mb-3">Featured Projects</h2>

            <div className="grid grid-cols-1 gap-4">
              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <h3 className="font-bold">Weather App</h3>
                <p className="text-xs text-[#666666] mb-2">React, Node.js, OpenWeather API</p>
                <div className="w-full h-40 bg-[#cccccc] border border-[#999999] mb-2 flex items-center justify-center">
                  <p className="text-xs text-[#666666]">[Project Screenshot]</p>
                </div>
                <p className="text-sm mb-2">
                  A responsive weather application that displays current weather and 5-day forecast for any location.
                  Users can save favorite locations and toggle between Celsius and Fahrenheit.
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-[#8AC926] text-white text-xs px-2 py-1 rounded">React</span>
                  <span className="bg-[#1982C4] text-white text-xs px-2 py-1 rounded">Node.js</span>
                  <span className="bg-[#6A4C93] text-white text-xs px-2 py-1 rounded">API</span>
                </div>
                <div className="flex gap-2">
                  <Link href="#" className="bg-[#FF595E] text-white text-xs px-2 py-1 border border-[#999999]">
                    View Demo
                  </Link>
                  <Link href="#" className="bg-[#6A4C93] text-white text-xs px-2 py-1 border border-[#999999]">
                    GitHub Repo
                  </Link>
                </div>
              </div>

              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <h3 className="font-bold">Task Manager</h3>
                <p className="text-xs text-[#666666] mb-2">Vue.js, Firebase</p>
                <div className="w-full h-40 bg-[#cccccc] border border-[#999999] mb-2 flex items-center justify-center">
                  <p className="text-xs text-[#666666]">[Project Screenshot]</p>
                </div>
                <p className="text-sm mb-2">
                  A simple task management application with user authentication and real-time updates. Features include
                  task categories, due dates, and priority levels.
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-[#8AC926] text-white text-xs px-2 py-1 rounded">Vue.js</span>
                  <span className="bg-[#1982C4] text-white text-xs px-2 py-1 rounded">Firebase</span>
                  <span className="bg-[#6A4C93] text-white text-xs px-2 py-1 rounded">Authentication</span>
                </div>
                <div className="flex gap-2">
                  <Link href="#" className="bg-[#FF595E] text-white text-xs px-2 py-1 border border-[#999999]">
                    View Demo
                  </Link>
                  <Link href="#" className="bg-[#6A4C93] text-white text-xs px-2 py-1 border border-[#999999]">
                    GitHub Repo
                  </Link>
                </div>
              </div>

              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <h3 className="font-bold">E-Commerce API</h3>
                <p className="text-xs text-[#666666] mb-2">Node.js, Express, MongoDB</p>
                <div className="w-full h-40 bg-[#cccccc] border border-[#999999] mb-2 flex items-center justify-center">
                  <p className="text-xs text-[#666666]">[API Documentation Screenshot]</p>
                </div>
                <p className="text-sm mb-2">
                  A RESTful API for e-commerce applications with endpoints for products, users, orders, and payments.
                  Includes authentication, authorization, and input validation.
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-[#8AC926] text-white text-xs px-2 py-1 rounded">Node.js</span>
                  <span className="bg-[#1982C4] text-white text-xs px-2 py-1 rounded">Express</span>
                  <span className="bg-[#6A4C93] text-white text-xs px-2 py-1 rounded">MongoDB</span>
                </div>
                <div className="flex gap-2">
                  <Link href="#" className="bg-[#FF595E] text-white text-xs px-2 py-1 border border-[#999999]">
                    API Docs
                  </Link>
                  <Link href="#" className="bg-[#6A4C93] text-white text-xs px-2 py-1 border border-[#999999]">
                    GitHub Repo
                  </Link>
                </div>
              </div>

              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <h3 className="font-bold">Portfolio Website</h3>
                <p className="text-xs text-[#666666] mb-2">Next.js, Tailwind CSS</p>
                <div className="w-full h-40 bg-[#cccccc] border border-[#999999] mb-2 flex items-center justify-center">
                  <p className="text-xs text-[#666666]">[Website Screenshot]</p>
                </div>
                <p className="text-sm mb-2">
                  A modern portfolio website built with Next.js and Tailwind CSS. Features responsive design, dark mode,
                  and animations.
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-[#8AC926] text-white text-xs px-2 py-1 rounded">Next.js</span>
                  <span className="bg-[#1982C4] text-white text-xs px-2 py-1 rounded">Tailwind</span>
                  <span className="bg-[#6A4C93] text-white text-xs px-2 py-1 rounded">Responsive</span>
                </div>
                <div className="flex gap-2">
                  <Link href="#" className="bg-[#FF595E] text-white text-xs px-2 py-1 border border-[#999999]">
                    View Site
                  </Link>
                  <Link href="#" className="bg-[#6A4C93] text-white text-xs px-2 py-1 border border-[#999999]">
                    GitHub Repo
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#cccccc] p-3">
            <h2 className="font-bold text-xl text-[#FF595E] mb-3">GitHub Stats</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <h3 className="font-bold mb-2">Contribution Activity</h3>
                <div className="w-full h-40 bg-[#cccccc] border border-[#999999] flex items-center justify-center">
                  <p className="text-xs text-[#666666]">[GitHub Contribution Graph]</p>
                </div>
              </div>

              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <h3 className="font-bold mb-2">Language Distribution</h3>
                <div className="w-full h-40 bg-[#cccccc] border border-[#999999] flex items-center justify-center">
                  <p className="text-xs text-[#666666]">[Language Pie Chart]</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="#" className="bg-[#1982C4] text-white text-sm border border-[#999999] px-4 py-2 inline-block">
                Visit My GitHub Profile
              </Link>
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

