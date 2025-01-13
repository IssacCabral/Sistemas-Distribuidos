import { electionCloseDate } from "../../servers/TCP/electionCloseDate";

export function timeRemaining(now: Date) {
  const MS_IN_SECOND = 1000;
  const MS_IN_MINUTE = MS_IN_SECOND * 60;
  const MS_IN_HOUR = MS_IN_MINUTE * 60;
  const MS_IN_DAY = MS_IN_HOUR * 24;

  const timeRemaining = electionCloseDate.getTime() - now.getTime();

  const days = Math.floor(timeRemaining / MS_IN_DAY);
  const hours = Math.floor((timeRemaining % MS_IN_DAY) / MS_IN_HOUR);
  const minutes = Math.floor((timeRemaining % MS_IN_HOUR) / MS_IN_MINUTE);
  const seconds = Math.floor((timeRemaining % MS_IN_MINUTE) / MS_IN_SECOND);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
