import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mountain, MapPin, Phone, Mail, Instagram, Twitter } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const quickLinks = ['Destinations', 'Packages', 'About Us', 'Blog', 'Careers'];
const destinationsList = ['Bali', 'Raja Ampat', 'Labuan Bajo', 'Bromo', 'Tana Toraja', 'Nusa Penida'];

export default function Footer() {
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { once: true, margin: '-50px' });

    return (
        <footer
            ref={footerRef}
            style={{
                backgroundColor: '#3E3B39',
                color: 'rgba(255,255,255,0.8)',
                paddingTop: '5rem',
                paddingBottom: '2rem',
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Top accent line */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(141,170,157,0.3), transparent)',
            }} />

            {/* Decorative blob */}
            <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '400px', height: '400px', borderRadius: '50%',
                backgroundColor: 'rgba(141,170,157,0.05)',
                filter: 'blur(80px)',
                transform: 'translate(50%, -50%)',
            }} />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}
            >
                {/* 4-column grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '3rem',
                    marginBottom: '4rem',
                }}>
                    {/* Brand Column */}
                    <motion.div variants={staggerItem}>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '0.625rem',
                            marginBottom: '1rem',
                        }}>
                            <Mountain size={24} style={{ color: '#8DAA9D' }} />
                            <span style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.25rem', fontWeight: 600, color: '#ffffff',
                            }}>
                                NusaStay
                            </span>
                        </div>
                        <p style={{
                            color: 'rgba(255,255,255,0.5)',
                            fontSize: '0.875rem', lineHeight: 1.7,
                            marginBottom: '1.5rem', maxWidth: '240px',
                        }}>
                            Temukan ritme alam Anda bersama kami. Jelajahi keindahan nusantara
                            dengan kenyamanan dan keamanan terjamin.
                        </p>
                        {/* Social Icons */}
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            {[Instagram, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    style={{
                                        width: '36px', height: '36px', borderRadius: '50%',
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        transition: 'background-color 0.3s, transform 0.3s',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(141,170,157,0.2)';
                                        e.currentTarget.style.transform = 'scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    <Icon size={16} style={{ color: 'rgba(255,255,255,0.6)' }} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={staggerItem}>
                        <h4 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '0.875rem', fontWeight: 700, color: '#ffffff',
                            letterSpacing: '0.05em', textTransform: 'uppercase',
                            marginBottom: '1.25rem',
                        }}>
                            Quick Links
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        style={{
                                            color: 'rgba(255,255,255,0.5)',
                                            fontSize: '0.875rem',
                                            transition: 'color 0.3s',
                                            textDecoration: 'none',
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.color = '#8DAA9D'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Destinations */}
                    <motion.div variants={staggerItem}>
                        <h4 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '0.875rem', fontWeight: 700, color: '#ffffff',
                            letterSpacing: '0.05em', textTransform: 'uppercase',
                            marginBottom: '1.25rem',
                        }}>
                            Destinations
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                            {destinationsList.map((dest) => (
                                <li key={dest}>
                                    <a
                                        href="#"
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                                            color: 'rgba(255,255,255,0.5)',
                                            fontSize: '0.875rem',
                                            transition: 'color 0.3s',
                                            textDecoration: 'none',
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.color = '#8DAA9D'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                                    >
                                        <MapPin size={12} style={{ flexShrink: 0 }} />
                                        {dest}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact & Newsletter */}
                    <motion.div variants={staggerItem}>
                        <h4 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '0.875rem', fontWeight: 700, color: '#ffffff',
                            letterSpacing: '0.05em', textTransform: 'uppercase',
                            marginBottom: '1.25rem',
                        }}>
                            Contact
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <a href="tel:+62210000000" style={{
                                display: 'flex', alignItems: 'center', gap: '0.625rem',
                                color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem',
                                transition: 'color 0.3s', textDecoration: 'none',
                            }}>
                                <Phone size={14} />
                                +62 21 0000 000
                            </a>
                            <a href="mailto:hello@nusastay.id" style={{
                                display: 'flex', alignItems: 'center', gap: '0.625rem',
                                color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem',
                                transition: 'color 0.3s', textDecoration: 'none',
                            }}>
                                <Mail size={14} />
                                hello@nusastay.id
                            </a>
                        </div>

                        {/* Newsletter */}
                        <h4 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '0.875rem', fontWeight: 700, color: '#ffffff',
                            letterSpacing: '0.05em', textTransform: 'uppercase',
                            marginBottom: '0.75rem',
                        }}>
                            Newsletter
                        </h4>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input
                                type="email"
                                placeholder="Email Anda"
                                style={{
                                    flex: 1,
                                    padding: '0.625rem 1rem',
                                    borderRadius: '0.5rem',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: '#ffffff',
                                    fontSize: '0.875rem',
                                    outline: 'none',
                                    minWidth: 0,
                                }}
                            />
                            <button style={{
                                padding: '0.625rem 1rem',
                                backgroundColor: '#8DAA9D',
                                borderRadius: '0.5rem',
                                color: '#ffffff',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                border: 'none',
                                flexShrink: 0,
                                transition: 'background-color 0.3s',
                            }}>
                                Join
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    variants={staggerItem}
                    style={{
                        paddingTop: '2rem',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem',
                    }}
                >
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>
                        © 2026 NusaStay. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#" style={{
                            color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem',
                            transition: 'color 0.3s', textDecoration: 'none',
                        }}>
                            Privacy Policy
                        </a>
                        <a href="#" style={{
                            color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem',
                            transition: 'color 0.3s', textDecoration: 'none',
                        }}>
                            Terms of Service
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
}
