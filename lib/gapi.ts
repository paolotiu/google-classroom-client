import qs from "querystring";

const CLIENT_ID = process.env.NEXT_GOOGLE_CLIENT_ID;
const API_KEY = process.env.NEXT_GOOGLE_API_KEY;
// // Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/classroom/v1/rest",
];

// // Authorization scopes required by the API; multiple scopes can be
// // included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/classroom.courses.readonly";

// /**
//  *  On load, called to load the auth2 library and API client library.
//  */
// function handleClientLoad() {
//   gapi.load("client:auth2", initClient);
// }

// function initClient() {
//   gapi.client
//     .init({
//       apiKey: API_KEY,
//       clientId: CLIENT_ID,
//       discoveryDocs: DISCOVERY_DOCS,
//       scope: SCOPES,
//     })
//     .then(
//       function () {
//         // Listen for sign-in state changes.
//         gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

//         // Handle the initial sign-in state.
//         updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//         authorizeButton.onclick = handleAuthClick;
//         signoutButton.onclick = handleSignoutClick;
//       },
//       function (error) {
//         appendPre(JSON.stringify(error, null, 2));
//       }
//     );
// }

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
