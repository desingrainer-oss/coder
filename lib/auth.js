import { cookies } from "next/headers";

const SESSION_COOKIE = "coders_admin_session";
const SESSION_VALUE = "authenticated";

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "coders-admin-2025";
}

export async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE)?.value === SESSION_VALUE;
}

export function createSessionCookie() {
  return {
    name: SESSION_COOKIE,
    value: SESSION_VALUE,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  };
}

export function clearSessionCookie() {
  return {
    name: SESSION_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  };
}
