import { useEffect } from "react"

export function DocumentTitle({ title }) {
  useEffect(() => {
    document.title = `${title} | Las Tres Herraduras - Casa de Campo`
  }, [title])

  return null
}
