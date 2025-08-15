# Check Page - Spotlight Animation

This page demonstrates a sophisticated GSAP-powered spotlight animation that showcases Himalayan destinations with smooth scroll-triggered animations.

## Features

- **Custom GSAP Hook**: Uses `useSpotlightAnimation` hook for clean separation of concerns
- **Tailwind CSS**: Modern styling with responsive design
- **Scroll-Triggered Animations**: Smooth animations based on scroll position
- **Dynamic Content**: Titles and images are dynamically generated and animated
- **Responsive Design**: Mobile-optimized with fallbacks

## Structure

### Components
- **Intro Section**: Hero text introducing the Himalayas
- **Spotlight Section**: Main animation area with:
  - Intro text overlay ("Beneath" / "Beyond")
  - Background image that scales on scroll
  - Dynamic title list that scrolls vertically
  - Floating images that follow a bezier curve path
  - Header text that fades in/out
- **Outro Section**: Closing text

### Files
- `page.tsx` - Main page component using Tailwind CSS
- `useSpotlightAnimation.ts` - Custom hook for GSAP animations
- `spotlightAnimation.ts` - GSAP animation logic
- Styles are in `app/globals.css`

## Usage

The page automatically initializes when loaded. The animation includes:

1. **Intro Phase** (0-20% scroll): Text slides apart, background scales up
2. **Transition Phase** (20-25% scroll): Elements fade in/out
3. **Main Animation** (25-95% scroll): Titles scroll, images follow curved paths
4. **Outro Phase** (95-100% scroll): Elements fade out

## Dependencies

- GSAP (with ScrollTrigger plugin)
- Lenis (smooth scrolling)
- Tailwind CSS
- React hooks

## Customization

To modify the animation:
1. Update `spotlightItems` array in `spotlightAnimation.ts`
2. Adjust timing values in the `config` object
3. Modify CSS variables in `globals.css`
4. Update Tailwind classes in `page.tsx`
