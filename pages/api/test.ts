import { google } from "googleapis";
import { oAuth2Client } from "lib/oAuthClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.cookies.google;
  if (!token) {
    res.status(401).json({ message: "No access token" });
  }
  oAuth2Client.setCredentials({ access_token: token });
  const classroom = google.classroom({ version: "v1", auth: oAuth2Client });
  const courses = await classroom.courses.list({
    pageSize: 10,
  });

  return res.json(courses.data);
}
