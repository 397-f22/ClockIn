const d = new Date();

export const mockAlarmList = [
  {
      "hour": "10",
      "minute": "00",
      "active": true,
  },
  {
      "hour": "9",
      "minute": "15",
      "active": true,
  },
  {
      "hour": "6",
      "minute": "30",
      "active": true,
  },
  {
    "hour": d.getHours(),
    "minute": d.getMinutes(),
    "active": true,
  }
];
