import SectionTitle from "../SectionTitle";
import EtherscoreLogo from "@assets/icons/ecosystem/Etherscore.png";
import FyreLogo from "@assets/icons/ecosystem/Fyre.png";
import GalxeLogo from "@assets/icons/ecosystem/Galxe.png";
import GitcoinLogo from "@assets/icons/ecosystem/Gitcoin.png";
import GuildXYZLogo from "@assets/icons/ecosystem/Guild.xyz.png";
import HypersignLogo from "@assets/icons/ecosystem/Hypersign.png";
import LensLogo from "@assets/icons/ecosystem/Lens.png";
import LensterLogo from "@assets/icons/ecosystem/Lenster.png";
import MazuriLogo from "@assets/icons/ecosystem/Mazuri.png";
import OrbisLogo from "@assets/icons/ecosystem/Orbis.png";
import ProofOfIntegrityLogo from "@assets/icons/ecosystem/Proof of Integrity.png";
import QLogo from "@assets/icons/ecosystem/Q.png";
import RipioCreditLogo from "@assets/icons/ecosystem/Ripio Credit.png";
import SismoLogo from "@assets/icons/ecosystem/Sismo.png";
import UBILogo from "@assets/icons/ecosystem/UBI.png";
import WallIDLogo from "@assets/icons/ecosystem/WallID.png";
import WeLookLogo from "@assets/icons/ecosystem/WeLook.png";
import PlusIcon from "@assets/icons/plus.svg";
import POHLogo from "@assets/icons/logo-vertical.svg";
import Image, { StaticImageData } from "next/image";
import cn from "classnames";
import style from "./style.module.scss";
import Link from "next/link";

interface ItemProps {
  logo: StaticImageData;
  alt: string;
  big?: boolean;
  link?: string;
}

const Item: React.FC<ItemProps> = ({ logo, alt, big, link }) => (
  <div className={cn(style.item, big && style.big)}>
    {link ? (
      <Link href={link} target="_blank">
        <Image src={logo} alt={alt} />
      </Link>
    ) : (
      <Image src={logo} alt={alt} />
    )}
  </div>
);

const Ecosystem: React.FC = () => (
  <section className={style.main}>
    <SectionTitle upper="Growing" lower="Ecosystem" />

    <div className={style.grid}>
      <div className={cn(style.side, style.left)}>
        <Item logo={QLogo} alt="Q" link="https://q.org" />

        <Item logo={SismoLogo} alt="Sismo" link="https://www.sismo.io" />
        <Item logo={OrbisLogo} alt="Orbis" link="https://orbis.club" />
        <Item logo={WeLookLogo} alt="WeLook" link="https://welook.io" />
      </div>

      <div className={style.circular}>
        <Item logo={GitcoinLogo} alt="Gitcoin" link="https://gitcoin.co" />
        <Item
          logo={ProofOfIntegrityLogo}
          alt="ProofOfIntegrity"
          link="https://www.proofofintegrity.org"
        />
        <Item
          logo={HypersignLogo}
          alt="Hypersign"
          link="https://hypersign.id"
        />
        <Item
          logo={EtherscoreLogo}
          alt="Etherscore"
          link="https://etherscore.network"
        />
        <Item logo={GuildXYZLogo} alt="GuildXYZ" link="https://guild.xyz" />
        <Item logo={UBILogo} alt="UBI" link="http://ubi.eth.limo" />
        <Item logo={FyreLogo} alt="Fyre" link="https://fyre.id" />
        <Item logo={WallIDLogo} alt="WallID" link="https://wallid.io" />
        <Item
          logo={RipioCreditLogo}
          alt="RipioCredit"
          link="https://rcn.finance"
        />
        <Item logo={LensLogo} alt="Lens" link="https://www.lens.xyz" />

        <Item big logo={POHLogo} alt="Proof of Humanity" />
      </div>

      <div className={cn(style.side, style.right)}>
        <Item logo={MazuriLogo} alt="Mazuri" link="https://mazury.xyz" />
        <Item logo={LensterLogo} alt="Lenster" link="https://lenster.xyz" />
        <Item logo={GalxeLogo} alt="Galxe" link="https://galxe.com" />

        <Item logo={PlusIcon} alt="Add yours" />
      </div>
    </div>
  </section>
);

export default Ecosystem;
