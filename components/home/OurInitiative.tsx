import { baseFeatureIcon, baseFeatureIcon2, baseFeatureIcon3, baseFeatureIcon4, baseFeatureIcon5, baseFeatureIcon6 } from '@/public/assets/icons'
import Image from 'next/image'
import Svg from '../common/Svg'

function OurInitiative() {
    const ourInitiativeContent = [
        {
            id: 0,
            title: "Eyewitness",
            text: "Enable logged-in users to upload videos or images and provide real-time reports from polling stations. Before being published, reports are authenticated.",
            icon: baseFeatureIcon
        },
        {
            id: 1,
            title: "Election Live Stream", text:
                "Provide citizens a clear and transparent view of the electoral process by live-streaming election results and activity from polling stations.",
            icon: baseFeatureIcon2
        },
        {
            id: 2,
            title: "Post Election Reports", text:
                "Provide in-depth evaluations of voter turnout, election results, and any irregularities that have been recorded. For transparency's sake, make sure these reports are available to the public.",
            icon: baseFeatureIcon3
        },
        {
            id: 3,
            title: "Public Polls & Surveys", text:
                "Collect real-time data from citizens on election day to evaluate voter satisfaction and highlight areas for improvement.",
            icon: baseFeatureIcon4
        },
        {
            id: 4,
            title: "Rural Sensitization", text:
                "Conduct grassroots campaigns to educate voters in rural areas on the importance of voting and how to avoid misleading information.",
            icon: baseFeatureIcon5
        },
        {
            id: 5,
            title: "Research & Development", text:
                "Actively develop the platform through researching new approaches to promote transparency, including collaboration with academic institutions and non-governmental organizations (NGOs).",
            icon: baseFeatureIcon6
        },
    ]

    return (
        <section className='max-w-[1280px] mx-auto px-4 pt-4 pb-8 mt-10 bg-white md:mx-10'>
            <div>
                <h2 className='text-xl md:text-3xl text-center font-bold'>Our Initiative</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5 mt-5 bg-white'>
                {ourInitiativeContent.map((content) => {
                    return (
                        <div className='flex flex-col items-center' key={content.id}>
                            <Svg width={'41px'} height={'41px'} SvgIcon={content.icon} />
                            <h4 className='font-bold mt-4'>{content.title}</h4>
                            <p className='text-center text-sm text-[#656565]'>{content.text}</p>
                        </div>

                    )
                })}
            </div>
        </section>
    )
}

export default OurInitiative
