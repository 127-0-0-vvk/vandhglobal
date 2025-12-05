# VandhGlobal - Commodity Trading Website

A professional commodity trading website specializing in minerals and agricultural products (rice, spices, and dehydrated powders).

## Features

### Core Features
- **Minerals Trading**: Iron ore, bauxite, coal, copper, manganese, chromite, and limestone with detailed specifications
- **Agricultural Products**: Premium basmati and non-basmati rice varieties
- **Spices & Dehydrated Powders**: Whole spices, powdered spices, and dehydrated vegetable powders

### Advanced Features
- **Bulk Pricing Calculator**: Real-time FOB price calculations with logistics costs
- **Distance Calculator**: Automatic distance calculation from mines/mills to ports
- **Logistics Cost Calculator**: Detailed breakdown of transportation, loading/unloading, and toll charges
- **Daily Price Updates**: Automated price updates based on market rates (see below)
- **Responsive Design**: Mobile-friendly interface with custom color palette

## Technology Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: React Icons
- **HTTP Client**: Axios

## Color Palette

The website uses a carefully selected color palette:
- Primary Dark: #463F3A
- Primary Medium: #8A817C
- Primary Light: #BCB8B1
- Primary Lighter: #F4F3EE
- Primary Accent: #E0AFA0

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Automatic Daily Price Updates

### Current Implementation

The website currently uses static prices stored in `data/commodityPrices.ts`. These prices are based on comprehensive market research conducted in December 2025.

### Setting Up Automated Price Updates

To enable automatic daily price updates, you can implement one of the following approaches:

#### Option 1: API Integration (Recommended)

