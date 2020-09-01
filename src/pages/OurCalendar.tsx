import React, { FC, useState } from 'react';
import { PageBodyContainer, colours, Colour } from '../Shared/SharedStyles';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import styled from 'styled-components';
import { CalendarEvents } from './OurCalendarEvents';
import ModalOverlay from '../Components/ModalOverlay';

const CalendarContainer = styled.div`
  width: 92%;
  height: calc(100vh - 200px);
  margin: auto;
  margin-top: 60px;

  .fc-toolbar-title {
    font-weight: 100;
    color: ${colours.Purple};
  }

  .fc-daygrid-day-number {
    font-weight: 100;
  }
  
  .fc-event-title {
    font-weight: 400;
    color: ${colours.dark};
  }


  .fc-day-sat:not(.fc-col-header-cell), .fc-day-sun:not(.fc-col-header-cell) {
    background: #f5f5f5;
  }

  .fc-daygrid-event {
    border-radius: 0;
    border: 0;
    border-left: 4px solid transparent;
    padding: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .all {
    background: ${colours.Teal}30;
    border-color: ${colours.Teal};
  }
  .beavers {
    background: ${colours.Blue}30;
    border-color: ${colours.Blue};
  }
  .cubs {
    background: ${colours.Green}30;
    border-color: ${colours.Green};
  }
  .scouts {
    background: ${colours.Purple}30;
    border-color: ${colours.Purple};
  }
  .explorers {
    background: ${colours.Red}30;
    border-color: ${colours.Red};
  }
`;



const OurCalendar: FC = () => {
    const [overlayOpen, setOverlayOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [accent, setAccent] = useState<Colour>("grey60");
    const [startDate, setStartDate] = useState("2001-01-01");

    const eventHandler = (e: any) => {
      const className = e.event.classNames[0];

      switch (className) {
        case "any":
          setAccent("Teal");
          break;
        case "beavers":
          setAccent("Blue");
          break;
        case "cubs":
          setAccent("Green");
          break;
        case "scouts":
          setAccent("Purple");
          break;
        case "explorers":
          setAccent("Red");
          break;
        default:
          setAccent("Pink");
          break;
      }

      setTitle(e.event.title)
      setDescription(e.event.extendedProps.description)
      console.dir(e.event.start);
      // setStartDate(e.event.start);
      setOverlayOpen(true);
    };

    const handleClose = () => {
      setOverlayOpen(false);
    };

    return (
      <>
        <PageBodyContainer>     
          <CalendarContainer>
            <FullCalendar 
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              events={CalendarEvents}
              height={"100%"}
              firstDay={1}
              eventClick={e => eventHandler(e)}
            />          
          </CalendarContainer>
        </PageBodyContainer>
        <ModalOverlay open={overlayOpen} close={handleClose} title={title} description={description} accent={accent} startDate={startDate} />
      </>
    );
}

export default OurCalendar;