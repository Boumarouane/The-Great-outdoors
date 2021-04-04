import React from "react";
import Head from "next/head";
import Navigation from "./Nav";

export default function Layout({ children, page, header, footer }) {

  return (
    <>
      {/* Head */}
      <Head>
        <title>{page}</title>
        <link rel="icon" type="image/svg" href="favicon.svg" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Header*/}
      <header>
        <Navigation/>
        {header}
      </header>
      {/* Main */}
      <main>{children}</main>
      {/* Footer */}
      <footer>
        {footer}
      </footer>
    </>
  );
}
