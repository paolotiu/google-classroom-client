import { oAuth2Client } from "lib/oAuthClient";
const SCOPES = "https://www.googleapis.com/auth/classroom.courses.readonly";

import { NextApiHandler } from "next";

const auth: NextApiHandler = (req, res) => {
  const url = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  res.redirect(url);
};
export default auth;
