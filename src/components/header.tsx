import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Frame, Search } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 bg-background">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4">
        <Frame className="w-6 h-6" />
        <span className="hidden sm:inline">IEEE WIE CEG</span>
      </Link>
      <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <Link href="/about" className="text-muted-foreground hover:text-foreground">
          About Us
        </Link>
        <Link href="/events" className="text-muted-foreground hover:text-foreground">
          Events
        </Link>
        <Link href="/gallery" className="text-muted-foreground hover:text-foreground">
          Gallery
        </Link>
        <Link href="/achievements" className="text-muted-foreground hover:text-foreground">
          Achievements
        </Link>
        <Link href="/contact" className="text-muted-foreground hover:text-foreground">
          Contact Us
        </Link>
      </nav>
      <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]" />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>My Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
