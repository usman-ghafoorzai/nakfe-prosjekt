import "server-only";
import { cookies } from "next/headers";
import {
  localeCookieName,
  resolveLocale,
  type Locale,
} from "@/types/locale";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();

  return resolveLocale(cookieStore.get(localeCookieName)?.value);
}
