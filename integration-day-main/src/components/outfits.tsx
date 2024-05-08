import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

const images = [
  {
    path: '/ROUPAS-1.png',
    alt: 'Outfit 1',
    width: 120,
    height: 200,
  },
  {
    path: '/ROUPAS-4.png',
    alt: 'Outfit 4',
    width: 120,
    height: 200,
  },
  {
    path: '/ROUPAS-2.png',
    alt: 'Outfit 2',
    width: 120,
    height: 200,
  },
  {
    path: '/ROUPAS-3.png',
    alt: 'Outfit 3',
    width: 120,
    height: 200,
  },
]

export const Outfits = () => {
  return (
    <Carousel>
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem
            key={image.path}
            className="w-full basis-1/2 md:basis-1/3"
          >
            <Image
              className="h-full w-full scale-90 rounded-lg border-2 border-white/50 object-fill shadow-lg transition-transform hover:scale-100"
              src={image.path}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-6" />
      <CarouselNext className="mr-6" />
    </Carousel>
  )
}
