# 🎸 Dont tell the others - Offizielle Band Website

Eine moderne, responsive Website für die Band "Dont tell the others", entwickelt mit React und Next.js.

![Band Logo](public/pics/logo.svg)

## 📋 Inhaltsverzeichnis

- [Überblick](#überblick)
- [Features](#features)
- [Technologie-Stack](#technologie-stack)
- [Projektstruktur](#projektstruktur)
- [Installation](#installation)
- [Entwicklung](#entwicklung)
- [Deployment](#deployment)
- [Komponenten](#komponenten)
- [Anpassungen](#anpassungen)

## 🎯 Überblick

Diese Website präsentiert die Band "Dont tell the others" mit einer modernen, dunklen Ästhetik und flüssigen Animationen. Die Seite ist vollständig responsiv und bietet eine optimale Benutzererfahrung auf allen Geräten.

## ✨ Features

- **🎨 Modernes Design** - Dunkles Theme mit Akzentfarben und Glitch-Effekten
- **📱 Responsive** - Optimiert für Desktop, Tablet und Mobile
- **⚡ Performance** - Next.js App Router für optimale Ladezeiten
- **🔄 Smooth Scrolling** - Sanfte Navigation zwischen Sektionen
- **📸 Bildergalerie** - Präsentation von Konzertfotos mit Hover-Effekten
- **📅 Tourtermine** - Übersichtliche Darstellung kommender Events
- **📧 Kontaktformular** - Integriertes Formular für Anfragen
- **📰 Newsletter** - Anmeldemöglichkeit für Updates

## 🛠 Technologie-Stack

| Technologie | Beschreibung |
|-------------|--------------|
| [React](https://react.dev/) | UI-Bibliothek |
| [Next.js 14](https://nextjs.org/) | React Framework mit App Router |
| [TypeScript](https://www.typescriptlang.org/) | Typisiertes JavaScript |
| [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) | Styling mit CSS Variables |
| [Font Awesome](https://fontawesome.com/) | Icon-Bibliothek |
| [Google Fonts](https://fonts.google.com/) | Montserrat Schriftart |

## 📁 Projektstruktur

```
dont-tell-the-others/
├── public/
│   └── pics/
│       ├── logo.svg              # Band Logo
│       ├── band/                 # Konzertfotos
│       │   ├── band_crowd.jpeg
│       │   ├── Band_front.jpg
│       │   └── ...
│       └── band_members/         # Mitgliederfotos
│           ├── lea.png
│           ├── flo.png
│           └── ...
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root Layout mit Metadata
│   │   └── page.tsx             # Hauptseite
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation
│   │   ├── Hero.tsx             # Hero-Sektion
│   │   ├── BandSection.tsx      # Band-Mitglieder
│   │   ├── Gallery.tsx          # Fotogalerie
│   │   ├── TourSection.tsx      # Tourtermine
│   │   ├── ContactSection.tsx   # Kontaktformular
│   │   └── Footer.tsx           # Footer mit Newsletter
│   └── styles/
│       └── globals.css          # Globale Styles
├── next.config.js               # Next.js Konfiguration
├── tsconfig.json                # TypeScript Konfiguration
├── package.json                 # Abhängigkeiten
└── README.md                    # Diese Datei
```

## 🚀 Installation

### Voraussetzungen

- [Node.js](https://nodejs.org/) (Version 18 oder höher)
- npm oder yarn

### Schritte

1. **Repository klonen**
   ```bash
   git clone https://github.com/your-username/dont-tell-the-others.git
   cd dont-tell-the-others
   ```

2. **Abhängigkeiten installieren**
   ```bash
   npm install
   # oder
   yarn install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm run dev
   # oder
   yarn dev
   ```

4. **Browser öffnen**
   
   Navigiere zu [http://localhost:3000](http://localhost:3000)

## 💻 Entwicklung

### Verfügbare Scripts

| Befehl | Beschreibung |
|--------|--------------|
| `npm run dev` | Startet den Entwicklungsserver |
| `npm run build` | Erstellt einen Production Build |
| `npm run start` | Startet den Production Server |
| `npm run lint` | Führt ESLint aus |

### Hot Reload

Der Entwicklungsserver unterstützt Hot Reload - Änderungen werden automatisch im Browser aktualisiert.

## 🌐 Deployment

### Vercel (Empfohlen)

1. Pushe dein Repository zu GitHub
2. Verbinde es mit [Vercel](https://vercel.com)
3. Vercel erkennt Next.js automatisch und deployed

### Manuelles Deployment

```bash
# Build erstellen
npm run build

# Server starten
npm run start
```

### Statischer Export

Für statisches Hosting, füge in `next.config.js` hinzu:

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

## 🧩 Komponenten

### Navbar
- Responsive Navigation mit Hamburger-Menü für Mobile
- Scroll-basierte Hintergrundänderung
- Smooth Scrolling zu Sektionen

### Hero
- Vollbild-Hero mit Hintergrundbild
- Glitch-Texteffekt für den Bandnamen
- Scroll-Indikator Animation

### BandSection
- Grid-Layout für Bandmitglieder
- Hover-Effekte mit Overlay
- Responsive Spaltenanzahl

### Gallery
- Masonry-ähnliches Grid für Fotos
- Overlay mit Informationen bei Hover
- Optimierte Bilddarstellung

### TourSection
- Kartenbasierte Darstellung der Termine
- Farbcodierte Verfügbarkeitsstatus
- Ticket-Buttons

### ContactSection
- Zweispaltiges Layout
- Formular mit Validierung
- Social Media Links

### Footer
- Newsletter-Anmeldung
- Social Media Links
- Copyright-Hinweis

## 🎨 Anpassungen

### Farben ändern

In `src/styles/globals.css` findest du die CSS-Variablen:

```css
:root {
  --primary-color: #000000;      /* Hauptfarbe */
  --secondary-color: #ffffff;    /* Sekundärfarbe */
  --accent-color: #ff6b00;       /* Akzentfarbe (Orange) */
  --text-color: #ffffff;         /* Textfarbe */
  --background-color: #121212;   /* Hintergrund */
  --gray-light: #f5f5f5;         /* Helles Grau */
  --gray-dark: #1a1a1a;          /* Dunkles Grau */
}
```

### Tourtermine aktualisieren

In `src/components/TourSection.tsx` kannst du das `tourDates` Array bearbeiten:

```typescript
const tourDates: TourDate[] = [
  {
    day: '15',
    month: 'MAR',
    year: '2026',
    venue: 'Venue Name',
    city: 'Stadt, Land',
    time: '20:00 Uhr',
    status: 'available', // 'available' | 'limited' | 'sold-out'
  },
  // ...weitere Termine
];
```

### Bandmitglieder aktualisieren

In `src/components/BandSection.tsx` kannst du das `bandMembers` Array bearbeiten:

```typescript
const bandMembers: BandMember[] = [
  { name: 'Name', role: 'Instrument', image: '/pics/band_members/foto.png' },
  // ...weitere Mitglieder
];
```

## 📄 Lizenz

© 2026 Dont tell the others. Alle Rechte vorbehalten.

## 📞 Kontakt

- **Booking**: booking@dontelltheothers.de
- **Management**: Rock Agency GmbH
- **Website**: [www.dontelltheothers.de](https://www.dontelltheothers.de)

---

Made with ❤️ for Rock Music
