import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      // Customer details
      name,
      phone,
      countryCode,
      email,
      note,
      // Quotation details
      mineral,
      specification,
      quantity,
      unit,
      mine,
      totalPrice,
      basePrice,
      transportCost,
      otherCosts,
      route,
      estimatedDays,
      distance,
      transportMode,
      transportBreakdown,
      otherExpenses,
    } = body;

    // Create formatted quotation text
    const quotationText = `
╔═══════════════════════════════════════════════════════════════╗
║                     VANDHGLOBAL QUOTATION                     ║
╚═══════════════════════════════════════════════════════════════╝

QUOTATION FOR: ${mineral}
Date: ${new Date().toLocaleDateString()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  SUPPLIER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Mine Name       : ${mine.name}
Location        : ${mine.location}, ${mine.state}
Mine Capacity   : ${mine.capacity || 'N/A'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PRODUCT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Mineral         : ${mineral}
Specification   : ${specification}
Quantity        : ${quantity} ${unit}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  LOGISTICS DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Route           : ${route}
Distance        : ${distance} km
Transport Mode  : ${transportMode.toUpperCase()}
Est. Delivery   : ${estimatedDays} days

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  COMPREHENSIVE PRICING BREAKDOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASE PRICE
   Mineral Cost                                    $${basePrice.toLocaleString()}

2. TRANSPORT COSTS                                 $${transportCost.toLocaleString()}
   ├─ Fuel Cost (${distance} km)                       $${transportBreakdown.fuelCost.toLocaleString()}
   ├─ Driver/Operator Cost                         $${transportBreakdown.driverCost.toLocaleString()}${transportBreakdown.tollFees > 0 ? `
   ├─ Toll Fees                                    $${transportBreakdown.tollFees.toLocaleString()}` : ''}
   └─ Vehicle Rent                                 $${transportBreakdown.vehicleRent.toLocaleString()}

3. OTHER EXPENSES                                  $${otherCosts.toLocaleString()}
   ├─ Handling Charges                             $${otherExpenses.handlingCharges.toLocaleString()}
   ├─ Documentation Fees                           $${otherExpenses.documentation.toLocaleString()}
   ├─ Insurance                                    $${otherExpenses.insurance.toLocaleString()}
   ├─ Packaging                                    $${otherExpenses.packaging.toLocaleString()}
   ├─ Loading Charges                              $${otherExpenses.loading.toLocaleString()}
   └─ Unloading Charges                            $${otherExpenses.unloading.toLocaleString()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

╔═══════════════════════════════════════════════════════════════╗
║  TOTAL QUOTATION PRICE:                  $${totalPrice.toLocaleString().padStart(20)}  ║
╚═══════════════════════════════════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  CUSTOMER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name            : ${name}
Phone           : ${countryCode} ${phone}
Email           : ${email}
Additional Note : ${note || 'N/A'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Terms & Conditions:
• This quotation is valid for 30 days from the date of issue
• Prices are subject to change based on market conditions
• 50% advance payment required to confirm the order
• Delivery timelines may vary based on availability
• All taxes and duties are extra as applicable

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Thank you for considering VandhGlobal for your commodity needs!
    `.trim();

    // Configure Nodemailer transporter
    // Note: You need to set up environment variables for email credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or 'smtp.gmail.com'
      auth: {
        user: process.env.EMAIL_USER || 'vandhglobal@gmail.com',
        pass: process.env.EMAIL_PASSWORD, // App-specific password required
      },
    });

    // Email to VandhGlobal
    const mailOptions = {
      from: process.env.EMAIL_USER || 'vandhglobal@gmail.com',
      to: 'vandhglobal@gmail.com',
      replyTo: email,
      subject: `New Inquiry: ${mineral} from ${mine.name}`,
      text: quotationText,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      {
        message: 'Failed to send email',
        error: error.message || 'Unknown error',
        details: 'Please ensure EMAIL_USER and EMAIL_PASSWORD environment variables are set correctly.'
      },
      { status: 500 }
    );
  }
}
