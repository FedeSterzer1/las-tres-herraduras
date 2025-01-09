import useEmblaCarousel from "embla-carousel-react"
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/pages/Home/EmblaCarouselArrowButtons"

const EmblaHomeCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="relative flex h-96 w-full md:[height:calc(100dvh-6rem)] -mt-8 md:-mt-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex size-full">
          {slides.map((image, index) => (
            <div className="embla__slide flex size-full" key={index}>
              <img src={image} className="size-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-y-0 inset-x-2 md:inset-x-4 flex items-center justify-between">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  )
}

export default EmblaHomeCarousel
