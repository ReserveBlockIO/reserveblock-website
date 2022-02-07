export enum CalendarType {
  Apple,
  Google,
  // Microsoft,
  Outlook,
}

const _addToGoogle = (name: string, date: string, description: string) => {
  const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${name}&dates=${date}&details=${description}!&sprop=&sprop=name`;
  window.open(url);
};

const _addToICal = (name: string, date: string, description: string) => {
  const d = date.split("/");

  const url = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:https://reserveblock.io
DTSTART:${d[0]}
DTEND:${d[1]}
SUMMARY:${name}
DESCRIPTION:${description}
LOCATION:
END:VEVENT
END:VCALENDAR`;

  window.open(url);
};

export const addToCalendar = (type: CalendarType) => {
  const name = "RBX Node Presale";
  const date = "2022-02-22-T23-00-00Z/2022-02-22-T24-00-00Z";
  const description = "DEMOCRATIZING NFTs FOR EVERYONE";

  const _name = encodeURIComponent(name);
  const _date = date.replaceAll("-", "");
  const _description = encodeURIComponent(description);

  switch (type) {
    case CalendarType.Google:
      _addToGoogle(_name, _date, _description);
      break;
    case CalendarType.Apple:
      _addToICal(_name, _date, _description);
      break;
    case CalendarType.Outlook:
      _addToICal(_name, _date, _description);
      break;
  }
};

// https://codepen.io/ncer/pen/NxGOoj
