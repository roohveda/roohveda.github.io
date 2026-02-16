# Formspree Setup Guide

This site uses **Formspree** for form handling. Follow these steps to enable email submissions:

## Step 1: Create a Free Formspree Account
1. Go to https://formspree.io
2. Sign up with your email (you can use roohvedalife@gmail.com or any email you manage)
3. Verify your account via the confirmation email

## Step 2: Create Two Forms
You need to create two forms in Formspree:

### Form 1: Contact Form
1. In Formspree dashboard, click "New Form"
2. Name it: `Contact Form`
3. Set email to: `roohvedalife@gmail.com` (or your preferred email)
4. Copy the form ID (it will be like `f_abc123xyz`)
5. Replace `YOUR_CONTACT_FORM_ID` in [contact.html](contact.html) line 54 with your actual form ID

### Form 2: Newsletter Subscription
1. Create another form named: `Newsletter Subscription`
2. Set email to: `roohvedalife@gmail.com`
3. Copy the form ID
4. Replace `YOUR_NEWSLETTER_FORM_ID` in all files with this ID:
   - [index.html](index.html) line 130
   - [about.html](about.html) line 135
   - [courses.html](courses.html) line 128
   - [resources.html](resources.html) line 170

## Step 3: Update the HTML Files
Replace `YOUR_CONTACT_FORM_ID` and `YOUR_NEWSLETTER_FORM_ID` with your actual Formspree form IDs.

Example: If your contact form ID is `f_abc123xyz`, change:
```html
<form action="https://formspree.io/f/YOUR_CONTACT_FORM_ID"...>
```
to:
```html
<form action="https://formspree.io/f/f_abc123xyz"...>
```

## Step 4: Test the Forms
1. Fill out a form on your site
2. Click submit
3. Check the email you configured in Formspree
4. You should receive a submission notification

## Features Included
✅ Form validation (required fields)
✅ Success/error message feedback to users
✅ Disabled submit button while sending
✅ Anti-spam protection (via Formspree)
✅ Email notifications for each submission

## Formspree Pricing
- **Free Tier**: 50 submissions/month (perfect for starting out)
- **Pro**: $25+/month for unlimited submissions
- You can upgrade anytime when needed

## Support
For issues with Formspree, visit: https://formspree.io/support
