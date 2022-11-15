import SectionTitle from "../SectionTitle";
import CreateIcon from "../../assets/icons/process/icon1.svg";
import VouchIcon from "../../assets/icons/process/icon2.svg";
import ChallengeIcon from "../../assets/icons/process/icon3.svg";
import POHLogo from "../../assets/icons/logo.svg";
import Image, { StaticImageData } from "next/image";
import style from "./style.module.scss";

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
    <SectionTitle upper="How it" lower="Works" />

    <div className={style.grid}>
      <Item
        icon={CreateIcon}
        text="Create Your Profile"
        subtext="Humans who wish to be included in the registry submit information about themselves serving for verification."
      />
      <Item
        icon={VouchIcon}
        text="Vouch For People You Know"
        subtext="Humans already in the registry can vouch for people registering. By vouching for someone, a user guarantees that the person he vouches for exists and is not a duplicate of another human."
      />
      <Item
        icon={ChallengeIcon}
        text="Challenge Suspicious Users"
        subtext="Humans can challenge pending submissions that they think don't comply with the requirements for acceptance. When a submission is challenged, the decision goes to dispute resolution in an ERC792 compliant dispute resolution system like Kleros."
      />
    </div>

    <div className="guide">
      <div className="label">
        <Image src={POHLogo} alt="Proof of Humanity" />
        <span>Learn More</span>
      </div>
      <button>Read the Guide</button>
    </div>
  </section>
);

export default Process;
