import * as GMaps from "@googlemaps/js-api-loader"
import { useEffect, useRef } from "react"
import ReactDOM from "react-dom/client"
import { GoogleMapsPropertyCard } from "./GoogleMapsPropertyCard"
const { Loader } = GMaps

export function GoogleMap() {
  const mapRef = useRef(null)
  const properties = [
    {
      nombre: "Las Tres Herraduras",
      distancia: "0 Km",
      tipo: "Casa",
      type: "home",
      position: {
        lat: -31.040204,
        lng: -64.284465,
      },
    },
    {
      nombre: "Aeropuerto Internacional Ingeniero Ambrosio Taravella",
      distancia: "27 km",
      tipo: "Aeropuerto",
      type: "airport",
      position: {
        lat: -31.31550576215165,
        lng: -64.2136590149265,
      },
    },
    {
      nombre: "Aeropuerto de La Cumbre",
      distancia: "23 km",
      tipo: "Aeropuerto",
      type: "airport",
      position: {
        lat: -31.01027330655382,
        lng: -64.52778921657618,
      },
    },
    {
      nombre: "Plazoleta María Vigna de Torres",
      distancia: "11 km",
      tipo: "Plaza",
      type: "square",
      position: {
        lat: -31.106822,
        lng: -64.304369,
      },
    },
    {
      nombre: "Restaurante La Primavera",
      distancia: "3,2 km",
      tipo: "Restaurante",
      type: "restaurant",
      position: {
        lat: -31.06551678399092,
        lng: -64.30003798922858,
      },
    },
    {
      nombre: "Restaurante San Leonardo",
      distancia: "3,4 km",
      tipo: "Restaurante",
      type: "restaurant",
      position: {
        lat: -31.068473597358047,
        lng: -64.29858162443217,
      },
    },
    {
      nombre: "Restaurante Mi Rincon",
      distancia: "3,5 km",
      tipo: "Restaurante",
      type: "restaurant",
      position: {
        lat: -31.06940813769793,
        lng: -64.29926562543668,
      },
    },
    {
      nombre: "Camping El Algarrobo",
      distancia: "8 km",
      tipo: "Camping",
      type: "camping",
      position: {
        lat: -31.063195773279507,
        lng: -64.2949184325473,
      },
    },
    {
      nombre: "Plaza Poetas Argentinos",
      distancia: "13,9 km",
      tipo: "Plaza",
      type: "square",
      position: {
        lat: -31.114665000193234,
        lng: -64.30624098048162,
      },
    },
    {
      nombre: "Plaza de los Poetas",
      distancia: "12,4 km",
      tipo: "Plaza",
      type: "square",
      position: {
        lat: -31.135987414692735,
        lng: -64.28796837869653,
      },
    },
    {
      nombre: "Las Vertientes de la Granja",
      distancia: "1,8 km",
      tipo: "Plaza",
      type: "square",
      position: {
        lat: -31.034764227065878,
        lng: -64.27431042356297,
      },
    },
    {
      nombre: "Museo Particular Atahualpa",
      distancia: "1 km",
      tipo: "Museo",
      type: "museum",
      position: {
        lat: -31.039215936895996,
        lng: -64.2758148116496,
      },
    },
    {
      nombre: "Despensa Vertientes",
      distancia: "1,2 km",
      tipo: "Despensa",
      type: "cart",
      position: {
        lat: -31.043467835854816,
        lng: -64.27653916750909,
      },
    },
  ]

  function toggleHighlight(markerView, property) {
    if (markerView.content.classList.contains("highlight")) {
      markerView.content.classList.remove("highlight")
      markerView.zIndex = null
    } else {
      markerView.content.classList.add("highlight")
      markerView.zIndex = 1
    }
  }

  function buildContent(property) {
    const content = document.createElement("div")
    content.classList.add("property")

    ReactDOM.createRoot(content).render(
      <GoogleMapsPropertyCard property={property} />
    )

    return content
  }

  useEffect(() => {
    async function initMap() {
      const loader = new Loader({
        apiKey: "AIzaSyCjrbBLtUicgWbeXTA_vKVCcsAzhk66vIo", // Tu API key aquí
        version: "weekly",
        libraries: ["maps", "marker", "core"], // Pre-especificamos las librerías que necesitamos
      })

      try {
        await loader.load()

        const { Map } = await google.maps.importLibrary("maps")
        const { AdvancedMarkerElement } =
          await google.maps.importLibrary("marker")
        const { LatLng } = await google.maps.importLibrary("core")

        const center = new LatLng(-31.040204, -64.284465)

        const map = new Map(mapRef.current, {
          zoom: 14,
          center,
          mapId: "4504f8b37365c3d0",
        })

        for (const property of properties) {
          const marker = new AdvancedMarkerElement({
            map,
            content: buildContent(property),
            position: property.position,
            title: property.distancia,
          })

          marker.addListener("click", () => {
            toggleHighlight(marker, property)
          })
        }
      } catch (error) {
        console.error("Error loading Google Maps:", error)
      }
    }

    initMap()
  }, [])

  return <div className="relative h-[800px] w-full" ref={mapRef} />
}
