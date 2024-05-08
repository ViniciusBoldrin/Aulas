import { useState } from 'react'
import { Button } from './ui/button'

export const CopyUrl = () => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
  }

  return (
    <div className="mx-auto my-2 flex w-full items-center">
      <Button variant="default" onClick={copyToClipboard} className="w-full">
        {copied ? 'Copiado!' : 'Copiar a URL do seu convite'}
      </Button>
    </div>
  )
}
