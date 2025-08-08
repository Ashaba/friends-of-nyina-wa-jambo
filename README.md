# Friends of Nyina wa Jambo

A modern, mobile-responsive website promoting the message of Our Lady of Kibeho and the devotion to the Seven Sorrows of Mary.

## 🌟 Features

### Core Functionality
- **Homepage** with Message of the Day and featured content
- **Apparitions** - Complete history of Kibeho apparitions (1981-1989)
- **Prayer Guides** - Seven Sorrows Rosary and Holy Rosary with full meditations
- **Daily Saints** - Catholic calendar with saint biographies
- **Events** - Regional event listings with filtering (Uganda/Rwanda/Online)
- **Media Gallery** - Videos, audio recordings, and photos
- **Newsletter** - Email subscription system
- **Contact Form** - Prayer requests and general inquiries

### Privacy & Analytics
- **Privacy-First Analytics** - GDPR-compliant, anonymous visitor tracking
- **Cookie Consent** - Transparent privacy controls
- **GDPR Compliance** - Full privacy policy and user rights
- **No Third-Party Tracking** - Self-hosted analytics only

### Admin Dashboard
- **Content Management** - Edit messages, pages, and content
- **Event Management** - Create and manage events
- **Newsletter Tools** - Send newsletters and manage subscribers
- **Analytics Dashboard** - View visitor statistics and popular content
- **Simple Authentication** - Basic admin access control

### Internationalization
- **Multi-Language Support** - English, French, and Kinyarwanda
- **Language Switcher** - Easy language selection
- **Localized Content** - Full translation support
- **Cultural Sensitivity** - Appropriate content for different regions

## 🚀 Technology Stack

- **Frontend**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Internationalization**: next-intl
- **Analytics**: Custom privacy-friendly solution
- **Deployment**: Vercel/Netlify ready
- **Email**: Newsletter integration ready for Mailchimp/ConvertKit

## 🛠 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd friends-of-nyina-wa-jambo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **View the website**
   Open [http://localhost:3001](http://localhost:3001)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── admin/             # Admin dashboard
│   ├── apparitions/       # Kibeho apparitions
│   ├── contact/           # Contact form
│   ├── events/            # Event listings
│   ├── media/             # Media gallery
│   ├── newsletter/        # Newsletter subscription
│   ├── prayers/           # Prayer guides
│   ├── privacy/           # Privacy policy
│   └── saints/            # Daily saints
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── lib/                  # Utilities and configurations
│   ├── analytics.ts      # Privacy-friendly analytics
│   └── utils.ts          # Utility functions
└── middleware.ts         # i18n middleware

messages/                 # Translation files
├── en.json              # English
├── fr.json              # French
└── rw.json              # Kinyarwanda
```

## 🌍 Multi-Language Support

The website supports three languages:
- **English** (default) - `/`
- **French** - `/fr`
- **Kinyarwanda** - `/rw`

Add new languages by:
1. Creating a new JSON file in `messages/`
2. Adding the locale to `src/i18n.ts`
3. Updating the middleware configuration

## 🔒 Privacy & Security Features

### Analytics
- **Anonymous tracking** - No personal data collected
- **GDPR compliant** - Opt-in/opt-out controls
- **No cookies** - Uses session-based tracking
- **Privacy-first** - Respects Do Not Track headers

### Data Collection
- **Minimal data** - Only what's necessary
- **Transparent** - Clear privacy policy
- **User control** - Easy opt-out mechanisms
- **Secure storage** - Encrypted data transmission

## 👨‍💻 Admin Dashboard

Access the admin dashboard at `/admin` (demo password: `admin123`)

Features:
- Content management for all pages
- Event creation and management  
- Newsletter composition and sending
- Analytics and visitor statistics
- Prayer request management

## 🎨 Customization

### Styling
- Built with Tailwind CSS
- shadcn/ui components for consistency
- CSS custom properties for theming
- Mobile-first responsive design

### Content
- JSON-based content structure
- Easy to modify text and messages
- Scalable for future content expansion
- Multi-language support built-in

## 📧 Newsletter Integration

Ready for integration with:
- **Mailchimp** - Popular email marketing platform
- **ConvertKit** - Creator-focused email service
- **Buttondown** - Simple newsletter service
- **Custom API** - Build your own solution

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=.next
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is created for the Friends of Nyina wa Jambo community.

## 🙏 Acknowledgments

- Our Lady of Kibeho visionaries
- Catholic Church approval and documentation
- Rwanda and Uganda Catholic communities
- All contributors and supporters

## 📞 Support

For technical support or questions:
- Email: info@nyinawajambo.org
- Create an issue in this repository

---

**Built with ❤️ for the Friends of Nyina wa Jambo community**