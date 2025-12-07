# VandhGlobal Quotation System - Setup & Configuration Guide

## ✅ What's Been Implemented

### 1. Enhanced Quotation System
- **Detailed Cost Breakdown** - Expandable UI showing:
  - Transport costs (fuel, driver, tolls, vehicle rent)
  - Other expenses (handling, documentation, insurance, packaging, loading, unloading)
  - Distance-based calculations
  - Click to expand/collapse each section

### 2. Professional Download Format
- Beautifully formatted TXT quotations with:
  - Visual separators using Unicode box-drawing characters
  - Organized sections for all information
  - Complete cost breakdown
  - Terms & conditions
  - Contact information

### 3. Email Integration (Nodemailer)
- **Server-side email sending** instead of mailto links
- API endpoint: `/api/send-inquiry`
- Sends formatted quotation directly to vandhglobal@gmail.com
- Includes complete customer and quotation details
- Loading states and error handling

### 4. State/City/Area Selection
- Replaced Google Maps with cascading dropdowns
- 30 Indian states with major cities
- Area selection for 10+ major cities
- Progressive disclosure pattern

## 🔧 Required Configuration

### Email Setup (IMPORTANT)

The email functionality requires a Gmail App Password. Follow these steps:

#### Step 1: Generate Gmail App Password

1. Go to your Google Account: https://myaccount.google.com
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Scroll down to **App passwords**: https://myaccount.google.com/apppasswords
4. Generate a new app password:
   - Select app: **Mail**
   - Select device: **Other (Custom name)** → Enter "VandhGlobal Website"
   - Click **Generate**
   - Copy the 16-character password (format: xxxx xxxx xxxx xxxx)

#### Step 2: Update Environment Variables

Open `.env.local` and replace the placeholder:

```env
EMAIL_USER=vandhglobal@gmail.com
EMAIL_PASSWORD=your-actual-16-char-app-password-here
```

**Example:**
```env
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

#### Step 3: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

## 🧪 Testing the Features

### Test 1: Detailed Breakdown UI
1. Navigate to: http://localhost:3000/minerals
2. Click on any mineral (e.g., "Iron Ore")
3. Scroll to "Get Instant Quote" section
4. Fill in the form:
   - Select a specification
   - Enter quantity (e.g., 100)
   - Select State → City → Area
   - Choose transport mode
5. Click "Generate Quotation"
6. **Verify:**
   - Click "Transport Cost" to expand breakdown
   - Click "Other Expenses" to expand breakdown
   - Check that all line items display correctly

### Test 2: Download Quotation
1. After generating quotations, click **Download** button
2. Open the downloaded TXT file
3. **Verify:**
   - Professional formatting with visual separators
   - All sections present (Supplier, Product, Logistics, Pricing)
   - Complete breakdown with all cost components
   - Terms & conditions at bottom

### Test 3: Email Integration
1. After generating quotations, click **Interested** button
2. Fill in the form:
   - Name: Test User
   - Phone: 9876543210
   - Email: your-email@example.com
   - Note: Testing email integration
3. Click **Send Inquiry**
4. **Verify:**
   - Loading spinner appears
   - Button shows "Sending..."
   - Success message: "Your inquiry has been sent successfully!"
   - Check vandhglobal@gmail.com inbox for the email

**If email fails:**
- Check console for errors (F12 → Console tab)
- Verify EMAIL_PASSWORD is correctly set in `.env.local`
- Ensure you restarted the dev server after updating `.env.local`
- Check that 2-Step Verification is enabled on the Gmail account

## 📁 Files Modified/Created

### Modified Files:
- `components/QuoteGenerator.tsx` - Enhanced with all new features
- `package.json` - Added nodemailer dependencies
- `.env.local` - Email configuration placeholders

### New Files:
- `app/api/send-inquiry/route.ts` - Email API endpoint
- `data/indianLocations.ts` - State/City/Area data (created in previous session)
- `components/QualityAssuranceSection.tsx` - Hover cards (created in previous session)

## 🎯 Features Summary

| Feature | Status | Location |
|---------|--------|----------|
| State/City/Area Dropdowns | ✅ Complete | QuoteGenerator.tsx:335-399 |
| Detailed Cost Calculations | ✅ Complete | QuoteGenerator.tsx:113-180 |
| Expandable Breakdown UI | ✅ Complete | QuoteGenerator.tsx:487-576 |
| Professional TXT Download | ✅ Complete | QuoteGenerator.tsx:186-269 |
| Email API Route | ✅ Complete | app/api/send-inquiry/route.ts |
| Email Integration | ⚠️ Needs Config | QuoteGenerator.tsx:276-339 |

## 🔐 Security Notes

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **App passwords are safer than regular passwords** - They're app-specific and can be revoked
3. **Email credentials are server-side only** - Not exposed to client
4. **API route runs on the server** - Credentials never sent to browser

## 🚀 Deployment Checklist

When deploying to production (Netlify/Vercel):

1. ✅ Set environment variables in hosting platform:
   - `EMAIL_USER=vandhglobal@gmail.com`
   - `EMAIL_PASSWORD=your-app-password`

2. ✅ Verify email functionality works in production

3. ✅ Test all quotation features:
   - Location selection
   - Quote generation
   - Detailed breakdowns
   - Download functionality
   - Email sending

## 📞 Support

If you encounter issues:
- Check the browser console (F12) for errors
- Check the terminal for server-side errors
- Verify environment variables are set correctly
- Ensure Gmail account has 2-Step Verification enabled

## 🎨 UI/UX Features

- **Expandable Sections** - Click to reveal detailed breakdowns
- **Loading States** - Spinner animation while sending email
- **Error Handling** - User-friendly error messages
- **Responsive Design** - Works on mobile and desktop
- **Smooth Animations** - Arrow rotation on expand/collapse

---

**Development Server:** http://localhost:3000
**Test Page:** http://localhost:3000/minerals

All features are ready to use once email configuration is complete!
