"use server";

import { cookies } from "next/headers";
import {
  localeCookieName,
  resolveLocale,
  type Locale,
} from "@/types/locale";

export async function setLocaleCookie(locale: Locale): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.set(localeCookieName, resolveLocale(locale), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}
