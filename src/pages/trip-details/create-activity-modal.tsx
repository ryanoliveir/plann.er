import { X, Tag, Calendar } from "lucide-react";

interface CreateActivityModalProps {
    closeActivityModal: () => void
    
}

export function CreateActivityModal({closeActivityModal}: CreateActivityModalProps) {
    return (
        <div className="fixed  inset-0 bg-black/60 flex items-center justify-center">
        <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">
                Cadastrar atividade
              </h2>
              <button onClick={closeActivityModal}>
                <X className="size-5 text-zinc-400" />
              </button>
            </div>
            <p className="text-sm text-zinc-400">
              Todos convidados podem visualizar as atividades.
            </p>
          </div>
  
          <form  className="space-y-3">
            <div className="h-14 px-4  bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
              <Tag className="size-4 text-zinc-400" />
              <input
                className="text-zinc-400 bg-transparent outline-none flex-1"
                placeholder="Qual é a ativade?"
                type="text"
                name="name"
              />
            </div>

            <div className="flex items-center gap-2">
            <div className="h-14 px-4 flex-1  bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                <Calendar className="size-4 text-zinc-400" />
                <input
                  className="text-zinc-400 bg-transparent outline-none flex-1 hide-date-indicator"
                  placeholder="Data"
                  type="date"
                  name="date"
                />
              </div>
              <div className="h-14 w-36 px-4  bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2 ">
                <Calendar className="size-4 text-zinc-400" />
                <input
                  className="text-zinc-400 bg-transparent outline-none flex-1 hide-clock-indicator"
                  placeholder="Horário"
                  type="time"
                  name="time"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-lime-300 w-full text-lime-950 h-11 px-5 rounded-lg flex items-center  justify-center gap-2 font-medium"
            >
              Salvar atividade
            </button>
          </form>
        </div>
      </div>
    )
}