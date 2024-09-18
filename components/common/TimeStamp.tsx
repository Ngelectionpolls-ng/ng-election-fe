import React from 'react';

type Props = { time: string};

export default function TimeStamp({ time }: Props) {
  const colorState = (time: string) => {
    switch (time) {
      case "Today": return "bg-greenShades-timestamp";
      case "Yesterday": return "bg-grey"
      default: return "border border-green-700"
    }
  }

  return (
    <h2 className={`w-max mx-auto px-4 py-1 text-current rounded-2xl ${colorState(time)}`}>
      {time}
    </h2>
  );
}
