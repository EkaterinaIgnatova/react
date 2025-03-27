import { useEffect, useState } from "react";
import "./progressBar.css";

export const ProgressBar = ({ layoutRef }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const heightDif =
        layoutRef.current.scrollHeight - layoutRef.current.clientHeight;
      const scrollTop = layoutRef.current.getBoundingClientRect().top;
      setProgress(Math.round((scrollTop * -100) / heightDif));
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div className="progress-bar" style={{ width: progress + "%" }} />;
};
