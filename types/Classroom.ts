import { datalabeling_v1beta1 } from "googleapis";

export interface Course {
  id: string;
  name: string;
  section: string;
  descriptionHeading: string;
  ownerId: string;
  creationTime: Date;
  updateTime: Date;
  courseState: string;
  alternateLink: string;
  teacherGroupEmail: string;
  courseGroupEmail: string;
  guardiansEnabled: boolean;
  calendarId: string;
}

export type Courses = Course[];
