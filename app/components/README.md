# Loading System Components

This directory contains the professional loading system components for the travel tour website.

## Components

### LoadingScreen
A reusable loading screen component that displays an animated loading sequence with counters and progress bars.

**Props:**
- `onComplete?: () => void` - Callback function called when loading animation completes
- `showProgress?: boolean` - Whether to show the progress percentage (default: true)
- `className?: string` - Additional CSS classes

**Usage:**
```tsx
import LoadingScreen from "../components/LoadingScreen";

function MyComponent() {
  return (
    <LoadingScreen 
      showProgress={true}
      onComplete={() => console.log("Loading complete!")}
    />
  );
}
```

## Hooks

### useLoadingAnimation
Custom hook that manages the GSAP loading animations and provides refs for DOM elements.

**Returns:**
- `refs` - Object containing React refs for all loading elements
- `loadingState` - Current loading state (isLoading, isComplete, progress)
- `areRefsReady` - Function to check if all refs are available

**Usage:**
```tsx
import { useLoadingAnimation } from "../hooks/useLoadingAnimation";

function MyComponent() {
  const { refs, loadingState, areRefsReady } = useLoadingAnimation();
  
  // Use refs to attach to DOM elements
  return (
    <div ref={refs.loadingScreen}>
      {/* Loading content */}
    </div>
  );
}
```

## Animation Functions

### runLoadingAnimation
Core animation function that orchestrates the GSAP loading sequence.

**Parameters:**
- `elements` - Object containing DOM elements for animations
- `setLoadingState` - Function to update loading state

**Features:**
- Counter animations with staggered timing
- Progress bar animations
- Smooth transitions and easing
- Cleanup function for proper memory management

## Styling

The loading system uses Tailwind CSS for most styling with minimal custom CSS for specific animation requirements. Custom styles are added to `globals.css` for:

- Counter positioning and offsets
- Clip-path animations
- Height calculations for GSAP

## Architecture

The loading system follows the same pattern as the navigation system:

1. **Custom Hook** (`useLoadingAnimation`) - Manages state and refs
2. **Animation Function** (`runLoadingAnimation`) - Handles GSAP animations
3. **Component** (`LoadingScreen`) - Renders the UI
4. **Page** (`app/loading/page.tsx`) - Uses the component

This architecture provides:
- Clean separation of concerns
- Reusable components
- Type safety with TypeScript
- Professional code structure
- Easy testing and maintenance
