import { Calendar, MapPin, Settings2, Plus, CircleCheck, Link2, UserCog, CircleDashed } from "lucide-react";

export function TripDetailsPage() {
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Florianópolis, Brasil</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">17 a 23 de Agosto</span>
          </div>

          <div className="w-px h-6 bg-zinc-800"></div>

          <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Alterar local/data
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>

      <main className="flex gap-16">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-semibold">Atividades</span>
            <button
              type="submit"
              className="bg-lime-300 text-lime-950 py-2 px-5 rounded-lg flex items-center gap-2 font-medium"
            >
              <Plus className="size-5 text-lime-950" />
              Cadastrar Atividade
            </button>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                    <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                    <span className="text-xs text-zinc-500">Sábado</span>

                </div>
                <span className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</span>
            </div>


            <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                    <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                    <span className="text-xs text-zinc-500">Domingo</span>

                </div>
                <div className="space-y-2.5">
                    {/* <div className="px-4 py-2.5 h-10 bg-zinc-900 rounded-xl flex items-center justify-between"> */}
                    <div className="px-4 py-2.5 h-10 bg-zinc-900 rounded-xl flex items-center gap-3">
                      <CircleCheck className="size-5 text-lime-300"/>
                      <span className="text-zinc-100">Academia em Grupo</span>
                      <span className="ml-auto text-zinc-500 text-sm">08:00h</span>
                    </div>

                </div>
                <div className="space-y-2.5">
                    {/* <div className="px-4 py-2.5 h-10 bg-zinc-900 rounded-xl flex items-center justify-between"> */}
                    <div className="px-4 py-2.5 h-10 bg-zinc-900 rounded-xl flex items-center gap-3">
                      <CircleCheck className="size-5 text-lime-300"/>
                      <span className="text-zinc-100">Academia em Grupo</span>
                      <span className="ml-auto text-zinc-500 text-sm">08:00h</span>
                    </div>

                </div>
            </div>

          </div>

        </div>

        <div className="w-80 space-y-6">
            <div className="space-y-6">
                <h2 className="font-semibold text-xl">Links Importantes</h2>

                <div className="spacey-y-5">
                    <div className="flex items-center justify-between gap-10">
                        <div className="space-y-1.5 flex-1">
                            <span className="block font-medium">Reserva do AirBnB</span>
                            <span className="block text-xs text-zinc-400 font-medium truncate">https://drive.google.com/drive/folders/1D8P17E2tnN_OzbtnK_csSU60NCpDfVWe</span>
                        </div>
                        <Link2 className="size-5 text-zinc-400"/>

                    </div>
                </div>

                <div className="spacey-y-5">
                    <div className="flex items-center justify-between gap-10">
                        <div className="space-y-1.5 flex-1">
                            <span className="block font-medium">Reserva do AirBnB</span>
                            <span className="block text-xs text-zinc-400 font-medium truncate">https://drive.google.com/drive/folders/1D8P17E2tnN_OzbtnK_csSU60NCpDfVWe</span>
                        </div>
                        <Link2 className="size-5 text-zinc-400"/>

                    </div>
                </div>

                <div className="spacey-y-5">
                    <div className="flex items-center justify-between gap-10">
                        <div className="space-y-1.5 flex-1">
                            <span className="block font-medium">Reserva do AirBnB</span>
                            <span className="block text-xs text-zinc-400 font-medium truncate">https://drive.google.com/drive/folders/1D8P17E2tnN_OzbtnK_csSU60NCpDfVWe</span>
                        </div>
                        <Link2 className="size-5 text-zinc-400"/>

                    </div>
                </div>

                <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
                  <Plus className="size-5" />
                  Cadastrar novo link
                </button>
            </div>

            <div className="w-full h-px bg-zinc-800" />

            <div>
            <div className="space-y-6">
                <h2 className="font-semibold text-xl">Covidados</h2>

                <div className="spacey-y-5">
                    <div className="flex items-center justify-between gap-10">
                        <div className="space-y-1.5 flex-1">
                            <span className="block font-medium">Jessica White</span>
                            <span className="block text-sm text-zinc-400 font-medium truncate">jessica.white44@yahoo.com</span>
                        </div>
                        <CircleCheck className="size-5 text-lime-300"/>

                    </div>
                </div>

                <div className="spacey-y-5">
                    <div className="flex items-center justify-between gap-10">
                        <div className="space-y-1.5 flex-1">
                            <span className="block font-medium">Jessica White</span>
                            <span className="block text-sm text-zinc-400 font-medium truncate">jessica.white44@yahoo.com</span>
                        </div>
                        <CircleDashed className="size-5 text-zinc-400"/>

                    </div>
                </div>

                <div className="spacey-y-5">
                    <div className="flex items-center justify-between gap-10">
                        <div className="space-y-1.5 flex-1">
                            <span className="block font-medium">Jessica White</span>
                            <span className="block text-xs text-zinc-400 font-medium truncate">jessica.white44@yahoo.com</span>
                        </div>
                        <CircleDashed className="size-5 text-zinc-400"/>

                    </div>
                </div> 

                

                <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
                  <UserCog className="size-5" />
                  Gerenciar convidados
                </button>
            </div>

            </div>
        </div>
      </main>
    </div>
  );
}
