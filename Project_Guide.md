# Farmhouse Website Demo — Project Brief & Implementation Guide

> **Project status:** Concept/demo planning  
> **Primary objective:** Impress a prospective client and win the website project  
> **Working concept name:** *Beyond the Ordinary*  
> **Business type:** Farmhouse / private villa / leisure retreat  
> **Visual direction:** Cinematic luxury, dark and immersive, with restrained 3D and smooth motion  
> **Assets currently available:** No client-specific photos, logo, or 3D model; use temporary, appropriately licensed assets  
> **Important:** The concept name, amenities, copy, and visuals are provisional. Confirm all business facts with the client before production launch.

---

## 1. Project overview

Create a premium, visually memorable landing page for a farmhouse property featuring a villa, swimming pool, children's garden/play area, cricket turf, and other facilities confirmed by the client.

The website should make visitors imagine spending time at the property while helping them understand its facilities and submit a booking inquiry.

This first version is a **sales demo**, not yet a fully verified production website. It should demonstrate visual quality, interaction design, responsiveness, and a credible inquiry journey. Avoid spending time on complex backend functionality before the client approves the design direction.

### Core goals

1. Create a striking first impression within the first few seconds.
2. Present the farmhouse as a premium destination rather than a generic rental listing.
3. Use purposeful motion and one signature 3D interaction.
4. Make facilities easy to explore on desktop and mobile.
5. Give visitors an obvious way to inquire about availability.
6. Make the demo easy to rebrand with the client's real name, photography, logo, and details.

### Success criteria for the demo

- The hero looks polished and compelling on first load.
- Typography, spacing, color, and imagery feel consistent.
- Animation is smooth, restrained, and purposeful.
- The page works on common desktop and mobile viewport sizes.
- The inquiry action is obvious and usable.
- Placeholder assets and claims are not presented as verified facts.
- The page remains usable if WebGL or heavy motion is unavailable.

---

## 2. Audience and positioning

### Potential audience

Subject to the client's actual business model, the site may appeal to:

- Families looking for a private getaway.
- Groups of friends planning a day outing or overnight stay.
- Guests interested in poolside relaxation and outdoor activities.
- People arranging birthdays, celebrations, or private events, if permitted.
- Sports and recreation groups interested in cricket turf, if available for booking.

### Brand positioning

**Desired feeling:** Private, calm, exclusive, natural, cinematic, memorable.

**Working headline:**
> Escape the ordinary. Experience something extraordinary.

**Supporting copy:**
> A private world of open skies, tranquil waters, lush gardens, and unforgettable moments.

This is concept copy, not an approved client claim. Replace it once the business name, location, target audience, and actual services are known.

### Tone of voice

- Elegant, warm, confident, and inviting.
- Short headlines with descriptive but concise supporting copy.
- Avoid exaggerated claims such as “India's best” or “five-star” unless substantiated.
- Do not invent guest reviews, prices, capacity, awards, or availability.

---

## 3. Visual design system

### Color palette

| Role | Suggested color | Hex |
|---|---|---|
| Main background | Near-black forest | `#101713` |
| Secondary background | Deep charcoal green | `#18221C` |
| Primary accent | Champagne gold | `#D8C19A` |
| Main text | Warm ivory | `#F5F0E7` |
| Secondary text | Muted sage-gray | `#B9C2B8` |
| Borders | Low-contrast sage | `#3A493E` |
| Light section (optional) | Warm stone | `#E8E1D5` |

Use champagne gold as an accent, not as the dominant text color. Keep contrast accessible.

### Typography

Suggested pairing:
- **Display serif:** Cormorant Garamond, Playfair Display, or another well-licensed editorial serif.
- **Body sans-serif:** Inter, Manrope, or a similar clean sans-serif.

Typography guidelines:
- Use large editorial headlines and generous line height.
- Keep body text readable and line lengths controlled.
- Use uppercase micro-labels sparingly.
- Avoid using too many font families or weights.

### Layout and styling

- Full-bleed photography in the hero and selected feature sections.
- Wide margins and deliberate negative space.
- Rounded corners used selectively; avoid making every component a card.
- Fine borders, subtle gradients, soft shadows, and restrained glass effects.
- Use consistent spacing tokens rather than arbitrary values.
- Design mobile layouts intentionally rather than merely shrinking desktop layouts.

