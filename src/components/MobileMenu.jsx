import { CloseIcon } from "@/icons/Icons"
import { ROUTES } from "@/routes/RouteConfig"
import { cn } from "@/utils/cn"
import { createPortal } from "react-dom"
import { NavLink } from "react-router"

export function MobileMenu({ isOpen, handleClose }) {
  if (!isOpen) return null

  const routesToIgnore = [ROUTES.LAYOUT, ROUTES.NOT_FOUND]

  return createPortal(
    <div className="fixed inset-0 z-40 size-full bg-white p-4 text-black">
      <div className="flex size-full flex-col gap-8">
        <button className="ml-auto flex items-center mt-1.5 mr-1" onClick={handleClose}>
          <CloseIcon className="h-6 w-6" />
        </button>
        <nav className="mt-4 flex flex-col items-center justify-center gap-8 text-4xl">
          {Object.values(ROUTES)
            .filter((route) => !routesToIgnore.includes(route))
            .map((route) => (
              <NavLink key={route.path} to={route.path} onClick={handleClose}>
                {({ isActive }) => (
                  <span
                    className={cn({
                      "border-b-4 border-blue-500": isActive,
                    })}
                  >
                    {route.title}
                  </span>
                )}
              </NavLink>
            ))}
        </nav>
      </div>
    </div>,
    document.getElementById("mobileMenuRoot")
  )
}
