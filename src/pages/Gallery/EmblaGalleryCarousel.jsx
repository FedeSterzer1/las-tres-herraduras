import { Thumb } from "@/pages/Gallery/EmblaCarouselThumbsButton"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

const EmblaGalleryCarousel = (props) => {
  const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: false,
  })

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on("select", onSelect).on("reInit", onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="grid size-[32rem] grid-rows-[1fr,4rem] gap-2 p-2 md:size-[48rem] md:grid-rows-[1fr,6rem] md:gap-4">
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="flex size-full">
          {slides.map((image, index) => (
            <div className="relative flex min-w-0 flex-[0_0_100%]" key={index}>
              <div
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
                style={{
                  backgroundImage: `url("${image.original}")`,
                  filter: "blur(4px)",
                }}
              />
              <img
                className="z-10 block size-full object-contain"
                style={{
                  filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))",
                }}
                src={image.original}
                alt={image.originalTitle}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex size-full">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex size-full gap-2 md:gap-4">
            {slides.map((image, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                image={image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaGalleryCarousel
