import EtherscoreLogo from "@assets/icons/ecosystem/Etherscore.png";
import GalxeLogo from "@assets/icons/ecosystem/Galxe.png";
import GitcoinLogo from "@assets/icons/ecosystem/Gitcoin.png";
import GuildXYZLogo from "@assets/icons/ecosystem/Guild.xyz.png";
import SismoLogo from "@assets/icons/ecosystem/Sismo.png";
import QLogo from "@assets/icons/ecosystem/Q.png";
import WeLookLogo from "@assets/icons/ecosystem/WeLook.png";
import PrivadoLogo from "@assets/icons/ecosystem/privado_id.png";
import POHLogo from "@assets/icons/poh-v2-logo-vertical.svg";
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
    <h1 className={style.title}>
      <strong>Our Growing Ecosystem</strong>
    </h1>

    <div className={style.grid}>
    {/* <div className={cn(style.side, style.left)}>
        Items go here
      </div> */}
      <div className={style.circular}>
        <Item logo={GitcoinLogo} alt="Gitcoin" link="https://gitcoin.co" />
        <Item
          logo={EtherscoreLogo}
          alt="Etherscore"
          link="https://etherscore.network"
        />
        <Item logo={GuildXYZLogo} alt="GuildXYZ" link="https://guild.xyz" />
        <Item logo={GalxeLogo} alt="Galxe" link="https://galxe.com" />
        <Item logo={SismoLogo} alt="Sismo" link="https://www.sismo.io" />
        <Item logo={QLogo} alt="Q" link="https://q.org" />
        <Item logo={WeLookLogo} alt="WeLook" link="https://welook.io" />
        <Item logo={PrivadoLogo} alt="Privado" link="https://privado.id/" />
        <Item big logo={POHLogo} alt="Proof of Humanity" />
      </div>

      {/* <div className={cn(style.side, style.right)}>
        Items go here
      </div> */}
    </div>
  </section>
);

export default Ecosystem;
