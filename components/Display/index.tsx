import Image from "next/image";
import KlerosLogo from "@assets/icons/kleros.svg";
import PlayIcon from "@assets/icons/play.svg";
import style from "./style.module.scss";
import ReactPlayer from "react-player";
import { useState } from "react";
import cn from "classnames";

const Display: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className={style.main}>
      <div className={style.content}>
        <h1 className={style.title}>
          The Internet <strong>of Humans</strong>
        </h1>

        <p className={style.text}>
          Proof of Humanity, a system combining webs of trust, with reverse
          Turing tests, and dispute resolution to create a sybil-proof list of
          humans.
        </p>

        <div className={style.action}>
          <button>Create your profile</button>
          <button onClick={() => setShowVideo(true)}>
            <Image src={PlayIcon} width="16" height="20" alt="play" />
            Intro
          </button>
        </div>

        <span className={cn(style.builtby, "kleros")}>
          <span>Built by</span>
          <Image src={KlerosLogo} alt="kleros" />
        </span>
      </div>

      {showVideo && (
        <div className={style.backdrop} onClick={() => setShowVideo(false)}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=R4-z118s-gM"
            controls
          />
        </div>
      )}
    </section>
  );
};

export default Display;
