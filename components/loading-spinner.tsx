"use client"

import { useEffect, useState, useRef, useMemo } from "react"

interface LoadingSpinnerProps {
  isLoading: boolean
}

export function LoadingSpinner({ isLoading }: LoadingSpinnerProps) {
  const [spinnerChar, setSpinnerChar] = useState("|")
  const [isAnimating, setIsAnimating] = useState(false)
  const cycleCountRef = useRef(0)

  // Memoize the spinnerChars array
  const spinnerChars = useMemo(() => ["|", "/", "—", "\\"], [])

  // Start animation when isLoading becomes true
  useEffect(() => {
    if (isLoading && !isAnimating) {
      setIsAnimating(true)
      cycleCountRef.current = 0
    }
  }, [isLoading, isAnimating])

  // Handle the animation
  useEffect(() => {
    if (!isAnimating) return

    let index = 0
    const totalSteps = spinnerChars.length * 3 // 3 full cycles
    let completedSteps = 0

    const interval = setInterval(() => {
      index = (index + 1) % spinnerChars.length
      setSpinnerChar(spinnerChars[index])
      completedSteps++

      // Check if we've completed the required number of steps
      if (completedSteps >= totalSteps) {
        clearInterval(interval)
        setIsAnimating(false)
      }
    }, 37.5) // Twice as fast

    return () => clearInterval(interval)
  }, [isAnimating, spinnerChars]) // spinnerChars is now memoized

  if (!isAnimating) return null

  return <span className="text-xl text-green-400 font-semibold transition-all">{spinnerChar}</span>
}