import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui';
import { TIDYCAL_URL } from '@/lib/constants';
import { trackFloatingCtaClick } from '@/lib/analytics';

/**
 * Floating CTA Button
 *
 * A fixed-position button that appears in the bottom-right corner
 * after the user scrolls past a certain threshold.
 * Hides when the footer becomes visible (footer has its own CTA).
 */
export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling 300px
      const scrollThreshold = 300;
      const shouldShow = window.scrollY > scrollThreshold;
      setIsVisible(shouldShow);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    trackFloatingCtaClick();
    window.open(TIDYCAL_URL, '_blank');
  };

  if (!isVisible || isFooterVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        variant="primary"
        size="lg"
        onClick={handleClick}
        className="animate-soft-glow hover:scale-105 transition-transform duration-300"
        aria-label="Gespräch vereinbaren"
      >
        <Calendar className="h-5 w-5 mr-2" />
        Gespräch vereinbaren
      </Button>
    </div>
  );
}

export default FloatingCTA;
