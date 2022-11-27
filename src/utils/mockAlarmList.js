const d = new Date();

export const mockAlarmList = [
  {
      "hour": "10",
      "minute": "00",
      "active": false,
  },
  {
      "hour": "9",
      "minute": "15",
      "active": false,
  },
  {
      "hour": "6",
      "minute": "30",
      "active": false,
  },
  {
    "hour": String(d.getHours()),
    "minute": String(d.getMinutes() + 1),
    "active": false,
  }
];
