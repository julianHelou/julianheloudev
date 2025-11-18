# Background Colors, Shapes, and Animations

This document details the exact colors, shapes, and animations used in the background of the webpage's hero section.

## Section Background
- **Color**: Linear gradient from top to bottom (`bg-gradient-to-b`)
  - Start color: `gray-950` (#111827)
  - End color: `slate-900` (#0f172a)
- **CSS equivalent**: `background: linear-gradient(to bottom, #111827, #0f172a);`

## Animated Blob Elements

### 1. Top Left Blob
- **Position**: Absolute, 40px from top, 40px from left (`top-10 left-10`)
- **Size**: 288px x 288px (`w-72 h-72`)
- **Shape**: Circular (`rounded-full`)
- **Blur effect**: `blur-3xl` (equivalent to blur(64px) in CSS)
- **Color**: Diagonal gradient from top-right to bottom-left (`bg-gradient-to-br`)
  - Start color: `blue-400` (#60a5fa) at 20% opacity
  - End color: `purple-600` (#9333ea) at 20% opacity
- **Animation**: `animate-float1` (duration: 6 seconds)
  - Movement: Vertical translation between 0px and -20px
  - Timing function: `ease-in-out`
  - Iteration: Infinite

### 2. Bottom Right Blob
- **Position**: Absolute, 40px from bottom, 40px from right (`bottom-10 right-10`)
- **Size**: 384px x 384px (`w-96 h-96`)
- **Shape**: Circular (`rounded-full`)
- **Blur effect**: `blur-3xl` (equivalent to blur(64px) in CSS)
- **Color**: Diagonal gradient from top-right to bottom-left (`bg-gradient-to-br`)
  - Start color: `pink-400` (#f472b6) at 20% opacity
  - End color: `orange-600` (#ea580c) at 20% opacity
- **Animation**: `animate-float2` (duration: 8 seconds)
  - Movement: Vertical translation between 0px and -30px
  - Timing function: `ease-in-out`
  - Iteration: Infinite

### 3. Center Left Blob
- **Position**: Absolute, 50% from top, 25% from left (`top-1/2 left-1/4`)
- **Size**: 256px x 256px (`w-64 h-64`)
- **Shape**: Circular (`rounded-full`)
- **Blur effect**: `blur-3xl` (equivalent to blur(64px) in CSS)
- **Color**: Diagonal gradient from top-right to bottom-left (`bg-gradient-to-br`)
  - Start color: `cyan-400` (#22d3ee) at 20% opacity
  - End color: `teal-600` (#0d9488) at 20% opacity
- **Animation**: `animate-float3` (duration: 7 seconds)
  - Movement: Vertical translation between 0px and -15px
  - Timing function: `ease-in-out`
  - Iteration: Infinite

## Animation Details (from animations.css)

```css
@keyframes float1 {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes float2 {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-30px); }
}

@keyframes float3 {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}
```

## Notes
- All elements are positioned absolutely within the relatively positioned hero section
- The blobs are designed to be semi-transparent (20% opacity) to create subtle background effects
- Animations run infinitely and are staggered to create a natural floating effect
- The section uses `overflow-hidden` to contain any elements that might extend beyond boundaries
