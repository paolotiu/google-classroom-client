import qs from "querystring";
const SCOPES = ["https://www.googleapis.com/auth/classroom.courses.readonly"];
export const googleOAuthLink = (() => {
  const params = {
    redirect_uri: "http://localhost:3000",
    client_id:
      "933087613198-vb81t1ju91rqriiv8v67ujpd9qafetu3.apps.googleusercontent.com",
    response_type: "token",
    scope: SCOPES,
    include_granted_scopes: true,
    state: "hey",
  };
  return "https://accounts.google.com/o/oauth2/v2/auth?" + qs.stringify(params);
})();
