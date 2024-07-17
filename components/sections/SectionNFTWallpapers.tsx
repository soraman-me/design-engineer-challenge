import GradientBorder from '../GradientBorder'

export default function SectionNFTWallpapers() {
  return (
    <section className="mt-12 flex w-full flex-col gap-4 px-4">
      <GradientBorder>
        <h2 className="px-4 py-2 font-normal text-white">
          Introducing NFT Wallpapers
        </h2>
      </GradientBorder>
      <h1 className="text-[32px] font-bold leading-[40px] text-white">
        CC0 NFT Assets as wallpapers
      </h1>
      <p className="text-smokey">
        Grab the NFT you like for your phone wallpaper
      </p>
    </section>
  )
}
