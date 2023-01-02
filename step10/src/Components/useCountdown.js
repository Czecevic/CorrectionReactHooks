import { useState, useEffect } from 'react';


function useCountdown(duration) {
  const [countdown, setCountdown] = useState(duration);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  });

  return [countdown, setCountdown];
}


export { useCountdown };