import { MAIN_NAV } from "@/constants/navigation";
import { NavLink } from "@/components/layout/nav-link";
import { cn } from "@/lib/utils";

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  return (
    <nav
      className={cn("flex items-center", className)}
      aria-label="Main navigation"
    >
      <ul className="flex items-center gap-8">
        {MAIN_NAV.map((item) => (
          <li key={item.href}>
            <NavLink {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
