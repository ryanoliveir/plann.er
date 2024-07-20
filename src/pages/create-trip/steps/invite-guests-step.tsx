import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
    openGuestsModal: () => void;
    openConfirmTripModal: () => void
    emailsToInvite: Array<string>
}


export function InviteGuestsStep(props: InviteGuestsStepProps) {
  const { openGuestsModal, openConfirmTripModal, emailsToInvite } = props;
  
  return (
    <div className="h-16 bg-zinc-900 rounded-xl px-4 flex items-center shadow-shape gap-3 ">
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex items-center gap-2 flex-1 text-left"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-lg text-zinc-100 flex-1">
            {emailsToInvite.length} pessoa(s) convidadas(s)
          </span>
        ) : (
          <span className="text-lg text-zinc-400 flex-1">
            Quem estará na viagem ?
          </span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800"></div>

      <button
        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
        onClick={openConfirmTripModal}
      >
        Confirmar viagem
        <ArrowRight className="size-5" />
      </button>
    </div>
  );
}
