import Image from "next/image";
import SectionTitle from "@components/SectionTitle";
import PreviewPicture from "@assets/mac.png";
import POHLogo from "@assets/icons/logo.svg";
import style from "./style.module.scss";
import TwitterLogo from "@assets/icons/twitter-sm.svg";
import Link from "next/link";

const Claim: React.FC = () => (
  <section className={style.main}>
    <SectionTitle upper="Claim Your Online Identity" lower="Now" />
    <Image src={PreviewPicture} alt="preview" />
    <div className="guide">
      <div className="label">
        <Image src={POHLogo} alt="Proof of Humanity" />
        <span>Share POH with the world</span>
      </div>
      <Link
        href="https://twitter.com/intent/tweet?text=%F0%9F%91%A5%20Join%20the%20Internet%20of%20Humans%21%0D%0ASubmit%20your%20profile%20on%20proofofhumanity.id%20to%20unlock%20your%20digital%20identity%20and%20earn%20%24UBI%20tokens%F0%9F%92%A7%0D%0A%23ProofOfHumanity%20%40Kleros_io%20%40DemocracyEarth&original_referer=https://proofofhumanity.id"
        target="_blank"
      >
        <button>
          <Image src={TwitterLogo} alt="Twitter" />
          Share
        </button>
      </Link>
    </div>
  </section>
);

export default Claim;
