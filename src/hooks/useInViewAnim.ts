import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring } from "react-spring";

interface AnimProp {
  from: { [key: string]: number | string };
  to: { [key: string]: number | string };
  threshold?: number;
  delay?: number;
  loop?: boolean;
}

const useInViewAnim = (anim: AnimProp) => {
  const { ref, inView } = useInView({
    threshold: anim.threshold || 0.5,
  });

  const [animState, api] = useSpring(() => ({
    ...anim.from,
    delay: anim.delay || 1000,
  }));

  useEffect(() => {
    if (inView) {
      api.start({
        ...anim.to,
      });
    } else if (anim.loop) {
      api.start({
        ...anim.from,
      });
    }
  }, [inView]);

  return { ref, animState, api };
};

export default useInViewAnim;
