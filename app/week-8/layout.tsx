import { AuthContextProvider } from "./_utils/auth-context";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
 
export default Layout;