import "../styles/styles.scss";
import type { AppProps } from "next/app";
import { Open_Sans } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";

import POHLogoWText from "../assets/icons/logo-wtext.svg";
import KlerosLogo from "../assets/icons/kleros.svg";

import TwitterLogo from "../assets/icons/twitter.svg";
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

      <meta content="Proof Of Humanity" property="twitter:title" />
      <meta
        content="A system combining social verification with video submission to create a Sybil-proof list of humans."
        property="twitter:description"
      />
      <meta
        content="https://app.proofofhumanity.id/images/open-graph-image.png"
        property="twitter:image"
      />

      <meta property="og:type" content="website" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <link rel="icon" href="/favicon.ico" />
    </Head>

    <nav>
      <Image src={POHLogoWText} alt="proof of humanity" />

      <Link href="http://app.proofofhumanity.id">
        <button>Launch app</button>
      </Link>
    </nav>

    <Component {...pageProps} />

    <footer>
      <Image
        src={POHLogoWText}
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
        <Link href="https://twitter.com/proofofhumanity" target="_blank">
          <Image src={TwitterLogo} alt="twitter" />
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
