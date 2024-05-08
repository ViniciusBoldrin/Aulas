import '@/styles/sort-loader.css'

export const SortLoader = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null
  return <span className="loader text-otg-orange"></span>
}
