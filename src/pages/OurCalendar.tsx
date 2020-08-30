import React, { FC } from 'react';
import { PageBodyContainer, colours } from '../Shared/SharedStyles';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import styled from 'styled-components';

const CalendarContainer = styled.div`
  width: 50%;
  height: 80%;
  margin: auto;
  margin-top: 60px;

  .fc-toolbar-title {
    font-weight: 100;
    color: ${colours.Purple};
  }

  .fc-day-sat:not(.fc-col-header-cell), .fc-day-sun:not(.fc-col-header-cell) {
    background: #f5f5f5;
  }

  .fc-event-main {
    border: 0;
    border-left: 5px solid black;
    padding-left: 2px;
  }

  .beavers {
    background: ${colours.Blue}73;
    border: 0;
    border-left: 8px solid ${colours.Blue};
  }
`;

const CalendarEvents = [
  { 
    title: 'Scouts Event 1', 
    date: '2020-08-25',
    className: 'scouts',
  },
  { 
    title: 'Beavers Event 1', 
    date: '2020-08-25',
    className: 'beavers',
  },
  { 
    title: 'event 2', 
    start: '2020-09-02',
    end: '2020-09-05',
    className: 'all',
  }
];


const OurCalendar: FC = () => {
    return (
      <PageBodyContainer>     
        
            <CalendarContainer>

              <FullCalendar 
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={CalendarEvents}
              />          

            </CalendarContainer>

      </PageBodyContainer>
    );
}

export default OurCalendar;