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
 * Includes a subtle pulse animation to draw attention.
 */
export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

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

  const handleClick = () => {
    trackFloatingCtaClick();
    window.open(TIDYCAL_URL, '_blank');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      {/* Subtle pulse ring animation */}
      <div className="absolute inset-0 rounded-full bg-primary opacity-20 animate-pulse" />

      {/* Button */}
      <Button
        variant="primary"
        size="lg"
        onClick={handleClick}
        className="relative shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="Discovery Call buchen"
      >
        <Calendar className="h-5 w-5 mr-2" />
        <span className="hidden sm:inline">Discovery Call</span>
        <span className="sm:hidden">Termin</span>
      </Button>
    </div>
  );
}

export default FloatingCTA;
