import { Layout } from "@/layout/Layout"
import { Contact } from "@/pages/Contact"
import { Description } from "@/pages/Description"
import { Gallery } from "@/pages/Gallery/Gallery"
import { Home } from "@/pages/Home/Home"
import { Map } from "@/pages/Map/Map"
import { NotFound } from "@/pages/NotFound"
import { Opinions } from "@/pages/Opinions"
import { ROUTES } from "@/routes/RouteConfig"
import { useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router"

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LAYOUT.path} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.DESCRIPTION.path} element={<Description />} />
          <Route path={ROUTES.MAP.path} element={<Map />} />
          <Route path={ROUTES.GALLERY.path} element={<Gallery />} />
          <Route path={ROUTES.OPINIONS.path} element={<Opinions />} />
          <Route path={ROUTES.CONTACT.path} element={<Contact />} />
          <Route path={ROUTES.NOT_FOUND.path} element={<NotFound />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
