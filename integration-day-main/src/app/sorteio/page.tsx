'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { participantsObject } from '@/lib/participants'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import { SortLoader } from '@/components/sort-loader'

export default function SorteioPage() {
  const [random, setRandom] = useState<number | null>(null)
  const [alreadySorted, setAlreadySorted] = useState<number[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  function randomNumber(max: number) {
    return Math.floor(Math.random() * max) + 1
  }

  const handleSort = () => {
    setLoading(true)
    setTimeout(() => {
      const randomize = randomNumber(participantsObject.length)
      setRandom(randomize)

      if (alreadySorted.includes(randomize)) {
        handleSort()
        return
      }

      setAlreadySorted((prevState) => [...prevState, randomize])
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center p-32 text-left">
      <div className="-mt-8 flex flex-col items-center">
        <SortLoader isLoading={loading} />
      </div>
      <Image
        className="absolute -bottom-36 -z-10 blur-sm md:-bottom-40"
        src={'/faixa_integracao_2.gif'}
        width={2000}
        height={100}
        alt="Faixa da Integração"
      />
      <Image
        className="absolute top-52 -z-20  blur-sm md:top-60"
        src={'/faixa_integracao_reverse.gif'}
        width={2000}
        height={100}
        alt="Faixa da Integração"
      />
      {random && !loading && (
        <div className="w-full text-center">
          <h1 className="pt-4 text-4xl font-bold">{random}</h1>
          <div className="flex flex-col items-center justify-center gap-y-2 pt-4">
            <h1 className="text-xl italic">Participante</h1>

            <h2 className="pt-4 text-2xl font-bold text-otg-orange md:text-4xl">
              {participantsObject[random - 1]?.id} -{' '}
              {participantsObject[random - 1]?.name}
            </h2>
            <h3 className="italic">{participantsObject[random - 1]?.role}</h3>
            <h4 className="font-bold">
              {participantsObject[random - 1]?.company}
            </h4>
          </div>
        </div>
      )}
      <Card className="fixed top-80 mt-16 text-center">
        <CardHeader>
          <h1 className="font-allotrope text-2xl font-bold uppercase md:text-4xl">
            Sorteio
          </h1>
        </CardHeader>
        <CardContent>
          <h2 className="text-lg">Clique para sortear um dos participantes.</h2>
        </CardContent>
        <CardFooter>
          <Button className="w-full text-lg" size="lg" onClick={handleSort}>
            Sortear
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
