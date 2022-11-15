import cn from "classnames";

interface SectionTitleProps {
  upper: string;
  lower: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ upper, lower }) => (
  <h1>
    {upper} <strong>{lower}</strong>
  </h1>
);

export default SectionTitle;
