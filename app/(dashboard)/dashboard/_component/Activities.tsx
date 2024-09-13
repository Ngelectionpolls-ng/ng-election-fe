'use Client';

import Activity from '@/components/common/Activity';
import { dateHandler } from '@/utils/functions/FunctionUtils';
import CollapsibleComponent from '@/components/ui/collapsible';
import Image, { StaticImageData } from 'next/image';
import ghostImg from '@/public/assets/images/ghost.png';
import { useState, useEffect, useMemo } from 'react';

type NewsItem = {
  id: number;
  src: StaticImageData;
  poolingUnit: string;
  localGovt: string;
  state: string;
  title: string;
  status: string;
  createdAt: string;
};

export default function Activities({ arr }: { arr: NewsItem[] }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the time periodically (optional, for real-time updates)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date()); // Update current time every minute
    }, 60000); // Update every 60 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  // Memoize categorized news so it doesn't recalculate on every render
  const categorizedNews = useMemo(() => {
    const result: {
      today: NewsItem[];
      yesterday: NewsItem[];
      older: { [key: string]: NewsItem[] };
    } = { today: [], yesterday: [], older: {} };

    arr.forEach((newsItem) => {
      const category = dateHandler(newsItem.createdAt);

      if (currentTime) {
        if (category === 'Today') {
          result.today.push(newsItem);
        } else if (category === 'Yesterday') {
          result.yesterday.push(newsItem);
        } else {
          // For older dates, use the formatted date as the key
          if (category && !result.older[category]) {
            result.older[category] = [];
          }
          if (category) {
            result.older[category].push(newsItem);
          }
        }
      }
    });

    return result;
  }, [arr, currentTime]); // Recompute only when news or time changes

  return (
    <CollapsibleComponent header={'Your Activities'}>
      {arr.length > 0 ? (
        <>
          {categorizedNews.today.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="w-max mx-auto px-4 py-1 text-current rounded-2xl bg-greenShades-timestamp">
                Today
              </h2>
              {categorizedNews.today.map((newsItem: NewsItem) => (
                <Activity key={newsItem.id} info={newsItem} />
              ))}
            </div>
          )}
          {categorizedNews.yesterday.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="w-max mx-auto px-4 py-1 text-current rounded-2xl bg-grey">
                Yesterday
              </h2>
              {categorizedNews.yesterday.map((newsItem: NewsItem) => (
                <Activity key={newsItem.id} info={newsItem} />
              ))}
            </div>
          )}
          {Object.keys(categorizedNews.older).map((date) => (
            <div key={date} className="flex flex-col gap-4">
              <h2 className="w-max mx-auto px-4 py-1 text-current rounded-2xl border border-green-700">
                {date}
              </h2>
              {categorizedNews.older[date].map((newsItem: NewsItem) => (
                <Activity key={newsItem.id} info={newsItem} />
              ))}
            </div>
          ))}
        </>
      ) : (
        <div className="flex flex-col mt-20 gap-14 text-center content-center flex-wrap">
          <p>
            You have no recorded activities, and you <br /> have made 0 earnings{' '}
          </p>
          <Image className="mx-auto" src={ghostImg} alt="ghost" />
        </div>
      )}
    </CollapsibleComponent>
  );
}
