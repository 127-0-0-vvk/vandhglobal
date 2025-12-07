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
      basePriceBreakdown,
      destinationType,
      fobCharges,
      cifCharges,
    } = body;

    // Build destination-specific sections
    let logisticsSection = '';
    let pricingBreakdown = '';

    if (destinationType === 'india') {
      // India-to-India logistics
      logisticsSection = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  LOGISTICS DETAILS (DOMESTIC)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Route           : ${route}
Distance        : ${distance} km
Transport Mode  : ${transportMode.toUpperCase()}
Vehicles Needed : ${transportBreakdown.numTrucks} ${transportMode === 'truck' ? 'Trucks' : 'Wagons'} × ${transportBreakdown.truckCapacity} tons each
Est. Delivery   : ${estimatedDays} days`;

      pricingBreakdown = `
1. EX-MINE PRICE (100% TRANSPARENT PRICING)           $${basePrice.toLocaleString()}
   ├─ Mining & Extraction                             $${basePriceBreakdown.miningCost.toLocaleString()}
   ├─ Refining & Separation                           $${basePriceBreakdown.extractionCost.toLocaleString()}
   ├─ Processing & Grading                            $${basePriceBreakdown.processingCost.toLocaleString()}
   ├─ Quality Testing & Assurance                     $${basePriceBreakdown.qualityTesting.toLocaleString()}
   └─ VandhGlobal Profit Margin                       $0 (0%)

   ⓘ We operate on 100% transparent pricing. Zero markup on ex-mine costs.
      Our revenue comes ONLY from handling charges below.

2. TRANSPORT COSTS                                     $${transportCost.toLocaleString()}
   Using ${transportBreakdown.numTrucks} ${transportMode === 'truck' ? 'Trucks' : 'Wagons'} @ ${transportBreakdown.truckCapacity} tons capacity each

   ├─ Fuel Cost ($${transportBreakdown.fuelCostPerTruck.toLocaleString()}/vehicle × ${transportBreakdown.numTrucks})     $${transportBreakdown.fuelCost.toLocaleString()}
   ├─ Driver Cost ($${transportBreakdown.driverCostPerTruck.toLocaleString()}/vehicle × ${transportBreakdown.numTrucks})   $${transportBreakdown.driverCost.toLocaleString()}${transportBreakdown.tollFees > 0 ? `
   ├─ Toll Fees ($${transportBreakdown.tollFeesPerTruck.toLocaleString()}/vehicle × ${transportBreakdown.numTrucks})       $${transportBreakdown.tollFees.toLocaleString()}` : ''}
   └─ Vehicle Rent ($${transportBreakdown.vehicleRentPerTruck.toLocaleString()}/vehicle × ${transportBreakdown.numTrucks}) $${transportBreakdown.vehicleRent.toLocaleString()}

   Distance: ${distance} km

3. OTHER EXPENSES                                      $${otherCosts.toLocaleString()}
   ├─ Handling Charges (VandhGlobal Revenue - 1.2%)   $${otherExpenses.handlingCharges.toLocaleString()}
   ├─ Documentation Fees                               $${otherExpenses.documentation.toLocaleString()}
   ├─ Insurance Coverage                               $${otherExpenses.insurance.toLocaleString()}
   ├─ Loading Charges                                  $${otherExpenses.loading.toLocaleString()}
   └─ Unloading Charges                                $${otherExpenses.unloading.toLocaleString()}

   ⓘ Handling charges (1.2% of ex-mine price) are our ONLY revenue source`;

    } else {
      // Export logistics (FOB/CIF)
      const destPort = destinationType === 'fob' ? fobCharges.destinationPort : cifCharges.destinationPort;
      const originPort = fobCharges?.originPort || cifCharges?.originPort;

      logisticsSection = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  LOGISTICS DETAILS (EXPORT)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Incoterm        : ${destinationType.toUpperCase()}
Origin Port     : ${originPort}
Destination Port: ${destPort}
Est. Delivery   : ${estimatedDays} days`;

      if (destinationType === 'fob') {
        pricingBreakdown = `
1. EX-MINE PRICE (100% TRANSPARENT PRICING)           $${basePrice.toLocaleString()}
   ├─ Mining & Extraction                             $${basePriceBreakdown.miningCost.toLocaleString()}
   ├─ Refining & Separation                           $${basePriceBreakdown.extractionCost.toLocaleString()}
   ├─ Processing & Grading                            $${basePriceBreakdown.processingCost.toLocaleString()}
   ├─ Quality Testing & Assurance                     $${basePriceBreakdown.qualityTesting.toLocaleString()}
   └─ VandhGlobal Profit Margin                       $0 (0%)

   ⓘ We operate on 100% transparent pricing. Zero markup on ex-mine costs.

2. FOB CHARGES (FREE ON BOARD)                         $${transportCost.toLocaleString()}
   ├─ Port Handling Charges                           $${fobCharges.portHandling.toLocaleString()}
   ├─ Customs Clearance                               $${fobCharges.customsClearance.toLocaleString()}
   ├─ Export Documentation                            $${fobCharges.exportDocumentation.toLocaleString()}
   ├─ Fumigation Certificate                          $${fobCharges.fumigation.toLocaleString()}
   ├─ Mine to Port Transport                          $${fobCharges.inlandTransport.toLocaleString()}
   └─ Terminal Handling Charges                       $${fobCharges.terminalCharges.toLocaleString()}

   Origin Port: ${fobCharges.originPort}

3. OTHER EXPENSES                                      $${otherCosts.toLocaleString()}
   ├─ Handling Charges (VandhGlobal Revenue - 1.2%)   $${otherExpenses.handlingCharges.toLocaleString()}
   ├─ Documentation Fees                               $${otherExpenses.documentation.toLocaleString()}
   ├─ Insurance Coverage                               $${otherExpenses.insurance.toLocaleString()}
   ├─ Loading Charges                                  $${otherExpenses.loading.toLocaleString()}
   └─ Unloading Charges                                $${otherExpenses.unloading.toLocaleString()}`;

      } else {
        // CIF
        pricingBreakdown = `
1. EX-MINE PRICE (100% TRANSPARENT PRICING)           $${basePrice.toLocaleString()}
   ├─ Mining & Extraction                             $${basePriceBreakdown.miningCost.toLocaleString()}
   ├─ Refining & Separation                           $${basePriceBreakdown.extractionCost.toLocaleString()}
   ├─ Processing & Grading                            $${basePriceBreakdown.processingCost.toLocaleString()}
   ├─ Quality Testing & Assurance                     $${basePriceBreakdown.qualityTesting.toLocaleString()}
   └─ VandhGlobal Profit Margin                       $0 (0%)

   ⓘ We operate on 100% transparent pricing. Zero markup on ex-mine costs.

2. CIF CHARGES (COST, INSURANCE & FREIGHT)            $${transportCost.toLocaleString()}

   FOB Subtotal                                        $${cifCharges.fobTotal.toLocaleString()}
   ├─ Port Handling                                   $${cifCharges.portHandling.toLocaleString()}
   ├─ Customs Clearance                               $${cifCharges.customsClearance.toLocaleString()}
   ├─ Export Documentation                            $${cifCharges.exportDocumentation.toLocaleString()}
   ├─ Fumigation Certificate                          $${cifCharges.fumigation.toLocaleString()}
   ├─ Inland Transport                                $${cifCharges.inlandTransport.toLocaleString()}
   └─ Terminal Charges                                $${cifCharges.terminalCharges.toLocaleString()}

   Ocean Freight & Insurance
   ├─ Ocean Freight                                   $${cifCharges.oceanFreight.toLocaleString()}
   ├─ Marine Insurance                                $${cifCharges.marineInsurance.toLocaleString()}
   └─ Destination Port Charges                        $${cifCharges.destinationPortCharges.toLocaleString()}

   Destination: ${cifCharges.destinationPort}

3. OTHER EXPENSES                                      $${otherCosts.toLocaleString()}
   ├─ Handling Charges (VandhGlobal Revenue - 1.2%)   $${otherExpenses.handlingCharges.toLocaleString()}
   ├─ Documentation Fees                               $${otherExpenses.documentation.toLocaleString()}
   ├─ Insurance Coverage                               $${otherExpenses.insurance.toLocaleString()}
   ├─ Loading Charges                                  $${otherExpenses.loading.toLocaleString()}
   └─ Unloading Charges                                $${otherExpenses.unloading.toLocaleString()}`;
      }
    }

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
${logisticsSection}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  COMPREHENSIVE PRICING BREAKDOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${pricingBreakdown}

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
  TRANSPARENCY COMMITMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
At VandhGlobal, we believe in complete transparency:
• Zero profit margin on ex-mine prices (100% transparent cost)
• Our revenue comes only from handling charges (1.2%)
• All costs are itemized and verifiable
• No hidden fees or markups

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
