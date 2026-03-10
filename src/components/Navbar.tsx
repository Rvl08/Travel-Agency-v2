import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mountain } from 'lucide-react';
import { handleMagneticHover, handleMagneticLeave } from '@/lib/animations';

const navLinks = [
    { label: 'Destinations', href: '#destinations' },
    { label: 'Packages', href: '#packages' },
    { label: 'About', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight * 0.15);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    transition: 'background-color 0.5s ease, box-shadow 0.5s ease, backdrop-filter 0.5s ease',
                    backgroundColor: isScrolled ? 'rgba(250, 249, 246, 0.95)' : 'transparent',
                    boxShadow: isScrolled ? '0 1px 0 0 rgba(194,178,163,0.3)' : 'none',
                    backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                }}
            >
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: '80px',
                        width: '100%',
                    }}>
                        {/* Logo */}
                        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}>
                            <Mountain
                                size={28}
                                style={{
                                    color: isScrolled ? '#8DAA9D' : '#ffffff',
                                    transition: 'color 0.5s ease',
                                }}
                            />
                            <span
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '1.25rem',
                                    fontWeight: 600,
                                    letterSpacing: '-0.02em',
                                    color: isScrolled ? '#3E3B39' : '#ffffff',
                                    transition: 'color 0.5s ease',
                                }}
                            >
                                NusaStay
                            </span>
                        </a>

                        {/* Desktop Nav Links */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2rem',
                        }}
                            className="hidden md:flex"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    style={{
                                        fontSize: '0.875rem',
                                        fontWeight: 500,
                                        letterSpacing: '0.02em',
                                        color: isScrolled ? '#3E3B39' : 'rgba(255,255,255,0.9)',
                                        textShadow: isScrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.2)',
                                        transition: 'color 0.3s ease, opacity 0.3s ease',
                                        textDecoration: 'none',
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <button
                                onMouseMove={(e) => handleMagneticHover(e, 0.25)}
                                onMouseLeave={(e) => {
                                    handleMagneticLeave(e);
                                }}
                                style={{
                                    padding: '0.625rem 1.5rem',
                                    borderRadius: '9999px',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.5s ease',
                                    border: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.25)',
                                    backgroundColor: isScrolled ? '#8DAA9D' : 'rgba(255,255,255,0.15)',
                                    color: '#ffffff',
                                    backdropFilter: isScrolled ? 'none' : 'blur(8px)',
                                }}
                            >
                                Book Now
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="md:hidden"
                            style={{
                                padding: '0.5rem',
                                cursor: 'pointer',
                                color: isScrolled ? '#3E3B39' : '#ffffff',
                                transition: 'color 0.5s ease',
                                background: 'none',
                                border: 'none',
                            }}
                        >
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 40,
                            backgroundColor: 'rgba(250, 249, 246, 0.98)',
                            backdropFilter: 'blur(20px)',
                            paddingTop: '6rem',
                            paddingLeft: '2rem',
                            paddingRight: '2rem',
                        }}
                        className="md:hidden"
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    onClick={() => setIsMobileOpen(false)}
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '1.75rem',
                                        color: '#3E3B39',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => setIsMobileOpen(false)}
                                style={{
                                    marginTop: '1rem',
                                    padding: '0.875rem 2rem',
                                    backgroundColor: '#8DAA9D',
                                    color: '#ffffff',
                                    borderRadius: '9999px',
                                    fontWeight: 600,
                                    fontSize: '1.125rem',
                                    cursor: 'pointer',
                                    border: 'none',
                                }}
                            >
                                Book Now
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
