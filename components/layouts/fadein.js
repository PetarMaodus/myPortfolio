import { useRef, useEffect } from 'react';

function FadeInOnScroll({children}) {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.style.opacity = 1;
                } else {
                    entry.target.style.opacity = 0;
                }
            });
        });

        observer.observe(ref.current);

        return () => observer.unobserve(ref.current);
    }, []);


    return (
        <div ref={ref} style={{ opacity: 0, transition: 'opacity 2s' }}>
            {children}
        </div>
    );
}
export default FadeInOnScroll;