import Image from "next/image";
import KlerosLogo from "@assets/icons/kleros.svg";
import PlayIcon from "@assets/icons/play.svg";
import style from "./style.module.scss";
import ReactPlayer from "react-player";
import { useState } from "react";
import cn from "classnames";
import Link from "next/link";

const Display: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className={style.main}>
      <div className={style.content}>
        <h1 className={style.title}>
          The Internet <strong>of Humans</strong>
        </h1>

        <p className={style.text}>
          Proof of Humanity is a system designed to create a trusted list of
          humans verified by a decentralized community.
        </p>

        <div className={style.action}>
          <Link
            className="link-button"
            href="http://v2.proofofhumanity.id"
            rel="noopener noreferrer"
            target="_blank"
          >
            Register Now
          </Link>
          <button onClick={() => setShowVideo(true)}>
            <Image src={PlayIcon} width="16" height="20" alt="play" />
            Intro
          </button>
        </div>

        <span className={cn(style.builtby, "kleros")}>
          <span>Built by</span>
          <Link href="http://kleros.io" target="_blank">
            <Image src={KlerosLogo} alt="kleros" />
          </Link>
        </span>
      </div>

      {showVideo && (
        <div className={style.backdrop} onClick={() => setShowVideo(false)}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=R4-z118s-gM"
            controls
            width="68vw"
            height="68vh"
          />
        </div>
      )}
    </section>
  );
};

export default Display;
