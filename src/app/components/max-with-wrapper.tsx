import { cn } from "@/utils"

interface MaxWidthWrapperProps {
  className?: string
  children: React.ReactNode
}

export const MaxWidthWrapper = ({
  className,
  children,
}: MaxWidthWrapperProps) => {
  return <div className={cn("")}></div>
}
