import Link from "next/link"

export default function MusicPage() {
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
            className={`text-white ${item === "Music" ? "text-[#FFCA3A]" : "hover:text-[#FFCA3A]"} font-bold px-2 py-1 transition-colors duration-200`}
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white p-4 border-x border-[#cccccc] min-h-screen">
        <div className="bg-[#1982C4] text-white p-2 font-bold mb-4">What I'm Listening To</div>

        <div className="mb-6">
          <div className="border border-[#cccccc] p-3 mb-4">
            <h2 className="font-bold text-xl text-[#FF595E] mb-3">Current Favorites</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <h3 className="font-bold">Nirvana - Nevermind</h3>
                <p className="text-xs text-[#666666] mb-2">Album (1991)</p>
                <div className="w-full h-32 bg-[#cccccc] border border-[#999999] mb-2 flex items-center justify-center">
                  <p className="text-xs text-[#666666]">[Album Cover]</p>
                </div>
                <p className="text-sm mb-2">
                  A groundbreaking album that defined the grunge movement. "Smells Like Teen Spirit" remains an anthem
                  for a generation.
                </p>
                <p className="text-sm font-bold">Favorite Tracks:</p>
                <ul className="text-xs list-disc pl-4">
                  <li>Smells Like Teen Spirit</li>
                  <li>Come As You Are</li>
                  <li>Lithium</li>
                </ul>
              </div>

              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <h3 className="font-bold">Pearl Jam - Ten</h3>
                <p className="text-xs text-[#666666] mb-2">Album (1991)</p>
                <div className="w-full h-32 bg-[#cccccc] border border-[#999999] mb-2 flex items-center justify-center">
                  <p className="text-xs text-[#666666]">[Album Cover]</p>
                </div>
                <p className="text-sm mb-2">
                  Pearl Jam's debut album showcased Eddie Vedder's powerful vocals and the band's unique sound.
                </p>
                <p className="text-sm font-bold">Favorite Tracks:</p>
                <ul className="text-xs list-disc pl-4">
                  <li>Alive</li>
                  <li>Even Flow</li>
                  <li>Black</li>
                </ul>
              </div>

              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <h3 className="font-bold">Radiohead - OK Computer</h3>
                <p className="text-xs text-[#666666] mb-2">Album (1997)</p>
                <div className="w-full h-32 bg-[#cccccc] border border-[#999999] mb-2 flex items-center justify-center">
                  <p className="text-xs text-[#666666]">[Album Cover]</p>
                </div>
                <p className="text-sm mb-2">
                  A masterpiece that explored themes of alienation, consumerism, and technology.
                </p>
                <p className="text-sm font-bold">Favorite Tracks:</p>
                <ul className="text-xs list-disc pl-4">
                  <li>Paranoid Android</li>
                  <li>Karma Police</li>
                  <li>No Surprises</li>
                </ul>
              </div>

              <div className="border border-[#cccccc] p-3 bg-[#f9f9f9]">
                <h3 className="font-bold">The Smashing Pumpkins - Siamese Dream</h3>
                <p className="text-xs text-[#666666] mb-2">Album (1993)</p>
                <div className="w-full h-32 bg-[#cccccc] border border-[#999999] mb-2 flex items-center justify-center">
                  <p className="text-xs text-[#666666]">[Album Cover]</p>
                </div>
                <p className="text-sm mb-2">
                  Billy Corgan's songwriting and the band's layered sound created an alternative rock classic.
                </p>
                <p className="text-sm font-bold">Favorite Tracks:</p>
                <ul className="text-xs list-disc pl-4">
                  <li>Today</li>
                  <li>Disarm</li>
                  <li>Cherub Rock</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-[#cccccc] p-3">
            <h2 className="font-bold text-xl text-[#FF595E] mb-3">My All-Time Playlist</h2>

            <table className="w-full border border-[#999999]">
              <thead>
                <tr className="bg-[#FFCA3A]">
                  <th className="border border-[#999999] p-2 text-sm text-left">Song</th>
                  <th className="border border-[#999999] p-2 text-sm text-left">Artist</th>
                  <th className="border border-[#999999] p-2 text-sm text-left">Album</th>
                  <th className="border border-[#999999] p-2 text-sm text-left">Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#999999] p-2 text-xs">Smells Like Teen Spirit</td>
                  <td className="border border-[#999999] p-2 text-xs">Nirvana</td>
                  <td className="border border-[#999999] p-2 text-xs">Nevermind</td>
                  <td className="border border-[#999999] p-2 text-xs">1991</td>
                </tr>
                <tr className="bg-[#f9f9f9]">
                  <td className="border border-[#999999] p-2 text-xs">Black</td>
                  <td className="border border-[#999999] p-2 text-xs">Pearl Jam</td>
                  <td className="border border-[#999999] p-2 text-xs">Ten</td>
                  <td className="border border-[#999999] p-2 text-xs">1991</td>
                </tr>
                <tr>
                  <td className="border border-[#999999] p-2 text-xs">Karma Police</td>
                  <td className="border border-[#999999] p-2 text-xs">Radiohead</td>
                  <td className="border border-[#999999] p-2 text-xs">OK Computer</td>
                  <td className="border border-[#999999] p-2 text-xs">1997</td>
                </tr>
                <tr className="bg-[#f9f9f9]">
                  <td className="border border-[#999999] p-2 text-xs">Today</td>
                  <td className="border border-[#999999] p-2 text-xs">The Smashing Pumpkins</td>
                  <td className="border border-[#999999] p-2 text-xs">Siamese Dream</td>
                  <td className="border border-[#999999] p-2 text-xs">1993</td>
                </tr>
                <tr>
                  <td className="border border-[#999999] p-2 text-xs">Everlong</td>
                  <td className="border border-[#999999] p-2 text-xs">Foo Fighters</td>
                  <td className="border border-[#999999] p-2 text-xs">The Colour and the Shape</td>
                  <td className="border border-[#999999] p-2 text-xs">1997</td>
                </tr>
                <tr className="bg-[#f9f9f9]">
                  <td className="border border-[#999999] p-2 text-xs">1979</td>
                  <td className="border border-[#999999] p-2 text-xs">The Smashing Pumpkins</td>
                  <td className="border border-[#999999] p-2 text-xs">Mellon Collie and the Infinite Sadness</td>
                  <td className="border border-[#999999] p-2 text-xs">1995</td>
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

