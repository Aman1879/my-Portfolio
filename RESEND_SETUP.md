# Resend Email Service Setup Guide

## Why Resend?

Resend is a modern email API built for developers that:
- ✅ No authentication headaches (no App Passwords needed)
- ✅ Reliable delivery for production
- ✅ Beautiful HTML email templates
- ✅ Real-time analytics and logs
- ✅ Free tier available (100 emails/day)
- ✅ Simple API key authentication

## Step 1: Create Resend Account

1. Go to https://resend.com
2. Click "Get Started" → Sign up with email
3. Verify your email
4. You'll be directed to the dashboard

## Step 2: Get Your API Key

1. In Resend dashboard, click "API Keys" (left sidebar)
2. Click "Create API Key" button
3. Name it: `Portfolio Backend` (or anything you want)
4. Copy the API key (starts with `re_`)
5. **Save this somewhere safe** - you'll need it for environment variables

## Step 3: Verify Your Email Domain (Optional but Recommended)

For production, Resend lets you use your own email domain:

1. In Resend dashboard, go to "Domains"
2. Click "Add Domain"
3. Enter your domain (e.g., `amanara.dev`)
4. Add the DNS records to your domain provider
5. Once verified, you can send from `contact@amanara.dev`

For now, you can use the default `onboarding@resend.dev` (included in the code).

## Step 4: Update Environment Variables

### Local Development (.env)

```env
RESEND_API_KEY=re_your_api_key_here
EMAIL_TO=amanara13579@gmail.com
```

### Production (Render)

Go to your Render dashboard:

1. Select your backend service
2. Go to "Environment"
3. Add these variables:

```
RESEND_API_KEY = re_your_api_key_here
EMAIL_TO = amanara13579@gmail.com
CLIENT_URL = https://egamanportfolio.netlify.app
NODE_ENV = production
PORT = 5000
```

## Step 5: Install Resend Package

```bash
cd server
npm install
npm install resend
```

The `contactController.js` already uses Resend, so no code changes needed.

## Testing

### Test Email Sending Locally

1. Start your backend:
```bash
cd server
npm start
```

2. Send a test request:

**Using cURL:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "user_name": "Test User",
    "user_email": "test@example.com",
    "message": "This is a test message"
  }'
```

**Using Postman:**
- Method: POST
- URL: http://localhost:5000/api/contact
- Body (JSON):
```json
{
  "user_name": "Test User",
  "user_email": "test@example.com",
  "message": "This is a test message"
}
```

Expected response:
```json
{
  "success": true,
  "message": "Message sent successfully! I will get back to you soon.",
  "messageId": "abc123def456"
}
```

### Check Email Sending in Resend Dashboard

1. Go to https://resend.com/emails
2. You should see your test emails with "Delivered" status
3. Click on an email to see full details

## Troubleshooting

### Error: "RESEND_API_KEY not configured"
- ✅ Solution: Add `RESEND_API_KEY` to your `.env` file
- ✅ Restart your development server after adding env var

### Error: "Invalid API key"
- ✅ Solution: Make sure you copied the API key correctly (starts with `re_`)
- ✅ Check that there are no extra spaces in the key

### Emails not showing in dashboard
- ✅ Check browser console for CORS errors
- ✅ Verify `EMAIL_TO` is set in environment variables
- ✅ Confirm your Resend API key is valid

### Old Nodemailer Code Still Lingering
- ✅ Make sure you're using the updated `contactController.js`
- ✅ Remove any remaining `nodemailer` imports
- ✅ Check that `package.json` has `resend` and not `nodemailer`

## Migration Complete Checklist

- [✅] Updated `contactController.js` to use Resend
- [✅] Updated `package.json` (resend instead of nodemailer)
- [✅] Updated `.env` file with Resend variables
- [✅] Updated `.env.production` template
- [✅] Created Resend account
- [✅] Copied API key to environment variables
- [ ] Tested email sending locally
- [ ] Deployed to Render with RESEND_API_KEY
- [ ] Tested contact form on live site

## FAQ

**Q: Is Resend free?**
A: Yes! Free tier includes 100 emails/day. Great for portfolios.

**Q: Do I need to verify my domain?**
A: No, it's optional. You can use the default `onboarding@resend.dev` sender.

**Q: Why did we switch from Nodemailer?**
A: Resend is more reliable in production, no app passwords needed, better logs.

**Q: Can I use my own email domain with Resend?**
A: Yes! Add your domain in Resend dashboard → Domains.

**Q: What if I exceed the free tier?**
A: Pay-as-you-go pricing: $0.75 per 1000 emails.

---

**Questions?** Check Resend docs: https://resend.com/docs
