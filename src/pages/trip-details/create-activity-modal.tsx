import { X, Tag, Calendar } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
// import { DateRange, DayPicker } from "react-day-picker";
// import "react-day-picker/style.css";
// import { format } from "date-fns";



interface CreateActivityModalProps {
  closeActivityModal: () => void;
}

export function CreateActivityModal({
  closeActivityModal,
}: CreateActivityModalProps) {

  const { tripId }  = useParams()
  // const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  // const [selectedDate, setEventStartAndEndDates] = useState<DateRange | undefined>();
  
  // function openDatePicker() {
  //   return setIsDatePickerOpen(true);
  // }

  // function closeDataPicker() {
  //   return setIsDatePickerOpen(false);
  // }

  // const displayedDate = selectedDate && selectedDate.from && selectedDate.to ? 
  // format(selectedDate.from, "d 'de' LLL").concat(' á ').concat(format(selectedDate.to, "d 'de' LLL")) : null;

  function createActivity(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const data = new FormData(event.currentTarget)

    const title = data.get('title')?.toString()
    const date = data.get('starts_at')?.toString()
    const time = data.get('time')?.toString()

    const occurs_at = `${date}T${time}`

    api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at
    })

    closeActivityModal()
  }

  return (
    <div className="fixed  inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button onClick={closeActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form onSubmit={createActivity} className="space-y-3">
          <div className="h-14 px-4  bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="size-4 text-zinc-400" />
            <input
              className="text-zinc-400 bg-transparent outline-none flex-1"
              placeholder="Qual é a ativade?"
              type="text"
              name="title"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-14 px-4 flex-1  bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
              <Calendar className="size-4 text-zinc-400" />
              <input
                className="text-zinc-400 bg-transparent outline-none flex-1 hide-date-indicator"
                placeholder="Data"
                type="date"
                name="starts_at"
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
          <Button variant="primary" size="full">
            Salvar Atividade
          </Button>
        </form>
      </div>
    </div>
  );
}


