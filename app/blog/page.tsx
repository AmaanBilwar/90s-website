import Link from "next/link"

export default function BlogPage() {
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
            className={`text-white ${item === "Blog" ? "text-[#FFCA3A]" : "hover:text-[#FFCA3A]"} font-bold px-2 py-1 transition-colors duration-200`}
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white p-4 border-x border-[#cccccc] min-h-screen">
        <div className="bg-[#1982C4] text-white p-2 font-bold mb-4">My Blog</div>

        <div className="mb-6">
          <div className="border border-[#cccccc] p-3 mb-4">
            <h2 className="font-bold text-xl text-[#FF595E]">Building My First React Application</h2>
            <p className="text-xs text-[#666666] mb-3">Posted on March 15, 2025</p>

            <p className="text-sm mb-3">
              In this post, I share my experience building my first React application and the lessons I learned along
              the way.
            </p>

            <p className="text-sm mb-3">
              When I first started learning React, I was overwhelmed by the component-based architecture and the concept
              of state management. However, after spending some time with the documentation and following a few
              tutorials, I began to appreciate the elegance of React's design.
            </p>

            <p className="text-sm mb-3">
              My first project was a simple task management application. I wanted to create something practical that I
              could use in my daily life while learning the fundamentals of React.
            </p>

            <div className="border border-[#cccccc] bg-[#f9f9f9] p-2 mb-3">
              <p className="text-xs font-bold">Key Features of My Task Manager:</p>
              <ul className="text-xs list-disc pl-4">
                <li>Add, edit, and delete tasks</li>
                <li>Mark tasks as complete</li>
                <li>Filter tasks by status</li>
                <li>Persist data using localStorage</li>
              </ul>
            </div>

            <p className="text-sm mb-3">
              The most challenging aspect was implementing the state management. I started with React's built-in
              useState hook, but as the application grew, I realized I needed a more robust solution. That's when I
              learned about useReducer and Context API.
            </p>

            <p className="text-sm">
              Overall, this project taught me valuable lessons about component design, state management, and the React
              ecosystem. I'm excited to continue building more complex applications and exploring advanced React
              concepts.
            </p>
          </div>

          <div className="border border-[#cccccc] p-3 mb-4">
            <h2 className="font-bold text-xl text-[#FF595E]">My Journey into Web Development</h2>
            <p className="text-xs text-[#666666] mb-3">Posted on February 28, 2025</p>

            <p className="text-sm mb-3">
              In this post, I reflect on my journey into web development and the path that led me to where I am today.
            </p>

            <p className="text-sm mb-3">
              I started my coding journey back in high school when I first discovered HTML and CSS. I was fascinated by
              the ability to create something visual with just a few lines of code. My first website was a simple page
              about my favorite bands, complete with blinking text and a visitor counter - very 90s!
            </p>

            <p className="text-sm">
              Fast forward to today, and I've expanded my skills to include JavaScript, React, Node.js, and various
              other technologies. The web development landscape has changed dramatically, but the excitement of building
              something from scratch remains the same.
            </p>
          </div>

          <div className="border border-[#cccccc] p-3">
            <h2 className="font-bold text-xl text-[#FF595E]">The Importance of Responsive Design</h2>
            <p className="text-xs text-[#666666] mb-3">Posted on January 15, 2025</p>

            <p className="text-sm mb-3">
              In this post, I discuss why responsive design is crucial in modern web development.
            </p>

            <p className="text-sm">
              With the increasing variety of devices used to access the web, ensuring your website looks good and
              functions well on all screen sizes is more important than ever. Responsive design isn't just about making
              your site look good on mobile - it's about providing a consistent and enjoyable user experience regardless
              of how users access your content.
            </p>
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

