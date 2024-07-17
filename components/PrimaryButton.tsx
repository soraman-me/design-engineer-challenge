interface PrimaryButtonProps {
  isMobile: boolean
  title: string
}
export default function PrimaryButton({ isMobile, title }: PrimaryButtonProps) {
  return (
    <button className="flex max-h-[40px] w-full items-center justify-center rounded-md bg-gradient-to-b from-[#6F4CFF] to-[#432E99] py-1 text-sm text-[#EEEBF9] hover:from-[#7E5FFD] hover:to-[#5B45B3] focus:border focus:border-white md:py-4">
      {title}
    </button>
  )
}
