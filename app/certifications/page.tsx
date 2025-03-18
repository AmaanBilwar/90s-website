import Link from "next/link"

export default function CertificationsPage() {
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
            className={`text-white ${item === "Certifications" ? "text-[#FFCA3A]" : "hover:text-[#FFCA3A]"} font-bold px-2 py-1 transition-colors duration-200`}
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white p-4 border-x border-[#cccccc] min-h-screen">
        <div className="bg-[#1982C4] text-white p-2 font-bold mb-4">My Certifications</div>

        <div className="mb-6">
          <div className="border border-[#cccccc] p-3 mb-4">
            <h2 className="font-bold text-xl text-[#FF595E] mb-3">Professional Certifications</h2>

            <div className="grid grid-cols-1 gap-4">
              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/4">
                    <div className="w-full aspect-square bg-[#cccccc] border border-[#999999] flex items-center justify-center">
                      <p className="text-xs text-[#666666]">[AWS Logo]</p>
                    </div>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h3 className="font-bold">AWS Certified Developer - Associate</h3>
                    <p className="text-xs text-[#666666] mb-2">
                      Amazon Web Services | Issued: January 2024 | Expires: January 2027
                    </p>
                    <p className="text-sm mb-2">
                      This certification validates technical expertise in developing and maintaining applications on the
                      AWS platform. Skills include:
                    </p>
                    <ul className="text-sm list-disc pl-5 mb-2">
                      <li>Writing code that interacts with AWS services</li>
                      <li>Selecting appropriate AWS services for application requirements</li>
                      <li>Deploying code using CI/CD pipelines</li>
                      <li>Implementing authentication and authorization</li>
                    </ul>
                    <div className="flex gap-2">
                      <Link href="#" className="bg-[#6A4C93] text-white text-xs px-2 py-1 border border-[#999999]">
                        View Certificate
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/4">
                    <div className="w-full aspect-square bg-[#cccccc] border border-[#999999] flex items-center justify-center">
                      <p className="text-xs text-[#666666]">[Google Cloud Logo]</p>
                    </div>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h3 className="font-bold">Google Cloud Professional Developer</h3>
                    <p className="text-xs text-[#666666] mb-2">
                      Google Cloud | Issued: October 2023 | Expires: October 2025
                    </p>
                    <p className="text-sm mb-2">
                      This certification demonstrates proficiency in building scalable and reliable applications using
                      Google Cloud. Skills include:
                    </p>
                    <ul className="text-sm list-disc pl-5 mb-2">
                      <li>Designing and building cloud-native applications</li>
                      <li>Managing application performance monitoring</li>
                      <li>Implementing Google Cloud storage solutions</li>
                      <li>Integrating Google Cloud APIs</li>
                    </ul>
                    <div className="flex gap-2">
                      <Link href="#" className="bg-[#6A4C93] text-white text-xs px-2 py-1 border border-[#999999]">
                        View Certificate
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/4">
                    <div className="w-full aspect-square bg-[#cccccc] border border-[#999999] flex items-center justify-center">
                      <p className="text-xs text-[#666666]">[MongoDB Logo]</p>
                    </div>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h3 className="font-bold">MongoDB Certified Developer</h3>
                    <p className="text-xs text-[#666666] mb-2">MongoDB | Issued: May 2023 | No Expiration</p>
                    <p className="text-sm mb-2">
                      This certification validates expertise in developing applications using MongoDB. Skills include:
                    </p>
                    <ul className="text-sm list-disc pl-5 mb-2">
                      <li>Designing efficient document schemas</li>
                      <li>Writing optimized queries</li>
                      <li>Implementing data aggregation pipelines</li>
                      <li>Managing indexes for performance</li>
                    </ul>
                    <div className="flex gap-2">
                      <Link href="#" className="bg-[#6A4C93] text-white text-xs px-2 py-1 border border-[#999999]">
                        View Certificate
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/4">
                    <div className="w-full aspect-square bg-[#cccccc] border border-[#999999] flex items-center justify-center">
                      <p className="text-xs text-[#666666]">[React Logo]</p>
                    </div>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h3 className="font-bold">React Developer Certification</h3>
                    <p className="text-xs text-[#666666] mb-2">Meta | Issued: February 2023 | No Expiration</p>
                    <p className="text-sm mb-2">
                      This certification demonstrates proficiency in building applications with React. Skills include:
                    </p>
                    <ul className="text-sm list-disc pl-5 mb-2">
                      <li>Creating and managing React components</li>
                      <li>Implementing state management solutions</li>
                      <li>Building responsive user interfaces</li>
                      <li>Optimizing React applications for performance</li>
                    </ul>
                    <div className="flex gap-2">
                      <Link href="#" className="bg-[#6A4C93] text-white text-xs px-2 py-1 border border-[#999999]">
                        View Certificate
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#cccccc] p-3">
            <h2 className="font-bold text-xl text-[#FF595E] mb-3">Certification Roadmap</h2>

            <table className="w-full border border-[#999999] mb-4">
              <thead>
                <tr className="bg-[#FFCA3A]">
                  <th className="border border-[#999999] p-2 text-sm text-left">Certification</th>
                  <th className="border border-[#999999] p-2 text-sm text-left">Provider</th>
                  <th className="border border-[#999999] p-2 text-sm text-left">Target Date</th>
                  <th className="border border-[#999999] p-2 text-sm text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#999999] p-2 text-sm">AWS Solutions Architect - Professional</td>
                  <td className="border border-[#999999] p-2 text-sm">Amazon Web Services</td>
                  <td className="border border-[#999999] p-2 text-sm">December 2025</td>
                  <td className="border border-[#999999] p-2 text-sm">In Progress</td>
                </tr>
                <tr className="bg-[#f9f9f9]">
                  <td className="border border-[#999999] p-2 text-sm">Certified Kubernetes Administrator</td>
                  <td className="border border-[#999999] p-2 text-sm">Cloud Native Computing Foundation</td>
                  <td className="border border-[#999999] p-2 text-sm">August 2025</td>
                  <td className="border border-[#999999] p-2 text-sm">Planned</td>
                </tr>
                <tr>
                  <td className="border border-[#999999] p-2 text-sm">Azure Developer Associate</td>
                  <td className="border border-[#999999] p-2 text-sm">Microsoft</td>
                  <td className="border border-[#999999] p-2 text-sm">October 2025</td>
                  <td className="border border-[#999999] p-2 text-sm">Planned</td>
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

