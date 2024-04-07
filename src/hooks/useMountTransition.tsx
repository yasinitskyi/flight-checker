import { useEffect, useState } from 'react';

const useMountTransition = (isMounted: boolean, delay = 250) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isMounted && !hasTransitionedIn) {
      setHasTransitionedIn(true);
    } else if (!isMounted && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), delay);
    }

    return () => clearTimeout(timeoutId);
  }, [delay, isMounted, hasTransitionedIn]);

  return hasTransitionedIn;
};

export default useMountTransition;