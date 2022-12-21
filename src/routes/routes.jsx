import { Registration } from "../Pages/Registration";
import { ProfileInfo } from "../Pages/Profileinfo";

export const routes = [
  { path: "/profile", component: <ProfileInfo /> },
  { path: "/", component: <Registration /> },
];
