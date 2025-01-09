import { useModalContext } from "@/contexts/ModalContext"
import EmblaGalleryCarousel from "@/pages/Gallery/EmblaGalleryCarousel"

const OPTIONS = {}

export function ImageCard({ imageUrl, children, galleryImages }) {
  const { setIsModalOpen, setModalContent } = useModalContext()

  function renderModalContent() {
    return (
      <div className="flex flex-col gap-4 rounded-lg p-4 shadow-lg">
        <h1 className="text-white text-center">{galleryImages[0].category}</h1>
        <EmblaGalleryCarousel slides={galleryImages} options={OPTIONS} />
      </div>
    )
  }

  const handleClick = () => {
    setIsModalOpen(true)
    setModalContent(renderModalContent())
  }

  return (
    <div onClick={handleClick} className="flex cursor-pointer flex-col gap-1">
      <img
        className="aspect-square rounded-md object-cover"
        src={imageUrl}
        alt=""
      />
      <h2 className="font-2xl">{children}</h2>
    </div>
  )
}
