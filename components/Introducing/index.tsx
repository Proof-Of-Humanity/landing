import React from 'react';
import style from "./style.module.scss";

const Feature: React.FC<{ title: string, description: string, align: 'left' | 'right' }> = ({ title, description, align }) => (
  <div className={`${style.feature} ${align === 'left' ? style.alignLeft : style.alignRight}`}>
    <h2 className={style.featureTitle}>{title}</h2>
    <div className={style.divider} />
    <p className={style.featureDescription}>{description}</p>
  </div>
);

const Introducing: React.FC = () => (
  <section className={style.main}>
    <h1 className={style.title}>
      <strong>Introducing Two Exciting New Features</strong>
    </h1>
    <Feature 
      title="Soulbound ID" 
      description="Soulbound IDs are unique, non-transferable identifiers that link each human to a single ID (Humanity ID), ensuring the authenticity and permanence of their digital identity. This feature allows users to recover their reputation and assets even if they lose access to their original wallet, enhancing security and reliability." 
      align="left" 
    />
    <Feature 
      title="Multi-chain Expansion" 
      description="Multi-chain expansion allows the system to operate across multiple blockchain networks, including Gnosis Chain, enhancing accessibility and interoperability. This feature enables users to maintain and transfer their verified identity across different chains, ensuring a seamless and versatile digital experience." 
      align="right" 
    />
  </section>
);

export default Introducing;
