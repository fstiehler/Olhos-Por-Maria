import { useEffect, useRef, useState } from 'react';

export function useObserver(observe) {
    const [activeId, setActiveId] = useState('');
    const observer = useRef<any>();

    useEffect(() => {
        const handleObserver = (entries) => {
            entries.forEach((entry) => {
                if (entry?.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        observer.current = new IntersectionObserver(handleObserver, {
            rootMargin: '-20% 0% -35% 0%',
        });

        const elements = document.querySelectorAll(observe);

        elements.forEach((elem) => observer.current.observe(elem));

        return () => observer.current?.disconnect();
    }, []);

    return { activeId };
}
