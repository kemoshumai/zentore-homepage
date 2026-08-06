import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const width = 1200;
const height = 630;
const publicDir = new URL("../public/", import.meta.url);
const sourceDir = new URL("../src/images/", import.meta.url);

const [logo, story, game] = await Promise.all([
	readFile(new URL("logo.png", sourceDir)),
	readFile(new URL("screenshot_story.png", sourceDir)),
	readFile(new URL("screenshot_game.png", sourceDir)),
]);

const imageData = (buffer) => `data:image/png;base64,${buffer.toString("base64")}`;

const card = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#e0f2fe"/>
      <stop offset="0.55" stop-color="#7dd3fc"/>
      <stop offset="1" stop-color="#0ea5e9"/>
    </linearGradient>
    <pattern id="stripes" width="42" height="42" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
      <rect width="18" height="42" fill="#ffffff" opacity="0.28"/>
    </pattern>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#075985" flood-opacity="0.28"/>
    </filter>
    <clipPath id="storyClip"><rect x="756" y="90" width="354" height="198" rx="8"/></clipPath>
    <clipPath id="gameClip"><rect x="710" y="371" width="370" height="196" rx="8"/></clipPath>
  </defs>

  <rect width="1200" height="630" fill="url(#sky)"/>
  <rect width="1200" height="630" fill="url(#stripes)"/>
  <path d="M810 0h390v630H965c-31-161-79-310-155-454Z" fill="#0369a1" opacity="0.62"/>
  <circle cx="1020" cy="108" r="180" fill="#fef08a" opacity="0.42"/>
  <path d="M0 556 410 438l210 192H0Z" fill="#f97316" opacity="0.9"/>

  <g filter="url(#shadow)">
    <rect x="50" y="88" width="635" height="440" rx="24" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
    <image x="82" y="156" width="570" height="249" preserveAspectRatio="xMidYMid meet" href="${imageData(logo)}" xlink:href="${imageData(logo)}"/>
    <rect x="82" y="444" width="570" height="4" rx="2" fill="#e70012"/>
  </g>

  <g transform="rotate(-7 933 190)" filter="url(#shadow)">
    <rect x="738" y="72" width="390" height="236" rx="16" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
    <image x="756" y="90" width="354" height="198" preserveAspectRatio="xMidYMid slice" clip-path="url(#storyClip)" href="${imageData(story)}" xlink:href="${imageData(story)}"/>
  </g>

  <g transform="rotate(6 895 468)" filter="url(#shadow)">
    <rect x="692" y="353" width="406" height="232" rx="16" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
    <image x="710" y="371" width="370" height="196" preserveAspectRatio="xMidYMid slice" clip-path="url(#gameClip)" href="${imageData(game)}" xlink:href="${imageData(game)}"/>
  </g>
</svg>`;

await sharp(Buffer.from(card)).png().toFile(fileURLToPath(new URL("og.png", publicDir)));
