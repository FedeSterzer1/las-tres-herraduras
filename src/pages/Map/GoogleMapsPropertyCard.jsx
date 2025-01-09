import {
  AirportIcon,
  CampingIcon,
  CartIcon,
  HomeIcon,
  MuseumIcon,
  RestaurantMapIcon,
  SquareIcon,
} from "@/icons/icons"
import "@/pages/Map/GoogleMap.css"

export function GoogleMapsPropertyCard({ property }) {
  const ICONS_VARIANTES = {
    home: <HomeIcon className="fill-[#4f5712] text-[#4f5712]" />,
    airport: <AirportIcon className="fill-[#4f5712] text-[#4f5712]" />,
    square: <SquareIcon className="fill-[#4f5712] text-[#4f5712]" />,
    restaurant: <RestaurantMapIcon className="fill-[#4f5712] text-[#4f5712]" />,
    camping: <CampingIcon className="fill-[#4f5712] text-[#4f5712]" />,
    museum: <MuseumIcon className="fill-[#4f5712] text-[#4f5712]" />,
    cart: <CartIcon className="fill-[#4f5712] text-[#4f5712]" />,
  }

  return (
    <>
      <div className="icon">
        <div>{ICONS_VARIANTES[property.type]}</div>
      </div>
      <div className="details">
        <div className="text-xl font-medium opacity-[0.8]">
          {property.nombre}
        </div>
        <div className="text-sm font-medium opacity-[0.65]">
          {property.type !== "home" && property.distancia}
        </div>
        <div className="text-sm font-medium opacity-[0.65]">
          {property.tipo}
        </div>
      </div>
    </>
  )
}
