import Link from "next/link"

export default function HackathonsPage() {
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
            className={`text-white ${item === "Hackathons" ? "text-[#FFCA3A]" : "hover:text-[#FFCA3A]"} font-bold px-2 py-1 transition-colors duration-200`}
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white p-4 border-x border-[#cccccc] min-h-screen">
        <div className="bg-[#1982C4] text-white p-2 font-bold mb-4">My Hackathon Projects & Wins</div>

        <div className="mb-6">
          <div className="border border-[#cccccc] p-3 mb-4">
            <h2 className="font-bold text-xl text-[#FF595E] mb-3">Hackathon Achievements</h2>

            <div className="grid grid-cols-1 gap-4">
              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/4">
                    <div className="w-full aspect-square bg-[#cccccc] border border-[#999999] flex items-center justify-center">
                      <p className="text-xs text-[#666666]">[Trophy Image]</p>
                    </div>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h3 className="font-bold">SF Tech Hackathon 2024</h3>
                    <p className="text-xs text-[#666666] mb-2">March 2024 | 1st Place - Innovation Category</p>
                    <p className="text-sm mb-2">
                      Developed an AI-powered accessibility tool for visually impaired users. The application uses
                      computer vision to identify objects and read text aloud, helping users navigate their environment.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-[#8AC926] text-white text-xs px-2 py-1 rounded">Python</span>
                      <span className="bg-[#1982C4] text-white text-xs px-2 py-1 rounded">TensorFlow</span>
                      <span className="bg-[#6A4C93] text-white text-xs px-2 py-1 rounded">React Native</span>
                    </div>
                    <div className="flex gap-2">
                      <Link href="#" className="bg-[#FF595E] text-white text-xs px-2 py-1 border border-[#999999]">
                        Project Details
                      </Link>
                      <Link href="#" className="bg-[#6A4C93] text-white text-xs px-2 py-1 border border-[#999999]">
                        GitHub Repo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/4">
                    <div className="w-full aspect-square bg-[#cccccc] border border-[#999999] flex items-center justify-center">
                      <p className="text-xs text-[#666666]">[Trophy Image]</p>
                    </div>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h3 className="font-bold">Global Climate Hackathon 2023</h3>
                    <p className="text-xs text-[#666666] mb-2">November 2023 | 2nd Place - Sustainability Track</p>
                    <p className="text-sm mb-2">
                      Created a platform that connects local farmers with consumers to reduce food waste and carbon
                      emissions from transportation. The application includes features for inventory management,
                      delivery scheduling, and carbon footprint tracking.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-[#8AC926] text-white text-xs px-2 py-1 rounded">React</span>
                      <span className="bg-[#1982C4] text-white text-xs px-2 py-1 rounded">Node.js</span>
                      <span className="bg-[#6A4C93] text-white text-xs px-2 py-1 rounded">MongoDB</span>
                    </div>
                    <div className="flex gap-2">
                      <Link href="#" className="bg-[#FF595E] text-white text-xs px-2 py-1 border border-[#999999]">
                        Project Details
                      </Link>
                      <Link href="#" className="bg-[#6A4C93] text-white text-xs px-2 py-1 border border-[#999999]">
                        GitHub Repo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/4">
                    <div className="w-full aspect-square bg-[#cccccc] border border-[#999999] flex items-center justify-center">
                      <p className="text-xs text-[#666666]">[Trophy Image]</p>
                    </div>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h3 className="font-bold">HealthTech Hackathon 2023</h3>
                    <p className="text-xs text-[#666666] mb-2">July 2023 | 1st Place - Best Mobile App</p>
                    <p className="text-sm mb-2">
                      Developed a mobile application that helps users track their medication schedule and provides
                      reminders. The app includes features for scanning prescriptions, tracking side effects, and
                      sharing reports with healthcare providers.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-[#8AC926] text-white text-xs px-2 py-1 rounded">Flutter</span>
                      <span className="bg-[#1982C4] text-white text-xs px-2 py-1 rounded">Firebase</span>
                      <span className="bg-[#6A4C93] text-white text-xs px-2 py-1 rounded">ML Kit</span>
                    </div>
                    <div className="flex gap-2">
                      <Link href="#" className="bg-[#FF595E] text-white text-xs px-2 py-1 border border-[#999999]">
                        Project Details
                      </Link>
                      <Link href="#" className="bg-[#6A4C93] text-white text-xs px-2 py-1 border border-[#999999]">
                        GitHub Repo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#cccccc] p-3">
            <h2 className="font-bold text-xl text-[#FF595E] mb-3">Upcoming Hackathons</h2>

            <table className="w-full border border-[#999999] mb-4">
              <thead>
                <tr className="bg-[#FFCA3A]">
                  <th className="border border-[#999999] p-2 text-sm text-left">Event</th>
                  <th className="border border-[#999999] p-2 text-sm text-left">Date</th>
                  <th className="border border-[#999999] p-2 text-sm text-left">Location</th>
                  <th className="border border-[#999999] p-2 text-sm text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#999999] p-2 text-sm">AI for Good Hackathon</td>
                  <td className="border border-[#999999] p-2 text-sm">June 15-17, 2025</td>
                  <td className="border border-[#999999] p-2 text-sm">San Francisco, CA</td>
                  <td className="border border-[#999999] p-2 text-sm">Registered</td>
                </tr>
                <tr className="bg-[#f9f9f9]">
                  <td className="border border-[#999999] p-2 text-sm">Blockchain Innovation Challenge</td>
                  <td className="border border-[#999999] p-2 text-sm">July 22-24, 2025</td>
                  <td className="border border-[#999999] p-2 text-sm">Virtual</td>
                  <td className="border border-[#999999] p-2 text-sm">Interested</td>
                </tr>
                <tr>
                  <td className="border border-[#999999] p-2 text-sm">EdTech Hackathon</td>
                  <td className="border border-[#999999] p-2 text-sm">August 5-7, 2025</td>
                  <td className="border border-[#999999] p-2 text-sm">New York, NY</td>
                  <td className="border border-[#999999] p-2 text-sm">Planning</td>
                </tr>
              </tbody>
            </table>

            <div className="text-center">
              <Link href="#" className="bg-[#1982C4] text-white text-sm border border-[#999999] px-4 py-2 inline-block">
                View All Hackathon Events
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

