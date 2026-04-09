import { useState, useEffect, useCallback, useRef } from "react";

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400;700&display=swap');
`;

/* -------------------------
  IMAGE PLACEHOLDERS
   - Using Unsplash / Picsum placeholder images for full-body people.
   - You can replace these URLs with your own images.
------------------------- */
const IMAGE_LOOKUP = {
  player: {
    Warrior: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=crop&h=1200&w=800&q=80", // armored person
    Rogue: "https://images.unsplash.com/photo-1531123414780-f63a89b4f1c6?crop=entropy&cs=tinysrgb&fit=crop&h=1200&w=800&q=80",
    Mage: "https://images.unsplash.com/photo-1542206375-0b2f9d4a7b2b?crop=entropy&cs=tinysrgb&fit=crop&h=1200&w=800&q=80",
    Necromancer: "https://images.unsplash.com/photo-1546484959-f3f0d3b7d7b1?crop=entropy&cs=tinysrgb&fit=crop&h=1200&w=800&q=80",
    "Dragon Knight": "https://images.unsplash.com/photo-1558980394-0c3b5d507da4?crop=entropy&cs=tinysrgb&fit=crop&h=1200&w=800&q=80",
    default: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=crop&h=1200&w=800&q=80",
  },
  enemies: {
    Goblin: "https://images.unsplash.com/photo-1540762276889-7a7b0a0b9c6b?crop=entropy&cs=tinysrgb&fit=crop&h=1200&w=800&q=80",
    Skeleton: "https://images.unsplash.com/photo-1517649763962-0c623066013b?crop=entropy&cs=tinysrgb&fit=crop&h=1200&w=800&q=80",
    "Dark Mage": "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=crop&h=1200&w=800&q=80",
    "Orc Warrior": "https://images.unsplash.com/photo-1558981403-c9e7f6b9262f?crop=entropy&cs=tinysrgb&fit=crop&h=1200&w=800&q=80",
    "Shadow Beast": "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?crop=entropy&cs=tinysrgb&fit=crop&h=1200&w=800&q=80",
    default: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=crop&h=1200&w=800&q=80",
  },
  arenaBg: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c6?crop=entropy&cs=tinysrgb&fit=crop&h=900&w=1600&q=80"
};

function createCharacter(name, cls) {
  const base = {
    name, class: cls,
    level: 1, xp: 0, gold: 100,
    hp: 100, max_hp: 100, damage: 10, armor: 0,
    weapon: "Basic Sword", ability: "none",
    inventory: [],
    dragons: {
      fire: { count: 0, xp: 0, level: 1 },
      ice: { count: 0, xp: 0, level: 1 },
      lightning: { count: 0, xp: 0, level: 1 },
      earth: { count: 0, xp: 0, level: 1 },
      tsar: { count: 0, xp: 0, level: 1, unlocked: false },
    },
    streak: 0, rank: "Newbie", wins: 0,
    skip: false, morality: 0, quest: "start", souls: 0,
  };
  if (cls === "Warrior") { base.hp += 30; base.max_hp += 30; base.armor += 5; }
  else if (cls === "Rogue") { base.damage += 10; }
  else if (cls === "Mage") { base.ability = "fire"; }
  else if (cls === "Necromancer") { base.hp -= 10; base.max_hp -= 10; base.damage += 5; base.ability = "shadow"; }
  else if (cls === "Dragon Knight") { base.hp += 20; base.max_hp += 20; base.damage += 5; base.ability = "fire"; base.dragon_boost = true; }
  return base;
}

const ENEMIES = [
  { name: "Goblin", hp: 30, damage: 5, armor: 0, xp: 20, gold: 10, emoji: "👺" },
  { name: "Skeleton", hp: 40, damage: 8, armor: 2, xp: 30, gold: 15, emoji: "💀" },
  { name: "Dark Mage", hp: 50, damage: 12, armor: 3, xp: 50, gold: 25, emoji: "🧙" },
  { name: "Orc Warrior", hp: 70, damage: 15, armor: 5, xp: 60, gold: 30, emoji: "👹" },
  { name: "Shadow Beast", hp: 90, damage: 18, armor: 7, xp: 80, gold: 40, emoji: "🐺" },
];

const SHOP_ITEMS = [
  { id: 1, name: "Iron Sword", cost: 50, type: "weapon", damage: 15, emoji: "⚔️" },
  { id: 2, name: "Fire Sword", cost: 100, type: "weapon", damage: 25, emoji: "🗡️" },
  { id: 3, name: "Heavy Armor", cost: 150, type: "armor", armor: 10, emoji: "🛡️" },
  { id: 4, name: "Health Potion", cost: 25, type: "potion", heal: 30, emoji: "🧪" },
  { id: 5, name: "100 XP", cost: 100, type: "xp", xp: 100, emoji: "✨" },
  { id: 6, name: "Fire Dragon", cost: 200, type: "dragon", dragon: "fire", emoji: "🐉" },
  { id: 7, name: "Ice Dragon", cost: 200, type: "dragon", dragon: "ice", emoji: "❄️" },
  { id: 8, name: "Lightning Dragon", cost: 250, type: "dragon", dragon: "lightning", emoji: "⚡" },
  { id: 9, name: "Earth Dragon", cost: 200, type: "dragon", dragon: "earth", emoji: "🌍" },
  { id: 10, name: "Tsar Dragon", cost: 1000, type: "dragon", dragon: "tsar", emoji: "☢️" },
];

const STORY_QUESTS = {
  start: { name: "The Beginning", desc: "Defeat enemies in the Shadow Forest.", reward: { xp: 100, gold: 50 }, next: "arena" },
  arena: { name: "Arena Trial", desc: "Prove yourself in the arena.", reward: { xp: 200, gold: 100 }, next: "kael" },
  kael: { name: "Face Kael Vantor", desc: "Defeat the dragon master.", reward: { xp: 500, gold: 300 }, next: "overlord" },
  overlord: { name: "The Final Stand", desc: "Defeat The Overlord.", reward: { xp: 1000, gold: 500 }, next: null },
};

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function checkLevelUp(p) {
  let needed = p.level * 100;
  let msgs = [];
  while (p.xp >= needed) {
    p.xp -= needed;
    p.level++;
    p.max_hp += 10;
    p.hp = p.max_hp;
    p.damage += 2;
    msgs.push(`🎉 LEVEL UP! Now level ${p.level}!`);
    needed = p.level * 100;
  }
  return msgs;
}

function calcDamage(attacker, defender) {
  let dmg = rand(5, attacker.damage);
  let crit = false;
  if (Math.random() < 0.2) { dmg *= 2; crit = true; }
  dmg -= (defender.armor || 0);
  return { damage: Math.max(1, dmg), crit };
}

// ─── STYLES ───
const S = {
  app: {
    fontFamily: "'Crimson Text', serif",
    background: "linear-gradient(160deg, #0a0a12 0%, #12101f 40%, #1a0e1e 70%, #0d0d15 100%)",
    minHeight: "100vh", color: "#d4c5a9",
    position: "relative", overflow: "hidden",
  },
  arenaWrap: {
    borderRadius: 10,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.04)",
    marginBottom: 12,
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  arenaOverlay: {
    position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,0.45), rgba(5,5,5,0.6))", zIndex: 0
  },
  noise: {
    position: "fixed", inset: 0, opacity: 0.04, pointerEvents: "none", zIndex: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
  },
  container: {
    maxWidth: 900, margin: "0 auto", padding: "20px 16px", position: "relative", zIndex: 1,
  },
  title: {
    fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 900,
    textAlign: "center", margin: "20px 0 6px",
    background: "linear-gradient(135deg, #c9a84c, #f0d68a, #c9a84c)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    textShadow: "none", letterSpacing: 3,
  },
  subtitle: {
    textAlign: "center", fontFamily: "'Cinzel', serif", fontSize: 13,
    color: "#8a7c5a", letterSpacing: 6, marginBottom: 30, textTransform: "uppercase",
  },
  card: {
    background: "rgba(20, 18, 30, 0.85)", border: "1px solid rgba(201, 168, 76, 0.2)",
    borderRadius: 8, padding: "20px 24px", marginBottom: 16,
    backdropFilter: "blur(10px)", position: "relative", overflow: "hidden",
  },
  cardGlow: {
    position: "absolute", top: 0, left: 0, right: 0, height: 1,
    background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)",
  },
  sectionTitle: {
    fontFamily: "'Cinzel', serif", fontSize: "clamp(1rem, 3vw, 1.2rem)", fontWeight: 700,
    color: "#c9a84c", marginBottom: 14, letterSpacing: 2,
  },
  btn: {
    fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700,
    padding: "10px 18px", border: "1px solid rgba(201,168,76,0.4)",
    borderRadius: 4, cursor: "pointer", transition: "all 0.2s",
    background: "linear-gradient(180deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))",
    color: "#d4c5a9", letterSpacing: 1, textTransform: "uppercase",
  },
  btnHover: {
    background: "linear-gradient(180deg, rgba(201,168,76,0.35), rgba(201,168,76,0.15))",
    borderColor: "rgba(201,168,76,0.7)", color: "#f0d68a",
    boxShadow: "0 0 20px rgba(201,168,76,0.15)",
  },
  btnDanger: {
    borderColor: "rgba(200,60,60,0.5)",
    background: "linear-gradient(180deg, rgba(200,60,60,0.2), rgba(200,60,60,0.05))",
    color: "#e8a0a0",
  },
  btnAccent: {
    borderColor: "rgba(100,180,255,0.4)",
    background: "linear-gradient(180deg, rgba(100,180,255,0.15), rgba(100,180,255,0.05))",
    color: "#a0d0ff",
  },
  hpBar: (pct, color) => ({
    height: 18, borderRadius: 3, background: "rgba(0,0,0,0.5)",
    border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden", position: "relative",
  }),
  hpFill: (pct, color) => ({
    height: "100%", width: `${Math.max(0, pct)}%`, borderRadius: 2,
    background: color || (pct > 50 ? "linear-gradient(90deg, #2a8a3e, #4ece5e)" : pct > 25 ? "linear-gradient(90deg, #b8860b, #daa520)" : "linear-gradient(90deg, #8b2020, #cc3333)"),
    transition: "width 0.5s ease, background 0.3s",
    boxShadow: pct > 50 ? "0 0 8px rgba(78,206,94,0.3)" : pct > 25 ? "0 0 8px rgba(218,165,32,0.3)" : "0 0 8px rgba(204,51,51,0.3)",
  }),
  hpText: {
    position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "#fff", fontWeight: 700,
    textShadow: "0 1px 3px rgba(0,0,0,0.8)",
  },
  log: {
    fontFamily: "'JetBrains Mono', monospace", fontSize: 12, lineHeight: 1.6,
    maxHeight: 200, overflowY: "auto", padding: "12px 14px",
    background: "rgba(0,0,0,0.4)", borderRadius: 4,
    border: "1px solid rgba(201,168,76,0.1)",
  },
  stat: { fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.8 },
  input: {
    fontFamily: "'Crimson Text', serif", fontSize: 16, padding: "10px 14px",
    background: "rgba(0,0,0,0.4)", border: "1px solid rgba(201,168,76,0.3)",
    borderRadius: 4, color: "#d4c5a9", width: "100%", boxSizing: "border-box",
    outline: "none",
  },
  grid: { display: "grid", gap: 8 },
  flexWrap: { display: "flex", flexWrap: "wrap", gap: 8 },
  fighterWrap: {
    display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12,
  },
  fighterCard: {
    width: "48%", position: "relative", textAlign: "center", background: "rgba(0,0,0,0.25)", borderRadius: 8, padding: 8,
  },
  fighterImg: {
    width: "100%", height: 360, objectFit: "cover", borderRadius: 6, display: "block", boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
  },
  fighterName: {
    position: "absolute", left: 12, top: 10, zIndex: 2, background: "rgba(0,0,0,0.5)", padding: "6px 10px", borderRadius: 6, fontFamily: "'Cinzel', serif", color: "#f0d68a",
  },
  hitFlash: { position: "absolute", inset: 0, background: "rgba(255,255,255,0.12)", borderRadius: 6, pointerEvents: "none", opacity: 0 },
};

// small helper components

function Btn({ children, style, onClick, disabled }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      style={{ ...S.btn, ...(style || {}), ...(hov && !disabled ? S.btnHover : {}), ...(disabled ? { opacity: 0.4, cursor: "not-allowed" } : {}) }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={disabled ? undefined : onClick}
    >{children}</button>
  );
}

function HpBar({ current, max, label, color }) {
  const pct = (current / max) * 100;
  return (
    <div style={{ marginBottom: 6 }}>
      {label && <div style={{ fontSize: 11, color: "#8a7c5a", marginBottom: 3, fontFamily: "'Cinzel', serif", letterSpacing: 1 }}>{label}</div>}
      <div style={S.hpBar(pct, color)}>
        <div style={S.hpFill(pct, color)} />
        <div style={S.hpText}>{current}/{max}</div>
      </div>
    </div>
  );
}

function Card({ title, children, style }) {
  return (
    <div style={{ ...S.card, ...(style || {}) }}>
      <div style={S.cardGlow} />
      {title && <div style={S.sectionTitle}>{title}</div>}
      {children}
    </div>
  );
}

// ─── SCREENS ───

function CharCreate({ onDone }) {
  const [name, setName] = useState("");
  const [cls, setCls] = useState(null);
  const classes = [
    { id: "Warrior", emoji: "🛡️", desc: "+30 HP, +5 Armor" },
    { id: "Rogue", emoji: "⚔️", desc: "+10 Damage" },
    { id: "Mage", emoji: "🔥", desc: "Fire ability" },
{"id": "Necromancer", "emoji": "💀"}]
  }