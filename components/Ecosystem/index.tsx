import SectionTitle from "../SectionTitle";
import EtherscoreLogo from "@assets/icons/ecosystem/Etherscore.jpg";
import FyreLogo from "@assets/icons/ecosystem/Fyre.jpg";
import GalxeLogo from "@assets/icons/ecosystem/Galxe.jpg";
import GitcoinLogo from "@assets/icons/ecosystem/Gitcoin.jpg";
import GuildXYZLogo from "@assets/icons/ecosystem/Guild.xyz.jpg";
import HypersignLogo from "@assets/icons/ecosystem/Hypersign.jpg";
import LensLogo from "@assets/icons/ecosystem/Lens.jpg";
import LensterLogo from "@assets/icons/ecosystem/Lenster.jpg";
import MazuriLogo from "@assets/icons/ecosystem/Mazuri.jpg";
import OrbisLogo from "@assets/icons/ecosystem/Orbis.jpg";
import ProofOfIntegrityLogo from "@assets/icons/ecosystem/Proof of Integrity.jpg";
import QLogo from "@assets/icons/ecosystem/Q.jpg";
import RipioCreditLogo from "@assets/icons/ecosystem/Ripio Credit.jpg";
import SismoLogo from "@assets/icons/ecosystem/Sismo.jpg";
import UBILogo from "@assets/icons/ecosystem/UBI.jpg";
import WallIDLogo from "@assets/icons/ecosystem/WallID.jpg";
import WeLookLogo from "@assets/icons/ecosystem/WeLook.jpg";
import PlusIcon from "@assets/icons/plus.svg";
import POHLogo from "@assets/icons/logo-vertical.svg";
import Image, { StaticImageData } from "next/image";
import cn from "classnames";
import style from "./style.module.scss";

interface ItemProps {
  logo: StaticImageData;
  alt: string;
  big?: boolean;
}

const Item: React.FC<ItemProps> = ({ logo, alt, big }) => (
  <div className={cn(style.item, big && style.big)}>
    <Image src={logo} alt={alt} />
  </div>
);

const Ecosystem: React.FC = () => (
  <section className={style.main}>
    <SectionTitle upper="Growing" lower="Ecosystem" />

    <div className={style.grid}>
      <div className={cn(style.side, style.left)}>
        <Item logo={QLogo} alt={"Q"} />

        <Item logo={SismoLogo} alt="Sismo" />
        <Item logo={OrbisLogo} alt="Orbis" />
        <Item logo={WeLookLogo} alt="WeLook" />
      </div>

      <div className={style.circular}>
        <Item logo={GitcoinLogo} alt="Gitcoin" />
        <Item logo={ProofOfIntegrityLogo} alt="ProofOfIntegrity" />
        <Item logo={HypersignLogo} alt="Hypersign" />
        <Item logo={EtherscoreLogo} alt="Etherscore" />
        <Item logo={GuildXYZLogo} alt="GuildXYZ" />
        <Item logo={UBILogo} alt="UBI" />
        <Item logo={FyreLogo} alt="Fyre" />
        <Item logo={WallIDLogo} alt="WallID" />
        <Item logo={RipioCreditLogo} alt="RipioCredit" />
        <Item logo={LensLogo} alt="Lens" />

        <Item big logo={POHLogo} alt="Proof of Humanity" />
      </div>

      <div className={cn(style.side, style.right)}>
        <Item logo={MazuriLogo} alt="Mazuri" />
        <Item logo={LensterLogo} alt="Lenster" />
        <Item logo={GalxeLogo} alt="Galxe" />

        <Item logo={PlusIcon} alt="Others" />
      </div>
    </div>
  </section>
);

export default Ecosystem;
