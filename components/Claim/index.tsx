import Image from "next/image";
import PreviewPicture from "@assets/mac.png";
import POHLogo from "@assets/icons/orange-poh-v2-logo-no-text.svg";
import style from "./style.module.scss";
import XLogo from "@assets/icons/x-sm.svg";
import Link from "next/link";

const Claim: React.FC = () => (
  <section className={style.main}>
    <h1 className={style.title}>
      <strong>Claim Your Humanity</strong>
    </h1>
    <Image src={PreviewPicture} alt="preview" />
    <div className="guide">
      <div className="label">
        <Image src={POHLogo} alt="Proof of Humanity" />
        <span>Share POH with the world</span>
      </div>
      <Link
        href="https://x.com/intent/post?text=Join%20the%20global%20%F0%9F%8C%8F%20community%20of%20verified%20humans%21%20%F0%9F%91%A5%20Get%20verified%20on%20proofofhumanity.id%20to%20secure%20your%20unique%20digital%20identity%20%F0%9F%AA%AA%20%23ProofOfHumanity%20%23Kleros&original_referer=https://proofofhumanity.id"
        target="_blank"
        className="linkButton"
      >
        <button>
          <Image src={XLogo} alt="X" />
          Share
        </button>
      </Link>
    </div>
  </section>
);

export default Claim;
