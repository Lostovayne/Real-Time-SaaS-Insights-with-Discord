import { cn } from "@/utils"
import { FC, type HTMLAttributes } from "react"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  // Prop types here
  children: React.ReactNode
}

export const Heading: FC<HeadingProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1
      className={cn(
        "text-5xl sm:text-6xl text-pretty font-heading font-semibold tracking-tight text-zinc-800",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}
