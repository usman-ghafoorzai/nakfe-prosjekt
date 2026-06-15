import {
  CalendarDays,
  CircleHelp,
  FolderOpen,
  Mail,
  UsersRound,
} from "lucide-react";

type NavIconProps = {
  href: string;
};

export default function NavIcon({ href }: NavIconProps) {
  const className = "h-4 w-4 shrink-0";

  if (href === "/om-oss") return <UsersRound className={className} />;
  if (href === "/prosjekter") return <FolderOpen className={className} />;
  if (href === "/aktiviteter") return <CalendarDays className={className} />;
  if (href === "/faq") return <CircleHelp className={className} />;
  if (href === "/kontakt") return <Mail className={className} />;

  return null;
}
