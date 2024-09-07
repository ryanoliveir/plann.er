import { Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from "date-fns";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  openGuestsInput: () => void;
  closeGuestsInput: () => void;
  setDestination: (destination: string) => void;
  setStartAndEndDate: (dates: DateRange | undefined) => void;
  selectedDate: DateRange | undefined;
}

export function DestinationAndDateStep(props: DestinationAndDateStepProps) {
  const { isGuestsInputOpen, openGuestsInput, closeGuestsInput, setDestination, setStartAndEndDate, selectedDate } = props;
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  function openDatePicker() {
    return setIsDatePickerOpen(true);
  }

  function closeDataPicker() {
    return setIsDatePickerOpen(false);
  }


  const displayedDate = selectedDate && selectedDate.from && selectedDate.to ? 
  format(selectedDate.from, "d 'de' LLL").concat(' á ').concat(format(selectedDate.to, "d 'de' LLL")) : null;

  return (
    <div className="h-16 bg-zinc-900 rounded-xl px-4 flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400"/>
        <input
          type="text"
          placeholder="Para onde você vai"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          disabled={isGuestsInputOpen}
          onChange={event => setDestination(event.target.value)}
        />
      </div>

      <button
        onClick={openDatePicker}
        disabled={isGuestsInputOpen}
        className="flex items-center gap-2 text-left w-[240px]"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40 flex-1">
          {displayedDate || 'Quando'}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed  inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button onClick={closeDataPicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>

            <DayPicker 
              selected={selectedDate}
              onSelect={setStartAndEndDate}
              mode="range"
            />
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800"></div>

      {isGuestsInputOpen ? (
        <Button variant="secondary" onClick={closeGuestsInput}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      )}
    </div>
  );
}
