import "twin.macro";
import { googleOAuthLink } from "lib/gapi";
import axios from "axios";
const CLIENT_ID = process.env.GAPI_CLIENT_ID;
const CLIENT_SECRET = process.env.GAPI_CLIENT_SECRET;
const API_KEY = process.env.GAPI_API_KEY;
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/classroom/v1/rest",
];

export default function Home() {
  const isClient = process.browser;
  const test = () => {
    axios.get("/api/auth");
  };
  return (
    <div tw="flex flex-col items-center justify-center min-h-screen py-2">
      <a href={googleOAuthLink}>OAUTH</a>
    </div>
  );
}