### Imagery direction

Use temporary images depicting:
- A modern luxury villa surrounded by greenery.
- A private swimming pool at twilight or golden hour.
- Landscaped lawns and gardens.
- Outdoor seating and dining.
- A cricket practice turf.
- Children's outdoor play facilities, if appropriate.

Prefer high-quality, relevant images from sources with clear licensing or use generated concept visuals. Keep an asset/source record. Do not imply that stock or generated visuals depict the actual client's property. Replace them with client-approved photographs before launch.

---

## 4. Site map and page sections

The first release is a single-page landing site with anchor navigation.

### Section 1 — Cinematic hero

**Purpose:** Create an immediate premium impression and invite exploration.

**Content:**
- Temporary wordmark or approved business name.
- Navigation: Discover, Experiences, Gallery, Contact.
- Main headline: “Escape the ordinary.”
- Supporting line about the property experience.
- Primary CTA: “Explore the Estate”.
- Secondary CTA: “Enquire Now”.
- Scroll indicator and subtle location/experience label, only when known.

**Motion:**
- Slow background scale or camera-like movement.
- Staggered headline reveal.
- Subtle parallax or layered depth.
- CTA hover transition.
- Smooth transition into the next section.

**Implementation note:** Start with optimized photography/video and layered motion. Do not make the whole first screen depend on a complex 3D model.

### Section 2 — Estate introduction

**Purpose:** Explain the overall experience.

**Content:**
- Short introduction.
- One large editorial image and optional supporting image.
- Three or four verified highlights, such as pool, gardens, outdoor activities, and accommodation.

**Motion:**
- Image mask or reveal.
- Fade/slide-in text.
- Small, low-amplitude parallax where it helps composition.

### Section 3 — Signature 3D experience

**Purpose:** Provide one memorable interaction that distinguishes the demo.

**Preferred approach:** A lightweight 3D villa/estate model if a suitable licensed model is available.

**Potential interactions:**
- A controlled camera move from an elevated overview toward the villa and pool.
- Clickable markers for confirmed facilities.
- Smooth transition between a few curated viewpoints.
- Brief labels that link to the relevant page sections.

**Fallback approach:** A cinematic 2.5D scene using layered imagery, depth, lighting overlays, and carefully controlled movement.

**Constraints:**
- Do not attempt a huge, fully explorable world in the initial demo.
- Avoid a long loading screen.
- Keep controls discoverable and optional.
- Provide a static image fallback.
- Respect reduced-motion preferences.
- Test GPU load, mobile performance, and WebGL availability.
- Only show facilities that exist in the real property once confirmed.

### Section 4 — Amenities and facilities

**Purpose:** Make the property's offering easy to scan.

Potential items (verify with the client):
1. Villa and accommodation.
2. Swimming pool.
3. Garden and children's play area.
4. Cricket turf.
5. Outdoor seating/dining.
6. Other activities or facilities the client confirms.

Each item should have:
- Image.
- Short title.
- One-sentence description.
- Optional “Explore” interaction.

**Motion:**
- Staggered entrance as the section enters the viewport.
- Subtle image scale or depth on hover.
- Do not use large motion on every card simultaneously.

### Section 5 — Gallery

**Purpose:** Build visual interest and let the visitor inspect the setting.

**Content:**
- Editorial image grid or asymmetric collage.
- Optional lightbox with next/previous controls.
- Clear alt text for meaningful images.

**Demo note:** Use temporary assets with an internal note that they must be replaced before production.

### Section 6 — Experiences / occasions

**Purpose:** Help visitors picture how they might use the property.

Potential use cases, only if the client offers them:
- Family day out.
- Group getaway.
- Birthday or celebration.
- Outdoor recreation.
- Private gathering.

Avoid promising overnight stays, catering, event hosting, or any service that has not been confirmed.

### Section 7 — Booking inquiry CTA

**Purpose:** Convert interest into a direct inquiry.

Suggested headline:
> Your next escape starts here.

Potential form fields:
- Name.
- Phone number or preferred contact method.
- Preferred date.
- Number of guests.
- Message or occasion (optional).

