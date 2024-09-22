import { Jigawa, Kano, Katsina, Kebbi, Sokoto, Zamfara } from "@/public/assets/map-components"
import Svg from "../common/Svg"
import MapFragment from "./MapFragment"

function Map() {
    return (
        <div>
            <div className="flex">
                <MapFragment
                    stateIcon={Kebbi}
                    stateName="Kebbi"
                    divPosition="-mr-[148px] translate-y-[52px]"
                    stateNamePosition="top-[30%] left-16 -translate-x-1/2"
                    svgWidth="200.579px"
                    svgHeight="250.316px"
                />
                <MapFragment
                    stateIcon={Sokoto}
                    stateName="Sokoto"
                    divPosition=""
                    stateNamePosition="top-[25%] left-1/2 -translate-x-1/2"
                    svgWidth="203px"
                    svgHeight="188px"
                />
                <MapFragment
                    stateIcon={Zamfara}
                    stateName="Zamfara"
                    divPosition="-ml-[134px] translate-y-[56.5px]"
                    stateNamePosition="right-[25%] top-[30%]"
                    svgWidth="173.109px"
                    svgHeight="185.211px"
                />
                <MapFragment
                    stateIcon={Katsina}
                    stateName="Katsina"
                    divPosition="-ml-[29px] translate-y-[43px]"
                    stateNamePosition="left-8 top-10"
                    svgWidth="164.711px"
                    svgHeight="179.013px"
                />
                <MapFragment
                    stateIcon={Kano}
                    stateName="Kano"
                    divPosition="-ml-[99.8px] translate-y-[104.5px]"
                    stateNamePosition="left-8 top-10"
                    svgWidth="129.93px"
                    svgHeight="162.337px"
                />
                <MapFragment
                    stateIcon={Jigawa}
                    stateName="Jigawa"
                    divPosition="-ml-[98px] translate-y-[71.6px]"
                    stateNamePosition="right-12 top-10"
                    svgWidth="195.423px"
                    svgHeight="164.21px"
                />
            </div>
        </div>
    )
}

export default Map
