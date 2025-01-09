import { Footer } from "@/layout/Footer"
import { Header } from "@/layout/Header"
import { ROUTES } from "@/routes/RouteConfig"
import { cn } from "@/utils/cn"
import { useLocation } from "react-router"
import { Outlet } from "react-router"

export function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="grid grow grid-rows-[1fr,auto] gap-8">
      <Header />
      <main
        className={cn("flex flex-col gap-8 pb-4 pt-28 mt-8 md:mt-12 md:pb-16", {
          "md:pt-28": pathname === ROUTES.HOME.path,
        })}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
