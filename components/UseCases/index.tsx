import SectionTitle from "@components/SectionTitle";
import style from "./style.module.scss";
import Image from "next/image";
import UseCase1 from "@assets/icons/use-cases/uc1.svg";
import UseCase2 from "@assets/icons/use-cases/uc2.svg";
import UseCase3 from "@assets/icons/use-cases/uc3.svg";
import UseCase4 from "@assets/icons/use-cases/uc4.svg";
import UseCase5 from "@assets/icons/use-cases/uc5.svg";
import UseCase6 from "@assets/icons/use-cases/uc6.svg";
import UseCase7 from "@assets/icons/use-cases/uc7.svg";
import UseCase8 from "@assets/icons/use-cases/uc8.svg";

interface ItemProps {
  icon: string;
  label: string;
}

const Item: React.FC<ItemProps> = ({ icon, label }) => (
  <li className={style.item}>
    <Image src={icon} alt={label} />
    <span>{label}</span>
  </li>
);

const UseCases: React.FC = () => (
  <section className={style.main}>
    <SectionTitle upper="Unlocking" lower="New Possibilities" />

    <ul className={style.grid}>
      <Item icon={UseCase1} label="Human DAO" />
      <Item icon={UseCase2} label="Quadratic Funding" />
      <Item icon={UseCase3} label="Certifications" />
      <Item icon={UseCase4} label="Social Key Recovery" />
      <Item icon={UseCase5} label="Self-Sovereign Identities" />
      <Item icon={UseCase6} label="Credit Scoring" />
      <Item icon={UseCase7} label="Fair Airdrops" />
      <Item icon={UseCase8} label="Antispam Tools" />
    </ul>
  </section>
);

export default UseCases;
