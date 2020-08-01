import React, {useEffect, useState} from 'react';
import styled, { keyframes } from 'styled-components';
import YouTube from "react-youtube";
import { schedule } from "../schedule";

const flicker = keyframes`
  from {
    color: #0c0c0c;
    background-color: #ffffff;
  }
  to {
    color: #61dafb;
    background-color: #EE7752;
  }
`

const ScheduleRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
    z-index: 2;
`

const ScheduleItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100px;
  background-color: #fff;
  padding: 10px;
  min-width: 330px;
  color: #0c0c0c;
  border-radius: 4px;
  margin: 10px;
  animation: ${props => props.highlight ? flicker: "none"} 0.1s infinite;
 
  //
  @media(max-width: 1000px) {
  text-align: center;
    min-width: 100px;
  }
`

const Time = styled.span`
  opacity: 0.5;
  text-align: right;
  //
  @media(max-width: 1000px) {
    text-align: center;
  }
`

const Schedule = () => {

    return (
        <ScheduleRow>
            {schedule.map(({name, time, vid, highlight}) => (
                <ScheduleItem highlight={highlight}>
                    <h2>{name}</h2>
                    {vid && <YouTube videoId={vid} opts={{width: 330, height: 190}} />}
                    <Time>{time}</Time>
                </ScheduleItem>
            ))}
        </ScheduleRow>
    )
}

export { Schedule }
