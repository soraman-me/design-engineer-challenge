import GradientBorder from '../GradientBorder'
import NFTCarousel from '../NFTCarousel'

export default function SectionNFTWallpapers() {
  return (
    <section className="mt-12 flex w-full flex-col gap-4 px-4 md:gap-6">
      <GradientBorder>
        <h2 className="px-4 py-2 font-normal text-white">
          Introducing NFT Wallpapers
        </h2>
      </GradientBorder>
      <h1 className="max-w-[564px] text-[32px] font-bold leading-[40px] text-white md:text-[64px] md:leading-none">
        CC0 NFT Assets as wallpapers
      </h1>
      <p className="text-smokey text-lg md:text-2xl">
        Grab the NFT you like for your phone wallpaper
      </p>
      <NFTCarousel />
    </section>
  )
}
