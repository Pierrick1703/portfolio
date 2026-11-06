// Génère le QR code du portfolio pour le CV.
// Usage : npm run qr -- https://pierrick1703.github.io/portfolio/
import QRCode from 'qrcode';
import { mkdir } from 'node:fs/promises';

const url = process.argv[2];
if (!url || !/^https?:\/\//.test(url)) {
  console.error('Usage : npm run qr -- https://votre-pseudo.github.io/portfolio/');
  process.exit(1);
}

const outDir = 'qr';
await mkdir(outDir, { recursive: true });

const options = {
  errorCorrectionLevel: 'Q', // ~25 % de redondance : reste lisible même imprimé petit / légèrement abîmé
  margin: 2,
  color: { dark: '#111418', light: '#ffffff' },
};

// SVG : vectoriel, idéal pour Word / LaTeX / Canva (net à toutes les tailles).
await QRCode.toFile(`${outDir}/portfolio-qr.svg`, url, { ...options, type: 'svg' });
// PNG haute résolution en secours (1200 px ≈ 4 cm à 760 dpi).
await QRCode.toFile(`${outDir}/portfolio-qr.png`, url, { ...options, type: 'png', width: 1200 });

console.log(`QR code généré pour ${url}`);
console.log(`  → ${outDir}/portfolio-qr.svg`);
console.log(`  → ${outDir}/portfolio-qr.png`);
