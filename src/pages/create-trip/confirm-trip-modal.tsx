import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps {
    closeConfirmTripModaOpen: () => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal(props: ConfirmTripModalProps) {
  const { closeConfirmTripModaOpen, createTrip } = props;


  return (
    <div className="fixed  inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação de viagem
            </h2>
            <button onClick={closeConfirmTripModaOpen}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onClick={createTrip} className="space-y-3">
          <div className="h-14 px-4  bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="size-4 text-zinc-400" />
            <input
              className="text-zinc-400 bg-transparent outline-none flex-1"
              placeholder="Seu nome completo"
              type="text"
              name="name"
            />
          </div>
          <div className="h-14 px-4  bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
            <Mail className="size-4 text-zinc-400" />
            <input
              className="text-zinc-400 bg-transparent outline-none flex-1"
              placeholder="Seu e-mail pessoal"
              type="email"
              name="email"
            />
          </div>
          <button
            type="submit"
            className="bg-lime-300 w-full text-lime-950 h-11 px-5 rounded-lg flex items-center  justify-center gap-2 font-medium"
          >
            Confirmar confirmação de viagem
          </button>
        </form>
      </div>
    </div>
  );
}
