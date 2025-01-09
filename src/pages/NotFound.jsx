import { DocumentTitle } from "@/components/DocumentTitle"
import { ROUTES } from "@/routes/RouteConfig"

export function NotFound() {
  return (
    <>
      <DocumentTitle title={ROUTES.NOT_FOUND.title} />
      <h1>404 - Page Not Found</h1>
    </>
  )
}
