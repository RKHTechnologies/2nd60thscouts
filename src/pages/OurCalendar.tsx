import React, { FC } from 'react';
import { PageBodyContainer, colours } from '../Shared/SharedStyles';
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

const eventHandler = (e: any) => {
  console.dir(e);
  console.dir(e.event.title);
  console.dir(e.event.extendedProps.description);
}

const OurCalendar: FC = () => {
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
        <ModalOverlay />
      </>
    );
}

export default OurCalendar;