# RoohVeda Website TODOs

## 🔴 High Priority

### Form Submission Setup
- [ ] **Set up Formspree account**
  - Go to https://formspree.io and create free account
  - Verify email
  - Reference: [SETUP_FORMSPREE.md](SETUP_FORMSPREE.md)

- [ ] **Create Contact Form in Formspree**
  - Name: `Contact Form`
  - Email: `roohvedalife@gmail.com`
  - Copy form ID (e.g., `f_abc123xyz`)
  - Update [contact.html](contact.html#L54) - replace `YOUR_CONTACT_FORM_ID` with actual ID

- [ ] **Create Newsletter Form in Formspree**
  - Name: `Newsletter Subscription`
  - Email: `roohvedalife@gmail.com`
  - Copy form ID
  - Update in all files (replace `YOUR_NEWSLETTER_FORM_ID`):
    - [index.html](index.html#L130)
    - [about.html](about.html#L135)
    - [courses.html](courses.html#L128)
    - [resources.html](resources.html#L170)

- [ ] **Test form submissions**
  - Fill out contact form and submit
  - Fill out newsletter form and submit
  - Verify emails arrive at roohvedalife@gmail.com
  - Check for success message display

---

## 🟡 Medium Priority

### Pricing & Services
- [ ] Add pricing/rates section to [courses.html](courses.html)
  - Show costs for 1:1 consults (first session vs follow-ups)
  - Show retreat pricing
  - Show community program costs

### Blog/Resource Content
- [ ] Create actual blog post pages for "Teachings" section in [resources.html](resources.html)
  - "Nervous System Healing: Science & Spirit"
  - "Invisible Wounds: Understanding Your Hidden Struggles"
  - "Body-Mind-Soul Integration: A Holistic Path"

### Booking Integration
- [ ] Integrate Calendly or similar for 1:1 consult bookings
  - Add booking button on [courses.html](courses.html)
  - Embed calendar widget

---

## 🟢 Low Priority / Nice-to-Have

### Social Links
- [ ] Add WhatsApp, Instagram, LinkedIn buttons to header/footer
- [ ] Add floating WhatsApp contact button

### SEO Enhancements
- [ ] Add JSON-LD schema markup for local business
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics

### FAQ Expansion
- [ ] Complete FAQ section on [contact.html](contact.html)
  - Services FAQs
  - Pricing FAQs
  - Program details

### Additional Pages
- [ ] Create Terms & Conditions page
- [ ] Create Privacy Policy page
- [ ] Update footer links

---

## ✅ Completed

- [x] Mobile hamburger menu
- [x] Testimonials section
- [x] Meta descriptions for SEO
- [x] Formspree form integration (code template)
- [x] Form submission feedback handlers

---

## Notes

- **Formspree Free Tier**: 50 submissions/month (suitable for current volume)
- **Upgrade Path**: Pro plan ($25+/month) if submissions exceed 50/month
- All form IDs are placeholders - must be replaced with actual Formspree IDs before forms work
