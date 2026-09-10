import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { buildBreadcrumbItems } from "../config/seo";

/**
 * Visible breadcrumbs for UX + paired with BreadcrumbList JSON-LD in SEOManager.
 * Overlays the top padding of inner pages (under the fixed navbar).
 */
export const Breadcrumbs: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const { pathname } = useLocation();
  const items = buildBreadcrumbItems(pathname);

  if (pathname === "/" || pathname === "") return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`pointer-events-none absolute top-0 left-0 right-0 z-20 ${className}`}
    >
      <div className="pointer-events-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[4.75rem] sm:pt-[5.25rem]">
        <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono-accent tracking-wide">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight
                    className="w-3 h-3 text-[#B9A6D1]/70"
                    aria-hidden
                  />
                )}
                {isLast ? (
                  <span
                    className="text-[#E8A9C2] font-semibold"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-1 text-[#E7E1F0] hover:text-[#E8A9C2] transition-colors"
                  >
                    {index === 0 ? (
                      <Home className="w-3 h-3" aria-hidden />
                    ) : null}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
