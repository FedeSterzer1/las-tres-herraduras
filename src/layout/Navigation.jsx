import { ROUTES } from "@/routes/RouteConfig"
import { cn } from "@/utils/cn"
import { NavLink } from "react-router"

export function Navigation() {
  const routesToIgnore = [ROUTES.LAYOUT, ROUTES.NOT_FOUND, ROUTES.HOME]

  return (
    <nav className="hidden items-center gap-4 p-4 md:flex">
      {Object.values(ROUTES)
        .filter((route) => !routesToIgnore.includes(route))
        .map((route) => (
          <NavLink key={route.path} to={route.path}>
            {({ isActive }) => (
              <span
                className={cn({
                  "border-b-4 border-[#dfe995] pb-2": isActive,
                })}
              >
                {route.title}
              </span>
            )}
          </NavLink>
        ))}
    </nav>
  )
}
