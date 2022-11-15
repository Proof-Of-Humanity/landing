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

const OpenSans = Open_Sans();

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <div className={OpenSans.className}>
    <Head>
      <title>Proof of Humanity</title>
      <meta
        name="description"
        content="Proof of Humanity - the Internet of Humans"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <nav>
      <Image src={POHLogoWText} alt="proof of humanity" />

      <button>Launch app</button>
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
        <Image src={KlerosLogo} alt="kleros" />
      </span>

      <div className="logos">
        <Image src={TwitterLogo} alt="twitter" />
        <Image src={GithubLogo} alt="github" />
        <Image src={TelegramLogo} alt="telegram" />
        <Image src={SnapshotLogo} alt="snapshot" />
      </div>
    </footer>
  </div>
);

export default App;
