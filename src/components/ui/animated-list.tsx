"use client"

import { AnimatePresence, motion } from "motion/react"
import React, { useEffect, useMemo, useState } from "react"

export interface AnimatedListProps {
  className?: string
  children: React.ReactNode
  delay?: number
}

export const AnimatedList = React.memo(
  ({ className, children, delay = 1000 }: AnimatedListProps) => {
    const [messages, setMessages] = useState<React.ReactNode[]>([])
    const childrenArray = React.Children.toArray(children)

    useEffect(() => {
      const interval = setInterval(() => {
        if (messages.length < childrenArray.length) {
          setMessages((prev) => [...prev, childrenArray[messages.length]])
        } else {
          clearInterval(interval)
        }
      }, delay)
      return () => clearInterval(interval)
    }, [childrenArray, messages.length, delay])

    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <AnimatePresence>
          {messages.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

AnimatedList.displayName = "AnimatedList"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}
