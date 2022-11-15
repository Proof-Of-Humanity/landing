import SectionTitle from "../SectionTitle";
import POHLogo from "@assets/icons/logo.svg";
import Image from "next/image";
import style from "./style.module.scss";
import AcceptIcon from "@assets/icons/accept.svg";
import DeclineIcon from "@assets/icons/decline.svg";

interface ProsConsProps {
  pros: string;
  cons: string;
}

const ProsCons: React.FC<ProsConsProps> = ({ pros, cons }) => (
  <div className={style.proscons}>
    <h2>
      <Image src={AcceptIcon} alt="pros" /> Pros
    </h2>
    <p>{pros}</p>

    <h2>
      <Image src={DeclineIcon} alt="cons" /> Cons
    </h2>
    <p>{cons}</p>
  </div>
);

const Identity: React.FC = () => (
  <section className={style.main}>
    <SectionTitle upper="Your" lower="Digital Identity" />

    <div className={style.grid}>
      <h2>Digital Government IDs</h2>
      <ProsCons
        pros="Simple and easy to scale."
        cons="Vulnerable to rogue nation states duplicating or censoring identities."
      />

      <h2>Reverse Turing Tests</h2>
      <ProsCons
        pros="Decentralized and still fairly simple."
        cons="Requires all users to meet at the same time and is vulnerable to AI."
      />

      <h2>Social Graph Analysis</h2>
      <ProsCons
        pros="Decentralized and easy to scale."
        cons="Very complex and vulnerable to advances in AI."
      />

      <div className={style.ours}>
        <div className={style.title}>
          <h2>Proof Of Humanity</h2>
          <div className={style.logo}>
            <Image src={POHLogo} alt="Proof of Humanity" />
          </div>
        </div>
        <ProsCons
          pros="Decentralized, AI-resistant, and economically incentivized."
          cons="More complex."
        />
      </div>
    </div>
  </section>
);

export default Identity;
