import { Calendar, MapPin, Settings2, Plus, CircleCheck, Link2, UserCog, CircleDashed } from "lucide-react";
import { CreateActivityModal } from "./create-activity-modal";
import { useState } from "react";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";

export function TripDetailsPage() {
  const [ isCreateActivityModalOpen, setIsCreateActivityModalOpen ] = useState(false)

  function openCreateActivityModal(){
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
     <DestinationAndDateHeader />

      <main className="flex gap-16">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-semibold">Atividades</span>
            <button
              type="submit"
              className="bg-lime-300 text-lime-950 py-2 px-5 rounded-lg flex items-center gap-2 font-medium"
              onClick={openCreateActivityModal}
            >
              <Plus className="size-5 text-lime-950" />
              Cadastrar Atividade
            </button>
          </div>
          
          <Activities />

        </div>

        <div className="w-80 space-y-6">
            <ImportantLinks />
            <div className="w-full h-px bg-zinc-800" />
            <Guests />
          
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal closeActivityModal={closeCreateActivityModal} />
      )}

    </div>
  );
}
