import Svg from "../common/Svg"

interface MapFragmentProps {
    stateIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    stateName: string;
    svgWidth: string;
    svgHeight: string;
    divPosition: string;
    stateNamePosition: string;
}

function MapFragment({ stateIcon: StateIcon, stateName, svgWidth, svgHeight, divPosition, stateNamePosition }: MapFragmentProps) {
    return (
        <div className={`relative ${divPosition}`}>
            <Svg SvgIcon={StateIcon} width={svgWidth} height={svgHeight} />
            <span className={`absolute text-black ${stateNamePosition}`}>{stateName}</span>
        </div>
    )
}

export default MapFragment
