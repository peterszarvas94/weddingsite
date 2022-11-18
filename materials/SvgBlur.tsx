import React from "react";
import "../styles/svgblur.css";

interface SvgBlurProps {
	amount: number;
	id: string;
}

const SvgBlur = (props: SvgBlurProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className="svgblur">
			<filter id={props.id} x="0" y="0" width="1" height="1">
				<feGaussianBlur stdDeviation={props.amount} result="result" />
				<feMorphology operator="dilate" radius="4" />{" "}
				<feMerge>
					<feMergeNode />
					<feMergeNode in="result" />
				</feMerge>
			</filter>
		</svg>
	);
};

export default SvgBlur;
