import { DocumentTitle } from "@/components/DocumentTitle"
import { useFadeInOnce } from "@/hooks/useFadeInOnce"
import { EmailIcon, InstagramIcon, WhatsappIcon } from "@/icons/Icons"
import { ROUTES } from "@/routes/RouteConfig"

export function Contact() {
  const { ref: titleRef, animationStyles: titleStyles } = useFadeInOnce()
  const { ref: imgRef, animationStyles: imgStyles } = useFadeInOnce()

  return (
    <>
      <DocumentTitle title={ROUTES.CONTACT.title} />
      <SectionPage>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[40ch,1fr] md:gap-4">
          <div
            ref={titleRef}
            style={titleStyles}
            className="flex flex-col gap-4"
          >
            <h2 className="text-4xl font-bold">Contáctanos</h2>
            <div className="mb-5 flex items-center gap-6">
              <p>
                Bienvenido a nuestra página de contacto, tu puerta de acceso
                directo para comunicarte con nosotros. Estamos emocionados de
                escucharte y responder a tus preguntas, comentarios o
                inquietudes. En Las Tres Herraduras, nos esforzamos por brindar
                el mejor servicio posible y valoramos la oportunidad de
                interactuar contigo.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <a
                  className="flex items-center gap-4"
                  href="mailto:lastresherraduras.house@gmail.com"
                >
                  <EmailIcon className="h-12 w-12" color="#4f5712" />
                  <div>
                    <p className="text-md font-bold">Email</p>
                    lastresherraduras.house@gmail.com
                  </div>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a
                  className="flex items-center gap-4"
                  href="https://wa.me/543513117696"
                  target="_blank"
                >
                  <WhatsappIcon className="h-12 w-12" color="#4f5712" />
                  <div>
                    <p className="text-md font-bold">Whatsapp</p>
                    +54 3513117696
                  </div>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a
                  className="flex items-center gap-4"
                  href="https://www.instagram.com/lastresherraduras.cba"
                  target="_blank"
                >
                  <InstagramIcon className="h-12 w-12" color="#4f5712" />
                  <div>
                    <p className="text-md font-bold">Instagram</p>
                    lastresherraduras.cba
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div
            ref={imgRef}
            style={imgStyles}
            className="flex flex-col items-center justify-center gap-4 self-end p-0 md:px-6"
          >
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/484436678.jpg?k=99a49a2b3e9f056b1c3d46e4cc3e550ea0c3619b73f79f88f8f65e953edc3fa4&o=&hp=1"
              className="h-auto w-full rounded-md"
              alt="Imagen pileta"
            />
          </div>
        </div>
      </SectionPage>
    </>
  )
}

function SectionPage({ children }) {
  return (
    <section className="grid w-full gap-8 p-4 md:mx-auto md:max-w-screen-md md:gap-8 md:px-8 lg:max-w-screen-lg">
      {children}
    </section>
  )
}
