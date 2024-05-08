import { Loader } from '@/components/loader'

export default function Loading() {
  return (
    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
      <Loader />
    </div>
  )
}
