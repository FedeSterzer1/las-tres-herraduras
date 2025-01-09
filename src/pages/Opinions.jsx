import { DocumentTitle } from "@/components/DocumentTitle"
import { useFadeInOnce } from "@/hooks/useFadeInOnce"
import { StarBorderIcon, StarIcon } from "@/icons/Icons"
import { ROUTES } from "@/routes/RouteConfig"

export function Opinions() {
  const { ref: titleRef, animationStyles: titleStyles } = useFadeInOnce()
  const { ref: opinionsRef, animationStyles: opinionsStyles } = useFadeInOnce()

  return (
    <>
      <DocumentTitle title={ROUTES.OPINIONS.title} />

      {/* TITULO */}
      <SectionPage>
        <h1 ref={titleRef} style={titleStyles} className="text-4xl font-bold">
          Opiniones
        </h1>
      </SectionPage>

      <SectionPage>
        {/* REVIEWS */}
        <div ref={opinionsRef} style={opinionsStyles}>
          <div className="flex gap-2 text-xl">
            <span>4.5</span>
            <div className="flex items-center">
              <StarIcon className="h-6 w-6" />
              <StarIcon className="h-6 w-6" />
              <StarIcon className="h-6 w-6" />
              <StarIcon className="h-6 w-6" />
              <StarBorderIcon className="h-6 w-6" />
            </div>
          </div>

          {/* CARD */}
          <div
            className="mt-4 flex w-full flex-col p-6"
            style={{ boxShadow: "0px 0px 15px -0px rgba(0,0,0,0.10)" }}
          >
            <div className="mb-8 flex justify-between">
              <h3 className="text-[12px] font-extrabold uppercase tracking-wider text-[#aaaaaa]">
                Sergio
              </h3>
              <span className="flex">
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">Linda experiencia</h3>
              <p>
                Las habitaciones son amplias y luminosas, con vistas a la
                naturaleza. El baño es privado y cuenta con todo lo necesario
                para un buen descanso. La cocina está equipada con todo lo
                necesario para cocinar, y el comedor es perfecto para compartir
                las comidas con los amigos o la familia.
              </p>
            </div>
          </div>

          <div
            className="mt-8 flex w-full flex-col p-6"
            style={{ boxShadow: "0px 0px 15px -0px rgba(0,0,0,0.10)" }}
          >
            <div className="mb-8 flex justify-between">
              <h3 className="text-[12px] font-extrabold uppercase tracking-wider text-[#aaaaaa]">
                Patricia
              </h3>
              <span className="flex">
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
                <StarBorderIcon className="h-4 w-4" />
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">Muy conforme</h3>
              <p>
                Acá, en las sierras de Córdoba, todo es re relajado. La onda de
                este lugar es una mezcla de paz y buena onda. Los detalles y la
                decoración copada hacen que cada rincón sea piola. Ideal para
                cortarla y disfrutar del ambiente natural de Las Tres
                Herraduras. ¡Una escapada perfecta para descansar y pasarla bien
                en las sierras cordobesas!
              </p>
            </div>
          </div>
        </div>
      </SectionPage>
    </>
  )
}

function SectionPage({ children }) {
  return (
    <section className="grid w-full gap-0 p-4 md:mx-auto md:max-w-screen-md md:gap-8 md:px-8 lg:max-w-screen-lg">
      {children}
    </section>
  )
}
