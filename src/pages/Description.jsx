import { DocumentTitle } from "@/components/DocumentTitle"
import antesDeReservar from "@/data/antes-de-reservar.json"
import distCaracteristicas from "@/data/distribucion-y-caracteristicas.json"
import servPopulares from "@/data/servicios-populares.json"
import servicios from "@/data/servicios.json"
import {
  BebidaIcon,
  CocinaIcon,
  EntradaIcon,
  EstacionamientoIcon,
  ExteriorIcon,
  FamilyIcon,
  HabitacionIcon,
  InfoIcon,
  ListItemIcon,
  MascotaIcon,
  PagoIcon,
  PersonIcon,
  PiletaIcon,
  ProhibidoFumarIcon,
  SalidaIcon,
  TerrazaIcon,
  TVIcon,
  VistaIcon,
  WifiIcon,
} from "@/icons/Icons"
import { ROUTES } from "@/routes/RouteConfig"
import { cn } from "@/utils/cn"
import { Fragment } from "react"

const pageIcons = {
  PiletaIcon,
  EstacionamientoIcon,
  WifiIcon,
  TerrazaIcon,
  TVIcon,
  HabitacionIcon,
  VistaIcon,
  CocinaIcon,
  ExteriorIcon,
  EntradaIcon,
  SalidaIcon,
  InfoIcon,
  FamilyIcon,
  PersonIcon,
  PagoIcon,
  ProhibidoFumarIcon,
  BebidaIcon,
  MascotaIcon,
  ListItemIcon,
}

export function Description() {
  return (
    <>
      <DocumentTitle title={ROUTES.DESCRIPTION.title} />
      {/* DESCRIPCION */}
      <SectionPage>
        <h2 className="text-[12px] font-extrabold uppercase tracking-wider">
          Casa de Campo
        </h2>
        <h3 className="text-4xl font-bold">Las Tres Herraduras</h3>
        <div className="mt-4 flex flex-col gap-4">
          <p className="leading-relaxed">
            Ofrece vistas al jardín y alojamiento con terraza y balcón a unos 44
            km del centro comercial Córdoba. Ofrece pileta privada, wifi gratis
            y estacionamiento privado gratuito.
          </p>

          <p className="leading-relaxed">
            La casa está a 45 km del estadio de fútbol Mario Alberto Kempes y a
            48 km del centro comercial Patio Olmos. El aeropuerto más cercano es
            el aeropuerto internacional Ingeniero Aeronáutico Ambrosio L.V.
            Taravella, ubicado a 36 km.
          </p>
        </div>
      </SectionPage>

      {/* COMODIDADES */}
      <SectionPage>
        <div>
          <h3 className="text-2xl font-bold">
            Distribución y características:
          </h3>
          <ul className="mt-5">
            {distCaracteristicas.map((item, index) => {
              const Icon = pageIcons[item.icon]

              return (
                <li
                  key={`distribucion-y-caracteristicas-${index}`}
                  className="flex gap-2"
                >
                  <Icon />
                  {item.contenido}
                </li>
              )
            })}
          </ul>
        </div>
      </SectionPage>

      {/* SERVICIOS */}
      <SectionPage>
        <h3 className="text-2xl font-bold">Servicios</h3>
        <div className="mt-2 grid grid-cols-1 flex-col gap-5 md:grid-cols-3 md:gap-6">
          {servicios.map((item, index) => {
            const Icon = pageIcons[item.icon]

            return (
              <div key={`servicios-${index}`} className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Icon />
                  <h3 className="text-lg font-bold">{item.titulo}</h3>
                </div>
                {item.tipo === "info" && (
                  <p className="mt-2 text-[#616161]">{item.contenido[0]}</p>
                )}
                {item.tipo === "lista" && (
                  <ul className="mt-2">
                    {item.contenido.map((subItem, index) => {
                      const SubIcon = pageIcons[subItem.icon]

                      return (
                        <li
                          key={`sub-${index}`}
                          className="flex gap-2 text-[#616161]"
                        >
                          <SubIcon />
                          {subItem.contenido}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </SectionPage>

      {/* SERVICIOS MAS POPULARES */}
      <SectionPage>
        <h2 className="mt-5 text-[12px] font-extrabold uppercase tracking-wider">
          Servicios mas populares
        </h2>
        <div className="mt-3 flex flex-wrap gap-4">
          {servPopulares.map((item, index) => {
            const Icon = pageIcons[item.icon]

            return (
              <div
                key={`servicios-populares-${index}`}
                className="flex w-fit gap-3 rounded-full border border-[#dfe995] px-4 py-2"
              >
                <Icon />
                {item.contenido}
              </div>
            )
          })}
        </div>
      </SectionPage>

      {/* LEER ANTES DE RESERVAR */}
      <SectionPage>
        <h3 className="text-2xl font-bold">Leer antes de reservar</h3>
        <div className="mt-4 grid grid-cols-1 gap-y-6 rounded-lg border border-[#dfe995] p-8 md:grid-cols-[250px,1fr]">
          {antesDeReservar.map((item, index) => {
            const Icon = pageIcons[item.icon]

            return (
              <Fragment key={`antes-de-reservar-${index}`}>
                <div
                  className={cn({
                    "border-b border-[#dfe995] pb-6":
                      index < antesDeReservar.length - 1,
                  })}
                >
                  <div className="flex gap-2">
                    {item.icon && <Icon />}
                    {item.titulo}
                  </div>
                </div>
                <div
                  className={cn({
                    "border-b border-[#dfe995] pb-6":
                      index < antesDeReservar.length - 1,
                  })}
                >
                  <div className="flex flex-col gap-2">
                    {item.info.map((info, index) => (
                      <Fragment key={`antes-de-reservar-sub-${index}`}>
                        {info.titulo && (
                          <h4 className="font-semibold">{info.titulo}</h4>
                        )}
                        <p>{info.contenido}</p>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </Fragment>
            )
          })}
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
