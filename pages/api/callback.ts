import { oAuth2Client } from "lib/oAuthClient";
import { NextApiHandler } from "next";
import { setCookie } from "nookies";
const callback: NextApiHandler = async (req, res) => {
  const { code } = req.body;
  if (!code) {
    res.status(401).json({ message: "No code given" });
    return;
  }
  try {
    const token = await oAuth2Client.getToken(code as string);
    if (!token.tokens.access_token) {
      res.status(400).json({ message: "No access token" });
      return;
    }

    setCookie({ res }, "google", token.tokens.access_token, {
      httpOnly: true,
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    });
    res.json(code);
  } catch (error) {
    res.redirect("/");
  }
};
export default callback;
