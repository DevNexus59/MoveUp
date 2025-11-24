//recup des import normal, mais aussi ceux du calendar
import French from "@fullcalendar/core/locales/fr";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useContext, useState } from "react";
import "./PlanningCalendar.css";

import type {
  DateSelectArg,
  EventClickArg,
  EventDropArg,
  EventInput,
} from "@fullcalendar/core";
import type { EventResizeDoneArg } from "@fullcalendar/interaction";

import ExercicesContext from "../context/ExercicesContext";
import EventModal from "./EventModal";

//declaration de props pour changement de taille
type PlanningCalendarProps = {
  size?: "sm" | "md" | "lg";
  height?: "auto" | number;
};

function PlanningCalendar({size = "md", height = "auto"}: PlanningCalendarProps) {
  const ctx = useContext(ExercicesContext);
  if (!ctx) {
    throw new Error(
      "PlanningCalendar doit etre utilise avec ExercisesProvider",
    );
  }

  const { events, updateEvent } = ctx; //recup les seances planifiees, les modifs avec le drag/drop/resize
  const [isModalOpen, setIsModalOpen] = useState(false); //controle le modale
  const [editingEventId, setEditingEventId] = useState<string | null>(null); // null = creer la seance / string = on edite via l'id
  const [initialRange, setInitialRange] = useState<{
    //plage de date
    start: Date;
    end: Date;
  } | null>(null);

  //permet de changer la taille via les props
  const wrapperClassName = `planning-wrapper planning-wrapper--${size}`;

  //permet de faire la conversion en fullcalendar car ce ***** attendait les objets typiques du EventInput
  const calendarEvents: EventInput[] = events.map((evt) => ({
    id: evt.id,
    title: evt.title,
    start: evt.start,
    end: evt.end,
  }));

  //creation sur une plage
  const handleSelect = (arg: DateSelectArg) => {
    //plage selectionnee
    setEditingEventId(null); // mode crea
    setInitialRange({ start: arg.start, end: arg.end }); //on stocke la plage dans initialrange
    setIsModalOpen(true); // et on appelle a ouvrir la modale
  };

  //clic sur un event pour l'editer (event est l'event de fullcalendar)
  const handleEventClick = (arg: EventClickArg) => {
    const { event } = arg;
    if (!event.start) {
      console.warn("Event sans date de début :", event);
      return;
    }

    //permet de mettre juste start si y a pas de end.
    const start = event.start;
    const end = event.end ?? start;

    setEditingEventId(event.id as string); //permet au modal de piger que c'est une edition
    setInitialRange({ start, end }); //pre remplissage de date
    setIsModalOpen(true); // on appelle a ouvrir la modale
  };

  //permet le drag and drop sans avoir a ouvrir la modale
  const handleEventDrop = (arg: EventDropArg) => {
    updateEvent(arg.event.id as string, {
      start: arg.event.start?.toISOString(),
      end: arg.event.end?.toISOString(),
    });
  };

  //redimensionnement d'event suffit de tirer vers le bas ou le haut de l'event pour changer la duree
  //meme principe que le drop on recup id,start,end depuis arg.event et on appelle updateEvent du contexte
  const handleEventResize = (arg: EventResizeDoneArg) => {
    ctx.updateEvent(arg.event.id, {
      start: arg.event.start?.toISOString(),
      end: arg.event.end?.toISOString(),
    });
  };

  //rendu jsx, semantique =)
  return (
    <>
      {/* plugins: active les vues et interactions
      initialView="timeGridWeek": vue par defaut = semaine
      headerToolbar: boutons en haut
      selectable: permet de selectionner une plage de temps à la souris
      selectMirror: affiche une "ghost box" pendant la selection
      editable: autorise le drag & drop et le resize
      events={calendarEvents}: donne les seances
      select={handleSelect}: callback a la selection d'une plage
      eventClick={handleEventClick}: callback clic sur un event
      eventDrop={handleEventDrop}: callback drag & drop
      eventResize={handleEventResize}{" "}: callback resize 
      nowIndicator: ligne rouge "heure actuelle"
      slotMinTime / slotMaxTime bornes de la journee
      */}
      <div className={wrapperClassName}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek",
          }}
          locales={[French]}
          locale="fr"
          selectable
          selectMirror
          editable
          allDaySlot={false}
          droppable={false}
          events={calendarEvents}
          select={handleSelect}
          eventClick={handleEventClick}
          eventDrop={handleEventDrop}
          eventResize={handleEventResize}
          nowIndicator
          slotMinTime="00:00:00"
          slotMaxTime="24:00:00"
          height={height}
        />
        <div
          className="planning-help"
          aria-label="Consignes d'utilisation du planning"
        >
          <strong>Construisez votre planning comme vous voulez!</strong>
          <ul>
            <li>Cliquez sur n'importe quel créneau pour ajouter une séance.</li>
            <li>
              Déplacez une séance pour adapter votre entraînement à votre
              agenda.
            </li>
            <li>
              Étirez une séance pour la rendre plus longue ou plus courte.
            </li>
            <li>
              Cliquez sur la séance pour changer l'exercice ou la supprimer.
            </li>
            <li>Naviguez dans votre planning au mois ou à la semaine.</li>
          </ul>
        </div>
      </div>
      {/* on appelle le composant eventmodal isOpen pour protection / onclose pour la fermer/ editing pour edition ou crea/ plage de date a afficher */}
      {isModalOpen && (
        <EventModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          editingEventId={editingEventId}
          initialRange={initialRange}
        />
      )}
    </>
  );
}

export default PlanningCalendar;
