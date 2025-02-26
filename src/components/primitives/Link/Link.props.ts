export type LinkProps = {
  onClick?: () => void;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>;
