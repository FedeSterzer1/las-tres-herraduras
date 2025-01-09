import { DocumentTitle } from "@/components/DocumentTitle"
import {
  Aeropuerto,
  BellezaNatural,
  CercaIcon,
  RestaurantIcon,
} from "@/icons/Icons"
import { ROUTES } from "@/routes/RouteConfig"
import { GoogleMap } from "./GoogleMap"

export function Map() {
  return (
    <>
      <DocumentTitle title={ROUTES.MAP.title} />
      {/* TITULO */}
      <SectionPage>
        <h1 className="text-4xl font-bold">Ubicación</h1>
      </SectionPage>

      {/* MAPA */}
      <SectionPage>
        <GoogleMap client:load />
      </SectionPage>

      {/* ALREDEDORES */}
      <SectionPage>
        {/* grilla de 3 columnas con titulo */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-x-16">
          {/* Columna 1 */}
          <div className="col-span-1 flex flex-col">
            <div className="mb-6 flex gap-2">
              <CercaIcon className="text-[#4f5712] fill-[#4f5712]" />
              <h2 className="text-lg font-bold">¿Qué hay cerca?</h2>
            </div>
            <div className="grid grid-cols-[1fr,6ch] gap-3">
              <span className="text-[#616161]">
                Plaza María Vigna de Torres
              </span>
              <span className="text-right text-[#616161]">11 km</span>

              <span className="text-[#616161]">
                Plaza Las Vertientes de la Granja
              </span>
              <span className="text-right text-[#616161]">1,8 km</span>

              <span className="text-[#616161]">Museo Particular Atahualpa</span>
              <span className="text-right text-[#616161]">1 km</span>

              <span className="text-[#616161]">Camping El Algarrobo</span>
              <span className="text-right text-[#616161]">8 km</span>

              <span className="text-[#616161]">Despensa Vertientes</span>
              <span className="text-right text-[#616161]">1,2 km</span>

              <span className="text-[#616161]">Plaza Poetas Argentinos</span>
              <span className="text-right text-[#616161]">13,9 km</span>

              <span className="text-[#616161]">Plaza de los Poetas</span>
              <span className="text-right text-[#616161]">12,4 km</span>
            </div>
          </div>

          {/* Columna 2*/}
          <div className="col-span-1 flex flex-col gap-16">
            <div className="flex flex-col">
              <div className="mb-6 flex gap-2">
                <RestaurantIcon className="text-[#4f5712] fill-[#4f5712]" />
                <h2 className="text-lg font-bold">
                  Restaurantes y cafés
                </h2>
              </div>
              <div className="grid grid-cols-[1fr,6ch] gap-2">
                <span className="text-[#616161]">Restaurante La Primavera</span>
                <span className="text-right text-[#616161]">3,2 km</span>

                <span className="text-[#616161]">Restaurante San Leonardo</span>
                <span className="text-right text-[#616161]">3,4 km</span>

                <span className="text-[#616161]">Restaurante Mi Rincon</span>
                <span className="text-right text-[#616161]">3,5 km</span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-6 flex gap-2">
                <BellezaNatural className="text-[#4f5712] fill-[#4f5712]" />
                <h2 className="text-lg font-bold">
                  Belleza natural
                </h2>
              </div>
              <div className="grid grid-cols-[1fr,6ch] gap-2">
                <span className="text-[#616161]">Montaña Cerro Uritorco</span>
                <span className="text-right text-[#616161]">28 km</span>
              </div>
            </div>
          </div>

          {/* Columna 3*/}
          <div className="col-span-1 flex flex-col">
            <div className="mb-6 flex gap-2">
              <Aeropuerto className="text-[#4f5712] fill-[#4f5712]" />
              <h2 className="text-lg font-bold">
                Aeropuertos más cercanos
              </h2>
            </div>
            <div className="grid grid-cols-[1fr,6ch] gap-2">
              <span className="text-[#616161]">Aeropuerto de La Cumbre</span>
              <span className="text-right text-[#616161]">23 km</span>

              <span className="text-[#616161]">
                Aeropuerto Internacional Ingeniero Ambrosio Taravella (Pajas
                Blancas)
              </span>
              <span className="text-right text-[#616161]">27 km</span>
            </div>
          </div>
        </div>
        {/* fin grilla de 3 columnas con titulo */}
        <div className="mt-8 flex">
          <span className="text-sm text-[#616161]">
            * Las distancias se miden en línea recta. La distancia de viaje real
            puede variar.
          </span>
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
