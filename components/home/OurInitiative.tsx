import { baseFeatureIcon, baseFeatureIcon2, baseFeatureIcon3, baseFeatureIcon4, baseFeatureIcon5, baseFeatureIcon6 } from '@/public/assets/icons'
import Image from 'next/image'

function OurInitiative() {
    const ourInitiativeContent = [
        { id: 0, title: "Eyewitness", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.", icon: baseFeatureIcon },
        { id: 1, title: "Election Live Stream", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.", icon: baseFeatureIcon2 },
        { id: 2, title: "Post Election Reports", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.", icon: baseFeatureIcon3 },
        { id: 3, title: "Public Polls & Surveys", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.", icon: baseFeatureIcon4 },
        { id: 4, title: "Rural Sensitization", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.", icon: baseFeatureIcon5 },
        { id: 5, title: "Research & Development", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.", icon: baseFeatureIcon6 },
    ]
    return (
        <section className='max-w-[1280px] mx-auto px-4 pt-4 pb-8 mt-10 bg-white md:mx-10'>
            <div>
                <h2 className='text-xl md:text-3xl text-center font-bold'>Our Initiative</h2>
                <p className='text-center text-gray-500'>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5 mt-5 bg-white'>
                {ourInitiativeContent.map((content) => {
                    return (
                        <div className='flex flex-col items-center' key={content.id}>
                            <Image src={content.icon} width={41} height={41} alt='' />
                            <h4 className='font-bold mt-4'>{content.title}</h4>
                            <p>{content.text}</p>
                        </div>

                    )
                })}
            </div>
        </section>
    )
}

export default OurInitiative
