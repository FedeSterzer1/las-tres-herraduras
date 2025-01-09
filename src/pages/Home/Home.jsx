import EmblaHomeCarousel from "@/pages/Home/EmblaHomeCarousel"
import { emblaImages as images } from "./EmblaImages"
import { DocumentTitle } from "@/components/DocumentTitle"
import { ROUTES } from "@/routes/RouteConfig"

const OPTIONS = { loop: true }
const SLIDES = images

export function Home() {
  return (
    <>
      <DocumentTitle title={ROUTES.HOME.title} />
      <EmblaHomeCarousel slides={SLIDES} options={OPTIONS} />
      <section className="grid w-full gap-8 px-4 md:mx-auto md:max-w-screen-md md:grid-cols-2 md:gap-8 md:px-8 lg:max-w-screen-lg">
        <div className="col-span-2 flex flex-col">
          <h2 className="text-balance text-3xl font-bold md:text-5xl md:[text-wrap:wrap]">
            Descubre tu Rincón de Verano en Las Tres Herraduras
          </h2>
        </div>
        <div className="col-span-2 md:col-span-1">
          <img
            className="w-full rounded-md"
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/416784621.jpg?k=fb3102c5c0f80f59b724c425d3e89955ab5816cae39f3873c75d1b1a199eb2c1&o=&hp=1"
            alt=""
          />
        </div>
        <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
          <p>
            Descubre la encantadora Las Tres Herraduras, ¡tu próximo refugio
            veraniego! Ubicada en Las Vertientes de la Granja, este acogedor
            hogar ofrece impresionantes vistas al jardín que te enamorarán.
            Imagina despertar cada mañana con esta impresionante panorámica y
            disfrutar tu café en la terraza o el balcón.
          </p>

          <p>
            Esta casa de campo cuenta con 3 habitaciones, garantizando comodidad
            y tranquilidad durante tu escapada. Relájate en la sala con TV de
            pantalla plana o prepara deliciosas comidas en la cocina
            completamente equipada. Y, por supuesto, el punto destacado de la
            propiedad: ¡tu propia piscina privada, un oasis perfecto bajo el
            cálido sol del verano!
          </p>

          <p>
            Si deseas explorar, estás a un corto trayecto en auto del centro
            comercial Córdoba y otras atracciones locales. Además, para los
            amantes del fútbol, el estadio Mario Alberto Kempes está a solo 45
            km.
          </p>
        </div>
        <div className="col-span-2 flex flex-col">
          <h2 className="text-balance text-3xl font-bold md:text-5xl md:[text-wrap:wrap]">
            Sumérgete en el Encanto de Las Tres Herraduras
          </h2>
        </div>
        <div className="col-span-2 flex flex-col md:col-span-1">
          <p>
            En Las Tres Herraduras, tu bienestar es nuestra prioridad. Ofrecemos
            WiFi gratuito y estacionamiento privado sin cargo adicional.
            Queremos que tu estadía sea inolvidable y cómoda, por eso te
            brindamos ropa blanca, toallas y todo lo que necesitas para sentirte
            como en casa.
          </p>

          <p>
            ¡No te pierdas esta oportunidad única de disfrutar de una escapada
            relajante y tranquila en un entorno natural incomparable!
            Contáctanos para reservar y asegurar tu lugar en este paraíso de
            verano. ¡Te esperamos con los brazos abiertos en Las Tres
            Herraduras!
          </p>
        </div>
        <div className="order-1 col-span-2 md:order-1 md:col-span-1">
          <img
            className="w-full rounded-md"
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/484436673.jpg?k=37788f514c3f9a978c4598f28b1c78bf7aa7d75c0801d3dfe516568f0a6a926f&o=&hp=1"
            alt=""
          />
        </div>
      </section>
    </>
  )
}
