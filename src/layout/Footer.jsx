import { EmailIcon, InstagramIcon, WhatsappIcon } from "@/icons/Icons"
import { ROUTES } from "@/routes/RouteConfig"
import { cn } from "@/utils/cn"
import { useLocation } from "react-router"

export function Footer() {
  const { pathname } = useLocation()

  return (
    <footer className="flex w-full flex-col bg-[#565843] text-white">
      {pathname !== ROUTES.CONTACT.path && (
        <div className="grid w-full grid-cols-1 gap-8 p-4 md:mx-auto md:max-w-screen-md md:grid-cols-2 md:gap-8 md:p-8 md:px-8 lg:max-w-screen-lg">
          <ul className="order-2 flex flex-col gap-4 md:order-1">
            <li className="flex text-xl font-bold text-white">Contáctanos</li>
            <li className="flex items-center gap-2">
              <EmailIcon className="inline-block h-6 w-6" color="#dfe995" />
              <a href="mailto:lastresherraduras.house@gmail.com">
                lastresherraduras.house@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <WhatsappIcon className="inline-block h-6 w-6" color="#dfe995" />
              <a href="https://wa.me/543513117696" target="_blank">
                +54 3513117696
              </a>
            </li>
            <li className="flex items-center gap-2">
              <InstagramIcon className="inline-block h-6 w-6" color="#dfe995" />

              <a
                href="https://www.instagram.com/lastresherraduras.cba"
                target="_blank"
              >
                lastresherraduras.cba
              </a>
            </li>
          </ul>
          <div
            className={cn(
              "order-1 mt-8 flex h-full flex-col gap-2 md:order-2 md:mt-0 md:gap-4",
              {
                "col-span-2 min-h-40 items-center justify-center":
                  pathname === ROUTES.CONTACT.path,
                "self-center pl-1 md:self-end md:text-right":
                  pathname !== ROUTES.CONTACT.path,
              }
            )}
          >
            <div className="flex h-full flex-col items-center justify-center gap-2 self-center md:self-end">
              <img
                className="h-auto w-[200px] md:w-[200px]"
                src="/images/logo_trimmed.png"
                alt="Las Tres Herraduras"
              />
            </div>
          </div>
        </div>
      )}
      <div className="flex w-full justify-center gap-12 border-t border-[#dfe995] p-4 md:mx-auto md:gap-8 md:px-8">
        <span>
          Copyright © {new Date().getFullYear()} Las Tres Herraduras.
        </span>
      </div>
    </footer>
  )
}
