import { AtSign, Plus, X } from "lucide-react";
import type { FormEvent } from 'react'

interface InviteGuestsModalProps {
    closeGuestsOpenModal: () => void
    emailsToInvite: Array<string>
    addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
    removeEmailFromInvites: (email: string) => void
}

export function InviteGuestsModal(props: InviteGuestsModalProps) {
  const { emailsToInvite, closeGuestsOpenModal, addNewEmailToInvite, removeEmailFromInvites } = props

  return (
    <div className="fixed  inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Selecionar Convidados</h2>
            <button onClick={closeGuestsOpenModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="py-1.5 px-2.5 rounded-md bg-zinc-700 text-zinc-300  flex items-center gap-2"
              >
                <span className="text-zinc-300">{email}</span>
                <button type="button">
                  <X
                    className="size-4 text-zinc-300"
                    onClick={() => removeEmailFromInvites(email)}
                  />
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form
          onSubmit={addNewEmailToInvite}
          className="p-2.5  bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <div className="px-2 flex items-center flex-1 gap-2">
            <AtSign className="size-4 text-zinc-400" />
            <input
              className="text-zinc-400 bg-transparent outline-none flex-1"
              placeholder="Digite o e-email do convidado"
              type="email"
              name="email"
            />
          </div>
          <button
            type="submit"
            className="bg-lime-300 text-lime-950 py-2 px-5 rounded-lg flex items-center gap-2 font-medium"
          >
            Convidar
            <Plus className="size-5 text-lime-950" />
          </button>
        </form>
      </div>
    </div>
  );
}
