import { Variants } from 'framer-motion';

/* ─── Framer Motion Variants ─── */
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    }),
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({
        opacity: 1,
        transition: {
            duration: 0.8,
            delay,
            ease: 'easeOut',
        },
    }),
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (delay = 0) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    }),
};

export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    }),
};

export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    }),
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

/* ─── Magnetic Button Helper ─── */
export function handleMagneticHover(
    e: React.MouseEvent<HTMLElement>,
    strength: number = 0.3
) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
}

export function handleMagneticLeave(e: React.MouseEvent<HTMLElement>) {
    e.currentTarget.style.transform = 'translate(0, 0)';
}
