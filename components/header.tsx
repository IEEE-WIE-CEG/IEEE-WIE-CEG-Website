import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center h-20 px-6 border-b bg-purple-700 shadow-sm">
      <Link href="/" className="flex items-center gap-3 text-xl font-bold tracking-tight text-white mr-8">
        <Image
          src="/logo2.png"
          alt="IEEE WIE-CEG Student Chapter Logo"
          width={80}
          height={80}
          className="w-24 h-19"
        />
        <span className="hidden sm:inline">IEEE WIE-CEG Student Chapter</span>
      </Link>
      <nav className="flex-1 flex justify-start">
        <ul className="flex gap-6 md:gap-8 lg:gap-10 items-center">
          <li>
            <Link href="/" className="transition-colors text-purple-100 hover:text-white font-medium px-2 py-1 rounded-md hover:bg-white/10">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition-colors text-purple-100 hover:text-white font-medium px-2 py-1 rounded-md hover:bg-white/10">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/events" className="transition-colors text-purple-100 hover:text-white font-medium px-2 py-1 rounded-md hover:bg-white/10">
              Events
            </Link>
          </li>
          <li>
            <Link href="/research" className="transition-colors text-purple-100 hover:text-white font-medium px-2 py-1 rounded-md hover:bg-white/10">
              Research
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="transition-colors text-purple-100 hover:text-white font-medium px-2 py-1 rounded-md hover:bg-white/10">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className="transition-colors text-purple-100 hover:text-white font-medium px-2 py-1 rounded-md hover:bg-white/10">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
