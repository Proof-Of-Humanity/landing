import Image from "next/image";
import SectionTitle from "@components/SectionTitle";
import PreviewPicture from "@assets/mac.png";
import POHLogo from "@assets/icons/logo.svg";
import style from "./style.module.scss";
import TwitterLogo from "@assets/icons/twitter-sm.svg";

const Claim: React.FC = () => (
  <section className={style.main}>
    <SectionTitle upper="Claim Your Online Identity" lower="Now" />
    <Image src={PreviewPicture} alt="preview" />
    <div className="guide">
      <div className="label">
        <Image src={POHLogo} alt="Proof of Humanity" />
        <span>Share POH with the world</span>
      </div>
      <button>
        <Image src={TwitterLogo} alt="Twitter" />
        Share
      </button>
    </div>
  </section>
);

export default Claim;
