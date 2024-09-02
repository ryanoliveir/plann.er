import { CircleCheck, CircleDashed, UserCog } from "lucide-react";

export function Guests() {
    return (
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
    )
}