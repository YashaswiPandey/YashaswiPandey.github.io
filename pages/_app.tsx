/*
 * Portfolio - (c) 2025 by Yashaswi Pandey
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
import "animate.css";
import "tippy.js/dist/tippy.css";
import "styles/globals.css";

import Navigation from "components/Navigation";
import NoSSR from "components/NoSSR";
import { AnimationProvider } from "contexts/AnimationContext";
import ThemeProvider from "contexts/ThemeProvider";
import type { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Yashaswi Pandey</title>
        {/* Dynamic Favicon */}
        <link
          rel="icon"
          href="./favicon/favicon-light.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: light)"
        />
        <link rel="icon" href="./favicon/favicon-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
        {/* Fallback PNGs */}
        <link rel="icon" href="./favicon/favicon.ico" />
        <link rel="icon" type="image/png" href="./favicon/favicon-32x32.png" />
        {/* Apple Touch Icon (non-dynamic) */}
        <link rel="apple-touch-icon" href="./favicon/apple-touch-icon.png" />
      </Head>

      <ThemeProvider>
        <AnimationProvider>
          <Component {...pageProps} />
          <NoSSR>
            <Navigation />
          </NoSSR>
        </AnimationProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
