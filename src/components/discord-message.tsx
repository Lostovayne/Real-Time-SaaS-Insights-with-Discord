import { cn } from "@/utils"
import Image from "next/image"

interface DiscordMessageProps {
  avatarSrc: string
  avatarAlt: string
  username: string
  timestamp: string
  badgeText?: string
  badgeColor?: string
  title: string
  content: {
    [key: string]: string
  }
}

export const DiscordMessage = ({
  avatarSrc,
  avatarAlt,
  username,
  timestamp,
  badgeText,
  badgeColor = "#43b581",
  title,
  content,
}: DiscordMessageProps) => {
  return (
    <div className="w-full flex items-start justify-start">
      <div className="flex items-center mb-2">
        <Image
          src={avatarSrc}
          alt={avatarAlt}
          className="object-cover rounded-full mr-3"
          width={40}
          height={40}
        />
      </div>
      <div className="w-full max-w-xl">
        <div className="flex items-center">
          <p className="font-semibold text-white">{username}</p>
          <span className="ml-2 px-1.5 py-0.5 text-xs font-semibold bg-brand-600 text-white rounded">
            APP
          </span>
          <span className="text-gray-400 ml-1.5 text-xs font-normal">
            {timestamp}
          </span>
        </div>
        <div className="bg-[#2f3136] text-sm w-full rounded p-3 mb-4 mt-1.5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            {badgeText ? (
              <span
                className={cn(
                  "inline-flex order-2 items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                )}
              >
                {badgeText}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
