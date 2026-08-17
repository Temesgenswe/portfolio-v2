import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  ArrowDown,
  MapPin,
  Mail,
  Phone,
  Globe,
  CheckCircle2,
  Sparkles,
  BriefcaseBusiness,
  GraduationCap,
  Building2,
} from 'lucide-react';

import { useScrollReveal } from './useScrollReveal';
import { hero, stats } from '../data/portfolio';

const highlights = [
  {
    label: 'Multidisciplinary',
    desc: 'Combining academic rigor with industry expertise',
    color: '#f59e0b',
    icon: GraduationCap,
  },
  {
    label: 'Entrepreneurial',
    desc: 'Co-founded and managed technology-driven organizations',
    color: '#f59e0b',
    icon: Building2,
  },
  {
    label: 'Research-Driven',
    desc: 'Published researcher in fog and cloud computing systems',
    color: '#3b82f6',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Impact-Focused',
    desc: 'Supported 21 enterprises through a MasterCard Foundation program',
    color: '#10b981',
    icon: Sparkles,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.16, 1, 0.3, 1],
  },
});

export default function About() {
  const [ref, visible] = useScrollReveal(0.08);
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    if (!hero?.titles?.length) return;

    const timer = setInterval(() => {
      setTitleIdx((current) => (current + 1) % hero.titles.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const firstName = hero?.name?.split(' ')[0] || 'Temesgen';
  const lastName = hero?.name?.split(' ')[1] || 'Teshome';

  return (
    <section
      id="about"
      ref={ref}
      className="relative z-10 overflow-hidden px-6 py-24 md:px-12 lg:px-20 lg:py-32"
      style={{
        background:
          'linear-gradient(180deg, #0b1120 0%, #0f1829 50%, #0b1120 100%)',
      }}
    >
      {/* =========================================================
          BACKGROUND EFFECTS
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top glow */}
        <div
          className="absolute left-0 right-0 top-0 h-[550px]"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(59,130,246,0.10) 0%, rgba(16,185,129,0.07) 40%, rgba(139,92,246,0.05) 70%, transparent 90%)',
          }}
        />

        {/* Bottom glow */}
        <div
          className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full opacity-10"
          style={{
            background:
              'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =========================================================
            PROFILE / HERO AREA
        ========================================================= */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* ---------------------------------------------------------
              LEFT — INTRODUCTION
          --------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={
              visible
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -40 }
            }
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Section label */}
            <motion.div {...fadeUp(0.1)} className="sec-label">
              About Me
            </motion.div>

            {/* Main heading */}
            
            <div className="sec-divider mb-7" />

            {/* Rotating professional title */}
            <motion.div
              {...fadeUp(0.3)}
              className="mb-6 h-8 overflow-hidden"
            >
              <AnimatedTitle
                titles={hero?.titles || []}
                idx={titleIdx}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.4)}
              className="mb-5 font-mono text-[0.72rem] uppercase tracking-[0.16em]"
              style={{ color: '#94a3b8' }}
            >
              {hero?.tagline ||
                'Software Engineering · Leadership · Digital Transformation'}
            </motion.p>

            {/* Description */}
            <motion.div
              {...fadeUp(0.5)}
              className="mb-8 max-w-xl space-y-4"
            >
              <p
                className="text-[0.9rem] leading-[1.9]"
                style={{ color: 'rgba(241,245,249,0.62)' }}
              >
                With over{' '}
                <span className="font-medium text-amber-300">
                  6 years of experience
                </span>{' '}
                spanning academia and industry, I bridge the gap between
                technology, education, and business strategy.
              </p>

              <p
                className="text-[0.9rem] leading-[1.9]"
                style={{ color: 'rgba(241,245,249,0.62)' }}
              >
                As a Software Engineering Lecturer at Debre Berhan
                University and General Manager of{' '}
                <span className="text-teal">
                  gCODE Technologies
                </span>
                , I combine technical expertise with an entrepreneurial
                mindset to drive meaningful digital transformation.
              </p>

              <p
                className="text-[0.9rem] leading-[1.9]"
                style={{ color: 'rgba(241,245,249,0.62)' }}
              >
                My work spans{' '}
                <span className="font-medium text-amber-300">
                  requirements engineering, software development,
                  data analytics, digital marketing, AI/ML,
                </span>{' '}
                and organizational leadership.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              {...fadeUp(0.6)}
              className="mb-10 flex flex-wrap gap-3"
            >
              <a
                href="#experience"
                className="btn-primary inline-flex items-center gap-2"
              >
                View Experience
                <ArrowDown size={14} />
              </a>

              <a
                href="#contact"
                className="btn-outline inline-flex items-center gap-2"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Quick contact */}
            <motion.div
              {...fadeUp(0.7)}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-teal" />
                <a
                  href={`mailto:${hero?.email || 'temesgendbu@gmail.com'}`}
                  className="font-mono text-[0.68rem] text-slate transition-colors hover:text-teal"
                >
                  {hero?.email || 'temesgendbu@gmail.com'}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-teal" />
                <span className="font-mono text-[0.68rem] text-slate">
                  {hero?.location || 'Debre Berhan, Ethiopia'}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ---------------------------------------------------------
              RIGHT — PHOTO / PROFILE CARD
          --------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              visible
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 50 }
            }
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            {/* Photo container */}
            <div className="relative flex justify-center py-8">

              {/* Outer rotating ring */}
              <motion.div
                className="pointer-events-none absolute rounded-full"
                style={{
                  width: 'min(420px, 92%)',
                  aspectRatio: '1',
                  border: '1px solid rgba(59,130,246,0.18)',
                }}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Inner rotating dashed ring */}
              <motion.div
                className="pointer-events-none absolute rounded-full"
                style={{
                  width: 'min(360px, 80%)',
                  aspectRatio: '1',
                  border: '1px dashed rgba(245,158,11,0.35)',
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Decorative SVG */}
              <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
                <svg
                  width="440"
                  height="440"
                  viewBox="0 0 440 440"
                  fill="none"
                  className="opacity-[0.06]"
                >
                  <circle
                    cx="220"
                    cy="220"
                    r="205"
                    stroke="#f59e0b"
                  />
                  <circle
                    cx="220"
                    cy="220"
                    r="170"
                    stroke="#f59e0b"
                  />
                  <circle
                    cx="220"
                    cy="220"
                    r="135"
                    stroke="#f59e0b"
                  />
                  <line
                    x1="20"
                    y1="220"
                    x2="420"
                    y2="220"
                    stroke="#f59e0b"
                  />
                  <line
                    x1="220"
                    y1="20"
                    x2="220"
                    y2="420"
                    stroke="#f59e0b"
                  />
                </svg>
              </div>

              {/* Glow */}
              <motion.div
                className="pointer-events-none absolute rounded-full"
                style={{
                  width: 'min(320px, 70%)',
                  aspectRatio: '1',
                  background:
                    'radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.5, 0.85, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Main photo */}
              <motion.div
                className="relative z-10 aspect-square w-[68%] max-w-[300px] overflow-hidden rounded-full"
                style={{
                  border: '3px solid rgba(245,158,11,0.45)',
                  boxShadow:
                    '0 0 0 8px rgba(11,17,32,0.9), 0 25px 65px -15px rgba(245,158,11,0.35)',
                }}
                initial={{
                  opacity: 0,
                  scale: 0.85,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.04 }}
              >
                <img
                  src="/temesgen.png"
                  alt="Temesgen Teshome"
                  className="h-full w-full object-cover object-top"
                  style={{
                    filter:
                      'contrast(1.05) saturate(0.9)',
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';

                    const parent =
                      e.currentTarget.parentElement;

                    if (parent) {
                      parent.style.background =
                        'linear-gradient(135deg,#0f1829,#152035)';

                      const fallback =
                        document.createElement('div');

                      fallback.style.cssText = `
                        position:absolute;
                        inset:0;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-family:Fraunces,serif;
                        font-size:5rem;
                        font-weight:300;
                        color:rgba(245,158,11,0.2);
                      `;

                      fallback.textContent =
                        firstName.charAt(0);

                      parent.appendChild(fallback);
                    }
                  }}
                />
              </motion.div>

              {/* Professional label */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={
                  visible
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: 0.9,
                }}
                className="absolute left-0 top-2 w-full text-center"
              >
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-teal">
                  Software Engineer · Entrepreneur
                </span>
              </motion.div>

              {/* Floating qualification badge */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={
                  visible
                    ? {
                        opacity: 1,
                        x: 0,
                        y: [0, -6, 0],
                      }
                    : {}
                }
                transition={{
                  opacity: {
                    duration: 0.6,
                    delay: 1,
                  },
                  x: {
                    duration: 0.6,
                    delay: 1,
                  },
                  y: {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.4,
                  },
                }}
                className="absolute bottom-4 right-0 z-20 rounded-xl p-3 shadow-2xl"
                style={{
                  background:
                    'rgba(11,17,32,0.95)',
                  border:
                    '1px solid rgba(245,158,11,0.25)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-teal"
                  />

                  <div>
                    <div className="font-sans text-[0.7rem] font-semibold text-cream">
                      MSc Software Engineering
                    </div>

                    <div className="font-mono text-[0.58rem] text-slate">
                      AASTU
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* SEED badge */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={
                  visible
                    ? {
                        opacity: 1,
                        x: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: 1.15,
                }}
                className="absolute bottom-24 left-0 z-20 rounded-xl p-3 shadow-2xl"
                style={{
                  background:
                    'rgba(11,17,32,0.95)',
                  border:
                    '1px solid rgba(245,158,11,0.25)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={14}
                    className="text-amber-400"
                  />

                  <div>
                    <div className="font-sans text-[0.7rem] font-semibold text-cream">
                      SEED Program Leader
                    </div>

                    <div className="font-mono text-[0.58rem] text-slate">
                      MasterCard Foundation
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {(stats || []).map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{
                    y: -4,
                  }}
                  className="card-base flex items-center gap-3 px-4 py-4"
                >
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
                    style={{
                      background:
                        'rgba(245,158,11,0.1)',
                    }}
                  >
                    <span className="font-mono text-sm font-bold text-teal">
                      #
                    </span>
                  </div>

                  <div>
                    <div className="font-display text-xl font-semibold text-amber-300">
                      {stat.num}
                    </div>

                    <div className="font-mono text-[0.58rem] uppercase tracking-wide text-slate">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            HIGHLIGHTS + CONTACT
        ========================================================= */}
        <div className="mt-24 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">

          {/* Highlights */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={
              visible
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <div className="mb-5">
              <div className="sec-label">
                What Defines Me
              </div>

              <h3 className="mt-2 font-display text-2xl font-semibold text-cream md:text-3xl">
                Technology with purpose.
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    whileHover={{
                      y: -4,
                      borderColor:
                        'rgba(245,158,11,0.3)',
                    }}
                    className="card-base flex gap-4 px-5 py-5 transition-all"
                  >
                    <div
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{
                        background: `${item.color}12`,
                      }}
                    >
                      <Icon
                        size={16}
                        style={{
                          color: item.color,
                        }}
                      />
                    </div>

                    <div>
                      <div className="mb-1 font-sans text-[0.8rem] font-semibold text-cream">
                        {item.label}
                      </div>

                      <div
                        className="font-mono text-[0.64rem] leading-relaxed"
                        style={{
                          color:
                            'rgba(148,163,184,0.72)',
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={
              visible
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
          >
            <div
              className="rounded-2xl border p-6"
              style={{
                background:
                  'rgba(245,158,11,0.035)',
                borderColor:
                  'rgba(245,158,11,0.15)',
              }}
            >
              <div className="mb-5">
                <div className="sec-label">
                  Contact Information
                </div>

                <h3 className="mt-2 font-display text-xl font-semibold text-cream">
                  Let's connect.
                </h3>
              </div>

              <div className="space-y-4">
                <ContactItem
                  icon={Mail}
                  label="Email"
                  value="temesgendbu@gmail.com"
                  href="mailto:temesgendbu@gmail.com"
                />

                <ContactItem
                  icon={Phone}
                  label="Phone"
                  value="+251 922 941 367"
                  href="tel:+251922941367"
                />

                <ContactItem
                  icon={MapPin}
                  label="Location"
                  value="Debre Berhan, Ethiopia"
                />

                <ContactItem
                  icon={Globe}
                  label="Languages"
                  value="Amharic (Native) · English (Professional)"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            SCROLL CUE
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            visible
              ? { opacity: 1 }
              : {}
          }
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
          >
            <ArrowDown
              size={14}
              className="text-teal"
            />
          </motion.div>

          <span className="font-mono text-[0.55rem] uppercase tracking-[0.3em] text-teal/50">
            Explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* ===============================================================
   ANIMATED PROFESSIONAL TITLE
================================================================ */
function AnimatedTitle({ titles, idx }) {
  if (!titles?.length) return null;

  return (
    <div className="relative h-8 overflow-hidden">
      {titles.map((title, index) => (
        <motion.div
          key={`${title}-${index}`}
          initial={{
            y: 30,
            opacity: 0,
          }}
          animate={
            index === idx
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {
                  y: -30,
                  opacity: 0,
                }
          }
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute font-sans text-[0.9rem] font-semibold uppercase tracking-[0.15em] text-teal"
        >
          {title}
        </motion.div>
      ))}
    </div>
  );
}

/* ===============================================================
   CONTACT ITEM
================================================================ */
function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
        style={{
          background:
            'rgba(245,158,11,0.1)',
        }}
      >
        <Icon
          size={14}
          className="text-teal"
        />
      </div>

      <div className="min-w-0">
        <div className="font-mono text-[0.55rem] uppercase tracking-widest text-teal/70">
          {label}
        </div>

        {href ? (
          <a
            href={href}
            className="break-all font-sans text-[0.75rem] text-slate-200 no-underline transition-colors hover:text-teal"
          >
            {value}
          </a>
        ) : (
          <span className="font-sans text-[0.75rem] text-slate-200">
            {value}
          </span>
        )}
      </div>
    </div>
  );
}