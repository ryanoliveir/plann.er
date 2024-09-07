import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useState, useEffect } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface Participant {
  id: string;
  name: string;
  email: string;
  ends_at: string;
  is_confirmed: true;
}

export function Guests() {
  const { tripId } = useParams();
  const [participants, setPartipants] = useState<Participant[] | undefined>();

  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setPartipants(response.data.participants));
  }, [tripId]);

  return (
    <div>
      <div className="space-y-6">
        <h2 className="font-semibold text-xl">Covidados</h2>

        {participants?.map((participant, index) => {
          return (
            <div className="spacey-y-5" key={participant.id}>
              <div className="flex items-center justify-between gap-10">
                <div className="space-y-1.5 flex-1">
                  <span className="block font-medium">{participant.name ?? `Convidado ${index}` }</span>
                  <span className="block text-xs text-zinc-400 font-medium truncate">
                    {participant.email}
                  </span>
                </div>
                {participant.is_confirmed ? (
                  <CircleCheck className="size-5 text-lime-300" />
                ) : (
                  <CircleDashed className="size-5 text-zinc-400" />
                )}
              </div>
            </div>
          );
        })}

        <Button variant="secondary" size="full">
          <UserCog className="size-5" />
          Gerenciar convidados
        </Button>
      </div>
    </div>
  );
}
