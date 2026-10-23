# God's Timing Clothing Website

A simple website for **God's Timing Clothing** - Faith-inspired apparel made with purpose.  
"We don't just sell clothes, we share a message."

## About
God's Timing Clothing sells branded T-Shirts, Hoodies, and Caps with scripture and faith-based designs.  
We also do custom prints for churches, groups, and events.

## Website Pages
- **Homepage** - Welcome and brand intro
- **About Us** - Our story and mission  
- **Services** - Products, Custom Designs, Delivery, Gift Packs
- **Enquiry** - Place an order
- **Contact** - WhatsApp, Email, Location at Sky City Mall Alberton

## Contact
- **WhatsApp**: 0648 632 329 / +27 65 863 2329
- **Email**: info@godstiming.co.za
- **Instagram**: @godstimingclothing
- **Location**: Sky City Mall Alberton, Johannesburg, Gauteng, South Africa
- **Hours**: Mon-Fri 9am-5pm, Sat 10am-2pm

## How to Run Locally
1. Download or clone this repo
2. Open `index.html` in your browser

## Tech Used
- HTML
- CSS
## Sitemap
- Location in repo: /sitemap.xml (root folder)
- Live URL: https://st10525016.github.io/God-s-Timing-Clothing/sitemap.xml
- Purpose: Helps Google and search engines find all 6 pages (Home, About, Services, Enquiry, Contact, Payment)

## Colours and Fonts
**Colours:**
- Pink #e891a6: Brand colour, warm, feminine, matches clothing identity
- Black #000000: For text, good contrast and readability
- White #ffffff: Background, clean and professional

**Fonts:**
- Headings: Poppins / Arial Black - Bold and modern for brand name
- Body: Arial, sans-serif - Simple and readable for product info

## SEO and Features
- Added Google Map on Contact page (Sky City Mall Alberton)
- Added sitemap.xml for SEO
## Changelog

| Date | File Changed | Fix Made | Reason |
|------|--------------|----------|--------|
| 2026-05-13 | contact.html | Added Google Map iframe for Sky City Mall | POE feedback - missing map |
| 2026-05-13 | sitemap.xml | Created sitemap.xml in root folder | SEO requirement |
| 2026-05-14 | css/style.css | Added Reset (*), Base (body), Typography (h1,h2,h3,p) | Part 2 - 2.2 and 2.3 |
| 2026-05-14 | css/style.css | Kept brand pink #b51158 background | Fix background colour |
| 2026-05-14 | css/style.css | Added @media (max-width:768px) responsive | Part 2 - 2.4 Responsive |

## References
- Google Maps Embed
- Poppins font from Google Fonts
## Changelog

### Part 3 - Enhancing Functionality and SEO
- Fixed folder structure: moved css/style.css, js/script.js, images/ to root level for Netlify deployment
- Fixed registration.html styling: centered form container with .form-container class
- Added SEO meta tags to all pages: description, keywords, author
- Added sitemap.xml to root folder for SEO
- Fixed Google Map embed on contact.html
- Implemented JavaScript validation for registration and enquiry forms with error messages
- Updated responsive navigation with menuToggle functionality
- Deployed website on Netlify
# God's Timing Clothing - ST10525016

**Student:** Letelo Chabalala
**Student Number:** ST10525016
**Module:** WEDE5020 / DISD / POE

## About The Project
God's Timing Clothing is a faith-based fashion e-commerce website that sells clothing with the message "Faith, Fashion, Purpose". The brand promotes the message that God's timing is always perfect.

## Live Links
- **Live Website:** https://gods-timing-clothing-letelo.netlify.app
- **GitHub Repo:** https://github.com/letelochabalala9/ST10525016-God-s-Timing-Clothing

## Features
- Homepage with brand message
- Product listing
- About Us page
- Services page
- Responsive design for mobile and desktop
- Hosted on Netlify with continuous deployment from GitHub

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Git & GitHub for version control
- Netlify for hosting

## How to Run Locally
1. Clone the repo
2. Open index.html in browser

## Deployment
This site is automatically deployed via Netlify. Any push to the main branch on GitHub triggers a new deployment.
# God's Timing Clothing - WEDE5020 POE

Student POE for Web Development. A simple clothing brand website selling Caps and Hoodies.

## Live Site
[Your GitHub Pages link here - e.g. https://yourusername.github.io/gods-timing/]

## Website Pages
- `index.html` - Home page
- `about.html` - About the brand
- `products.html` - Product listing (Cap R150, Hoodie R350)
- `enquiry.html` - Enquiry form with price check
- `contact.html` - Contact us form

### Form Elements
- Used appropriate HTML form elements: `input` (text, email), `textarea`, `select`, `button`
- `enquiry.html`: eName, eEmail, product select, size select (M/L/XL), enquiryType select
- `contact.html`: cName, cEmail, cType select, cMessage textarea

### Form Validation
- HTML5 validation: `required` attribute on all inputs
- `type="email"` for email format validation
- JavaScript validation in `js/script.js`

### Form Submission
- Uses form `onsubmit` attribute: `onsubmit="handleEnquiry(event)"` and `handleContact(event)`
- JavaScript handles submission with `event.preventDefault()`

### JavaScript Form Validation
- **Client-Side Validation:** Checks if fields are empty before submission
- **Error Handling:** Displays alert messages if form data is invalid
- **AJAX/Form Submission:** Uses JavaScript to process data and mailto for sending, providing better user experience without page reload
- File: `js/script.js` linked at bottom of all pages: `<script src="js/script.js"></script>`

## Price Logic (Enquiry)
- Cap - R150
- Hoodie - R350
- Golf T-Shirt - R250
- Implemented in handleEnquiry() function

## 5. GitHub Repository
- Regular commits with descriptive messages
- All files committed: HTML, CSS, JS, images

## How to Test Forms
1. Open `enquiry.html` in browser
2. Fill Full Name, Email, choose Product and Size
3. Click "Check Price" - alert will show price and open email client
4. Open `contact.html` - fill form and submit - opens mailto

## Technologies
- HTML5
- CSS3
- JavaScript (Vanilla)
- GitHub & GitHub Pages

© God's Timing Clothing - All Rights Reserved