Buttons:
- “Send Enquiry”.
- Optional WhatsApp or phone action, using client-provided contact details.

For the demo, the form may use client-side validation and a clearly identified demo success state. Do not claim the request was delivered if there is no real backend or messaging integration.

### Section 8 — Footer

Include only verified details:
- Business name.
- Address or location.
- Contact number and email.
- Social links.
- Map/directions link.
- Privacy notice if personal data is collected.
- Copyright line.

---

## 5. Animation and interaction principles

The design should feel cinematic, not exhausting.

### Recommended animation hierarchy

**Tier 1 — Core motion**
- Hero headline reveal.
- Smooth anchor navigation.
- Section reveal transitions.
- CTA hover and focus states.
- Gallery interactions.

**Tier 2 — Signature motion**
- One scroll-linked camera sequence or 3D reveal.
- Optional interactive facility hotspots.
- A carefully controlled transition between hero and estate introduction.

**Tier 3 — Optional polish**
- Very subtle grain or light overlays.
- Low-amplitude background parallax.
- Tiny decorative motion on selected elements.

### Motion rules

- Prefer opacity and transform animations over expensive layout changes.
- Avoid excessive cursor-follow effects, rapid zooms, constant floating objects, or unnecessary custom cursors.
- Do not hijack scrolling or trap visitors in a long animation sequence.
- Ensure navigation and CTAs work without animation.
- Use `prefers-reduced-motion` support.
- Keep mobile animation lighter.
- Check text contrast over all imagery.
- Test interactions with keyboard and touch input.

### Suggested tools

- **Framer Motion:** most component and UI animation.
- **Three.js / React Three Fiber:** the 3D centerpiece.
- **Drei:** useful helpers for React Three Fiber.
- **GSAP + ScrollTrigger:** optional, only if a complex scroll sequence truly needs it.
- **Lucide React:** interface icons.

Avoid using several animation libraries for the same effect.

---

## 6. Technology stack

| Area | Choice | Reason |
|---|---|---|
| Frontend | React + Vite | Fast development and reusable components |
| Styling | Tailwind CSS | Consistent responsive styling |
| UI animation | Framer Motion | Component transitions and reveal effects |
| 3D | Three.js + React Three Fiber | Interactive WebGL scene in React |
| 3D helpers | Drei | Common scene utilities and controls |
| Advanced scroll animation | GSAP + ScrollTrigger (optional) | Complex, timeline-based sequences |
| Icons | Lucide React | Consistent lightweight icons |
| Hosting | Vercel | Convenient preview and deployment workflow |
| Inquiry delivery | WhatsApp link or form service/backend | Choose based on client requirements |

### Dependency discipline

Use only what the demo needs. Start with React, Vite, Tailwind, Framer Motion, and Lucide React. Add React Three Fiber and Drei when implementing the 3D section. Add GSAP only if required.

Do not add a database or authentication system for a one-page concept demo unless the client explicitly requests those features.

---

## 7. Suggested project structure

