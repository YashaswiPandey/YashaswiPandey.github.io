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
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="en">
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;600&display=swap" />

      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#2B72D7" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Head>

    <body>
      <Main />

      <NextScript />
    </body>
  </Html>
);

export default Document;
