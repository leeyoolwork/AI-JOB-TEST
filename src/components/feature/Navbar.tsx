import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "홈", to: "/" },
    { label: "테스트", to: "/test" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background-50/90 backdrop-blur-md border-b border-background-200/70">
      <nav className="w-full px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-foreground-950 whitespace-nowrap">
          <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-500 text-background-50">
            <i className="ri-compass-3-line text-lg" />
          </span>
          <span className="font-heading text-lg">AI 직업 적성 테스트</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 rounded-md text-sm font-medium text-foreground-700 hover:text-foreground-950 hover:bg-background-100 transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/test"
            className="ml-2 px-5 py-2 rounded-full bg-primary-500 text-background-50 text-sm font-semibold hover:bg-primary-600 transition-colors whitespace-nowrap"
          >
            테스트 시작하기
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-md text-foreground-950 hover:bg-background-100"
          aria-label="메뉴 열기"
        >
          <i className={`text-xl ${open ? "ri-close-line" : "ri-menu-line"}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-background-200/70 bg-background-50 px-4 py-3 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-md text-sm font-medium text-foreground-700 hover:bg-background-100"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/test"
            onClick={() => setOpen(false)}
            className="mt-1 px-3 py-3 rounded-md text-center bg-primary-500 text-background-50 text-sm font-semibold"
          >
            테스트 시작하기
          </Link>
        </div>
      )}
    </header>
  );
}