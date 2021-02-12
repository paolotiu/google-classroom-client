import React from "react";
import { Course } from "types/Classroom";

interface Props {
    data: Course
}

const CourseCard = ({data}: Props) => {

  return <div>
<p>{data.name}</p>
<p>{data.}</p>

  </div>;
};

export default CourseCard;
