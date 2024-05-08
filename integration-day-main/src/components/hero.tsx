import { ArrowDown } from 'lucide-react'
import { BackgroundCircles } from './background-circles'
import { GroupIcons } from '@/assets/group-icons'
import { BannerMotion } from './banner-motion'

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col">
      <header className="flex w-full justify-center bg-otg-white pr-2 pt-12">
        <GroupIcons.otgLogo fill="#ff6700" stroke="#ff6700" />
      </header>
      <div className="flex  w-full flex-grow flex-col items-center justify-center gap-y-4">
        <GroupIcons.dayLogo className="z-10 w-3/4 max-w-5xl" />
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="text-center text-6xl font-extrabold uppercase text-slate-900">
            03 de Maio
          </h1>
          <h2 className="text-center text-xl uppercase italic">
            13h (horário de cuiabá)
          </h2>
          <div className="flex w-full flex-col items-center justify-center space-y-4 pt-16">
            <p className="font-inter text-lg">Confirme a sua presença</p>
            <ArrowDown size={32} className="animate-bounce" />
          </div>
        </div>
        <div className="-z-1 relative">
          <BackgroundCircles />
        </div>
      </div>
      <BannerMotion />
    </section>
  )
}
