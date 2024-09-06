import NewsWrap from '@/components/common/NewsWrap';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

function Page() {
  return (
    <DashboardLayout>
      <section className='grid gap-4 p-4'>
        <h3 className="font-bold">Latest updates from eyewitnesses</h3>
        <NewsWrap />
        <NewsWrap />
        <NewsWrap />
        <NewsWrap />
        <NewsWrap />
      </section>
    </DashboardLayout>
  );
}

export default Page;
