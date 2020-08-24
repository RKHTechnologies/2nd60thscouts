import React, { FC } from 'react';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';
import calendarIcon from '../img/Calendar.svg';
import { useHistory } from 'react-router-dom';

const CalendarIcon = styled.div`
  width: 75px;
  height: 65px;
  margin-left: 25px;
  background-color: ${colours.Teal};  
  background-size: contain;
  mask: url(${calendarIcon});
  mask-size: contain;
`;

const Link = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid ${colours.Teal};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  font-size: 2em;
  color: ${colours.Purple};
  cursor: pointer;

  span {
    margin-left: 20px;
    font-weight: 200;
    color: ${colours.Teal};
  }

  &:hover {
    background: ${colours.Teal};
    color: #fff;

    span {color: #fff;}

    ${CalendarIcon} {
      background: #fff;
    }
  }

  @media(max-width: 750px) {
    flex-direction: column;
    font-size: 1.4em;
    & > span { margin: 0; }

    ${CalendarIcon} {
      display: none;
    }
  }
`;

const CalendarLink: FC = () => {
  const history = useHistory();

  return (
    <Link onClick={() => history.push(`${process.env.PUBLIC_URL}/ourCalendar`)}>
      What's on?<span> Click to view Our Calendar</span><CalendarIcon />
    </Link>
  );
};

export default CalendarLink;