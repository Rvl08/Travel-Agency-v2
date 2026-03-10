import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

gsap.registerPlugin(ScrollTrigger);

interface Destination {
    name: string;
    location: string;
    price: string;
    image: string;
    gridArea: string;
}

const destinations: Destination[] = [
    {
        name: 'Ubud, Bali',
        location: 'Bali',
        price: 'Rp 1.2jt',
        image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80',
        gridArea: '1 / 1 / 3 / 3',
    },
    {
        name: 'Raja Ampat',
        location: 'Papua Barat',
        price: 'Rp 3.5jt',
        image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=800&q=80',
        gridArea: '1 / 3 / 2 / 4',
    },
    {
        name: 'Labuan Bajo',
        location: 'NTT',
        price: 'Rp 2.8jt',
        image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80',
        gridArea: '2 / 3 / 3 / 4',
    },
    {
        name: 'Bromo',
        location: 'Jawa Timur',
        price: 'Rp 850rb',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?auto=format&fit=crop&w=800&q=80',
        gridArea: '3 / 1 / 4 / 2',
    },
    {
        name: 'Tana Toraja',
        location: 'Sulawesi Selatan',
        price: 'Rp 2.1jt',
        image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80',
        gridArea: '3 / 2 / 4 / 3',
    },
    {
        name: 'Nusa Penida',
        location: 'Bali',
        price: 'Rp 950rb',
        image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=800&q=80',
        gridArea: '3 / 3 / 4 / 4',
    },
];

function DestinationCard({ dest, index }: { dest: Destination; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardRef.current!, {
                y: 60,
                opacity: 0,
                duration: 0.9,
                delay: index * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });
        });
        return () => ctx.revert();
    }, [index]);

    return (
        <div
            ref={cardRef}
            style={{
                gridArea: dest.gridArea,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '1rem',
                cursor: 'pointer',
                minHeight: '220px',
            }}
            className="group"
        >
            {/* Image */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url('${dest.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.7s ease-out',
                }}
                className="group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(62,59,57,0.7), rgba(62,59,57,0.1), transparent)',
                transition: 'opacity 0.5s',
            }} />

            {/* Hover Overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(141,170,157,0.2)',
                    backdropFilter: 'blur(2px)',
                    opacity: 0,
                    transition: 'opacity 0.5s',
                }}
                className="group-hover:!opacity-100"
            />

            {/* Price Badge */}
            <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 600,
                zIndex: 10,
            }}>
                {dest.price}
            </div>

            {/* Arrow */}
            <div
                style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    opacity: 0,
                    transform: 'translateY(8px)',
                    transition: 'opacity 0.5s, transform 0.5s',
                    zIndex: 10,
                }}
                className="group-hover:!opacity-100 group-hover:!translate-y-0"
            >
                <ArrowUpRight size={18} />
            </div>

            {/* Content */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.25rem',
                zIndex: 10,
                transition: 'transform 0.5s',
            }}
                className="group-hover:-translate-y-1"
            >
                <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.25rem',
                }}>
                    {dest.name}
                </h3>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    color: 'rgba(255,255,255,0.75)',
                    fontSize: '0.875rem',
                }}>
                    <MapPin size={14} />
                    <span>{dest.location}</span>
                </div>
            </div>
        </div>
    );
}

export default function DestinationsSection() {
    const titleRef = useRef(null);
    const isInView = useInView(titleRef, { once: true, margin: '-100px' });

    return (
        <section
            id="destinations"
            className="section-padding"
            style={{ backgroundColor: 'var(--color-parchment)' }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                {/* Section Header */}
                <motion.div
                    ref={titleRef}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    style={{ textAlign: 'center', marginBottom: '3.5rem' }}
                >
                    <motion.span
                        variants={staggerItem}
                        style={{
                            display: 'inline-block',
                            color: '#8DAA9D',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginBottom: '0.75rem',
                        }}
                    >
                        Destinasi Pilihan
                    </motion.span>
                    <motion.h2
                        variants={staggerItem}
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 700,
                            color: '#3E3B39',
                            marginBottom: '1rem',
                        }}
                    >
                        Jelajahi Indonesia
                    </motion.h2>
                    <motion.p
                        variants={staggerItem}
                        style={{
                            color: '#6b6664',
                            fontSize: '1.125rem',
                            maxWidth: '32rem',
                            margin: '0 auto',
                            lineHeight: 1.7,
                        }}
                    >
                        Dari sabang sampai merauke, setiap sudut nusantara menyimpan cerita
                        yang menunggu untuk ditemukan.
                    </motion.p>
                </motion.div>

                {/* Bento Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridTemplateRows: 'repeat(3, 240px)',
                    gap: '1rem',
                }}>
                    {destinations.map((dest, i) => (
                        <DestinationCard key={dest.name} dest={dest} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
