export type AuthMiddleWareProps = {
  children: React.ReactNode;
  handleRedirect?: (isAuthenticated: boolean) => void;
};
