import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import {
    handleMagneticHover,
    handleMagneticLeave,
    staggerContainer,
    staggerItem,
} from '@/lib/animations';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
    const sectionRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    useEffect(() => {
        if (!bgRef.current || !sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.to(bgRef.current!, {
                y: '20%',
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.5,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Parallax Background */}
            <div
                ref={bgRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '140%',
                    top: '-20%',
                    backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(62,59,57,0.8), rgba(62,59,57,0.7), rgba(107,138,124,0.6))',
            }} />

            {/* Animated mesh accents */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute', top: '25%', right: '25%',
                    width: '500px', height: '500px', borderRadius: '50%',
                    backgroundColor: 'rgba(141,170,157,0.2)',
                    filter: 'blur(100px)',
                }}
            />
            <motion.div
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute', bottom: '25%', left: '25%',
                    width: '400px', height: '400px', borderRadius: '50%',
                    backgroundColor: 'rgba(194,178,163,0.2)',
                    filter: 'blur(80px)',
                }}
            />

            {/* Content */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                style={{
                    position: 'relative', zIndex: 10,
                    textAlign: 'center',
                    padding: '5rem 1.5rem',
                    maxWidth: '768px', margin: '0 auto',
                }}
            >
                <motion.span
                    variants={staggerItem}
                    style={{
                        display: 'inline-block', color: '#a8c4b7',
                        fontSize: '0.875rem', fontWeight: 600,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        marginBottom: '1rem',
                    }}
                >
                    Mulai Petualangan
                </motion.span>

                <motion.h2
                    variants={staggerItem}
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                        fontWeight: 700, color: '#ffffff',
                        lineHeight: 1.1, marginBottom: '1.5rem',
                    }}
                >
                    Siap Menjelajah<br />
                    <span style={{ color: '#a8c4b7' }}>Nusantara?</span>
                </motion.h2>

                <motion.p
                    variants={staggerItem}
                    style={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        maxWidth: '560px', margin: '0 auto 2.5rem',
                        lineHeight: 1.7,
                    }}
                >
                    Ribuan destinasi menakjubkan menanti. Mulai rencanakan perjalanan impian
                    Anda hari ini bersama NusaStay.
                </motion.p>

                <motion.div
                    variants={staggerItem}
                    style={{
                        display: 'flex', flexWrap: 'wrap',
                        gap: '1rem', justifyContent: 'center',
                    }}
                >
                    <button
                        onMouseMove={(e) => handleMagneticHover(e, 0.2)}
                        onMouseLeave={handleMagneticLeave}
                        className="group"
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '1rem 2rem',
                            backgroundColor: '#8DAA9D', color: '#ffffff',
                            borderRadius: '9999px', fontWeight: 600,
                            fontSize: '1rem', cursor: 'pointer',
                            border: 'none',
                            boxShadow: '0 25px 50px -12px rgba(141,170,157,0.25)',
                            transition: 'background-color 0.3s',
                        }}
                    >
                        Mulai Sekarang
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1"
                            style={{ transition: 'transform 0.3s' }}
                        />
                    </button>
                    <button
                        onMouseMove={(e) => handleMagneticHover(e, 0.2)}
                        onMouseLeave={handleMagneticLeave}
                        style={{
                            padding: '1rem 2rem',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            color: '#ffffff',
                            borderRadius: '9999px', fontWeight: 600,
                            fontSize: '1rem', cursor: 'pointer',
                            border: '1px solid rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(8px)',
                            transition: 'background-color 0.3s',
                        }}
                    >
                        Hubungi Kami
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
