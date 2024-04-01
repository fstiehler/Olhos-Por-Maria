import { useCallback, useEffect, useState } from 'react';

const useScrollY = (initialDetection = 0) => {
    const [scrollY, setScrollY] = useState(false);

    const handleScroll = useCallback(() => {
        if (window.pageYOffset > initialDetection && !scrollY) {
            return setScrollY(true);
        }
        if (window.pageYOffset <= initialDetection && scrollY) {
            return setScrollY(false);
        }
    }, [initialDetection, scrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return { isScrollingY: scrollY };
};

export { useScrollY };
