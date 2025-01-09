import { useModalContext } from "@/contexts/ModalContext"
import { CloseButton } from "@/icons/Icons"
import { cn } from "@/utils/cn"
import { useEffect } from "react"
import { useRef } from "react"
import { createPortal } from "react-dom"

export function ModalGallery() {
  const { isModalOpen, setIsModalOpen, modalContent } = useModalContext()
  const modalRef = useRef(null)
  const modalRoot = document.getElementById("galleryModal")

  const handleClose = () => {
    setIsModalOpen(false)
  }

  const handleContentClick = (event) => {
    event.stopPropagation()
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [setIsModalOpen, isModalOpen])

  if (!modalRoot) return null

  return (
    isModalOpen &&
    createPortal(
      <div
        onClick={handleClose}
        className={cn(
          "fixed inset-0 z-50 flex flex-wrap place-content-center bg-black/90 p-2"
        )}
      >
        <button
          onClick={handleClose}
          className="absolute right-0 top-0 m-4 rounded-full bg-white/50 p-3 text-black transition-all hover:bg-white md:m-8"
        >
          <CloseButton className="h-7 w-7" />
        </button>
        <div
          ref={modalRef}
          onClick={handleContentClick}
          className={cn("flex flex-col flex-wrap place-content-center")}
        >
          {modalContent}
        </div>
      </div>,
      modalRoot
    )
  )
}
