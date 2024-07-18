import CreateIcon from "../../assets/icons/process/icon1.svg";
import VouchIcon from "../../assets/icons/process/icon2.svg";
import ChallengeIcon from "../../assets/icons/process/icon3.svg";
import POHLogo from "../../assets/icons/orange-poh-v2-logo-no-text.svg";
import Image, { StaticImageData } from "next/image";
import style from "./style.module.scss";
import Link from "next/link";

interface ItemProps {
  icon: StaticImageData;
  text: string;
  subtext: string;
}

const Item: React.FC<ItemProps> = ({ icon, text, subtext }) => (
  <div className={style.item}>
    <Image src={icon} alt={text} />
    <h2>{text}</h2>
    <p>{subtext}</p>
  </div>
);

const Process: React.FC = () => (
  <section className={style.main}>
    <h1 className={style.title}>
      <strong>How It Works</strong>
    </h1>

    <div className={style.grid}>
      <Item
        icon={CreateIcon}
        text="Create Your Profile"
        subtext="Join the growing list of verified humans.
        Register now and claim your online
        identity!"
      />
      <Item
        icon={VouchIcon}
        text="Vouch For People You Know"
        subtext="Verified humans in the registry can vouch
        for new registrants. By vouching, they
        confirm the new user's existence and
        ensure they are not a bot or duplicate."
      />
      <Item
        icon={ChallengeIcon}
        text="Challenge Suspicious Users"
        subtext="Challenge any pending submissions you
        believe don't meet the requirements.
        Challenged profiles will open a dispute in
        the Kleros Humanity Court."
      />
    </div>

    <div className="guide">
      <div className="label">
        <Image src={POHLogo} alt="Proof of Humanity" />
        <span>Learn More</span>
      </div>
      <Link
        href="https://blog.kleros.io/proof-of-humanity-an-explainer/"
        target="_blank"
      >
        <button>TUTORIALS</button>
      </Link>
    </div>
  </section>
);

export default Process;
