function OurMission() {
    return (
        <section className='w-screen flex justify-center flex-col items-center'>
            <div className="px-4 md:px-0 md:w-[1124px]">
                <h2 className='text-xl md:text-3xl text-center font-bold'>Our Mission</h2>
                <p className='text-center text-sm text-gray-500'>Nigerian elections has lacked transparency and misinformation has been the order of the day. Now, we have come to make a positive change.</p>
            </div>
            <div className='md:w-[1124px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5 mt-5 bg-white px-4 md:px-0 '>
                <div>
                    <h4 className='font-bold'>Real-Time Reporting and Transparency</h4>
                    <ul className='text-gray-500 text-sm font-medium list-disc flex flex-col gap-2'>
                        <li className='ml-3'>Live Updates: Providing real-time updates on election results and events can help keep the public informed and reduce the spread of misinformation.</li>
                        <li className='ml-2'>Verified Reports: Eyewitness can verify and publish reports from registered users, ensuring accuracy and reliability.</li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-bold'>Curbing Electoral Misinformation</h4>
                    <ul className='text-gray-500 text-sm font-medium list-disc flex flex-col gap-2'>
                        <li className='ml-2'>Fact-Checking: Implementing a fact-checking system to verify and debunk false information circulating during the election period.</li>
                        <li className='ml-2'>Educational Content: Providing users with accurate information about the election process, candidates, and results.</li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-bold'>Combating Election Rigging and Fraud</h4>
                    <ul className='text-gray-500 text-sm font-medium list-disc flex flex-col gap-2'>
                        <li className='ml-2'>Eyewitness Reports: Encouraging registered eyewitnesses to report instances of vote buying, ballot box snatching, and other fraudulent activities..</li>
                        <li className='ml-2'>Transparency Tools: Making all reports and data publicly available to enhance transparency and hold perpetrators accountable.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default OurMission
