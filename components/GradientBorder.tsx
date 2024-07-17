import React, { ReactNode } from 'react'

interface GradientBorderProps {
  children: ReactNode
}

const GradientBorder: React.FC<GradientBorderProps> = ({ children }) => {
  return (
    <div className="bg-gradient-funky relative w-fit rounded-full p-0.5">
      <div className="bg-midnight rounded-full">{children}</div>
    </div>
  )
}

export default GradientBorder
