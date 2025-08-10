# Friends of Nyina wa Jambo

This is the repo serving the Friends of Nyina wa Jambo website promoting the message of Our Lady of Kibeho and the 
devotion to the Seven Sorrows of Mary.

## Installation & Setup
If you are at a point where you'd need to run this in your local, you'll need to have:
1. Node 20+


1. **Clone the repository**
   ```bash
   git clone git@github.com:Ashaba/friends-of-nyina-wa-jambo.git
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

## Multi-Language Support

The website supports three languages:
- **English** (default) - `/`
- **French** - `/fr`
- **Kinyarwanda** - `/rw`

Add new languages by:
1. Creating a new JSON file in `messages/`
2. Adding the locale to `src/i18n.ts`
3. Updating the middleware configuration

## Deployment
### Vercel
```bash
npm run build
vercel deploy
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=.next
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