1. **Subscribe to Commodity Price APIs**:
   - [Trading Economics API](https://tradingeconomics.com/api) - For minerals
   - [BigMint API](https://www.bigmint.co/) - For metals and minerals
   - [Fastmarkets API](https://www.fastmarkets.com/) - Comprehensive commodity data
   - Custom spices/rice market data providers

2. **Create API Integration Script**:

```typescript
// scripts/updatePrices.ts
import axios from 'axios';
import fs from 'fs';

async function updateCommodityPrices() {
  try {
    // Fetch mineral prices from API
    const mineralData = await axios.get('YOUR_MINERALS_API_ENDPOINT', {
      headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
    });

    // Fetch agri prices from API
    const agriData = await axios.get('YOUR_AGRI_API_ENDPOINT', {
      headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
    });

    // Update the commodityPrices.ts file
    // Process and format the data
    const updatedPrices = processApiData(mineralData.data, agriData.data);

    // Write to file
    fs.writeFileSync(
      'data/commodityPrices.ts',
      generatePricesFile(updatedPrices)
    );

    console.log('Prices updated successfully:', new Date().toISOString());
  } catch (error) {
    console.error('Error updating prices:', error);
  }
}

updateCommodityPrices();
```

3. **Set up a Cron Job**:

**Using Vercel Cron (if deployed on Vercel)**:
```json
// vercel.json
{
  "crons": [{
    "path": "/api/update-prices",
    "schedule": "0 0 * * *"
  }]
}
```

**Using GitHub Actions**:
```yaml
# .github/workflows/update-prices.yml
name: Update Commodity Prices
on:
  schedule:
    - cron: '0 0 * * *'  # Run daily at midnight UTC
  workflow_dispatch:

jobs:
  update-prices:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run update-prices
      - uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: 'chore: update commodity prices'
```

**Using Node Cron (for self-hosted)**:
```typescript
// server/cron.ts
import cron from 'node-cron';
import { updatePrices } from './updatePrices';

// Run every day at midnight
cron.schedule('0 0 * * *', () => {
  console.log('Running daily price update...');
  updatePrices();
});
```

#### Option 2: Web Scraping (Alternative)

If APIs are not available or cost-prohibitive:

```typescript
// scripts/scrapePrices.ts
import axios from 'axios';
import * as cheerio from 'cheerio';

async function scrapeCommodityPrices() {
  // Example: Scrape iron ore prices
  const response = await axios.get('https://tradingeconomics.com/commodity/iron-ore');
  const $ = cheerio.load(response.data);

  // Extract price data (adjust selectors based on actual site structure)
  const ironOrePrice = $('.price-value').text();

  // Update your data file
  // ... implementation
}
```

**Note**: Always check the website's robots.txt and terms of service before scraping.

#### Option 3: Manual Update System

Create an admin interface where authorized users can manually update prices:

```typescript
// app/admin/update-prices/page.tsx
// Implement a protected admin page with forms to update prices
```

### Price Sources Used

The current prices in the website are sourced from:

**Minerals**:
- [Trading Economics](https://tradingeconomics.com/commodities)
- [BigMint](https://www.bigmint.co/)
- [Fastmarkets](https://www.fastmarkets.com/metals-and-mining/)
- [IMARC Group](https://www.imarcgroup.com/)

**Rice**:
- [Eastgate Export](https://www.eastgateexport.com/indian-basmati-rice-price-today/)
- [Export Mandi](https://exportmandi.com/current-basmati-rice-prices-exmill-fob/)
- [S&P Global Commodity Insights](https://www.spglobal.com/commodity-insights/)

**Spices**:
- [Sadbhaav Spices](https://sadbhaavspices.com/top-10-spices-exported-from-india/)
- [Spices Board India](https://www.indianspices.com/)
- [Commodity Online](https://www.commodityonline.com/)

## Logistics Cost Calculation

The logistics costs are calculated based on:
- **Truck Transport**: $0.15 per KM per MT (base rate)
- **Rail Transport**: $0.08 per KM per MT (base rate)
- **Loading/Unloading**: $25 per MT (truck), $15 per MT (rail)
- **Toll Charges**: $0.05 per KM per MT (for truck transport)
- **Minimum Cost**: $50 (truck), $100 (rail)

These rates are based on 2025 Indian logistics market research from:
- [ShipZip Transportation Charges](https://shipzip.in/truck-transportation-charges-in-india-per-km-cost-calculation/)
- [GoodSeva Truck Transportation Guide](https://www.goodseva.com/blog/truck-transportation-charges-india/)
- [Superprocure Freight Index](https://www.superprocure.com/freight-index/)

## Project Structure

```
vandhglobal/
├── app/
│   ├── layout.tsx              # Root layout with navigation
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   ├── minerals/
│   │   └── page.tsx            # Minerals trading page
│   └── agro/
│       ├── rice/
│       │   └── page.tsx        # Rice trading page
│       └── spices/
│           └── page.tsx        # Spices & powders page
├── components/
│   ├── Navbar.tsx              # Navigation component
│   ├── Footer.tsx              # Footer component
│   ├── MineralPricingCalculator.tsx
│   └── AgroPricingCalculator.tsx
├── data/
│   └── commodityPrices.ts      # Commodity prices and data
├── public/                     # Static assets
└── package.json               # Dependencies

```

## Features Detail

### Bulk Pricing Calculator

Each product category (minerals, rice, spices) has a sophisticated pricing calculator that:

1. **Selects Commodity**: Choose from available products with current market prices
2. **Quantity Input**: Enter required quantity in metric tons
3. **Source Selection**: Select from major mining/production locations
4. **Port Selection**: Choose destination port from 10 major Indian ports
5. **Transport Mode**: Select truck or rail transport
6. **Calculates**:
   - Base commodity price
   - Distance between source and port (Haversine formula)
   - Transport costs
   - Loading/unloading costs
   - Toll charges (if applicable)
   - Total logistics cost
   - Final FOB (Free on Board) price

### Distance Calculation

The distance calculator uses the Haversine formula to calculate the great-circle distance between two points on Earth:

```typescript
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  // ... implementation
  return distance;
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy automatically

### Other Platforms

The website can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with PM2

## Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# API Keys for price updates
MINERALS_API_KEY=your_key_here
AGRI_API_KEY=your_key_here

# Other configurations
NEXT_PUBLIC_SITE_URL=https://vandhglobal.com
```

## Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary and confidential.

## Support

For support or inquiries:
- Email: info@vandhglobal.com
- Phone: +91 XXX XXX XXXX

---

Built with Next.js, TypeScript, and Tailwind CSS
