import POHV2LogoWithText from "@assets/icons/white-poh-v2-logo-with-text.svg";
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
    <div className={style.prosItem}>
      <h2>
        <Image src={AcceptIcon} alt="pros" className={style.icon} /> Pros
      </h2>
      <p>{pros}</p>
    </div>
    <div className={style.consItem}>
      <h2>
        <Image src={DeclineIcon} alt="cons" className={style.icon} /> Cons
      </h2>
      <p>{cons}</p>
    </div>
  </div>
);

const Identity: React.FC = () => (
  <section className={style.main}>
    <h1 className={style.title}>
      <strong>Your Digital Identity</strong>
    </h1>

    <div className={style.flexContainer}>
      <div className={style.flexItem}>
        <h2>Digital Government IDs</h2>
        <ProsCons
          pros="Simple and easy to scale."
          cons="Vulnerable to rogue nation states duplicating or censoring identities."
        />
      </div>

      <div className={style.flexItem}>
        <h2>Reverse Turing Tests</h2>
        <ProsCons
          pros="Decentralized and still fairly simple."
          cons="Requires all users to meet at the same time and is vulnerable to AI."
        />
      </div>

      <div className={style.flexItem}>
        <h2>Social Graph Analysis</h2>
        <ProsCons
          pros="Decentralized and easy to scale."
          cons="Very complex and vulnerable to advances in AI."
        />
      </div>

      <div className={`${style.flexItem} ${style.ours}`}>
        <div className={style.logo}>
          <Image src={POHV2LogoWithText} alt="Proof of Humanity" />
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