```text
farmhouse-demo/
├── public/
│   ├── images/
│   ├── videos/
│   └── models/
│       └── villa.glb
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── EstateIntro.jsx
│   │   ├── VillaScene.jsx
│   │   ├── Amenities.jsx
│   │   ├── Gallery.jsx
│   │   ├── Experiences.jsx
│   │   ├── BookingForm.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── propertyContent.js
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

Keep the property content in a data file so the name, amenities, images, CTA labels, and contact information can be changed without rewriting components.

The 3D component should load lazily where practical and have a clear fallback state.

---

## 8. Implementation roadmap

Estimates below are indicative for a first demo and may change depending on the availability and quality of visual assets.

### Phase 1 — Foundation (2–3 hours)
- Initialize React + Vite.
- Configure Tailwind CSS and global styles.
- Install icons and Framer Motion.
- Establish typography, color tokens, spacing, and navigation.
- Create the page sections and responsive layout skeleton.

**Deliverable:** A consistent, responsive page structure.

### Phase 2 — Visual landing page (3–5 hours)
- Add temporary licensed images.
- Implement hero, introduction, amenities, gallery, experiences, inquiry, and footer.
- Add section transitions and headline reveals.
- Tune spacing and hierarchy.

**Deliverable:** A compelling page before 3D is introduced.

### Phase 3 — Signature 3D scene (4–8 hours or more)
- Choose a suitable licensed GLB/GLTF model or build the 2.5D alternative.
- Configure camera, lights, environment, and model scale.
- Implement the curated camera sequence and optional hotspots.
- Add loading and fallback states.
- Test performance on mobile and lower-powered devices.

**Deliverable:** One memorable, controlled 3D experience.

### Phase 4 — Inquiry interactions (2–4 hours)
- Build and validate the inquiry form.
- Add a demo confirmation state or connect an agreed delivery method.
- Add verified phone/WhatsApp links if provided.
- Ensure all CTAs and navigation links work.

**Deliverable:** A usable inquiry journey.

### Phase 5 — QA and presentation (2–3 hours)
- Test responsive breakpoints.
- Optimize images and 3D assets.
- Check accessibility and reduced-motion support.
- Verify loading and fallback behavior.
- Deploy a preview URL.
- Prepare a short client walkthrough.

**Deliverable:** A polished client-facing concept demo.

**Indicative total:** Around 13–23 hours, excluding significant custom 3D modeling, extensive revisions, backend integrations, and content collection.

---

## 9. Performance and asset optimization

3D should improve the experience without making the website slow.

### Images and video
- Prefer WebP/AVIF for raster images when supported by the workflow.
- Use responsive image sizes and lazy-load below-the-fold media.
- Avoid enormous hero files.
- Compress video and use a poster image.
- Specify image dimensions to reduce layout shift.

### 3D
- Use an optimized GLB/GLTF model.
- Remove unnecessary geometry, materials, and hidden objects.
- Compress textures and geometry where appropriate.
- Limit real-time lights, shadows, particles, and post-processing.
- Avoid unnecessarily high device pixel ratios.
- Lazy-load the scene if it is not immediately needed.
- Display a high-quality image while the 3D model loads.
- Stop or reduce animation when the scene is off-screen where feasible.

### Resilience
- The website should still communicate the property and allow inquiries if 3D fails.
- Avoid forcing visitors to wait for the 3D scene before they can use navigation.
- Provide reduced-motion behavior and a non-WebGL fallback.

---

## 10. Responsive and accessibility requirements

Test at minimum:
- Mobile: approximately 360–430 px wide.
- Tablet: approximately 768–1024 px wide.
- Desktop: approximately 1280–1440 px wide.
- Large desktop: approximately 1600 px and above.

Checklist:
- No horizontal overflow.
- Navigation works with touch and keyboard.
- Buttons have clear focus states.
- Form controls have labels and useful validation messages.
- Images have appropriate alt text.
- Text has sufficient contrast.
- Motion respects reduced-motion preferences.
- Interactive 3D controls do not block normal page scrolling.
- Important information is not available only through hover.
- The booking CTA remains easy to find on mobile.

---

## 11. Inquiry form and privacy

### Demo mode
- Validate required fields in the browser.
- Show a clear “Demo only — enquiry not sent” message if the form is not connected.
- Do not collect or retain personal information unnecessarily.
- Use test values during client presentation.

### Production mode
Before launch, agree with the client on:
- Where enquiries should be delivered.
- Whether WhatsApp, email, a form service, or a backend is preferred.
- Required fields and data retention.
- Spam protection and validation.
- Privacy notice and consent requirements where applicable.
- Who receives and responds to enquiries.

Do not add a fake booking calendar, fake availability, payment processing, or a success message implying real delivery without a working integration.

---

## 12. Content and assets to request from the client

The following information is needed before production launch.

### Brand and identity
- Official business/property name.
- Logo and any brand guidelines.
- Preferred language(s).
- Brand colors, if already established.

### Property details
- Exact location and map link.
- Confirmed amenities.
- Guest capacity.
- Day-use versus overnight offering.
- Operating hours or check-in/check-out details, if relevant.
- Rules, restrictions, and safety information.
- Pricing and packages, if the client wants them displayed.

### Contact and conversion
- Contact number.
- WhatsApp number.
- Email address.
- Social media links.
- Preferred enquiry destination.
- Booking process and response expectations.

### Visual assets
- Exterior and interior photographs.
- Pool, lawn, garden, and turf photos.
- Short video or drone footage, if available.
- Approved guest/event photos and consent where required.
- Existing 3D/architectural model, if any.
- Permission to use all supplied assets.

### Trust content
- Real reviews with permission.
- Genuine testimonials or partner logos.
- Verified policies and business claims.

---

## 13. Demo versus production scope

| Feature | Demo | Production |
|---|---|---|
| Brand | Temporary concept identity | Client-approved identity |
| Photos | Licensed/generative placeholders | Actual approved property media |
| Amenities | Provisional examples | Verified facilities only |
| 3D | One showcase scene or 2.5D fallback | Final optimized model and interactions |
| Inquiry form | Demo validation and clear test status | Connected delivery and spam protection |
| Booking | Inquiry CTA only | Actual workflow if requested |
| Reviews | Omit or use clearly labeled sample placeholders | Genuine approved reviews |
| Analytics | Optional, usually omit initially | Add only with client agreement |
| SEO | Basic page metadata | Final local SEO, structured data, content |
| Privacy | Do not collect real test data | Appropriate policy and data handling |
| Deployment | Preview URL | Client-approved production domain |

---

## 14. Client presentation strategy

The purpose of the demo is to sell the direction, not to pretend that all production details are complete.

### Suggested walkthrough
1. Open the page at full screen and let the hero animation play.
2. Show the visual identity and headline.
3. Scroll slowly through the estate introduction.
4. Demonstrate the signature 3D interaction.
5. Explore the amenities and gallery.
6. Finish at the inquiry CTA.
7. Explain how the real property photos and branding will replace placeholders.
8. Discuss the production scope, booking workflow, and any future integrations.

### What to emphasize
- The site is designed around the experience of the property.
- The animation is purposeful rather than decorative.
- The design adapts to mobile devices.
- The page is structured to encourage enquiries.
- Final details will be customized around the client's real property and brand.

### Avoid promising prematurely
- A complete digital twin of the property.
- Guaranteed bookings or conversion increases.
- Real-time availability without an integrated booking system.
- Custom 3D modeling until asset requirements and scope are known.
- Final delivery dates before the client confirms content and features.

---

## 15. Definition of done for the first demo

- [ ] Hero section is polished and readable.
- [ ] Navigation and section links work.
- [ ] All planned page sections are present.
- [ ] Temporary assets have been checked for relevance and licensing.
- [ ] The signature 3D scene works, or the 2.5D fallback is ready.
- [ ] The page remains usable if 3D is unavailable.
- [ ] Amenities are presented as provisional until verified.
- [ ] Inquiry form validates inputs and accurately reports demo status.
- [ ] Desktop and mobile layouts have been tested.
- [ ] Reduced-motion behavior is supported.
- [ ] Images and models are optimized.
- [ ] No fake reviews, fake availability, or unsupported claims are shown.
- [ ] A preview deployment is available for the client.
- [ ] A list of required client assets and open decisions is ready.

---

## 16. Open decisions

Resolve these with the client before finalizing production scope:

1. What is the official property/business name?
2. Where is the property located?
3. Which facilities are definitely available?
4. Is the property for day outings, overnight stays, events, or some combination?
5. What is the preferred enquiry channel?
6. Does the client have professional photos, video, or a 3D model?
7. Is a booking engine required, or is a simple enquiry flow sufficient?
8. Which domain and hosting account will be used?
9. What languages should the site support?
10. What is the budget and expected delivery date?

---

## 17. Immediate next steps

1. Create the React + Vite project.
2. Establish the dark luxury design tokens and typography.
3. Build the responsive hero and core page sections using temporary assets.
4. Make the page feel excellent without 3D.
5. Add the signature 3D scene or 2.5D alternative.
6. Add the inquiry form and clear demo behavior.
7. Test, optimize, and deploy a preview.
8. Present the concept and collect client feedback.
9. Replace placeholders and finalize requirements before production work.

**Guiding principle:** Build a beautiful, fast, convincing experience first. Use 3D as the signature moment—not as a substitute for strong design, clear content, and an easy inquiry journey.
