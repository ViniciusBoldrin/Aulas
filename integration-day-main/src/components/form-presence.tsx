'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { type Participant } from '@/types/participant'

const formSchema = z.object({
  name: z
    .string({
      description: 'Digite seu nome',
      required_error: 'Campo obrigatório',
    })
    .min(8, {
      message: 'Seu nome deve ter no mínimo 8 caracteres',
    }),
  homeOffice: z
    .boolean({ description: 'Trabalha em home office?' })
    .default(false),
  company: z.string(),
  department: z
    .string({ description: 'Digite o setor que você trabalha' })
    .default('Convidado'),
  shirtSize: z.string(),
})

export const FormPresence = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const { toast } = useToast()
  const router = useRouter()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch('https://integracaoday.com/api/confirm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!res.ok) {
        toast({
          title: 'Algo deu errado',
          description: 'Tente novamente mais tarde',
          variant: 'destructive',
        })
        return
      }

      toast({
        title: 'Presença confirmada!',
        description: 'Hora de se preparar para o evento!',
        variant: 'default',
      })

      const resData = (await res.json()) as Participant
      router.push(`/convite/${resData.id}`, { scroll: true })
    } catch (err) {
      toast({
        title: 'Algo deu errado',
        description: 'Tente novamente mais tarde',
        variant: 'destructive',
      })
    }
  }

  return (
    <Form {...form}>
      <form
        className="space-y-4 text-left"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-otg-white">
                Nome Completo
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="homeOffice"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-lg font-normal italic text-otg-white">
                  Trabalho em Home Office
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-otg-white">
                Qual a sua empresa?
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a sua empresa..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="font-bold">
                  <SelectItem value="grupo-otg">Grupo OTG</SelectItem>
                  <SelectItem value="tylty-company">Tylty Company</SelectItem>
                  <SelectItem value="r10">R10 Score</SelectItem>
                  <SelectItem value="fluma">Fluma</SelectItem>
                  <SelectItem value="otg-comunicacoes">
                    OTG Comunicações
                  </SelectItem>
                  <SelectItem value="convidados">Convidados</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-otg-white">
                Seu setor
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shirtSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-otg-white">
                Qual o tamanho da sua camiseta?
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tamanho..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="font-bold">
                  <SelectItem value="pp">PP</SelectItem>
                  <SelectItem value="p">P</SelectItem>
                  <SelectItem value="m">M</SelectItem>
                  <SelectItem value="g">G</SelectItem>
                  <SelectItem value="gg">GG</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        {/* <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button type="button">Confirmar</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Atenção</AlertDialogTitle>
              <AlertDialogDescription>
                Você não poderá alterar as informações depois. Deseja realmente
                confirmar sua presença?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button>Confirmar</Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog> */}
        <div className="py-4">
          <Button className="w-full">Confirmar</Button>
        </div>
      </form>
      <span className="mt-4 block border-t border-slate-50/20 pt-4 text-center font-inter text-sm font-thin text-slate-200">
        Você não poderá alterar os dados depois, preencha com atenção.
      </span>
    </Form>
  )
}
