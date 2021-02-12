import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

import { GetServerSideProps, GetStaticProps } from "next";
interface Props {
  code: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { code } = context.query;
  return {
    props: {
      code,
    },
  };
};

const Callback = ({ code }: Props) => {
  const router = useRouter();
  useEffect(() => {
    const get = async () => {
      const res = await axios.post("/api/callback", { code });
      axios.get("/api/test");
    };

    get();
  }, []);
  return (
    <>
      <Link href="/courses">
        <a>Courses</a>
      </Link>
    </>
  );
};

export default Callback;
