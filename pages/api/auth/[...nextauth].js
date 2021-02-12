// import NextAuth from "next-auth";
// import { signIn } from "next-auth/client";
// import Providers from "next-auth/providers";

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     {
//       id: "google",
//       name: "Google",
//       type: "oauth",
//       version: "2.0",
//       scope:
//         "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/classroom.courses.readonly",
//       params: { grant_type: "authorization_code" },
//       accessTokenUrl: "https://accounts.google.com/o/oauth2/token",
//       requestTokenUrl: "https://accounts.google.com/o/oauth2/auth",
//       authorizationUrl:
//         "https://accounts.google.com/o/oauth2/auth?response_type=code",
//       profileUrl: "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
//       async profile(profile) {
//         return {
//           id: profile.id,
//           name: profile.name,
//           email: profile.email,
//           image: profile.picture,
//         };
//       },
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     },
//     // ...add more providers here
//   ],
//   callbacks: {
//     async session(session, token) {
//       console.log(token);
//       return true;
//     },
//   },
// });
