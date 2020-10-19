import React from "react";
import Link from "next/link";

import PlayIcon from "../public/images/icon-play.svg";

const CourseItem = ({ course }) => {
	return (
		<div className="px-4 w-1/4">
			<Link href="/course/[slug]" as={`/course/${course.id}`}>
				<a className="link-wrapped">
					<div className="item">
						<figure className="item-image">
							<PlayIcon />
							<img src={course?.thumbnail} alt={course?.name} />
						</figure>
					</div>

					<div className="item-meta mt-2">
						<p className="text-lg text-gray-900">
							{course?.name ?? "Course name"}
						</p>
						<p className="text-sm text-gray-600">
							{course?.level ?? "Course level"}
						</p>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default CourseItem;
