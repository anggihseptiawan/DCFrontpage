import React from "react";

import IconDevelopment from "../public/images/icon-business-development.svg";
import IconContentWriter from "../public/images/icon-content-writer.svg";
import IconGameDevelopment from "../public/images/icon-game-development.svg";

const ListCategory = ({ categories }) => {
	return (
		<div>
			<div className="flex items-center mb-6">
				<div className="w-auto">
					<h2 className="text-lg text-gray-600 mb-0">Category</h2>
					<h3 className="text-xl text-gray-900 mt-0">
						Summer{" "}
						<span className="text-teal-400">Explore & learn</span>
					</h3>
				</div>
			</div>
			<div className="flex">
				<div className="item mr-6">
					<IconDevelopment />
					<p className="mt-2">Bussiness Devlopment</p>
				</div>
				<div className="item mr-6">
					<IconContentWriter />
					<p className="mt-2">Content Writer</p>
				</div>
				<div className="item mr-6">
					<IconGameDevelopment />
					<p className="mt-2">Game Devlopment</p>
				</div>
			</div>
		</div>
	);
};

export default ListCategory;
