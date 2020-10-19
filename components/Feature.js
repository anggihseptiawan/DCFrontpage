import React from "react";
import formatNumber from "../utils/formatNumber";

const Feature = ({ data }) => {
	return (
		<div
			className="border border-gray-300 bg-white p-6"
			style={{ width: 290 }}
		>
			<div className="flex">
				{data.icon}
				<div className="ml-5">
					<span className="text-gray-600 block">{data.title}</span>
					<span className="text-gray-900 text-2xl font-semibold block">
						{typeof data.value === "number"
							? formatNumber(+data.value)
							: data.value}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Feature;
