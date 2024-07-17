'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import PrimaryButton from './PrimaryButton'
import CopyButton from './CopyButton'

const placeholderImageUrls = [
  './images/1.jpg',
  './images/2.jpg',
  './images/3.jpg',
  './images/4.jpg',
  './images/5.jpg',
  './images/6.jpg',
]

const placeholderNFTInformation = {
  name: 'Human and Machine',
  description:
    'Description for this item, would be a metadata for the collection as a fallback',
  assets: '4,000',
  type: 'ERC-721',
}

interface DraggableCarouselProps {
  activeButton: 'phone' | 'watch'
  isMobile: boolean
}
interface NFTCardProps {
  activeButton: 'phone' | 'watch'
  imageUrl: string
  isMobile: boolean
}
interface NFTInformationProps {
  activeButton: 'phone' | 'watch'
}

export default function DraggableCarousel({
  activeButton,
  isMobile,
}: DraggableCarouselProps) {
  const ref = useRef(null)

  return (
    <div className="flex w-full flex-col justify-center overflow-hidden">
      <div
        className="absolute left-1/4 z-0 flex h-[260px] w-96 -translate-x-1/4 flex-col md:-translate-x-1/2"
        ref={ref}
      ></div>
      <motion.div
        className="z-10 flex h-fit w-fit cursor-grab gap-4 pb-32 pt-16 active:cursor-grabbing"
        drag="x"
        dragConstraints={ref}
        // onMeasureDragConstraints={console.log}
        dragMomentum={true}
      >
        {placeholderImageUrls.map((url, index) => (
          <NFTCard
            key={index}
            activeButton={activeButton}
            isMobile={isMobile}
            imageUrl={url}
          />
        ))}
      </motion.div>
    </div>
  )
}

const NFTCard: React.FC<NFTCardProps> = ({
  activeButton,
  isMobile,
  imageUrl,
}) => {
  const [isOpen, toggleOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  return isMobile ? (
    <motion.div
      layout
      initial={false}
      animate={{
        height: activeButton === 'phone' ? 480 : 240,
        width: activeButton === 'phone' ? 240 : 240,
      }}
      className={`rounded-md transition duration-300`}
      onClick={() => {
        toggleOpen(!isOpen)
      }}
    >
      {isOpen ? (
        <div className="relative flex h-full w-full overflow-hidden">
          <img
            src={imageUrl}
            alt="Card image"
            className="h-full w-full rounded-md object-cover"
          />
          <div className="bg-steel/90 absolute left-0 top-0 z-10 flex h-full w-full flex-col justify-between p-4 backdrop-blur-md">
            <NFTInformation activeButton={activeButton} />
            <PrimaryButton isMobile={isMobile} title={'Save'} />
          </div>
        </div>
      ) : (
        <img
          src={imageUrl}
          alt="Card image"
          className="h-full w-full rounded-md object-cover"
        />
      )}
    </motion.div>
  ) : (
    <motion.div
      layout
      initial={false}
      animate={{
        height: activeButton === 'phone' ? 520 : 240,
        width:
          activeButton === 'phone'
            ? isHovered
              ? 548
              : 260
            : isHovered
              ? 504
              : 200,
      }}
      className={`bg-steel border-clay flex rounded-md border transition`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl}
        alt="Card image"
        className={`h-full w-full max-w-[260px] rounded-md object-cover ${isHovered ? 'scale-95' : 'scale-100'} transition duration-300 ease-in-out`}
      />

      <div
        className={` ${isHovered ? 'z-10 opacity-100' : '-z-10 opacity-0'} flex h-full flex-col ${activeButton === 'phone' ? 'max-w-[260px]' : 'w-full'} justify-between p-4 duration-100`}
      >
        <NFTInformation activeButton={activeButton} />
        <div className="flex w-full gap-2">
          <CopyButton />
          <PrimaryButton isMobile={isMobile} title={'Download'} />
        </div>
      </div>
    </motion.div>
  )
}

const NFTInformation = ({ activeButton }: NFTInformationProps) => {
  return (
    <div className="flex h-full w-full flex-col gap-2 text-white">
      <div className="text-lavender text-sm">Wallpapers of Unsplash</div>
      <div className="font-medium text-white">
        {placeholderNFTInformation.name}
      </div>
      <div className="text-lavender text-sm">
        {activeButton === 'phone'
          ? placeholderNFTInformation.description
          : null}
      </div>
      <div className="divide-clay flex flex-col gap-2 divide-y pt-4 text-sm">
        <div className="flex justify-between">
          <div className="text-lavender">Total Assets:</div>
          <div className="text-white">{placeholderNFTInformation.assets}</div>
        </div>

        <div className="flex justify-between py-2 text-sm">
          <div className="text-lavender">Assets Type:</div>
          <div className="text-white">{placeholderNFTInformation.type}</div>
        </div>
      </div>
    </div>
  )
}
