"use client";

import { motion, useReducedMotion } from "framer-motion";

export const EASE_CORP = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: EASE_CORP },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay, ease: EASE_CORP },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_CORP },
  },
};

const viewport = { once: true, amount: 0.15, margin: "0px 0px -48px 0px" };

export function AnimateIn({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
  ...props
}) {
  const reduced = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (reduced) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.55, delay, ease: EASE_CORP }}
      {...props}
    >
      {children}
    </Component>
  );
}

export function AnimateOnMount({
  children,
  className,
  delay = 0,
  y = 24,
  ...props
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: EASE_CORP }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, stagger = 0.1, as: Tag = "div", ...props }) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Static = Tag;
    return (
      <Static className={className} {...props}>
        {children}
      </Static>
    );
  }

  const MotionTag = motion[Tag] || motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: 0.04 } },
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({ children, className, ...props }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div className={className} variants={staggerItem} {...props}>
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className,
  lift = -4,
  ...props
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y: lift, transition: { duration: 0.25, ease: EASE_CORP } }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
