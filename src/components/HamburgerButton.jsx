import { HamburgerIcon } from "@/icons/icons"
import { useState } from "react"
import { MobileMenu } from "./MobileMenu"
import { useEffect } from "react"

export function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <div className="flex flex-col md:hidden">
      <button onClick={handleOpen} className="flex items-center">
        <HamburgerIcon />
      </button>
      <MobileMenu isOpen={isOpen} handleClose={handleClose} />
    </div>
  )
}
