// Palet ölçüsünden orantılı üst görünüş çizimi (SVG). Fotoğraf gerektirmez.
// Tüm çizimler aynı ölçekte: 80x60 cm'lik palet 120x100 cm'likten gerçekten küçük görünür.
const BOX = 240;
const MAX_CM = 130;
const UNIT = 150 / MAX_CM;
const BOARDS = 5;

/** "80 X 120 cm Standart Euro Palet" -> { w: 80, h: 120, label: "80 × 120 cm", title: "Standart Euro Palet" } */
export function parseSize(name) {
  const m = name.match(/^(\d+)\s*X\s*(\d+)\s*cm\s+(.+)$/i);
  if (!m) return null;
  return { w: Number(m[1]), h: Number(m[2]), label: `${m[1]} × ${m[2]} cm`, title: m[3] };
}

export default function PalletDrawing({ w, h, className = '' }) {
  const pw = w * UNIT;
  const ph = h * UNIT;
  const x = (BOX - pw) / 2;
  const y = (BOX - ph) / 2;

  // 5 tahta, aralarında tahta kalınlığının %55'i kadar boşluk
  const gapRatio = 0.55;
  const board = ph / (BOARDS + (BOARDS - 1) * gapRatio);
  const gap = board * gapRatio;

  return (
    <svg
      className={`pd ${className}`}
      viewBox={`0 0 ${BOX} ${BOX}`}
      role="img"
      aria-label={`${w} × ${h} cm palet üst görünüş çizimi`}
    >
      {Array.from({ length: BOARDS }, (_, i) => (
        <rect
          key={i}
          className="pd__board"
          x={x}
          y={y + i * (board + gap)}
          width={pw}
          height={board}
          rx="1.5"
        />
      ))}

      {/* genişlik ölçü çizgisi */}
      <g className="pd__dim">
        <line x1={x} y1={y - 14} x2={x + pw} y2={y - 14} />
        <line x1={x} y1={y - 18} x2={x} y2={y - 10} />
        <line x1={x + pw} y1={y - 18} x2={x + pw} y2={y - 10} />
      </g>
      <text className="pd__text" x={BOX / 2} y={y - 21} textAnchor="middle" fontSize="11">
        {w}
      </text>

      {/* uzunluk ölçü çizgisi */}
      <g className="pd__dim">
        <line x1={x - 14} y1={y} x2={x - 14} y2={y + ph} />
        <line x1={x - 18} y1={y} x2={x - 10} y2={y} />
        <line x1={x - 18} y1={y + ph} x2={x - 10} y2={y + ph} />
      </g>
      <text
        className="pd__text"
        x={x - 21}
        y={BOX / 2}
        textAnchor="middle"
        fontSize="11"
        transform={`rotate(-90 ${x - 21} ${BOX / 2})`}
      >
        {h}
      </text>
    </svg>
  );
}
