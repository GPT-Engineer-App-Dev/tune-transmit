import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, Music } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <MobileSidebar />
          <div className="w-full flex-1">
            <SearchBar />
          </div>
          <UserDropdown />
        </header>
        <main className="flex-grow p-4 overflow-auto">
          <Outlet />
        </main>
        <FooterPlayer />
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <Music className="h-6 w-6" />
          <span>MusicStream</span>
        </NavLink>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
          {navItems.map((item) => (
            <SidebarNavLink key={item.to} to={item.to}>
              {item.icon}
              {item.title}
            </SidebarNavLink>
          ))}
        </nav>
      </div>
      <div className="border-t p-4">
        <UserProfile />
      </div>
    </div>
  </div>
);

const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col">
      <nav className="grid gap-2 text-lg font-medium">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold mb-4"
        >
          <Music className="h-6 w-6" />
          <span>MusicStream</span>
        </NavLink>
        {navItems.map((item) => (
          <SidebarNavLink key={item.to} to={item.to}>
            {item.title}
          </SidebarNavLink>
        ))}
      </nav>
      <div className="border-t p-4">
        <UserProfile />
      </div>
    </SheetContent>
  </Sheet>
);

const UserDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground",
        isActive && "text-primary bg-muted",
      )
    }
  >
    {children}
  </NavLink>
);

const UserProfile = () => (
  <div className="flex items-center gap-2">
    <CircleUser className="h-6 w-6" />
    <span>Username</span>
  </div>
);

const SearchBar = () => (
  <div className="flex items-center w-full">
    <input
      type="text"
      placeholder="Search..."
      className="w-full px-4 py-2 border rounded-lg"
    />
  </div>
);

const FooterPlayer = () => (
  <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-between p-4 bg-muted/40 border-t">
    <div className="flex items-center gap-4">
      <Button variant="outline" size="icon">
        <Music className="h-5 w-5" />
      </Button>
      <div className="flex flex-col">
        <span className="text-sm font-medium">Song Title</span>
        <span className="text-xs text-muted-foreground">Artist Name</span>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <Button variant="outline" size="icon">
        <Music className="h-5 w-5" />
      </Button>
      <Button variant="outline" size="icon">
        <Music className="h-5 w-5" />
      </Button>
      <Button variant="outline" size="icon">
        <Music className="h-5 w-5" />
      </Button>
    </div>
    <div className="flex items-center gap-4">
      <span className="text-xs">0:00</span>
      <div className="w-32 h-1 bg-muted rounded-full">
        <div className="h-full bg-primary rounded-full" style={{ width: "50%" }}></div>
      </div>
      <span className="text-xs">3:30</span>
    </div>
  </footer>
);

export default Layout;