import React from "react";
import * as Progress from "@radix-ui/react-progress";
// import "./styles.css";

const ProgressDemo = () => {
	const [progress, setProgress] = React.useState(13);

	React.useEffect(() => {
		const timer = setTimeout(() => setProgress(66), 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<Progress.Root className="bg-slate-600 relative overflow-hidden rounded-full w-full h-3 translate-z-[0]" value={progress}>
			<Progress.Indicator
				className="bg-sky-600 w-full h-full transition-all"
				style={{ transform: `translateX(-${100 - progress}%)` }}
			/>
		</Progress.Root>
	);
};

export default ProgressDemo;
