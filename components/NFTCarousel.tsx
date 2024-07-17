'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import DraggableCarousel from './DraggableCarousel'

interface GroupedButtonsProps {
  activeButton: 'phone' | 'watch'
  onButtonClick: (section: 'phone' | 'watch') => void
}

const GroupedButtons: React.FC<GroupedButtonsProps> = ({
  activeButton,
  onButtonClick,
}) => {
  const defaultStyles =
    'px-4 py-3 w-full md:w-fit md:px-6 rounded-full  font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200'
  const activeStyles = 'bg-white text-steel '
  const inactiveStyles = 'bg-steel text-smokey hover:text-white '

  return (
    <div
      className="border-clay bg-steel inline-flex w-full rounded-full border shadow-sm md:w-fit"
      role="group"
    >
      <button
        onClick={() => onButtonClick('phone')}
        className={`${defaultStyles} ${activeButton === 'phone' ? activeStyles : inactiveStyles} `}
      >
        Phone
      </button>
      <button
        onClick={() => onButtonClick('watch')}
        className={`${defaultStyles} ${activeButton === 'watch' ? activeStyles : inactiveStyles} `}
      >
        Watch
      </button>
    </div>
  )
}

export default function NFTCarousel() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeButton, setActiveButton] = useState<'phone' | 'watch'>('phone')
  const handleButtonClick = (section: 'phone' | 'watch') => {
    setActiveButton(section)
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="w-full">
      <GroupedButtons
        activeButton={activeButton}
        onButtonClick={handleButtonClick}
      />

      <DraggableCarousel activeButton={activeButton} isMobile={isMobile} />
    </div>
  )
}
