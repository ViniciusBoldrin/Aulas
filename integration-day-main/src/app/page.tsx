import { Footer } from '@/components/footer'
import { FormPresence } from '@/components/form-presence'
import { Hero } from '@/components/hero'

export default function HomePage() {
  return (
    <main className="flex w-full flex-col bg-otg-white">
      <Hero />
      <section className="flex min-h-screen w-full flex-col items-center justify-center bg-otg-blue text-center">
        <h1 className="text-4xl font-bold uppercase text-otg-white">
          Garanta a sua vaga
        </h1>
        <h2 className="text-sm text-otg-white/80">
          Preencha os campos abaixo para não perder o evento
        </h2>
        <div className="z-10 mx-auto mt-8 w-[360px] rounded-lg bg-gradient-to-r from-slate-600/50 to-gray-800/60 p-8 shadow-lg">
          <FormPresence />
        </div>
      </section>
      <Footer className="bg-otg-blue" />
    </main>
  )
}
