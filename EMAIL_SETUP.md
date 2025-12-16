# Email Setup Guide for Contact Form

## Overview
The contact form now sends emails using [Resend](https://resend.com), a modern email API service. When users submit the form, two emails are sent:
1. **Notification to your team** - Contains all form details
2. **Auto-reply to the user** - Confirms their message was received

## Setup Instructions

### 1. Create a Resend Account
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Free tier includes:
   - 100 emails/day
   - 3,000 emails/month
   - Perfect for most small to medium websites

### 2. Get Your API Key
1. After signing up, go to [API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Stafona Contact Form")
4. Copy the API key (it starts with `re_`)

### 3. Verify Your Domain (Important for Production)
1. Go to [Domains](https://resend.com/domains) in Resend
2. Click "Add Domain"
3. Enter your domain (e.g., `stafona.com`)
4. Follow the DNS configuration instructions
5. Add the provided DNS records to your domain provider
6. Wait for verification (usually takes a few minutes)

**Note:** Until your domain is verified, emails will be sent from `onboarding@resend.dev` (for testing only).

### 4. Configure Environment Variables

#### For Local Development:
1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your values:
   ```env
   RESEND_API_KEY=re_your_actual_api_key_here
   EMAIL_FROM=noreply@stafona.com
   EMAIL_TO=contact@stafona.com
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

#### For Production (Deployment):
Add these environment variables to your hosting platform:

**Vercel:**
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add:
   - `RESEND_API_KEY` = Your Resend API key
   - `EMAIL_FROM` = `noreply@stafona.com` (or your verified email)
   - `EMAIL_TO` = `contact@stafona.com` (where form submissions go)
   - `NEXT_PUBLIC_SITE_URL` = `https://stafona.com`

**Netlify:**
1. Go to Site settings → Build & deploy → Environment
2. Add the same variables as above

**Other Platforms:**
Follow their specific instructions for adding environment variables.

### 5. Test the Form

#### Local Testing:
1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page
3. Fill out and submit the form
4. Check the Resend dashboard for sent emails

#### What to Verify:
- ✅ Form submission shows success message
- ✅ Loading state appears during submission
- ✅ Form clears after successful submission
- ✅ You receive the notification email
- ✅ User receives the auto-reply email

## Email Templates

### Notification Email (to your team)
- **Subject:** New Contact Form Submission from [Name]
- **Contains:** Name, Email, Phone, Company, Service Interest, Message
- **Reply-To:** Set to the user's email for easy replies

### Auto-Reply Email (to user)
- **Subject:** Thank you for contacting Stafona
- **Contains:** Thank you message and confirmation
- **Includes:** Button to visit your website

## Customization

### Change Email Templates
Edit `app/api/contact/route.ts` to customize:
- Email subject lines
- HTML templates
- Colors and styling
- Button links

### Modify Form Fields
Edit `app/contact/page.tsx` to:
- Add/remove fields
- Change validation rules
- Update success/error messages

## Troubleshooting

### "Failed to send email" Error
- Check that `RESEND_API_KEY` is set correctly
- Verify the API key is valid in Resend dashboard
- Check browser console for detailed error messages

### Emails Not Being Received
- Check spam folder
- Verify `EMAIL_TO` is correct
- Ensure domain is verified in Resend (for production)
- Check Resend dashboard logs for delivery status

### "Invalid from address" Error
- You need to verify your domain first
- Or use `onboarding@resend.dev` for testing
- Make sure `EMAIL_FROM` uses your verified domain

### Rate Limiting
- Free tier: 100 emails/day
- Paid plans available for higher volumes
- Check usage in Resend dashboard

## Security Notes

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Keep your API key secret** - Don't share it publicly
3. **Use environment variables** - Never hardcode credentials
4. **Domain verification** - Required for production use

## Support

- **Resend Documentation:** https://resend.com/docs
- **Resend Support:** https://resend.com/support
- **Status Page:** https://status.resend.com

## Alternative Email Services

If you prefer to use a different service, you can replace Resend with:
- **SendGrid** - Popular, generous free tier
- **Mailgun** - Good for high volume
- **AWS SES** - Cost-effective for large scale
- **Nodemailer** - Use your own SMTP server

To switch services, modify `app/api/contact/route.ts` with the appropriate SDK and configuration.

