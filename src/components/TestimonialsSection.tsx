import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
    name: string;
    location: string;
    avatar: string;
    rating: number;
    text: string;
    trip: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Andi Pratama',
        location: 'Jakarta',
        avatar: 'AP',
        rating: 5,
        text: 'NusaStay benar-benar mengubah cara saya melihat traveling domestik. Semua terorganisir dengan sempurna, dan pemandangannya luar biasa!',
        trip: 'Raja Ampat Trip',
    },
    {
        name: 'Sari Dewi',
        location: 'Bandung',
        avatar: 'SD',
        rating: 5,
        text: 'Liburan keluarga terbaik yang pernah kami alami. Anak-anak senang, orangtua tenang. Terima kasih NusaStay!',
        trip: 'Bali Family Package',
    },
    {
        name: 'Rizky Fauzan',
        location: 'Surabaya',
        avatar: 'RF',
        rating: 5,
        text: 'Sebagai backpacker, saya cari yang murah tapi berkualitas. NusaStay ngerti banget! Guide-nya asik dan itinerary-nya fleksibel.',
        trip: 'Bromo Backpacker',
    },
    {
        name: 'Maya Anggraini',
        location: 'Yogyakarta',
        avatar: 'MA',
        rating: 5,
        text: 'Paket premium-nya worth it banget. Dari resort sampai private guide, semuanya perfect. Pasti balik lagi!',
        trip: 'Labuan Bajo Premium',
    },
    {
        name: 'Budi Santoso',
        location: 'Medan',
        avatar: 'BS',
        rating: 5,
        text: 'Support 24 jam mereka bukan omong kosong. Ketika ada perubahan jadwal mendadak, mereka handle semuanya dengan cepat.',
        trip: 'Tana Toraja Explorer',
    },
    {
        name: 'Dian Permata',
        location: 'Makassar',
        avatar: 'DP',
        rating: 5,
        text: 'Foto-foto liburan saya viral di instagram berkat spot-spot keren yang dipilihkan guide NusaStay. Highly recommended!',
        trip: 'Nusa Penida Trip',
    },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div style={{
            flexShrink: 0,
            width: '350px',
            padding: '1.5rem',
            borderRadius: '1rem',
            backgroundColor: 'var(--color-parchment)',
            border: '1px solid rgba(194,178,163,0.15)',
            transition: 'border-color 0.3s',
        }}>
            <Quote size={24} style={{ color: 'rgba(141,170,157,0.3)', marginBottom: '1rem' }} />

            {/* Rating */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={14} style={{ fill: '#8DAA9D', color: '#8DAA9D' }} />
                ))}
            </div>

            {/* Text */}
            <p style={{
                color: '#6b6664', fontSize: '0.875rem',
                lineHeight: 1.7, marginBottom: '1.5rem',
            }}>
                "{testimonial.text}"
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    backgroundColor: 'rgba(141,170,157,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#8DAA9D', fontSize: '0.75rem', fontWeight: 700,
                }}>
                    {testimonial.avatar}
                </div>
                <div>
                    <p style={{ color: '#3E3B39', fontSize: '0.875rem', fontWeight: 600 }}>
                        {testimonial.name}
                    </p>
                    <p style={{ color: '#6b6664', fontSize: '0.75rem' }}>
                        {testimonial.trip} • {testimonial.location}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function TestimonialsSection() {
    const sectionRef = useRef(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    useEffect(() => {
        if (!marqueeRef.current) return;

        const ctx = gsap.context(() => {
            const marquee = marqueeRef.current!;
            const totalWidth = marquee.scrollWidth / 2;

            gsap.to(marquee, {
                x: -totalWidth,
                duration: 40,
                ease: 'none',
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize((x: number) => x % totalWidth),
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="testimonials"
            className="section-padding"
            style={{
                backgroundColor: 'var(--color-parchment-warm)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div ref={sectionRef} style={{ maxWidth: '1280px', margin: '0 auto 3rem' }}>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    style={{ textAlign: 'center' }}
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
                        Cerita Mereka
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
                        Kata Para Penjelajah
                    </motion.h2>
                    <motion.p
                        variants={staggerItem}
                        style={{
                            color: '#6b6664', fontSize: '1.125rem',
                            maxWidth: '32rem', margin: '0 auto', lineHeight: 1.7,
                        }}
                    >
                        Ribuan traveler telah mempercayakan petualangan mereka kepada NusaStay.
                    </motion.p>
                </motion.div>
            </div>

            {/* Marquee */}
            <div style={{ position: 'relative' }}>
                {/* Gradient Masks */}
                <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px',
                    background: 'linear-gradient(to right, var(--color-parchment-warm), transparent)',
                    zIndex: 10, pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px',
                    background: 'linear-gradient(to left, var(--color-parchment-warm), transparent)',
                    zIndex: 10, pointerEvents: 'none',
                }} />

                <div style={{ overflow: 'hidden' }}>
                    <div ref={marqueeRef} style={{
                        display: 'flex', gap: '1.5rem', width: 'max-content',
                    }}>
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
