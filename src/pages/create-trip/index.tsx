import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-gests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";
  
  export function CreateTripPage() {

    const navigate = useNavigate();

    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);


    const [destination, setDestination] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [ownerEmail, setOwnerEmail] = useState('')
    const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>();

    const [emailsToInvite, setEmaislToInvite] = useState([
      "ryan@gmail.com",
      "luan@gmail.com",
    ]);
  
    const [isConfirmTripModaOpen, setIsConfirmTripModaOpen] = useState(false);
  
    function openGuestsInput() {
      setIsGuestsInputOpen(true);
    }
  
    function closeGuestsInput() {
      setIsGuestsInputOpen(false);
    }
  
    function openGuestsModal() {
      setIsGuestsModalOpen(true);
    }
  
    function closeConfirmTripModaOpen() {
      setIsConfirmTripModaOpen(false);
    }
  
    function openConfirmTripModal() {
      setIsConfirmTripModaOpen(true);
    }
  
    function closeGuestsOpenModal() {
      setIsGuestsModalOpen(false);
    }
  

    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      const data = new FormData(event.currentTarget);
      const email = data.get("email")?.toString();
  
      if (!email) return;
  
      if (emailsToInvite.includes(email)) {
        return;
      }
  
      setEmaislToInvite([...emailsToInvite, email]);
  
      event.currentTarget.reset();
    }
  
    function removeEmailFromInvites(emailToRemove: string) {
      const newEmailList = emailsToInvite.filter(
        (email) => email !== emailToRemove
      );
      setEmaislToInvite(newEmailList);
    }

    async function createTrip(event: FormEvent<HTMLFormElement>){
      event.preventDefault();
     

        // navigate('/trips/123')

      if (!destination) return

      if(!eventStartAndEndDates?.from || !eventStartAndEndDates.to) return

      if (emailsToInvite.length == 0) return

      if (!ownerName || !ownerEmail) return

      const response = await api.post('/trips', {
        destination: destination,
        starts_at: eventStartAndEndDates.from,
        ends_at: eventStartAndEndDates.to,
        emails_to_invite: emailsToInvite,
        owner_name: ownerName,
        owner_email: ownerEmail
      })

      const { tripId } = response.data

      navigate(`trips/${tripId}`)
    }
  
    return (
      <div className="h-screen flex items-center justify-center ">
        <div className="max-w-5xl w-full  px-6 text-center space-y-10">
          <div className="flex flex-col items-center gap-3">
            <img src="/logo.svg" alt="plann.er" />
            <p className="text-zinc-300 text-x">
              Convide seus amigos e planeje sua próxima viagem!
            </p>
          </div>
  
          <div className="space-y-4">
            <DestinationAndDateStep 
                closeGuestsInput={closeGuestsInput}
                isGuestsInputOpen={isGuestsInputOpen}
                openGuestsInput={openGuestsInput}
                setDestination={setDestination}
                setStartAndEndDate = {setEventStartAndEndDates}
                selectedDate={eventStartAndEndDates}
            />
  
            {isGuestsInputOpen && (
              <InviteGuestsStep 
                emailsToInvite={emailsToInvite}
                openConfirmTripModal={openConfirmTripModal}
                openGuestsModal={openGuestsModal}
              /> 
            )}
          </div>
  
          <p className="text-zinc-500 text-sm">
            Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
            <br />
            com nossos{" "}
            <a className="text-zinc-300 underline" href="">
              termos de uso
            </a>{" "}
            e
            <a className="text-zinc-300 underline" href="">
              políticas de privacidade
            </a>
            .
          </p>
        </div>
        {isGuestsModalOpen && (
          <InviteGuestsModal
            emailsToInvite={emailsToInvite}
            addNewEmailToInvite={addNewEmailToInvite}
            closeGuestsOpenModal={closeGuestsOpenModal}
            removeEmailFromInvites={removeEmailFromInvites}

          />
        )}
  
        {isConfirmTripModaOpen && (
         <ConfirmTripModal 
            closeConfirmTripModaOpen={closeConfirmTripModaOpen}
            createTrip={createTrip}
            setOwner={setOwnerName}
            setOwnerEmail={setOwnerEmail}
         />
        )}
      </div>
    );
  }
  