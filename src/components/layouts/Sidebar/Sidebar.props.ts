export type SidebarProps = {
  activePage: string;
  logout: () => void;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
};
