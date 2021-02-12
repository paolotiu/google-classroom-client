import nookies from "nookies";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import { oAuth2Client } from "lib/oAuthClient";
import { google } from "googleapis";
import { Courses } from "types/Classroom";
import CourseCard from "components/Course/CourseCard";

type Cookies = {
  google?: string;
};

interface Props {
  data: Courses;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx) as Cookies;

  if (!cookies.google) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  oAuth2Client.setCredentials({ access_token: cookies.google });
  const classroom = google.classroom({ version: "v1", auth: oAuth2Client });
  const courses = await classroom.courses.list({
    pageSize: 100,
  });

  return {
    props: {
      data: courses.data.courses,
    },
  };
};
const Page = ({ data }: Props) => {
  return (
    <div>
      {data.map((x, i) => (
        <React.Fragment key={i}>
          <CourseCard />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Page;
