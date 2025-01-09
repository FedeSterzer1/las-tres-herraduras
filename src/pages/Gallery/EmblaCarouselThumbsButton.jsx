import { cn } from "@/utils/cn"

export const Thumb = (props) => {
  const { selected, image, onClick } = props

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "block aspect-square overflow-hidden rounded-lg opacity-70",
        {
          "opacity-100": selected,
        }
      )}
    >
      <img
        className="block size-full object-cover"
        src={image.thumbnail}
        alt={image.originalTitle}
      />
    </button>
  )
}
