import { CardMotion } from '@/components/card-motion'
import { Footer } from '@/components/footer'
import { GoogleIframe } from '@/components/google-iframe'
import { Outfits } from '@/components/outfits'
import { db } from '@/server/db'
import { participants } from '@/server/db/schema'
import { eq } from 'drizzle-orm'
import Image from 'next/image'

interface PageProps {
  params: {
    id: string
  }
}

export default async function Page(props: PageProps) {
  const participant = await db
    .select()
    .from(participants)
    .where(eq(participants.id, Number(props.params.id)))

  function handleCompany(company: string): string {
    switch (company) {
      case 'grupo-otg':
        return 'Grupo OTG'
      case 'tylty-company':
        return 'Tylty Company'
      case 'r10':
        return 'R10 Score'
      case 'fluma':
        return 'Fluma'
      default:
        return ''
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-y-2">
      <Image
        className="absolute top-14 -z-10 md:-top-40"
        src={'/faixa_integracao_2.gif'}
        width={2000}
        height={100}
        alt="Faixa da Integração"
      />
      <Image
        className="absolute top-52 -z-20  md:top-60"
        src={'/faixa_integracao_reverse.gif'}
        width={2000}
        height={100}
        alt="Faixa da Integração"
      />

      <section className="relative mt-8 flex flex-col items-center justify-center gap-y-4">
        <div>
          <h1 className="text-7xl font-bold">Parabéns!</h1>
          <h2 className="text-lg">Sua presença foi confirmada com sucesso</h2>
        </div>

        {participant[0]?.id && (
          <CardMotion
            company={handleCompany(participant[0].company!)}
            name={participant[0].name}
            createdAt={participant[0].createdAt}
            department={participant[0].department}
            homeOffice={participant[0].homeOffice}
            id={participant[0].id}
            shirtSize={participant[0].shirtSize}
          />
        )}
      </section>
      <section className="mt-8 flex flex-col items-center justify-center p-8">
        <h1 className="border-b border-slate-200 text-3xl font-bold uppercase">
          Detalhes do Evento
        </h1>

        <div className="mt-8 space-y-2">
          <h2 className="text-lg font-semibold">Traje</h2>
          <p>Esporte Fino</p>

          <span className="mt-4 block font-semibold">Inspire-se</span>
          <div className="max-w-3/4">
            <Outfits />
          </div>
        </div>

        <div className="mt-8 w-full space-y-2">
          <h2 className="text-lg font-semibold">Horário</h2>
          <p>13H00 (horário de Cuiabá/MT)</p>
        </div>
        <div className="mb-8 mt-4 w-full space-y-2">
          <h2 className="text-lg font-semibold">Localização</h2>
          <p>VIVANS - Complexo de Eventos</p>

          <div className="max-w-5/6  mx-auto">
            <GoogleIframe />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
