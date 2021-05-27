import Head from "next/head";
import Navigation from "./navigation";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Melih Web Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>design by melih (footer)</footer>
    </div>
  );
}

export default Layout;
