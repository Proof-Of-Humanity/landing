import "../styles/styles.scss";
import type { AppProps } from "next/app";
import { Open_Sans } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";

import POHV2LogoWithText from "../assets/icons/orange-poh-v2-logo-with-text.svg";
import KlerosLogo from "../assets/icons/kleros.svg";

import XLogo from "../assets/icons/x.svg";
import GithubLogo from "../assets/icons/github.svg";
import TelegramLogo from "../assets/icons/telegram.svg";
import SnapshotLogo from "../assets/icons/snapshot.svg";
import Link from "next/link";

const OpenSans = Open_Sans();

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <div className={OpenSans.className}>
    <Head>
      <title>Proof of Humanity</title>

      <meta
        content="A system combining social verification with video submission to create a Sybil-proof list of humans."
        name="description"
      />
      <meta
        content="A system combining social verification with video submission to create a Sybil-proof list of humans."
        property="og:description"
      />

      <meta
        content="https://app.proofofhumanity.id/images/open-graph-image.png"
        property="og:image"
      />

      <meta content="Proof Of Humanity" property="x:title" />
      <meta
        content="A system combining social verification with video submission to create a Sybil-proof list of humans."
        property="x:description"
      />
      <meta
        content="https://app.proofofhumanity.id/images/open-graph-image.png"
        property="x:image"
      />

      <meta property="og:type" content="website" />
      <meta content="summary_large_image" name="x:card" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <link rel="icon" href="/favicon.ico" />
    </Head>

    <nav>
      <Image src={POHV2LogoWithText} alt="proof of humanity" />

      <Link href="http://app.proofofhumanity.id">
        <button className="launch-button">Launch app</button>
      </Link>
    </nav>

    <Component {...pageProps} />

    <footer>
      <Image
        src={POHV2LogoWithText}
        width="134"
        height="48"
        alt="proof of humanity"
      />

      <span className="kleros">
        <span>Built by</span>
        <Link href="http://kleros.io" target="_blank">
          <Image src={KlerosLogo} alt="kleros" />
        </Link>
      </span>

      <div className="logos">
        <Link href="https://x.com/proofofhumanity" target="_blank">
          <Image src={XLogo} alt="x" />
        </Link>
        <Link href="https://github.com/Proof-Of-Humanity" target="_blank">
          <Image src={GithubLogo} alt="github" />
        </Link>
        <Link href="https://t.me/proofhumanity" target="_blank">
          <Image src={TelegramLogo} alt="telegram" />
        </Link>
        <Link href="https://snapshot.org/#/poh.eth" target="_blank">
          <Image src={SnapshotLogo} alt="snapshot" />
        </Link>
      </div>
    </footer>
  </div>
);

export default App;
