import React from "react";
import Link from "next/link";
import CourseItem from "./CourseItem";

const Courses = ({ courses }) => {
	return (
		<div className="my-10">
			<div className="flex justify-between items-center mb-6">
				<div className="w-auto">
					<h2 className="text-lg text-gray-600 mb-0">New Clases</h2>
					<h3 className="text-xl text-gray-900 mt-0">
						Summer <span className="text-teal-400">Productive</span>
					</h3>
				</div>
				<div className="w-auto">
					<Link href="/courses">
						<a className="text-gray-600 text-sm">View all course</a>
					</Link>
				</div>
			</div>
			<div className="flex -mx-4">
				{courses ? (
					courses.map((course) => {
						return <CourseItem course={course} key={course.id} />;
					})
				) : (
					<p>No item found</p>
				)}
			</div>
		</div>
	);
};

export default Courses;
