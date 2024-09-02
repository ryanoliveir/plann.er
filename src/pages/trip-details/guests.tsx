import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

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

            <Button variant="secondary" size="full">
                <UserCog className="size-5" />
                Gerenciar convidados
            </Button>
        </div>

        </div>
    )
}