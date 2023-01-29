import { MutableRefObject, useEffect, useRef, useState } from "react";

/**
 * Check if an element is in viewport
 * @param {number} offset - Number of pixels up to the observable element from the top
 */
export default function useVisibility(
  offset = 0
): [boolean, MutableRefObject<HTMLElement>] {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = useRef<HTMLElement>(
    null
  ) as React.MutableRefObject<HTMLInputElement>;

  const onScroll = () => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const top = currentElement.current.getBoundingClientRect().top;
    // setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
    setIsVisible(top - offset <= window.innerHeight);
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll, true);
    return () => document.removeEventListener("scroll", onScroll, true);
  });

  return [isVisible, currentElement];
}
