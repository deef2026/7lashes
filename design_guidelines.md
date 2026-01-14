# Design Guidelines for 7 Lashes Salon Protocol Management System

## Design Approach

**Hybrid Approach**: Combining luxury beauty brand aesthetics (inspired by high-end beauty platforms) with professional management tool clarity (inspired by Linear/Notion for the settings interface).

**Core Principle**: Elegant simplicity meets functional professionalism - creating a tool that feels luxurious yet efficient for daily salon operations.

## Typography System

**Arabic Primary Font**: Tajawal (Google Fonts) - clean, modern Arabic typeface
- Headings: Tajawal Bold (text-2xl to text-4xl)
- Body: Tajawal Regular (text-base to text-lg)
- Labels: Tajawal Medium (text-sm)

**Hierarchy**:
- Logo/Brand: text-3xl font-bold
- Page Titles: text-2xl font-bold
- Section Headers: text-xl font-semibold
- Card Titles: text-lg font-medium
- Body Text: text-base font-normal
- Helper Text: text-sm font-normal

## Layout System

**RTL Configuration**: All layouts flow right-to-left with Arabic text alignment

**Spacing Scale**: Use Tailwind units consistently
- Micro spacing: 2, 3, 4 (p-2, gap-3, m-4)
- Standard spacing: 6, 8 (p-6, mb-8)
- Section spacing: 12, 16 (py-12, gap-16)
- Large spacing: 20, 24 (pb-20, mt-24)

**Container Structure**:
- Maximum width: max-w-7xl for full sections
- Content width: max-w-4xl for text-heavy areas
- Centered layouts: mx-auto with proper padding (px-6 md:px-8)

## Component Library

### Header
- Sticky positioned (sticky top-0)
- Clean white background with subtle shadow
- Logo positioned right (RTL)
- Settings icon button positioned left
- Height: h-16
- Padding: px-8

### Selection Cards (Session Types & Skin Types)

**Card Structure**:
- Grid layout: grid-cols-1 md:grid-cols-3 gap-6 (for 3 session types)
- Grid layout: grid-cols-2 md:grid-cols-5 gap-4 (for 5 skin types)
- Padding: p-6
- Border radius: rounded-xl
- Border: border-2 with hover and selected states
- Transition: transition-all duration-200

**Icon Placement**:
- Large icons (w-16 h-16) centered above text
- Use Lucide React icons with appropriate thematic choices
- Icon styling: stroke-width of 1.5 for elegance

**Card States**:
- Default: border-gray-200 with white background
- Hover: border-rose-200 with subtle scale (scale-105)
- Selected: border-rose-400 with rose-50 background and shadow-lg

### Results Display Section

**Three-Column Layout** (on desktop):
- Grid: grid-cols-1 lg:grid-cols-3 gap-8
- Each column contains one of: Protocol, Materials, Care Instructions
- Each as a card with rounded-lg, border, p-6, min-h-64

**Card Headers**:
- Icon + Title combination
- Border-bottom separator
- Margin-bottom: mb-4

### Print Button
- Prominent positioning at bottom of results
- Size: Large (px-8 py-4)
- Icon: Printer icon from Lucide
- Full width on mobile, auto width on desktop

### Settings Page - Tabs Component

**Tab Navigation**:
- Horizontal scrolling on mobile
- Border-bottom separator
- Active tab: border-b-2 with accent color
- Spacing: gap-8 between tabs

**Data Tables**:
- Responsive table with alternating row backgrounds
- Headers: font-semibold with border-b-2
- Row padding: py-4 px-6
- Action buttons column: aligned left (RTL)
- Hover state on rows: subtle background change

**Modal Forms**:
- Centered overlay with backdrop blur
- Max width: max-w-2xl
- Padding: p-8
- Rounded: rounded-2xl
- Shadow: shadow-2xl

**Form Inputs**:
- Border: border-2
- Padding: px-4 py-3
- Rounded: rounded-lg
- Focus state: ring-2 ring-offset-2
- Labels: text-sm font-medium mb-2

**Action Buttons**:
- Primary (Add/Save): Rose/pink tones
- Secondary (Cancel): Gray tones
- Danger (Delete): Red tones with confirmation
- Spacing: gap-3 between buttons
- Padding: px-6 py-2.5

## Animation Guidelines

**Minimal, Purposeful Animations**:
- Card hover: transform scale (scale-105) with 200ms transition
- Modal entry: fade-in with slide-up (from opacity-0 translate-y-4)
- Tab switching: crossfade (200ms)
- Button clicks: subtle scale-down (scale-95) on active state
- Loading states: simple spinner, no elaborate animations

## Images

**Logo Placement**:
- Header: Professional salon logo (can be text-based with elegant styling if no image provided)
- Print reports: Smaller version of logo in header

**No Hero Images**: This is a functional dashboard application, not a marketing site. Focus remains on the interactive cards and data display.

**Material Images** (optional in CRUD):
- Small thumbnails in materials table (w-12 h-12 rounded)
- Placeholder if no image provided

## Accessibility

- All interactive cards: proper focus states with ring-2
- Form inputs: clear labels and error states
- High contrast text throughout
- Keyboard navigation for all interactions
- Screen reader friendly Arabic labels (aria-label)

## Print Stylesheet

**Report Layout**:
- Clean white background
- Logo at top center
- Date and salon name prominently displayed
- Clear section divisions with subtle borders
- Readable font sizes (slightly larger than screen)
- No interactive elements visible
- A4 page size optimization