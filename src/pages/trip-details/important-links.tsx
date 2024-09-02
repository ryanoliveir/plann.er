import { Link2, Plus } from "lucide-react";

export function ImportantLinks(){
    return (
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
    )
}