"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
  exact?: boolean;
  badgeProp?: "pendingComments" | "pendingMessages";
};

type NavSection = { label: string; items: NavItem[] };

const NAV: NavSection[] = [
  {
    label: "General",
    items: [
      {
        href: "/admin",
        label: "Dashboard",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
          </svg>
        ),
        exact: true,
      },
    ],
  },
  {
    label: "Contenido",
    items: [
      {
        href: "/admin/comentarios",
        label: "Comentarios",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        ),
        badgeProp: "pendingComments" as const,
      },
      {
        href: "/admin/blog",
        label: "Blog / Novedades",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14,2 14,8 20,8" />
          </svg>
        ),
      },
      {
        href: "/admin/mensajes",
        label: "Mensajes",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        ),
        badgeProp: "pendingMessages" as const,
      },
    ],
  },
];

type Props = {
  pendingComments?: number;
  pendingMessages?: number;
};

export default function AdminSidebar({ pendingComments = 0, pendingMessages = 0 }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const badges = { pendingComments, pendingMessages };

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-60 flex-col bg-[#1e2028]">
      {/* Logo */}
      <div className="border-b border-white/[0.06] px-5 py-5">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#ff6b12]" />
          <span className="text-[13px] font-extrabold text-white">Clínica Ser Humano</span>
        </div>
        <p className="mt-0.5 pl-4 text-[10px] font-semibold uppercase tracking-widest text-gray-500">
          Administración
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4">
        {NAV.map((section) => (
          <div key={section.label} className="mb-4 px-3">
            <p className="mb-1 px-2 text-[10px] font-bold uppercase tracking-widest text-gray-600">
              {section.label}
            </p>
            {section.items.map((item) => {
              const active = isActive(item.href, item.exact);
              const badge = item.badgeProp ? badges[item.badgeProp] : 0;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "relative mb-0.5 flex items-center gap-2.5 rounded-[7px] border-l-[3px] py-[7px] pl-[9px] pr-2.5 text-[13px] font-medium transition-all",
                    active
                      ? "border-[#ff6b12] bg-[#2e3142] text-white"
                      : "border-transparent text-gray-400 hover:bg-[#2a2d38] hover:text-gray-200",
                  ].join(" ")}
                >
                  <span className={active ? "opacity-100" : "opacity-60"}>{item.icon}</span>
                  {item.label}
                  {badge > 0 && (
                    <span className="ml-auto rounded-full bg-[#ff6b12] px-1.5 py-0.5 text-[10px] font-extrabold leading-none text-white">
                      {badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-white/[0.06] p-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#ff6b12] text-[11px] font-extrabold text-white">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-[12px] font-semibold text-gray-200">Administrador</p>
            <p className="truncate text-[10px] text-gray-500">recepcion@serhumano.org</p>
          </div>
          <button
            onClick={handleLogout}
            title="Cerrar sesión"
            className="flex-shrink-0 rounded-md p-1.5 text-gray-500 transition hover:bg-white/[0.06] hover:text-gray-300"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16,17 21,12 16,7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}