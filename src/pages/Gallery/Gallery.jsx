import { DocumentTitle } from "@/components/DocumentTitle"
import { ImageCard } from "@/components/ImageCard"
import { ModalGallery } from "@/components/ModalGallery"
import { ModalProvider } from "@/contexts/ModalContext"
import imagenes from "@/data/imagenes"
import { useFadeInOnce } from "@/hooks/useFadeInOnce"
import { ROUTES } from "@/routes/RouteConfig"

export function Gallery() {
  const { ref: titleRef, animationStyles: titleStyles } = useFadeInOnce()
  const { ref: galleryRef, animationStyles: galleryStyles } = useFadeInOnce()

  return (
    <ModalProvider>
      <DocumentTitle title={ROUTES.GALLERY.title} />
      <SectionPage>
        <h1 ref={titleRef} style={titleStyles} className="text-4xl font-bold">
          Galería
        </h1>
      </SectionPage>

      <SectionPage>
        <div
          ref={galleryRef}
          style={galleryStyles}
          className="grid grid-cols-2 gap-x-6 gap-y-16 md:grid-cols-3"
        >
          {imagenes.map((item, index) => (
            <ImageCard
              key={index}
              imageUrl={item[0].thumbnail}
              index={index}
              galleryImages={item}
              client:load
            >
              <span className="text-xl font-bold">{item[0].category}</span>
            </ImageCard>
          ))}
        </div>
        <ModalGallery />
      </SectionPage>
    </ModalProvider>
  )
}

function SectionPage({ children }) {
  return (
    <section className="grid w-full gap-8 p-4 md:mx-auto md:max-w-screen-md md:gap-8 md:px-8 lg:max-w-screen-lg">
      {children}
    </section>
  )
}
