import { HamburgerButton } from "@/components/HamburgerButton"
import { Navigation } from "@/layout/Navigation"
import { useRef } from "react"
import { useEffect } from "react"
import { Link } from "react-router"

export function Header() {
  const headerRef = useRef(null)

  useEffect(() => {
    if (!headerRef.current) return

    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY >= 0) {
        headerRef.current.classList.remove("h-28")
        headerRef.current.classList.add("h-20")
      } else if (currentScrollY < lastScrollY && currentScrollY <= 350) {
        headerRef.current.classList.remove("h-20")
        headerRef.current.classList.add("h-28")
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed inset-0 z-30 flex h-28 w-full transform items-center gap-4 bg-[#565843] px-4 text-white backdrop-blur transition-all duration-300"
    >
      <div className="flex w-full items-center justify-between gap-4 py-4 md:mx-auto md:max-w-screen-md md:px-4 lg:max-w-screen-lg">
        <Link to="/" className="block size-full">
          <div className="flex h-[100px] items-center py-4">
            <img
              className="block h-full object-contain"
              src="/images/logo_trimmed.png"
              alt="Las Tres Herraduras"
            />
          </div>
        </Link>
        <Navigation />
      </div>
      <HamburgerButton />
    </header>
  )
}
