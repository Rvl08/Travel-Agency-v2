import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Compass, Headphones, Wallet } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: Compass,
        title: 'Kurasi Destinasi',
        desc: 'Setiap destinasi dipilih dengan cermat oleh tim lokal kami yang berpengalaman menjelajahi nusantara.',
    },
    {
        icon: Shield,
        title: 'Jaminan Keamanan',
        desc: 'Perjalanan Anda dilindungi asuransi komprehensif dan didampingi pemandu bersertifikat.',
    },
    {
        icon: Headphones,
        title: 'Support 24/7',
        desc: 'Tim support kami siap membantu kapan saja, dari perencanaan hingga Anda kembali pulang.',
    },
    {
        icon: Wallet,
        title: 'Harga Transparan',
        desc: 'Tidak ada biaya tersembunyi. Yang Anda lihat adalah yang Anda bayar, titik.',
    },
];

interface CounterProps {
    target: number;
    suffix: string;
    label: string;
}

function AnimatedCounter({ target, suffix, label }: CounterProps) {
    const counterRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = counterRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: el,
                start: 'top 85%',
                onEnter: () => {
                    if (hasAnimated.current) return;
                    hasAnimated.current = true;
                    gsap.to(
                        { val: 0 },
                        {
                            val: target,
                            duration: 2.2,
                            ease: 'power2.out',
                            onUpdate: function () {
                                el.textContent = Math.floor(this.targets()[0].val) + suffix;
                            },
                        }
                    );
                },
            });
        });

        return () => ctx.revert();
    }, [target, suffix]);

    return (
        <div style={{ textAlign: 'center' }}>
            <span
                ref={counterRef}
                style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 700,
                    color: '#8DAA9D',
                    marginBottom: '0.5rem',
                }}
            >
                0{suffix}
            </span>
            <span style={{ color: '#6b6664', fontSize: '0.875rem', fontWeight: 500 }}>
                {label}
            </span>
        </div>
    );
}

export default function FeaturesSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section
            id="features"
            className="section-padding"
            style={{
                backgroundColor: 'var(--color-parchment-warm)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorative Blobs */}
            <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '500px', height: '500px', borderRadius: '50%',
                backgroundColor: 'rgba(141,170,157,0.05)',
                filter: 'blur(80px)',
                transform: 'translate(30%, -50%)',
            }} />

            <div ref={sectionRef} style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
                {/* Section Header */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <motion.span
                        variants={staggerItem}
                        style={{
                            display: 'inline-block', color: '#8DAA9D',
                            fontSize: '0.875rem', fontWeight: 600,
                            letterSpacing: '0.1em', textTransform: 'uppercase',
                            marginBottom: '0.75rem',
                        }}
                    >
                        Mengapa NusaStay
                    </motion.span>
                    <motion.h2
                        variants={staggerItem}
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 700, color: '#3E3B39',
                            marginBottom: '1rem',
                        }}
                    >
                        Perjalanan Tanpa Khawatir
                    </motion.h2>
                    <motion.p
                        variants={staggerItem}
                        style={{
                            color: '#6b6664', fontSize: '1.125rem',
                            maxWidth: '32rem', margin: '0 auto', lineHeight: 1.7,
                        }}
                    >
                        Kami menangani semua detailnya, Anda cukup menikmati petualangannya.
                    </motion.p>
                </motion.div>

                {/* Feature Cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '5rem',
                    }}
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            variants={staggerItem}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            style={{
                                padding: '1.75rem',
                                borderRadius: '1rem',
                                backgroundColor: 'var(--color-parchment)',
                                border: '1px solid rgba(194,178,163,0.15)',
                                transition: 'border-color 0.5s, box-shadow 0.5s',
                            }}
                            className="group hover:shadow-xl"
                        >
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '0.75rem',
                                backgroundColor: 'rgba(141,170,157,0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '1.25rem',
                                transition: 'background-color 0.3s',
                            }}
                                className="group-hover:!bg-[rgba(141,170,157,0.2)]"
                            >
                                <feature.icon size={22} style={{ color: '#8DAA9D' }} />
                            </div>
                            <h3 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.125rem', fontWeight: 700,
                                color: '#3E3B39', marginBottom: '0.5rem',
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{
                                color: '#6b6664', fontSize: '0.875rem', lineHeight: 1.7,
                            }}>
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Counters */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '2rem',
                    paddingTop: '2.5rem',
                    borderTop: '1px solid rgba(194,178,163,0.2)',
                }}>
                    <AnimatedCounter target={500} suffix="+" label="Destinasi" />
                    <AnimatedCounter target={12} suffix="K+" label="Traveler Puas" />
                    <AnimatedCounter target={34} suffix="" label="Provinsi" />
                    <AnimatedCounter target={99} suffix="%" label="Rating Positif" />
                </div>
            </div>
        </section>
    );
}
