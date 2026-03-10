import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, CalendarDays, Users } from 'lucide-react';
import { handleMagneticHover, handleMagneticLeave } from '@/lib/animations';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.hero-bg', {
                y: '30%',
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.5,
                },
            });

            gsap.to('.hero-content', {
                opacity: 0,
                y: -60,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: '25% top',
                    end: '60% top',
                    scrub: 0.5,
                },
            });

            gsap.to(overlayRef.current, {
                opacity: 0.7,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            if (headingRef.current) {
                const chars = headingRef.current.querySelectorAll('.char');
                gsap.from(chars, {
                    y: 80,
                    opacity: 0,
                    rotateX: -40,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.04,
                    delay: 0.5,
                });
            }
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const headingText = 'Temukan Ritme';
    const headingText2 = 'Alam Anda';

    return (
        <section
            ref={heroRef}
            id="hero"
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                minHeight: '700px',
                overflow: 'hidden',
            }}
        >
            {/* Background Image */}
            <div
                className="hero-bg"
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '130%',
                    top: '-5%',
                    backgroundImage: `url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Gradient Overlay */}
            <div
                ref={overlayRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(62,59,57,0.40), rgba(62,59,57,0.25), rgba(62,59,57,0.60))',
                    opacity: 0.45,
                }}
            />

            {/* Floating Decorative Elements */}
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    top: '15%',
                    right: '10%',
                    width: '96px',
                    height: '96px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(141,170,157,0.1)',
                    filter: 'blur(32px)',
                }}
            />

            {/* Hero Content */}
            <div
                className="hero-content"
                style={{
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center',
                    padding: '0 1.5rem',
                    maxWidth: '1024px',
                    margin: '0 auto',
                }}
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ marginBottom: '1.5rem' }}
                >
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                    }}>
                        <span style={{
                            width: '6px',
                            height: '6px',
                            backgroundColor: '#8DAA9D',
                            borderRadius: '50%',
                            animation: 'pulse 2s infinite',
                        }} />
                        Domestic Travel Expert
                    </span>
                </motion.div>

                {/* Heading */}
                <h1
                    ref={headingRef}
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: 0.95,
                        marginBottom: '1.5rem',
                        perspective: '500px',
                    }}
                >
                    <span style={{ display: 'block', overflow: 'hidden' }}>
                        {headingText.split('').map((char, i) => (
                            <span
                                key={i}
                                className="char"
                                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </span>
                    <span style={{ display: 'block', overflow: 'hidden', marginTop: '0.25rem' }}>
                        {headingText2.split('').map((char, i) => (
                            <span
                                key={`l2-${i}`}
                                className="char"
                                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </span>
                </h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    style={{
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        maxWidth: '560px',
                        marginBottom: '2.5rem',
                        lineHeight: 1.7,
                        fontWeight: 300,
                    }}
                >
                    Jelajahi keindahan kepulauan Indonesia. Dari pegunungan berkabut hingga
                    pantai tersembunyi, temukan pengalaman yang tak terlupakan.
                </motion.p>

                {/* Search Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    style={{ width: '100%', maxWidth: '680px' }}
                >
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        padding: '0.75rem',
                        borderRadius: '1rem',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,255,255,0.15)',
                    }}>
                        {/* Destination */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            flex: '1 1 200px',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.75rem',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            transition: 'background-color 0.2s',
                        }}>
                            <Search size={18} style={{ color: 'rgba(255,255,255,0.6)', flexShrink: 0 }} />
                            <input
                                type="text"
                                placeholder="Mau ke mana?"
                                style={{
                                    background: 'transparent',
                                    color: '#ffffff',
                                    fontSize: '0.875rem',
                                    width: '100%',
                                    outline: 'none',
                                    border: 'none',
                                }}
                            />
                        </div>

                        {/* Date */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.75rem',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            width: '140px',
                            flexShrink: 0,
                        }}>
                            <CalendarDays size={18} style={{ color: 'rgba(255,255,255,0.6)', flexShrink: 0 }} />
                            <input
                                type="text"
                                placeholder="Kapan?"
                                style={{
                                    background: 'transparent',
                                    color: '#ffffff',
                                    fontSize: '0.875rem',
                                    width: '100%',
                                    outline: 'none',
                                    border: 'none',
                                }}
                            />
                        </div>

                        {/* Guests */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.75rem',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            width: '120px',
                            flexShrink: 0,
                        }}>
                            <Users size={18} style={{ color: 'rgba(255,255,255,0.6)', flexShrink: 0 }} />
                            <input
                                type="text"
                                placeholder="Tamu"
                                style={{
                                    background: 'transparent',
                                    color: '#ffffff',
                                    fontSize: '0.875rem',
                                    width: '100%',
                                    outline: 'none',
                                    border: 'none',
                                }}
                            />
                        </div>

                        {/* Search Button */}
                        <button
                            onMouseMove={(e) => handleMagneticHover(e, 0.2)}
                            onMouseLeave={handleMagneticLeave}
                            style={{
                                padding: '0.75rem 1.5rem',
                                backgroundColor: '#8DAA9D',
                                color: '#ffffff',
                                borderRadius: '0.75rem',
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                cursor: 'pointer',
                                border: 'none',
                                flexShrink: 0,
                                boxShadow: '0 10px 25px -5px rgba(141,170,157,0.2)',
                                transition: 'background-color 0.3s',
                            }}
                        >
                            Explore
                        </button>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    style={{
                        position: 'absolute',
                        bottom: '3rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        style={{
                            width: '24px',
                            height: '40px',
                            borderRadius: '9999px',
                            border: '2px solid rgba(255,255,255,0.3)',
                            display: 'flex',
                            justifyContent: 'center',
                            paddingTop: '8px',
                        }}
                    >
                        <div style={{
                            width: '4px',
                            height: '10px',
                            backgroundColor: 'rgba(255,255,255,0.6)',
                            borderRadius: '9999px',
                        }} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
