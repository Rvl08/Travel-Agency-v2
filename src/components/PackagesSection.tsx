import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import {
    staggerContainer,
    staggerItem,
    handleMagneticHover,
    handleMagneticLeave,
} from '@/lib/animations';

interface Package {
    name: string;
    icon: typeof Star;
    price: string;
    period: string;
    desc: string;
    features: string[];
    popular?: boolean;
}

const packages: Package[] = [
    {
        name: 'Backpacker',
        icon: Zap,
        price: 'Rp 850rb',
        period: '/ orang',
        desc: 'Untuk jiwa petualang yang ingin menjelajah hemat tanpa mengorbankan pengalaman.',
        features: [
            'Akomodasi hostel/homestay',
            'Transportasi lokal',
            'Guide lokal berpengalaman',
            'Itinerary fleksibel',
            'Asuransi perjalanan dasar',
        ],
    },
    {
        name: 'Family',
        icon: Star,
        price: 'Rp 2.5jt',
        period: '/ orang',
        desc: 'Liburan keluarga yang nyaman, aman, dan penuh kenangan indah bersama.',
        features: [
            'Hotel bintang 3-4',
            'Transportasi privat AC',
            'Guide keluarga ramah anak',
            'Aktivitas family-friendly',
            'Asuransi komprehensif',
            'Makan 3x sehari',
        ],
        popular: true,
    },
    {
        name: 'Premium',
        icon: Crown,
        price: 'Rp 5.8jt',
        period: '/ orang',
        desc: 'Pengalaman eksklusif dengan kenyamanan terbaik untuk momen spesial Anda.',
        features: [
            'Resort & villa premium',
            'Transportasi VIP',
            'Private guide profesional',
            'Spa & wellness inclusion',
            'Asuransi premium',
            'Fine dining experience',
            'Priority customer support',
        ],
    },
];

export default function PackagesSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section
            id="packages"
            className="section-padding"
            style={{
                backgroundColor: 'var(--color-parchment)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div ref={sectionRef} style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
                {/* Section Header */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    style={{ textAlign: 'center', marginBottom: '3.5rem' }}
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
                        Paket Wisata
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
                        Pilih Petualanganmu
                    </motion.h2>
                    <motion.p
                        variants={staggerItem}
                        style={{
                            color: '#6b6664', fontSize: '1.125rem',
                            maxWidth: '32rem', margin: '0 auto', lineHeight: 1.7,
                        }}
                    >
                        Tiga pilihan paket yang dirancang khusus untuk setiap gaya perjalanan Anda.
                    </motion.p>
                </motion.div>

                {/* Package Cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1.5rem',
                        alignItems: 'stretch',
                    }}
                >
                    {packages.map((pkg) => (
                        <motion.div
                            key={pkg.name}
                            variants={staggerItem}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            style={{
                                position: 'relative',
                                borderRadius: '1.5rem',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'box-shadow 0.5s',
                                ...(pkg.popular
                                    ? {
                                        backgroundColor: '#3E3B39',
                                        color: '#ffffff',
                                        boxShadow: '0 25px 50px -12px rgba(62,59,57,0.2)',
                                    }
                                    : {
                                        backgroundColor: 'var(--color-parchment)',
                                        border: '1px solid rgba(194,178,163,0.2)',
                                    }),
                            }}
                        >
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-1rem',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    padding: '0.375rem 1.25rem',
                                    backgroundColor: '#8DAA9D',
                                    borderRadius: '9999px',
                                    color: '#ffffff',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.05em',
                                    textTransform: 'uppercase',
                                    whiteSpace: 'nowrap',
                                    boxShadow: '0 10px 25px -5px rgba(141,170,157,0.3)',
                                }}>
                                    Paling Populer
                                </div>
                            )}

                            {/* Icon */}
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '0.75rem',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '1.5rem',
                                backgroundColor: pkg.popular ? 'rgba(255,255,255,0.1)' : 'rgba(141,170,157,0.1)',
                            }}>
                                <pkg.icon size={22} style={{ color: pkg.popular ? '#a8c4b7' : '#8DAA9D' }} />
                            </div>

                            {/* Name & Price */}
                            <h3 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.25rem', fontWeight: 700,
                                color: pkg.popular ? '#ffffff' : '#3E3B39',
                                marginBottom: '0.25rem',
                            }}>
                                {pkg.name}
                            </h3>
                            <div style={{
                                display: 'flex', alignItems: 'baseline', gap: '0.25rem',
                                marginBottom: '0.75rem',
                            }}>
                                <span style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '1.875rem', fontWeight: 700,
                                    color: pkg.popular ? '#ffffff' : '#8DAA9D',
                                }}>
                                    {pkg.price}
                                </span>
                                <span style={{
                                    fontSize: '0.875rem',
                                    color: pkg.popular ? 'rgba(255,255,255,0.6)' : '#6b6664',
                                }}>
                                    {pkg.period}
                                </span>
                            </div>
                            <p style={{
                                fontSize: '0.875rem', lineHeight: 1.7,
                                marginBottom: '1.5rem',
                                color: pkg.popular ? 'rgba(255,255,255,0.7)' : '#6b6664',
                            }}>
                                {pkg.desc}
                            </p>

                            {/* Features */}
                            <ul style={{
                                display: 'flex', flexDirection: 'column', gap: '0.75rem',
                                marginBottom: '2rem', flex: 1,
                                listStyle: 'none', padding: 0,
                            }}>
                                {pkg.features.map((feat) => (
                                    <li key={feat} style={{
                                        display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                                        fontSize: '0.875rem',
                                    }}>
                                        <Check
                                            size={16}
                                            style={{
                                                marginTop: '2px', flexShrink: 0,
                                                color: pkg.popular ? '#a8c4b7' : '#8DAA9D',
                                            }}
                                        />
                                        <span style={{
                                            color: pkg.popular ? 'rgba(255,255,255,0.8)' : '#6b6664',
                                        }}>
                                            {feat}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                onMouseMove={(e) => handleMagneticHover(e, 0.2)}
                                onMouseLeave={handleMagneticLeave}
                                style={{
                                    width: '100%',
                                    padding: '0.875rem',
                                    borderRadius: '0.75rem',
                                    fontWeight: 600,
                                    fontSize: '0.875rem',
                                    cursor: 'pointer',
                                    border: 'none',
                                    transition: 'background-color 0.3s',
                                    backgroundColor: pkg.popular ? '#8DAA9D' : '#3E3B39',
                                    color: '#ffffff',
                                    ...(pkg.popular && {
                                        boxShadow: '0 10px 25px -5px rgba(141,170,157,0.2)',
                                    }),
                                }}
                            >
                                Pilih Paket
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
