/**
 * Hero entrance animations — GSAP scramble + stagger.
 * Falls back to instant reveal when reduced-motion is active.
 */
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

export function initHeroAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const name    = document.getElementById('hero-name');
  const role    = document.getElementById('hero-role');
  const tagline = document.getElementById('hero-tagline');

  if (!name || !role || !tagline) return;

  const nameText    = name.textContent ?? '';
  const roleText    = role.textContent ?? '';
  const taglineText = tagline.textContent ?? '';

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
  const scramble = (el: HTMLElement, finalText: string, delay: number) => {
    let iterations = 0;
    const total = finalText.length * 3;
    gsap.set(el, { opacity: 1 });
    const interval = setInterval(() => {
      el.textContent = finalText
        .split('')
        .map((ch, i) => {
          if (i < iterations / 3) return ch;
          return ch === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      if (iterations >= total) {
        el.textContent = finalText;
        clearInterval(interval);
      }
      iterations++;
    }, 30);
  };

  gsap.set([name, role, tagline], { opacity: 0 });

  setTimeout(() => scramble(name, nameText, 0), 300);
  setTimeout(() => scramble(role, roleText, 0), 900);

  gsap.to(tagline, { opacity: 1, duration: 1.2, delay: 1.6, ease: 'power2.out' });
  gsap.from('.magnetic-btn', {
    opacity: 0,
    y: 20,
    stagger: 0.15,
    duration: 0.8,
    delay: 2.2,
    ease: 'power3.out',
  });
}
