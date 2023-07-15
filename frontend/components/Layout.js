import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Header from "./Header";

const Layout = ({ children }) => (
  <div className={`${inter.className} `}>
    <Header />
    <main>{children}</main>
    <footer></footer>
  </div>
);

export default Layout;
