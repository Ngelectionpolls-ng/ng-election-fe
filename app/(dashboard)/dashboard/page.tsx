import { dummyNewsArr } from '@/components/common/DummyObjects';
import NewsWrap from '@/components/common/NewsWrap';
import Image from 'next/image';
import ghostImg from '@/public/assets/images/ghost.png';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Dashboard | Eyewitness Report Portal",
    description: "Eyewitness Report Portal",
};

function Page() {
  return (
    <section className="grid gap-4 p-4">
      <h3 className="font-bold">
        {dummyNewsArr.length > 0
          ? 'Latest updates from eyewitnesses'
          : 'Your Activities'}
      </h3>
      {dummyNewsArr.length > 0 ? (
        dummyNewsArr.map((news, index) => (
          <NewsWrap key={index} info={news} />
        ))
      ) : (
        <div className='flex flex-col mt-48 gap-14 text-center content-center flex-wrap'>
          <p>You have no recorded activities, and you <br /> have made 0 earnings </p>
          <Image className='mx-auto' src={ghostImg} alt="ghost" />
        </div>
      )}
    </section>
  );
}

export default Page;
