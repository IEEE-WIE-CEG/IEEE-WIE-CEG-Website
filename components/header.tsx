import { Frame } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="flex items-center h-16 px-6 border-b bg-background shadow-sm">
      <Link href="/" className="flex items-center gap-3 text-xl font-bold tracking-tight text-primary mr-8">
        <Frame className="w-7 h-7 text-primary" />
        <span className="hidden sm:inline">IEEE WIE CEG</span>
      </Link>
      <nav className="flex-1 flex justify-center">
        <ul className="flex gap-6 md:gap-8 lg:gap-10 items-center">
          <li>
            <Link href="/" className="transition-colors text-muted-foreground hover:text-primary font-medium px-2 py-1 rounded-md hover:bg-accent/40">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition-colors text-muted-foreground hover:text-primary font-medium px-2 py-1 rounded-md hover:bg-accent/40">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/events" className="transition-colors text-muted-foreground hover:text-primary font-medium px-2 py-1 rounded-md hover:bg-accent/40">
              Events
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="transition-colors text-muted-foreground hover:text-primary font-medium px-2 py-1 rounded-md hover:bg-accent/40">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/achievements" className="transition-colors text-muted-foreground hover:text-primary font-medium px-2 py-1 rounded-md hover:bg-accent/40">
              Achievements
            </Link>
          </li>
          <li>
            <Link href="/contact" className="transition-colors text-muted-foreground hover:text-primary font-medium px-2 py-1 rounded-md hover:bg-accent/40">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
