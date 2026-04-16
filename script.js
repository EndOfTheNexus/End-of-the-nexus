const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const ui = {
    homeScreen: document.getElementById("home-screen"),
    homePanel: document.querySelector(".home-panel"),
    playerNameInput: document.getElementById("player-name-input"),
    viewerCountText: document.getElementById("viewer-count-text"),
    viewerCountNote: document.getElementById("viewer-count-note"),
    homePveButton: document.getElementById("home-pve-button"),
    homeBossRushButton: document.getElementById("home-bossrush-button"),
    homePremiumNightmareButton: document.getElementById("home-premium-nightmare-button"),
    homePremiumAlienButton: document.getElementById("home-premium-alien-button"),
    homePremiumLegendButton: document.getElementById("home-premium-legend-button"),
    homePremiumDragonButton: document.getElementById("home-premium-dragon-button"),
    homePremiumZombieButton: document.getElementById("home-premium-zombie-button"),
    homePremiumChaosButton: document.getElementById("home-premium-chaos-button"),
    homePremiumTicketButton: document.getElementById("home-premium-ticket-button"),
    homeReviewsButton: document.getElementById("home-reviews-button"),
    homeCreatorButton: document.getElementById("home-creator-button"),
    homeZombieButton: document.getElementById("home-zombie-button"),
    homeSurvivalButton: document.getElementById("home-survival-button"),
    homeContinueButton: document.getElementById("home-continue-button"),
    homeContinueLargeButton: document.getElementById("home-continue-large-button"),
    homeInstallButton: document.getElementById("home-install-button"),
    homeDemoButton: document.getElementById("home-demo-button"),
    homeBuyPremiumButton: document.getElementById("home-buy-premium-button"),
    homeMultiplayerButton: document.getElementById("home-multiplayer-button"),
    homeTrainingButton: document.getElementById("home-training-button"),
    homeStoreButton: document.getElementById("home-store-button"),
    homeEditButton: document.getElementById("home-edit-button"),
    homeChatButton: document.getElementById("home-chat-button"),
    homeAppStatus: document.getElementById("home-app-status"),
    homeMainContent: document.getElementById("home-main-content"),
    homeQuestList: document.getElementById("home-quest-list"),
    homeStorePanel: document.getElementById("home-store-panel"),
    homeEditorPanel: document.getElementById("home-editor-panel"),
    homeChatPanel: document.getElementById("home-chat-panel"),
    homeCreatorPanel: document.getElementById("home-creator-panel"),
    homeReviewsPanel: document.getElementById("home-reviews-panel"),
    homeMultiplayerPanel: document.getElementById("home-multiplayer-panel"),
    homePremiumPanel: document.getElementById("home-premium-panel"),
    homeZombieRewardPanel: document.getElementById("home-zombie-reward-panel"),
    homeShopItems: document.getElementById("home-shop-items"),
    premiumTicketToday: document.getElementById("premium-ticket-today"),
    premiumTicketQuests: document.getElementById("premium-ticket-quests"),
    premiumTicketRewards: document.getElementById("premium-ticket-rewards"),
    premiumTicketBuyButton: document.getElementById("premium-ticket-buy-button"),
    premiumTicketStatus: document.getElementById("premium-ticket-status"),
    zombieRewardGrid: document.getElementById("zombie-reward-grid"),
    zombieRewardStatus: document.getElementById("zombie-reward-status"),
    homeChatLog: document.getElementById("home-chat-log"),
    homeChatInput: document.getElementById("home-chat-input"),
    homeChatSendButton: document.getElementById("home-chat-send-button"),
    creatorCardName: document.getElementById("creator-card-name"),
    creatorCardCopy: document.getElementById("creator-card-copy"),
    creatorAboutInput: document.getElementById("creator-about-input"),
    reviewAverageText: document.getElementById("review-average-text"),
    reviewCountText: document.getElementById("review-count-text"),
    reviewStarsSelect: document.getElementById("review-stars-select"),
    reviewFeedbackInput: document.getElementById("review-feedback-input"),
    reviewSubmitButton: document.getElementById("review-submit-button"),
    reviewStatusText: document.getElementById("review-status-text"),
    reviewList: document.getElementById("review-list"),
    multiplayerRoomInput: document.getElementById("multiplayer-room-input"),
    multiplayerModeSelect: document.getElementById("multiplayer-mode-select"),
    multiplayerArenaSelect: document.getElementById("multiplayer-arena-select"),
    multiplayerJoinButton: document.getElementById("multiplayer-join-button"),
    multiplayerStatusText: document.getElementById("multiplayer-status-text"),
    lookSkin: document.getElementById("look-skin"),
    lookHair: document.getElementById("look-hair"),
    lookArmor: document.getElementById("look-armor"),
    lookBuild: document.getElementById("look-build"),
    lookVisor: document.getElementById("look-visor"),
    lookHelmet: document.getElementById("look-helmet"),
    lookRider: document.getElementById("look-rider"),
    editorPlayerCanvas: document.getElementById("editor-player-canvas"),
    editorPlayerName: document.getElementById("editor-player-name"),
    hpFill: document.getElementById("hp-fill"),
    hpText: document.getElementById("hp-text"),
    damageText: document.getElementById("damage-text"),
    speedText: document.getElementById("speed-text"),
    waveText: document.getElementById("wave-text"),
    scoreText: document.getElementById("score-text"),
    goldText: document.getElementById("gold-text"),
    weaponText: document.getElementById("weapon-text"),
    dragonText: document.getElementById("dragon-text"),
    questText: document.getElementById("quest-text"),
    comboText: document.getElementById("combo-text"),
    statusText: document.getElementById("status-text"),
    assistantMode: document.getElementById("assistant-mode"),
    assistantText: document.getElementById("assistant-text"),
    bossStatus: document.getElementById("boss-status"),
    bossFill: document.getElementById("boss-fill"),
    bossHpText: document.getElementById("boss-hp-text"),
    enemyCount: document.getElementById("enemy-count"),
    timerText: document.getElementById("timer-text"),
    shopItems: document.getElementById("shop-items"),
    combatLog: document.getElementById("combat-log"),
    chatLog: document.getElementById("chat-log"),
    chatInput: document.getElementById("chat-input"),
    chatSendButton: document.getElementById("chat-send-button"),
    startButton: document.getElementById("start-button"),
    restartButton: document.getElementById("restart-button"),
    clearLogButton: document.getElementById("clear-log-button"),
    arenaHint: document.querySelector(".hint"),
    dialoguePanel: document.getElementById("dialogue-panel"),
    dialogueChoices: document.getElementById("dialogue-choices"),
    dialogueSpeaker: document.getElementById("dialogue-speaker"),
    dialogueTitle: document.getElementById("dialogue-title"),
    dialogueText: document.getElementById("dialogue-text"),
    dialogueWhatButton: document.getElementById("dialogue-what-button"),
    dialogueWhereButton: document.getElementById("dialogue-where-button"),
    dialogueWhoButton: document.getElementById("dialogue-who-button"),
    dialogueCloseButton: document.getElementById("dialogue-close-button")
};

const GAME = {
    width: canvas.width,
    height: canvas.height,
    enemySize: 50,
    bossSize: 104
};

const WORLD = {
    width: 5200,
    height: 3200
};
const CREATOR_NAME = "The Developer";
const DEFAULT_PLAYER_NAME = "Player 1";
const CREATOR_ABOUT_OLD = "Hi, I am Jonah matthew moore and i am a 10 year old boy who lives in cary north carolina. I have worked on this game for over a year and got inspired from my 21 year old brother. He works in UNC colledge and climbs mountains and codes for a living. I am gratefull for all of you people who supporte m to make this game.";
const CREATOR_ABOUT_OLD_FIXED = "Hi, I am Jonah Matthew Moore, and I am a 10-year-old boy who lives in Cary, North Carolina. I have worked on this game for over a year and got inspired by my 21-year-old brother. He works at UNC college, climbs mountains, and codes for a living. I am grateful for all of you people who supported me in making this game.";
const CREATOR_ABOUT = "Hi, I am the creator of this game. I live in NC, have worked on it for over a year, and got inspired by my older brother. Thank you to everyone who supports me and believes in what I am building.";
const WORLD_SCALE = WORLD.width / 3600;
const CHARACTER_SCALE = 1.35;
const CHASE_CAMERA_ZOOM = 0.92;
const CHASE_CAMERA_SCREEN_Y = 0.5;

function s(value) {
    return Math.round(value * WORLD_SCALE);
}

const keys = {
    left: false,
    right: false,
    up: false,
    down: false,
    block: false,
    jump: false
};

const attackFlashMs = 150;
const PVE_MIN_ACTIVE_ENEMIES = 5;
const FINAL_PVE_WAVE = 100;
const MULTIPLAYER_SYNC_MS = {
    versus: 70,
    coopHost: 180,
    coopGuest: 95
};
const MULTIPLAYER_MAX_SYNC_PROJECTILES = 14;
const music = {
    context: null,
    masterGain: null,
    bassGain: null,
    ambientGain: null,
    pulseGain: null,
    leadGain: null,
    shimmerGain: null,
    oscillators: [],
    modulationOscillators: [],
    started: false,
    scheduleTimer: null,
    step: 0
};
const multiplayer = {
    channel: null,
    room: "",
    gameMode: "coop",
    arena: "quake",
    clientId: `player-${Math.random().toString(36).slice(2, 10)}`,
    connected: false,
    isHost: true,
    remoteClientId: "",
    lastSentAt: 0
};
const appInstall = {
    deferredPrompt: null,
    installed: window.matchMedia ? window.matchMedia("(display-mode: standalone)").matches : false,
    serviceWorkerReady: false,
    installChoicePending: false
};

const MULTIPLAYER_ARENAS = {
    quake: { questIndex: 0, questWorld: "world1", spawn: { x: s(520), y: s(1120) }, rivalSpawn: { x: s(2980), y: s(820) }, label: "Quake Square" },
    storm: { questIndex: 3, questWorld: "world1", spawn: { x: s(720), y: s(1040) }, rivalSpawn: { x: s(2740), y: s(760) }, label: "Storm Docks" },
    frost: { questIndex: 2, questWorld: "world1", spawn: { x: s(660), y: s(1180) }, rivalSpawn: { x: s(2860), y: s(880) }, label: "Frost Hollow" },
    desert: { questIndex: 15, questWorld: "world1", spawn: { x: s(620), y: s(1100) }, rivalSpawn: { x: s(2820), y: s(860) }, label: "Glass Desert" },
    alien: { questIndex: 0, questWorld: "alien", spawn: { x: s(640), y: s(1080) }, rivalSpawn: { x: s(2900), y: s(860) }, label: "Alien Crater" }
};
const SHOP_ITEMS = [
    { id: "iron-blade", name: "Iron Blade", cost: 60, type: "weapon", damage: 5, label: "+5 damage" },
    { id: "phoenix-edge", name: "Phoenix Edge", cost: 140, type: "weapon", damage: 10, label: "+10 damage" },
    { id: "storm-dragon", name: "Storm Dragon", cost: 120, type: "dragon", damage: 3, label: "Orbital lightning dragon" },
    { id: "ember-dragon", name: "Ember Dragon", cost: 180, type: "dragon", damage: 5, label: "Fire dragon attack support" },
    { id: "premium-ticket", name: "Premium Ticket", cost: 0, type: "premium-ticket", label: "Unlock premium modes, bonus gear, and daily rewards", premiumUsd: 0.99 }
];
const UPGRADES = [
    { id: "damage", name: "Sword Upgrade", baseCost: 90, step: 3, label: "+3 damage" },
    { id: "armor", name: "Armor Upgrade", baseCost: 100, step: 2, label: "+2 armor" },
    { id: "speed", name: "Boot Upgrade", baseCost: 85, step: 1, label: "+1 speed" },
    { id: "health", name: "Health Upgrade", baseCost: 95, step: 10, label: "+10 max health" },
    { id: "dragon", name: "Dragon Upgrade", baseCost: 120, step: 2, label: "+2 dragon damage" }
];
const ZOMBIE_VICTORY_REWARDS = [
    {
        id: "slayer-title",
        name: "Zombie Slayer Title",
        art: "🏆",
        text: "Get the Zombie Slayer title and +4 damage.",
        apply() {
            state.player.title = "Zombie Slayer";
            state.player.damage += 4;
        }
    },
    {
        id: "kartasou-fang",
        name: "Kartasou Fang",
        art: "🗡️",
        text: "Get a powerful weapon and +10 damage.",
        apply() {
            state.player.weaponName = "Kartasou Fang";
            state.player.damage += 10;
        }
    },
    {
        id: "underworld-dragon",
        name: "Underworld Dragon",
        art: "🐉",
        text: "Gain a rare dragon ally with strong fire damage.",
        apply() {
            state.player.dragons.push({
                name: "Underworld Dragon",
                damage: 12,
                orbit: Math.random() * Math.PI * 2
            });
        }
    },
    {
        id: "plague-crown",
        name: "Plague Crown Armor",
        art: "👑",
        text: "Gain +12 health, +3 armor, and a dark crown reward.",
        apply() {
            state.player.maxHp += 12;
            state.player.hp = Math.min(state.player.maxHp, state.player.hp + 12);
            state.player.armor += 3;
            state.player.title = "Plague Crown";
        }
    }
];
const PREMIUM_TICKET_WEEKLY_REWARDS = [
    {
        theme: "War Chest Week",
        rewards: [
            { day: 1, title: "Gold Drop", art: "🪙", text: "+120 gold" },
            { day: 2, title: "Blade Power", art: "⚔️", text: "+2 damage" },
            { day: 3, title: "Shield Core", art: "🛡️", text: "+4 health" },
            { day: 4, title: "Speed Burst", art: "👢", text: "+1 speed" },
            { day: 5, title: "Dragon Feed", art: "🐉", text: "Ticket Dragon boost" },
            { day: 6, title: "Big Chest", art: "🎁", text: "+200 gold" },
            { day: 7, title: "Premium Cache", art: "👑", text: "+5 damage and +5 health" }
        ]
    },
    {
        theme: "Power Week",
        rewards: [
            { day: 1, title: "Mega Gold", art: "💰", text: "+180 gold" },
            { day: 2, title: "Heavy Strike", art: "🗡️", text: "+3 damage" },
            { day: 3, title: "Iron Skin", art: "🧱", text: "+3 armor" },
            { day: 4, title: "Sprint Core", art: "⚡", text: "+2 speed" },
            { day: 5, title: "Dragon Charge", art: "🔥", text: "All dragon damage +2" },
            { day: 6, title: "Health Crate", art: "❤️", text: "+12 health" },
            { day: 7, title: "Champion Bonus", art: "🏆", text: "+4 damage and +150 gold" }
        ]
    },
    {
        theme: "Boss Hunter Week",
        rewards: [
            { day: 1, title: "Hunter Gold", art: "🪙", text: "+150 gold" },
            { day: 2, title: "Boss Breaker", art: "🪓", text: "+2 damage" },
            { day: 3, title: "Guardian Plate", art: "🛡️", text: "+6 health" },
            { day: 4, title: "Quick Step", art: "💨", text: "+1 speed" },
            { day: 5, title: "Dragon Bond", art: "🐲", text: "Ticket Dragon boost" },
            { day: 6, title: "Treasure Vault", art: "💎", text: "+220 gold" },
            { day: 7, title: "Boss Slayer Cache", art: "☄️", text: "+5 damage and +2 speed" }
        ]
    }
];
const QUESTS = [
    { title: "The Earthquake", boss: "Fault Bringer", kills: 3, enemyHp: 50, enemyDamage: 7, bossHp: 220, bossDamage: 13, gold: 55, scene: "A broken town square split by fresh cracks.", brief: "Walk the square, hear what the survivors saw, and hunt down Fault Bringer." },
    { title: "Ashen Gate", boss: "Cinder Marshal", kills: 3, enemyHp: 56, enemyDamage: 8, bossHp: 240, bossDamage: 14, gold: 60, scene: "The city gate is burning and the guards are missing.", brief: "Push through the smoke, question the gate wardens, and bring down the fire commander." },
    { title: "Frozen Hollow", boss: "Icebound Fang", kills: 4, enemyHp: 60, enemyDamage: 8, bossHp: 255, bossDamage: 15, gold: 65, scene: "Snow covers a village where the trail suddenly ends.", brief: "Search the hollow for clues and survive the beast pack before facing Icebound Fang." },
    { title: "Storm Warning", boss: "Thunder Regent", kills: 4, enemyHp: 65, enemyDamage: 9, bossHp: 270, bossDamage: 16, gold: 70, scene: "Lightning scars the docks and every witness points to the tower.", brief: "Track the storm through the harbor and challenge the ruler of the thunderhead." },
    { title: "Grave Lantern", boss: "Crypt Warden", kills: 4, enemyHp: 70, enemyDamage: 10, bossHp: 285, bossDamage: 17, gold: 80, scene: "Blue lanterns flicker in a graveyard that should be dark.", brief: "Question the mourners, clear the risen guards, and force open the crypt." },
    { title: "Red Harbor", boss: "Harpoon King", kills: 5, enemyHp: 74, enemyDamage: 10, bossHp: 300, bossDamage: 18, gold: 90, scene: "Fishing boats drift back empty under a red sunrise.", brief: "Walk the piers, follow the blood-marked cargo, and challenge the raider chief." },
    { title: "Iron Riot", boss: "Breaker Voss", kills: 5, enemyHp: 80, enemyDamage: 11, bossHp: 320, bossDamage: 19, gold: 95, scene: "The forge district shakes with hammer blows and panic.", brief: "Talk to trapped smiths, fight through the rioters, and stop Breaker Voss." },
    { title: "Sand Veil", boss: "Dune Tyrant", kills: 5, enemyHp: 86, enemyDamage: 11, bossHp: 340, bossDamage: 20, gold: 100, scene: "A caravan lies half-buried beneath moving dunes.", brief: "Follow the drifting signs, uncover the ambush site, and defeat the tyrant of the sands." },
    { title: "Moonlit Hunt", boss: "Silver Maw", kills: 6, enemyHp: 90, enemyDamage: 12, bossHp: 360, bossDamage: 21, gold: 110, scene: "The forest path is lined with torn banners and paw marks.", brief: "Question the hunters, survive the stalkers, and bring down Silver Maw." },
    { title: "Black Orchard", boss: "Root Queen", kills: 6, enemyHp: 96, enemyDamage: 12, bossHp: 380, bossDamage: 22, gold: 120, scene: "Fruit hangs rotten in an orchard where no birds sing.", brief: "Search the dead grove, learn what poisoned it, and cut out the heart of the blight." },
    { title: "Sunken Bell", boss: "Tide Apostle", kills: 6, enemyHp: 102, enemyDamage: 13, bossHp: 400, bossDamage: 23, gold: 130, scene: "Temple bells ring from beneath flooded streets.", brief: "Walk the waterlogged ruins, follow the echoes, and defeat the apostle below." },
    { title: "Broken Crown", boss: "King Without Dawn", kills: 7, enemyHp: 108, enemyDamage: 13, bossHp: 425, bossDamage: 24, gold: 140, scene: "A throne room stands open after a night of betrayal.", brief: "Question the last loyal guards and end the ruler who would not fall." },
    { title: "Witchglass", boss: "Mirror Widow", kills: 7, enemyHp: 114, enemyDamage: 14, bossHp: 450, bossDamage: 25, gold: 150, scene: "Every shattered window reflects a different crime.", brief: "Read the false reflections, beat the glassbound servants, and catch the widow." },
    { title: "Molten Choir", boss: "Lava Cantor", kills: 7, enemyHp: 120, enemyDamage: 15, bossHp: 470, bossDamage: 26, gold: 160, scene: "A cathedral glows from below with molten song.", brief: "Ask the fleeing clergy what awakened the forge hymn, then silence the cantor." },
    { title: "Raven Siege", boss: "Night Talon", kills: 8, enemyHp: 126, enemyDamage: 15, bossHp: 495, bossDamage: 27, gold: 175, scene: "Black feathers cover the battlements after a midnight strike.", brief: "Move from tower to tower, gather witness tales, and cut down Night Talon." },
    { title: "Glass Desert", boss: "Shatter Saint", kills: 8, enemyHp: 132, enemyDamage: 16, bossHp: 520, bossDamage: 28, gold: 185, scene: "The desert floor has fused into mirrors under impossible heat.", brief: "Follow the reflected footprints and defeat the saint who broke the sky." },
    { title: "Cathedral of Rust", boss: "Oxide Judge", kills: 8, enemyHp: 138, enemyDamage: 16, bossHp: 545, bossDamage: 29, gold: 195, scene: "Metal walls crumble like old leaves in a rusted basilica.", brief: "Speak with the last machinists, survive the corroded guards, and face the judge." },
    { title: "Last Avalanche", boss: "Peak Eater", kills: 9, enemyHp: 145, enemyDamage: 17, bossHp: 575, bossDamage: 30, gold: 210, scene: "A mountain pass is buried under fresh ice and broken sleds.", brief: "Trace the collapse, help the stranded climbers, and stop the monster at the summit." },
    { title: "The Fallen Banner", boss: "Warlord Serik", kills: 9, enemyHp: 152, enemyDamage: 18, bossHp: 610, bossDamage: 32, gold: 230, scene: "War tents burn around a torn banner planted in mud.", brief: "Ask the wounded what went wrong, carve through the raiders, and defeat Serik." },
    { title: "End of the Nexus", boss: "The Last Black Knight", kills: 10, enemyHp: 160, enemyDamage: 19, bossHp: 680, bossDamage: 34, gold: 300, scene: "The final fortress stands silent after every other road has failed.", brief: "Walk the last corridor, learn the truth of the war, and win the final duel." }
];
const ALIEN_PATCH_QUESTS = [
    { title: "Crash at Vanta Reach", boss: "Skull Saucer", kills: 5, enemyHp: 170, enemyDamage: 20, bossHp: 720, bossDamage: 36, gold: 320, scene: "A black-sand frontier glows under alien wreckage and green fires.", brief: "Question survivors of the crash, fight through the invaders, and bring down the first alien commander." },
    { title: "Neon Hive", boss: "Hive Regent Xel", kills: 6, enemyHp: 182, enemyDamage: 21, bossHp: 760, bossDamage: 38, gold: 350, scene: "A city of crystal towers pulses with living neon and insectoid drones.", brief: "Cross the hive lanes, uncover the brood signal, and stop Regent Xel." },
    { title: "Moon of Teeth", boss: "Void Maw Dragon", kills: 7, enemyHp: 194, enemyDamage: 22, bossHp: 810, bossDamage: 40, gold: 380, scene: "Jagged moon-rock plains circle a fortress carved from a giant skull.", brief: "Travel the moon wastes and survive the alien dragon nesting above the crater." },
    { title: "The Signal Pit", boss: "Oracle of Static", kills: 8, enemyHp: 206, enemyDamage: 24, bossHp: 860, bossDamage: 42, gold: 420, scene: "A giant transmission pit broadcasts a mind-breaking signal across the stars.", brief: "Shut down the alien beacons, push into the pit, and destroy the Oracle." },
    { title: "Crown of Andromeda", boss: "Emperor Zorvex", kills: 9, enemyHp: 220, enemyDamage: 26, bossHp: 930, bossDamage: 46, gold: 500, scene: "The final alien citadel hangs above a dead world wrapped in cold light.", brief: "Storm the sky throne, cut through the royal guard, and defeat Emperor Zorvex." }
];
const ZOMBIE_APOCALYPSE_QUESTS = [
    {
        title: "Zombie Apocalypse",
        boss: "Plague Lord Morvane",
        kills: 12,
        enemyHp: 58,
        enemyDamage: 8,
        bossHp: 760,
        bossDamage: 20,
        gold: 260,
        scene: "The village has been overrun by zombies, the streets are flooded with blood, and the only hope is an antidote hidden near the black keep.",
        brief: "Rescue survivors, gather antidote ingredients, clear the zombie packs, then hunt down the plague boss and end the outbreak."
    }
];
const PREMIUM_FUN_QUESTS = [
    {
        title: "King of the Chicken Knights",
        boss: "Sir Cluckles The Loud",
        kills: 5,
        enemyHp: 88,
        enemyDamage: 10,
        bossHp: 420,
        bossDamage: 19,
        gold: 180,
        scene: "A village fair has been ruined by armored chickens kicking over every pie stand.",
        brief: "Battle the pecking minions, save the pie carts, and defeat the chicken king before he declares snack law."
    },
    {
        title: "The Great Toilet Tornado",
        boss: "Porcelain Doomspin",
        kills: 6,
        enemyHp: 94,
        enemyDamage: 11,
        bossHp: 470,
        bossDamage: 21,
        gold: 210,
        scene: "The town bathhouse has turned into a spinning storm of flying soap and toilets.",
        brief: "Fight through slippery minions, survive the splash zone, and stop the giant toilet tornado from flushing the map."
    },
    {
        title: "The Burrito Uprising",
        boss: "El Wrapzilla",
        kills: 7,
        enemyHp: 102,
        enemyDamage: 12,
        bossHp: 520,
        bossDamage: 23,
        gold: 240,
        scene: "A moonlit food court is under attack by rolling burrito warriors with salsa rage.",
        brief: "Beat the spicy minions, rescue the snack stands, and topple the giant burrito boss before the whole place becomes lunch."
    },
    {
        title: "Grandpa Gorilla's Disco Basement",
        boss: "DJ Bananabeard",
        kills: 8,
        enemyHp: 112,
        enemyDamage: 13,
        bossHp: 580,
        bossDamage: 25,
        gold: 270,
        scene: "A secret basement glows with disco lights while angry gorilla dancers guard the turntables.",
        brief: "Clear the beat-thumping minions, dodge the dance floor chaos, and defeat the gorilla DJ before the bass shakes the world apart."
    }
];
const WORLD_ONE_CLEAR_KEY = "nexus-world-one-cleared";
const PROFILE_SAVE_KEY = "nexus-player-profile";
const RUN_SAVE_KEY = "nexus-current-run";
const PROGRESS_RESET_MARKER_KEY = "nexus-progress-reset-v1";
const REVIEWS_SAVE_KEY = "nexus-player-reviews";
const VIEW_COUNTER_NAMESPACE = "end-of-the-nexus";
const VIEW_COUNTER_KEY = "website-views";
const VIEW_COUNTER_SESSION_KEY = "end-of-the-nexus-view-counted";
const VIEW_COUNTER_FALLBACK_KEY = "end-of-the-nexus-local-views";
const VIEW_COUNTER_FLOOR = 215;
const CACHE_RESET_MARKER_KEY = "end-of-the-nexus-cache-reset-v1";
const LOOKS = {
    skin: {
        warm: "#f2c5a1",
        deep: "#8f5a3c",
        fair: "#f5dbc7"
    },
    hair: {
        brown: "#3f2d1e",
        black: "#161616",
        blonde: "#c9a15a",
        red: "#8d402d"
    },
    armor: {
        azure: {
            armorTop: "#8e9fb2",
            armorBottom: "#3f5367",
            capeTop: "rgba(42, 57, 74, 0.92)",
            capeBottom: "rgba(14, 18, 28, 0.34)",
            swordEdge: "#bfcfdb",
            helmet: "rgba(198, 208, 219, 0.88)",
            pauldron: "#c5d0d9"
        },
        crimson: {
            armorTop: "#9f8484",
            armorBottom: "#5f3e45",
            capeTop: "rgba(66, 27, 34, 0.94)",
            capeBottom: "rgba(24, 10, 14, 0.3)",
            swordEdge: "#d8c2c6",
            helmet: "rgba(206, 192, 193, 0.9)",
            pauldron: "#cab2b4"
        },
        emerald: {
            armorTop: "#90a38b",
            armorBottom: "#465847",
            capeTop: "rgba(33, 52, 38, 0.93)",
            capeBottom: "rgba(12, 20, 14, 0.3)",
            swordEdge: "#cad7ca",
            helmet: "rgba(201, 211, 203, 0.9)",
            pauldron: "#c3d0c1"
        }
    },
    visor: {
        ice: {
            color: "#9cc4d1",
            glow: "rgba(156, 196, 209, 0.38)"
        },
        gold: {
            color: "#ccb16c",
            glow: "rgba(204, 177, 108, 0.36)"
        },
        crimson: {
            color: "#b36f75",
            glow: "rgba(179, 111, 117, 0.34)"
        },
        emerald: {
            color: "#7cad8a",
            glow: "rgba(124, 173, 138, 0.34)"
        }
    },
    build: {
        athletic: {
            bodyHeight: 30,
            chestWidth: 11,
            waistWidth: 6,
            shoulderRadius: 5.4,
            headRadius: 4.1,
            armWidth: 9.4,
            bicepRadius: 6.4,
            swordArmReach: 12,
            legWidth: 9
        },
        bulky: {
            bodyHeight: 31,
            chestWidth: 12.6,
            waistWidth: 6.8,
            shoulderRadius: 6.1,
            headRadius: 4.2,
            armWidth: 10.2,
            bicepRadius: 7.2,
            swordArmReach: 12.6,
            legWidth: 9.6
        },
        swift: {
            bodyHeight: 31,
            chestWidth: 10.2,
            waistWidth: 5.5,
            shoulderRadius: 5,
            headRadius: 3.9,
            armWidth: 8.7,
            bicepRadius: 5.8,
            swordArmReach: 12.8,
            legWidth: 8.5
        }
    },
    helmet: {
        knight: {
            shade: null,
            crest: null
        },
        crowned: {
            shade: "rgba(245, 233, 196, 0.92)",
            crest: "#ffd871"
        },
        shadow: {
            shade: "rgba(146, 154, 173, 0.92)",
            crest: "#8feaff"
        }
    }
};
const pointer = {
    x: GAME.width / 2,
    y: GAME.height / 2,
    active: false
};

function isMultiplayerCoop() {
    return state && state.mode === "multiplayer" && ["coop", "bossraid", "dragonhunt"].includes(multiplayer.gameMode);
}

function isMultiplayerVersus() {
    return state && state.mode === "multiplayer" && multiplayer.gameMode === "versus";
}

function isPremiumMultiplayerMode(mode = multiplayer.gameMode) {
    return mode === "bossraid" || mode === "dragonhunt";
}

function getMultiplayerModeLabel(mode = multiplayer.gameMode) {
    if (mode === "bossraid") {
        return "Boss Raid";
    }
    if (mode === "dragonhunt") {
        return "Dragon Hunt";
    }
    return mode === "coop" ? "Co-op" : "Versus";
}

function isMultiplayerHost() {
    return !isMultiplayerCoop() || multiplayer.isHost;
}

function getMultiplayerStatusText() {
    const modeLabel = getMultiplayerModeLabel();
    if (!multiplayer.room) {
        return "Status: Not connected";
    }

    if (!multiplayer.connected) {
        return `Status: Waiting in ${multiplayer.room} (${modeLabel})`;
    }

    if (isMultiplayerCoop()) {
        return `Status: Connected to ${multiplayer.room} (${modeLabel} ${multiplayer.isHost ? "Host" : "Guest"})`;
    }

    return `Status: Connected to ${multiplayer.room} (${modeLabel})`;
}

function syncMultiplayerStatusText() {
    ui.multiplayerStatusText.textContent = getMultiplayerStatusText();
}

function refreshMultiplayerHost(remoteClientId) {
    multiplayer.remoteClientId = remoteClientId || multiplayer.remoteClientId;
    if (multiplayer.gameMode !== "coop" || !multiplayer.remoteClientId) {
        multiplayer.isHost = true;
        return;
    }

    multiplayer.isHost = multiplayer.clientId.localeCompare(multiplayer.remoteClientId) < 0;
}

function loadWorldOneCleared() {
    try {
        const value = window.localStorage.getItem(WORLD_ONE_CLEAR_KEY);
        if (value === null) {
            return true;
        }
        return value === "true";
    } catch (error) {
        return true;
    }
}

function saveWorldOneCleared(value) {
    try {
        window.localStorage.setItem(WORLD_ONE_CLEAR_KEY, value ? "true" : "false");
    } catch (error) {
        // ignore storage errors
    }
}

function loadSavedProfile() {
    try {
        const raw = window.localStorage.getItem(PROFILE_SAVE_KEY);
        if (!raw) {
            return null;
        }
        return JSON.parse(raw);
    } catch (error) {
        return null;
    }
}

function loadSavedReviews() {
    try {
        const raw = window.localStorage.getItem(REVIEWS_SAVE_KEY);
        if (!raw) {
            return [];
        }
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}

function saveReviews() {
    try {
        window.localStorage.setItem(REVIEWS_SAVE_KEY, JSON.stringify(state.reviews || []));
    } catch (error) {
        // ignore storage errors
    }
}

function savePlayerProfile() {
    if (!state || !state.player || state.mode === "multiplayer") {
        return;
    }

    try {
        window.localStorage.setItem(PROFILE_SAVE_KEY, JSON.stringify({
            player: {
                name: state.player.name,
                look: state.player.look,
                damage: state.player.damage,
                speed: state.player.speed,
                armor: state.player.armor,
                maxHp: state.player.maxHp,
                hp: state.player.hp,
                gold: state.player.gold,
                weaponName: state.player.weaponName,
                dragons: state.player.dragons,
                premiumItems: state.player.premiumItems,
                upgrades: state.player.upgrades,
                premiumDailyStamp: state.player.premiumDailyStamp || "",
                premiumDailyClaims: state.player.premiumDailyClaims || 0,
                title: state.player.title || "",
                zombieRewardClaimed: Boolean(state.player.zombieRewardClaimed),
                zombieRewardChoice: state.player.zombieRewardChoice || "",
                about: state.player.about || ""
            },
            worldOneCleared: state.worldOneCleared
        }));
    } catch (error) {
        // ignore storage errors
    }
}

function clearSavedRun() {
    try {
        window.localStorage.removeItem(RUN_SAVE_KEY);
    } catch (error) {
        // ignore storage errors
    }
}

function resetAllSavedProgress() {
    try {
        window.localStorage.removeItem(PROFILE_SAVE_KEY);
        window.localStorage.removeItem(RUN_SAVE_KEY);
        window.localStorage.removeItem(REVIEWS_SAVE_KEY);
        window.localStorage.setItem(WORLD_ONE_CLEAR_KEY, "false");
    } catch (error) {
        // ignore storage errors
    }
}

function resetProgressOnce() {
    try {
        if (window.localStorage.getItem(PROGRESS_RESET_MARKER_KEY) === "done") {
            return;
        }
        resetAllSavedProgress();
        window.localStorage.setItem(PROGRESS_RESET_MARKER_KEY, "done");
    } catch (error) {
        // ignore storage errors
    }
}

function hasPremiumAccess() {
    return Boolean(
        state &&
        state.player &&
        Array.isArray(state.player.premiumItems) &&
        state.player.premiumItems.includes("premium-ticket")
    );
}

function updatePremiumModeButtons() {
    const premiumUnlocked = hasPremiumAccess();
    const buttons = [
        [ui.homePremiumNightmareButton, "Nightmare Survival"],
        [ui.homePremiumAlienButton, "Alien Gauntlet"],
        [ui.homePremiumLegendButton, "Legend Boss Rush"],
        [ui.homePremiumDragonButton, "Dragon Storm"],
        [ui.homePremiumZombieButton, "Zombie Last Stand"],
        [ui.homePremiumChaosButton, "Chaos Arena"]
    ];

    buttons.forEach(([button, label]) => {
        if (!button) {
            return;
        }
        button.disabled = !premiumUnlocked;
        button.textContent = premiumUnlocked ? label : `${label} (Premium)`;
    });
}

function getPremiumWeekIndex(date = new Date()) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const dayOffset = Math.floor((date - startOfYear) / 86400000);
    const weekNumber = Math.floor((dayOffset + startOfYear.getDay()) / 7);
    return weekNumber % PREMIUM_TICKET_WEEKLY_REWARDS.length;
}

function getActivePremiumRewardSet(date = new Date()) {
    return PREMIUM_TICKET_WEEKLY_REWARDS[getPremiumWeekIndex(date)];
}

function getPremiumDayIndex(date = new Date()) {
    return (date.getDay() + 6) % 7;
}

function getPremiumTicketRewardForToday(date = new Date()) {
    const rewardSet = getActivePremiumRewardSet(date);
    return rewardSet.rewards[getPremiumDayIndex(date)];
}

function renderPremiumTicketPanel() {
    const activeRewardSet = getActivePremiumRewardSet();
    const todayReward = getPremiumTicketRewardForToday();
    const premiumOwned = hasPremiumAccess();

    if (ui.premiumTicketToday) {
        ui.premiumTicketToday.innerHTML = `
            <div class="premium-ticket-art">${todayReward.art}</div>
            <h3 class="premium-ticket-title">This Week: ${activeRewardSet.theme}</h3>
            <p class="premium-ticket-copy">Today's reward is Day ${todayReward.day} - ${todayReward.title}: ${todayReward.text}. Claiming happens automatically once per day when you open the home screen.</p>
        `;
    }

    if (ui.premiumTicketRewards) {
        ui.premiumTicketRewards.innerHTML = activeRewardSet.rewards.map((reward) => `
            <div class="premium-reward-item">
                <strong>Day ${reward.day}: ${reward.title}</strong>
                <span>${reward.art} ${reward.text}</span>
            </div>
        `).join("");
    }

    if (ui.premiumTicketQuests) {
        ui.premiumTicketQuests.innerHTML = PREMIUM_FUN_QUESTS.map((quest, index) => `
            <button class="premium-quest-card" type="button" data-premium-quest-index="${index}">
                <strong>Premium ${index + 1}. ${quest.title}</strong>
                <span>Boss: ${quest.boss}</span>
                <span>Scene: ${quest.scene}</span>
                <span>${quest.brief}</span>
            </button>
        `).join("");

        ui.premiumTicketQuests.querySelectorAll("[data-premium-quest-index]").forEach((button) => {
            button.addEventListener("click", () => {
                if (!hasPremiumAccess()) {
                    writeLog("Premium", "Buy the Premium Ticket first to unlock the funniest premium quests.");
                    if (ui.premiumTicketStatus) {
                        ui.premiumTicketStatus.textContent = "Status: Locked. Buy the Premium Ticket for $0.99 to unlock the funny premium quests.";
                    }
                    return;
                }
                const premiumQuestIndex = Number(button.dataset.premiumQuestIndex || 0);
                requestFullscreenPlay();
                startGame("quest", premiumQuestIndex, "premiumfun");
            });
        });
    }

    if (ui.premiumTicketStatus) {
        ui.premiumTicketStatus.textContent = premiumOwned
            ? "Status: Owned. Daily bonus will claim when you open the home screen."
            : "Status: Locked. Buy the Premium Ticket for $0.99 to unlock premium modes, funny premium quests, bonus gear, and daily rewards.";
    }

    if (ui.premiumTicketBuyButton) {
        ui.premiumTicketBuyButton.disabled = premiumOwned;
        ui.premiumTicketBuyButton.textContent = premiumOwned ? "Premium Ticket Owned" : "Buy Premium Ticket - $0.99";
    }
}

function renderZombieRewardPanel() {
    if (!ui.zombieRewardGrid || !ui.zombieRewardStatus) {
        return;
    }

    const claimed = Boolean(state.player.zombieRewardClaimed);
    const chosenReward = ZOMBIE_VICTORY_REWARDS.find((reward) => reward.id === state.player.zombieRewardChoice);

    ui.zombieRewardStatus.textContent = claimed
        ? `Reward chosen: ${chosenReward ? chosenReward.name : "Claimed"}`
        : "Choose one reward for beating Zombie Apocalypse.";

    ui.zombieRewardGrid.innerHTML = ZOMBIE_VICTORY_REWARDS.map((reward) => `
        <div class="reward-choice-card">
            <div class="reward-choice-art">${reward.art}</div>
            <strong>${reward.name}</strong>
            <span>${reward.text}</span>
            <button type="button" class="primary-action" data-zombie-reward-id="${reward.id}" ${claimed ? "disabled" : ""}>
                ${claimed ? (state.player.zombieRewardChoice === reward.id ? "Chosen" : "Locked") : "Choose Reward"}
            </button>
        </div>
    `).join("");

    ui.zombieRewardGrid.querySelectorAll("[data-zombie-reward-id]").forEach((button) => {
        button.addEventListener("click", () => chooseZombieReward(button.dataset.zombieRewardId));
    });
}

function renderCreatorPanel() {
    if (!state || !state.player) {
        return;
    }

    if (ui.creatorCardName) {
        ui.creatorCardName.textContent = CREATOR_NAME;
    }

    const aboutText = state.player.about && state.player.about.trim()
        ? state.player.about.trim()
        : "Write a little about yourself, your game ideas, and what you want to build.";

    if (ui.creatorCardCopy) {
        ui.creatorCardCopy.textContent = aboutText;
    }

    if (ui.creatorAboutInput && ui.creatorAboutInput.value !== (state.player.about || "")) {
        ui.creatorAboutInput.value = state.player.about || "";
    }

}

function getReviewStarsText(stars) {
    const value = Math.max(1, Math.min(5, Number(stars) || 5));
    return "★".repeat(value) + "☆".repeat(5 - value);
}

function renderReviewsPanel() {
    if (!ui.reviewAverageText || !ui.reviewCountText || !ui.reviewList) {
        return;
    }

    const reviews = Array.isArray(state.reviews) ? state.reviews : [];
    const count = reviews.length;
    if (!count) {
        ui.reviewAverageText.textContent = "No reviews yet";
        ui.reviewCountText.textContent = "0 total reviews";
        ui.reviewList.innerHTML = `
            <div class="review-card">
                <strong>Be the first reviewer</strong>
                <p>Leave a star rating and tell people what you think about End of the Nexus.</p>
            </div>
        `;
        return;
    }

    const average = reviews.reduce((sum, review) => sum + (Number(review.stars) || 0), 0) / count;
    ui.reviewAverageText.textContent = `${average.toFixed(1)} / 5 Stars`;
    ui.reviewCountText.textContent = `${count} total review${count === 1 ? "" : "s"}`;
    ui.reviewList.innerHTML = reviews.slice().reverse().map((review) => `
        <div class="review-card">
            <div class="review-meta">
                <span>${review.name || "Player"}</span>
                <span>${getReviewStarsText(review.stars)}</span>
            </div>
            <p>${review.feedback || "Loved the game."}</p>
        </div>
    `).join("");
}

function submitReview() {
    if (!ui.reviewStarsSelect || !ui.reviewFeedbackInput || !ui.reviewStatusText) {
        return;
    }

    const feedback = (ui.reviewFeedbackInput.value || "").trim();
    const stars = Math.max(1, Math.min(5, Number(ui.reviewStarsSelect.value) || 5));

    if (!feedback) {
        ui.reviewStatusText.textContent = "Write a little feedback before leaving your review.";
        return;
    }

    state.reviews.push({
        name: (state.player && state.player.name) ? state.player.name : DEFAULT_PLAYER_NAME,
        stars,
        feedback,
        createdAt: Date.now()
    });

    saveReviews();
    ui.reviewFeedbackInput.value = "";
    ui.reviewStarsSelect.value = "5";
    ui.reviewStatusText.textContent = "Thanks. Your review was saved.";
    renderReviewsPanel();
}

function chooseZombieReward(rewardId) {
    if (state.player.zombieRewardClaimed) {
        return;
    }

    const reward = ZOMBIE_VICTORY_REWARDS.find((entry) => entry.id === rewardId);
    if (!reward) {
        return;
    }

    reward.apply();
    state.player.zombieRewardClaimed = true;
    state.player.zombieRewardChoice = reward.id;
    savePlayerProfile();
    renderZombieRewardPanel();
    renderShop();
    syncUi();
    writeLog("Reward", `Zombie victory reward chosen: ${reward.name}.`);
    showHomePanel("main");
}

function grantPremiumDailyBonus() {
    if (!hasPremiumAccess()) {
        return;
    }

    const today = new Date();
    const todayStamp = today.toISOString().slice(0, 10);
    if (state.player.premiumDailyStamp === todayStamp) {
        return;
    }

    state.player.premiumDailyStamp = todayStamp;
    state.player.premiumDailyClaims = (state.player.premiumDailyClaims || 0) + 1;
    const reward = getPremiumTicketRewardForToday(today);

    if (reward.text === "+120 gold") {
        state.player.gold += 120;
    } else if (reward.text === "+180 gold") {
        state.player.gold += 180;
    } else if (reward.text === "+150 gold") {
        state.player.gold += 150;
    } else if (reward.text === "+200 gold") {
        state.player.gold += 200;
    } else if (reward.text === "+220 gold") {
        state.player.gold += 220;
    } else if (reward.text === "+2 damage") {
        state.player.damage += 2;
    } else if (reward.text === "+3 damage") {
        state.player.damage += 3;
    } else if (reward.text === "+4 health") {
        state.player.maxHp += 4;
        state.player.hp = Math.min(state.player.maxHp, state.player.hp + 12);
    } else if (reward.text === "+6 health") {
        state.player.maxHp += 6;
        state.player.hp = Math.min(state.player.maxHp, state.player.hp + 14);
    } else if (reward.text === "+12 health") {
        state.player.maxHp += 12;
        state.player.hp = Math.min(state.player.maxHp, state.player.hp + 18);
    } else if (reward.text === "+1 speed") {
        state.player.speed += 1;
    } else if (reward.text === "+2 speed") {
        state.player.speed += 2;
    } else if (reward.text === "+3 armor") {
        state.player.armor += 3;
    } else if (reward.text === "Ticket Dragon boost" || reward.text === "All dragon damage +2") {
        const ticketDragon = state.player.dragons.find((dragon) => dragon.name === "Ticket Dragon");
        if (ticketDragon) {
            ticketDragon.damage += 2;
        } else {
            state.player.dragons.push({
                name: "Ticket Dragon",
                damage: 8,
                orbit: Math.random() * Math.PI * 2
            });
        }
    } else if (reward.text === "+5 damage and +5 health") {
        state.player.damage += 5;
        state.player.maxHp += 5;
        state.player.hp = Math.min(state.player.maxHp, state.player.hp + 10);
    } else if (reward.text === "+4 damage and +150 gold") {
        state.player.damage += 4;
        state.player.gold += 150;
    } else if (reward.text === "+5 damage and +2 speed") {
        state.player.damage += 5;
        state.player.speed += 2;
    }

    savePlayerProfile();
    writeLog("Premium", `Daily Premium Ticket reward claimed: ${reward.title} - ${reward.text}.`);
}

function serializeCurrentRun() {
    if (!state || !state.started || state.over || state.mode === "multiplayer" || state.mode === "menu") {
        return null;
    }

    return {
        player: state.player,
        enemies: state.enemies,
        boss: state.boss,
        wave: state.wave,
        score: state.score,
        started: state.started,
        over: state.over,
        victory: state.victory,
        mode: state.mode,
        premiumMode: state.premiumMode,
        questWorld: state.questWorld,
        worldOneCleared: state.worldOneCleared,
        elapsedMs: state.elapsedMs,
        bossSpawnTimer: state.bossSpawnTimer,
        rival: state.rival,
        townProps: state.townProps,
        witnesses: state.witnesses,
        castleGuards: state.castleGuards,
        witnessesFound: state.witnessesFound,
        witnessGoal: state.witnessGoal,
        evidenceSpots: state.evidenceSpots,
        evidenceFound: state.evidenceFound,
        evidenceGoal: state.evidenceGoal,
        townScouts: state.townScouts,
        scoutsDefeated: state.scoutsDefeated,
        scoutsGoal: state.scoutsGoal,
        worldAreas: state.worldAreas,
        travelBarriers: state.travelBarriers,
        areaEvents: state.areaEvents,
        lairEntrance: state.lairEntrance,
        castleAccessGranted: state.castleAccessGranted,
        undergroundLair: state.undergroundLair,
        phase: state.phase,
        projectiles: state.projectiles,
        extraBosses: state.extraBosses,
        bossRushLineup: state.bossRushLineup,
        bossRushIndex: state.bossRushIndex,
        chatMessages: state.chatMessages,
        questIndex: state.questIndex,
        launchIntroTimer: state.launchIntroTimer,
        awakeningTimer: state.awakeningTimer,
        questKills: state.questKills,
        zombieFinaleTriggered: state.zombieFinaleTriggered,
        comboCount: state.comboCount,
        comboTimer: state.comboTimer,
        highestCombo: state.highestCombo,
        trainingWaveCleared: state.trainingWaveCleared,
        camera: state.camera,
        log: state.log
    };
}

function saveCurrentRun() {
    const run = serializeCurrentRun();
    if (!run) {
        clearSavedRun();
        return;
    }

    try {
        window.localStorage.setItem(RUN_SAVE_KEY, JSON.stringify(run));
    } catch (error) {
        // ignore storage errors
    }
}

function loadSavedRun() {
    try {
        const raw = window.localStorage.getItem(RUN_SAVE_KEY);
        if (!raw) {
            return null;
        }
        return JSON.parse(raw);
    } catch (error) {
        return null;
    }
}

function restoreSavedRun() {
    const savedRun = loadSavedRun();
    if (!savedRun || savedRun.over || !savedRun.started || !savedRun.player || savedRun.player.hp <= 0) {
        clearSavedRun();
        return false;
    }

    resetGame();
    Object.assign(state, savedRun);
    state.worldOneCleared = typeof savedRun.worldOneCleared === "boolean" ? savedRun.worldOneCleared : state.worldOneCleared;
    pointer.x = GAME.width / 2;
    pointer.y = GAME.height / 2;
    pointer.active = false;
    document.body.classList.toggle("play-mode", Boolean(state.started && !state.over));
    syncUi();
    draw();
    return true;
}

function ensureErrorPanel() {
    let panel = document.getElementById("fatal-error-panel");
    if (panel) {
        return panel;
    }

    panel = document.createElement("div");
    panel.id = "fatal-error-panel";
    panel.className = "fatal-error-panel hidden";
    panel.innerHTML = `
        <strong>Game Error</strong>
        <div id="fatal-error-text">Something went wrong.</div>
    `;
    document.body.appendChild(panel);
    return panel;
}

function showFatalError(label, error) {
    const panel = ensureErrorPanel();
    const text = document.getElementById("fatal-error-text");
    const message = error && error.message ? error.message : String(error || "Unknown error");
    panel.classList.remove("hidden");
    if (text) {
        text.textContent = `${label}: ${message}`;
    } else {
        panel.textContent = `${label}: ${message}`;
    }
    if (window.console && console.error) {
        console.error(label, error);
    }
}

function safelyRun(label, callback) {
    try {
        return callback();
    } catch (error) {
        showFatalError(label, error);
        return null;
    }
}

function getQuestList(world = "world1") {
    if (world === "alien") {
        return ALIEN_PATCH_QUESTS;
    }
    if (world === "premiumfun") {
        return PREMIUM_FUN_QUESTS;
    }
    if (world === "zombie") {
        return ZOMBIE_APOCALYPSE_QUESTS;
    }
    return QUESTS;
}

function isAlienWorld() {
    return state && state.questWorld === "alien";
}

function getQuestForWave(wave, world = state ? state.questWorld : "world1") {
    const questList = getQuestList(world);
    return questList[Math.min(questList.length - 1, Math.max(0, wave - 1))];
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function getCenter(entity) {
    return {
        x: entity.x + entity.width / 2,
        y: entity.y + entity.height / 2
    };
}

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

function isInfinitePveMode() {
    return state && state.mode === "pve";
}

function distanceBetween(a, b) {
    const ax = a.x + (a.width || 0) / 2;
    const ay = a.y + (a.height || 0) / 2;
    const bx = b.x + (b.width || 0) / 2;
    const by = b.y + (b.height || 0) / 2;
    return Math.hypot(ax - bx, ay - by);
}

function rectsOverlap(a, b) {
    return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
    );
}

function createObstacles() {
    return [
        { x: s(276), y: s(266), width: s(66), height: s(66), type: "pillar" },
        { x: s(804), y: s(250), width: s(76), height: s(76), type: "pillar" },
        { x: s(520), y: s(426), width: s(98), height: s(48), type: "crate" },
        { x: s(438), y: s(204), width: s(56), height: s(56), type: "pillar" },
        { x: s(670), y: s(482), width: s(92), height: s(42), type: "crate" }
    ];
}

function createWitnesses() {
    return [
        {
            x: s(420),
            y: s(980),
            width: s(24),
            height: s(24),
            name: "Baker Rowan",
            clue: "The ground split near the well and a hooded rider went below the town.",
            dialogue: {
                what: "I heard the square crack open and people started running. Something pulled the street apart from below.",
                where: "The boss's riders went toward the old well. There is a hidden path under the broken stones there.",
                who: "My daughter and two guards made it out. The rest fled uphill when the shaking began."
            },
            talked: false
        },
        {
            x: s(1540),
            y: s(690),
            width: s(24),
            height: s(24),
            name: "Guard Elsi",
            clue: "I saw stolen crates dragged toward the old cellar gate by the clock tower.",
            dialogue: {
                what: "We were hit fast. Raiders smashed the gate, grabbed powder and steel, and vanished before reinforcements came.",
                where: "I tracked them to the clock tower cellar. The floor opens into a secret route to the lair.",
                who: "Captain Roen survived. A few of us are hiding in the barracks and trying to keep the town together."
            },
            talked: false
        },
        {
            x: s(2560),
            y: s(1410),
            width: s(24),
            height: s(24),
            name: "Miner Tov",
            clue: "There is a hidden lift under the rubble. That is how the boss reaches the lair.",
            dialogue: {
                what: "The rubble was no accident. Someone blasted the mine supports from underneath and opened a way down.",
                where: "There is a hidden lift under the rubble. That is how the boss reaches the underground lair.",
                who: "A few miners got clear. The others are trapped deeper in, if the boss has not moved them already."
            },
            talked: false
        }
    ];
}

function createCastleGuards() {
    return [
        {
            x: s(2960),
            y: s(840),
            width: s(26),
            height: s(26),
            name: "Gate Guard Rhea",
            clue: "The fortress can only be entered after the road is cleared.",
            dialogue: {
                what: "We saw the boss retreat behind the fortress while the last minions tried to hold the road.",
                where: "The boss is inside the fortress. Once the path is secure, we can let you through the door.",
                who: "Two of us are still standing at the gate. We have been waiting for someone strong enough to finish this."
            },
            talked: false,
            isCastleGuard: true
        },
        {
            x: s(3186),
            y: s(840),
            width: s(26),
            height: s(26),
            name: "Gate Guard Toren",
            clue: "Clear the last minions, then speak to the guards for entry.",
            dialogue: {
                what: "The fortress door stays shut until every last minion in the yard is down.",
                where: "Once the road is safe, we will open the way and wave you into the boss chamber.",
                who: "The town militia fell back. Right now it is just us holding this gate."
            },
            talked: false,
            isCastleGuard: true
        }
    ];
}

function getQuestPlaceTheme(index = 0, world = "world1") {
    const themes = world === "alien" ? [
        { areas: ["Vanta Crater", "Wreck Flats", "Glow Trench", "Saucer Bastion"], tones: ["#5b6b91", "#6c7ec0", "#4d5e8f", "#6d59a0"], bridge: "Plasma Span", pass: "Crash Pass", gate: "Saucer Gate", sky: ["#2d3153", "#5863ab", "#39416d", "#130f23"] },
        { areas: ["Neon Nest", "Hive Lanes", "Pulse Gardens", "Regent Core"], tones: ["#4d8d8a", "#56aab1", "#417784", "#5a5ca4"], bridge: "Lumen Bridge", pass: "Hive Pass", gate: "Regent Gate", sky: ["#203b4a", "#3c8dac", "#28525e", "#120f24"] },
        { areas: ["Tooth Basin", "Moon Dust", "Void Scar", "Dragon Crater"], tones: ["#8f94a9", "#b0b8ca", "#777f98", "#8b6aac"], bridge: "Void Span", pass: "Moon Pass", gate: "Crater Gate", sky: ["#31354b", "#7884ab", "#4e5679", "#0f1220"] },
        { areas: ["Signal Rim", "Static Farms", "Antenna Wastes", "Oracle Pit"], tones: ["#6a7888", "#7f90a6", "#5b6774", "#666ca3"], bridge: "Signal Span", pass: "Static Pass", gate: "Oracle Gate", sky: ["#2b3243", "#66748c", "#3d465b", "#111522"] },
        { areas: ["Andromeda Reach", "Sky March", "Star Grave", "Emperor Spire"], tones: ["#64749d", "#7788b6", "#546381", "#7066b0"], bridge: "Starlight Span", pass: "Throne Pass", gate: "Imperial Gate", sky: ["#252f49", "#5f74a9", "#384865", "#0d1020"] }
    ] : (world === "premiumfun" ? [
        { areas: ["Chicken Court", "Pie Alley", "Feather Fields", "Cluckle Castle"], tones: ["#d69758", "#e7b16f", "#bb7c48", "#92614f"], bridge: "Gravy Bridge", pass: "Feather Pass", gate: "Coop Gate", sky: ["#50301c", "#c16b36", "#8b4f2b", "#231014"] },
        { areas: ["Bubble Block", "Soap Square", "Drain Road", "Flush Fortress"], tones: ["#86adc8", "#aad0de", "#6791ab", "#7f8cc8"], bridge: "Tub Span", pass: "Steam Pass", gate: "Porcelain Gate", sky: ["#36566d", "#71a8d2", "#4a7b98", "#17192a"] },
        { areas: ["Snack Strip", "Guac Gardens", "Salsa Street", "Wrap Citadel"], tones: ["#b88849", "#d5a85d", "#986f39", "#8b5e46"], bridge: "Chip Bridge", pass: "Bean Pass", gate: "Tortilla Gate", sky: ["#623518", "#ca6e2b", "#8c4e24", "#241016"] },
        { areas: ["Disco Yard", "Boogie Hall", "Banana Ramp", "Bass Basement"], tones: ["#8d6cca", "#b088ea", "#6f53a9", "#4d3d78"], bridge: "Glow Bridge", pass: "Boogie Pass", gate: "Disco Gate", sky: ["#24163d", "#693bc1", "#432575", "#140d24"] }
    ] : (world === "zombie" ? [
        { areas: ["Dead Square", "Ruin Lane", "Hospital Row", "Antidote Keep"], tones: ["#5a4a49", "#675556", "#564848", "#45383e"], bridge: "Barricade Span", pass: "Sewer Pass", gate: "Quarantine Gate", sky: ["#13151b", "#252a31", "#1a1c22", "#09090d"] }
    ] : [
        { areas: ["Quake Square", "Split Fields", "Broken Ridge", "Fault Fortress"], tones: ["#5b5746", "#6a6250", "#4f463c", "#4b4344"], bridge: "Stone Span", pass: "Rubble Pass", gate: "Fault Gate", sky: ["#1a1c24", "#363645", "#2a262d", "#120f14"] },
        { areas: ["Ash Gate", "Smoke Farms", "Cinder Road", "Burning Bastion"], tones: ["#8a654e", "#916e56", "#77584a", "#6e5a67"], bridge: "Coal Bridge", pass: "Smoke Cut", gate: "Cinder Gate", sky: ["#7e544a", "#b56c4d", "#684a43", "#241c22"] },
        { areas: ["Frost Hamlet", "Snow Flats", "Ice Pines", "Wolf Castle"], tones: ["#9cb4c4", "#bfd4dd", "#8aa6b5", "#8296aa"], bridge: "Ice Bridge", pass: "White Pass", gate: "Frost Gate", sky: ["#6e88a5", "#a9c7df", "#7c98af", "#273342"] },
        { areas: ["Storm Docks", "Rain Market", "Thunder Moor", "Tempest Tower"], tones: ["#658aa0", "#7ca2a7", "#597684", "#53677c"], bridge: "Spark Bridge", pass: "Thunder Run", gate: "Storm Gate", sky: ["#546a83", "#7d8fa8", "#5a6574", "#1f2633"] },
        { areas: ["Grave Lane", "Lantern Yard", "Cold Orchard", "Crypt Keep"], tones: ["#69726a", "#7d8777", "#606857", "#66626f"], bridge: "Mourn Bridge", pass: "Lantern Pass", gate: "Crypt Gate", sky: ["#6f635c", "#97826e", "#5f5b5d", "#201c25"] },
        { areas: ["Red Harbor", "Salt Market", "Shark Coast", "Tide Fort"], tones: ["#6d8e96", "#83a6a0", "#5f8587", "#69788e"], bridge: "Harbor Span", pass: "Salt Pass", gate: "Tide Gate", sky: ["#81624b", "#c48362", "#6f5b55", "#231d28"] },
        { areas: ["Forge Ward", "Iron Row", "Hammer Plain", "Riot Citadel"], tones: ["#877563", "#9b8669", "#726556", "#6f6b77"], bridge: "Chain Bridge", pass: "Forge Run", gate: "Iron Gate", sky: ["#7a5a4a", "#bf8054", "#6e584e", "#241e27"] },
        { areas: ["Sand Camp", "Dune Farms", "Glass Wastes", "Desert Hold"], tones: ["#b09c64", "#c1b075", "#9e8b5d", "#90828a"], bridge: "Dust Span", pass: "Dune Pass", gate: "Sirocco Gate", sky: ["#92704f", "#d0a067", "#816550", "#2b2330"] },
        { areas: ["Moon Camp", "Hunter Vale", "Silver Wood", "Beast Fortress"], tones: ["#80937a", "#95a988", "#72856e", "#6f7384"], bridge: "Moon Bridge", pass: "Hunter Pass", gate: "Fang Gate", sky: ["#5c6376", "#7f90a6", "#58626d", "#1d2434"] },
        { areas: ["Blight Yard", "Rot Farm", "Black Grove", "Root Palace"], tones: ["#6c8060", "#7f936c", "#52664f", "#5d6764"], bridge: "Vine Bridge", pass: "Rot Pass", gate: "Thorn Gate", sky: ["#647255", "#91a06b", "#55624f", "#1f261f"] },
        { areas: ["Bell Flood", "Temple Pools", "Sunken Way", "Abyss Shrine"], tones: ["#5f8a95", "#76a5af", "#52747f", "#5f7187"], bridge: "Wave Bridge", pass: "Flood Pass", gate: "Apostle Gate", sky: ["#52728d", "#77a6c4", "#51748b", "#1d2938"] },
        { areas: ["Crown Ward", "Royal Court", "Traitor Road", "Throne Bastion"], tones: ["#8f8778", "#a39c8a", "#7e7768", "#7b7f93"], bridge: "Banner Span", pass: "Court Pass", gate: "Crown Gate", sky: ["#72655a", "#b49b7c", "#665e5b", "#23202a"] },
        { areas: ["Mirror Row", "Glass Quarter", "Shard Wilds", "Widow Spire"], tones: ["#8295a7", "#97adbe", "#71879b", "#7a86a0"], bridge: "Glass Bridge", pass: "Shard Pass", gate: "Mirror Gate", sky: ["#66768b", "#9cb0c6", "#617286", "#23283a"] },
        { areas: ["Choir Yard", "Lava Streets", "Ember Rise", "Magma Cathedral"], tones: ["#925e47", "#ad6d4d", "#7e4f3e", "#6f5a63"], bridge: "Cinder Span", pass: "Ember Pass", gate: "Molten Gate", sky: ["#7e493d", "#d2794c", "#6f483f", "#251924"] },
        { areas: ["Raven Post", "Tower Farms", "Night Cliffs", "Siege Keep"], tones: ["#6f7d89", "#8495a0", "#5a6a79", "#676f82"], bridge: "Rook Bridge", pass: "Raven Pass", gate: "Talon Gate", sky: ["#59616f", "#7d8799", "#545c67", "#1b212c"] },
        { areas: ["Glass Dunes", "Mirror Flats", "Heat Reach", "Saint Citadel"], tones: ["#b29d83", "#cab39a", "#9d8a73", "#928692"], bridge: "Mirage Span", pass: "Glass Pass", gate: "Saint Gate", sky: ["#8f7a65", "#d0b18d", "#7d6c61", "#2b2430"] },
        { areas: ["Rust Court", "Machine Row", "Oxide Fields", "Judge Basilica"], tones: ["#86756c", "#98867c", "#73645e", "#6d6f76"], bridge: "Iron Span", pass: "Rust Pass", gate: "Judge Gate", sky: ["#735c54", "#b18779", "#655a58", "#232126"] },
        { areas: ["Avalanche Camp", "Ice Road", "Peak Trail", "Summit Keep"], tones: ["#8fa2b1", "#a8bcc9", "#7c919f", "#7b8796"], bridge: "Glacier Bridge", pass: "Peak Pass", gate: "Avalanche Gate", sky: ["#647c95", "#a4bfd6", "#6b8194", "#233242"] },
        { areas: ["Banner Camp", "War Fields", "Mud Wilds", "Serik Hold"], tones: ["#8b7c62", "#9c8d70", "#766851", "#746775"], bridge: "War Bridge", pass: "Raider Pass", gate: "Banner Gate", sky: ["#77594c", "#bd8967", "#6b584f", "#251f29"] },
        { areas: ["Nexus Reach", "Final Ward", "Void March", "Last Fortress"], tones: ["#6a7892", "#8190ab", "#57647e", "#606889"], bridge: "Nexus Span", pass: "Final Pass", gate: "Black Gate", sky: ["#48556e", "#7185a3", "#47556d", "#171d2e"] }
    ]));
    return themes[Math.max(0, Math.min(themes.length - 1, index))];
}

function createTownProps(index = 0) {
    const castleX = s(3020);
    const castleY = s(720);
    return [
        { x: s(260), y: s(920), width: s(150), height: s(112), type: "house" },
        { x: s(720), y: s(740), width: s(168), height: s(118), type: "house" },
        { x: s(1290), y: s(560), width: s(182), height: s(126), type: "house" },
        { x: s(1840), y: s(880), width: s(164), height: s(118), type: "house" },
        { x: s(2420), y: s(1320), width: s(188), height: s(132), type: "house" },
        { x: castleX, y: castleY, width: s(240), height: s(168), type: "castle" },
        { x: s(520), y: s(1180), width: s(78), height: s(78), type: "well" },
        { x: s(1710), y: s(1140), width: s(112), height: s(42), type: "wagon" },
        { x: s(2760), y: s(940), width: s(112), height: s(42), type: "wagon" }
    ];
}

function createEvidenceSpots() {
    return [
        {
            x: s(980),
            y: s(1008),
            width: s(42),
            height: s(42),
            title: "Broken Seal",
            clue: "A cracked black seal shows the raiders answered to the boss, not random bandits.",
            found: false
        },
        {
            x: s(2170),
            y: s(880),
            width: s(42),
            height: s(42),
            title: "Drag Marks",
            clue: "Heavy drag marks lead from the town square toward the hidden route into the base.",
            found: false
        }
    ];
}

function createTownScouts() {
    return [
        { x: s(980), y: s(1090), width: s(22), height: s(22), hp: 30, maxHp: 30, speed: 1.95, damage: 6, hitCooldown: 0, pulse: 0.1, mounted: false, variant: "little" },
        { x: s(1320), y: s(1210), width: s(28), height: s(28), hp: 48, maxHp: 48, speed: 1.8, damage: 7, hitCooldown: 0, pulse: 0.5, mounted: true, variant: "road" },
        { x: s(1680), y: s(980), width: s(22), height: s(22), hp: 30, maxHp: 30, speed: 2.05, damage: 6, hitCooldown: 0, pulse: 1.1, mounted: false, variant: "little" }
    ];
}

function createZombieWitnesses() {
    return [
        {
            x: s(640),
            y: s(920),
            width: s(24),
            height: s(24),
            name: "Doctor Vale",
            clue: "The first antidote ingredient is still in the clinic freezer if the zombies have not smashed it.",
            dialogue: {
                what: "The village fell in minutes. The dead were everywhere before we could seal the doors.",
                where: "The clinic still has one serum base. Find it and you can start the antidote.",
                who: "A few survivors made it into hiding. If you move fast, there is still time to save them."
            },
            talked: false
        },
        {
            x: s(1800),
            y: s(760),
            width: s(24),
            height: s(24),
            name: "Miller Joan",
            clue: "The second antidote part is in a chem crate near the dead water tower.",
            dialogue: {
                what: "They kept coming even after we burned them. Something in the keep is driving them forward.",
                where: "Look by the water tower. We left a chem crate there before the road collapsed.",
                who: "The chapel still has survivors inside. We just need the cure before the dead break through."
            },
            talked: false
        },
        {
            x: s(2840),
            y: s(1380),
            width: s(24),
            height: s(24),
            name: "Watchman Brigg",
            clue: "The formula notes are locked behind the plague banner inside the keep.",
            dialogue: {
                what: "The horde keeps circling the same fortress. Their master is holding them together.",
                where: "The final antidote notes are behind the quarantine gate. Get in there and finish this.",
                who: "Three of us are left. If you kill the plague lord and get the cure, the village may live."
            },
            talked: false
        }
    ];
}

function createZombieEvidenceSpots() {
    return [
        { x: s(980), y: s(1008), width: s(42), height: s(42), title: "Frozen Serum", clue: "A blue serum vial survived in the cold. It is part of the antidote.", found: false },
        { x: s(2170), y: s(880), width: s(42), height: s(42), title: "Chem Crate", clue: "This sterile chem bundle can stabilize the antidote.", found: false },
        { x: s(3060), y: s(820), width: s(42), height: s(42), title: "Formula Notes", clue: "The final plague notes reveal how to finish the cure.", found: false }
    ];
}

function createZombieScouts() {
    return [
        { x: s(920), y: s(1110), width: s(24), height: s(24), hp: 34, maxHp: 34, speed: 1.75, damage: 6, hitCooldown: 0, pulse: 0.1, mounted: false, variant: "zombie" },
        { x: s(1080), y: s(1000), width: s(24), height: s(24), hp: 36, maxHp: 36, speed: 1.82, damage: 6, hitCooldown: 0, pulse: 0.4, mounted: false, variant: "zombie" },
        { x: s(1370), y: s(1220), width: s(26), height: s(26), hp: 42, maxHp: 42, speed: 1.88, damage: 7, hitCooldown: 0, pulse: 0.8, mounted: false, variant: "zombie" },
        { x: s(1730), y: s(960), width: s(26), height: s(26), hp: 45, maxHp: 45, speed: 1.95, damage: 7, hitCooldown: 0, pulse: 1.15, mounted: false, variant: "zombie" },
        { x: s(2120), y: s(1000), width: s(28), height: s(28), hp: 48, maxHp: 48, speed: 2.0, damage: 8, hitCooldown: 0, pulse: 1.45, mounted: false, variant: "zombie" },
        { x: s(2480), y: s(1380), width: s(28), height: s(28), hp: 52, maxHp: 52, speed: 2.05, damage: 8, hitCooldown: 0, pulse: 1.8, mounted: false, variant: "zombie" },
        { x: s(2970), y: s(860), width: s(30), height: s(30), hp: 56, maxHp: 56, speed: 2.1, damage: 9, hitCooldown: 0, pulse: 2.1, mounted: false, variant: "zombie" },
        { x: s(3230), y: s(900), width: s(30), height: s(30), hp: 58, maxHp: 58, speed: 2.12, damage: 9, hitCooldown: 0, pulse: 2.4, mounted: false, variant: "zombie" }
    ];
}

function createZombieBoss() {
    const quest = ZOMBIE_APOCALYPSE_QUESTS[0];
    return {
        active: false,
        x: WORLD.width - s(420),
        y: s(260),
        width: Math.round(GAME.bossSize * CHARACTER_SCALE),
        height: Math.round(GAME.bossSize * CHARACTER_SCALE),
        hp: quest.bossHp,
        maxHp: quest.bossHp,
        speed: 1.8,
        damage: quest.bossDamage,
        name: quest.boss,
        dragonBoss: false,
        zombieBoss: true,
        hitCooldown: 0,
        pulse: 0,
        projectileCooldown: 1200
    };
}

function createWorldAreas(index = 0, world = "world1") {
    const theme = getQuestPlaceTheme(index, world);
    return [
        { x: s(120), y: s(700), width: s(1080), height: s(1180), name: theme.areas[0], tone: theme.tones[0] },
        { x: s(1320), y: s(560), width: s(1180), height: s(1280), name: theme.areas[1], tone: theme.tones[1] },
        { x: s(2580), y: s(500), width: s(1220), height: s(1380), name: theme.areas[2], tone: theme.tones[2] },
        { x: s(3920), y: s(620), width: s(980), height: s(1180), name: theme.areas[3], tone: theme.tones[3] }
    ];
}

function createTravelBarriers() {
    return [
        { x: s(1440), y: s(540), width: s(180), height: s(360), type: "river" },
        { x: s(1440), y: s(1160), width: s(180), height: s(640), type: "river" },
        { x: s(2780), y: s(460), width: s(220), height: s(560), type: "forest" },
        { x: s(2780), y: s(1280), width: s(220), height: s(560), type: "forest" },
        { x: s(4180), y: s(620), width: s(220), height: s(280), type: "wall" },
        { x: s(4180), y: s(1120), width: s(220), height: s(700), type: "wall" }
    ];
}

function createLairEntrance(underground) {
    return {
        x: underground ? s(4520) : s(4440),
        y: underground ? s(1860) : s(930),
        width: s(150),
        height: s(150),
        underground,
        active: false
    };
}

function getCastleDoorRect() {
    const castle = state.townProps.find((prop) => prop.type === "castle");
    if (!castle) {
        return null;
    }

    return {
        x: castle.x + 56,
        y: castle.y + 42,
        width: 52,
        height: castle.height - 40
    };
}

function isCastleDoorOpen() {
    return Boolean(
        state.lairEntrance &&
        state.lairEntrance.active &&
        state.scoutsDefeated >= state.scoutsGoal
    );
}

function clampEntityToObstacles(entity, previousX, previousY) {
    const blockingRects = [...state.obstacles];
    if (state.phase === "town" || state.phase === "hunt") {
        blockingRects.push(...state.travelBarriers);
    }

    for (const obstacle of blockingRects) {
        if (!rectsOverlap(entity, obstacle)) {
            continue;
        }

        const overlapFromLeft = entity.x + entity.width - obstacle.x;
        const overlapFromRight = obstacle.x + obstacle.width - entity.x;
        const overlapFromTop = entity.y + entity.height - obstacle.y;
        const overlapFromBottom = obstacle.y + obstacle.height - entity.y;
        const minOverlap = Math.min(
            overlapFromLeft,
            overlapFromRight,
            overlapFromTop,
            overlapFromBottom
        );

        if (minOverlap === overlapFromLeft) {
            entity.x = obstacle.x - entity.width;
        } else if (minOverlap === overlapFromRight) {
            entity.x = obstacle.x + obstacle.width;
        } else if (minOverlap === overlapFromTop) {
            entity.y = obstacle.y - entity.height;
        } else {
            entity.y = obstacle.y + obstacle.height;
        }

        if (rectsOverlap(entity, obstacle)) {
            entity.x = previousX;
            entity.y = previousY;
        }
    }
}

function updateCamera() {
    const viewWidth = GAME.width / CHASE_CAMERA_ZOOM;
    const viewHeight = GAME.height / CHASE_CAMERA_ZOOM;
    const targetX = state.player.x + state.player.width / 2 - viewWidth / 2;
    const targetY = state.player.y + state.player.height / 2 - viewHeight / 2;
    state.camera.x = clamp(targetX, 0, Math.max(0, WORLD.width - viewWidth));
    state.camera.y = clamp(targetY, 0, Math.max(0, WORLD.height - viewHeight));
}

function applyWorldProjection() {
    ctx.translate(0, 0);
}

function createPlayer() {
    const savedProfile = loadSavedProfile();
    const savedPlayer = savedProfile && savedProfile.player ? savedProfile.player : null;
    const savedAbout = savedPlayer && typeof savedPlayer.about === "string" ? savedPlayer.about : "";
    const creatorAbout = !savedAbout
        || savedAbout === CREATOR_ABOUT_OLD
        || savedAbout === CREATOR_ABOUT_OLD_FIXED
        || savedAbout === "Hi, I am Jonah Matthew Moore, and I am the creator of this game. I have worked on it for over a year and got inspired by my older brother. Thank you to everyone who supports me and believes in what I am building."
        || savedAbout === "Hi, I'm Jonah, and I created this game. I have worked on it for a long time, and I am thankful for everyone who supports what I am building."
        || savedAbout === "Hi, I'm Jonah, and I created this game. I live in North Carolina, have worked on it for a long time, and I am thankful for everyone who supports what I am building."
        ? CREATOR_ABOUT
        : savedAbout;
    const savedMaxHp = savedPlayer && typeof savedPlayer.maxHp === "number" ? savedPlayer.maxHp : 100;
    const savedHp = savedPlayer && typeof savedPlayer.hp === "number" ? savedPlayer.hp : savedMaxHp;
    return {
        x: s(520),
        y: s(1120),
        width: Math.round(18 * CHARACTER_SCALE),
        height: Math.round(18 * CHARACTER_SCALE),
        hp: Math.max(1, Math.min(savedMaxHp, savedHp)),
        maxHp: savedMaxHp,
        damage: savedPlayer && typeof savedPlayer.damage === "number" ? savedPlayer.damage : 15,
        speed: savedPlayer && typeof savedPlayer.speed === "number" ? savedPlayer.speed : 5,
        armor: savedPlayer && typeof savedPlayer.armor === "number" ? savedPlayer.armor : 3,
        shieldPower: 0.5,
        gold: savedPlayer && typeof savedPlayer.gold === "number" ? savedPlayer.gold : 0,
        weaponName: savedPlayer && savedPlayer.weaponName ? savedPlayer.weaponName : "Training Sword",
        dragons: savedPlayer && Array.isArray(savedPlayer.dragons) ? savedPlayer.dragons : [],
        premiumItems: savedPlayer && Array.isArray(savedPlayer.premiumItems) ? savedPlayer.premiumItems : [],
        upgrades: savedPlayer && savedPlayer.upgrades ? savedPlayer.upgrades : {
            damage: 0,
            armor: 0,
            speed: 0,
            health: 0,
            dragon: 0
        },
        premiumDailyStamp: savedPlayer && savedPlayer.premiumDailyStamp ? savedPlayer.premiumDailyStamp : "",
        premiumDailyClaims: savedPlayer && typeof savedPlayer.premiumDailyClaims === "number" ? savedPlayer.premiumDailyClaims : 0,
        title: savedPlayer && savedPlayer.title ? savedPlayer.title : "",
        zombieRewardClaimed: Boolean(savedPlayer && savedPlayer.zombieRewardClaimed),
        zombieRewardChoice: savedPlayer && savedPlayer.zombieRewardChoice ? savedPlayer.zombieRewardChoice : "",
        about: creatorAbout,
        name: savedPlayer && savedPlayer.name && savedPlayer.name !== CREATOR_NAME ? savedPlayer.name : DEFAULT_PLAYER_NAME,
        look: {
            skin: savedPlayer && savedPlayer.look && savedPlayer.look.skin ? savedPlayer.look.skin : "warm",
            hair: savedPlayer && savedPlayer.look && savedPlayer.look.hair ? savedPlayer.look.hair : "brown",
            armor: savedPlayer && savedPlayer.look && savedPlayer.look.armor ? savedPlayer.look.armor : "azure",
            build: savedPlayer && savedPlayer.look && savedPlayer.look.build ? savedPlayer.look.build : "athletic",
            visor: savedPlayer && savedPlayer.look && savedPlayer.look.visor ? savedPlayer.look.visor : "ice",
            helmet: savedPlayer && savedPlayer.look && savedPlayer.look.helmet ? savedPlayer.look.helmet : "knight",
            rider: savedPlayer && savedPlayer.look && savedPlayer.look.rider ? savedPlayer.look.rider : "foot"
        },
        attackTimer: 0,
        attackCooldown: 0,
        hitCooldown: 0,
        attackFlash: 0,
        blocking: false,
        walkCycle: 0,
        poisonTimer: 0,
        poisonTickTimer: 0,
        flipTimer: 0,
        flipCooldown: 0,
        jumpTimer: 0,
        jumpCooldown: 0,
        jumpLift: 0,
        velocityX: 0,
        velocityY: 0,
        strideBlend: 0,
        facingX: 1,
        facingY: 0,
        attackVectorX: 1,
        attackVectorY: 0
    };
}

function createRival() {
    return {
        active: false,
        x: GAME.width - 280,
        y: 330,
        width: Math.round(52 * CHARACTER_SCALE),
        height: Math.round(52 * CHARACTER_SCALE),
        hp: 120,
        maxHp: 120,
        damage: 18,
        speed: 3.8,
        armor: 3,
        shieldPower: 0.5,
        hitCooldown: 0,
        pulse: 0,
        blocking: false,
        flipTimer: 0,
        look: {
            skin: "warm",
            hair: "black",
            armor: "crimson"
        },
        facingX: -1,
        facingY: 0
    };
}

function createEnemy(wave) {
    const quest = getQuestForWave(wave);
    const alienWorld = state && state.questWorld === "alien";
    const zombieWorld = state && state.questWorld === "zombie";
    const spiritType = alienWorld
        ? ["storm", "water", "earth"][Math.floor(Math.random() * 3)]
        : (quest.title === "Storm Warning"
            ? "storm"
            : (quest.title === "Sunken Bell"
                ? "water"
                : (quest.title === "The Earthquake" ? "earth" : null)));
    const spiritEnemy = !zombieWorld && (alienWorld || (Boolean(spiritType) && Math.random() < 0.45));
    const stormSpirit = spiritEnemy && spiritType === "storm";
    const waterSpirit = spiritEnemy && spiritType === "water";
    const earthSpirit = spiritEnemy && spiritType === "earth";
    const poisonArcher = stormSpirit;
    const premiumNightmare = state && state.premiumMode === "nightmare";
    return {
        x: randomRange(s(720), WORLD.width - s(320)),
        y: randomRange(s(360), WORLD.height - s(320)),
        width: Math.round(20 * CHARACTER_SCALE),
        height: Math.round(20 * CHARACTER_SCALE),
        hp: Math.ceil(quest.enemyHp * (premiumNightmare ? 1.45 : 1)),
        maxHp: Math.ceil(quest.enemyHp * (premiumNightmare ? 1.45 : 1)),
        speed: 1.5 + wave * 0.12 + (premiumNightmare ? 0.4 : 0),
        damage: quest.enemyDamage + (premiumNightmare ? 4 : 0),
        hitCooldown: 0,
        rangedCooldown: randomRange(800, 1450),
        spiritCooldown: randomRange(1200, 2200),
        pulse: Math.random() * Math.PI * 2,
        mounted: !spiritEnemy && Math.random() < 0.35,
        zombie: zombieWorld,
        spiritType: spiritEnemy ? spiritType : null,
        stormSpirit,
        waterSpirit,
        earthSpirit,
        poisonArcher
    };
}

function ensureInfinitePveEnemies() {
    if (!isInfinitePveMode() || state.over || state.phase === "final-boss-rush") {
        return;
    }

    while (state.enemies.length < getPveEnemyTargetCount()) {
        const enemy = createEnemy(state.wave);
        if (distanceBetween(enemy, state.player) < s(240)) {
            enemy.x = clamp(state.player.x + randomRange(s(280), s(520)), s(200), WORLD.width - s(200));
            enemy.y = clamp(state.player.y + randomRange(s(-220), s(220)), s(200), WORLD.height - s(200));
        }
        state.enemies.push(enemy);
    }
}

function isDragonQuest(index = state ? state.questIndex : 0, world = state ? state.questWorld : "world1") {
    const level = index + 1;
    if (world === "alien") {
        return false;
    }
    return level === 3 || level === 6 || level === 9 || level === 10;
}

function getActiveBosses() {
    return [state.boss, ...state.extraBosses].filter((boss) => boss && boss.active);
}

function getPrimaryActiveBoss() {
    return getActiveBosses()[0] || null;
}

function shouldPlayLandingIntro(questIndex, questWorld) {
    return (questWorld === "world1" && questIndex === 0) || (questWorld === "alien" && questIndex === 0);
}

function createBoss(wave) {
    const world = state ? state.questWorld : "world1";
    const quest = getQuestForWave(wave, world);
    const dragonBoss = world === "alien"
        ? Math.random() < 0.4
        : isDragonQuest(Math.max(0, wave - 1), world);
    return {
        active: false,
        x: WORLD.width - s(420),
        y: s(260),
        width: Math.round(GAME.bossSize * CHARACTER_SCALE),
        height: Math.round(GAME.bossSize * CHARACTER_SCALE),
        hp: quest.bossHp,
        maxHp: quest.bossHp,
        speed: 1.25 + wave * 0.08,
        damage: quest.bossDamage,
        name: dragonBoss ? `${quest.boss} Dragon` : quest.boss,
        dragonBoss,
        hitCooldown: 0,
        pulse: 0,
        projectileCooldown: 1000
    };
}

function createKartasouDragon() {
    return {
        active: false,
        x: WORLD.width - s(520),
        y: s(220),
        width: Math.round(GAME.bossSize * CHARACTER_SCALE * 1.08),
        height: Math.round(GAME.bossSize * CHARACTER_SCALE * 1.08),
        hp: 980,
        maxHp: 980,
        speed: 2.05,
        damage: 26,
        name: "The Dragon of Kartasou",
        dragonBoss: true,
        kartasouDragon: true,
        hitCooldown: 0,
        pulse: 0,
        projectileCooldown: 820
    };
}

function createBossRushLineup() {
    const worldOneBosses = QUESTS.map((quest, index) => ({
        name: isDragonQuest(index, "world1") ? `${quest.boss} Dragon` : quest.boss,
        hp: quest.bossHp,
        damage: quest.bossDamage,
        dragonBoss: isDragonQuest(index, "world1"),
        zombieBoss: false,
        questWorld: "world1",
        questIndex: index
    }));
    const alienBosses = ALIEN_PATCH_QUESTS.map((quest, index) => ({
        name: quest.boss,
        hp: quest.bossHp,
        damage: quest.bossDamage,
        dragonBoss: /dragon/i.test(quest.boss),
        zombieBoss: false,
        questWorld: "alien",
        questIndex: index
    }));

    return worldOneBosses.concat(alienBosses, [
        {
            name: "Plague Lord Morvane",
            hp: 760,
            damage: 20,
            dragonBoss: false,
            zombieBoss: true,
            questWorld: "zombie",
            questIndex: 0
        },
        {
            name: "The Dragon of Kartasou",
            hp: 980,
            damage: 26,
            dragonBoss: true,
            zombieBoss: false,
            questWorld: "zombie",
            questIndex: 0,
            special: "kartasou"
        }
    ]);
}

function createDragonStormLineup() {
    return [
        { name: "Fault Bringer Dragon", hp: 280, damage: 16, dragonBoss: true, zombieBoss: false, questWorld: "world1", questIndex: 0 },
        { name: "Icebound Fang Dragon", hp: 320, damage: 18, dragonBoss: true, zombieBoss: false, questWorld: "world1", questIndex: 2 },
        { name: "Thunder Regent Dragon", hp: 380, damage: 20, dragonBoss: true, zombieBoss: false, questWorld: "world1", questIndex: 3 },
        { name: "Void Maw Dragon", hp: 810, damage: 40, dragonBoss: true, zombieBoss: false, questWorld: "alien", questIndex: 2 },
        { name: "The Dragon of Kartasou", hp: 980, damage: 26, dragonBoss: true, zombieBoss: false, questWorld: "zombie", questIndex: 0, special: "kartasou" }
    ];
}

function createBossRushBoss(entry, index) {
    const legendRush = state && state.premiumMode === "legend-rush";
    if (entry.special === "kartasou") {
        const boss = createKartasouDragon();
        boss.active = true;
        if (legendRush) {
            boss.maxHp = Math.ceil(boss.maxHp * 1.35);
            boss.hp = boss.maxHp;
            boss.damage += 8;
            boss.speed += 0.4;
        }
        return boss;
    }

    return {
        active: true,
        x: WORLD.width - s(420),
        y: s(260),
        width: Math.round(GAME.bossSize * CHARACTER_SCALE),
        height: Math.round(GAME.bossSize * CHARACTER_SCALE),
        hp: Math.ceil(entry.hp * (legendRush ? 1.35 : 1)),
        maxHp: Math.ceil(entry.hp * (legendRush ? 1.35 : 1)),
        speed: 1.55 + index * 0.03 + (legendRush ? 0.18 : 0),
        damage: entry.damage + (legendRush ? 6 : 0),
        name: entry.name,
        dragonBoss: Boolean(entry.dragonBoss),
        zombieBoss: Boolean(entry.zombieBoss),
        hitCooldown: 0,
        pulse: 0,
        projectileCooldown: Math.max(520, 980 - index * 18)
    };
}

function spawnBossRushBoss() {
    const entry = state.bossRushLineup[state.bossRushIndex];
    if (!entry) {
        state.victory = true;
        state.over = true;
        state.started = false;
        writeLog("Boss Rush", "Every boss has fallen. You cleared Boss Rush.");
        savePlayerProfile();
        clearSavedRun();
        return;
    }

    state.questWorld = entry.questWorld;
    state.questIndex = entry.questIndex;
    state.wave = state.bossRushIndex + 1;
    state.questKills = 0;
    state.enemies = [];
    state.townScouts = [];
    state.witnesses = [];
    state.evidenceSpots = [];
    state.projectiles = [];
    state.extraBosses = [];
    state.lairEntrance = null;
    state.castleAccessGranted = true;
    state.undergroundLair = entry.zombieBoss;
    state.boss = createBossRushBoss(entry, state.bossRushIndex);
    state.phase = entry.zombieBoss ? "boss-zombie" : (entry.dragonBoss ? "boss-dragon" : "boss-ship");
    state.player.x = s(760);
    state.player.y = s(1120);
    updateCamera();
    writeLog("Boss Rush", `Round ${state.bossRushIndex + 1}/${state.bossRushLineup.length}: ${entry.name} enters the arena.`);
}

function setupZombieApocalypse() {
    const quest = ZOMBIE_APOCALYPSE_QUESTS[0];
    const theme = getQuestPlaceTheme(0, "zombie");
    state.questWorld = "zombie";
    state.questIndex = 0;
    state.wave = 1;
    state.questKills = 0;
    state.witnessesFound = 0;
    state.witnessGoal = 3;
    state.evidenceSpots = createZombieEvidenceSpots();
    state.evidenceFound = 0;
    state.evidenceGoal = 3;
    state.townScouts = createZombieScouts();
    state.scoutsDefeated = 0;
    state.scoutsGoal = state.townScouts.length;
    state.phase = "town";
    state.undergroundLair = true;
    state.worldAreas = createWorldAreas(0, "zombie");
    state.townProps = createTownProps(0);
    state.witnesses = createZombieWitnesses();
    state.castleGuards = createCastleGuards();
    state.lairEntrance = createLairEntrance(true);
    state.lairEntrance.active = false;
    state.castleAccessGranted = false;
    state.boss = createZombieBoss();
    state.boss.active = false;
    state.zombieFinaleTriggered = false;
    state.awakeningTimer = 0;
    state.bossSpawnTimer = 999999;
    state.boss.x = WORLD.width - s(320);
    state.boss.y = s(220);
    state.projectiles = [];
    state.enemies = [];
    state.player.x = s(520);
    state.player.y = s(1120);
    updateCamera();
    writeLog("Zombie Mode", `${quest.title} begins.`);
    writeLog("Place", `The village is gone. Push through ${theme.areas[0]} and reach ${theme.areas[3]}.`);
    writeLog("Scene", quest.scene);
    writeLog("Side Quest", "Rescue the survivors by speaking to them before the dead reach them.");
    writeLog("Side Quest", "Gather every antidote component scattered across the village.");
    writeLog("Side Quest", "Clear the zombie packs blocking the quarantine gate.");
    writeLog("Boss", "When the gate opens, enter the keep, finish the antidote trail, and kill the plague lord.");
}

function createFinalBossRush() {
    const names = [
        "Black Knight Prime",
        "Harpoon King Ascended",
        "Thunder Regent Omega",
        "Silver Maw Reborn",
        "King Without Dawn Eternal"
    ];

    return names.map((name, index) => {
        const boss = createBoss(FINAL_PVE_WAVE + index);
        boss.active = true;
        boss.name = name;
        boss.maxHp = Math.ceil(boss.maxHp * (1.2 + index * 0.18));
        boss.hp = boss.maxHp;
        boss.damage += 8 + index * 2;
        boss.speed += 0.4 + index * 0.08;
        boss.dragonBoss = index % 2 === 1;
        boss.x = WORLD.width - s(560) + index * s(90);
        boss.y = s(220) + (index % 2) * s(120);
        boss.projectileCooldown = Math.max(260, 760 - index * 70);
        return boss;
    });
}

function getStyleRank(comboCount) {
    if (comboCount >= 24) {
        return "Legend";
    }
    if (comboCount >= 18) {
        return "Mythic";
    }
    if (comboCount >= 12) {
        return "Savage";
    }
    if (comboCount >= 8) {
        return "Elite";
    }
    if (comboCount >= 5) {
        return "Heroic";
    }
    if (comboCount >= 3) {
        return "Rising";
    }
    return "Rookie";
}

function extendCombo(amount = 1, source = "enemy") {
    state.comboCount += amount;
    state.comboTimer = 2600;
    state.highestCombo = Math.max(state.highestCombo, state.comboCount);
    if (source === "boss") {
        state.score += 25 * state.comboCount;
    } else {
        state.score += 6 * state.comboCount;
    }
}

function resetCombo(silent = false) {
    if (state.comboCount > 1 && !silent) {
        writeLog("Style", `Combo dropped at ${state.comboCount}x.`);
    }
    state.comboCount = 0;
    state.comboTimer = 0;
}

let state;

function resetGame() {
    if (state) {
        disconnectMultiplayer();
    }
    stopBackgroundMusic();
    state = {
        player: createPlayer(),
        reviews: loadSavedReviews(),
        enemies: [],
        boss: createBoss(1),
        wave: 1,
        score: 0,
        started: false,
        over: false,
        victory: false,
        mode: "menu",
        premiumMode: "",
        questWorld: "world1",
        worldOneCleared: loadWorldOneCleared(),
        elapsedMs: 0,
        bossSpawnTimer: 9000,
        rival: createRival(),
        obstacles: createObstacles(),
        townProps: createTownProps(0),
        witnesses: [],
        castleGuards: [],
        witnessesFound: 0,
        witnessGoal: 3,
        evidenceSpots: [],
        evidenceFound: 0,
        evidenceGoal: 2,
        townScouts: [],
        scoutsDefeated: 0,
        scoutsGoal: 2,
        worldAreas: createWorldAreas(0, "world1"),
        travelBarriers: createTravelBarriers(),
        areaEvents: {
            bridge: false,
            forest: false,
            gate: false
        },
        effects: [],
        cameraShake: 0,
        lairEntrance: null,
        castleAccessGranted: false,
        undergroundLair: false,
        phase: "menu",
        projectiles: [],
        extraBosses: [],
        bossRushLineup: [],
        bossRushIndex: 0,
        activeDialogue: null,
        chatMessages: [],
        questIndex: 0,
        launchIntroTimer: 0,
        awakeningTimer: 0,
        questKills: 0,
        zombieFinaleTriggered: false,
        comboCount: 0,
        comboTimer: 0,
        highestCombo: 0,
        trainingWaveCleared: 0,
        ringBounds: {
            left: s(80),
            top: s(120),
            right: WORLD.width - s(80),
            bottom: WORLD.height - s(120)
        },
        camera: {
            x: 0,
            y: 0
        },
        log: []
    };

    pointer.x = GAME.width / 2;
    pointer.y = GAME.height / 2;
    pointer.active = false;

    for (let i = 0; i < 3; i += 1) {
        state.enemies.push(createEnemy(state.wave));
    }

    writeLog("System", "Arena initialized. Press Start Battle to begin.");
    seedChat();
    renderShop();
    renderQuestList();
    applyAppearanceInputs();
    savePlayerProfile();
    syncUi();
    draw();
}

function renderChat() {
    const markup = state.chatMessages
        .map((entry) => `
            <div class="chat-entry ${entry.kind}">
                <strong>${entry.author}</strong>
                <span>${entry.text}</span>
            </div>
        `)
        .join("");
    if (ui.chatLog) {
        ui.chatLog.innerHTML = markup;
        ui.chatLog.scrollTop = ui.chatLog.scrollHeight;
    }
    if (ui.homeChatLog) {
        ui.homeChatLog.innerHTML = markup;
        ui.homeChatLog.scrollTop = ui.homeChatLog.scrollHeight;
    }
}

function pushChat(author, text, kind = "system") {
    state.chatMessages.push({ author, text, kind });
    state.chatMessages = state.chatMessages.slice(-18);
    renderChat();
}

function seedChat() {
    state.chatMessages = [];
    pushChat("Comms", "Chat is open. Type to talk while you play.", "system");
    pushChat("Mission Control", "Ask for help, ask about the boss, or just talk during your run.", "system");
}

const BANNED_CHAT_WORDS = [
    "fuck",
    "fucking",
    "fucker",
    "shit",
    "bitch",
    "asshole",
    "bastard",
    "damn",
    "dick",
    "piss",
    "crap",
    "slut",
    "whore",
    "cunt",
    "nigger",
    "nigga",
    "fag",
    "faggot"
];

function containsBannedChatWord(message) {
    const normalized = message.toLowerCase().replace(/[^a-z]/g, " ");
    return BANNED_CHAT_WORDS.some((word) => normalized.split(/\s+/).includes(word));
}

function getChatReply(message) {
    const text = message.toLowerCase();

    if (text.includes("help") || text.includes("what do i do")) {
        if (!state.started) {
            return "Pick a quest or training run first. I will guide you once you are moving.";
        }
        if (state.phase === "town") {
            return "Move through the route and beat the minions you meet. The boss path opens when they are down.";
        }
        if (state.phase === "hunt") {
            return "The fortress is open now. Walk through the door and push into the boss area.";
        }
        if (state.phase === "boss-ship" || state.phase === "boss-dragon") {
            return "Stay mobile, block hard hits, and strike when the boss comes close.";
        }
        return "Clear the guards in front of you, then keep pushing forward.";
    }

    if (text.includes("boss")) {
        return state.started
            ? `Current boss target: ${state.boss.active ? state.boss.name : getCurrentQuest().boss}.`
            : "Start a quest first and I will tell you the current boss.";
    }

    if (text.includes("wolf") || text.includes("wolves")) {
        return "Wolves rush the forest pass. Do not let them circle behind you.";
    }

    if (text.includes("minion") || text.includes("enemy")) {
        return `Minions defeated so far: ${state.scoutsDefeated}/${state.scoutsGoal}.`;
    }

    if (text.includes("hi") || text.includes("hello")) {
        return `Comms online, ${state.player.name}.`;
    }

    return state.started
        ? "Message received. Keep moving and I will stay with you on comms."
        : "Message received. Start a run when you are ready.";
}

function sendChatMessage() {
    const message = ui.chatInput.value.trim();
    sendChatMessageFromInput(message, ui.chatInput);
}

function sendHomeChatMessage() {
    const message = ui.homeChatInput.value.trim();
    sendChatMessageFromInput(message, ui.homeChatInput);
}

function sendChatMessageFromInput(message, inputElement) {
    if (!message) {
        return;
    }

    if (containsBannedChatWord(message)) {
        inputElement.value = "";
        pushChat("Comms", "That message was blocked because it contains banned words.", "system");
        return;
    }

    pushChat(state.player.name || "Player", message, "player");
    ui.chatInput.value = "";
    ui.homeChatInput.value = "";
    pushChat("Mission Control", getChatReply(message), "system");
}

function applyAppearanceInputs() {
    if (ui.playerNameInput) {
        ui.playerNameInput.value = state.player.name;
    }
    if (ui.lookSkin) {
        ui.lookSkin.value = state.player.look.skin;
    }
    if (ui.lookHair) {
        ui.lookHair.value = state.player.look.hair;
    }
    if (ui.lookArmor) {
        ui.lookArmor.value = state.player.look.armor;
    }
    if (ui.lookBuild) {
        ui.lookBuild.value = state.player.look.build;
    }
    if (ui.lookVisor) {
        ui.lookVisor.value = state.player.look.visor;
    }
    if (ui.lookHelmet) {
        ui.lookHelmet.value = state.player.look.helmet;
    }
    if (ui.lookRider) {
        ui.lookRider.value = state.player.look.rider;
    }
    renderEditorPreview();
}

function savePlayerIdentity() {
    const name = ui.playerNameInput ? ui.playerNameInput.value.trim() : state.player.name;
    state.player.name = name || DEFAULT_PLAYER_NAME;
    if (ui.creatorAboutInput && !(ui.creatorAboutInput.readOnly && !ui.creatorAboutInput.value)) {
        state.player.about = ui.creatorAboutInput.value;
    }
    if (ui.lookSkin) {
        state.player.look.skin = ui.lookSkin.value;
    }
    if (ui.lookHair) {
        state.player.look.hair = ui.lookHair.value;
    }
    if (ui.lookArmor) {
        state.player.look.armor = ui.lookArmor.value;
    }
    if (ui.lookBuild) {
        state.player.look.build = ui.lookBuild.value;
    }
    if (ui.lookVisor) {
        state.player.look.visor = ui.lookVisor.value;
    }
    if (ui.lookHelmet) {
        state.player.look.helmet = ui.lookHelmet.value;
    }
    if (ui.lookRider) {
        state.player.look.rider = ui.lookRider.value;
    }
    savePlayerProfile();
    renderEditorPreview();
    renderCreatorPanel();
    syncUi();
}

function isTypingTarget(target) {
    if (!target || !(target instanceof HTMLElement)) {
        return false;
    }

    if (target.isContentEditable) {
        return true;
    }

    const tag = target.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
}

function renderEditorPreview() {
    if (!ui.editorPlayerCanvas || !state || !state.player) {
        return;
    }

    const previewCtx = ui.editorPlayerCanvas.getContext("2d");
    if (!previewCtx) {
        return;
    }

    const skinTone = LOOKS.skin[state.player.look.skin] || LOOKS.skin.warm;
    const hairTone = LOOKS.hair[state.player.look.hair] || LOOKS.hair.brown;
    const armorLook = LOOKS.armor[state.player.look.armor] || LOOKS.armor.azure;
    const visorLook = LOOKS.visor[state.player.look.visor] || LOOKS.visor.ice;
    const helmetLook = LOOKS.helmet[state.player.look.helmet] || LOOKS.helmet.knight;
    const buildLook = LOOKS.build[state.player.look.build] || LOOKS.build.athletic;
    const isRider = state.player.look.rider === "rider";
    const previewBuild = isRider ? {
        chestWidth: buildLook.chestWidth + 2.4,
        waistWidth: buildLook.waistWidth + 1.7,
        armWidth: buildLook.armWidth + 1.3,
        legWidth: buildLook.legWidth + 0.9,
        headRadius: buildLook.headRadius + 0.5
    } : {
        chestWidth: buildLook.chestWidth,
        waistWidth: buildLook.waistWidth,
        armWidth: buildLook.armWidth,
        legWidth: buildLook.legWidth,
        headRadius: buildLook.headRadius
    };
    const width = ui.editorPlayerCanvas.width;
    const height = ui.editorPlayerCanvas.height;

    previewCtx.clearRect(0, 0, width, height);

    const skyGradient = previewCtx.createLinearGradient(0, 0, 0, height);
    skyGradient.addColorStop(0, "rgba(50, 77, 118, 0.98)");
    skyGradient.addColorStop(1, "rgba(12, 16, 28, 0.98)");
    previewCtx.fillStyle = skyGradient;
    previewCtx.fillRect(0, 0, width, height);

    previewCtx.fillStyle = "rgba(255,255,255,0.08)";
    previewCtx.beginPath();
    previewCtx.arc(width * 0.7, height * 0.22, 32, 0, Math.PI * 2);
    previewCtx.fill();

    previewCtx.fillStyle = "rgba(15, 24, 18, 0.96)";
    previewCtx.fillRect(0, height - 62, width, 62);
    previewCtx.fillStyle = "rgba(0,0,0,0.24)";
    previewCtx.beginPath();
    previewCtx.ellipse(width / 2, height - 44, 58, 18, 0, 0, Math.PI * 2);
    previewCtx.fill();

    if (isRider) {
        previewCtx.fillStyle = "#56453c";
        previewCtx.beginPath();
        previewCtx.ellipse(width / 2, 208, 64, 24, 0, 0, Math.PI * 2);
        previewCtx.fill();
        previewCtx.fillStyle = "#3f3028";
        previewCtx.beginPath();
        previewCtx.ellipse(width / 2 + 44, 188, 20, 24, 0.2, 0, Math.PI * 2);
        previewCtx.ellipse(width / 2 + 66, 172, 18, 14, 0, 0, Math.PI * 2);
        previewCtx.fill();
        previewCtx.strokeStyle = "#18130f";
        previewCtx.lineWidth = 4;
        previewCtx.beginPath();
        previewCtx.moveTo(width / 2 - 30, 224);
        previewCtx.lineTo(width / 2 - 34, 250);
        previewCtx.moveTo(width / 2 - 6, 226);
        previewCtx.lineTo(width / 2 - 8, 250);
        previewCtx.moveTo(width / 2 + 18, 224);
        previewCtx.lineTo(width / 2 + 20, 250);
        previewCtx.moveTo(width / 2 + 42, 220);
        previewCtx.lineTo(width / 2 + 48, 250);
        previewCtx.stroke();
    }

    const centerX = width / 2 + (isRider ? 22 : 0);
    const headY = isRider
        ? (state.player.look.build === "bulky" ? 60 : 56)
        : (state.player.look.build === "bulky" ? 78 : 74);
    const bodyTop = isRider ? 90 : 108;
    const shoulderHalf = previewBuild.chestWidth * 2.75;
    const hipHalf = previewBuild.waistWidth * 2.4;
    const armWidth = previewBuild.armWidth * 1.56;
    const legWidth = previewBuild.legWidth * 1.44;
    const headRadiusX = previewBuild.headRadius * 5.6;
    const headRadiusY = previewBuild.headRadius * 5.55;

    previewCtx.fillStyle = armorLook.capeBottom;
    previewCtx.beginPath();
    if (isRider) {
        previewCtx.moveTo(centerX - shoulderHalf * 0.5, bodyTop + 12);
        previewCtx.quadraticCurveTo(centerX - shoulderHalf * 0.24, 160, centerX + shoulderHalf * 0.42, 176);
        previewCtx.quadraticCurveTo(centerX + shoulderHalf * 0.12, 150, centerX - shoulderHalf * 0.5, bodyTop + 12);
    } else {
        previewCtx.moveTo(centerX - shoulderHalf - 8, bodyTop + 10);
        previewCtx.quadraticCurveTo(centerX - shoulderHalf - 18, 170, centerX - hipHalf - 4, 214);
        previewCtx.lineTo(centerX + hipHalf + 4, 214);
        previewCtx.quadraticCurveTo(centerX + shoulderHalf + 18, 170, centerX + shoulderHalf + 8, bodyTop + 10);
        previewCtx.closePath();
    }
    previewCtx.fill();

    const torsoGradient = previewCtx.createLinearGradient(centerX, bodyTop, centerX, 194);
    torsoGradient.addColorStop(0, armorLook.armorTop);
    torsoGradient.addColorStop(1, armorLook.armorBottom);
    previewCtx.fillStyle = torsoGradient;
    previewCtx.beginPath();
    if (isRider) {
        previewCtx.moveTo(centerX - shoulderHalf * 0.28, bodyTop + 6);
        previewCtx.quadraticCurveTo(centerX + shoulderHalf * 0.22, bodyTop - 8, centerX + shoulderHalf * 0.4, bodyTop + 18);
        previewCtx.quadraticCurveTo(centerX + hipHalf * 0.34, 160, centerX - hipHalf * 0.08, 176);
        previewCtx.quadraticCurveTo(centerX - shoulderHalf * 0.18, 146, centerX - shoulderHalf * 0.28, bodyTop + 6);
    } else {
        previewCtx.moveTo(centerX - shoulderHalf * 0.88, bodyTop + 1);
        previewCtx.quadraticCurveTo(centerX, bodyTop - 12, centerX + shoulderHalf * 0.88, bodyTop + 1);
        previewCtx.quadraticCurveTo(centerX + hipHalf * 0.94, 172, centerX + hipHalf * 0.76, 188);
        previewCtx.quadraticCurveTo(centerX, 203, centerX - hipHalf * 0.76, 188);
        previewCtx.quadraticCurveTo(centerX - hipHalf * 0.94, 172, centerX - shoulderHalf * 0.88, bodyTop + 1);
    }
    previewCtx.closePath();
    previewCtx.fill();

    previewCtx.fillStyle = armorLook.pauldron;
    previewCtx.beginPath();
    if (isRider) {
        previewCtx.ellipse(centerX + shoulderHalf * 0.12, bodyTop + 18, 14, 9, 0.12, 0, Math.PI * 2);
    } else {
        previewCtx.ellipse(centerX - shoulderHalf + 5, bodyTop + 13, 13, 8.5, -0.18, 0, Math.PI * 2);
        previewCtx.ellipse(centerX + shoulderHalf - 5, bodyTop + 13, 13, 8.5, 0.18, 0, Math.PI * 2);
    }
    previewCtx.fill();

    previewCtx.fillStyle = "rgba(214, 216, 214, 0.94)";
    previewCtx.beginPath();
    if (isRider) {
        previewCtx.moveTo(centerX - shoulderHalf * 0.18, bodyTop + 24);
        previewCtx.lineTo(centerX + shoulderHalf * 0.18, bodyTop + 22);
        previewCtx.lineTo(centerX + hipHalf * 0.1, 156);
        previewCtx.lineTo(centerX - hipHalf * 0.06, 164);
    } else {
        previewCtx.moveTo(centerX - shoulderHalf * 0.46, bodyTop + 18);
        previewCtx.lineTo(centerX + shoulderHalf * 0.46, bodyTop + 18);
        previewCtx.lineTo(centerX + hipHalf * 0.28, 166);
        previewCtx.lineTo(centerX + hipHalf * 0.08, 174);
        previewCtx.lineTo(centerX, 168);
        previewCtx.lineTo(centerX - hipHalf * 0.1, 176);
        previewCtx.lineTo(centerX - hipHalf * 0.3, 166);
    }
    previewCtx.closePath();
    previewCtx.fill();

    previewCtx.fillStyle = "rgba(120, 22, 24, 0.58)";
    previewCtx.beginPath();
    previewCtx.ellipse(centerX - hipHalf * 0.24, bodyTop + 42, hipHalf * 0.3, 9, -0.2, 0, Math.PI * 2);
    previewCtx.ellipse(centerX + hipHalf * 0.16, bodyTop + 62, hipHalf * 0.2, 7, 0.18, 0, Math.PI * 2);
    previewCtx.fill();

    previewCtx.strokeStyle = "rgba(118, 72, 54, 0.34)";
    previewCtx.lineWidth = 1;
    previewCtx.beginPath();
    previewCtx.moveTo(centerX, 168);
    previewCtx.lineTo(centerX, 190);
    previewCtx.moveTo(centerX - hipHalf * 0.26, 172);
    previewCtx.quadraticCurveTo(centerX, 168, centerX + hipHalf * 0.26, 172);
    previewCtx.moveTo(centerX - hipHalf * 0.24, 180);
    previewCtx.quadraticCurveTo(centerX, 176, centerX + hipHalf * 0.24, 180);
    previewCtx.moveTo(centerX - hipHalf * 0.2, 188);
    previewCtx.quadraticCurveTo(centerX, 184, centerX + hipHalf * 0.2, 188);
    previewCtx.stroke();

    previewCtx.fillStyle = skinTone;
    if (isRider) {
        previewCtx.fillRect(centerX + shoulderHalf * 0.18, bodyTop + 28, armWidth * 0.9, 44);
    } else {
        previewCtx.fillRect(centerX - shoulderHalf - 13, bodyTop + 22, armWidth * 0.9, 52);
        previewCtx.fillRect(centerX + shoulderHalf + 2, bodyTop + 22, armWidth * 0.9, 52);
    }

    previewCtx.fillStyle = "#d1ae56";
    if (isRider) {
        previewCtx.fillRect(centerX + shoulderHalf * 0.16, bodyTop + 58, armWidth, 9);
    } else {
        previewCtx.fillRect(centerX - shoulderHalf - 14, bodyTop + 58, armWidth, 10);
        previewCtx.fillRect(centerX + shoulderHalf + 1, bodyTop + 58, armWidth, 10);
    }

    previewCtx.fillStyle = skinTone;
    previewCtx.beginPath();
    if (isRider) {
        previewCtx.ellipse(centerX + headRadiusX * 0.16, headY + headRadiusY * 0.04, headRadiusX * 0.52, headRadiusY * 0.82, 0, 0, Math.PI * 2);
    } else {
        previewCtx.moveTo(centerX, headY - headRadiusY * 0.98);
        previewCtx.quadraticCurveTo(centerX + headRadiusX * 0.8, headY - headRadiusY * 0.72, centerX + headRadiusX * 0.58, headY + headRadiusY * 0.18);
        previewCtx.quadraticCurveTo(centerX + headRadiusX * 0.46, headY + headRadiusY * 0.8, centerX, headY + headRadiusY * 0.98);
        previewCtx.quadraticCurveTo(centerX - headRadiusX * 0.46, headY + headRadiusY * 0.8, centerX - headRadiusX * 0.58, headY + headRadiusY * 0.18);
        previewCtx.quadraticCurveTo(centerX - headRadiusX * 0.8, headY - headRadiusY * 0.72, centerX, headY - headRadiusY * 0.98);
    }
    previewCtx.fill();

    previewCtx.fillStyle = hairTone;
    previewCtx.beginPath();
    if (isRider) {
        previewCtx.moveTo(centerX - headRadiusX * 0.26, headY - 2);
        previewCtx.quadraticCurveTo(centerX + headRadiusX * 0.06, headY - headRadiusY * 0.9, centerX + headRadiusX * 0.52, headY - headRadiusY * 0.56);
        previewCtx.quadraticCurveTo(centerX + headRadiusX * 0.34, headY + 2, centerX - headRadiusX * 0.18, headY + 2);
    } else {
        previewCtx.moveTo(centerX - headRadiusX * 0.82, headY - 3);
        previewCtx.quadraticCurveTo(centerX - headRadiusX * 0.58, headY - headRadiusY * 0.86, centerX, headY - headRadiusY * 0.98);
        previewCtx.quadraticCurveTo(centerX + headRadiusX * 0.58, headY - headRadiusY * 0.86, centerX + headRadiusX * 0.82, headY - 3);
        previewCtx.quadraticCurveTo(centerX + headRadiusX * 0.58, headY + 3, centerX, headY + 1);
        previewCtx.quadraticCurveTo(centerX - headRadiusX * 0.58, headY + 3, centerX - headRadiusX * 0.82, headY - 3);
    }
    previewCtx.closePath();
    previewCtx.fill();

    previewCtx.fillStyle = helmetLook.shade || armorLook.helmet;
    previewCtx.beginPath();
    if (isRider) {
        previewCtx.moveTo(centerX - headRadiusX * 0.14, headY - 4);
        previewCtx.quadraticCurveTo(centerX + headRadiusX * 0.08, headY - headRadiusY * 0.88, centerX + headRadiusX * 0.72, headY - headRadiusY * 0.36);
        previewCtx.lineTo(centerX + headRadiusX * 0.54, headY + headRadiusY * 0.34);
        previewCtx.quadraticCurveTo(centerX + headRadiusX * 0.02, headY + headRadiusY * 0.46, centerX - headRadiusX * 0.14, headY + headRadiusY * 0.08);
    } else {
        previewCtx.moveTo(centerX - headRadiusX - 2, headY - 7);
        previewCtx.quadraticCurveTo(centerX, headY - headRadiusY * 1.22, centerX + headRadiusX + 2, headY - 7);
        previewCtx.lineTo(centerX + headRadiusX * 0.58, headY + headRadiusY * 0.26);
        previewCtx.quadraticCurveTo(centerX, headY + headRadiusY * 0.5, centerX - headRadiusX * 0.58, headY + headRadiusY * 0.26);
    }
    previewCtx.closePath();
    previewCtx.fill();

    previewCtx.fillStyle = visorLook.color;
    if (isRider) {
        previewCtx.fillRect(centerX + headRadiusX * 0.06, headY - 6, headRadiusX * 0.4, 6);
    } else {
        previewCtx.fillRect(centerX - headRadiusX * 0.46, headY - 7, headRadiusX * 0.92, 7);
    }
    if (helmetLook.crest) {
        previewCtx.strokeStyle = helmetLook.crest;
        previewCtx.lineWidth = 3;
        previewCtx.beginPath();
        previewCtx.moveTo(centerX, headY - headRadiusY - 10);
        previewCtx.lineTo(centerX, headY - headRadiusY + 2);
        previewCtx.stroke();
    }

    previewCtx.fillStyle = "#404855";
    if (isRider) {
        previewCtx.fillRect(centerX + 8, 156, legWidth, 26);
    } else {
        previewCtx.fillRect(centerX - legWidth - 6, 184, legWidth, 42);
        previewCtx.fillRect(centerX + 6, 184, legWidth, 42);
    }
    previewCtx.fillStyle = "#d1ae56";
    if (isRider) {
        previewCtx.fillRect(centerX + 6, 174, legWidth + 10, 10);
    } else {
        previewCtx.fillRect(centerX - legWidth - 16, 220, legWidth + 10, 10);
        previewCtx.fillRect(centerX + 6, 220, legWidth + 10, 10);
    }

    if (!isRider) {
        previewCtx.fillStyle = "#788793";
        previewCtx.beginPath();
        previewCtx.ellipse(centerX - shoulderHalf - 12, 150, 18, 26, 0, 0, Math.PI * 2);
        previewCtx.fill();
        previewCtx.strokeStyle = "rgba(255,255,255,0.25)";
        previewCtx.lineWidth = 2;
        previewCtx.stroke();
    }

    previewCtx.strokeStyle = armorLook.swordEdge;
    previewCtx.lineWidth = 4;
    previewCtx.beginPath();
    previewCtx.moveTo(centerX + shoulderHalf + 8, 132);
    previewCtx.lineTo(centerX + shoulderHalf + 34, 92);
    previewCtx.stroke();
    previewCtx.strokeStyle = "#caa04d";
    previewCtx.lineWidth = 5;
    previewCtx.beginPath();
    previewCtx.moveTo(centerX + shoulderHalf + 6, 135);
    previewCtx.lineTo(centerX + shoulderHalf - 2, 147);
    previewCtx.stroke();
    previewCtx.lineWidth = 3;
    previewCtx.beginPath();
    previewCtx.moveTo(centerX + shoulderHalf - 6, 145);
    previewCtx.lineTo(centerX + shoulderHalf + 8, 145);
    previewCtx.stroke();

    if (ui.editorPlayerName) {
        ui.editorPlayerName.textContent = state.player.name || "Champion";
    }
}

async function requestFullscreenPlay() {
    document.body.classList.add("play-mode");
    const root = document.documentElement;
    if (!root.requestFullscreen || document.fullscreenElement) {
        return;
    }

    try {
        await root.requestFullscreen();
    } catch (error) {
        writeLog("System", "Fullscreen was blocked. The quest still started.");
    }
}

function leaveFullscreenPlay() {
    document.body.classList.remove("play-mode");
}

function createMusicVoice(gainValue, filterFrequency) {
    const filter = music.context.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = filterFrequency;

    const gain = music.context.createGain();
    gain.gain.value = gainValue;

    filter.connect(gain);
    gain.connect(music.masterGain);
    return { filter, gain };
}

function initMusic() {
    if (music.context) {
        return;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
        return;
    }

    music.context = new AudioContextClass();
    music.masterGain = music.context.createGain();
    music.masterGain.gain.value = 0.34;
    music.masterGain.connect(music.context.destination);
    music.bassGain = createMusicVoice(0.64, 520);
    music.ambientGain = createMusicVoice(0.48, 1100);
    music.pulseGain = createMusicVoice(0.28, 1700);
    music.leadGain = createMusicVoice(0.24, 2600);
    music.shimmerGain = createMusicVoice(0.18, 3200);
}

function startDrone(targetNode, frequency, type, volume) {
    const osc = music.context.createOscillator();
    const gain = music.context.createGain();
    osc.type = type;
    osc.frequency.value = frequency;
    gain.gain.value = volume;
    osc.connect(gain);
    gain.connect(targetNode.filter);
    osc.start();
    music.oscillators.push({ osc, gain });
    return gain;
}

function startModulator(targetParam, frequency, depth) {
    const lfo = music.context.createOscillator();
    const lfoGain = music.context.createGain();
    lfo.type = "sine";
    lfo.frequency.value = frequency;
    lfoGain.gain.value = depth;
    lfo.connect(lfoGain);
    lfoGain.connect(targetParam);
    lfo.start();
    music.modulationOscillators.push({ osc: lfo, gain: lfoGain });
}

function retuneMusicOscillator(index, frequency, volume) {
    const voice = music.oscillators[index];
    if (!voice || !music.context) {
        return;
    }

    voice.osc.frequency.cancelScheduledValues(music.context.currentTime);
    voice.osc.frequency.setTargetAtTime(frequency, music.context.currentTime, 0.22);
    voice.gain.gain.cancelScheduledValues(music.context.currentTime);
    voice.gain.gain.setTargetAtTime(volume, music.context.currentTime, 0.18);
}

function updateOriginalMusicLoop() {
    if (!music.context || !music.started) {
        return;
    }

    const chordRoots = [138.59, 130.81, 123.47, 116.54];
    const pulseRoots = [207.65, 196.0, 185.0, 174.61];
    const melody = [311.13, 293.66, 311.13, 349.23, 392.0, 349.23, 311.13, 261.63];
    const shimmerLine = [466.16, 440.0, 466.16, 523.25, 587.33, 523.25, 466.16, 392.0];
    const step = music.step % chordRoots.length;
    const melodyStep = music.step % melody.length;
    const combatBoost = state && state.started && !state.over ? 1 : 0;
    const bossBoost = state && getActiveBosses().length ? 1 : 0;

    retuneMusicOscillator(0, chordRoots[step] * 0.5, 0.24 + combatBoost * 0.05);
    retuneMusicOscillator(1, chordRoots[step], 0.12 + bossBoost * 0.04);
    retuneMusicOscillator(2, chordRoots[step] * 1.5, 0.09 + combatBoost * 0.03);
    retuneMusicOscillator(3, pulseRoots[step], melodyStep % 2 === 0 ? (0.12 + combatBoost * 0.04) : 0.05);
    retuneMusicOscillator(4, melody[melodyStep], melodyStep % 2 === 0 ? (0.1 + bossBoost * 0.03) : 0.055);
    retuneMusicOscillator(5, shimmerLine[melodyStep], melodyStep % 4 === 0 ? 0.03 : 0.012);

    music.step += 1;
}

async function startBackgroundMusic() {
    if (music.started) {
        return;
    }

    initMusic();
    if (!music.context) {
        return;
    }

    if (music.context.state === "suspended") {
        await music.context.resume();
    }

    music.started = true;
    music.step = 0;

    music.masterGain.gain.cancelScheduledValues(music.context.currentTime);
    music.masterGain.gain.setValueAtTime(0.0001, music.context.currentTime);
    music.masterGain.gain.exponentialRampToValueAtTime(0.34, music.context.currentTime + 0.55);

    startDrone(music.bassGain, 69.3, "triangle", 0.24);
    startDrone(music.ambientGain, 138.59, "triangle", 0.12);
    startDrone(music.ambientGain, 207.65, "sine", 0.08);
    startDrone(music.pulseGain, 207.65, "triangle", 0.08);
    startDrone(music.leadGain, 311.13, "triangle", 0.075);
    startDrone(music.shimmerGain, 466.16, "sine", 0.016);

    startModulator(music.bassGain.gain.gain, 0.12, 0.03);
    startModulator(music.ambientGain.gain.gain, 0.09, 0.012);
    startModulator(music.pulseGain.gain.gain, 0.24, 0.02);
    startModulator(music.leadGain.gain.gain, 0.14, 0.025);
    startModulator(music.shimmerGain.gain.gain, 0.05, 0.008);
    startModulator(music.bassGain.filter.frequency, 0.04, 50);
    startModulator(music.ambientGain.filter.frequency, 0.06, 120);
    startModulator(music.leadGain.filter.frequency, 0.1, 180);
    startModulator(music.shimmerGain.filter.frequency, 0.05, 140);

    // Quick audible swell so the player immediately hears that music started.
    const startTone = music.context.createOscillator();
    const startGain = music.context.createGain();
    startTone.type = "triangle";
    startTone.frequency.setValueAtTime(233.08, music.context.currentTime);
    startTone.frequency.exponentialRampToValueAtTime(311.13, music.context.currentTime + 0.22);
    startGain.gain.setValueAtTime(0.0001, music.context.currentTime);
    startGain.gain.exponentialRampToValueAtTime(0.1, music.context.currentTime + 0.04);
    startGain.gain.exponentialRampToValueAtTime(0.0001, music.context.currentTime + 0.4);
    startTone.connect(startGain);
    startGain.connect(music.masterGain);
    startTone.start(music.context.currentTime);
    startTone.stop(music.context.currentTime + 0.42);

    updateOriginalMusicLoop();
    music.scheduleTimer = window.setInterval(updateOriginalMusicLoop, 420);
}

function stopBackgroundMusic() {
    music.started = false;
    if (!music.context) {
        music.oscillators = [];
        music.modulationOscillators = [];
        return;
    }
    if (music.scheduleTimer) {
        window.clearInterval(music.scheduleTimer);
        music.scheduleTimer = null;
    }
    music.oscillators.forEach(({ osc, gain }) => {
        gain.gain.cancelScheduledValues(music.context.currentTime);
        gain.gain.setTargetAtTime(0.0001, music.context.currentTime, 0.08);
        osc.stop(music.context.currentTime + 0.2);
    });
    music.modulationOscillators.forEach(({ osc }) => {
        osc.stop(music.context.currentTime + 0.1);
    });
    music.oscillators = [];
    music.modulationOscillators = [];
}

function setHomeAppStatus(message, tone = "") {
    if (!ui.homeAppStatus) {
        return;
    }
    ui.homeAppStatus.textContent = message;
    ui.homeAppStatus.classList.remove("ready");
    ui.homeAppStatus.classList.remove("warn");
    if (tone) {
        ui.homeAppStatus.classList.add(tone);
    }
}

async function refreshViewerCount() {
    if (!ui.viewerCountText || !ui.viewerCountNote) {
        return;
    }

    const shouldCountVisit = !window.sessionStorage.getItem(VIEW_COUNTER_SESSION_KEY);
    const bumpLocalFallback = () => {
        try {
            const current = Math.max(VIEW_COUNTER_FLOOR, Number(window.localStorage.getItem(VIEW_COUNTER_FALLBACK_KEY) || "0"));
            const next = shouldCountVisit ? current + 1 : current;
            if (shouldCountVisit) {
                window.localStorage.setItem(VIEW_COUNTER_FALLBACK_KEY, String(next));
                window.sessionStorage.setItem(VIEW_COUNTER_SESSION_KEY, "done");
            }
            return next;
        } catch (error) {
            return 0;
        }
    };

    if (window.location.protocol === "file:") {
        const localViews = bumpLocalFallback();
        ui.viewerCountText.textContent = localViews.toLocaleString();
        ui.viewerCountNote.textContent = "This is a device-only view count while you are opening the game from files on this computer.";
        return;
    }

    const endpoint = shouldCountVisit
        ? `https://api.countapi.xyz/hit/${VIEW_COUNTER_NAMESPACE}/${VIEW_COUNTER_KEY}`
        : `https://api.countapi.xyz/get/${VIEW_COUNTER_NAMESPACE}/${VIEW_COUNTER_KEY}`;

    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        const value = Math.max(VIEW_COUNTER_FLOOR, Number(data && data.value) || 0);
        ui.viewerCountText.textContent = value.toLocaleString();
        ui.viewerCountNote.textContent = "This shows total website views for your live game page.";
        if (shouldCountVisit) {
            window.sessionStorage.setItem(VIEW_COUNTER_SESSION_KEY, "done");
        }
    } catch (error) {
        const localViews = bumpLocalFallback();
        ui.viewerCountText.textContent = localViews.toLocaleString();
        ui.viewerCountNote.textContent = "Live viewer count could not load, so this is a backup count for views on this device.";
    }
}

function getInstallPlatformInfo() {
    const userAgent = navigator.userAgent || "";
    const isIos = /iPhone|iPad|iPod/i.test(userAgent);
    const isAndroid = /Android/i.test(userAgent);
    const isSafari = /Safari/i.test(userAgent) && !/Chrome|CriOS|Edg|OPR/i.test(userAgent);
    const isChromeFamily = /Chrome|CriOS|Edg|OPR/i.test(userAgent);

    if (window.location.protocol === "file:") {
        return {
            label: "local file",
            status: "Install needs a local website first. Open the game from localhost or a real website, then tap Install App.",
            instructions: "This game is opened as a local file right now. To install it as an app, run it from localhost or upload it to a website first."
        };
    }

    if (isIos && isSafari) {
        return {
            label: "iPhone or iPad",
            status: "Tap Install App, then use Safari Share > Add to Home Screen.",
            instructions: "On iPhone or iPad: tap the Share button in Safari, then choose Add to Home Screen."
        };
    }

    if (isAndroid && appInstall.deferredPrompt) {
        return {
            label: "Android",
            status: "Tap Install App to install the game on this Android device.",
            instructions: "Tap Install App and accept the browser prompt."
        };
    }

    if (isAndroid) {
        return {
            label: "Android",
            status: "Tap Install App, then use your browser menu and choose Add to Home Screen or Install App.",
            instructions: "On Android: open the browser menu and choose Add to Home Screen or Install App."
        };
    }

    if (isChromeFamily && appInstall.deferredPrompt) {
        return {
            label: "desktop browser",
            status: "Tap Install App to install the game on this computer.",
            instructions: "Tap Install App and accept the browser prompt."
        };
    }

    if (isChromeFamily) {
        return {
            label: "desktop browser",
            status: "Tap Install App, then use your browser install icon or browser menu to install it.",
            instructions: "On desktop: use the install icon in the address bar or open the browser menu and choose Install App."
        };
    }

    return {
        label: "browser",
        status: "This build is ready. If your browser blocks direct install, use the browser menu to add it to your home screen.",
        instructions: "Use your browser menu and choose Install App or Add to Home Screen if it is available."
    };
}

function updateInstallUi() {
    if (!ui.homeInstallButton) {
        return;
    }

    if (appInstall.installed) {
        ui.homeInstallButton.textContent = "App Installed";
        ui.homeInstallButton.disabled = true;
        setHomeAppStatus("This game is already installed like an app on this device.", "ready");
        return;
    }

    ui.homeInstallButton.disabled = false;

    const platformInfo = getInstallPlatformInfo();

    if (appInstall.deferredPrompt) {
        ui.homeInstallButton.textContent = "Install App";
        setHomeAppStatus(platformInfo.status, "ready");
        return;
    }

    if (window.location.protocol === "file:") {
        ui.homeInstallButton.textContent = "Install App";
        setHomeAppStatus(platformInfo.status, "warn");
        return;
    }

    ui.homeInstallButton.textContent = "Install App";
    setHomeAppStatus(platformInfo.status, "");
}

async function handleInstallApp() {
    if (appInstall.installed) {
        setHomeAppStatus("The game is already installed on this device.", "ready");
        return;
    }

    if (appInstall.deferredPrompt) {
        const promptEvent = appInstall.deferredPrompt;
        appInstall.deferredPrompt = null;
        appInstall.installChoicePending = true;
        promptEvent.prompt();
        try {
            const result = await promptEvent.userChoice;
            if (result && result.outcome === "accepted") {
                setHomeAppStatus("Install started. When it finishes, this game will work like an app on this device.", "ready");
            } else {
                setHomeAppStatus("Install was cancelled. You can tap Install App again anytime.", "warn");
            }
        } catch (error) {
            // Ignore cancelled installs.
        } finally {
            appInstall.installChoicePending = false;
        }
        updateInstallUi();
        return;
    }

    const platformInfo = getInstallPlatformInfo();
    setHomeAppStatus(platformInfo.status, window.location.protocol === "file:" ? "warn" : "");
    window.alert(platformInfo.instructions);
}

async function resetOldAppCachesOnce() {
    if (!("serviceWorker" in navigator) || !("caches" in window) || window.location.protocol === "file:") {
        return;
    }

    try {
        if (window.localStorage.getItem(CACHE_RESET_MARKER_KEY) === "done") {
            return;
        }

        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map((registration) => registration.unregister()));

        const cacheKeys = await caches.keys();
        await Promise.all(cacheKeys.map((key) => caches.delete(key)));

        window.localStorage.setItem(CACHE_RESET_MARKER_KEY, "done");
    } catch (error) {
        // Ignore cache reset errors.
    }
}

async function registerAppShell() {
    if (!("serviceWorker" in navigator) || window.location.protocol === "file:") {
        updateInstallUi();
        return;
    }

    await resetOldAppCachesOnce();

    navigator.serviceWorker.register("./sw.js").then(() => {
        appInstall.serviceWorkerReady = true;
        updateInstallUi();
    }).catch(() => {
        setHomeAppStatus("App install metadata is ready, but offline cache could not start yet.", "warn");
    });
}

function showHomePanel(panel) {
    if (!ui.homeMainContent || !ui.homeStorePanel || !ui.homeEditorPanel || !ui.homeChatPanel || !ui.homeCreatorPanel || !ui.homeReviewsPanel || !ui.homeMultiplayerPanel || !ui.homePremiumPanel || !ui.homeZombieRewardPanel) {
        return;
    }

    if (panel === "main") {
        ui.homeMainContent.classList.remove("hidden");
    } else {
        ui.homeMainContent.classList.add("hidden");
    }

    ui.homeStorePanel.classList.add("hidden");
    ui.homeEditorPanel.classList.add("hidden");
    ui.homeChatPanel.classList.add("hidden");
    ui.homeCreatorPanel.classList.add("hidden");
    ui.homeReviewsPanel.classList.add("hidden");
    ui.homeMultiplayerPanel.classList.add("hidden");
    ui.homePremiumPanel.classList.add("hidden");
    ui.homeZombieRewardPanel.classList.add("hidden");

    if (panel === "store") {
        ui.homeStorePanel.classList.remove("hidden");
    }
    if (panel === "editor") {
        ui.homeEditorPanel.classList.remove("hidden");
        renderEditorPreview();
    }
    if (panel === "chat") {
        ui.homeChatPanel.classList.remove("hidden");
    }
    if (panel === "creator") {
        ui.homeCreatorPanel.classList.remove("hidden");
        renderCreatorPanel();
    }
    if (panel === "reviews") {
        ui.homeReviewsPanel.classList.remove("hidden");
        renderReviewsPanel();
    }
    if (panel === "multiplayer") {
        ui.homeMultiplayerPanel.classList.remove("hidden");
    }
    if (panel === "premium") {
        ui.homePremiumPanel.classList.remove("hidden");
        renderPremiumTicketPanel();
    }
    if (panel === "zombieReward") {
        ui.homeZombieRewardPanel.classList.remove("hidden");
        renderZombieRewardPanel();
    }
}

function openHome(panel = "main") {
    savePlayerIdentity();
    grantPremiumDailyBonus();
    renderPremiumTicketPanel();
    renderZombieRewardPanel();
    renderCreatorPanel();
    if (ui.homeScreen) {
        ui.homeScreen.classList.remove("hidden");
    }
    closeDialogue();
    leaveFullscreenPlay();
    showHomePanel(panel);
    updatePremiumModeButtons();
    syncMultiplayerStatusText();
    updateInstallUi();
    refreshViewerCount();
}

function closeHome() {
    if (ui.homeScreen) {
        ui.homeScreen.classList.add("hidden");
    }
    showHomePanel("main");
}

function disconnectMultiplayer() {
    if (multiplayer.channel) {
        try {
            multiplayer.channel.postMessage({
                type: "leave",
                clientId: multiplayer.clientId
            });
        } catch (error) {
            // Ignore if the channel is already closing.
        }
        multiplayer.channel.close();
    }

    multiplayer.channel = null;
    multiplayer.room = "";
    multiplayer.connected = false;
    multiplayer.gameMode = ui.multiplayerModeSelect ? ui.multiplayerModeSelect.value : "coop";
    multiplayer.isHost = true;
    multiplayer.remoteClientId = "";
    multiplayer.lastSentAt = 0;
    state.rival.active = false;
    syncMultiplayerStatusText();
}

function broadcastMultiplayerMessage(message) {
    if (!multiplayer.channel) {
        return;
    }

    multiplayer.channel.postMessage({
        ...message,
        clientId: multiplayer.clientId
    });
}

function serializeEnemy(enemy) {
    return {
        x: enemy.x,
        y: enemy.y,
        width: enemy.width,
        height: enemy.height,
        hp: enemy.hp,
        maxHp: enemy.maxHp,
        speed: enemy.speed,
        damage: enemy.damage,
        hitCooldown: enemy.hitCooldown,
        rangedCooldown: enemy.rangedCooldown,
        spiritCooldown: enemy.spiritCooldown,
        pulse: enemy.pulse,
        mounted: enemy.mounted,
        spiritType: enemy.spiritType,
        stormSpirit: enemy.stormSpirit,
        waterSpirit: enemy.waterSpirit,
        earthSpirit: enemy.earthSpirit,
        poisonArcher: enemy.poisonArcher,
        dragonBurn: enemy.dragonBurn || 0
    };
}

function serializeScout(scout) {
    return {
        x: scout.x,
        y: scout.y,
        width: scout.width,
        height: scout.height,
        hp: scout.hp,
        maxHp: scout.maxHp,
        speed: scout.speed,
        damage: scout.damage,
        hitCooldown: scout.hitCooldown,
        pulse: scout.pulse,
        variant: scout.variant || "scout"
    };
}

function serializeProjectile(projectile) {
    return {
        kind: projectile.kind,
        x: projectile.x,
        y: projectile.y,
        vx: projectile.vx,
        vy: projectile.vy,
        damage: projectile.damage,
        life: projectile.life,
        sourceLabel: projectile.sourceLabel,
        size: projectile.size,
        poisonMs: projectile.poisonMs || 0
    };
}

function serializeBoss(boss) {
    return {
        active: boss.active,
        x: boss.x,
        y: boss.y,
        width: boss.width,
        height: boss.height,
        hp: boss.hp,
        maxHp: boss.maxHp,
        speed: boss.speed,
        damage: boss.damage,
        name: boss.name,
        dragonBoss: boss.dragonBoss,
        hitCooldown: boss.hitCooldown,
        pulse: boss.pulse,
        projectileCooldown: boss.projectileCooldown
    };
}

function serializeWorldState() {
    return {
        phase: state.phase,
        questWorld: state.questWorld,
        questIndex: state.questIndex,
        wave: state.wave,
        questKills: state.questKills,
        scoutsDefeated: state.scoutsDefeated,
        castleAccessGranted: state.castleAccessGranted,
        lairEntrance: state.lairEntrance
            ? {
                x: state.lairEntrance.x,
                y: state.lairEntrance.y,
                width: state.lairEntrance.width,
                height: state.lairEntrance.height,
                active: state.lairEntrance.active
            }
            : null,
        enemies: state.enemies.map(serializeEnemy),
        townScouts: state.townScouts.map(serializeScout),
        projectiles: state.projectiles.slice(0, MULTIPLAYER_MAX_SYNC_PROJECTILES).map(serializeProjectile),
        boss: serializeBoss(state.boss)
    };
}

function applyRemoteWorldState(worldState) {
    if (!worldState) {
        return;
    }

    state.phase = worldState.phase || state.phase;
    state.wave = worldState.wave || state.wave;
    state.questKills = worldState.questKills || 0;
    state.scoutsDefeated = worldState.scoutsDefeated || 0;
    state.castleAccessGranted = Boolean(worldState.castleAccessGranted);
    state.enemies = (worldState.enemies || []).map((enemy) => ({ ...enemy }));
    state.townScouts = (worldState.townScouts || []).map((scout) => ({ ...scout }));
    state.projectiles = (worldState.projectiles || []).map((projectile) => ({ ...projectile }));
    if (worldState.boss) {
        state.boss = { ...state.boss, ...worldState.boss };
    }
    if (worldState.lairEntrance) {
        state.lairEntrance = { ...worldState.lairEntrance };
    }
}

function attackHitsTargetFrom(attacker, target, attackVector) {
    const attackerCenter = getCenter(attacker);
    const targetCenter = getCenter(target);
    const offsetX = targetCenter.x - attackerCenter.x;
    const offsetY = targetCenter.y - attackerCenter.y;
    const distance = Math.hypot(offsetX, offsetY);

    if (distance > s(128)) {
        return false;
    }

    const directionX = offsetX / (distance || 1);
    const directionY = offsetY / (distance || 1);
    const dot = directionX * attackVector.x + directionY * attackVector.y;

    return dot > 0.05;
}

function applyDamageToRival(amount, sourceLabel) {
    if (!state.rival.active) {
        return 0;
    }

    if (state.rival.flipTimer > 0) {
        return 0;
    }

    let finalDamage = Math.max(1, amount - (state.rival.armor || 0));
    if (state.rival.blocking) {
        finalDamage = Math.max(1, Math.ceil(finalDamage * (1 - (state.rival.shieldPower || 0.45))));
    }
    state.rival.hp = Math.max(0, state.rival.hp - finalDamage);
    state.rival.hitCooldown = 280;
    broadcastMultiplayerMessage({
        type: "coop-damage",
        amount: finalDamage,
        sourceLabel,
        targetClientId: multiplayer.remoteClientId
    });
    return finalDamage;
}

function applyCoopRemoteAttack(message) {
    const attacker = {
        x: message.x,
        y: message.y,
        width: state.player.width,
        height: state.player.height
    };
    const attackVector = { x: message.attackVectorX || 1, y: message.attackVectorY || 0 };
    const damage = message.damage || state.player.damage;
    let landed = false;

    for (const enemy of state.enemies) {
        if (attackHitsTargetFrom(attacker, enemy, attackVector)) {
            enemy.hp -= damage;
            landed = true;
            spawnEffect({
                type: "hit",
                x: enemy.x + enemy.width / 2,
                y: enemy.y + enemy.height / 2,
                color: "#8fe9ff",
                life: 220,
                maxLife: 220
            });
            writeLog("Co-op", `${message.name || "Ally"} hit an enemy for ${damage.toFixed(0)} damage.`);
            break;
        }
    }

    if (!landed) {
        for (const scout of state.townScouts) {
            if (attackHitsTargetFrom(attacker, scout, attackVector)) {
                scout.hp -= damage;
                landed = true;
                spawnEffect({
                    type: "hit",
                    x: scout.x + scout.width / 2,
                    y: scout.y + scout.height / 2,
                    color: "#8fe9ff",
                    life: 220,
                    maxLife: 220
                });
                writeLog("Co-op", `${message.name || "Ally"} cut down a minion for ${damage.toFixed(0)} damage.`);
                break;
            }
        }
    }

    if (!landed && state.boss.active && attackHitsTargetFrom(attacker, state.boss, attackVector)) {
        state.boss.hp -= damage;
        spawnEffect({
            type: "hit",
            x: state.boss.x + state.boss.width / 2,
            y: state.boss.y + state.boss.height / 2,
            color: "#8fe9ff",
            life: 260,
            maxLife: 260
        });
        writeLog("Co-op", `${message.name || "Ally"} struck ${state.boss.name} for ${damage.toFixed(0)} damage.`);
    }
}

function handleMultiplayerMessage(event) {
    const message = event.data;
    if (!message || message.clientId === multiplayer.clientId) {
        return;
    }

    if (message.type === "state") {
        multiplayer.connected = true;
        multiplayer.gameMode = message.gameMode || multiplayer.gameMode;
        if (ui.multiplayerModeSelect) {
            ui.multiplayerModeSelect.value = multiplayer.gameMode;
        }
        refreshMultiplayerHost(message.clientId);
        state.rival.active = true;
        state.rival.name = message.name || "Rival";
        state.rival.x = message.x;
        state.rival.y = message.y;
        state.rival.facingX = message.facingX;
        state.rival.facingY = message.facingY;
        state.rival.attackTimer = message.attackTimer || 0;
        state.rival.pulse = state.elapsedMs * 0.01;
        state.rival.hp = message.hp || state.rival.hp;
        state.rival.maxHp = message.maxHp || state.rival.maxHp;
        state.rival.hitCooldown = message.hitCooldown || 0;
        state.rival.blocking = Boolean(message.blocking);
        state.rival.flipTimer = message.flipTimer || 0;
        state.rival.look = message.look || state.rival.look;
        if (
            (message.arena && message.arena !== multiplayer.arena && MULTIPLAYER_ARENAS[message.arena]) ||
            (isMultiplayerCoop() && message.worldState && message.worldState.questIndex !== state.questIndex)
        ) {
            multiplayer.arena = message.arena;
            const arena = MULTIPLAYER_ARENAS[multiplayer.arena];
            const syncedQuestIndex = message.worldState && typeof message.worldState.questIndex === "number"
                ? message.worldState.questIndex
                : arena.questIndex;
            const syncedQuestWorld = message.worldState && message.worldState.questWorld
                ? message.worldState.questWorld
                : arena.questWorld;
            setupQuest(syncedQuestIndex, syncedQuestWorld);
            state.mode = "multiplayer";
            state.phase = multiplayer.gameMode === "versus" ? "multiplayer" : state.phase;
            if (multiplayer.gameMode === "versus") {
                state.enemies = [];
                state.townScouts = [];
                state.witnesses = [];
                state.evidenceSpots = [];
                state.projectiles = [];
                state.boss.active = false;
                state.lairEntrance = null;
            } else if (multiplayer.gameMode === "bossraid") {
                state.phase = "boss-ship";
                state.enemies = [];
                state.townScouts = [];
                state.witnesses = [];
                state.evidenceSpots = [];
                state.projectiles = [];
                state.lairEntrance = null;
                state.boss = createBoss(Math.max(8, syncedQuestIndex + 5));
                state.boss.active = true;
                state.boss.projectileCooldown = 720;
            } else if (multiplayer.gameMode === "dragonhunt") {
                state.phase = "boss-dragon";
                state.enemies = [];
                state.townScouts = [];
                state.witnesses = [];
                state.evidenceSpots = [];
                state.projectiles = [];
                state.lairEntrance = null;
                state.boss = createBoss(Math.max(10, syncedQuestIndex + 6));
                state.boss.dragonBoss = true;
                state.boss.name = state.boss.name.replace(/ Dragon$/, "") + " Dragon";
                state.boss.active = true;
                state.boss.projectileCooldown = 760;
            }
            state.player.x = arena.spawn.x;
            state.player.y = arena.spawn.y;
        }
        if (isMultiplayerCoop() && !multiplayer.isHost && message.worldState) {
            applyRemoteWorldState(message.worldState);
        }
        syncMultiplayerStatusText();
        return;
    }

    if (message.type === "hit" && multiplayer.gameMode === "versus") {
        state.player.hp = Math.max(0, state.player.hp - (message.damage || 8));
        spawnEffect({
            type: "hit",
            x: state.player.x + state.player.width / 2,
            y: state.player.y + state.player.height / 2,
            color: "#ffe39d",
            life: 220,
            maxLife: 220
        });
        writeLog("Multiplayer", `${message.name || "Opponent"} hit you for ${message.damage || 8}.`);
        return;
    }

    if (message.type === "coop-hit" && isMultiplayerCoop() && multiplayer.isHost) {
        applyCoopRemoteAttack(message);
        return;
    }

    if (
        message.type === "coop-damage" &&
        isMultiplayerCoop() &&
        (!message.targetClientId || message.targetClientId === multiplayer.clientId)
    ) {
        state.player.hp = Math.max(0, state.player.hp - (message.amount || 1));
        spawnEffect({
            type: "hit",
            x: state.player.x + state.player.width / 2,
            y: state.player.y + state.player.height / 2,
            color: "#ffe39d",
            life: 220,
            maxLife: 220
        });
        writeLog("Co-op", `${message.sourceLabel || "Enemy"} hit you for ${message.amount || 1}.`);
        return;
    }

    if (message.type === "leave") {
        multiplayer.connected = false;
        state.rival.active = false;
        multiplayer.remoteClientId = "";
        multiplayer.isHost = true;
        syncMultiplayerStatusText();
    }
}

function sendMultiplayerState() {
    if (state.mode !== "multiplayer" || !multiplayer.channel) {
        return;
    }

    const includeWorldState = isMultiplayerCoop() && multiplayer.isHost && multiplayer.connected;

    broadcastMultiplayerMessage({
        type: "state",
        name: state.player.name,
        gameMode: multiplayer.gameMode,
        arena: multiplayer.arena,
        x: state.player.x,
        y: state.player.y,
        facingX: state.player.attackTimer > 0 ? state.player.attackVectorX : state.player.facingX,
        facingY: state.player.attackTimer > 0 ? state.player.attackVectorY : state.player.facingY,
        attackTimer: state.player.attackTimer,
        hp: state.player.hp,
        maxHp: state.player.maxHp,
        hitCooldown: state.player.hitCooldown,
        blocking: state.player.blocking,
        flipTimer: state.player.flipTimer,
        worldState: includeWorldState ? serializeWorldState() : null,
        look: state.player.look
    });
}

function joinMultiplayerRoom() {
    const roomName = (ui.multiplayerRoomInput.value.trim() || "nexus-room").toLowerCase();
    const gameMode = ui.multiplayerModeSelect.value || "coop";
    const arenaKey = ui.multiplayerArenaSelect.value || "quake";
    const arena = MULTIPLAYER_ARENAS[arenaKey] || MULTIPLAYER_ARENAS.quake;
    if (isPremiumMultiplayerMode(gameMode) && !hasPremiumAccess()) {
        if (ui.multiplayerStatusText) {
            ui.multiplayerStatusText.textContent = `Status: ${getMultiplayerModeLabel(gameMode)} requires the Premium Ticket`;
        }
        return;
    }
    disconnectMultiplayer();

    multiplayer.room = roomName;
    multiplayer.gameMode = gameMode;
    multiplayer.arena = arenaKey;
    multiplayer.channel = new BroadcastChannel(`nexus-multiplayer-${roomName}`);
    multiplayer.channel.onmessage = handleMultiplayerMessage;
    multiplayer.connected = false;
    multiplayer.isHost = true;
    multiplayer.remoteClientId = "";
    syncMultiplayerStatusText();

    savePlayerIdentity();
    state.started = true;
    state.over = false;
    state.victory = false;
    state.mode = "multiplayer";
    setupQuest(arena.questIndex, arena.questWorld);
    if (gameMode === "versus") {
        state.phase = "multiplayer";
        state.enemies = [];
        state.townScouts = [];
        state.witnesses = [];
        state.evidenceSpots = [];
        state.projectiles = [];
        state.boss.active = false;
        state.lairEntrance = null;
    } else if (gameMode === "bossraid") {
        state.phase = "boss-ship";
        state.enemies = [];
        state.townScouts = [];
        state.witnesses = [];
        state.evidenceSpots = [];
        state.projectiles = [];
        state.lairEntrance = null;
        state.boss = createBoss(Math.max(8, arena.questIndex + 5));
        state.boss.active = true;
        state.boss.projectileCooldown = 720;
    } else if (gameMode === "dragonhunt") {
        state.phase = "boss-dragon";
        state.enemies = [];
        state.townScouts = [];
        state.witnesses = [];
        state.evidenceSpots = [];
        state.projectiles = [];
        state.lairEntrance = null;
        state.boss = createBoss(Math.max(10, arena.questIndex + 6));
        state.boss.dragonBoss = true;
        state.boss.name = state.boss.name.replace(/ Dragon$/, "") + " Dragon";
        state.boss.active = true;
        state.boss.projectileCooldown = 760;
    }
    state.rival = createRival();
    state.rival.active = false;
    state.player.hp = state.player.maxHp;
    state.player.x = arena.spawn.x;
    state.player.y = arena.spawn.y;
    state.rival.x = arena.rivalSpawn.x;
    state.rival.y = arena.rivalSpawn.y;
    startBackgroundMusic();
    writeLog(
        "Multiplayer",
        gameMode === "coop"
            ? `Joined co-op room ${roomName} in ${arena.label}. Open the same room in another tab to fight bad guys together.`
            : (gameMode === "bossraid"
                ? `Joined premium Boss Raid room ${roomName} in ${arena.label}. Team up and bring down the boss.`
                : (gameMode === "dragonhunt"
                    ? `Joined premium Dragon Hunt room ${roomName} in ${arena.label}. Team up and slay the dragon.`
                    : `Joined versus room ${roomName} in ${arena.label}. Open the same room in another tab to duel.`))
    );
    closeHome();
    document.body.classList.add("play-mode");
    sendMultiplayerState();
}

function handleContinue() {
    if (state.started && !state.over) {
        document.body.classList.add("play-mode");
        closeHome();
        return;
    }

    if (restoreSavedRun()) {
        closeHome();
        return;
    }

    openHome("main");
}

function openDialogue(witness) {
    state.activeDialogue = witness;
    if (!ui.dialogueChoices || !ui.dialogueSpeaker || !ui.dialogueTitle || !ui.dialogueText || !ui.dialoguePanel) {
        return;
    }
    ui.dialogueChoices.classList.remove("hidden");
    ui.dialogueSpeaker.textContent = witness.name;
    ui.dialogueTitle.textContent = witness.isCastleGuard ? "Speak to the guard" : "Question the witness";
    ui.dialogueText.textContent = witness.isCastleGuard
        ? `${witness.name} watches the fortress gate. Ask what it will take to get inside.`
        : `${witness.name} looks shaken. Choose what you want to ask about ${getCurrentQuest().title}.`;
    ui.dialoguePanel.classList.remove("hidden");
}

function openEvidenceDialogue(spot) {
    state.activeDialogue = spot;
    if (!ui.dialogueChoices || !ui.dialogueSpeaker || !ui.dialogueTitle || !ui.dialogueText || !ui.dialoguePanel) {
        return;
    }
    ui.dialogueChoices.classList.add("hidden");
    ui.dialogueSpeaker.textContent = "Evidence";
    ui.dialogueTitle.textContent = spot.title;
    ui.dialogueText.textContent = spot.clue;
    ui.dialoguePanel.classList.remove("hidden");
}

function closeDialogue() {
    state.activeDialogue = null;
    if (ui.dialogueChoices) {
        ui.dialogueChoices.classList.remove("hidden");
    }
    if (ui.dialoguePanel) {
        ui.dialoguePanel.classList.add("hidden");
    }
}

function getNearbyEvidence() {
    return state.evidenceSpots.find((entry) => !entry.found && distanceBetween(state.player, entry) < s(72)) || null;
}

function maybeUnlockLair() {
    if (state.lairEntrance.active) {
        return;
    }

    const readyForGate = state.scoutsDefeated >= state.scoutsGoal;

    if (readyForGate) {
        state.lairEntrance.active = true;
        state.phase = "hunt";
        state.castleAccessGranted = true;
        writeLog(
            "Trail Found",
            state.mode === "zombie"
                ? "The quarantine gate is open. Push into the keep and kill the plague boss."
                : (state.lairEntrance.underground
                    ? "The hidden lift is open. Enter the underground shaft."
                    : "The castle gate is open. Walk through the fortress door to face the boss.")
        );
    }
}

function getAssistantSuggestion() {
    const player = state.player;

    if (state.mode === "pve") {
        const nearbyEnemy = state.enemies.find((entry) => distanceBetween(player, entry) < 125) || null;
        const activeBosses = getActiveBosses();
        const primaryBoss = getPrimaryActiveBoss();
        const bossDistance = primaryBoss ? distanceBetween(player, primaryBoss) : Infinity;
        const styleRank = getStyleRank(state.comboCount);

        if (player.hp / player.maxHp < 0.3) {
            return {
                mode: "Caution",
                muted: false,
                text: "Your health is low. Keep moving, block more, and only dive in when the lane is clear."
            };
        }

        if (primaryBoss) {
            return {
                mode: bossDistance < 120 ? "Strike" : "Dodge",
                muted: false,
                text: state.phase === "final-boss-rush"
                    ? (bossDistance < 120
                        ? "Multiple bosses are active. Burn down the closest one, then move before the others stack on you."
                        : `Final boss rush in progress. ${activeBosses.length} bosses are still alive, so keep moving and pick your opening.`)
                    : (bossDistance < 120
                        ? "The boss is in range. Hit hard with Space, then back out before the counterattack."
                        : "The boss is active. Stay mobile, dodge the heavy shots, and wait for your opening.")
            };
        }

        if (state.comboCount >= 5) {
            return {
                mode: styleRank,
                muted: false,
                text: `You are on a ${state.comboCount}x combo. Keep the pressure on and do not get hit.`
            };
        }

        if (nearbyEnemy) {
            return {
                mode: "Fight",
                muted: false,
                text: "Evil enemies are in range. Keep moving and cut them down before they crowd you."
            };
        }

        return {
            mode: "Survive",
            muted: false,
            text: `Hold the arena. Defeat ${Math.max(0, getPveBossThreshold() - state.questKills)} more enemies to force out the next boss.`
        };
    }

    if (!state.started) {
        return {
            mode: "Idle",
            muted: true,
            text: "Pick a quest, then I will guide you through talking, fighting, and reaching the boss."
        };
    }

    if (state.over) {
        return {
            mode: state.victory ? "Victory" : "Down",
            muted: false,
            text: state.victory
                ? "You cleared the run. Restart when you want another route through the sector."
                : "Restart the run, then use E for witnesses and keep more distance before rushing scouts."
        };
    }

    const nearbyWitness = getNearbyWitness();
    const nearbyEvidence = getNearbyEvidence();
    const nearbyScout = state.townScouts.find((entry) => distanceBetween(player, entry) < 120) || null;
    const nearbyEnemy = state.enemies.find((entry) => distanceBetween(player, entry) < 125) || null;
    const bossDistance = state.boss.active ? distanceBetween(player, state.boss) : Infinity;

    if (state.mode === "training") {
        if (nearbyEnemy) {
            return {
                mode: "Training",
                muted: false,
                text: "A rider is in range. Keep moving, strike with Space, and avoid getting trapped by the charge."
            };
        }

        return {
            mode: "Training",
            muted: false,
            text: `Beat all ${state.enemies.length} rider${state.enemies.length === 1 ? "" : "s"} to earn +1 damage and +1 speed for the next wave.`
        };
    }

    if (player.hp / player.maxHp < 0.3) {
        return {
            mode: "Caution",
            muted: false,
            text: "Your health is low. Back up, avoid trading hits, and only re-engage when the path is safer."
        };
    }

    if (state.phase === "town") {
        if (state.mode === "zombie") {
            if (nearbyWitness) {
                return {
                    mode: "Rescue",
                    muted: false,
                    text: `Press E near ${nearbyWitness.name} and keep the survivors alive long enough to finish the antidote.`
                };
            }

            if (nearbyEvidence) {
                return {
                    mode: "Optional Clue",
                    muted: false,
                    text: `Press E to collect ${nearbyEvidence.title} if you want extra story. The gate opens when the zombie packs are down.`
                };
            }

            if (nearbyScout) {
                return {
                    mode: "Zombie Pack",
                    muted: false,
                    text: "A zombie pack is close. Keep moving and cut it down before it corners you."
                };
            }

            if (state.witnessesFound < state.witnessGoal) {
                return {
                    mode: "Optional Talk",
                    muted: false,
                    text: "You can talk to survivors if you want, but clearing the zombie packs is what opens the gate."
                };
            }

            if (state.evidenceFound < state.evidenceGoal) {
                return {
                    mode: "Optional Clue",
                    muted: false,
                    text: "Antidote parts are optional now. Focus on clearing the zombie packs to get inside."
                };
            }

            if (state.scoutsDefeated < state.scoutsGoal) {
                return {
                    mode: "Clear Horde",
                    muted: false,
                    text: "The cure trail is ready. Now wipe out the zombie packs so the quarantine gate can open."
                };
            }
        }

        if (nearbyWitness) {
            return {
                mode: "Talk",
                muted: false,
                text: `Press E near ${nearbyWitness.name} if you want extra story, or keep fighting your way to the gate.`
            };
        }

        if (nearbyEvidence) {
            return {
                mode: "Optional Clue",
                muted: false,
                text: `Press E to inspect ${nearbyEvidence.title} for extra story. It is not required to open the route.`
            };
        }

        if (nearbyScout) {
            return {
                mode: "Fight",
                muted: false,
                text: "A hostile is close. Stay moving, strike with Space, and do not let the scouts surround you."
            };
        }

        if (state.witnessesFound < state.witnessGoal) {
            return {
                mode: "Optional Talk",
                muted: false,
                text: "Talking to witnesses is optional now. Your real goal is beating the remaining minions."
            };
        }

        if (state.evidenceFound < state.evidenceGoal) {
            return {
                mode: "Optional Clue",
                muted: false,
                text: "Evidence is optional now. Fight through the remaining enemies to open the gate."
            };
        }

        if (state.scoutsDefeated < state.scoutsGoal) {
            return {
                mode: "Clear Hostiles",
                muted: false,
                text: "You have enough story info for now. Hunt down the remaining scouts so the route can open."
            };
        }

        return {
            mode: "Advance",
            muted: false,
            text: "The route is almost ready. Move across the map toward the black site entrance."
        };
    }

    if (state.phase === "hunt") {
        if (state.lairEntrance && distanceBetween(player, state.lairEntrance) < s(110)) {
            return {
                mode: "Enter",
                muted: false,
                text: "You found the entrance. Move in close and step onto it to enter the black site."
            };
        }

        if (nearbyScout) {
            return {
                mode: "Ambush",
                muted: false,
                text: "Mounted or not, these guards can pin you. Circle them and keep your attacks short."
            };
        }

        return {
            mode: "Push Forward",
            muted: false,
            text: "Keep moving across the route. Break through the bridge, pass, and outpost fights until you reach the entrance."
        };
    }

    if (state.phase === "underground" || state.phase === "lair") {
        if (nearbyEnemy) {
            return {
                mode: "Clear Room",
                muted: false,
                text: "Enemies are close. Finish the guards first so the boss phase starts on your terms."
            };
        }

        return {
            mode: "Sweep",
            muted: false,
            text: "Keep advancing through the base and clear the remaining guards."
        };
    }

    if (state.phase === "boss-ship") {
        if (bossDistance < 120) {
            return {
                mode: "Strike",
                muted: false,
                text: "The boss is in range. Move in, hit with Space, then get clear before the next shot."
            };
        }

        return {
            mode: "Dodge",
            muted: false,
            text: "Keep moving sideways to avoid ship fire, then close the gap when the boss drifts lower."
        };
    }

    return {
        mode: "Guide",
        muted: false,
        text: "Stay mobile, use E for interactions, and use Space only when you are lined up for a clean hit."
    };
}

function spawnAreaScouts(points) {
    points.forEach(([x, y, pulse, variant]) => {
        const type = variant || "road";
        const wolf = type === "wolf";
        state.townScouts.push({
            x,
            y,
            width: wolf ? s(28) : s(24),
            height: wolf ? s(20) : s(24),
            hp: wolf ? 42 : 54,
            maxHp: wolf ? 42 : 54,
            speed: wolf ? 2.45 : 1.95,
            damage: wolf ? 10 : 8,
            hitCooldown: 0,
            pulse,
            variant: type,
            mounted: !wolf && (type === "bridge" || (type === "road" && Math.random() < 0.5))
        });
    });
}

function spawnEffect(effect) {
    state.effects.push({
        life: 260,
        maxLife: 260,
        ...effect
    });
}

function triggerShake(amount) {
    state.cameraShake = Math.max(state.cameraShake, amount);
}

function updateAreaEvents() {
    if (state.phase !== "town" && state.phase !== "hunt") {
        return;
    }

    const player = state.player;

    if (!state.areaEvents.bridge && player.x > s(1020) && player.x < s(1260) && player.y > s(760) && player.y < s(1020)) {
        state.areaEvents.bridge = true;
        spawnAreaScouts([
            [s(1260), s(870), 0.4, "bridge"],
            [s(1320), s(930), 1.1, "bridge"]
        ]);
        writeLog("Bridge", "Bridge guards rush out to stop you.");
    }

    if (!state.areaEvents.forest && player.x > s(1900) && player.x < s(2140) && player.y > s(820) && player.y < s(1060)) {
        state.areaEvents.forest = true;
        spawnAreaScouts([
            [s(2120), s(868), 0.2, "wolf"],
            [s(2162), s(926), 0.9, "forest"],
            [s(2210), s(986), 1.4, "wolf"]
        ]);
        writeLog("Forest Pass", "Shapes move in the trees. Hungry wolves burst out with the scouts and try to tear into you.");
    }

    if (!state.areaEvents.gate && player.x > s(2890) && player.x < s(3120) && player.y > s(700) && player.y < s(940)) {
        state.areaEvents.gate = true;
        state.phase = "hunt";
        spawnAreaScouts([
            [s(3120), s(780), 0.6, "gate"],
            [s(3180), s(860), 1.6, "gate"],
            [s(3240), s(820), 2.2, "gate"]
        ]);
        writeLog("Castle Gate", "Castle guards block the final road before the portal.");
    }
}

function writeLog(source, message) {
    const entry = {
        source,
        message,
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
    };

    state.log.push(entry);
    state.log = state.log.slice(-18);

    if (ui.combatLog) {
        ui.combatLog.innerHTML = state.log
            .map((item) => `<div class="log-entry"><strong>${item.source}</strong><br>${item.message}</div>`)
            .join("");
    }
}

function getUpgradeLevel(id) {
    return (state.player.upgrades && state.player.upgrades[id]) || 0;
}

function getUpgradeCost(id) {
    const upgrade = UPGRADES.find((entry) => entry.id === id);
    const level = getUpgradeLevel(id);
    return upgrade ? upgrade.baseCost + level * upgrade.baseCost : 999999;
}

function renderShop() {
    const itemMarkup = SHOP_ITEMS.map((item) => `
        <div class="shop-item">
            <strong>${item.name}</strong>
            <span>${item.label}</span>
            <span>${item.premiumUsd ? `Premium: $${item.premiumUsd.toFixed(2)}` : `Cost: ${item.cost} gold`}</span>
            <button type="button" data-shop-id="${item.id}">Buy</button>
        </div>
    `).join("");
    const upgradeMarkup = UPGRADES.map((upgrade) => `
        <div class="shop-item">
            <strong>${upgrade.name}</strong>
            <span>${upgrade.label}</span>
            <span>Level ${getUpgradeLevel(upgrade.id)} | Cost: ${getUpgradeCost(upgrade.id)} gold</span>
            <button type="button" data-upgrade-id="${upgrade.id}">Upgrade</button>
        </div>
    `).join("");
    const markup = `
        <div class="card-heading"><span>Items</span></div>
        ${itemMarkup}
        <div class="card-heading"><span>Upgrades</span></div>
        ${upgradeMarkup}
    `;

    if (ui.shopItems) {
        ui.shopItems.innerHTML = markup;
    }
    if (ui.homeShopItems) {
        ui.homeShopItems.innerHTML = markup;
    }

    document.querySelectorAll("[data-shop-id]").forEach((button) => {
        button.addEventListener("click", () => purchaseItem(button.dataset.shopId));
    });
    document.querySelectorAll("[data-upgrade-id]").forEach((button) => {
        button.addEventListener("click", () => purchaseUpgrade(button.dataset.upgradeId));
    });

    updateShopAvailability();
}

function renderQuestList() {
    if (!ui.homeQuestList) {
        return;
    }
    const getQuestRank = (index, world = "world1") => {
        if (world === "alien") {
            return index >= 3 ? "Mythic" : (index >= 1 ? "Epic" : "Rare");
        }
        if (index >= 17) {
            return "Legendary";
        }
        if (index >= 11) {
            return "Epic";
        }
        if (index >= 5) {
            return "Rare";
        }
        return "Common";
    };
    const getRankIcon = (rank) => {
        if (rank === "Legendary") {
            return "👑";
        }
        if (rank === "Mythic") {
            return "☄️";
        }
        if (rank === "Epic") {
            return "🔮";
        }
        if (rank === "Rare") {
            return "⚔️";
        }
        return "🛡️";
    };
    const getQuestTypeIcon = (world = "world1") => world === "alien" ? "🪐" : "📜";
    const premiumMarkup = PREMIUM_FUN_QUESTS.map((quest, index) => `
        <button class="quest-item" type="button" data-premium-quest-start="${index}" ${hasPremiumAccess() ? "" : "aria-disabled=\"true\""}>
            <strong>Premium ${index + 1}. ${quest.title}</strong>
            <span>🎭 Quest Type: Premium Adventure</span>
            <span>👹 Final Boss: ${quest.boss}</span>
            <span>🗺️ Region: ${quest.scene}</span>
            <span>${hasPremiumAccess() ? quest.brief : "Locked by Premium Ticket. Open Premium Ticket to unlock this funny quest."}</span>
        </button>
    `).join("");
    const worldOneMarkup = QUESTS.map((quest, index) => `
        <button class="quest-item" type="button" data-quest-index="${index}" data-quest-world="world1">
            <strong>${index + 1}. ${quest.title}</strong>
            <span>${getRankIcon(getQuestRank(index, "world1"))} Quest Rank: ${getQuestRank(index, "world1")}</span>
            <span>${getQuestTypeIcon("world1")} Quest Type: Main Quest</span>
            <span>👹 Final Boss: ${quest.boss}</span>
            <span>🗺️ Region: ${quest.scene}</span>
            <span>💰 Reward: ${quest.gold} gold</span>
            <span>${quest.brief}</span>
        </button>
    `).join("");
    const alienMarkup = state.worldOneCleared
        ? `
            <div class="card-heading"><span>Alien Patch</span></div>
            ${ALIEN_PATCH_QUESTS.map((quest, index) => `
                <button class="quest-item" type="button" data-quest-index="${index}" data-quest-world="alien">
                    <strong>Alien ${index + 1}. ${quest.title}</strong>
                    <span>${getRankIcon(getQuestRank(index, "alien"))} Quest Rank: ${getQuestRank(index, "alien")}</span>
                    <span>${getQuestTypeIcon("alien")} Quest Type: Alien Quest</span>
                    <span>👹 Final Boss: ${quest.boss}</span>
                    <span>🗺️ Region: ${quest.scene}</span>
                    <span>💰 Reward: ${quest.gold} gold</span>
                    <span>${quest.brief}</span>
                </button>
            `).join("")}
        `
        : `
            <div class="quest-item" aria-disabled="true">
                <strong>Alien Patch Locked</strong>
                <span>Beat World 1 to unlock the alien quests.</span>
            </div>
        `;

    ui.homeQuestList.innerHTML = `
        <button class="quest-item featured" type="button" data-quest-index="0" data-quest-world="world1">
            <strong>Featured: Story Campaign</strong>
            <span>Main Questline</span>
            <span>Start at Quest 1 and fight through the full world map.</span>
            <span>Break into fortresses, beat bosses, and grow stronger after every win.</span>
        </button>
        <button class="quest-item mode-card" type="button" data-survival-start="true">
            <strong>Survival Mode</strong>
            <span>Challenge Mode</span>
            <span>Fight nonstop evil enemies and survive as long as you can.</span>
            <span>Bosses keep showing up as the waves rise.</span>
        </button>
        <div class="card-heading"><span>Quest Campaign</span></div>
        ${worldOneMarkup}
        ${alienMarkup}
        <div class="card-heading"><span>Premium Funny Quests</span></div>
        ${premiumMarkup}
    `;

    document.querySelectorAll("[data-survival-start]").forEach((button) => {
        button.addEventListener("click", () => {
            requestFullscreenPlay();
            startGame("pve");
        });
    });

    document.querySelectorAll("[data-quest-index]").forEach((button) => {
        button.addEventListener("click", () => {
            const questIndex = Number(button.dataset.questIndex);
            const questWorld = button.dataset.questWorld || "world1";
            requestFullscreenPlay();
            startGame("quest", questIndex, questWorld);
        });
    });

    document.querySelectorAll("[data-premium-quest-start]").forEach((button) => {
        button.addEventListener("click", () => {
            if (!hasPremiumAccess()) {
                showHomePanel("premium");
                if (ui.premiumTicketStatus) {
                    ui.premiumTicketStatus.textContent = "Status: Locked. Buy the Premium Ticket for $0.99 to unlock the funny premium quests.";
                }
                return;
            }
            const premiumQuestIndex = Number(button.dataset.premiumQuestStart || 0);
            requestFullscreenPlay();
            startGame("quest", premiumQuestIndex, "premiumfun");
        });
    });
}

function updateShopAvailability() {
    const ownedDragons = new Set(state.player.dragons.map((dragon) => dragon.name));
    const ownedPremium = new Set(state.player.premiumItems || []);

    document.querySelectorAll("[data-shop-id]").forEach((button) => {
        const item = SHOP_ITEMS.find((entry) => entry.id === button.dataset.shopId);
        if (!item) {
            return;
        }
        const alreadyOwnedDragon = item.type === "dragon" && ownedDragons.has(item.name);
        const alreadyOwnedPremium = Boolean(item.premiumUsd && ownedPremium.has(item.id));
        const lockedByGold = !item.premiumUsd && state.player.gold < item.cost;
        button.disabled = lockedByGold || alreadyOwnedDragon || alreadyOwnedPremium;
        button.textContent = alreadyOwnedDragon || alreadyOwnedPremium
            ? "Owned"
            : (item.premiumUsd ? `Buy for $${item.premiumUsd.toFixed(2)}` : `Buy ${item.name}`);
    });
    document.querySelectorAll("[data-upgrade-id]").forEach((button) => {
        const upgradeId = button.dataset.upgradeId;
        const cost = getUpgradeCost(upgradeId);
        button.disabled = state.player.gold < cost;
        button.textContent = `Upgrade - ${cost} gold`;
    });
    updatePremiumModeButtons();
}

function purchaseUpgrade(upgradeId) {
    const upgrade = UPGRADES.find((entry) => entry.id === upgradeId);
    if (!upgrade) {
        return;
    }

    const cost = getUpgradeCost(upgradeId);
    if (state.player.gold < cost) {
        return;
    }

    state.player.gold -= cost;
    state.player.upgrades[upgradeId] = getUpgradeLevel(upgradeId) + 1;

    if (upgradeId === "damage") {
        state.player.damage += upgrade.step;
    } else if (upgradeId === "armor") {
        state.player.armor += upgrade.step;
    } else if (upgradeId === "speed") {
        state.player.speed += upgrade.step;
    } else if (upgradeId === "health") {
        state.player.maxHp += upgrade.step;
        state.player.hp = Math.min(state.player.maxHp, state.player.hp + upgrade.step);
    } else if (upgradeId === "dragon") {
        if (!state.player.dragons.length) {
            state.player.dragons.push({
                name: "Upgrade Dragon",
                damage: 4,
                orbit: Math.random() * Math.PI * 2
            });
        } else {
            state.player.dragons.forEach((dragon) => {
                dragon.damage += upgrade.step;
            });
        }
    }

    writeLog("Upgrade", `${upgrade.name} improved to level ${state.player.upgrades[upgradeId]}.`);
    savePlayerProfile();
    renderShop();
    syncUi();
}

function purchaseItem(itemId) {
    const item = SHOP_ITEMS.find((entry) => entry.id === itemId);
    if (!item) {
        return;
    }

    if (item.type === "dragon" && state.player.dragons.some((dragon) => dragon.name === item.name)) {
        return;
    }

    if (item.premiumUsd && state.player.premiumItems.includes(item.id)) {
        return;
    }

    if (!item.premiumUsd && state.player.gold < item.cost) {
        return;
    }

    if (item.premiumUsd) {
        const approved = window.confirm(`Unlock ${item.name} for $${item.premiumUsd.toFixed(2)}?\n\nThis is a local premium unlock for the browser build.`);
        if (!approved) {
            return;
        }
        state.player.premiumItems.push(item.id);
        if (item.type === "premium-ticket") {
            state.player.weaponName = "Premium Blade";
            state.player.damage += 12;
            state.player.armor += 5;
            state.player.speed += 2;
            state.player.maxHp += 25;
            state.player.hp = Math.min(state.player.maxHp, state.player.hp + 25);
            if (!state.player.dragons.some((dragon) => dragon.name === "Ticket Dragon")) {
                state.player.dragons.push({
                    name: "Ticket Dragon",
                    damage: 8,
                    orbit: Math.random() * Math.PI * 2
                });
            }
            writeLog("Premium", `${item.name} unlocked for $${item.premiumUsd.toFixed(2)}.`);
            writeLog("Premium", "Premium modes unlocked: Nightmare Survival, Alien Gauntlet, Legend Boss Rush, Dragon Storm, Zombie Last Stand, and Chaos Arena.");
            writeLog("Premium", "Premium Ticket gear granted: Premium Blade, Ticket Dragon, +12 damage, +5 armor, +2 speed, and +25 health.");
            grantPremiumDailyBonus();
        } else {
            writeLog("Premium", `${item.name} unlocked as a premium item for $${item.premiumUsd.toFixed(2)}.`);
        }
    } else {
        state.player.gold -= item.cost;
    }

    if (item.type === "weapon") {
        state.player.damage += item.damage;
        state.player.weaponName = item.name;
        writeLog("Store", `${item.name} purchased. Damage increased by ${item.damage}.`);
    }

    if (item.type === "dragon") {
        state.player.dragons.push({
            name: item.name,
            damage: item.damage,
            orbit: Math.random() * Math.PI * 2
        });
        writeLog("Store", `${item.name} joins your side.`);
    }

    if (item.type === "armor") {
        state.player.armor += item.armor || 0;
        state.player.speed += item.speed || 0;
        state.player.maxHp += item.hp || 0;
        state.player.hp = Math.min(state.player.maxHp, state.player.hp + (item.hp || 0));
        writeLog("Store", `${item.name} equipped. Armor +${item.armor || 0}, Speed +${item.speed || 0}, HP +${item.hp || 0}.`);
    }

    savePlayerProfile();
    renderPremiumTicketPanel();
    syncUi();
}

function getCurrentQuest() {
    const questList = getQuestList(state.questWorld);
    return questList[Math.min(questList.length - 1, state.questIndex)];
}

function getPveBossThreshold() {
    const base = state && state.premiumMode === "nightmare" ? 4 : 6;
    return base + Math.max(0, state.wave - 1) * 3;
}

function getPveEnemyTargetCount() {
    const bonus = state && state.premiumMode === "nightmare" ? 3 : 0;
    return Math.min(16, PVE_MIN_ACTIVE_ENEMIES + bonus + Math.floor(Math.max(0, state.wave - 1) / 2));
}

function setupPveSurvival() {
    if (state.premiumMode !== "nightmare") {
        state.premiumMode = "";
    }
    state.questWorld = "world1";
    state.questIndex = 0;
    state.wave = 1;
    state.questKills = 0;
    state.phase = "survival";
    state.witnesses = [];
    state.castleGuards = [];
    state.witnessesFound = 0;
    state.witnessGoal = 0;
    state.evidenceSpots = [];
    state.evidenceFound = 0;
    state.evidenceGoal = 0;
    state.townScouts = [];
    state.scoutsDefeated = 0;
    state.scoutsGoal = 0;
    state.areaEvents = {
        bridge: false,
        forest: false,
        gate: false
    };
    state.undergroundLair = false;
    state.lairEntrance = null;
    state.castleAccessGranted = false;
    state.worldAreas = createWorldAreas(0, "world1");
    state.townProps = createTownProps(0);
    state.boss = createBoss(state.wave);
    state.boss.active = false;
    state.projectiles = [];
    state.extraBosses = [];
    state.enemies = [];
    state.player.x = s(520);
    state.player.y = s(1120);
    ensureInfinitePveEnemies();
    updateCamera();
    writeLog("PvE", "Endless survival begins.");
    writeLog("PvE", "Fight nonstop evil enemies and survive long enough to bring down each boss.");
}

function advancePveSurvival() {
    state.wave += 1;
    state.questKills = 0;
    state.phase = "survival";
    const rewardGold = 70 + state.wave * 18;
    const rewardDamage = 4 + Math.floor(state.wave / 2);
    const rewardHp = 8 + state.wave;
    const rewardSpeed = 1 + Math.floor(state.wave / 4);
    state.score += 180 + state.wave * 15;
    state.player.gold += rewardGold;
    state.player.damage += rewardDamage;
    state.player.maxHp += rewardHp;
    state.player.hp = Math.min(state.player.maxHp, state.player.hp + 20 + state.wave * 2);
    state.player.speed += rewardSpeed;
    state.boss = createBoss(state.wave);
    state.boss.active = false;
    state.projectiles = [];
    state.extraBosses = [];
    if (state.wave >= FINAL_PVE_WAVE) {
        state.wave = FINAL_PVE_WAVE;
        state.phase = "final-boss-rush";
        const finalBosses = createFinalBossRush();
        state.boss = finalBosses[0];
        state.extraBosses = finalBosses.slice(1);
        state.enemies = [];
        writeLog("Final Wave", `Wave ${FINAL_PVE_WAVE} has begun. Many bosses have entered the arena.`);
        writeLog("Reward", `Boss defeated. Gold +${rewardGold}, Damage +${rewardDamage}, Health +${rewardHp}, Speed +${rewardSpeed}.`);
        writeLog("Warning", "This is the final level. Defeat every boss to win the run.");
        savePlayerProfile();
        return;
    }
    ensureInfinitePveEnemies();
    writeLog("PvE", `Wave ${state.wave} begins. More evil fighters are flooding the arena.`);
    writeLog("Reward", `Boss defeated. Gold +${rewardGold}, Damage +${rewardDamage}, Health +${rewardHp}, Speed +${rewardSpeed}.`);
    savePlayerProfile();
}

function setupQuest(index, world = "world1") {
    if (state.premiumMode !== "alien-gauntlet") {
        state.premiumMode = "";
    }
    const questList = getQuestList(world);
    const clampedIndex = clamp(index, 0, questList.length - 1);
    const quest = questList[Math.min(questList.length - 1, clampedIndex)];
    const theme = getQuestPlaceTheme(clampedIndex, world);
    state.questWorld = world;
    state.questIndex = clampedIndex;
    state.wave = index + 1;
    state.questKills = 0;
    state.witnessesFound = 0;
    state.witnessGoal = 3;
    state.evidenceSpots = createEvidenceSpots();
    state.evidenceFound = 0;
    state.evidenceGoal = 2;
    state.townScouts = createTownScouts();
    state.scoutsDefeated = 0;
    state.scoutsGoal = 3;
    state.phase = "town";
    state.undergroundLair = index % 2 === 0;
    state.worldAreas = createWorldAreas(clampedIndex, world);
    state.townProps = createTownProps(clampedIndex);
    state.witnesses = createWitnesses();
    state.castleGuards = createCastleGuards();
    state.lairEntrance = createLairEntrance(state.undergroundLair);
    state.lairEntrance.active = false;
    state.castleAccessGranted = false;
    state.boss = createBoss(state.wave);
    state.boss.active = false;
    state.bossSpawnTimer = 999999;
    state.boss.x = WORLD.width - s(320);
    state.boss.y = s(220);
    state.projectiles = [];
    state.enemies = [];
    state.player.x = s(520);
    state.player.y = s(1120);
    ensureInfinitePveEnemies();
    updateCamera();
    writeLog("Quest", `${state.wave}. ${quest.title} begins.`);
    writeLog("Place", `You arrive in ${theme.areas[0]} and must push toward ${theme.areas[3]}.`);
    writeLog("Scene", quest.scene);
    writeLog("Objective", quest.brief);
    if (state.boss.dragonBoss) {
        writeLog("Fortress", "This fortress holds a dragon. Be ready when the gate opens.");
    }
    writeLog("Investigation", "Beat the ambushers and push across the map to open the path to the boss.");
}

function completeQuest() {
    const quest = getCurrentQuest();
    const questList = getQuestList(state.questWorld);
    state.score += 140;
    state.player.gold += quest.gold;
    state.player.damage += 5;
    state.player.maxHp += 5;
    state.player.hp = Math.min(state.player.maxHp, state.player.hp + 5);
    state.player.speed += 5;
    writeLog("Reward", "Quest cleared. Damage +5, Health +5, and Speed +5.");

    if (state.questIndex >= questList.length - 1) {
        if (state.questWorld === "world1") {
            state.worldOneCleared = true;
            saveWorldOneCleared(true);
            renderQuestList();
        }
        state.victory = true;
        state.over = true;
        state.started = false;
        writeLog("Quest", `${state.questWorld === "alien" ? "Alien patch" : "World 1"} cleared. ${state.player.name} defeated ${quest.boss}.`);
        savePlayerProfile();
        clearSavedRun();
        return;
    }

    savePlayerProfile();
    setupQuest(state.questIndex + 1, state.questWorld);
}

function completeZombieMode() {
    state.score += 220;
    state.player.gold += 340;
    state.player.damage += 6;
    state.player.maxHp += 10;
    state.player.hp = Math.min(state.player.maxHp, state.player.hp + 20);
    state.player.speed += 2;
    state.victory = true;
    state.over = true;
    state.started = false;
    writeLog("Underworld", "The Dragon of Kartasou has fallen and the underworld gates go silent.");
    writeLog("Antidote", "With the plague lord and the ancient dragon defeated, the antidote can finally save the village.");
    writeLog("Reward", "Zombie Apocalypse cleared. Damage +6, Health +10, and Speed +2.");
    savePlayerProfile();
    clearSavedRun();
    openHome(state.player.zombieRewardClaimed ? "main" : "zombieReward");
}

function advanceBossRush() {
    state.score += 180;
    state.player.gold += 45;
    state.player.damage += 2;
    state.player.maxHp += 3;
    state.player.hp = Math.min(state.player.maxHp, state.player.hp + 12);
    state.player.speed += 0.4;
    state.bossRushIndex += 1;
    writeLog("Reward", "Boss down. Damage +2, Health +3, Speed +0.4, and +45 gold.");
    savePlayerProfile();
    spawnBossRushBoss();
}

function spawnTrainingWave() {
    state.phase = "training";
    state.boss.active = false;
    state.projectiles = [];
    state.enemies = [];
    state.townScouts = [];
    state.witnesses = [];
    state.evidenceSpots = [];
    state.lairEntrance = null;
    state.questKills = 0;

    for (let i = 0; i < state.wave; i += 1) {
        const rider = createEnemy(Math.max(1, state.wave));
        rider.x = s(780) + (i % 3) * s(150) + randomRange(s(-20), s(20));
        rider.y = s(280) + Math.floor(i / 3) * s(140) + randomRange(s(-25), s(25));
        rider.mounted = true;
        rider.speed += 0.15 * Math.max(0, state.wave - 1);
        rider.damage += Math.floor(state.wave / 2);
        state.enemies.push(rider);
    }

    state.player.x = s(520);
    state.player.y = s(1120);
    updateCamera();
    writeLog("Training", `Wave ${state.wave} begins with ${state.wave} rider${state.wave === 1 ? "" : "s"}.`);
}

function advanceTrainingWave() {
    state.trainingWaveCleared += 1;
    state.player.damage += 1;
    state.player.speed += 1;
    state.wave += 1;
    writeLog("Training", `Wave cleared. Damage +1 and Speed +1.`);
    savePlayerProfile();
    spawnTrainingWave();
}

function startGame(mode = "pve", questIndex = 0, questWorld = "world1") {
    if (state.started || state.over) {
        resetGame();
    }

    if (questWorld === "alien" && !state.worldOneCleared) {
        return;
    }

    savePlayerIdentity();
    state.started = true;
    state.over = false;
    state.victory = false;
    state.player.hp = state.player.maxHp;
    state.player.poisonTimer = 0;
    state.player.poisonTickTimer = 0;
    state.mode = mode === "quest" ? "quest" : (mode === "zombie" ? "zombie" : "pve");
    state.premiumMode = "";
    state.rival = createRival();
    state.rival.active = false;
    if (mode === "quest") {
        setupQuest(questIndex, questWorld);
        if (shouldPlayLandingIntro(questIndex, questWorld)) {
            state.phase = "alien-launch";
            state.launchIntroTimer = 3600;
        }
    } else if (mode === "zombie") {
        setupZombieApocalypse();
    } else {
        setupPveSurvival();
    }
    startBackgroundMusic();
    writeLog(
        "System",
        mode === "quest"
            ? `${state.player.name} enters the ${questWorld === "alien" ? "alien quest world" : "quest campaign"}.`
            : (mode === "zombie"
                ? `${state.player.name} enters Zombie Apocalypse mode.`
            : `${state.player.name} enters endless PvE survival.`
            )
    );
    ui.statusText.textContent = "In Battle";
    document.body.classList.add("play-mode");
    closeHome();
}

function startBossRush() {
    if (state.started || state.over) {
        resetGame();
    }

    savePlayerIdentity();
    state.started = true;
    state.over = false;
    state.victory = false;
    state.player.hp = state.player.maxHp;
    state.player.poisonTimer = 0;
    state.player.poisonTickTimer = 0;
    state.mode = "bossrush";
    state.premiumMode = "";
    state.rival = createRival();
    state.rival.active = false;
    state.bossRushLineup = createBossRushLineup();
    state.bossRushIndex = 0;
    spawnBossRushBoss();
    startBackgroundMusic();
    writeLog("System", `${state.player.name} enters Boss Rush.`);
    ui.statusText.textContent = "Boss Rush";
    document.body.classList.add("play-mode");
    closeHome();
}

function startPremiumNightmare() {
    if (!hasPremiumAccess()) {
        return;
    }
    if (state.started || state.over) {
        resetGame();
    }

    savePlayerIdentity();
    state.started = true;
    state.over = false;
    state.victory = false;
    state.player.hp = state.player.maxHp;
    state.player.poisonTimer = 0;
    state.player.poisonTickTimer = 0;
    state.mode = "pve";
    state.premiumMode = "nightmare";
    state.rival = createRival();
    state.rival.active = false;
    setupPveSurvival();
    writeLog("Premium", "Nightmare Survival unlocked. The evil people are stronger and the bosses come faster.");
    startBackgroundMusic();
    ui.statusText.textContent = "Nightmare";
    document.body.classList.add("play-mode");
    closeHome();
}

function startPremiumAlienGauntlet() {
    if (!hasPremiumAccess()) {
        return;
    }
    if (state.started || state.over) {
        resetGame();
    }

    savePlayerIdentity();
    state.started = true;
    state.over = false;
    state.victory = false;
    state.player.hp = state.player.maxHp;
    state.player.poisonTimer = 0;
    state.player.poisonTickTimer = 0;
    state.mode = "quest";
    state.premiumMode = "alien-gauntlet";
    state.rival = createRival();
    state.rival.active = false;
    setupQuest(0, "alien");
    state.phase = "hunt";
    state.lairEntrance.active = true;
    state.castleAccessGranted = true;
    state.witnesses = [];
    state.evidenceSpots = [];
    state.townScouts = [];
    writeLog("Premium", "Alien Gauntlet unlocked. Jump straight into the alien world.");
    startBackgroundMusic();
    ui.statusText.textContent = "Alien";
    document.body.classList.add("play-mode");
    closeHome();
}

function startPremiumLegendRush() {
    if (!hasPremiumAccess()) {
        return;
    }
    if (state.started || state.over) {
        resetGame();
    }

    savePlayerIdentity();
    state.started = true;
    state.over = false;
    state.victory = false;
    state.player.hp = state.player.maxHp;
    state.player.poisonTimer = 0;
    state.player.poisonTickTimer = 0;
    state.mode = "bossrush";
    state.premiumMode = "legend-rush";
    state.rival = createRival();
    state.rival.active = false;
    state.bossRushLineup = createBossRushLineup();
    state.bossRushIndex = 0;
    spawnBossRushBoss();
    writeLog("Premium", "Legend Boss Rush unlocked. Every boss is stronger.");
    startBackgroundMusic();
    ui.statusText.textContent = "Legend Rush";
    document.body.classList.add("play-mode");
    closeHome();
}

function startPremiumDragonStorm() {
    if (!hasPremiumAccess()) {
        return;
    }
    if (state.started || state.over) {
        resetGame();
    }

    savePlayerIdentity();
    state.started = true;
    state.over = false;
    state.victory = false;
    state.player.hp = state.player.maxHp;
    state.player.poisonTimer = 0;
    state.player.poisonTickTimer = 0;
    state.mode = "bossrush";
    state.premiumMode = "dragon-storm";
    state.rival = createRival();
    state.rival.active = false;
    state.bossRushLineup = createDragonStormLineup();
    state.bossRushIndex = 0;
    spawnBossRushBoss();
    writeLog("Premium", "Dragon Storm unlocked. This rush is all dragons.");
    startBackgroundMusic();
    ui.statusText.textContent = "Dragon Storm";
    document.body.classList.add("play-mode");
    closeHome();
}

function startPremiumZombieLastStand() {
    if (!hasPremiumAccess()) {
        return;
    }
    if (state.started || state.over) {
        resetGame();
    }

    savePlayerIdentity();
    state.started = true;
    state.over = false;
    state.victory = false;
    state.player.hp = state.player.maxHp;
    state.player.poisonTimer = 0;
    state.player.poisonTickTimer = 0;
    state.mode = "zombie";
    state.premiumMode = "zombie-last-stand";
    state.rival = createRival();
    state.rival.active = false;
    setupZombieApocalypse();
    state.phase = "boss-zombie";
    state.witnesses = [];
    state.evidenceSpots = [];
    state.townScouts = [];
    state.scoutsDefeated = state.scoutsGoal;
    state.lairEntrance.active = true;
    state.castleAccessGranted = true;
    state.boss.active = true;
    state.boss.projectileCooldown = 900;
    writeLog("Premium", "Zombie Last Stand unlocked. You go straight to the plague boss.");
    startBackgroundMusic();
    ui.statusText.textContent = "Last Stand";
    document.body.classList.add("play-mode");
    closeHome();
}

function startPremiumChaosArena() {
    if (!hasPremiumAccess()) {
        return;
    }
    if (state.started || state.over) {
        resetGame();
    }

    savePlayerIdentity();
    state.started = true;
    state.over = false;
    state.victory = false;
    state.player.hp = state.player.maxHp;
    state.player.poisonTimer = 0;
    state.player.poisonTickTimer = 0;
    state.mode = "pve";
    state.premiumMode = "chaos-arena";
    state.rival = createRival();
    state.rival.active = false;
    setupPveSurvival();
    state.wave = 12;
    state.questKills = getPveBossThreshold();
    state.enemies = [];
    ensureInfinitePveEnemies();
    state.boss = createBoss(state.wave);
    state.boss.active = true;
    state.boss.projectileCooldown = 650;
    writeLog("Premium", "Chaos Arena unlocked. A boss and a full pack of enemies attack at the same time.");
    startBackgroundMusic();
    ui.statusText.textContent = "Chaos";
    document.body.classList.add("play-mode");
    closeHome();
}

function startTraining() {
    if (state.started || state.over) {
        resetGame();
    }

    savePlayerIdentity();
    state.started = true;
    state.over = false;
    state.victory = false;
    state.player.hp = state.player.maxHp;
    state.player.poisonTimer = 0;
    state.player.poisonTickTimer = 0;
    state.mode = "training";
    state.premiumMode = "";
    state.wave = 1;
    state.trainingWaveCleared = 0;
    state.rival = createRival();
    state.rival.active = false;
    spawnTrainingWave();
    startBackgroundMusic();
    writeLog("System", `${state.player.name} enters rider training.`);
    ui.statusText.textContent = "Training";
    document.body.classList.add("play-mode");
    closeHome();
}

function startLairAssault() {
    const quest = getCurrentQuest();
    state.phase = state.undergroundLair ? "underground" : "lair";
    state.questKills = 0;
    state.enemies = [];
    state.projectiles = [];
    for (let i = 0; i < Math.min(3, quest.kills); i += 1) {
        state.enemies.push(createEnemy(state.wave));
    }
    ensureInfinitePveEnemies();
    state.player.x = state.undergroundLair ? s(2980) : s(2860);
    state.player.y = state.undergroundLair ? s(1500) : s(860);
    updateCamera();
    writeLog("Scene", state.undergroundLair ? "You descend into the underground lair." : "You force your way into the boss's secret lair.");
    writeLog("Warning", state.boss.dragonBoss
        ? "Fight through the guards. Deep in the fortress, a dragon is waiting."
        : "Fight through the guards. When the boss appears, the ship will start firing."
    );
}

function getNearbyWitness() {
    return state.witnesses.find((entry) => distanceBetween(state.player, entry) < s(86)) || null;
}

function getNearbyCastleGuard() {
    return state.castleGuards.find((entry) => distanceBetween(state.player, entry) < s(92)) || null;
}

function talkToWitness() {
    if (!state.started || state.over || (state.phase !== "town" && state.phase !== "hunt")) {
        return;
    }

    const guard = getNearbyCastleGuard();
    if (guard) {
        openDialogue(guard);
        return;
    }

    if (state.phase !== "town") {
        writeLog("Gate", "Talk to the gate guards or move toward the fortress.");
        return;
    }

    const evidence = getNearbyEvidence();
    if (evidence) {
        evidence.found = true;
        state.evidenceFound += 1;
        openEvidenceDialogue(evidence);
        writeLog("Evidence", evidence.clue);
        maybeUnlockLair();
        return;
    }

    const witness = getNearbyWitness();
    if (!witness) {
        writeLog("Investigation", "Nothing useful is close enough. Try a witness or a glowing clue.");
        return;
    }

    openDialogue(witness);
}

function confirmWitnessDialogue(topic) {
    const witness = state.activeDialogue;
    if (!witness) {
        return;
    }

    const wasUntalked = !witness.talked;
    witness.talked = true;
    if (wasUntalked && !witness.isCastleGuard) {
        state.witnessesFound += 1;
    }
    const answers = {
        what: {
            title: "What happened?",
            text: witness.dialogue.what
        },
        where: {
            title: "Where did the boss go?",
            text: witness.dialogue.where
        },
        who: {
            title: "Who survived?",
            text: witness.dialogue.who
        }
    };
    const response = answers[topic] || {
        title: "Clue",
        text: witness.clue
    };
    ui.dialogueTitle.textContent = response.title;
    ui.dialogueText.textContent = response.text;
    writeLog(witness.name, response.text);

    if (witness.isCastleGuard) {
        if (!state.lairEntrance || !state.lairEntrance.active) {
            ui.dialogueTitle.textContent = "Find The Trail";
            ui.dialogueText.textContent = "We cannot open the fortress yet. Clear the remaining minions on the approach first.";
            writeLog("Gate", "The guards tell you to beat the remaining minions before they can open the fortress.");
        } else if (isCastleDoorOpen()) {
            state.castleAccessGranted = true;
            ui.dialogueTitle.textContent = "Gate Cleared";
            ui.dialogueText.textContent = "The road is secure. You are cleared to enter the fortress and face the boss.";
            writeLog("Gate", "The guards open the way. Walk through the fortress door to enter.");
        } else {
            ui.dialogueTitle.textContent = "Hold The Gate";
            ui.dialogueText.textContent = "The minions are still out there. Clear them first, then come back and we will let you in.";
            writeLog("Gate", "The guards refuse entry until every minion on the approach is defeated.");
        }
        return;
    }

    maybeUnlockLair();
}

function handleMoveButton(action, pressed) {
    if (action === "attack") {
        if (pressed) {
            triggerAttack();
        }
        return;
    }

    if (action === "block") {
        keys.block = pressed;
        return;
    }

    if (action === "flip") {
        if (pressed) {
            triggerFlip();
        }
        return;
    }

    if (action === "jump") {
        if (pressed) {
            triggerJump();
        }
        return;
    }

    keys[action] = pressed;
}

function triggerAttack() {
    if (!state.started || state.over) {
        return;
    }

    const player = state.player;
    const center = getCenter(player);
    if (player.attackCooldown > 0) {
        return;
    }

    player.attackTimer = 10;
    player.attackCooldown = 14;
    player.attackFlash = attackFlashMs;
    const attackVector = resolveAttackVector();
    player.attackVectorX = attackVector.x;
    player.attackVectorY = attackVector.y;
    spawnEffect({
        type: "slash",
        x: center.x + attackVector.x * 18,
        y: center.y + attackVector.y * 18,
        vx: attackVector.x,
        vy: attackVector.y,
        life: 180,
        maxLife: 180
    });
    triggerShake(5);

    if (isMultiplayerCoop() && !multiplayer.isHost) {
        broadcastMultiplayerMessage({
            type: "coop-hit",
            name: state.player.name,
            x: state.player.x,
            y: state.player.y,
            attackVectorX: attackVector.x,
            attackVectorY: attackVector.y,
            damage: state.player.damage
        });
        writeLog("Co-op", "You swing at the bad guys.");
        return;
    }

    let landed = false;

    for (const enemy of state.enemies) {
        if (attackHitsTarget(enemy, attackVector)) {
            enemy.hp -= player.damage;
            landed = true;
            spawnEffect({
                type: "hit",
                x: enemy.x + enemy.width / 2,
                y: enemy.y + enemy.height / 2,
                color: "#ffb0ba",
                life: 220,
                maxLife: 220
            });
            triggerShake(8);
            writeLog("Hero", `Hit an enemy for ${player.damage.toFixed(0)} damage.`);
            break;
        }
    }

    if (!landed) {
        for (const scout of state.townScouts) {
            if (attackHitsTarget(scout, attackVector)) {
                scout.hp -= player.damage;
                landed = true;
                spawnEffect({
                    type: "hit",
                    x: scout.x + scout.width / 2,
                    y: scout.y + scout.height / 2,
                    color: "#ffe2a8",
                    life: 220,
                    maxLife: 220
                });
                triggerShake(7);
                writeLog("Hero", `Hit a scout for ${player.damage.toFixed(0)} damage.`);
                break;
            }
        }
    }

    if (!landed && isMultiplayerVersus() && state.rival.active && attackHitsTarget(state.rival, attackVector)) {
        landed = true;
        spawnEffect({
            type: "hit",
            x: state.rival.x + state.rival.width / 2,
            y: state.rival.y + state.rival.height / 2,
            color: "#cfe7ff",
            life: 220,
            maxLife: 220
        });
        writeLog("Multiplayer", `You hit ${state.rival.name}.`);
        broadcastMultiplayerMessage({
            type: "hit",
            name: state.player.name,
            damage: state.player.damage
        });
    }

    if (!landed && state.boss.active && attackHitsTarget(state.boss, attackVector)) {
        state.boss.hp -= player.damage;
        landed = true;
        extendCombo(1, "boss");
        spawnEffect({
            type: "hit",
            x: state.boss.x + state.boss.width / 2,
            y: state.boss.y + state.boss.height / 2,
            color: "#cfe7ff",
            life: 260,
            maxLife: 260
        });
        triggerShake(10);
        writeLog("Hero", `Boss struck for ${player.damage.toFixed(0)} damage.`);
    }

    if (!landed) {
        for (const extraBoss of state.extraBosses) {
            if (extraBoss.active && attackHitsTarget(extraBoss, attackVector)) {
                extraBoss.hp -= player.damage;
                landed = true;
                extendCombo(1, "boss");
                spawnEffect({
                    type: "hit",
                    x: extraBoss.x + extraBoss.width / 2,
                    y: extraBoss.y + extraBoss.height / 2,
                    color: "#ff9be8",
                    life: 260,
                    maxLife: 260
                });
                triggerShake(10);
                writeLog("Hero", `${extraBoss.name} struck for ${player.damage.toFixed(0)} damage.`);
                break;
            }
        }
    }

    if (!landed) {
        writeLog("Hero", "Attack missed.");
    }
}

function triggerFlip() {
    if (!state.started || state.over) {
        return;
    }

    const player = state.player;
    if (player.flipCooldown > 0) {
        return;
    }

    player.blocking = false;
    keys.block = false;

    const moveX = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
    const moveY = (keys.down ? 1 : 0) - (keys.up ? 1 : 0);
    let flipX = moveX;
    let flipY = moveY;

    if (flipX === 0 && flipY === 0) {
        flipX = player.facingX;
        flipY = player.facingY;
    }

    const length = Math.hypot(flipX, flipY) || 1;
    player.facingX = flipX / length;
    player.facingY = flipY / length;
    player.x += player.facingX * 34;
    player.y += player.facingY * 34;
    player.flipTimer = 260;
    player.flipCooldown = 520;
    player.hitCooldown = Math.max(player.hitCooldown, 220);
    player.walkCycle += 1.2;

    spawnEffect({
        type: "dust",
        x: player.x + player.width / 2,
        y: player.y + player.height + 8,
        color: "rgba(190, 234, 198, 0.82)",
        life: 260,
        maxLife: 260
    });
    spawnEffect({
        type: "flip",
        x: player.x + player.width / 2,
        y: player.y + player.height / 2,
        vx: player.facingX,
        vy: player.facingY,
        life: 240,
        maxLife: 240
    });
    writeLog("Hero", "You flipped clear of danger.");
}

function triggerJump() {
    if (!state.started || state.over) {
        return;
    }

    const player = state.player;
    if (player.jumpCooldown > 0 || player.flipTimer > 0) {
        return;
    }

    const moveX = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
    const moveY = (keys.down ? 1 : 0) - (keys.up ? 1 : 0);
    let jumpX = moveX;
    let jumpY = moveY;

    if (jumpX === 0 && jumpY === 0) {
        jumpX = player.facingX;
        jumpY = player.facingY;
    }

    const length = Math.hypot(jumpX, jumpY) || 1;
    player.facingX = jumpX / length;
    player.facingY = jumpY / length;
    player.jumpTimer = 420;
    player.jumpCooldown = 900;
    player.hitCooldown = Math.max(player.hitCooldown, 180);
    player.x += player.facingX * 24;
    player.y += player.facingY * 24;

    spawnEffect({
        type: "jump",
        x: player.x + player.width / 2,
        y: player.y + player.height + 4,
        life: 260,
        maxLife: 260
    });
    writeLog("Power", "Jump power activated.");
}

function resolveAttackVector() {
    const player = state.player;
    const center = getCenter(player);
    let dx = player.facingX;
    let dy = player.facingY;
    const inputX = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
    const inputY = (keys.down ? 1 : 0) - (keys.up ? 1 : 0);

    if (pointer.active) {
        dx = pointer.x - center.x;
        dy = pointer.y - center.y;
    } else if (inputX !== 0 || inputY !== 0) {
        dx = inputX;
        dy = inputY;
    }

    const length = Math.hypot(dx, dy) || 1;
    return {
        x: dx / length,
        y: dy / length
    };
}

function attackHitsTarget(target, attackVector) {
    return attackHitsTargetFrom(state.player, target, attackVector);
}

function applyIncomingDamage(source, amount, sourceLabel) {
    const player = state.player;
    if (player.flipTimer > 0) {
        writeLog("Flip", `You dodged the hit from ${sourceLabel}.`);
        return 0;
    }
    let finalDamage = Math.max(1, amount - (player.armor || 0));

    if (player.blocking) {
        finalDamage = Math.max(1, Math.ceil(finalDamage * (1 - (player.shieldPower || 0.45))));
        spawnEffect({
            type: "hit",
            x: player.x + player.width / 2,
            y: player.y + player.height / 2,
            color: "#8fe9ff",
            life: 180,
            maxLife: 180
        });
        writeLog("Block", `Shield absorbed part of the hit from ${sourceLabel}.`);
    }

    player.hp -= finalDamage;
    player.hitCooldown = 280;
    resetCombo(true);
    if (source) {
        source.hitCooldown = Math.max(source.hitCooldown || 0, 420);
    }
    return finalDamage;
}

function updatePlayer(deltaMs) {
    const player = state.player;
    const ring = state.ringBounds;
    const previousX = player.x;
    const previousY = player.y;
    const frameScale = deltaMs / 16.67;
    player.blocking = keys.block && player.attackCooldown <= 0 && player.flipTimer <= 0;
    let moveX = 0;
    let moveY = 0;

    if (keys.left) {
        moveX -= 1;
    }
    if (keys.right) {
        moveX += 1;
    }
    if (keys.up) {
        moveY -= 1;
    }
    if (keys.down) {
        moveY += 1;
    }

    const inputLength = Math.hypot(moveX, moveY) || 1;
    const hasMovementInput = moveX !== 0 || moveY !== 0;
    const normalizedMoveX = hasMovementInput ? moveX / inputLength : 0;
    const normalizedMoveY = hasMovementInput ? moveY / inputLength : 0;
    const moveSpeedMultiplier = player.blocking ? 0.48 : 1;
    const maxSpeed = player.speed * moveSpeedMultiplier;
    const targetVelocityX = normalizedMoveX * maxSpeed;
    const targetVelocityY = normalizedMoveY * maxSpeed;
    const acceleration = Math.min(1, 0.16 * frameScale);
    const drag = Math.pow(hasMovementInput ? 0.94 : 0.72, frameScale);

    player.velocityX = hasMovementInput
        ? player.velocityX + (targetVelocityX - player.velocityX) * acceleration
        : player.velocityX * drag;
    player.velocityY = hasMovementInput
        ? player.velocityY + (targetVelocityY - player.velocityY) * acceleration
        : player.velocityY * drag;

    if (Math.abs(player.velocityX) < 0.04) {
        player.velocityX = 0;
    }
    if (Math.abs(player.velocityY) < 0.04) {
        player.velocityY = 0;
    }

    player.x += player.velocityX * frameScale;
    player.y += player.velocityY * frameScale;

    const currentSpeed = Math.hypot(player.velocityX, player.velocityY);
    const speedRatio = clamp(currentSpeed / Math.max(0.01, player.speed), 0, 1);
    player.strideBlend += (speedRatio - player.strideBlend) * Math.min(1, 0.14 * frameScale);

    if (currentSpeed > 0.12) {
        const targetFacingX = player.velocityX / currentSpeed;
        const targetFacingY = player.velocityY / currentSpeed;
        const turnRate = Math.min(1, (0.12 + speedRatio * 0.16) * frameScale);
        player.facingX += (targetFacingX - player.facingX) * turnRate;
        player.facingY += (targetFacingY - player.facingY) * turnRate;
        const facingLength = Math.hypot(player.facingX, player.facingY) || 1;
        player.facingX /= facingLength;
        player.facingY /= facingLength;
    }

    if (speedRatio > 0.02) {
        const gaitSpeed = 0.006 + speedRatio * 0.022 + speedRatio * speedRatio * 0.01;
        player.walkCycle += deltaMs * gaitSpeed;
        if (Math.random() < 0.1 * speedRatio) {
            spawnEffect({
                type: "dust",
                x: player.x + player.width / 2 + randomRange(-6, 6),
                y: player.y + player.height + 8,
                color: "rgba(210, 196, 171, 0.7)",
                life: 220,
                maxLife: 220
            });
        }
    } else {
        player.walkCycle *= Math.pow(0.9, frameScale);
    }

    if (player.flipTimer > 0) {
        player.x += player.facingX * player.speed * 2.6;
        player.y += player.facingY * player.speed * 2.6;
        player.flipTimer = Math.max(0, player.flipTimer - deltaMs);
        player.walkCycle += deltaMs * 0.03;
        if (Math.random() < 0.3) {
            spawnEffect({
                type: "flip",
                x: player.x + player.width / 2,
                y: player.y + player.height / 2,
                vx: player.facingX,
                vy: player.facingY,
                life: 180,
                maxLife: 180
            });
        }
    }

    if (player.jumpTimer > 0) {
        const jumpRatio = player.jumpTimer / 420;
        player.jumpLift = Math.sin((1 - jumpRatio) * Math.PI) * 28;
        player.x += player.facingX * player.speed * 1.45;
        player.y += player.facingY * player.speed * 1.45;
        player.jumpTimer = Math.max(0, player.jumpTimer - deltaMs);
    } else {
        player.jumpLift = 0;
    }

    player.x = clamp(player.x, ring.left + 8, ring.right - player.width - 8);
    player.y = clamp(player.y, ring.top + 8, ring.bottom - player.height - 8);
    clampEntityToObstacles(player, previousX, previousY);
    if (player.x === previousX) {
        player.velocityX = 0;
    }
    if (player.y === previousY) {
        player.velocityY = 0;
    }
    player.attackTimer = Math.max(0, player.attackTimer - deltaMs / 16.67);
    player.attackCooldown = Math.max(0, player.attackCooldown - deltaMs / 16.67);
    player.hitCooldown = Math.max(0, player.hitCooldown - deltaMs);
    player.attackFlash = Math.max(0, player.attackFlash - deltaMs);
    player.flipCooldown = Math.max(0, player.flipCooldown - deltaMs);
    player.jumpCooldown = Math.max(0, player.jumpCooldown - deltaMs);
    player.poisonTimer = Math.max(0, player.poisonTimer - deltaMs);
    player.poisonTickTimer = Math.max(0, player.poisonTickTimer - deltaMs);
    if (player.poisonTimer > 0 && player.poisonTickTimer <= 0) {
        player.hp -= 1;
        player.poisonTickTimer = 360;
        spawnEffect({
            type: "hit",
            x: player.x + player.width / 2,
            y: player.y + player.height / 2,
            color: "rgba(115, 255, 162, 0.78)",
            life: 200,
            maxLife: 200
        });
    }
    if (state.phase === "hunt" || state.phase === "town") {
        if (state.lairEntrance && state.lairEntrance.active && distanceBetween(player, state.lairEntrance) < s(90)) {
            startLairAssault();
        }

        const castleDoor = getCastleDoorRect();
        if (
            castleDoor &&
            isCastleDoorOpen() &&
            state.castleAccessGranted &&
            distanceBetween(player, {
                x: castleDoor.x,
                y: castleDoor.y,
                width: castleDoor.width,
                height: castleDoor.height
            }) < s(96)
        ) {
            startLairAssault();
        }
    }
}

function recycleEnemy(index) {
    state.enemies[index] = createEnemy(state.wave);
}

function advanceWave() {
    if (state.mode === "training") {
        advanceTrainingWave();
        return;
    }

    if (state.mode === "bossrush") {
        advanceBossRush();
        return;
    }

    if (state.mode === "pve") {
        advancePveSurvival();
        return;
    }

    if (state.mode === "quest") {
        completeQuest();
        return;
    }

    if (state.mode === "zombie") {
        completeZombieMode();
        return;
    }

    if (!isMultiplayerCoop()) {
        return;
    }

    completeQuest();
}

function updateEnemies(deltaMs) {
    if (isMultiplayerCoop() && !multiplayer.isHost) {
        return;
    }

    const player = state.player;

    state.enemies.forEach((enemy, index) => {
        const previousX = enemy.x;
        const previousY = enemy.y;
        const target = isMultiplayerCoop() && state.rival.active &&
            distanceBetween(enemy, state.rival) < distanceBetween(enemy, state.player)
            ? state.rival
            : state.player;
        const dx = target.x - enemy.x;
        const dy = target.y - enemy.y;
        const length = Math.hypot(dx, dy) || 1;
        const distance = length;

        enemy.rangedCooldown = Math.max(0, (enemy.rangedCooldown || 0) - deltaMs);
        enemy.spiritCooldown = Math.max(0, (enemy.spiritCooldown || 0) - deltaMs);

        if (!enemy.poisonArcher || distance > 260) {
            enemy.x += (dx / length) * enemy.speed;
            enemy.y += (dy / length) * enemy.speed;
        } else if (distance < 170) {
            enemy.x -= (dx / length) * enemy.speed * 0.75;
            enemy.y -= (dy / length) * enemy.speed * 0.75;
        }
        clampEntityToObstacles(enemy, previousX, previousY);
        enemy.hitCooldown = Math.max(0, enemy.hitCooldown - deltaMs);
        enemy.pulse += 0.03;
        enemy.dragonBurn = Math.max(0, (enemy.dragonBurn || 0) - deltaMs);

        if (enemy.stormSpirit && distance < 500 && enemy.spiritCooldown <= 0) {
            const targetX = target.x + target.width / 2 + randomRange(-16, 16);
            const targetY = target.y + target.height / 2;
            spawnEffect({
                type: "lightning",
                x: targetX,
                y: targetY,
                life: 240,
                maxLife: 240
            });
            if (distance < 125 && target.hitCooldown <= 0) {
                const damageTaken = target === state.player
                    ? applyIncomingDamage(enemy, Math.ceil(enemy.damage * 0.7), "storm spirit lightning")
                    : applyDamageToRival(Math.ceil(enemy.damage * 0.7), "storm spirit lightning");
                if (damageTaken > 0) {
                    writeLog("Storm Spirit", `${target === state.player ? "Lightning cracked into you" : `${state.rival.name} was hit by lightning`} for ${damageTaken.toFixed(0)} damage.`);
                }
            } else {
                writeLog("Storm Spirit", "The air flashes as lightning tears down nearby.");
            }
            enemy.spiritCooldown = randomRange(1700, 2500);
        }

        if (enemy.waterSpirit && distance < 520 && enemy.spiritCooldown <= 0) {
            const enemyCenter = getCenter(enemy);
            state.projectiles.push({
                kind: "water-wave",
                x: enemyCenter.x,
                y: enemyCenter.y + 10,
                vx: (dx / length) * 4.1,
                vy: (dy / length) * 4.1,
                damage: Math.max(3, Math.ceil(enemy.damage * 0.6)),
                life: 1800,
                sourceLabel: "water spirit wave",
                size: 18
            });
            writeLog("Water Spirit", "A crashing wave surges across the ground.");
            enemy.spiritCooldown = randomRange(1500, 2300);
        }

        if (enemy.earthSpirit && distance < 520 && enemy.spiritCooldown <= 0) {
            const enemyCenter = getCenter(enemy);
            state.projectiles.push({
                kind: "boulder",
                x: enemyCenter.x,
                y: enemyCenter.y,
                vx: (dx / length) * 4.4,
                vy: (dy / length) * 4.4,
                damage: Math.max(4, Math.ceil(enemy.damage * 0.8)),
                life: 1700,
                sourceLabel: "earth spirit boulder",
                size: 16
            });
            spawnEffect({
                type: "rock-burst",
                x: enemyCenter.x,
                y: enemyCenter.y + 8,
                life: 220,
                maxLife: 220
            });
            writeLog("Earth Spirit", "Rocks rip loose and a boulder comes flying.");
            enemy.spiritCooldown = randomRange(1600, 2400);
        }

        if (enemy.poisonArcher && distance < 460 && enemy.rangedCooldown <= 0) {
            const enemyCenter = getCenter(enemy);
            state.projectiles.push({
                kind: "poison-arrow",
                x: enemyCenter.x,
                y: enemyCenter.y - 6,
                vx: (dx / length) * 6.2,
                vy: (dy / length) * 6.2,
                damage: Math.max(3, Math.ceil(enemy.damage * 0.55)),
                life: 1600,
                poisonMs: 2600,
                sourceLabel: enemy.stormSpirit ? "storm spirit" : "poison archer"
            });
            spawnEffect({
                type: "muzzle",
                x: enemyCenter.x,
                y: enemyCenter.y - 6,
                color: "#79ff9d",
                life: 150,
                maxLife: 150
            });
            enemy.rangedCooldown = randomRange(1200, 1800);
            writeLog(enemy.stormSpirit ? "Storm Spirit" : "Archer", "A poisonous arrow cuts through the air.");
        }

        if (!enemy.poisonArcher && rectsOverlap(enemy, target) && enemy.hitCooldown <= 0 && target.hitCooldown <= 0) {
            const damageTaken = target === state.player
                ? applyIncomingDamage(enemy, enemy.damage, "enemy")
                : applyDamageToRival(enemy.damage, "enemy");
            if (damageTaken > 0) {
                writeLog("Enemy", `${target === state.player ? "You took" : `${state.rival.name} took`} ${damageTaken.toFixed(0)} damage.`);
            }
        }

        if (enemy.hp <= 0) {
            state.score += 15;
            state.player.gold += 20;
            state.questKills += 1;
            extendCombo(enemy.mounted || enemy.spiritType ? 2 : 1, "enemy");
            if (state.mode === "training") {
                state.enemies.splice(index, 1);
                writeLog("Training", "A rider falls.");
                if (state.enemies.length === 0) {
                    advanceWave();
                }
            } else {
                if (state.mode === "pve" && state.questKills >= getPveBossThreshold() && !state.boss.active) {
                    state.boss.active = true;
                    state.phase = "survival-boss";
                    state.boss.projectileCooldown = Math.max(340, 900 - state.wave * 35);
                    writeLog("PvE", `Wave ${state.wave} boss has arrived.`);
                    writeLog("Boss", state.boss.dragonBoss
                        ? `${state.boss.name} erupts into the arena as a dragon.`
                        : `${state.boss.name} storms in and opens fire.`
                    );
                } else if ((state.mode === "quest" || state.mode === "zombie") && state.questKills >= getCurrentQuest().kills && !state.boss.active) {
                    state.boss.active = true;
                    state.phase = state.mode === "zombie"
                        ? "boss-zombie"
                        : (state.boss.dragonBoss ? "boss-dragon" : "boss-ship");
                    state.boss.projectileCooldown = state.mode === "zombie" ? 1100 : 850;
                    writeLog(state.mode === "zombie" ? "Zombie Mode" : "Quest", `${state.boss.name} arrives for ${getCurrentQuest().title}.`);
                    writeLog("Boss", state.mode === "zombie"
                        ? `${state.boss.name} lurches out of the keep to protect the antidote source.`
                        : (state.boss.dragonBoss
                            ? `${state.boss.name} erupts from the fortress as a dragon and attacks.`
                            : `${state.boss.name} climbs into a warship and opens fire.`)
                    );
                }
                writeLog("System", "Enemy defeated. Another evil fighter rushes in.");
                if ((state.mode === "quest" || state.mode === "zombie") && state.boss.active) {
                    state.enemies.splice(index, 1);
                } else {
                    recycleEnemy(index);
                }
            }
        }
    });
}

function updateTownScouts(deltaMs) {
    if (state.phase !== "town" && state.phase !== "hunt") {
        return;
    }
    if (isMultiplayerCoop() && !multiplayer.isHost) {
        return;
    }

    state.townScouts = state.townScouts.filter((scout) => {
        const previousX = scout.x;
        const previousY = scout.y;
        const target = isMultiplayerCoop() && state.rival.active &&
            distanceBetween(scout, state.rival) < distanceBetween(scout, state.player)
            ? state.rival
            : state.player;
        const dx = target.x - scout.x;
        const dy = target.y - scout.y;
        const length = Math.hypot(dx, dy) || 1;

        scout.x += (dx / length) * scout.speed;
        scout.y += (dy / length) * scout.speed;
        scout.hitCooldown = Math.max(0, scout.hitCooldown - deltaMs);
        scout.pulse += 0.04;
        clampEntityToObstacles(scout, previousX, previousY);

        if (rectsOverlap(scout, target) && scout.hitCooldown <= 0 && target.hitCooldown <= 0) {
            const damageTaken = target === state.player
                ? applyIncomingDamage(scout, scout.damage, "scout")
                : applyDamageToRival(scout.damage, scout.variant === "wolf" ? "wolf" : "scout");
            scout.hitCooldown = scout.variant === "wolf" ? 360 : 450;
            spawnEffect({
                type: "hit",
                x: target.x + target.width / 2,
                y: target.y + target.height / 2,
                color: scout.variant === "wolf" ? "#ffd18f" : "#ff8b7a",
                life: 220,
                maxLife: 220
            });
            triggerShake(6);
            writeLog(
                scout.variant === "wolf" ? "Wolf" : "Scout",
                scout.variant === "wolf"
                    ? `A wolf lunged in and bit ${target === state.player ? "you" : state.rival.name} for ${damageTaken}.`
                    : `A town scout hit ${target === state.player ? "you" : state.rival.name} for ${damageTaken}.`
            );
        }

        if (scout.hp <= 0) {
            state.scoutsDefeated += 1;
            state.score += 10;
            extendCombo(scout.variant === "wolf" ? 2 : 1, "enemy");
            writeLog(scout.variant === "wolf" ? "Wolf" : "Scout", scout.variant === "wolf" ? "A hungry wolf drops." : "An ambusher falls.");
            maybeUnlockLair();
            return false;
        }

        return true;
    });
}

function updateEffects(deltaMs) {
    state.effects = state.effects.filter((effect) => {
        if (effect.type === "dust") {
            effect.y -= 0.2;
        }
        effect.life -= deltaMs;
        return effect.life > 0;
    });
    state.cameraShake = Math.max(0, state.cameraShake - deltaMs * 0.03);
    if (state.comboTimer > 0) {
        state.comboTimer = Math.max(0, state.comboTimer - deltaMs);
        if (state.comboTimer <= 0) {
            resetCombo();
        }
    }
}

function updateDragons(deltaMs) {
    if (!state.player.dragons.length) {
        return;
    }

    const playerCenter = getCenter(state.player);
    const target = getPrimaryActiveBoss() || state.enemies[0];

    state.player.dragons.forEach((dragon, index) => {
        dragon.orbit += 0.018 + index * 0.003;
        dragon.x = playerCenter.x + Math.cos(dragon.orbit) * (58 + index * 22);
        dragon.y = playerCenter.y - 48 + Math.sin(dragon.orbit * 1.35) * 18;
    });

    if (!target) {
        return;
    }

    const targetCenter = getCenter(target);
    state.player.dragons.forEach((dragon) => {
        dragon.cooldown = Math.max(0, (dragon.cooldown || 0) - deltaMs);
        if (dragon.cooldown > 0) {
            return;
        }

        const dx = targetCenter.x - dragon.x;
        const dy = targetCenter.y - dragon.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 210) {
            target.hp -= dragon.damage;
            dragon.cooldown = 850;
            target.dragonBurn = 180;
        }
    });
}

function spawnBossIfNeeded(deltaMs) {
    if ((state.mode !== "pve" && !isMultiplayerCoop()) || (isMultiplayerCoop() && !multiplayer.isHost) || state.boss.active || state.over) {
        return;
    }
}

function updateProjectiles(deltaMs) {
    if (isMultiplayerCoop() && !multiplayer.isHost) {
        return;
    }

    state.projectiles = state.projectiles.filter((projectile) => {
        projectile.x += projectile.vx;
        projectile.y += projectile.vy;
        projectile.life -= deltaMs;
        const size = projectile.size || (projectile.kind === "water-wave" ? 18 : (projectile.kind === "boulder" ? 16 : 8));

        const target = isMultiplayerCoop() && state.rival.active &&
            distanceBetween({ x: projectile.x - size, y: projectile.y - size, width: size * 2, height: size * 2 }, state.rival) <
            distanceBetween({ x: projectile.x - size, y: projectile.y - size, width: size * 2, height: size * 2 }, state.player)
            ? state.rival
            : state.player;

        if (rectsOverlap(
            { x: projectile.x - size, y: projectile.y - size, width: size * 2, height: size * 2 },
            target
        )) {
            const damageTaken = target === state.player
                ? applyIncomingDamage(null, projectile.damage, projectile.sourceLabel || "boss ship")
                : applyDamageToRival(projectile.damage, projectile.sourceLabel || "boss ship");
            if (damageTaken > 0) {
                if (projectile.poisonMs && target === state.player) {
                    state.player.poisonTimer = Math.max(state.player.poisonTimer, projectile.poisonMs);
                    state.player.poisonTickTimer = 1;
                    writeLog("Poison", "Toxic venom starts burning through your armor.");
                }
                const hitLabel = projectile.kind === "poison-arrow"
                    ? "Archer"
                    : (projectile.kind === "dragon-fire"
                        ? "Dragon"
                        : (projectile.kind === "water-wave"
                            ? "Water Spirit"
                            : (projectile.kind === "boulder" ? "Earth Spirit" : "Boss Ship")));
                writeLog(hitLabel, `${target === state.player ? "You were" : `${state.rival.name} was`} hit for ${damageTaken.toFixed(0)} damage.`);
            }
            return false;
        }

        return (
            projectile.life > 0 &&
            projectile.x > 0 &&
            projectile.x < WORLD.width &&
            projectile.y > 0 &&
            projectile.y < WORLD.height
        );
    });
}

function updateBossEntity(boss, deltaMs) {
    const zombieBossFight = state.phase === "boss-zombie" || boss.zombieBoss;
    const shipLikeBoss = (state.phase === "boss-ship" || (state.phase === "final-boss-rush" && !boss.dragonBoss)) && !zombieBossFight;
    const dragonLikeBoss = state.phase === "boss-dragon" || (state.phase === "final-boss-rush" && boss.dragonBoss);
    const target = isMultiplayerCoop() && state.rival.active &&
        distanceBetween(boss, state.rival) < distanceBetween(boss, state.player)
        ? state.rival
        : state.player;
    const previousX = boss.x;
    const previousY = boss.y;
    const shipAltitude = shipLikeBoss ? 138 : (dragonLikeBoss ? target.y - 46 : 200);
    const dx = target.x - boss.x;
    const dy = shipAltitude - boss.y;
    const length = Math.hypot(dx, dy) || 1;

    boss.x += (dx / length) * boss.speed * 1.35;
    boss.y += (dy / length) * boss.speed;
    clampEntityToObstacles(boss, previousX, previousY);
    boss.hitCooldown = Math.max(0, boss.hitCooldown - deltaMs);
    boss.pulse += 0.04;
    boss.projectileCooldown -= deltaMs;

    if (!shipLikeBoss && rectsOverlap(boss, target) && boss.hitCooldown <= 0 && target.hitCooldown <= 0) {
        const damageTaken = target === state.player
            ? applyIncomingDamage(boss, boss.damage, "boss")
            : applyDamageToRival(boss.damage, "boss");
        target.hitCooldown = 300;
        boss.hitCooldown = 680;
        writeLog("Boss", `Boss slammed ${target === state.player ? "you" : state.rival.name} for ${damageTaken.toFixed(0)} damage.`);
    }

    if ((shipLikeBoss || dragonLikeBoss) && boss.projectileCooldown <= 0) {
        const bossCenter = getCenter(boss);
        const targetCenter = getCenter(target);
        const shotDx = targetCenter.x - bossCenter.x;
        const shotDy = targetCenter.y - bossCenter.y;
        const shotLength = Math.hypot(shotDx, shotDy) || 1;
        state.projectiles.push({
            kind: boss.dragonBoss ? "dragon-fire" : "boss-shot",
            x: bossCenter.x,
            y: bossCenter.y + (boss.dragonBoss ? 28 : 12),
            vx: (shotDx / shotLength) * (boss.dragonBoss ? 5.2 : 5.8),
            vy: (shotDy / shotLength) * (boss.dragonBoss ? 5.2 : 5.8),
            damage: Math.ceil(boss.damage * (boss.dragonBoss ? 0.72 : 0.65)),
            life: 2600,
            sourceLabel: boss.dragonBoss ? "dragon" : "boss ship"
        });
        spawnEffect({
            type: "muzzle",
            x: bossCenter.x,
            y: bossCenter.y + (boss.dragonBoss ? 28 : 12),
            color: boss.dragonBoss ? "#ff8f4a" : "#ffbf73",
            life: 180,
            maxLife: 180
        });
        triggerShake(4);
        boss.projectileCooldown = boss.dragonBoss
            ? Math.max(420, 1180 - state.wave * 16)
            : Math.max(380, 1100 - state.wave * 18);
    }
}

function updateBoss(deltaMs) {
    if (((state.mode !== "pve" && state.mode !== "quest" && state.mode !== "zombie" && state.mode !== "bossrush") && !isMultiplayerCoop()) || (isMultiplayerCoop() && !multiplayer.isHost)) {
        return;
    }

    const activeBosses = [state.boss, ...state.extraBosses].filter((boss) => boss && boss.active);
    if (!activeBosses.length) {
        return;
    }

    activeBosses.forEach((boss) => updateBossEntity(boss, deltaMs));

    if (state.boss.active && state.boss.hp <= 0) {
        if (state.mode === "zombie" && state.boss.zombieBoss && !state.zombieFinaleTriggered) {
            state.boss.active = false;
            state.zombieFinaleTriggered = true;
            state.phase = "underworld-awakening";
            state.awakeningTimer = 3400;
            state.projectiles = [];
            writeLog("Boss", `${state.boss.name} falls... but its death cracks open the doors of the underworld.`);
            writeLog("Underworld", "The keep shakes. Ancient seals break and something far older starts to wake.");
            syncUi();
            return;
        }
        state.boss.active = false;
        writeLog("Boss", `${state.boss.name} has fallen.`);
    }

    state.extraBosses = state.extraBosses.filter((boss) => {
        if (boss.active && boss.hp <= 0) {
            writeLog("Boss", `${boss.name} has fallen.`);
            return false;
        }
        return boss.active;
    });

    const remainingBosses = [state.boss, ...state.extraBosses].filter((boss) => boss && boss.active);
    if (!remainingBosses.length) {
        if (state.mode === "bossrush") {
            advanceBossRush();
            return;
        }
        if (state.mode === "pve" && state.wave >= FINAL_PVE_WAVE) {
            state.victory = true;
            state.over = true;
            state.started = false;
            writeLog("Final Wave", "Wave 100 cleared. You defeated the final boss rush.");
            return;
        }
        advanceWave();
    }
}

function updateState(deltaMs) {
    if (!state.started || state.over) {
        return;
    }

    state.elapsedMs += deltaMs;

    if (state.phase === "alien-launch") {
        state.launchIntroTimer = Math.max(0, state.launchIntroTimer - deltaMs);
        updateEffects(deltaMs);
        if (state.launchIntroTimer <= 0) {
            state.phase = "town";
            writeLog(
                "Landing",
                state.questWorld === "alien"
                    ? "A hostile ship slams down onto the alien world and the invasion spills out."
                    : "A hostile ship lands at the edge of the world and evil troops spill out onto the planet."
            );
        }
        syncUi();
        return;
    }

    if (state.phase === "underworld-awakening") {
        state.awakeningTimer = Math.max(0, state.awakeningTimer - deltaMs);
        updateEffects(deltaMs);
        if (state.awakeningTimer <= 0) {
            state.phase = "boss-dragon";
            state.boss = createKartasouDragon();
            state.boss.active = true;
            state.boss.x = WORLD.width - s(420);
            state.boss.y = s(240);
            state.questKills = 0;
            writeLog("Underworld", "The underworld doors rip apart and the Dragon of Kartasou bursts free.");
            writeLog("Boss", "For centuries it guarded the underworld. Now it sees you as the intruder.");
        }
        syncUi();
        return;
    }

    updatePlayer(deltaMs);
    updateAreaEvents();
    ensureInfinitePveEnemies();
    updateEnemies(deltaMs);
    updateTownScouts(deltaMs);
    updateDragons(deltaMs);
    spawnBossIfNeeded(deltaMs);
    updateBoss(deltaMs);
    updateProjectiles(deltaMs);
    updateEffects(deltaMs);
    updateCamera();

    if (state.mode === "multiplayer") {
        multiplayer.lastSentAt += deltaMs;
        const syncInterval = multiplayer.gameMode === "versus"
            ? MULTIPLAYER_SYNC_MS.versus
            : (multiplayer.isHost ? MULTIPLAYER_SYNC_MS.coopHost : MULTIPLAYER_SYNC_MS.coopGuest);
        if (multiplayer.lastSentAt >= syncInterval) {
            multiplayer.lastSentAt = 0;
            sendMultiplayerState();
        }
    }

    if (state.player.hp <= 0) {
        state.player.hp = 0;
        state.over = true;
        state.started = false;
        ui.statusText.textContent = "Defeated";
        writeLog("System", `Game over. Final score: ${state.score}. Press Restart Run to try again.`);
        savePlayerProfile();
        clearSavedRun();
    }

    saveCurrentRun();
    savePlayerProfile();
    syncUi();
}

function syncUi() {
    if (!ui.hpFill || !ui.hpText || !ui.statusText || !ui.questText || !ui.enemyCount || !ui.timerText || !ui.bossFill || !ui.bossHpText || !ui.bossStatus || !ui.assistantMode || !ui.assistantText || !ui.arenaHint) {
        return;
    }
    const player = state.player;
    const boss = state.boss;
    const hpPercent = (player.hp / player.maxHp) * 100;
    const activeBosses = getActiveBosses();
    const totalBossHp = activeBosses.reduce((sum, entry) => sum + Math.max(0, entry.hp), 0);
    const totalBossMaxHp = activeBosses.reduce((sum, entry) => sum + entry.maxHp, 0) || boss.maxHp;
    const bossPercent = (totalBossHp / totalBossMaxHp) * 100;

    ui.hpFill.style.width = `${clamp(hpPercent, 0, 100)}%`;
    ui.hpText.textContent = `${Math.ceil(player.hp)} / ${player.maxHp}`;
    ui.damageText.textContent = player.damage.toFixed(0);
    ui.speedText.textContent = `${player.speed.toFixed(0)} / A${player.armor || 0}`;
    ui.waveText.textContent = state.wave.toString();
    ui.scoreText.textContent = state.score.toString();
    ui.goldText.textContent = state.player.gold.toString();
    ui.weaponText.textContent = state.player.weaponName;
    ui.dragonText.textContent = state.player.dragons.length
        ? state.player.dragons.map((dragon) => dragon.name.replace(" Dragon", "")).join(", ")
        : "None";
    if (ui.comboText) {
        ui.comboText.textContent = `${state.comboCount}x / ${getStyleRank(state.comboCount)}`;
    }
    ui.questText.textContent = state.mode === "training"
        ? `Training Wave ${state.wave}`
        : (state.premiumMode === "nightmare"
            ? `Nightmare Wave ${state.wave}`
        : (state.premiumMode === "alien-gauntlet"
            ? `Alien Gauntlet ${state.wave}`
        : (state.premiumMode === "legend-rush"
            ? `Legend Rush ${state.bossRushIndex + 1}/${Math.max(1, state.bossRushLineup.length)}`
        : (state.premiumMode === "dragon-storm"
            ? `Dragon Storm ${state.bossRushIndex + 1}/${Math.max(1, state.bossRushLineup.length)}`
        : (state.premiumMode === "zombie-last-stand"
            ? "Zombie Last Stand"
        : (state.premiumMode === "chaos-arena"
            ? `Chaos Arena ${state.wave}`
        : (state.mode === "bossrush"
            ? `Boss Rush ${state.bossRushIndex + 1}/${Math.max(1, state.bossRushLineup.length)}`
        : (state.mode === "pve"
            ? `PvE Survival Wave ${state.wave}`
        : (state.mode === "zombie"
            ? "Zombie Apocalypse"
        : (state.mode === "multiplayer"
            ? `${multiplayer.gameMode === "coop" ? "Co-op" : "Versus"} Arena`
            : `${state.wave}. ${getCurrentQuest().title}`))))))))));
    if (state.mode === "training") {
        ui.enemyCount.textContent = `Riders Left: ${state.enemies.length} | Cleared: ${state.trainingWaveCleared}`;
    } else if (state.premiumMode === "legend-rush" || state.premiumMode === "dragon-storm" || state.mode === "bossrush") {
        ui.enemyCount.textContent = state.boss.active
            ? `Boss ${state.bossRushIndex + 1}/${state.bossRushLineup.length}: ${state.boss.name}`
            : "Next boss incoming";
    } else if (state.premiumMode === "zombie-last-stand") {
        ui.enemyCount.textContent = state.boss.active
            ? `Plague Boss Active: ${state.boss.name}`
            : "Underworld doors opening";
    } else if (state.premiumMode === "chaos-arena") {
        ui.enemyCount.textContent = `Chaos Arena | Evil People: ${state.enemies.length} | Boss: ${state.boss.active ? state.boss.name : "Waiting"}`;
    } else if (state.mode === "pve") {
        ui.enemyCount.textContent = activeBosses.length
            ? `Boss Fight | Bosses Left: ${activeBosses.length} | Evil People: ${state.enemies.length}`
            : `Evil People: ${state.enemies.length}/${getPveEnemyTargetCount()} | Next Boss In: ${Math.max(0, getPveBossThreshold() - state.questKills)}`;
    } else if (state.mode === "multiplayer") {
        if (isMultiplayerCoop()) {
            const hostileCount = state.enemies.length + state.townScouts.length + activeBosses.length;
            ui.enemyCount.textContent = state.rival.active
                ? `Ally: ${state.rival.name} | ${getMultiplayerModeLabel()} Threats: ${hostileCount}`
                : `Room: ${multiplayer.room} | Waiting for your teammate`;
        } else {
            ui.enemyCount.textContent = state.rival.active
                ? `Opponent: ${state.rival.name} | Room: ${multiplayer.room}`
                : `Room: ${multiplayer.room} | Waiting for another player`;
        }
    } else if (state.mode === "zombie" && state.phase === "town") {
        ui.enemyCount.textContent = `Zombie Packs ${state.scoutsDefeated}/${state.scoutsGoal} defeated | Survivors and clues are optional`;
    } else if (state.mode === "zombie" && state.phase === "hunt") {
        ui.enemyCount.textContent = "The quarantine gate is open. Push into the keep.";
    } else if (state.mode === "zombie" && state.phase === "underworld-awakening") {
        ui.enemyCount.textContent = "The underworld doors are breaking open.";
    } else if (state.mode === "zombie" && (state.phase === "underground" || state.phase === "lair")) {
        ui.enemyCount.textContent = `Zombie Guards ${Math.min(state.questKills, getCurrentQuest().kills)}/${getCurrentQuest().kills}`;
    } else if (state.phase === "town") {
        ui.enemyCount.textContent = `Minions ${state.scoutsDefeated}/${state.scoutsGoal} defeated | Witnesses and clues are optional`;
    } else if (state.phase === "hunt") {
        ui.enemyCount.textContent = "The gate is open. Walk through the fortress door.";
    } else if (state.phase === "underground" || state.phase === "lair") {
        ui.enemyCount.textContent = `Guards: ${Math.min(state.questKills, getCurrentQuest().kills)}/${getCurrentQuest().kills}`;
    } else {
        ui.enemyCount.textContent = `Boss Fight: ${state.boss.active ? (state.boss.dragonBoss ? "Fortress Dragon" : "Ship Assault") : "Preparing"}`;
    }
    ui.timerText.textContent = `Time: ${(state.elapsedMs / 1000).toFixed(1)}s`;
    ui.bossFill.style.width = `${activeBosses.length ? clamp(bossPercent, 0, 100) : 100}%`;
    ui.bossHpText.textContent = `${Math.ceil(Math.max(0, totalBossHp))} / ${totalBossMaxHp}`;

    if (state.over && state.victory) {
        ui.statusText.textContent = "Champion";
    } else if (state.over) {
        ui.statusText.textContent = "Defeated";
    } else if (state.started) {
        ui.statusText.textContent = state.comboCount >= 5
            ? `${getStyleRank(state.comboCount)} ${state.comboCount}x`
            : (player.blocking ? "Blocking" : (player.attackCooldown > 0 ? "Recovering" : "In Battle"));
    } else {
        ui.statusText.textContent = "Ready";
    }

    if (state.mode === "training") {
        ui.bossStatus.textContent = "Rider Drill";
        ui.bossStatus.classList.remove("muted");
    } else if (state.mode === "pve") {
        ui.bossStatus.textContent = state.phase === "final-boss-rush"
            ? `Final Boss Rush (${activeBosses.length})`
            : (activeBosses.length ? activeBosses[0].name : "Preparing");
        ui.bossStatus.classList.remove("muted");
    } else if (state.mode === "multiplayer") {
        ui.bossStatus.textContent = isMultiplayerCoop()
            ? (activeBosses.length ? activeBosses[0].name : (state.rival.active ? `${state.rival.name} Ready` : "Waiting"))
            : (state.rival.active ? state.rival.name : "Waiting");
        ui.bossStatus.classList.remove("muted");
    } else if (boss.active) {
        ui.bossStatus.textContent = boss.name || "Boss";
        ui.bossStatus.classList.remove("muted");
    } else {
        ui.bossStatus.textContent = "Dormant";
        ui.bossStatus.classList.add("muted");
    }

    const assistant = getAssistantSuggestion();
    ui.assistantMode.textContent = assistant.mode;
    ui.assistantText.textContent = assistant.text;
    if (assistant.muted) {
        ui.assistantMode.classList.add("muted");
    } else {
        ui.assistantMode.classList.remove("muted");
    }

    updateShopAvailability();
    if (state.mode === "training") {
        ui.arenaHint.textContent = "Training mode: defeat the riders. Each cleared wave gives +1 damage and +1 speed.";
    } else if (state.premiumMode === "nightmare") {
        ui.arenaHint.textContent = "Premium Nightmare Survival: harder enemies, faster bosses, and nonstop pressure.";
    } else if (state.premiumMode === "alien-gauntlet") {
        ui.arenaHint.textContent = "Premium Alien Gauntlet: jump straight into the alien world and clear the invasion.";
    } else if (state.premiumMode === "legend-rush") {
        ui.arenaHint.textContent = "Premium Legend Boss Rush: every boss is stronger. Beat the whole lineup to win.";
    } else if (state.premiumMode === "dragon-storm") {
        ui.arenaHint.textContent = "Premium Dragon Storm: every round is a dragon fight. Stay moving and keep your shield ready.";
    } else if (state.premiumMode === "zombie-last-stand") {
        ui.arenaHint.textContent = "Premium Zombie Last Stand: face the plague boss right away and survive the underworld aftermath.";
    } else if (state.premiumMode === "chaos-arena") {
        ui.arenaHint.textContent = "Premium Chaos Arena: a boss and a full enemy pack attack together from the start.";
    } else if (state.mode === "bossrush") {
        ui.arenaHint.textContent = "Boss Rush: defeat every boss one by one. Heal a little after each win and get ready for the next round.";
    } else if (state.mode === "pve") {
        ui.arenaHint.textContent = state.phase === "final-boss-rush"
            ? "Final level 100: many bosses are active at once. Keep moving, block hard hits, and finish every boss to win."
            : (activeBosses.length
                ? "Endless PvE boss fight: dodge, block, and strike when the boss comes into range."
                : "Endless PvE survival: each wave adds more evil enemies and tougher bosses. Survive and force out the next boss.");
    } else if (state.mode === "multiplayer") {
        ui.arenaHint.textContent = multiplayer.gameMode === "bossraid"
            ? "Premium Boss Raid: open the same room in another tab and team up to beat the boss."
            : (multiplayer.gameMode === "dragonhunt"
                ? "Premium Dragon Hunt: open the same room in another tab and bring down the dragon together."
                : (multiplayer.gameMode === "coop"
                    ? "Co-op room mode: open the same room in another tab and clear the bad guys together."
                    : "Versus room mode: open the same room in another tab and fight your opponent with Space."));
    } else if (state.mode === "zombie" && state.phase === "town") {
        ui.arenaHint.textContent = "Zombie Apocalypse: clear the village, break into the keep, and stop the plague before it spreads.";
    } else if (state.mode === "zombie" && state.phase === "hunt") {
        ui.arenaHint.textContent = "The quarantine gate is open. Push through the dead and enter the keep.";
    } else if (state.mode === "zombie" && state.phase === "underworld-awakening") {
        ui.arenaHint.textContent = "The plague lord's death opened the underworld by accident. Hold your ground.";
    } else if (state.mode === "zombie" && state.phase === "boss-zombie") {
        ui.arenaHint.textContent = "The plague boss is loose. Block heavy hits, keep moving, and kill him to save the village.";
    } else if (state.phase === "town") {
        ui.arenaHint.textContent = "Push across the world map, clear the minions, and open the fortress path.";
    } else if (state.phase === "hunt") {
        ui.arenaHint.textContent = "Cross the route and walk through the fortress door to challenge the boss.";
    } else if (state.phase === "boss-ship") {
        ui.arenaHint.textContent = "Use B to flip through ship fire, then strike when the boss comes close.";
    } else if (state.phase === "boss-dragon") {
        ui.arenaHint.textContent = "The fortress dragon is loose. Use B to flip, J to jump, and attack when it dives in.";
    } else {
        ui.arenaHint.textContent = "Use Space to fight through the lair guards, B to flip, and J to jump.";
    }
}

function drawBackdrop() {
    const ring = state.ringBounds;
    const theme = getQuestPlaceTheme(state.questIndex || 0, state.questWorld || "world1");
    const isQuestOneWorld = state.questWorld === "world1" && state.questIndex === 0;
    const stormActive = state.enemies.some((enemy) => enemy.stormSpirit);
    const waterActive = state.enemies.some((enemy) => enemy.waterSpirit);
    const earthActive = state.enemies.some((enemy) => enemy.earthSpirit);
    if (state.phase === "town" || state.phase === "hunt") {
        const sky = ctx.createLinearGradient(0, 0, 0, WORLD.height);
        sky.addColorStop(0, theme.sky[0]);
        sky.addColorStop(0.25, theme.sky[1]);
        sky.addColorStop(0.55, theme.sky[2]);
        sky.addColorStop(1, theme.sky[3]);
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, WORLD.width, WORLD.height);

        if (isQuestOneWorld) {
            for (let cloud = 0; cloud < 7; cloud += 1) {
                const cloudX = 240 + cloud * 720;
                const cloudY = 180 + (cloud % 3) * 70;
                ctx.fillStyle = "rgba(16, 16, 22, 0.58)";
                ctx.beginPath();
                ctx.ellipse(cloudX, cloudY, 180, 58, 0, 0, Math.PI * 2);
                ctx.ellipse(cloudX + 120, cloudY - 16, 140, 50, 0, 0, Math.PI * 2);
                ctx.ellipse(cloudX - 110, cloudY + 10, 130, 46, 0, 0, Math.PI * 2);
                ctx.fill();
            }
        } else {
            const sunGlow = ctx.createRadialGradient(620, 220, 40, 620, 220, 320);
            sunGlow.addColorStop(0, "rgba(255, 190, 109, 0.78)");
            sunGlow.addColorStop(1, "rgba(255, 190, 109, 0)");
            ctx.fillStyle = sunGlow;
            ctx.fillRect(280, 0, 700, 520);
        }

        ctx.fillStyle = isQuestOneWorld ? "#44352f" : "#5d4a34";
        ctx.fillRect(0, ring.top - 10, WORLD.width, WORLD.height - ring.top + 20);

        const fieldShade = ctx.createLinearGradient(0, ring.top, 0, WORLD.height);
        fieldShade.addColorStop(0, "rgba(255,214,162,0.08)");
        fieldShade.addColorStop(0.3, "rgba(255,255,255,0)");
        fieldShade.addColorStop(1, "rgba(0,0,0,0.22)");
        ctx.fillStyle = fieldShade;
        ctx.fillRect(0, ring.top, WORLD.width, WORLD.height - ring.top);

        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        for (let dune = 0; dune < 6; dune += 1) {
            ctx.beginPath();
            ctx.ellipse(300 + dune * 560, 1480 - (dune % 2) * 110, 360, 90, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
        ctx.lineWidth = 1;
        for (let x = 90; x < WORLD.width; x += 80) {
            ctx.beginPath();
            ctx.moveTo(x, ring.top);
            ctx.lineTo(x + 50, WORLD.height - 120);
            ctx.stroke();
        }

        ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
        ctx.lineWidth = 2;
        for (let x = 100; x < WORLD.width; x += 180) {
            ctx.beginPath();
            ctx.moveTo(x, ring.top);
            ctx.lineTo(x, WORLD.height - 120);
            ctx.stroke();
        }
        for (let y = ring.top + 80; y < WORLD.height; y += 160) {
            ctx.beginPath();
            ctx.moveTo(80, y);
            ctx.lineTo(WORLD.width - 80, y);
            ctx.stroke();
        }

        state.worldAreas.forEach((area) => {
            const areaFill = ctx.createLinearGradient(area.x, area.y, area.x, area.y + area.height);
            areaFill.addColorStop(0, area.tone);
            areaFill.addColorStop(1, "rgba(40, 38, 45, 0.9)");
            ctx.fillStyle = areaFill;
            ctx.fillRect(area.x, area.y, area.width, area.height);
            ctx.strokeStyle = "rgba(102, 216, 255, 0.14)";
            ctx.lineWidth = 6;
            ctx.strokeRect(area.x, area.y, area.width, area.height);
            ctx.fillStyle = "rgba(110, 225, 255, 0.08)";
            ctx.fillRect(area.x + 12, area.y + 12, area.width - 24, 20);
            ctx.fillStyle = "rgba(228, 238, 255, 0.94)";
            ctx.font = "700 38px Trebuchet MS";
            ctx.textAlign = "left";
            ctx.fillText(area.name, area.x + 24, area.y + 48);
        });

        ctx.strokeStyle = "rgba(85, 77, 70, 0.6)";
        ctx.lineWidth = 56;
        ctx.beginPath();
        ctx.moveTo(s(160), s(1120));
        ctx.lineTo(s(760), s(980));
        ctx.lineTo(s(1360), s(860));
        ctx.lineTo(s(2040), s(1010));
        ctx.lineTo(s(2740), s(940));
        ctx.lineTo(s(3240), s(820));
        ctx.stroke();

        ctx.strokeStyle = "rgba(77, 224, 255, 0.4)";
        ctx.lineWidth = 10;
        ctx.setLineDash([12, 16]);
        ctx.beginPath();
        ctx.moveTo(s(160), s(1120));
        ctx.lineTo(s(760), s(980));
        ctx.lineTo(s(1360), s(860));
        ctx.lineTo(s(2040), s(1010));
        ctx.lineTo(s(2740), s(940));
        ctx.lineTo(s(3240), s(820));
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = "rgba(40, 48, 61, 0.96)";
        ctx.fillRect(s(3120), s(640), s(180), s(140));
        ctx.fillStyle = "rgba(116, 230, 255, 0.94)";
        ctx.font = "700 20px Trebuchet MS";
        ctx.fillText(theme.gate, s(3140), s(620));

        if (stormActive) {
            ctx.fillStyle = "rgba(200, 235, 255, 0.06)";
            ctx.fillRect(0, 0, WORLD.width, WORLD.height);
        }
        if (waterActive) {
            ctx.strokeStyle = "rgba(103, 219, 255, 0.18)";
            ctx.lineWidth = 4;
            for (let wave = 0; wave < 6; wave += 1) {
                ctx.beginPath();
                for (let x = ring.left; x <= ring.right; x += 28) {
                    const y = 1380 + wave * 34 + Math.sin((x + state.elapsedMs * 0.2 + wave * 18) * 0.02) * 10;
                    if (x === ring.left) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
            }
        }
        if (earthActive) {
            ctx.fillStyle = "rgba(80, 56, 34, 0.42)";
            for (let rock = 0; rock < 14; rock += 1) {
                const rockX = 640 + rock * 180;
                const rockY = 1460 + (rock % 3) * 60;
                ctx.beginPath();
                ctx.ellipse(rockX, rockY, 22 + (rock % 2) * 8, 12 + (rock % 3) * 4, 0.3, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        const splatters = [
            [s(540), s(1110), isQuestOneWorld ? 34 : 24],
            [s(880), s(1020), isQuestOneWorld ? 28 : 20],
            [s(1180), s(930), isQuestOneWorld ? 32 : 22],
            [s(1610), s(880), isQuestOneWorld ? 26 : 18],
            [s(2140), s(1010), isQuestOneWorld ? 38 : 24],
            [s(2570), s(960), isQuestOneWorld ? 30 : 21]
        ];
        splatters.forEach(([x, y, size]) => {
            ctx.fillStyle = isQuestOneWorld ? "rgba(104, 8, 12, 0.54)" : "rgba(92, 12, 16, 0.3)";
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.arc(x - size * 0.8, y + 8, size * 0.4, 0, Math.PI * 2);
            ctx.arc(x + size * 0.9, y - 10, size * 0.34, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = isQuestOneWorld ? "rgba(56, 0, 0, 0.35)" : "rgba(48, 2, 2, 0.16)";
            ctx.lineWidth = isQuestOneWorld ? 3 : 2;
            ctx.beginPath();
            ctx.moveTo(x - size * 0.2, y + size * 0.6);
            ctx.lineTo(x - size * 0.4, y + size * 1.7);
            ctx.moveTo(x + size * 0.3, y + size * 0.4);
            ctx.lineTo(x + size * 0.2, y + size * 1.9);
            ctx.stroke();
        });
        return;
    }

    if (state.phase === "underground") {
        const cave = ctx.createLinearGradient(0, 0, 0, WORLD.height);
        cave.addColorStop(0, "#1b1713");
        cave.addColorStop(0.4, "#30251e");
        cave.addColorStop(1, "#0f0b09");
        ctx.fillStyle = cave;
        ctx.fillRect(0, 0, WORLD.width, WORLD.height);
        ctx.fillStyle = "#47362b";
        ctx.fillRect(ring.left, ring.top, ring.right - ring.left, ring.bottom - ring.top);
        ctx.strokeStyle = "rgba(255, 165, 88, 0.14)";
        ctx.lineWidth = 3;
        for (let x = ring.left + 30; x < ring.right - 30; x += 70) {
            ctx.beginPath();
            ctx.moveTo(x, ring.top);
            ctx.lineTo(x + 16, ring.bottom);
            ctx.stroke();
        }
        return;
    }

    const gradient = ctx.createLinearGradient(0, 0, 0, WORLD.height);
    gradient.addColorStop(0, "#0f1727");
    gradient.addColorStop(0.55, "#152235");
    gradient.addColorStop(1, "#080d16");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, WORLD.width, WORLD.height);

    for (let i = 0; i < 140; i += 1) {
        const starX = (i * 197) % WORLD.width;
        const starY = 40 + ((i * 91) % 360);
        const size = i % 7 === 0 ? 2.2 : 1.2;
        ctx.fillStyle = i % 9 === 0 ? "rgba(255, 244, 214, 0.85)" : "rgba(220, 232, 255, 0.72)";
        ctx.beginPath();
        ctx.arc(starX, starY, size, 0, Math.PI * 2);
        ctx.fill();
    }

    const crowdGradient = ctx.createLinearGradient(0, 0, 0, ring.top);
    crowdGradient.addColorStop(0, "rgba(4, 8, 16, 0.95)");
    crowdGradient.addColorStop(1, "rgba(18, 24, 39, 0.55)");
    ctx.fillStyle = crowdGradient;
    ctx.fillRect(0, 0, WORLD.width, ring.top + 14);

    ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
    ctx.fillRect(ring.left - 18, ring.top - 18, ring.right - ring.left + 36, ring.bottom - ring.top + 36);

    const matGradient = ctx.createLinearGradient(ring.left, ring.top, ring.right, ring.bottom);
    matGradient.addColorStop(0, "#d9d7d0");
    matGradient.addColorStop(0.5, "#b8b3ab");
    matGradient.addColorStop(1, "#8d8881");
    ctx.fillStyle = matGradient;
    ctx.fillRect(ring.left, ring.top, ring.right - ring.left, ring.bottom - ring.top);

    for (let i = 0; i < 3; i += 1) {
        const ropeYTop = ring.top + 18 + i * 22;
        const ropeYBottom = ring.bottom - 62 + i * 22;
        ctx.strokeStyle = i === 1 ? "rgba(255, 83, 116, 0.8)" : "rgba(133, 210, 255, 0.78)";
        ctx.lineWidth = 4;

        ctx.beginPath();
        ctx.moveTo(ring.left - 12, ropeYTop);
        ctx.lineTo(ring.right + 12, ropeYTop);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(ring.left - 12, ropeYBottom);
        ctx.lineTo(ring.right + 12, ropeYBottom);
        ctx.stroke();
    }

    ctx.strokeStyle = "rgba(245, 236, 221, 0.9)";
    ctx.lineWidth = 8;
    ctx.strokeRect(ring.left, ring.top, ring.right - ring.left, ring.bottom - ring.top);

    const corners = [
        [ring.left, ring.top, "#ff5f8f"],
        [ring.right, ring.top, "#4ed0ff"],
        [ring.left, ring.bottom, "#4ed0ff"],
        [ring.right, ring.bottom, "#ff5f8f"]
    ];

    corners.forEach(([x, y, color]) => {
        ctx.fillStyle = color;
        ctx.fillRect(x - 14, y - 14, 28, 28);
    });

    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
    ctx.lineWidth = 2;
    for (let x = ring.left + 45; x < ring.right - 45; x += 64) {
        ctx.beginPath();
        ctx.moveTo(x, ring.top + 8);
        ctx.lineTo(x, ring.bottom - 8);
        ctx.stroke();
    }
}

function drawIsoBox(x, y, width, depth, height, colors) {
    const topRise = height * 0.55;

    ctx.save();
    ctx.fillStyle = colors.top;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width + depth, y - topRise);
    ctx.lineTo(x + depth, y - topRise);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = colors.left;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + depth, y - topRise);
    ctx.lineTo(x + depth, y + height - topRise);
    ctx.lineTo(x, y + height);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = colors.right;
    ctx.beginPath();
    ctx.moveTo(x + width, y);
    ctx.lineTo(x + width + depth, y - topRise);
    ctx.lineTo(x + width + depth, y + height - topRise);
    ctx.lineTo(x + width, y + height);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

function drawGroundShadow(x, y, radiusX, radiusY, alpha = 0.2) {
    ctx.save();
    const shadow = ctx.createRadialGradient(x, y, radiusX * 0.18, x, y, radiusX);
    shadow.addColorStop(0, `rgba(0, 0, 0, ${alpha})`);
    shadow.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = shadow;
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX, radiusY, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

function drawStoneTexture(x, y, width, height, lineColor) {
    ctx.save();
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 1.2;
    for (let row = y + 10; row < y + height - 8; row += 16) {
        ctx.beginPath();
        ctx.moveTo(x + 6, row);
        ctx.lineTo(x + width - 6, row);
        ctx.stroke();
    }
    for (let col = x + 10; col < x + width - 8; col += 20) {
        ctx.beginPath();
        ctx.moveTo(col, y + 6);
        ctx.lineTo(col + (col % 40 === 0 ? 4 : -4), y + height - 6);
        ctx.stroke();
    }
    ctx.restore();
}

function drawWindowGlow(x, y, width, height) {
    ctx.save();
    const glass = ctx.createLinearGradient(x, y, x, y + height);
    glass.addColorStop(0, "rgba(255, 226, 162, 0.95)");
    glass.addColorStop(1, "rgba(137, 95, 52, 0.95)");
    ctx.fillStyle = glass;
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = "rgba(80, 46, 20, 0.55)";
    ctx.lineWidth = 1.4;
    ctx.strokeRect(x, y, width, height);
    ctx.beginPath();
    ctx.moveTo(x + width / 2, y);
    ctx.lineTo(x + width / 2, y + height);
    ctx.moveTo(x, y + height / 2);
    ctx.lineTo(x + width, y + height / 2);
    ctx.stroke();
    ctx.restore();
}

function drawDoor(x, y, width, height, palette = {}) {
    const frame = palette.frame || "#4f3423";
    const panelTop = palette.panelTop || "#7a5136";
    const panelBottom = palette.panelBottom || "#4f2f1f";
    const inset = palette.inset || "#8d6547";
    const handle = palette.handle || "#d7b56e";
    const arch = palette.arch || null;

    ctx.save();
    if (arch) {
        ctx.fillStyle = arch;
        ctx.beginPath();
        ctx.roundRect(x - 4, y - 6, width + 8, height + 10, 8);
        ctx.fill();
    }

    ctx.fillStyle = frame;
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, 6);
    ctx.fill();

    const panel = ctx.createLinearGradient(x, y, x, y + height);
    panel.addColorStop(0, panelTop);
    panel.addColorStop(1, panelBottom);
    ctx.fillStyle = panel;
    ctx.beginPath();
    ctx.roundRect(x + 3, y + 3, width - 6, height - 6, 4);
    ctx.fill();

    ctx.strokeStyle = "rgba(255,255,255,0.18)";
    ctx.lineWidth = 1.2;
    ctx.stroke();

    ctx.strokeStyle = "rgba(46, 24, 14, 0.45)";
    ctx.lineWidth = 1.2;
    ctx.strokeRect(x + 7, y + 10, width - 14, height * 0.32);
    ctx.strokeRect(x + 7, y + height * 0.48, width - 14, height * 0.32);

    ctx.strokeStyle = inset;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + width / 2, y + 6);
    ctx.lineTo(x + width / 2, y + height - 6);
    ctx.stroke();

    ctx.fillStyle = handle;
    ctx.beginPath();
    ctx.arc(x + width * 0.72, y + height * 0.54, 2.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

function drawTerrainHeights() {
    if (state.phase !== "town" && state.phase !== "hunt") {
        return;
    }

    const terraces = [
        { x: s(640), y: s(650), width: s(380), height: s(120), depth: s(28), top: "#97b27c", left: "#5f7650", right: "#76905f" },
        { x: s(1680), y: s(1140), width: s(420), height: s(140), depth: s(30), top: "#88a06f", left: "#566848", right: "#6f845c" },
        { x: s(2860), y: s(610), width: s(440), height: s(160), depth: s(34), top: "#9ea7b8", left: "#697183", right: "#818a9d" }
    ];

    terraces.forEach((terrace) => {
        drawIsoBox(terrace.x, terrace.y, terrace.width, terrace.depth, terrace.height, {
            top: terrace.top,
            left: terrace.left,
            right: terrace.right
        });
    });

    ctx.save();
    ctx.fillStyle = "#cbb596";
    for (let step = 0; step < 6; step += 1) {
        drawIsoBox(s(3010 + step * 8), s(930 - step * 12), s(84), s(12), s(18), {
            top: "#d8c8aa",
            left: "#8f7d62",
            right: "#b5a184"
        });
    }
    ctx.fillStyle = "rgba(255, 232, 188, 0.92)";
    ctx.font = "700 18px Trebuchet MS";
    ctx.fillText("High Road", s(2930), s(900));
    ctx.restore();
}

function drawTownProps() {
    if (state.phase !== "town" && state.phase !== "hunt") {
        return;
    }
    const theme = getQuestPlaceTheme(state.questIndex || 0, state.questWorld || "world1");

    state.travelBarriers.forEach((barrier) => {
        ctx.save();
        if (barrier.type === "river") {
            const riverGradient = ctx.createLinearGradient(barrier.x, 0, barrier.x + barrier.width, 0);
            riverGradient.addColorStop(0, "#1a2530");
            riverGradient.addColorStop(0.35, "#2d6f8e");
            riverGradient.addColorStop(0.55, "#78e0ff");
            riverGradient.addColorStop(1, "#172736");
            ctx.fillStyle = riverGradient;
            ctx.fillRect(barrier.x, barrier.y, barrier.width, barrier.height);
            ctx.strokeStyle = "rgba(131, 233, 255, 0.34)";
            ctx.lineWidth = 1.5;
            for (let y = barrier.y + 20; y < barrier.y + barrier.height; y += 28) {
                ctx.beginPath();
                ctx.moveTo(barrier.x + 10, y);
                ctx.quadraticCurveTo(barrier.x + barrier.width / 2, y - 8, barrier.x + barrier.width - 10, y);
                ctx.stroke();
            }
        } else if (barrier.type === "forest") {
            ctx.fillStyle = "#2d2d39";
            ctx.fillRect(barrier.x, barrier.y, barrier.width, barrier.height);
            ctx.fillStyle = "rgba(22, 32, 41, 0.72)";
            for (let y = barrier.y + 20; y < barrier.y + barrier.height; y += 36) {
                ctx.beginPath();
                ctx.arc(barrier.x + 40, y, 20, 0, Math.PI * 2);
                ctx.arc(barrier.x + 88, y + 8, 22, 0, Math.PI * 2);
                ctx.arc(barrier.x + 132, y - 6, 18, 0, Math.PI * 2);
                ctx.fill();
            }
        } else {
            ctx.fillStyle = "#697382";
            ctx.fillRect(barrier.x, barrier.y, barrier.width, barrier.height);
            ctx.fillStyle = "#9ab4c9";
            ctx.fillRect(barrier.x + 18, barrier.y, 22, barrier.height);
            ctx.fillRect(barrier.x + barrier.width - 40, barrier.y, 22, barrier.height);
        }
        ctx.restore();
    });

    ctx.save();
    drawIsoBox(s(1080), s(780), s(140), s(30), s(200), {
        top: "#7f8a95",
        left: "#46515f",
        right: "#61707d"
    });
    ctx.fillStyle = "#91dfff";
    for (let x = s(1094); x < s(1210); x += s(22)) {
        ctx.fillRect(x, s(790), s(6), s(188));
    }
    ctx.fillStyle = "rgba(130, 232, 255, 0.95)";
    ctx.font = "700 18px Trebuchet MS";
    ctx.fillText(theme.bridge, s(1060), s(760));

    drawIsoBox(s(1940), s(840), s(170), s(26), s(200), {
        top: "#5a6775",
        left: "#2f3944",
        right: "#465464"
    });
    ctx.fillStyle = "rgba(130, 232, 255, 0.95)";
    ctx.fillText(theme.pass, s(1940), s(820));

    drawIsoBox(s(2920), s(740), s(180), s(34), s(180), {
        top: "#6d7788",
        left: "#3a4450",
        right: "#546171"
    });
    ctx.fillStyle = "#9ce7ff";
    ctx.fillRect(s(2982), s(748), s(56), s(172));
    ctx.fillStyle = "rgba(130, 232, 255, 0.95)";
    ctx.fillText(theme.gate, s(2910), s(720));
    ctx.restore();

    drawTerrainHeights();

    state.townProps.forEach((prop) => {
        if (prop.type === "house") {
            drawGroundShadow(prop.x + prop.width / 2 + 20, prop.y + prop.height + 8, prop.width * 0.72, 22, 0.16);
            drawIsoBox(prop.x, prop.y, prop.width, 24, prop.height, {
                top: "#887969",
                left: "#4d433c",
                right: "#665950"
            });
            ctx.fillStyle = "#5a4d45";
            ctx.beginPath();
            ctx.moveTo(prop.x + 6, prop.y);
            ctx.lineTo(prop.x + prop.width / 2 + 12, prop.y - 42);
            ctx.lineTo(prop.x + prop.width + 28, prop.y);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = "rgba(168, 234, 255, 0.18)";
            ctx.beginPath();
            ctx.moveTo(prop.x + 18, prop.y - 4);
            ctx.lineTo(prop.x + prop.width / 2 + 10, prop.y - 36);
            ctx.lineTo(prop.x + prop.width / 2 + 18, prop.y - 28);
            ctx.lineTo(prop.x + 26, prop.y);
            ctx.closePath();
            ctx.fill();
            drawWindowGlow(prop.x + 18, prop.y + 28, 16, 24);
            drawWindowGlow(prop.x + prop.width - 34, prop.y + 32, 14, 20);
            drawDoor(
                prop.x + prop.width * 0.42,
                prop.y + prop.height * 0.42,
                20,
                prop.height * 0.58,
                {
                    frame: "#3b271b",
                    panelTop: "#8f633f",
                    panelBottom: "#583623",
                    inset: "#a87a50",
                    handle: "#e2bf74",
                    arch: "rgba(73, 49, 32, 0.82)"
                }
            );
        } else if (prop.type === "well") {
            drawGroundShadow(prop.x + prop.width / 2 + 8, prop.y + prop.height + 6, prop.width * 0.66, 16, 0.18);
            drawIsoBox(prop.x, prop.y, prop.width, 14, prop.height, {
                top: "#b0a59f",
                left: "#6d6661",
                right: "#908883"
            });
            ctx.strokeStyle = "rgba(84, 68, 58, 0.8)";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(prop.x + 10, prop.y + 10);
            ctx.lineTo(prop.x + 10, prop.y - 22);
            ctx.moveTo(prop.x + prop.width - 8, prop.y + 10);
            ctx.lineTo(prop.x + prop.width - 8, prop.y - 22);
            ctx.moveTo(prop.x + 10, prop.y - 22);
            ctx.lineTo(prop.x + prop.width - 8, prop.y - 22);
            ctx.stroke();
            ctx.fillStyle = "#2a4f67";
            ctx.beginPath();
            ctx.ellipse(prop.x + prop.width / 2 + 7, prop.y + 14, prop.width * 0.3, 10, 0, 0, Math.PI * 2);
            ctx.fill();
        } else if (prop.type === "castle") {
            const castleOpen = isCastleDoorOpen();
            drawGroundShadow(prop.x + prop.width / 2 + 30, prop.y + prop.height + 10, prop.width * 0.78, 28, 0.22);
            drawIsoBox(prop.x, prop.y, prop.width, 36, prop.height, {
                top: "#9aa5b8",
                left: "#556172",
                right: "#737f93"
            });
            drawIsoBox(prop.x + 8, prop.y - 26, 28, 12, 38, {
                top: "#c1c7d2",
                left: "#757c87",
                right: "#979daa"
            });
            drawIsoBox(prop.x + prop.width - 34, prop.y - 26, 28, 12, 38, {
                top: "#c1c7d2",
                left: "#757c87",
                right: "#979daa"
            });
            drawStoneTexture(prop.x + 2, prop.y + 8, prop.width - 10, prop.height - 12, "rgba(67, 74, 87, 0.38)");
            if (castleOpen) {
                ctx.fillStyle = "rgba(20, 22, 28, 0.94)";
                ctx.beginPath();
                ctx.roundRect(prop.x + 56, prop.y + 42, 52, prop.height - 40, 8);
                ctx.fill();
                ctx.fillStyle = "rgba(130, 232, 255, 0.18)";
                ctx.fillRect(prop.x + 62, prop.y + 48, 40, 12);
                ctx.strokeStyle = "rgba(157, 230, 255, 0.45)";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(prop.x + 58, prop.y + 46);
                ctx.lineTo(prop.x + 106, prop.y + 46);
                ctx.stroke();
            } else {
                drawDoor(
                    prop.x + 56,
                    prop.y + 42,
                    52,
                    prop.height - 40,
                    {
                        frame: "#2b201e",
                        panelTop: "#6c4a3a",
                        panelBottom: "#3f261f",
                        inset: "#967157",
                        handle: "#f0cf85",
                        arch: "rgba(79, 82, 91, 0.88)"
                    }
                );
            }
            drawWindowGlow(prop.x + 18, prop.y + 26, 16, 18);
            drawWindowGlow(prop.x + prop.width - 38, prop.y + 28, 16, 18);
        } else {
            drawGroundShadow(prop.x + prop.width / 2 + 8, prop.y + prop.height + 4, prop.width * 0.64, 14, 0.18);
            drawIsoBox(prop.x, prop.y, prop.width, 18, prop.height, {
                top: "#75685d",
                left: "#4a4038",
                right: "#61574f"
            });
            ctx.strokeStyle = "#82dbff";
            ctx.strokeRect(prop.x + 6, prop.y + 10, prop.width - 12, prop.height - 14);
        }
    });
}

function drawEvidenceSpots() {
    if (state.phase !== "town") {
        return;
    }

    state.evidenceSpots.forEach((spot) => {
        if (spot.found) {
            return;
        }

        ctx.save();
        ctx.fillStyle = "rgba(255, 214, 120, 0.92)";
        ctx.beginPath();
        ctx.arc(spot.x + spot.width / 2, spot.y + spot.height / 2, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 244, 196, 0.9)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(spot.x + spot.width / 2, spot.y + spot.height / 2, 18 + Math.sin(state.elapsedMs / 180) * 3, 0, Math.PI * 2);
        ctx.stroke();
        if (distanceBetween(state.player, spot) < 72) {
            ctx.fillStyle = "rgba(255, 240, 187, 0.98)";
            ctx.font = "700 14px Trebuchet MS";
            ctx.textAlign = "center";
            ctx.fillText("Press E to inspect", spot.x + spot.width / 2, spot.y - 8);
        }
        ctx.restore();
    });
}

function drawObstacles() {
    state.obstacles.forEach((obstacle) => {
        ctx.save();
        drawGroundShadow(
            obstacle.x + obstacle.width / 2,
            obstacle.y + obstacle.height + 10,
            obstacle.width * 0.56,
            obstacle.type === "pillar" ? 14 : 10,
            0.2
        );
        if (obstacle.type === "pillar") {
            const pillarGradient = ctx.createLinearGradient(
                obstacle.x,
                obstacle.y,
                obstacle.x + obstacle.width,
                obstacle.y + obstacle.height
            );
            pillarGradient.addColorStop(0, "#b7b0a8");
            pillarGradient.addColorStop(0.5, "#8b847c");
            pillarGradient.addColorStop(1, "#615b56");
            ctx.fillStyle = pillarGradient;
            ctx.beginPath();
            ctx.roundRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height, 18);
            ctx.fill();
            ctx.shadowColor = "rgba(0,0,0,0.28)";
            ctx.shadowBlur = 12;
            ctx.fillStyle = "rgba(44, 36, 32, 0.22)";
            ctx.beginPath();
            ctx.ellipse(
                obstacle.x + obstacle.width / 2,
                obstacle.y + obstacle.height + 8,
                obstacle.width * 0.45,
                10,
                0,
                0,
                Math.PI * 2
            );
            ctx.fill();
            ctx.fillStyle = "rgba(255,255,255,0.14)";
            ctx.fillRect(obstacle.x + 12, obstacle.y + 10, 10, obstacle.height - 20);
            ctx.fillRect(obstacle.x + obstacle.width - 22, obstacle.y + 10, 8, obstacle.height - 20);
            drawStoneTexture(obstacle.x + 8, obstacle.y + 8, obstacle.width - 16, obstacle.height - 16, "rgba(70, 63, 58, 0.22)");
        } else {
            ctx.fillStyle = "#6e4a2c";
            ctx.beginPath();
            ctx.roundRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height, 12);
            ctx.fill();
            ctx.strokeStyle = "rgba(245, 216, 164, 0.38)";
            ctx.lineWidth = 3;
            ctx.strokeRect(obstacle.x + 6, obstacle.y + 6, obstacle.width - 12, obstacle.height - 12);
            ctx.beginPath();
            ctx.moveTo(obstacle.x + 8, obstacle.y + 8);
            ctx.lineTo(obstacle.x + obstacle.width - 8, obstacle.y + obstacle.height - 8);
            ctx.moveTo(obstacle.x + obstacle.width - 8, obstacle.y + 8);
            ctx.lineTo(obstacle.x + 8, obstacle.y + obstacle.height - 8);
            ctx.stroke();
            ctx.fillStyle = "rgba(25, 16, 10, 0.2)";
            ctx.fillRect(obstacle.x + 10, obstacle.y + obstacle.height, obstacle.width - 16, 8);
            ctx.strokeStyle = "rgba(56, 34, 16, 0.28)";
            ctx.lineWidth = 1.4;
            for (let plank = obstacle.x + 16; plank < obstacle.x + obstacle.width - 10; plank += 20) {
                ctx.beginPath();
                ctx.moveTo(plank, obstacle.y + 8);
                ctx.lineTo(plank - 8, obstacle.y + obstacle.height - 8);
                ctx.stroke();
            }
        }
        ctx.restore();
    });
}

function drawBar(x, y, width, height, ratio, fillStyle) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.38)";
    ctx.fillRect(x, y, width, height);
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, width * clamp(ratio, 0, 1), height);
}

function drawSword(originX, originY, vectorX, vectorY, length, palette) {
    const vx = vectorX || 1;
    const vy = vectorY || 0;
    const guardCenterX = originX + vx * 7;
    const guardCenterY = originY + vy * 7;
    const bladeBaseX = guardCenterX + vx * 7;
    const bladeBaseY = guardCenterY + vy * 7;
    const tipX = originX + vx * length;
    const tipY = originY + vy * length;
    const crossX = guardCenterX - vy * 10;
    const crossY = guardCenterY + vx * 10;
    const crossX2 = guardCenterX + vy * 10;
    const crossY2 = guardCenterY - vx * 10;
    const tangX = originX - vx * 7;
    const tangY = originY - vy * 7;
    const pommelX = tangX - vx * 4;
    const pommelY = tangY - vy * 4;
    const bladeWidth = Math.max(4, length * 0.08);
    const taperWidth = Math.max(1.2, bladeWidth * 0.18);
    const edgeOffsetX = -vy * bladeWidth;
    const edgeOffsetY = vx * bladeWidth;
    const tipOffsetX = -vy * taperWidth;
    const tipOffsetY = vx * taperWidth;

    ctx.save();
    ctx.shadowColor = palette.edge;
    ctx.shadowBlur = 12;

    ctx.strokeStyle = palette.hilt;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(tangX, tangY);
    ctx.lineTo(guardCenterX, guardCenterY);
    ctx.stroke();

    const bladeGradient = ctx.createLinearGradient(
        bladeBaseX + edgeOffsetX,
        bladeBaseY + edgeOffsetY,
        bladeBaseX - edgeOffsetX,
        bladeBaseY - edgeOffsetY
    );
    bladeGradient.addColorStop(0, palette.edge);
    bladeGradient.addColorStop(0.24, palette.blade);
    bladeGradient.addColorStop(0.5, "#ffffff");
    bladeGradient.addColorStop(0.76, palette.blade);
    bladeGradient.addColorStop(1, palette.edge);
    ctx.fillStyle = bladeGradient;
    ctx.beginPath();
    ctx.moveTo(bladeBaseX + edgeOffsetX, bladeBaseY + edgeOffsetY);
    ctx.lineTo(tipX + tipOffsetX, tipY + tipOffsetY);
    ctx.lineTo(tipX - tipOffsetX, tipY - tipOffsetY);
    ctx.lineTo(bladeBaseX - edgeOffsetX, bladeBaseY - edgeOffsetY);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = "rgba(255,255,255,0.72)";
    ctx.lineWidth = 1.3;
    ctx.beginPath();
    ctx.moveTo(bladeBaseX + edgeOffsetX * 0.24, bladeBaseY + edgeOffsetY * 0.24);
    ctx.lineTo(tipX + tipOffsetX * 0.18, tipY + tipOffsetY * 0.18);
    ctx.stroke();

    ctx.strokeStyle = "rgba(26, 32, 42, 0.45)";
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    ctx.moveTo(bladeBaseX - edgeOffsetX * 0.3, bladeBaseY - edgeOffsetY * 0.3);
    ctx.lineTo(tipX - tipOffsetX * 0.2, tipY - tipOffsetY * 0.2);
    ctx.stroke();

    ctx.strokeStyle = palette.hilt;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(crossX, crossY);
    ctx.lineTo(crossX2, crossY2);
    ctx.stroke();

    ctx.fillStyle = palette.hilt;
    ctx.beginPath();
    ctx.ellipse(guardCenterX, guardCenterY, 3.8, 3, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.fillStyle = palette.hilt;
    ctx.beginPath();
    ctx.ellipse(pommelX, pommelY, 3.4, 3.1, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

function drawHorseMount(entity, config) {
    const facingX = config.facingX || 1;
    const centerX = entity.x + entity.width / 2;
    const baseY = entity.y + entity.height + (config.baseLift || 0) + 10;
    const bodyY = baseY - 16;
    const faceDirection = facingX >= 0 ? 1 : -1;

    drawGroundShadow(centerX, baseY + 8, 36, 12, 0.22);

    ctx.save();
    const coat = ctx.createLinearGradient(centerX - 34, bodyY - 12, centerX + 34, bodyY + 12);
    coat.addColorStop(0, config.horseTop || "#5d4435");
    coat.addColorStop(0.52, config.horseMid || "#4a382d");
    coat.addColorStop(1, config.horseBottom || "#35251d");
    ctx.fillStyle = coat;
    ctx.beginPath();
    ctx.ellipse(centerX, bodyY, 31, 14, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "rgba(255,255,255,0.08)";
    ctx.beginPath();
    ctx.ellipse(centerX - faceDirection * 7, bodyY - 4, 13, 5, -0.12, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = config.horseNeck || "#433027";
    ctx.beginPath();
    ctx.ellipse(centerX + faceDirection * 18, bodyY - 12, 10, 18, faceDirection * 0.42, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(centerX + faceDirection * 32, bodyY - 22, 12, 9, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = config.horseNose || "#271e19";
    ctx.beginPath();
    ctx.ellipse(centerX + faceDirection * 39, bodyY - 20, 5, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = config.horseEar || "#30251f";
    ctx.beginPath();
    ctx.moveTo(centerX + faceDirection * 28, bodyY - 28);
    ctx.lineTo(centerX + faceDirection * 25, bodyY - 40);
    ctx.lineTo(centerX + faceDirection * 32, bodyY - 30);
    ctx.closePath();
    ctx.moveTo(centerX + faceDirection * 36, bodyY - 27);
    ctx.lineTo(centerX + faceDirection * 38, bodyY - 39);
    ctx.lineTo(centerX + faceDirection * 40, bodyY - 29);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = config.horseLeg || "#241914";
    ctx.lineWidth = 3.6;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(centerX - 20, bodyY + 8);
    ctx.lineTo(centerX - 22, baseY + 18);
    ctx.moveTo(centerX - 8, bodyY + 10);
    ctx.lineTo(centerX - 9, baseY + 20);
    ctx.moveTo(centerX + 11, bodyY + 9);
    ctx.lineTo(centerX + 13, baseY + 20);
    ctx.moveTo(centerX + 23, bodyY + 7);
    ctx.lineTo(centerX + 26, baseY + 18);
    ctx.stroke();

    ctx.strokeStyle = "rgba(0,0,0,0.24)";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(centerX - 28, bodyY - 2);
    ctx.quadraticCurveTo(centerX - 39, bodyY - 5, centerX - 44, bodyY + 8);
    ctx.stroke();

    ctx.strokeStyle = config.rein || "#82e7ff";
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(centerX + faceDirection * 1, bodyY - 11);
    ctx.lineTo(centerX + faceDirection * 26, bodyY - 22);
    ctx.stroke();

    ctx.fillStyle = config.saddle || "#6a4c3b";
    ctx.beginPath();
    ctx.roundRect(centerX - 12, bodyY - 16, 24, 10, 4);
    ctx.fill();

    ctx.fillStyle = config.saddleFront || "#4d392d";
    ctx.beginPath();
    ctx.roundRect(centerX - 4, bodyY - 22, 8, 8, 3);
    ctx.fill();

    ctx.fillStyle = config.horseMane || "#1a1411";
    ctx.beginPath();
    ctx.moveTo(centerX + faceDirection * 12, bodyY - 24);
    ctx.lineTo(centerX + faceDirection * 8, bodyY - 8);
    ctx.lineTo(centerX + faceDirection * 18, bodyY - 10);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "rgba(255,255,255,0.18)";
    ctx.beginPath();
    ctx.arc(centerX + faceDirection * 35, bodyY - 24, 1.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

function drawStormSpiritMinion(enemy, config) {
    const centerX = enemy.x + enemy.width / 2;
    const centerY = enemy.y + enemy.height / 2;
    const floatBob = Math.sin(enemy.pulse * 1.6) * 6;
    const faceDirection = config.facingX >= 0 ? 1 : -1;
    const bodyBottomY = centerY + 30 + floatBob;
    const headY = centerY - 10 + floatBob;

    const palette = enemy.waterSpirit
        ? {
            aura: "rgba(94, 201, 255, 0.22)",
            trim: "rgba(88, 216, 255, 0.42)",
            orb: "#5ecbff",
            orbStroke: "#103244",
            body: "#dcecff",
            head: "#edf6ff",
            bow: "#73d6ff"
        }
        : (enemy.earthSpirit
            ? {
                aura: "rgba(183, 122, 74, 0.2)",
                trim: "rgba(181, 135, 84, 0.4)",
                orb: "#b1784e",
                orbStroke: "#312014",
                body: "#e9dccf",
                head: "#f0e4d7",
                bow: "#caa17f"
            }
            : {
                aura: "rgba(118, 255, 230, 0.18)",
                trim: "rgba(54, 255, 209, 0.4)",
                orb: "#35d68a",
                orbStroke: "#0e2018",
                body: "#ece9dd",
                head: "#e7e4d9",
                bow: "#75ff9d"
            });

    drawGroundShadow(centerX, bodyBottomY + 12, 24, 9, 0.16);

    ctx.save();
    ctx.shadowColor = palette.aura;
    ctx.shadowBlur = 16;

    const aura = ctx.createRadialGradient(centerX, centerY + 10, 8, centerX, centerY + 10, 36);
    aura.addColorStop(0, palette.aura);
    aura.addColorStop(1, "rgba(118, 255, 230, 0)");
    ctx.fillStyle = aura;
    ctx.beginPath();
    ctx.arc(centerX, centerY + 10, 36, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.moveTo(centerX - 16, centerY + 4 + floatBob);
    ctx.quadraticCurveTo(centerX - 20, centerY + 20 + floatBob, centerX - 19, bodyBottomY - 4);
    ctx.quadraticCurveTo(centerX - 8, bodyBottomY + 12, centerX, bodyBottomY + 4);
    ctx.quadraticCurveTo(centerX + 10, bodyBottomY + 12, centerX + 19, bodyBottomY - 4);
    ctx.quadraticCurveTo(centerX + 21, centerY + 18 + floatBob, centerX + 16, centerY + 2 + floatBob);
    ctx.quadraticCurveTo(centerX + 2, centerY - 2 + floatBob, centerX - 16, centerY + 4 + floatBob);
    ctx.fill();

    ctx.strokeStyle = palette.trim;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(centerX - 16, bodyBottomY - 2);
    ctx.quadraticCurveTo(centerX - 8, bodyBottomY + 6, centerX - 2, bodyBottomY - 1);
    ctx.quadraticCurveTo(centerX + 8, bodyBottomY + 7, centerX + 16, bodyBottomY - 3);
    ctx.stroke();

    ctx.fillStyle = palette.head;
    ctx.beginPath();
    ctx.arc(centerX, headY, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#171717";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#111";
    ctx.beginPath();
    ctx.ellipse(centerX - 5, headY - 2, 4.4, 2.8, -0.1, 0, Math.PI * 2);
    ctx.ellipse(centerX + 5, headY - 2, 4.4, 2.8, 0.1, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#e8e0d3";
    ctx.fillRect(centerX - 8, headY + 7, 16, 7);
    ctx.strokeStyle = "#111";
    ctx.lineWidth = 1.6;
    ctx.strokeRect(centerX - 8, headY + 7, 16, 7);
    for (let tooth = -6; tooth <= 6; tooth += 3) {
        ctx.beginPath();
        ctx.moveTo(centerX + tooth, headY + 7);
        ctx.lineTo(centerX + tooth, headY + 14);
        ctx.stroke();
    }

    ctx.strokeStyle = "#111";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX - 2, centerY + 4 + floatBob);
    ctx.lineTo(centerX - 30, centerY + 2 + floatBob);
    ctx.stroke();

    ctx.strokeStyle = palette.bow;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(centerX - 28, centerY + 3 + floatBob);
    ctx.lineTo(centerX - 36, centerY + 1 + floatBob);
    ctx.stroke();
    ctx.fillStyle = palette.orb;
    ctx.beginPath();
    ctx.arc(centerX - 40, centerY + 1 + floatBob, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = palette.orbStroke;
    ctx.stroke();

    ctx.strokeStyle = "#111";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(centerX + 8, centerY - 1 + floatBob);
    ctx.lineTo(centerX + 22, centerY - 22 + floatBob);
    ctx.lineTo(centerX + 29, centerY - 31 + floatBob);
    ctx.moveTo(centerX + 22, centerY - 22 + floatBob);
    ctx.lineTo(centerX + 17, centerY - 34 + floatBob);
    ctx.moveTo(centerX + 22, centerY - 22 + floatBob);
    ctx.lineTo(centerX + 34, centerY - 26 + floatBob);
    ctx.stroke();

    ctx.strokeStyle = "#111";
    ctx.beginPath();
    ctx.moveTo(centerX - 1, centerY + 3 + floatBob);
    ctx.quadraticCurveTo(centerX + 3 * faceDirection, centerY + 12 + floatBob, centerX + 13 * faceDirection, centerY + 13 + floatBob);
    ctx.stroke();

    if (enemy.poisonArcher) {
        const bowCenterX = centerX + 12 * faceDirection;
        const bowCenterY = centerY + 2 + floatBob;
        ctx.strokeStyle = palette.bow;
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.arc(bowCenterX, bowCenterY, 11, faceDirection > 0 ? -1.15 : 2.0, faceDirection > 0 ? 1.15 : 4.28);
        ctx.stroke();

        ctx.strokeStyle = "rgba(219, 255, 231, 0.9)";
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(bowCenterX, bowCenterY - 10);
        ctx.lineTo(bowCenterX, bowCenterY + 10);
        ctx.stroke();

        ctx.strokeStyle = palette.bow;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(centerX + 2 * faceDirection, centerY + 1 + floatBob);
        ctx.lineTo(centerX + 26 * faceDirection, centerY - 1 + floatBob);
        ctx.stroke();

        ctx.fillStyle = palette.orb;
        ctx.beginPath();
        ctx.moveTo(centerX + 26 * faceDirection, centerY - 1 + floatBob);
        ctx.lineTo(centerX + 18 * faceDirection, centerY - 5 + floatBob);
        ctx.lineTo(centerX + 18 * faceDirection, centerY + 3 + floatBob);
        ctx.closePath();
        ctx.fill();
    }

    ctx.restore();
}

function drawHumanoidFigure(entity, config) {
    const visualScale = config.visualScale || 1.08;
    const rideLeanX = config.rideLeanX || 0;
    const centerX = entity.x + entity.width / 2 + rideLeanX;
    const baseY = entity.y + entity.height + (config.baseLift || 0);
    const bob = config.bob || 0;
    const facingX = config.facingX || 1;
    const facingY = config.facingY || 0;
    const verticalLean = clamp(facingY * 6, -6, 6);
    const bodyHeight = (config.bodyHeight || 30) * visualScale;
    const shoulderY = baseY - bodyHeight - 20 + bob;
    const hipY = baseY - 18 + bob;
    const headRadius = (config.headRadius || 8) * visualScale;
    const headY = shoulderY - headRadius * 1.28;
    const neckY = headY + headRadius * 0.95;
    const chestWidth = (config.chestWidth || 30) * visualScale;
    const waistWidth = (config.waistWidth || 18) * visualScale;
    const shoulderRadius = (config.shoulderRadius || 12) * visualScale;
    const swordArmReach = (config.swordArmReach || 26) * visualScale;
    const attackPulse = config.attackPulse || 0;
    const shoulderSpan = chestWidth * 0.96;
    const upperArmLength = Math.max(8, chestWidth);
    const thighLength = Math.max(12, bodyHeight * 0.52);
    const calfLength = Math.max(10, bodyHeight * 0.45);
    const swordShoulderX = centerX + shoulderSpan - 4;
    const shieldShoulderX = centerX - shoulderSpan + 4;
    const shoulderLineY = shoulderY + 8;
    const swordElbowX = centerX + facingX * (upperArmLength * 0.54);
    const swordElbowY = shoulderLineY + 11 - attackPulse * 5;
    const swordHandX = centerX + facingX * (swordArmReach * 0.94);
    const swordHandY = shoulderY + verticalLean + 13 - attackPulse * 4;
    const shieldElbowX = centerX - facingX * (upperArmLength * 0.42);
    const shieldElbowY = shoulderLineY + 13;
    const shieldHandX = centerX - facingX * 16 + rideLeanX * 0.25;
    const shieldHandY = shoulderY + 18;
    const faceDirection = facingX >= 0 ? 1 : -1;
    const bicepRadius = (config.bicepRadius || 6) * visualScale;
    const walkCycle = config.walkCycle || 0;
    const riding = Boolean(config.riding);
    const sideProfile = Boolean(config.sideProfile);
    const profileOffset = sideProfile ? faceDirection * chestWidth * 0.34 : (riding ? faceDirection * chestWidth * 0.18 : 0);
    const headProfileOffset = sideProfile ? faceDirection * headRadius * 0.52 : (riding ? faceDirection * headRadius * 0.34 : 0);
    const sideTorsoWidth = sideProfile ? shoulderSpan * 0.46 : shoulderSpan * 0.82;
    const sideWaistWidth = sideProfile ? waistWidth * 0.52 : waistWidth * 0.78;
    const stride = Math.sin(walkCycle) * 6;
    const strideOpposite = Math.sin(walkCycle + Math.PI) * 6;
    const shieldWidth = config.blocking ? 20 : 14;
    const shieldHeight = config.blocking ? 24 : 20;
    const capeWhip = Math.sin(walkCycle * 1.2) * 2.6 + attackPulse * 6;
    const leftKneeX = riding
        ? centerX - 18
        : centerX - 5 + facingX * 1.2 + stride * 0.38;
    const leftKneeY = riding ? (hipY + thighLength * 0.24) : (hipY + thighLength);
    const rightKneeX = riding
        ? centerX + 18
        : centerX + 5 + facingX * 1.2 + strideOpposite * 0.38;
    const rightKneeY = riding ? (hipY + thighLength * 0.24) : (hipY + thighLength);
    const leftFootX = riding
        ? centerX - 26
        : leftKneeX - 2 + facingX * 1.6;
    const leftFootY = riding
        ? leftKneeY + calfLength * 0.18
        : leftKneeY + calfLength + stride * 0.22;
    const rightFootX = riding
        ? centerX + 26
        : rightKneeX + 2 + facingX * 1.6;
    const rightFootY = riding
        ? rightKneeY + calfLength * 0.18
        : rightKneeY + calfLength + strideOpposite * 0.22;
    const shoulderLeftX = centerX - shoulderSpan + 3 + profileOffset * 0.2;
    const shoulderRightX = centerX + shoulderSpan - 3 + profileOffset * 0.2;
    const jawWidth = headRadius * 0.58;
    const chinY = headY + headRadius * 0.96;
    const hairVolume = headRadius * 0.24;
    const jacketWidth = chestWidth * 0.8;
    const skinHighlight = "rgba(255,255,255,0.1)";
    const clothingShade = "rgba(14, 18, 28, 0.12)";

    ctx.save();

    drawGroundShadow(centerX, baseY + 7, shoulderSpan + 12, 8, 0.14);

    if (config.glow) {
        ctx.shadowColor = config.glow;
        ctx.shadowBlur = config.glowBlur || 18;
    }

    const capeGradient = ctx.createLinearGradient(centerX, shoulderY, centerX, hipY + 52);
    capeGradient.addColorStop(0, config.capeTop);
    capeGradient.addColorStop(1, config.capeBottom);
    ctx.fillStyle = capeGradient;
    ctx.beginPath();
    ctx.moveTo(centerX - shoulderSpan * 0.82, shoulderLineY + 1);
    ctx.quadraticCurveTo(centerX + faceDirection * capeWhip, hipY + 46, centerX + shoulderSpan * 0.82, shoulderLineY + 1);
    ctx.quadraticCurveTo(centerX, shoulderLineY + 22, centerX - shoulderSpan * 0.82, shoulderLineY + 1);
    ctx.fill();

    const torsoGradient = ctx.createLinearGradient(centerX, shoulderY, centerX, hipY + 10);
    torsoGradient.addColorStop(0, config.armorTop);
    torsoGradient.addColorStop(1, config.armorBottom);
    ctx.fillStyle = torsoGradient;
    ctx.beginPath();
    ctx.moveTo(centerX - sideTorsoWidth + profileOffset * 0.12, shoulderLineY - 1);
    ctx.quadraticCurveTo(centerX + profileOffset * 0.34, shoulderY - 4, centerX + sideTorsoWidth + profileOffset * 0.34, shoulderLineY - 1);
    ctx.quadraticCurveTo(centerX + sideWaistWidth * 1.2 + profileOffset * 0.3, hipY - 2, centerX + sideWaistWidth + profileOffset * 0.2, hipY + 9);
    ctx.quadraticCurveTo(centerX + profileOffset * 0.18, hipY + 17, centerX - sideWaistWidth + profileOffset * 0.02, hipY + 9);
    ctx.quadraticCurveTo(centerX - sideWaistWidth * 1.2 + profileOffset * 0.02, hipY - 2, centerX - sideTorsoWidth + profileOffset * 0.12, shoulderLineY - 1);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "rgba(255,255,255,0.08)";
    ctx.beginPath();
    ctx.moveTo(centerX - (sideProfile ? jacketWidth * 0.34 : jacketWidth * 0.8), shoulderLineY + 2);
    ctx.lineTo(centerX + (sideProfile ? jacketWidth * 0.48 : jacketWidth * 0.8), shoulderLineY + 2);
    ctx.lineTo(centerX + (sideProfile ? waistWidth * 0.22 : waistWidth * 0.5), shoulderLineY + bodyHeight * 0.26);
    ctx.lineTo(centerX - (sideProfile ? waistWidth * 0.12 : waistWidth * 0.5), shoulderLineY + bodyHeight * 0.26);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "rgba(0,0,0,0.12)";
    ctx.beginPath();
    ctx.moveTo(centerX - (sideProfile ? shoulderSpan * 0.08 : shoulderSpan * 0.18), shoulderLineY + 1);
    ctx.lineTo(centerX + (sideProfile ? shoulderSpan * 0.26 : shoulderSpan * 0.18), shoulderLineY + 1);
    ctx.lineTo(centerX + (sideProfile ? waistWidth * 0.24 : waistWidth * 0.16), hipY + 10);
    ctx.lineTo(centerX - (sideProfile ? waistWidth * 0.06 : waistWidth * 0.16), hipY + 10);
    ctx.closePath();
    ctx.fill();

    if (config.rippedShirt) {
        ctx.fillStyle = config.shirtColor || "rgba(214, 216, 214, 0.92)";
        ctx.beginPath();
        ctx.moveTo(centerX - shoulderSpan * 0.42, shoulderLineY + 8);
        ctx.lineTo(centerX + shoulderSpan * 0.42, shoulderLineY + 8);
        ctx.lineTo(centerX + waistWidth * 0.34, shoulderLineY + bodyHeight * 0.34);
        ctx.lineTo(centerX + waistWidth * 0.12, shoulderLineY + bodyHeight * 0.28);
        ctx.lineTo(centerX, shoulderLineY + bodyHeight * 0.38);
        ctx.lineTo(centerX - waistWidth * 0.14, shoulderLineY + bodyHeight * 0.28);
        ctx.lineTo(centerX - waistWidth * 0.36, shoulderLineY + bodyHeight * 0.34);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "rgba(120, 22, 24, 0.55)";
        ctx.beginPath();
        ctx.ellipse(centerX - waistWidth * 0.24, shoulderLineY + bodyHeight * 0.15, waistWidth * 0.24, bodyHeight * 0.09, -0.2, 0, Math.PI * 2);
        ctx.ellipse(centerX + waistWidth * 0.18, shoulderLineY + bodyHeight * 0.24, waistWidth * 0.16, bodyHeight * 0.06, 0.16, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(90, 94, 92, 0.8)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(centerX - shoulderSpan * 0.2, shoulderLineY + 8);
        ctx.lineTo(centerX - shoulderSpan * 0.08, shoulderLineY + bodyHeight * 0.16);
        ctx.moveTo(centerX + shoulderSpan * 0.14, shoulderLineY + 8);
        ctx.lineTo(centerX + shoulderSpan * 0.02, shoulderLineY + bodyHeight * 0.2);
        ctx.stroke();
    }

    if (config.sixPack) {
        ctx.strokeStyle = "rgba(118, 72, 54, 0.34)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(centerX, shoulderLineY + bodyHeight * 0.34);
        ctx.lineTo(centerX, hipY + 6);
        ctx.moveTo(centerX - waistWidth * 0.34, shoulderLineY + bodyHeight * 0.42);
        ctx.quadraticCurveTo(centerX, shoulderLineY + bodyHeight * 0.38, centerX + waistWidth * 0.34, shoulderLineY + bodyHeight * 0.42);
        ctx.moveTo(centerX - waistWidth * 0.32, shoulderLineY + bodyHeight * 0.55);
        ctx.quadraticCurveTo(centerX, shoulderLineY + bodyHeight * 0.51, centerX + waistWidth * 0.32, shoulderLineY + bodyHeight * 0.55);
        ctx.moveTo(centerX - waistWidth * 0.28, shoulderLineY + bodyHeight * 0.68);
        ctx.quadraticCurveTo(centerX, shoulderLineY + bodyHeight * 0.64, centerX + waistWidth * 0.28, shoulderLineY + bodyHeight * 0.68);
        ctx.stroke();
    }

    ctx.fillStyle = config.pauldron || config.armorTop;
    ctx.beginPath();
    if (sideProfile) {
        ctx.ellipse(centerX + faceDirection * shoulderSpan * 0.18, shoulderLineY + 4, shoulderRadius * 1.04, 7.8, faceDirection * 0.12, 0, Math.PI * 2);
    } else {
        ctx.ellipse(shoulderLeftX, shoulderLineY + 3, shoulderRadius * 0.96, 7.4, -0.16, 0, Math.PI * 2);
        ctx.ellipse(shoulderRightX, shoulderLineY + 3, shoulderRadius * 0.96, 7.4, 0.16, 0, Math.PI * 2);
    }
    ctx.fill();

    ctx.fillStyle = config.skin;
    ctx.beginPath();
    ctx.roundRect(centerX - 4, neckY - 1, 8, 9, 3);
    ctx.fill();

    if (sideProfile) {
        ctx.fillStyle = config.skin;
        ctx.beginPath();
        ctx.ellipse(centerX + headProfileOffset * 0.7, headY + headRadius * 0.02, headRadius * 0.72, headRadius * 0.96, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(70, 38, 26, 0.08)";
        ctx.beginPath();
        ctx.ellipse(centerX + faceDirection * headRadius * 0.42 + headProfileOffset * 0.7, headY + headRadius * 0.12, headRadius * 0.16, headRadius * 0.28, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = skinHighlight;
        ctx.beginPath();
        ctx.ellipse(centerX - faceDirection * headRadius * 0.16, headY - headRadius * 0.36, Math.max(1, headRadius * 0.18), Math.max(1, headRadius * 0.1), -0.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = config.hair;
        ctx.beginPath();
        ctx.moveTo(centerX - headRadius * 0.56, headY - headRadius * 0.1);
        ctx.quadraticCurveTo(centerX - headRadius * 0.18, headY - headRadius * 0.92, centerX + faceDirection * headRadius * 0.44, headY - headRadius * 0.66);
        ctx.quadraticCurveTo(centerX + faceDirection * headRadius * 0.26, headY + headRadius * 0.08, centerX - headRadius * 0.42, headY + headRadius * 0.06);
        ctx.closePath();
        ctx.fill();
    } else {
        ctx.fillStyle = config.skin;
        ctx.beginPath();
        ctx.moveTo(centerX + headProfileOffset, headY - headRadius * 1.02);
        ctx.quadraticCurveTo(centerX + headRadius * 0.82 + headProfileOffset, headY - headRadius * 0.74, centerX + jawWidth + headProfileOffset * 0.66, headY + headRadius * 0.08);
        ctx.quadraticCurveTo(centerX + jawWidth * 0.74 + headProfileOffset * 0.44, chinY, centerX + headProfileOffset * 0.46, chinY + headRadius * 0.06);
        ctx.quadraticCurveTo(centerX - jawWidth * 0.74 + headProfileOffset * 0.16, chinY, centerX - jawWidth + headProfileOffset * 0.12, headY + headRadius * 0.08);
        ctx.quadraticCurveTo(centerX - headRadius * 0.82 + headProfileOffset * 0.08, headY - headRadius * 0.74, centerX + headProfileOffset, headY - headRadius * 1.02);
        ctx.fill();

        ctx.fillStyle = "rgba(70, 38, 26, 0.06)";
        ctx.beginPath();
        ctx.ellipse(centerX + headProfileOffset + faceDirection * headRadius * 0.12, headY + headRadius * 0.16, headRadius * 0.24, headRadius * 0.42, 0.18, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = skinHighlight;
        ctx.beginPath();
        ctx.ellipse(centerX - headRadius * 0.18 + headProfileOffset * 0.2, headY - headRadius * 0.44, Math.max(1, headRadius * 0.22), Math.max(1, headRadius * 0.13), -0.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = config.hair;
        ctx.beginPath();
        ctx.moveTo(centerX - headRadius * 0.84, headY - headRadius * 0.02);
        ctx.quadraticCurveTo(centerX - headRadius * 0.66, headY - headRadius * 0.74, centerX - headRadius * 0.06, headY - headRadius * 0.92);
        ctx.quadraticCurveTo(centerX + headRadius * 0.34, headY - headRadius * 1.08, centerX + headRadius * 0.84, headY - headRadius * 0.12);
        ctx.quadraticCurveTo(centerX + headRadius * 0.5, headY + headRadius * 0.02, centerX + headRadius * 0.28, headY + headRadius * 0.1);
        ctx.quadraticCurveTo(centerX, headY - headRadius * 0.04, centerX - headRadius * 0.16, headY + headRadius * 0.12);
        ctx.closePath();
        ctx.fill();
    }

    if (config.helmet) {
        ctx.fillStyle = config.helmet;
        ctx.beginPath();
        if (sideProfile) {
            ctx.moveTo(centerX - headRadius * 0.46, headY - headRadius * 0.16);
            ctx.quadraticCurveTo(centerX - headRadius * 0.08, headY - headRadius * 1.08, centerX + faceDirection * headRadius * 0.76, headY - headRadius * 0.4);
            ctx.lineTo(centerX + faceDirection * headRadius * 0.54, headY + headRadius * 0.56);
            ctx.quadraticCurveTo(centerX - headRadius * 0.12, headY + headRadius * 0.7, centerX - headRadius * 0.46, headY + headRadius * 0.18);
            ctx.closePath();
        } else {
            ctx.moveTo(centerX - headRadius - 2, headY - headRadius * 0.08);
            ctx.quadraticCurveTo(centerX, headY - headRadius * 1.45, centerX + headRadius + 2, headY - headRadius * 0.08);
            ctx.lineTo(centerX + headRadius - 1, headY + headRadius * 0.72);
            ctx.lineTo(centerX - headRadius + 1, headY + headRadius * 0.72);
            ctx.closePath();
        }
        ctx.fill();

        ctx.fillStyle = "rgba(18, 23, 35, 0.82)";
        ctx.beginPath();
        if (sideProfile) {
            ctx.roundRect(centerX - headRadius * 0.12, headY - 1.4, headRadius * 0.92, Math.max(4, headRadius * 0.48), 2.5);
        } else {
            ctx.roundRect(centerX - headRadius + 1, headY - 1, (headRadius - 1) * 2, Math.max(4, headRadius * 0.55), 3);
        }
        ctx.fill();

        if (config.visor) {
            const visorGradient = ctx.createLinearGradient(centerX - headRadius, headY - 1.5, centerX + headRadius, headY + 3.5);
            visorGradient.addColorStop(0, config.visorGlow || "rgba(255,255,255,0.82)");
            visorGradient.addColorStop(0.45, config.visor);
            visorGradient.addColorStop(1, "rgba(18, 23, 35, 0.96)");
            ctx.fillStyle = visorGradient;
            ctx.beginPath();
            if (sideProfile) {
                ctx.roundRect(centerX + faceDirection * headRadius * 0.08, headY - 1.2, headRadius * 0.54, 4.2, 2);
            } else {
                ctx.roundRect(centerX - headRadius + 0.8, headY - 1.4, (headRadius - 0.8) * 2, 4.8, 2.5);
            }
            ctx.fill();
            ctx.strokeStyle = config.visorGlow || "rgba(255,255,255,0.4)";
            ctx.lineWidth = 0.9;
            ctx.stroke();
        }

        if (config.crest) {
            ctx.strokeStyle = config.crest;
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(centerX, headY - headRadius - 6);
            ctx.lineTo(centerX, headY - headRadius + 1);
            ctx.stroke();
        }
    }

    if (!config.helmet) {
        ctx.strokeStyle = "rgba(58, 34, 26, 0.6)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(centerX - 3.5 * faceDirection, headY - 3.7);
        ctx.lineTo(centerX - 1.5 * faceDirection, headY - 4.5);
        ctx.moveTo(centerX + 1.5 * faceDirection, headY - 4.5);
        ctx.lineTo(centerX + 3.5 * faceDirection, headY - 3.7);
        ctx.stroke();

        ctx.fillStyle = "#fffdf9";
        ctx.beginPath();
        ctx.ellipse(centerX - 2.6 * faceDirection, headY - 1.45, 1.45, 0.9, -0.06, 0, Math.PI * 2);
        ctx.ellipse(centerX + 2.6 * faceDirection, headY - 1.45, 1.45, 0.9, 0.06, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(34, 24, 20, 0.82)";
        ctx.beginPath();
        ctx.arc(centerX - 2.6 * faceDirection, headY - 1.45, 0.42, 0, Math.PI * 2);
        ctx.arc(centerX + 2.6 * faceDirection, headY - 1.45, 0.42, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(70, 44, 34, 0.28)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(centerX, headY - 0.1);
        ctx.lineTo(centerX + faceDirection * 0.7, headY + 2.8);
        ctx.lineTo(centerX - 0.1, headY + 3.5);
        ctx.stroke();

        ctx.strokeStyle = "rgba(114, 72, 56, 0.5)";
        ctx.beginPath();
        ctx.moveTo(centerX - 1.8, headY + 5.1);
        ctx.quadraticCurveTo(centerX, headY + 6.1, centerX + 1.8, headY + 5.1);
        ctx.stroke();
    }

    ctx.fillStyle = clothingShade;
    ctx.beginPath();
    ctx.moveTo(centerX - (sideProfile ? waistWidth * 0.42 : waistWidth * 0.95), hipY + 2);
    ctx.lineTo(centerX + (sideProfile ? waistWidth * 0.9 : waistWidth * 0.95), hipY + 2);
    ctx.lineTo(centerX + (sideProfile ? waistWidth * 0.5 : waistWidth * 0.6), hipY + 20);
    ctx.lineTo(centerX - (sideProfile ? waistWidth * 0.12 : waistWidth * 0.6), hipY + 20);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = config.legColor;
    ctx.lineWidth = config.legWidth || 9;
    ctx.lineCap = "round";
    ctx.beginPath();
    if (sideProfile) {
        const legBaseX = centerX + faceDirection * 5;
        ctx.moveTo(legBaseX, hipY + 6);
        ctx.lineTo(rightKneeX, rightKneeY);
        ctx.lineTo(rightFootX, rightFootY);
    } else {
        ctx.moveTo(centerX - 6, hipY + 6);
        ctx.lineTo(leftKneeX, leftKneeY);
        ctx.lineTo(leftFootX, leftFootY);
        ctx.moveTo(centerX + 6, hipY + 6);
        ctx.lineTo(rightKneeX, rightKneeY);
        ctx.lineTo(rightFootX, rightFootY);
    }
    ctx.stroke();

    ctx.strokeStyle = config.bootColor;
    ctx.lineWidth = config.bootWidth || 6;
    ctx.beginPath();
    if (sideProfile) {
        ctx.moveTo(rightFootX - 4, rightFootY);
        ctx.lineTo(rightFootX + 10, rightFootY);
    } else {
        ctx.moveTo(leftFootX - 8, leftFootY);
        ctx.lineTo(leftFootX + 6, leftFootY);
        ctx.moveTo(rightFootX - 6, rightFootY);
        ctx.lineTo(rightFootX + 8, rightFootY);
    }
    ctx.stroke();

    ctx.strokeStyle = config.armColor;
    ctx.lineWidth = config.armWidth || 9;
    ctx.beginPath();
    if (sideProfile) {
        ctx.moveTo(centerX + faceDirection * shoulderSpan * 0.12, shoulderLineY + 1);
        ctx.lineTo(swordElbowX, swordElbowY);
        ctx.lineTo(swordHandX + facingX * attackPulse * 6, swordHandY - attackPulse * 3);
    } else {
        ctx.moveTo(shieldShoulderX, shoulderLineY + 1);
        ctx.lineTo(shieldElbowX, shieldElbowY);
        ctx.lineTo(shieldHandX - facingX * attackPulse * 2, shieldHandY - attackPulse * 2);
        ctx.moveTo(swordShoulderX, shoulderLineY + 1);
        ctx.lineTo(swordElbowX, swordElbowY);
        ctx.lineTo(swordHandX + facingX * attackPulse * 6, swordHandY - attackPulse * 3);
    }
    ctx.stroke();

    ctx.fillStyle = config.armColor;
    ctx.beginPath();
    if (sideProfile) {
        ctx.ellipse(centerX + faceDirection * shoulderSpan * 0.14, shoulderLineY + 8, bicepRadius + 1.9, bicepRadius, faceDirection * 0.12, 0, Math.PI * 2);
        ctx.ellipse(swordHandX + facingX * attackPulse * 6, swordHandY - attackPulse * 3, 4, 4, 0, 0, Math.PI * 2);
    } else {
        ctx.ellipse(shoulderLeftX, shoulderLineY + 8, bicepRadius + 1.6, bicepRadius, -0.35, 0, Math.PI * 2);
        ctx.ellipse(shoulderRightX, shoulderLineY + 8, bicepRadius + 1.6, bicepRadius, 0.35, 0, Math.PI * 2);
        ctx.ellipse(shieldHandX, shieldHandY, 4, 4, 0, 0, Math.PI * 2);
        ctx.ellipse(swordHandX + facingX * attackPulse * 6, swordHandY - attackPulse * 3, 4, 4, 0, 0, Math.PI * 2);
    }
    ctx.fill();

    if (!sideProfile) {
        ctx.fillStyle = config.shield;
        ctx.beginPath();
        ctx.roundRect(shieldHandX - shieldWidth / 2, shieldHandY - shieldHeight / 2, shieldWidth, shieldHeight, 6);
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,0.22)";
        ctx.lineWidth = 1.6;
        ctx.stroke();
    }

    ctx.fillStyle = config.armorTrim;
    ctx.fillRect(centerX - 4, shoulderY + 5, 8, hipY - shoulderY - 1);
    ctx.fillRect(centerX - 14, shoulderY + 16, 28, 5);
    ctx.fillRect(centerX - 10, shoulderY + 26, 20, 4);
    ctx.fillStyle = "rgba(255,255,255,0.12)";
    ctx.fillRect(centerX - shoulderSpan * 0.52, shoulderY + 9, shoulderSpan * 0.64, 4);
    ctx.fillRect(centerX - waistWidth + 3, hipY - 1, waistWidth * 1.05, 3);

    drawSword(
        swordHandX + facingX * attackPulse * 6,
        swordHandY - attackPulse * 3,
        facingX,
        verticalLean / 18,
        config.swordLength + attackPulse * 6,
        {
            blade: config.swordBlade,
            edge: config.swordEdge,
            hilt: config.swordHilt
        }
    );

    ctx.restore();
}

function drawDragons() {
    state.player.dragons.forEach((dragon, index) => {
        if (typeof dragon.x !== "number" || typeof dragon.y !== "number") {
            return;
        }

        const hue = dragon.name.includes("Storm") ? "#8fd6ff" : "#ffb06f";
        const wing = dragon.name.includes("Storm") ? "#c7f1ff" : "#ffd7a8";

        ctx.save();
        ctx.shadowColor = hue;
        ctx.shadowBlur = 18;
        ctx.translate(dragon.x, dragon.y);
        ctx.scale(index % 2 === 0 ? 1 : -1, 1);
        ctx.fillStyle = hue;
        ctx.beginPath();
        ctx.ellipse(0, 0, 18, 10, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = wing;
        ctx.beginPath();
        ctx.moveTo(-8, -2);
        ctx.quadraticCurveTo(-20, -18, -26, -6);
        ctx.quadraticCurveTo(-16, 0, -8, -2);
        ctx.moveTo(6, -2);
        ctx.quadraticCurveTo(20, -18, 28, -6);
        ctx.quadraticCurveTo(16, 0, 6, -2);
        ctx.fill();
        ctx.fillStyle = "#fff4de";
        ctx.beginPath();
        ctx.arc(12, -2, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    });
}

function drawLocalPlayerBackView(player, armorLook) {
    const centerX = player.x + player.width / 2;
    const speedRatio = clamp(player.strideBlend || 0, 0, 1);
    const bodyLift = (player.jumpLift || 0) * 0.34;
    const stridePhase = Math.sin(player.walkCycle);
    const counterStride = Math.sin(player.walkCycle + Math.PI);
    const headCenterY = player.y + player.height * 0.58 - bodyLift - Math.abs(stridePhase) * player.width * 0.05 * speedRatio;
    const shoulderY = player.y + player.height * 1.34 - bodyLift;
    const torsoBottomY = player.y + player.height * 2.7 - bodyLift;
    const headRadiusX = player.width * 0.5;
    const headRadiusY = player.width * 0.64;
    const shoulderWidth = player.width * 1.28;
    const waistWidth = player.width * 0.72;
    const hipWidth = player.width * 0.82;
    const strideSwing = Math.sin(player.walkCycle * 0.9) * player.width * 0.09 * speedRatio;
    const torsoLeanX = player.facingX * player.width * 0.12 + strideSwing;
    const torsoTwist = stridePhase * player.width * 0.08 * speedRatio;
    const armDrop = player.width * 0.98;
    const elbowSwing = stridePhase * player.width * 0.14 * speedRatio;
    const leftForearmX = centerX - shoulderWidth * 0.52 + counterStride * player.width * 0.08 * speedRatio;
    const rightForearmX = centerX + shoulderWidth * 0.52 - counterStride * player.width * 0.08 * speedRatio;
    const skinTone = LOOKS.skin[player.look.skin];
    const hairTone = LOOKS.hair[player.look.hair];
    const shoulderInset = player.width * 0.18;

    drawGroundShadow(centerX, torsoBottomY + 16, shoulderWidth * 0.88, 16, 0.16);

    ctx.save();

    ctx.strokeStyle = "rgba(26, 31, 40, 0.68)";
    ctx.lineWidth = player.width * 0.24;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(centerX - shoulderWidth * 0.62, shoulderY + 5);
    ctx.quadraticCurveTo(centerX - shoulderWidth * 0.86, shoulderY + armDrop * 0.58, leftForearmX + elbowSwing, torsoBottomY - 8);
    ctx.moveTo(centerX + shoulderWidth * 0.62, shoulderY + 5);
    ctx.quadraticCurveTo(centerX + shoulderWidth * 0.86, shoulderY + armDrop * 0.58, rightForearmX - elbowSwing, torsoBottomY - 8);
    ctx.stroke();

    const torsoGradient = ctx.createLinearGradient(centerX, shoulderY - 18, centerX, torsoBottomY);
    torsoGradient.addColorStop(0, armorLook.armorTop);
    torsoGradient.addColorStop(1, armorLook.armorBottom);
    ctx.fillStyle = torsoGradient;
    ctx.beginPath();
    ctx.moveTo(centerX - shoulderWidth * 0.64, shoulderY + 3);
    ctx.quadraticCurveTo(centerX + torsoLeanX, shoulderY - player.width * 0.28, centerX + shoulderWidth * 0.64, shoulderY + 3);
    ctx.lineTo(centerX + hipWidth, torsoBottomY - 8);
    ctx.quadraticCurveTo(centerX, torsoBottomY + player.width * 0.2, centerX - hipWidth, torsoBottomY - 8);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = armorLook.pauldron;
    ctx.beginPath();
    ctx.ellipse(centerX - shoulderWidth * 0.46, shoulderY + 5, player.width * 0.36, player.width * 0.2, -0.16, 0, Math.PI * 2);
    ctx.ellipse(centerX + shoulderWidth * 0.46, shoulderY + 5, player.width * 0.36, player.width * 0.2, 0.16, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "rgba(18, 26, 34, 0.2)";
    ctx.beginPath();
    ctx.moveTo(centerX - shoulderWidth * 0.48, shoulderY + 10);
    ctx.quadraticCurveTo(centerX - player.width * 0.34 + torsoTwist, shoulderY + player.width * 0.34, centerX - waistWidth * 0.78, torsoBottomY - player.width * 0.82);
    ctx.lineTo(centerX + waistWidth * 0.78, torsoBottomY - player.width * 0.82);
    ctx.quadraticCurveTo(centerX + player.width * 0.34 + torsoTwist, shoulderY + player.width * 0.34, centerX + shoulderWidth * 0.48, shoulderY + 10);
    ctx.lineTo(centerX + player.width * 0.18, shoulderY + player.width * 0.16);
    ctx.quadraticCurveTo(centerX, shoulderY + player.width * 0.38, centerX - player.width * 0.18, shoulderY + player.width * 0.16);
    ctx.closePath();
    ctx.fill();

    const backPlate = ctx.createLinearGradient(centerX, shoulderY + 10, centerX, torsoBottomY - 8);
    backPlate.addColorStop(0, "rgba(255,255,255,0.14)");
    backPlate.addColorStop(1, "rgba(255,255,255,0.03)");
    ctx.fillStyle = backPlate;
    ctx.beginPath();
    ctx.roundRect(centerX - player.width * 0.28, shoulderY + 12, player.width * 0.56, torsoBottomY - shoulderY - player.width * 0.7, player.width * 0.16);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.2)";
    ctx.fillRect(centerX - player.width * 0.06, shoulderY + 12, player.width * 0.12, torsoBottomY - shoulderY - player.width * 1.02);
    ctx.fillRect(centerX - shoulderWidth * 0.28, shoulderY + player.width * 0.52, shoulderWidth * 0.56, player.width * 0.08);

    ctx.fillStyle = skinTone;
    ctx.beginPath();
    ctx.roundRect(centerX - player.width * 0.14, shoulderY - player.width * 0.42, player.width * 0.28, player.width * 0.34, player.width * 0.1);
    ctx.fill();

    ctx.fillStyle = skinTone;
    ctx.beginPath();
    ctx.ellipse(centerX, headCenterY, headRadiusX, headRadiusY, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "rgba(113, 82, 62, 0.12)";
    ctx.beginPath();
    ctx.ellipse(centerX, headCenterY + headRadiusY * 0.32, headRadiusX * 0.46, headRadiusY * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = hairTone;
    ctx.beginPath();
    ctx.moveTo(centerX - headRadiusX * 0.98, headCenterY - headRadiusY * 0.08);
    ctx.quadraticCurveTo(centerX - headRadiusX * 0.82, headCenterY - headRadiusY * 1.02, centerX, headCenterY - headRadiusY * 1.14);
    ctx.quadraticCurveTo(centerX + headRadiusX * 0.82, headCenterY - headRadiusY * 1.02, centerX + headRadiusX * 0.98, headCenterY - headRadiusY * 0.08);
    ctx.quadraticCurveTo(centerX + headRadiusX * 0.66 + torsoLeanX, headCenterY + headRadiusY * 0.48, centerX, headCenterY + headRadiusY * 0.4);
    ctx.quadraticCurveTo(centerX - headRadiusX * 0.66 + torsoLeanX, headCenterY + headRadiusY * 0.48, centerX - headRadiusX * 0.98, headCenterY - headRadiusY * 0.08);
    ctx.fill();

    ctx.strokeStyle = "rgba(255,255,255,0.12)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(centerX - headRadiusX * 0.28, headCenterY - headRadiusY * 0.18);
    ctx.quadraticCurveTo(centerX, headCenterY - headRadiusY * 0.4, centerX + headRadiusX * 0.28, headCenterY - headRadiusY * 0.18);
    ctx.stroke();

    ctx.strokeStyle = "rgba(24, 30, 40, 0.22)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(centerX - shoulderWidth * 0.48 + shoulderInset, shoulderY + 10);
    ctx.quadraticCurveTo(centerX, shoulderY + player.width * 0.44, centerX + shoulderWidth * 0.48 - shoulderInset, shoulderY + 10);
    ctx.stroke();

    ctx.restore();
}

function drawPlayer() {
    const armorLook = LOOKS.armor[state.player.look.armor] || LOOKS.armor.azure;
    const visorLook = LOOKS.visor[state.player.look.visor] || LOOKS.visor.ice;
    const helmetLook = LOOKS.helmet[state.player.look.helmet] || LOOKS.helmet.knight;
    const buildLook = LOOKS.build[state.player.look.build] || LOOKS.build.athletic;
    const isRider = state.player.look.rider === "rider";
    const broaderBuild = {
        bodyHeight: buildLook.bodyHeight + (isRider ? 1.1 : 0.6),
        chestWidth: buildLook.chestWidth + (isRider ? 2.2 : 1.2),
        waistWidth: buildLook.waistWidth + (isRider ? 1.4 : 0.5),
        shoulderRadius: buildLook.shoulderRadius + (isRider ? 1.1 : 0.6),
        headRadius: buildLook.headRadius + (isRider ? 0.7 : 0.45),
        armWidth: buildLook.armWidth + (isRider ? 1.1 : 0.7),
        bicepRadius: buildLook.bicepRadius + (isRider ? 1.35 : 0.8),
        legWidth: buildLook.legWidth + (isRider ? 0.9 : 0.4),
        swordArmReach: buildLook.swordArmReach
    };
    const alienWorld = isAlienWorld();
    const riderLeanX = isRider ? ((state.player.facingX >= 0 ? 1 : -1) * 16) : 0;
    if (isRider) {
        drawHorseMount(state.player, {
            facingX: state.player.facingX,
            horseTop: "#56453c",
            horseMid: "#45352b",
            horseBottom: "#2d231d",
            horseNeck: "#3f3028",
            horseLeg: "#18130f",
            saddle: "#5b4537",
            saddleFront: "#49352b",
            horseMane: "#13100e",
            horseNose: "#241c17",
            horseEar: "#342821",
            rein: visorLook.color
        });
    }
    drawHumanoidFigure(state.player, {
        bob: Math.sin(state.elapsedMs / 150) * 1.4,
        facingX: state.player.facingX,
        facingY: state.player.facingY,
        rideLeanX: riderLeanX,
        bodyHeight: broaderBuild.bodyHeight,
        baseLift: isRider ? -34 : 12,
        chestWidth: broaderBuild.chestWidth,
        waistWidth: broaderBuild.waistWidth,
        shoulderRadius: broaderBuild.shoulderRadius,
        headRadius: broaderBuild.headRadius,
        armorTop: armorLook.armorTop,
        armorBottom: armorLook.armorBottom,
        armorTrim: "#f6d67a",
        capeTop: armorLook.capeTop,
        capeBottom: armorLook.capeBottom,
        rippedShirt: true,
        sixPack: true,
        shirtColor: "rgba(214, 216, 214, 0.94)",
        skin: LOOKS.skin[state.player.look.skin] || LOOKS.skin.warm,
        hair: LOOKS.hair[state.player.look.hair] || LOOKS.hair.brown,
        helmet: alienWorld ? "#dce8f6" : (helmetLook.shade || armorLook.helmet),
        visor: alienWorld ? "#8feaff" : visorLook.color,
        visorGlow: alienWorld ? "rgba(173, 244, 255, 0.8)" : visorLook.glow,
        crest: helmetLook.crest,
        sideProfile: isRider,
        pauldron: armorLook.pauldron,
        armColor: LOOKS.skin[state.player.look.skin] || LOOKS.skin.warm,
        armWidth: broaderBuild.armWidth,
        bicepRadius: broaderBuild.bicepRadius,
        walkCycle: state.player.walkCycle || 0,
        legColor: "#404855",
        bootColor: "#d1ae56",
        legWidth: broaderBuild.legWidth,
        riding: isRider,
        shield: "#798b96",
        swordLength: 17,
        swordBlade: "#edf5fb",
        swordEdge: armorLook.swordEdge,
        swordHilt: "#caa04d",
        swordArmReach: broaderBuild.swordArmReach,
        glow: "rgba(142, 238, 255, 0.1)",
        glowBlur: 8
    });
}

function drawFirstPersonView() {
    return;
}

function drawWitnesses() {
    if (state.phase !== "town" && state.phase !== "hunt") {
        return;
    }

    state.witnesses.forEach((witness) => {
        const glow = witness.talked ? "rgba(99, 240, 160, 0.3)" : "rgba(255, 221, 124, 0.38)";
        const alienWorld = isAlienWorld();
        drawHumanoidFigure(witness, {
            bob: Math.sin(state.elapsedMs / 210 + witness.x) * 1.5,
            facingX: -1,
            facingY: 0,
            bodyHeight: 24,
            baseLift: 10,
            chestWidth: 9,
            waistWidth: 5,
            shoulderRadius: 4.5,
            headRadius: 3.5,
            armorTop: alienWorld ? (witness.talked ? "#88d3cf" : "#8fc0f0") : (witness.talked ? "#b5dce6" : "#d7c4a4"),
            armorBottom: alienWorld ? (witness.talked ? "#24595d" : "#314c74") : (witness.talked ? "#466474" : "#7e6b5f"),
            armorTrim: "#b8f2ff",
            capeTop: "rgba(64, 74, 97, 0.48)",
            capeBottom: "rgba(18, 22, 30, 0.18)",
            skin: alienWorld ? "#9de38a" : "#e3c4ad",
            hair: alienWorld ? "#1d3342" : "#4b3529",
            helmet: null,
            visor: null,
            visorGlow: null,
            pauldron: null,
            armColor: alienWorld ? "#9de38a" : "#e3c4ad",
            armWidth: 8,
            bicepRadius: 5.2,
            walkCycle: state.elapsedMs / 140 + witness.x * 0.002,
            legColor: "#4f463e",
            bootColor: "#231c19",
            shield: "#7b8d96",
            swordLength: 6,
            swordBlade: "#dde5ea",
            swordEdge: "#8ceaff",
            swordHilt: "#73808f",
            swordArmReach: 10,
            glow,
            glowBlur: 10
        });

        if (distanceBetween(state.player, witness) < 88 && state.phase === "town") {
            ctx.fillStyle = "rgba(255, 240, 187, 0.98)";
            ctx.font = "700 14px Trebuchet MS";
            ctx.textAlign = "center";
            ctx.fillText("Press E to talk", witness.x + witness.width / 2, witness.y - 10);
        }
    });
}

function drawCastleGuards() {
    if ((state.phase !== "town" && state.phase !== "hunt") || !state.castleGuards.length) {
        return;
    }

    state.castleGuards.forEach((guard) => {
        const cleared = state.castleAccessGranted;
        const glow = cleared ? "rgba(99, 240, 160, 0.28)" : "rgba(255, 224, 124, 0.34)";
        drawHumanoidFigure(guard, {
            bob: Math.sin(state.elapsedMs / 190 + guard.x * 0.003) * 1.2,
            facingX: guard.x < state.player.x ? 1 : -1,
            facingY: 0,
            bodyHeight: 25,
            baseLift: 10,
            chestWidth: 10,
            waistWidth: 5.4,
            shoulderRadius: 4.8,
            headRadius: 3.6,
            armorTop: "#d8cfab",
            armorBottom: "#66574d",
            armorTrim: "#fff2b3",
            capeTop: "rgba(63, 74, 92, 0.4)",
            capeBottom: "rgba(18, 24, 30, 0.12)",
            skin: "#e4c6af",
            hair: "#3a2a1f",
            helmet: null,
            visor: null,
            visorGlow: null,
            armColor: "#e4c6af",
            armWidth: 8.2,
            bicepRadius: 5.4,
            walkCycle: state.elapsedMs / 150 + guard.x * 0.001,
            legColor: "#4e443b",
            bootColor: "#2a221d",
            shield: "#81919b",
            swordLength: 8,
            swordBlade: "#eef5f8",
            swordEdge: "#9fe4ff",
            swordHilt: "#7d8a93",
            swordArmReach: 11,
            glow,
            glowBlur: 10
        });

        if (distanceBetween(state.player, guard) < 92 && (state.phase === "town" || state.phase === "hunt")) {
            ctx.fillStyle = "rgba(255, 240, 187, 0.98)";
            ctx.font = "700 14px Trebuchet MS";
            ctx.textAlign = "center";
            ctx.fillText("Press E to talk", guard.x + guard.width / 2, guard.y - 12);
        }
    });
}

function drawWolfScout(scout, facingX, facingY) {
    const centerX = scout.x + scout.width / 2;
    const centerY = scout.y + scout.height / 2;
    const stride = Math.sin(scout.pulse * 5.6) * 2.2;
    const dir = facingX >= 0 ? 1 : -1;

    drawGroundShadow(centerX + 2, scout.y + scout.height + 7, 24, 8, 0.18);

    ctx.save();
    ctx.translate(centerX, centerY);
    if (dir < 0) {
        ctx.scale(-1, 1);
    }

    ctx.fillStyle = "#62544a";
    ctx.beginPath();
    ctx.ellipse(-1, 4, 14, 8.5, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#4a3f38";
    ctx.beginPath();
    ctx.ellipse(8, -1, 7.5, 6.5, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(10, -6);
    ctx.lineTo(13, -13);
    ctx.lineTo(6, -8);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(4, -5);
    ctx.lineTo(6, -12);
    ctx.lineTo(1, -7);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#3a312b";
    ctx.fillRect(-12, 7, 4, 12 + stride);
    ctx.fillRect(-4, 7, 4, 12 - stride);
    ctx.fillRect(4, 7, 4, 12 - stride);
    ctx.fillRect(11, 7, 4, 12 + stride);

    ctx.strokeStyle = "#3a312b";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(-13, 0);
    ctx.lineTo(-20, -7 - stride * 0.35);
    ctx.stroke();

    ctx.fillStyle = "#201a17";
    ctx.beginPath();
    ctx.arc(10, -2, 1.2, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#f5e2c4";
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(13, 3);
    ctx.lineTo(17, 4);
    ctx.stroke();

    ctx.restore();
}

function drawTownScouts() {
    if (state.phase !== "town" && state.phase !== "hunt") {
        return;
    }

    state.townScouts.forEach((scout) => {
        const alienWorld = isAlienWorld();
        const playerCenter = getCenter(state.player);
        const scoutCenter = getCenter(scout);
        const dx = playerCenter.x - scoutCenter.x;
        const dy = playerCenter.y - scoutCenter.y;
        const length = Math.hypot(dx, dy) || 1;
        const palettes = {
            bridge: {
                armorTop: "#d9d3cb",
                armorBottom: "#6b6055",
                capeTop: "rgba(71, 52, 44, 0.72)",
                capeBottom: "rgba(16, 10, 8, 0.18)",
                shield: "#867666",
                swordEdge: "#fff0d5",
                glow: "rgba(255, 207, 142, 0.22)"
            },
            forest: {
                armorTop: "#98b08a",
                armorBottom: "#3f5940",
                capeTop: "rgba(36, 63, 38, 0.76)",
                capeBottom: "rgba(10, 18, 11, 0.18)",
                shield: "#617257",
                swordEdge: "#dff9cf",
                glow: "rgba(150, 226, 151, 0.2)"
            },
            little: {
                armorTop: "#c9beb2",
                armorBottom: "#64574f",
                capeTop: "rgba(63, 49, 41, 0.72)",
                capeBottom: "rgba(17, 12, 10, 0.18)",
                shield: "#79675d",
                swordEdge: "#fff1cf",
                glow: "rgba(255, 220, 150, 0.18)"
            },
            gate: {
                armorTop: "#b6becf",
                armorBottom: "#4d5668",
                capeTop: "rgba(52, 54, 78, 0.78)",
                capeBottom: "rgba(14, 15, 24, 0.18)",
                shield: "#727c91",
                swordEdge: "#dde7ff",
                glow: "rgba(170, 190, 255, 0.22)"
            },
            road: {
                armorTop: "#c7c0bb",
                armorBottom: "#62554d",
                capeTop: "rgba(56, 43, 39, 0.72)",
                capeBottom: "rgba(15, 10, 9, 0.18)",
                shield: "#7d6d61",
                swordEdge: "#fff8e8",
                glow: "rgba(255, 120, 125, 0.18)"
            }
        };
        const palette = palettes[scout.variant] || palettes.road;

        if (scout.variant === "wolf") {
            drawWolfScout(scout, dx / length, dy / length);
            drawBar(scout.x, scout.y - 10, scout.width, 5, scout.hp / scout.maxHp, "#f2b0a6");
            return;
        }

        if (scout.mounted) {
            drawHorseMount(scout, {
                facingX: dx / length,
                baseLift: 8,
                horseTop: scout.variant === "gate" ? "#3f4149" : "#6a4f3f",
                horseBottom: scout.variant === "gate" ? "#1d2027" : "#2f2119",
                horseNeck: scout.variant === "forest" ? "#403229" : "#49362b",
                horseLeg: "#1a1411",
                rein: palette.swordEdge,
                saddle: "#5d4337",
                horseMane: "#141112"
            });
        }

        const zombieScout = scout.variant === "zombie";
        drawHumanoidFigure(scout, {
            bob: Math.sin(scout.pulse) * 1.6 - (scout.mounted ? 14 : 0),
            facingX: dx / length,
            facingY: dy / length,
            bodyHeight: scout.variant === "little" ? 20 : 26,
            baseLift: scout.mounted ? 0 : 10,
            chestWidth: scout.variant === "little" ? 8.2 : 11,
            waistWidth: scout.variant === "little" ? 4.4 : 6,
            shoulderRadius: scout.variant === "little" ? 3.8 : 5.5,
            headRadius: scout.variant === "little" ? 2.8 : 3.5,
            armorTop: zombieScout ? "#4b5a4b" : "#242830",
            armorBottom: "#0d1016",
            armorTrim: "#6c0f18",
            capeTop: "rgba(8, 8, 12, 0.98)",
            capeBottom: "rgba(0, 0, 0, 0.3)",
            skin: zombieScout ? "#8ca18a" : (alienWorld ? "#12161c" : "#101216"),
            hair: "#090a0d",
            helmet: "rgba(16, 18, 24, 0.96)",
            visor: "#ff4545",
            visorGlow: "rgba(255, 98, 98, 0.9)",
            pauldron: "#2f3540",
            crest: null,
            armColor: "#101216",
            armWidth: scout.variant === "little" ? 6.8 : 9.5,
            bicepRadius: scout.variant === "little" ? 4.3 : 6.4,
            walkCycle: scout.pulse * 4,
            legColor: "#141820",
            bootColor: "#12151b",
            shield: "#1b2028",
            swordLength: scout.variant === "little" ? 7 : 10,
            swordBlade: "#2c3139",
            swordEdge: "#ff5a5a",
            swordHilt: "#4d5562",
            glow: zombieScout ? "rgba(124, 255, 124, 0.14)" : "rgba(255, 84, 84, 0.2)",
            glowBlur: 10
        });

        drawBar(scout.x, scout.y - 10, scout.width, 5, scout.hp / scout.maxHp, "#f2b0a6");
    });
}

function drawLairEntrance() {
    if (!state.lairEntrance || !state.lairEntrance.active || (state.phase !== "town" && state.phase !== "hunt")) {
        return;
    }

    const entrance = state.lairEntrance;
    ctx.save();
    if (entrance.underground) {
        drawGroundShadow(entrance.x + 42, entrance.y + 72, 54, 16, 0.22);
        ctx.fillStyle = "#2b313a";
        ctx.beginPath();
        ctx.ellipse(entrance.x + 42, entrance.y + 42, 42, 28, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(103, 226, 255, 0.88)";
        ctx.lineWidth = 4;
        ctx.stroke();
        drawDoor(entrance.x + 18, entrance.y + 20, 48, 46, {
            frame: "#313947",
            panelTop: "#66788f",
            panelBottom: "#364150",
            inset: "#82e7ff",
            handle: "#d7f7ff",
            arch: "rgba(47, 57, 72, 0.92)"
        });
    } else {
        drawGroundShadow(entrance.x + entrance.width / 2, entrance.y + entrance.height + 10, 58, 16, 0.22);
        ctx.fillStyle = "#2f3542";
        ctx.beginPath();
        ctx.roundRect(entrance.x, entrance.y, entrance.width, entrance.height, 18);
        ctx.fill();
        ctx.strokeStyle = "rgba(103, 226, 255, 0.9)";
        ctx.lineWidth = 4;
        ctx.stroke();
        drawDoor(entrance.x + 28, entrance.y + 18, 54, 72, {
            frame: "#262c38",
            panelTop: "#657386",
            panelBottom: "#394454",
            inset: "#88ecff",
            handle: "#d5fbff",
            arch: "rgba(52, 60, 75, 0.92)"
        });
    }
    ctx.fillStyle = "rgba(118, 231, 255, 0.96)";
    ctx.font = "700 16px Trebuchet MS";
    ctx.textAlign = "center";
    ctx.fillText(entrance.underground ? "Hidden Hangar" : "Black Site", entrance.x + 42, entrance.y - 12);
    ctx.restore();
}

function drawEnemy(enemy) {
    const glow = 0.4 + Math.sin(enemy.pulse) * 0.2;
    const alienWorld = isAlienWorld();
    const zombieWorld = state.questWorld === "zombie";
    const isQuestOneWorld = state.questWorld === "world1" && state.questIndex === 0;
    const playerCenter = getCenter(state.player);
    const enemyCenter = getCenter(enemy);
    const dx = playerCenter.x - enemyCenter.x;
    const dy = playerCenter.y - enemyCenter.y;
    const length = Math.hypot(dx, dy) || 1;

    if (enemy.spiritType) {
        drawStormSpiritMinion(enemy, {
            facingX: dx / length,
            facingY: dy / length
        });
        drawBar(
            enemy.x,
            enemy.y - 12,
            enemy.width + 10,
            6,
            enemy.hp / enemy.maxHp,
            enemy.waterSpirit ? "#7fd6ff" : (enemy.earthSpirit ? "#d1a77f" : "#7cffd6")
        );
        return;
    }

    if (enemy.mounted) {
        drawHorseMount(enemy, {
            facingX: dx / length,
            baseLift: 10,
            horseTop: "#4a4650",
            horseBottom: "#24222a",
            horseNeck: "#35313a",
            horseLeg: "#121116",
            rein: "#ff6666",
            saddle: "#5c3d3d",
            horseMane: "#0f0f13"
        });
    }

    drawHumanoidFigure(enemy, {
        bob: Math.sin(enemy.pulse * 1.6) * 2 - (enemy.mounted ? 14 : 0),
        facingX: dx / length,
        facingY: dy / length,
        bodyHeight: 28,
        baseLift: enemy.mounted ? 2 : 12,
        chestWidth: 12,
        waistWidth: 6,
        shoulderRadius: 6,
        headRadius: 3.8,
        armorTop: zombieWorld ? "#495847" : "#1a1d24",
        armorBottom: "#06070a",
        armorTrim: zombieWorld ? "#6a8a58" : "#5f0f18",
        capeTop: "rgba(8, 8, 12, 0.98)",
        capeBottom: "rgba(0, 0, 0, 0.34)",
        skin: zombieWorld ? "#8ea18a" : "#090a0d",
        hair: "#08090c",
        helmet: "rgba(16, 18, 24, 0.96)",
        visor: zombieWorld ? "#97ff75" : "#ff3b3b",
        visorGlow: zombieWorld ? "rgba(157, 255, 128, 0.9)" : "rgba(255, 98, 98, 0.9)",
        pauldron: "#20242d",
        crest: null,
        armColor: "#090a0d",
        armWidth: 10,
        bicepRadius: 6.8,
        walkCycle: enemy.pulse * 3.5,
        legColor: "#12151b",
        bootColor: "#111319",
        shield: "#1a1d24",
        swordLength: enemy.poisonArcher ? 14 : 12,
        swordBlade: "#2d3036",
        swordEdge: zombieWorld ? "#9cff8c" : (enemy.poisonArcher ? "#6eff98" : "#ff4b4b"),
        swordHilt: "#424853",
        glow: zombieWorld ? `rgba(142, 255, 142, ${glow * 0.6})` : (enemy.poisonArcher ? `rgba(110, 255, 152, ${glow})` : `rgba(255, 74, 74, ${glow})`),
        glowBlur: 16
    });

    if (enemy.poisonArcher) {
        ctx.save();
        ctx.translate(enemyCenter.x, enemyCenter.y - (enemy.mounted ? 14 : 3));
        ctx.rotate(Math.atan2(dy, dx));
        ctx.strokeStyle = "rgba(158, 255, 188, 0.95)";
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.arc(-7, 0, 9, -1.08, 1.08);
        ctx.stroke();
        ctx.strokeStyle = "#dce6d1";
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(-7, -8);
        ctx.lineTo(-7, 8);
        ctx.stroke();
        ctx.restore();
    }

    drawBar(enemy.x, enemy.y - 12, enemy.width, 6, enemy.hp / enemy.maxHp, "#ff8e9d");
}

function drawBossEntity(boss) {
    if (!boss.active) {
        return;
    }

    const zombieBossFight = state.phase === "boss-zombie" || boss.zombieBoss;
    const shipLikeBoss = (state.phase === "boss-ship" || (state.phase === "final-boss-rush" && !boss.dragonBoss)) && !zombieBossFight;
    const alienWorld = isAlienWorld();
    const pulse = 0.5 + Math.sin(boss.pulse) * 0.25;
    const playerCenter = getCenter(state.player);
    const bossCenter = getCenter(boss);
    const dx = playerCenter.x - bossCenter.x;
    const dy = playerCenter.y - bossCenter.y;
    const length = Math.hypot(dx, dy) || 1;

    if (boss.dragonBoss) {
        ctx.save();
        drawGroundShadow(boss.x + boss.width / 2, boss.y + boss.height + 56, 136, 30, 0.24);
        ctx.translate(boss.x + boss.width / 2, boss.y + boss.height / 2 + Math.sin(boss.pulse * 1.8) * 6);
        ctx.rotate(Math.atan2(dy, dx) * 0.12);

        const wingFlap = Math.sin(boss.pulse * 2.8) * 22;
        ctx.fillStyle = "#5a271b";
        ctx.beginPath();
        ctx.moveTo(-10, 10);
        ctx.quadraticCurveTo(-96, -48 - wingFlap, -30, -10);
        ctx.quadraticCurveTo(-60, 24, -8, 22);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(10, 10);
        ctx.quadraticCurveTo(96, -48 - wingFlap, 30, -10);
        ctx.quadraticCurveTo(60, 24, 8, 22);
        ctx.fill();

        ctx.strokeStyle = "rgba(255, 169, 86, 0.55)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(-18, -2);
        ctx.lineTo(-82, -42 - wingFlap * 0.45);
        ctx.lineTo(-34, 4);
        ctx.moveTo(18, -2);
        ctx.lineTo(82, -42 - wingFlap * 0.45);
        ctx.lineTo(34, 4);
        ctx.stroke();

        const body = ctx.createLinearGradient(0, -46, 0, 40);
        body.addColorStop(0, "#d97a3b");
        body.addColorStop(0.5, "#923a1f");
        body.addColorStop(1, "#47150e");
        ctx.fillStyle = body;
        ctx.beginPath();
        ctx.ellipse(0, 12, 34, 46, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(255, 211, 144, 0.16)";
        ctx.beginPath();
        ctx.ellipse(-8, -6, 16, 8, -0.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#8c4328";
        ctx.beginPath();
        ctx.moveTo(-12, 40);
        ctx.lineTo(-38, 96);
        ctx.lineTo(-18, 92);
        ctx.lineTo(-2, 48);
        ctx.moveTo(12, 40);
        ctx.lineTo(38, 96);
        ctx.lineTo(18, 92);
        ctx.lineTo(2, 48);
        ctx.strokeStyle = "#3a140f";
        ctx.lineWidth = 10;
        ctx.stroke();

        ctx.fillStyle = "#6a2a17";
        ctx.beginPath();
        ctx.moveTo(0, 38);
        ctx.quadraticCurveTo(20, 88, 72, 106);
        ctx.quadraticCurveTo(28, 82, 10, 46);
        ctx.fill();

        ctx.fillStyle = "#c46b34";
        ctx.beginPath();
        ctx.moveTo(-22, -12);
        ctx.quadraticCurveTo(-12, -52, 0, -60);
        ctx.quadraticCurveTo(12, -52, 22, -12);
        ctx.quadraticCurveTo(12, 12, 0, 16);
        ctx.quadraticCurveTo(-12, 12, -22, -12);
        ctx.fill();

        ctx.fillStyle = "#ebb884";
        ctx.beginPath();
        ctx.moveTo(-18, -28);
        ctx.lineTo(-8, -58);
        ctx.lineTo(0, -34);
        ctx.lineTo(8, -58);
        ctx.lineTo(18, -28);
        ctx.lineTo(8, -32);
        ctx.lineTo(0, -18);
        ctx.lineTo(-8, -32);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#ffe9c6";
        ctx.beginPath();
        ctx.moveTo(-10, 0);
        ctx.lineTo(0, 22);
        ctx.lineTo(10, 0);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#ff6767";
        ctx.beginPath();
        ctx.arc(-9, -14, 4.5, 0, Math.PI * 2);
        ctx.arc(9, -14, 4.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(255, 96, 96, 0.2)";
        ctx.beginPath();
        ctx.ellipse(0, -10, 28, 14, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(255, 181, 96, 0.9)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(-2, 4);
        ctx.lineTo(dx > 0 ? 48 : -48, 14);
        ctx.stroke();
        ctx.restore();
    } else if (shipLikeBoss) {
        ctx.save();
        drawGroundShadow(boss.x + boss.width / 2, boss.y + boss.height + 78, 120, 26, 0.24);
        ctx.shadowColor = "rgba(133, 184, 255, 0.38)";
        ctx.shadowBlur = 24;
        const hull = ctx.createLinearGradient(boss.x, boss.y + 18, boss.x, boss.y + boss.height + 56);
        hull.addColorStop(0, "#6f7d8d");
        hull.addColorStop(0.35, "#48535f");
        hull.addColorStop(1, "#2a323b");
        ctx.fillStyle = hull;
        ctx.beginPath();
        ctx.ellipse(boss.x + boss.width / 2, boss.y + boss.height / 2 + 34, 84, 32, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#6c7b8d";
        ctx.beginPath();
        ctx.ellipse(boss.x + boss.width / 2, boss.y + boss.height / 2 + 24, 48, 20, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,0.16)";
        ctx.beginPath();
        ctx.ellipse(boss.x + boss.width / 2 - 10, boss.y + boss.height / 2 + 18, 26, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#9fb0c0";
        ctx.fillRect(boss.x + 76, boss.y + 54, 36, 12);
        ctx.fillStyle = "#ffdba6";
        ctx.fillRect(boss.x + 24, boss.y + 46, 10, 8);
        ctx.fillRect(boss.x + 40, boss.y + 42, 12, 9);
        ctx.fillRect(boss.x + 58, boss.y + 46, 10, 8);
        ctx.strokeStyle = "rgba(255, 216, 138, 0.86)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(boss.x + 112, boss.y + 58);
        ctx.lineTo(boss.x + 138, boss.y + 58 + Math.sin(boss.pulse * 1.8) * 4);
        ctx.stroke();
        ctx.restore();
    }

    if (!boss.dragonBoss) {
        drawHumanoidFigure(boss, {
        bob: Math.sin(boss.pulse * 1.3) * 2,
        facingX: dx / length,
        facingY: dy / length,
        bodyHeight: 104,
        baseLift: 34,
        chestWidth: 44,
        waistWidth: 26,
        shoulderRadius: 18,
        headRadius: 8.8,
        armorTop: zombieBossFight ? "#617553" : (alienWorld ? "#445776" : "#343c49"),
        armorBottom: zombieBossFight ? "#1c2718" : (alienWorld ? "#1b2433" : "#12161d"),
        armorTrim: zombieBossFight ? "#b4ff88" : (alienWorld ? "#b6e7ff" : "#ff7979"),
        capeTop: "rgba(8, 10, 14, 0.99)",
        capeBottom: "rgba(3, 4, 8, 0.54)",
        skin: zombieBossFight ? "#96aa89" : (alienWorld ? "#9ee48b" : "#c9b3a4"),
        hair: alienWorld ? "#172636" : "#101215",
        helmet: alienWorld ? "rgba(22, 28, 40, 0.98)" : "rgba(14, 16, 22, 0.99)",
        visor: zombieBossFight ? "#a2ff78" : (alienWorld ? "#78d9ff" : "#ff5b5b"),
        visorGlow: zombieBossFight ? "rgba(172, 255, 136, 0.95)" : (alienWorld ? "rgba(148, 229, 255, 0.92)" : "rgba(255, 121, 121, 0.95)"),
        pauldron: alienWorld ? "#7086a6" : "#495362",
        crest: zombieBossFight ? "#b4ff88" : (alienWorld ? "#a7e5ff" : "#ff6767"),
        armColor: alienWorld ? "#9ee48b" : "#c9b3a4",
        armWidth: 15,
        bicepRadius: 12,
        walkCycle: boss.pulse * 2.2,
        attackPulse: shipLikeBoss ? 0.45 + Math.sin(boss.pulse * 2.2) * 0.18 : 0.12 + Math.sin(boss.pulse * 1.2) * 0.05,
        legColor: "#1b212b",
        bootColor: "#394352",
        shield: "#46505f",
        swordLength: 88,
        swordBlade: "#f1f3f7",
        swordEdge: zombieBossFight ? "#a2ff7a" : (alienWorld ? "#9edfff" : "#ff6d6d"),
        swordHilt: "#aab2be",
        swordArmReach: 40,
        glow: zombieBossFight ? `rgba(156, 255, 132, ${pulse * 0.86})` : (alienWorld ? `rgba(110, 219, 255, ${pulse})` : `rgba(255, 92, 92, ${pulse})`),
        glowBlur: 36
        });

        ctx.save();
        const chestX = boss.x + boss.width / 2;
        const chestY = boss.y + boss.height * 0.74;
        ctx.fillStyle = alienWorld ? "rgba(84, 107, 143, 0.92)" : "rgba(29, 34, 44, 0.96)";
        ctx.beginPath();
        ctx.roundRect(chestX - 18, chestY - 12, 36, 26, 6);
        ctx.fill();
        ctx.fillStyle = alienWorld ? "#9be4ff" : "#ff6d6d";
        ctx.fillRect(chestX - 12, chestY - 5, 9, 4);
        ctx.fillRect(chestX + 3, chestY - 5, 9, 4);
        ctx.fillRect(chestX - 4, chestY + 2, 8, 5);
        ctx.fillStyle = alienWorld ? "#dff7ff" : "#b9c4d1";
        ctx.fillRect(chestX - 12, chestY + 8, 24, 3);
        ctx.strokeStyle = zombieBossFight ? "rgba(166, 255, 132, 0.85)" : (alienWorld ? "rgba(180, 232, 255, 0.8)" : "rgba(255, 116, 116, 0.7)");
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(chestX - 24, chestY - 14);
        ctx.lineTo(chestX - 8, chestY - 22);
        ctx.lineTo(chestX, chestY - 14);
        ctx.lineTo(chestX + 8, chestY - 22);
        ctx.lineTo(chestX + 24, chestY - 14);
        ctx.stroke();
        ctx.restore();
    }

    drawBar(
        boss.x,
        boss.y - 18,
        boss.width,
        10,
        boss.hp / boss.maxHp,
        boss.dragonBoss ? "#ff9d4a" : (zombieBossFight ? "#9fff7a" : "#ff66d4")
    );
}

function drawBoss() {
    drawBossEntity(state.boss);
    state.extraBosses.forEach((boss) => drawBossEntity(boss));
}

function drawProjectiles() {
    state.projectiles.forEach((projectile) => {
        ctx.save();
        if (projectile.kind === "poison-arrow") {
            const angle = Math.atan2(projectile.vy, projectile.vx);
            ctx.translate(projectile.x, projectile.y);
            ctx.rotate(angle);
            const trail = ctx.createLinearGradient(-24, 0, 12, 0);
            trail.addColorStop(0, "rgba(78, 255, 130, 0)");
            trail.addColorStop(1, "rgba(157, 255, 176, 0.95)");
            ctx.strokeStyle = trail;
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(-20, 0);
            ctx.lineTo(10, 0);
            ctx.stroke();
            ctx.shadowColor = "#67ff92";
            ctx.shadowBlur = 16;
            ctx.fillStyle = "#7f5932";
            ctx.fillRect(-18, -1.5, 20, 3);
            ctx.fillStyle = "#d9e4e8";
            ctx.beginPath();
            ctx.moveTo(2, 0);
            ctx.lineTo(12, -4);
            ctx.lineTo(12, 4);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = "#68ff96";
            ctx.beginPath();
            ctx.arc(10, 0, 2.8, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "rgba(205, 255, 221, 0.82)";
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.moveTo(-16, 0);
            ctx.lineTo(-24, -5);
            ctx.moveTo(-16, 0);
            ctx.lineTo(-24, 5);
            ctx.stroke();
        } else if (projectile.kind === "water-wave") {
            ctx.translate(projectile.x, projectile.y);
            ctx.strokeStyle = "rgba(113, 218, 255, 0.92)";
            ctx.lineWidth = 5;
            ctx.beginPath();
            for (let x = -18; x <= 18; x += 4) {
                const y = Math.sin((x + state.elapsedMs * 0.25) * 0.25) * 5;
                if (x === -18) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.stroke();
            ctx.strokeStyle = "rgba(214, 248, 255, 0.84)";
            ctx.lineWidth = 2;
            ctx.beginPath();
            for (let x = -16; x <= 16; x += 4) {
                const y = Math.sin((x + state.elapsedMs * 0.2) * 0.32) * 3;
                if (x === -16) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.stroke();
        } else if (projectile.kind === "boulder") {
            ctx.translate(projectile.x, projectile.y);
            ctx.rotate(state.elapsedMs * 0.008);
            ctx.fillStyle = "#7c654d";
            ctx.beginPath();
            ctx.moveTo(-12, -6);
            ctx.lineTo(-4, -12);
            ctx.lineTo(9, -10);
            ctx.lineTo(14, 0);
            ctx.lineTo(8, 11);
            ctx.lineTo(-7, 12);
            ctx.lineTo(-14, 2);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = "rgba(44, 29, 19, 0.9)";
            ctx.lineWidth = 2;
            ctx.stroke();
        } else {
            const trail = ctx.createLinearGradient(
                projectile.x - projectile.vx * 5,
                projectile.y - projectile.vy * 5,
                projectile.x,
                projectile.y
            );
            trail.addColorStop(0, "rgba(255, 74, 74, 0)");
            trail.addColorStop(1, "rgba(255, 112, 112, 0.95)");
            ctx.strokeStyle = trail;
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.moveTo(projectile.x - projectile.vx * 5, projectile.y - projectile.vy * 5);
            ctx.lineTo(projectile.x, projectile.y);
            ctx.stroke();
            ctx.shadowColor = "#ff5757";
            ctx.shadowBlur = 20;
            ctx.fillStyle = "#ff5757";
            ctx.beginPath();
            ctx.arc(projectile.x, projectile.y, 7, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "rgba(255, 208, 208, 0.86)";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(projectile.x - projectile.vx * 1.5, projectile.y - projectile.vy * 1.5);
            ctx.lineTo(projectile.x, projectile.y);
            ctx.stroke();
        }
        ctx.restore();
    });
}

function drawEffects() {
    state.effects.forEach((effect) => {
        const ratio = effect.life / effect.maxLife;
        ctx.save();
        if (effect.type === "slash") {
            const slashAngle = Math.atan2(effect.vy, effect.vx);
            ctx.strokeStyle = `rgba(255, 240, 186, ${ratio})`;
            ctx.shadowColor = "rgba(142, 238, 255, 0.95)";
            ctx.shadowBlur = 24;
            ctx.lineWidth = 5 + (1 - ratio) * 7;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(effect.x - effect.vx * 14, effect.y - effect.vy * 14);
            ctx.lineTo(effect.x + effect.vx * (28 + (1 - ratio) * 16), effect.y + effect.vy * (28 + (1 - ratio) * 16));
            ctx.stroke();
            ctx.strokeStyle = `rgba(94, 231, 255, ${ratio * 0.9})`;
            ctx.lineWidth = 3 + (1 - ratio) * 3.5;
            ctx.beginPath();
            ctx.moveTo(effect.x - effect.vx * 8 + effect.vy * 6, effect.y - effect.vy * 8 - effect.vx * 6);
            ctx.lineTo(effect.x + effect.vx * (18 + (1 - ratio) * 8), effect.y + effect.vy * (18 + (1 - ratio) * 8));
            ctx.stroke();
            ctx.strokeStyle = `rgba(255, 255, 255, ${ratio * 0.5})`;
            ctx.lineWidth = 1.4 + (1 - ratio) * 1.8;
            ctx.beginPath();
            ctx.arc(effect.x, effect.y, 28 + (1 - ratio) * 12, slashAngle - 0.85, slashAngle + 0.6);
            ctx.stroke();
        } else if (effect.type === "hit" || effect.type === "muzzle") {
            ctx.fillStyle = effect.color;
            ctx.shadowColor = effect.color;
            ctx.shadowBlur = 26;
            for (let i = 0; i < 8; i += 1) {
                const angle = (Math.PI * 2 * i) / 8 + (1 - ratio) * 0.55;
                const radius = (1 - ratio) * 22;
                ctx.beginPath();
                ctx.arc(effect.x + Math.cos(angle) * radius, effect.y + Math.sin(angle) * radius, 2 + ratio * 3, 0, Math.PI * 2);
                ctx.fill();
            }
            for (let i = 0; i < 5; i += 1) {
                const angle = (Math.PI * 2 * i) / 5 + 0.35;
                const radius = 12 + (1 - ratio) * 18;
                ctx.strokeStyle = `rgba(255, 246, 210, ${ratio * 0.72})`;
                ctx.lineWidth = 1.6;
                ctx.beginPath();
                ctx.moveTo(effect.x, effect.y);
                ctx.lineTo(effect.x + Math.cos(angle) * radius, effect.y + Math.sin(angle) * radius);
                ctx.stroke();
            }
            ctx.strokeStyle = `rgba(255,255,255,${ratio * 0.6})`;
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.moveTo(effect.x - 8, effect.y);
            ctx.lineTo(effect.x + 8, effect.y);
            ctx.moveTo(effect.x, effect.y - 8);
            ctx.lineTo(effect.x, effect.y + 8);
            ctx.stroke();
            ctx.strokeStyle = `rgba(94, 231, 255, ${ratio * 0.55})`;
            ctx.lineWidth = 1.1;
            ctx.beginPath();
            ctx.arc(effect.x, effect.y, 10 + (1 - ratio) * 10, 0, Math.PI * 2);
            ctx.stroke();
        } else if (effect.type === "dust") {
            ctx.fillStyle = `rgba(205, 191, 166, ${ratio * 0.6})`;
            ctx.beginPath();
            ctx.arc(effect.x, effect.y, 3 + (1 - ratio) * 6, 0, Math.PI * 2);
            ctx.fill();
        } else if (effect.type === "lightning") {
            ctx.strokeStyle = `rgba(199, 236, 255, ${ratio})`;
            ctx.shadowColor = "rgba(144, 224, 255, 0.9)";
            ctx.shadowBlur = 18;
            ctx.lineWidth = 3.6;
            ctx.beginPath();
            ctx.moveTo(effect.x, effect.y - 90);
            ctx.lineTo(effect.x - 10, effect.y - 54);
            ctx.lineTo(effect.x + 6, effect.y - 30);
            ctx.lineTo(effect.x - 6, effect.y - 6);
            ctx.lineTo(effect.x + 8, effect.y + 16);
            ctx.stroke();
        } else if (effect.type === "rock-burst") {
            ctx.fillStyle = `rgba(142, 112, 82, ${ratio * 0.85})`;
            for (let i = 0; i < 6; i += 1) {
                const angle = (Math.PI * 2 * i) / 6;
                const radius = (1 - ratio) * 18;
                ctx.beginPath();
                ctx.arc(effect.x + Math.cos(angle) * radius, effect.y + Math.sin(angle) * radius, 3, 0, Math.PI * 2);
                ctx.fill();
            }
        } else if (effect.type === "flip") {
            ctx.strokeStyle = `rgba(150, 244, 255, ${ratio * 0.9})`;
            ctx.shadowColor = "rgba(150, 244, 255, 0.85)";
            ctx.shadowBlur = 16;
            ctx.lineWidth = 2.6;
            ctx.beginPath();
            ctx.moveTo(effect.x - effect.vx * 18, effect.y - effect.vy * 18);
            ctx.lineTo(effect.x + effect.vx * 18, effect.y + effect.vy * 18);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(effect.x, effect.y, 10 + (1 - ratio) * 14, 0, Math.PI * 2);
            ctx.stroke();
        } else if (effect.type === "jump") {
            ctx.strokeStyle = `rgba(255, 239, 171, ${ratio * 0.85})`;
            ctx.shadowColor = "rgba(255, 239, 171, 0.8)";
            ctx.shadowBlur = 14;
            ctx.lineWidth = 2.4;
            ctx.beginPath();
            ctx.arc(effect.x, effect.y, 12 + (1 - ratio) * 18, 0, Math.PI * 2);
            ctx.stroke();
        }
        ctx.restore();
    });
}

function drawRival() {
    if (state.mode !== "multiplayer" || !state.rival.active) {
        return;
    }

    const rival = state.rival;
    const ally = multiplayer.gameMode === "coop";
    drawHumanoidFigure(rival, {
        bob: Math.sin(rival.pulse * 1.6) * 2,
        facingX: rival.facingX,
        facingY: rival.facingY,
        bodyHeight: 78,
        baseLift: 28,
        armorTop: ally ? "#bcf7ff" : "#f2f3f6",
        armorBottom: ally ? "#406e88" : "#575d69",
        armorTrim: "#efc96f",
        capeTop: ally ? "rgba(14, 82, 110, 0.92)" : "rgba(73, 17, 23, 0.92)",
        capeBottom: ally ? "rgba(7, 28, 38, 0.22)" : "rgba(20, 8, 12, 0.22)",
        skin: "#c79e88",
        hair: "#201819",
        helmet: null,
        visor: null,
        visorGlow: null,
        pauldron: "#c7ccd4",
        armColor: "#c79e88",
        walkCycle: rival.pulse * 2.4,
        legColor: "#39414d",
        bootColor: "#10161b",
        shield: ally ? "#5a95a9" : "#7a808b",
        swordLength: 64,
        swordBlade: "#f2f7fb",
        swordEdge: ally ? "#a2f7ff" : "#d0d6df",
        swordHilt: "#c2a04d",
        glow: ally ? "rgba(157, 250, 255, 0.25)" : "rgba(233, 240, 250, 0.22)",
        glowBlur: 18
    });
    drawBar(rival.x, rival.y - 18, rival.width + 12, 8, rival.hp / rival.maxHp, ally ? "#8df2ff" : "#d4dde6");
}

function drawOverlay() {
    if (!state.started && !state.over) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.42)";
        ctx.fillRect(0, 0, GAME.width, GAME.height);
        ctx.fillStyle = "#eff3ff";
        ctx.font = "700 30px Trebuchet MS";
        ctx.textAlign = "center";
        ctx.fillText("Enter The Frontier", GAME.width / 2, GAME.height / 2 - 10);
        ctx.font = "18px Trebuchet MS";
        ctx.fillStyle = "#8ee5ff";
        ctx.fillText("Move with Arrow Keys or WASD. Press E near townspeople to ask what happened.", GAME.width / 2, GAME.height / 2 + 28);
        ctx.fillText("Use Space to fight, hold Shift to block, and tap B to flip clear of danger.", GAME.width / 2, GAME.height / 2 + 58);
    }

    if (state.over) {
        ctx.fillStyle = "rgba(5, 8, 16, 0.62)";
        ctx.fillRect(0, 0, GAME.width, GAME.height);
        ctx.fillStyle = "#ffd36b";
        ctx.font = "700 34px Trebuchet MS";
        ctx.textAlign = "center";
        ctx.fillText(state.victory ? "Sector Cleared" : "Mission Failed", GAME.width / 2, GAME.height / 2 - 18);
        ctx.font = "20px Trebuchet MS";
        ctx.fillStyle = "#eff3ff";
        ctx.fillText(
            state.victory
                ? `${state.player.name} cleared ${state.questWorld === "alien" ? "the Alien Patch" : "World 1"}.`
                : `Final Score: ${state.score}`,
            GAME.width / 2,
            GAME.height / 2 + 18
        );
    }

    if (state.phase === "alien-launch") {
        const progress = 1 - (state.launchIntroTimer / 3600);
        const shipY = -220 + progress * 330;
        const rampOpen = clamp((progress - 0.45) / 0.3, 0, 1);
        const troopAdvance = clamp((progress - 0.58) / 0.28, 0, 1);
        const bossAdvance = clamp((progress - 0.72) / 0.22, 0, 1);
        const dustDrift = Math.sin(state.elapsedMs * 0.006) * 6;

        ctx.fillStyle = "rgba(6, 10, 22, 0.82)";
        ctx.fillRect(0, 0, GAME.width, GAME.height);

        const sky = ctx.createLinearGradient(0, 0, 0, GAME.height);
        sky.addColorStop(0, "#060b18");
        sky.addColorStop(0.5, "#1b2342");
        sky.addColorStop(1, "#5d4a3d");
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, GAME.width, GAME.height);

        ctx.fillStyle = "rgba(255,255,255,0.78)";
        for (let i = 0; i < 40; i += 1) {
            const x = (i * 137) % GAME.width;
            const y = ((i * 97) % 240);
            ctx.beginPath();
            ctx.arc(x, y, i % 7 === 0 ? 2 : 1, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.fillStyle = "#6d4c32";
        ctx.beginPath();
        ctx.ellipse(GAME.width / 2, GAME.height - 58, 290, 54, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(255, 163, 98, 0.16)";
        ctx.fillRect(0, GAME.height - 120, GAME.width, 120);

        ctx.fillStyle = "rgba(84, 58, 39, 0.55)";
        for (let i = 0; i < 4; i += 1) {
            ctx.beginPath();
            ctx.ellipse(260 + i * 180 + dustDrift, GAME.height - 72 - i * 4, 82 - i * 8, 20 - i * 2, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.save();
        ctx.translate(GAME.width / 2, shipY);
        ctx.fillStyle = "#121722";
        ctx.beginPath();
        ctx.ellipse(0, 78, 180, 62, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#2f3745";
        ctx.beginPath();
        ctx.ellipse(0, 56, 104, 34, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,0.08)";
        ctx.beginPath();
        ctx.ellipse(-24, 46, 52, 12, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#394454";
        ctx.fillRect(-126, 76, 34, 12);
        ctx.fillRect(92, 76, 34, 12);
        ctx.strokeStyle = "rgba(255, 92, 92, 0.9)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(-162, 80);
        ctx.lineTo(-212, 80 + Math.sin(state.elapsedMs * 0.01) * 4);
        ctx.moveTo(162, 80);
        ctx.lineTo(212, 80 - Math.sin(state.elapsedMs * 0.01) * 4);
        ctx.stroke();
        ctx.fillStyle = "#1a202b";
        ctx.beginPath();
        ctx.moveTo(-38, 100);
        ctx.lineTo(38, 100);
        ctx.lineTo(38 + rampOpen * 30, 100 + rampOpen * 58);
        ctx.lineTo(-38 - rampOpen * 30, 100 + rampOpen * 58);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        const drawTrooperSilhouette = (x, y, scale, bossLike) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.scale(scale, scale);
            ctx.fillStyle = bossLike ? "#0b0f17" : "#151a23";
            ctx.beginPath();
            ctx.ellipse(0, -34, bossLike ? 13 : 9, bossLike ? 15 : 11, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(-14, -18);
            ctx.lineTo(14, -18);
            ctx.lineTo(18, 18);
            ctx.lineTo(0, 26);
            ctx.lineTo(-18, 18);
            ctx.closePath();
            ctx.fill();
            ctx.fillRect(-16, 20, 8, 30);
            ctx.fillRect(8, 20, 8, 30);
            ctx.fillRect(-22, -14, 8, 30);
            ctx.fillRect(14, -14, 8, 30);
            ctx.fillStyle = bossLike ? "#ff5757" : "#ff6d6d";
            ctx.fillRect(-7, -38, 14, 4);
            if (bossLike) {
                ctx.fillStyle = "rgba(8, 10, 14, 0.92)";
                ctx.beginPath();
                ctx.moveTo(-24, -8);
                ctx.lineTo(24, -8);
                ctx.lineTo(36, 58);
                ctx.lineTo(-36, 58);
                ctx.closePath();
                ctx.fill();
            }
            ctx.restore();
        };

        for (let i = 0; i < 4; i += 1) {
            const offset = i * 34 + troopAdvance * (48 + i * 12);
            drawTrooperSilhouette(
                GAME.width / 2 - 52 + i * 34,
                GAME.height - 84 + offset * 0.28,
                0.92,
                false
            );
        }

        drawTrooperSilhouette(
            GAME.width / 2 + 74,
            GAME.height - 92 + bossAdvance * 86,
            1.3,
            true
        );

        const introTitle = state.questWorld === "alien" ? "Hostile Ship Landing" : "Dark Ship Landing";
        const introLine = state.questWorld === "alien"
            ? "A dark ship descends on the alien world. Evil troops unload, and their dark lord steps out last."
            : "A dark ship crashes onto the planet. Evil troops pour out, and the boss emerges after them.";

        ctx.fillStyle = "#eff3ff";
        ctx.font = "700 34px Trebuchet MS";
        ctx.textAlign = "center";
        ctx.fillText(introTitle, GAME.width / 2, 112);
        ctx.font = "18px Trebuchet MS";
        ctx.fillStyle = "#ffb0b0";
        ctx.fillText(introLine, GAME.width / 2, 146);
    }

    if (state.phase === "underworld-awakening") {
        const progress = 1 - (state.awakeningTimer / 3400);
        const doorGlow = 0.35 + progress * 0.55;
        const crackHeight = 40 + progress * 180;

        ctx.fillStyle = "rgba(5, 4, 9, 0.82)";
        ctx.fillRect(0, 0, GAME.width, GAME.height);

        const sky = ctx.createLinearGradient(0, 0, 0, GAME.height);
        sky.addColorStop(0, "#09070d");
        sky.addColorStop(0.45, "#23151d");
        sky.addColorStop(1, "#0d090f");
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, GAME.width, GAME.height);

        ctx.fillStyle = "#19141a";
        ctx.fillRect(0, GAME.height - 120, GAME.width, 120);

        ctx.fillStyle = "#201921";
        ctx.fillRect(GAME.width / 2 - 110, GAME.height - 280, 90, 220);
        ctx.fillRect(GAME.width / 2 + 20, GAME.height - 280, 90, 220);
        ctx.fillStyle = `rgba(162, 255, 126, ${doorGlow})`;
        ctx.fillRect(GAME.width / 2 - 14, GAME.height - 250, 28, crackHeight);
        ctx.strokeStyle = `rgba(212, 255, 188, ${doorGlow})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(GAME.width / 2, GAME.height - 250);
        ctx.lineTo(GAME.width / 2 - 18, GAME.height - 210);
        ctx.lineTo(GAME.width / 2 + 12, GAME.height - 160);
        ctx.lineTo(GAME.width / 2 - 10, GAME.height - 118);
        ctx.stroke();

        ctx.fillStyle = "rgba(116, 255, 136, 0.12)";
        ctx.beginPath();
        ctx.ellipse(GAME.width / 2, GAME.height - 82, 180 + progress * 50, 34 + progress * 12, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#eff3ff";
        ctx.font = "700 34px Trebuchet MS";
        ctx.textAlign = "center";
        ctx.fillText("The Underworld Opens", GAME.width / 2, 118);
        ctx.font = "18px Trebuchet MS";
        ctx.fillStyle = "#b5ffb3";
        ctx.fillText("You defeated the plague lord... and accidentally opened the underworld doors.", GAME.width / 2, 152);
        ctx.fillText("The Dragon of Kartasou, ancient guardian of the underworld, is waking.", GAME.width / 2, 178);
    }
}

function drawHudText() {
    ctx.fillStyle = "rgba(229, 246, 255, 0.9)";
    ctx.font = "600 16px Trebuchet MS";
    ctx.textAlign = "left";
    const hudTitle = state.mode === "training"
        ? "Rider Training"
        : (state.premiumMode === "nightmare"
            ? "Premium Nightmare"
            : (state.premiumMode === "alien-gauntlet"
                ? "Alien Gauntlet"
                : (state.premiumMode === "legend-rush"
                    ? "Legend Boss Rush"
                    : (state.premiumMode === "dragon-storm"
                        ? "Dragon Storm"
                        : (state.premiumMode === "zombie-last-stand"
                            ? "Zombie Last Stand"
                            : (state.premiumMode === "chaos-arena"
                                ? "Chaos Arena"
                    : (state.mode === "pve"
                        ? "Endless PvE Survival"
                        : (state.mode === "bossrush" ? "Boss Rush" : getCurrentQuest().title))))))));
    ctx.fillText(`Sector ${state.wave}`, 20, 30);
    ctx.fillText(hudTitle, 20, 52);

    if (state.mode === "training") {
        ctx.fillStyle = "rgba(130, 232, 255, 0.92)";
        ctx.fillText("Beat each rider wave to gain +1 damage and +1 speed.", 20, 74);
        ctx.fillText(`Current Riders: ${state.enemies.length}`, 20, 96);
    } else if (state.premiumMode === "nightmare" && !state.over) {
        ctx.fillStyle = "rgba(255, 118, 118, 0.95)";
        ctx.fillText(`Nightmare Wave ${state.wave} | Evil People: ${state.enemies.length}`, 20, 74);
        ctx.fillText(`Next Boss In: ${Math.max(0, getPveBossThreshold() - state.questKills)} defeats`, 20, 96);
    } else if (state.premiumMode === "alien-gauntlet" && !state.over) {
        ctx.fillStyle = "rgba(124, 229, 255, 0.94)";
        ctx.fillText(`Alien Quest ${state.questIndex + 1}/${ALIEN_PATCH_QUESTS.length} | ${getCurrentQuest().title}`, 20, 74);
        ctx.fillText("Premium mode: alien world unlocked from the home screen.", 20, 96);
    } else if (state.premiumMode === "legend-rush" && !state.over) {
        ctx.fillStyle = "rgba(255, 190, 128, 0.96)";
        ctx.fillText(`Legend Round ${state.bossRushIndex + 1}/${state.bossRushLineup.length} | ${state.boss.name}`, 20, 74);
        ctx.fillText("Premium mode: all bosses are stronger in this rush.", 20, 96);
    } else if (state.premiumMode === "dragon-storm" && !state.over) {
        ctx.fillStyle = "rgba(255, 166, 92, 0.96)";
        ctx.fillText(`Dragon ${state.bossRushIndex + 1}/${state.bossRushLineup.length} | ${state.boss.name}`, 20, 74);
        ctx.fillText("Premium mode: this rush is all dragons.", 20, 96);
    } else if (state.premiumMode === "zombie-last-stand" && !state.over) {
        ctx.fillStyle = "rgba(162, 255, 120, 0.94)";
        ctx.fillText(`Zombie Last Stand | ${state.boss.name}`, 20, 74);
        ctx.fillText("Premium mode: direct plague boss battle.", 20, 96);
    } else if (state.premiumMode === "chaos-arena" && !state.over) {
        ctx.fillStyle = "rgba(255, 132, 132, 0.95)";
        ctx.fillText(`Chaos Arena | Boss ${state.boss.name}`, 20, 74);
        ctx.fillText(`Enemies active: ${state.enemies.length}`, 20, 96);
    } else if (state.mode === "bossrush" && !state.over) {
        ctx.fillStyle = "rgba(255, 190, 128, 0.94)";
        ctx.fillText(`Round ${state.bossRushIndex + 1}/${state.bossRushLineup.length} | ${state.boss.name}`, 20, 74);
        ctx.fillText("Defeat every boss in order to clear Boss Rush.", 20, 96);
    } else if (state.mode === "pve" && !state.over) {
        ctx.fillStyle = "rgba(130, 232, 255, 0.92)";
        const pveHudText = state.phase === "final-boss-rush"
            ? `Final Wave 100 | Bosses Left: ${[state.boss, ...state.extraBosses].filter((boss) => boss && boss.active).length}`
            : (state.boss.active
                ? `Boss Active: ${state.boss.name}`
                : `Next Boss In: ${Math.max(0, getPveBossThreshold() - state.questKills)} defeats`);
        ctx.fillText(
            pveHudText,
            20,
            74
        );
        ctx.fillText(`Current Evil People: ${state.enemies.length}`, 20, 96);
        if (state.comboCount > 1) {
            ctx.fillStyle = "rgba(255, 227, 132, 0.96)";
            ctx.fillText(`Style ${state.comboCount}x | ${getStyleRank(state.comboCount)}`, 20, 118);
        }
    }
}

function drawQuestMap() {
    const mapWidth = 280;
    const mapHeight = 150;
    const mapX = GAME.width - mapWidth - 22;
    const mapY = 18;
    const playerX = mapX + (state.player.x / WORLD.width) * mapWidth;
    const playerY = mapY + (state.player.y / WORLD.height) * mapHeight;
    const lairX = state.lairEntrance ? mapX + (state.lairEntrance.x / WORLD.width) * mapWidth : mapX + mapWidth - 18;
    const lairY = state.lairEntrance ? mapY + (state.lairEntrance.y / WORLD.height) * mapHeight : mapY + mapHeight / 2;

    ctx.save();
    ctx.fillStyle = "rgba(8, 13, 24, 0.76)";
    ctx.fillRect(mapX, mapY, mapWidth, mapHeight);
    state.worldAreas.forEach((area) => {
        ctx.fillStyle = area.tone;
        ctx.fillRect(
            mapX + (area.x / WORLD.width) * mapWidth,
            mapY + (area.y / WORLD.height) * mapHeight,
            (area.width / WORLD.width) * mapWidth,
            (area.height / WORLD.height) * mapHeight
        );
    });
    ctx.strokeStyle = "rgba(255,255,255,0.18)";
    ctx.strokeRect(mapX, mapY, mapWidth, mapHeight);
    ctx.fillStyle = "#8fe9ff";
    ctx.font = "700 16px Trebuchet MS";
    ctx.textAlign = "left";
    ctx.fillText("Quest Map", mapX + 12, mapY + 20);
    ctx.fillStyle = "#c3f2ff";
    ctx.font = "600 11px Trebuchet MS";
    ctx.fillText("Outer Rim View", mapX + 12, mapY + 36);
    ctx.fillStyle = "#d7dde8";
    ctx.font = "600 12px Trebuchet MS";
    ctx.fillText("Bridge", mapX + 88, mapY + 58);
    ctx.fillText("Pass", mapX + 156, mapY + 90);
    ctx.fillText("Base", mapX + 228, mapY + 72);
    ctx.fillStyle = "#63f0a0";
    ctx.beginPath();
    ctx.arc(playerX, playerY, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = state.lairEntrance && state.lairEntrance.active ? "#ff9f70" : "#d7dde8";
    ctx.beginPath();
    ctx.arc(lairX, lairY, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

function drawFirstPersonOverlay() {
    return;
}

function draw() {
    ctx.save();
    ctx.scale(CHASE_CAMERA_ZOOM, CHASE_CAMERA_ZOOM);
    ctx.translate(-state.camera.x, -state.camera.y);
    applyWorldProjection();
    drawBackdrop();
    drawTownProps();
    drawEvidenceSpots();
    drawObstacles();
    drawLairEntrance();
    drawWitnesses();
    drawCastleGuards();
    drawTownScouts();
    drawDragons();
    drawPlayer();
    drawRival();
    state.enemies.forEach(drawEnemy);
    drawBoss();
    drawProjectiles();
    drawEffects();
    ctx.restore();
    drawFirstPersonOverlay();
    drawHudText();
    drawQuestMap();
    drawOverlay();
}

let previousTime = performance.now();

function gameLoop(timestamp) {
    const deltaMs = Math.min(32, timestamp - previousTime || 16.67);
    previousTime = timestamp;

    safelyRun("Game loop", () => {
        updateState(deltaMs);
        draw();
        requestAnimationFrame(gameLoop);
    });
}

function onKeyChange(event, pressed) {
    if (isTypingTarget(event.target)) {
        return;
    }

    const { code } = event;
    if (code === "ArrowLeft" || code === "KeyA") {
        keys.left = pressed;
    }
    if (code === "ArrowRight" || code === "KeyD") {
        keys.right = pressed;
    }
    if (code === "ArrowUp" || code === "KeyW") {
        keys.up = pressed;
    }
    if (code === "ArrowDown" || code === "KeyS") {
        keys.down = pressed;
    }
    if (code === "ShiftLeft" || code === "ShiftRight") {
        keys.block = pressed;
    }
    if ((code === "Space" || code === "Enter") && pressed) {
        event.preventDefault();
        triggerAttack();
    }
    if (code === "KeyE" && pressed) {
        event.preventDefault();
        talkToWitness();
    }
    if (code === "KeyB" && pressed) {
        event.preventDefault();
        triggerFlip();
    }
    if (code === "KeyJ" && pressed) {
        event.preventDefault();
        triggerJump();
    }
}

function updatePointerPosition(event) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = GAME.width / rect.width;
    const scaleY = GAME.height / rect.height;

    pointer.x = ((event.clientX - rect.left) * scaleX) / CHASE_CAMERA_ZOOM + state.camera.x;
    pointer.y = ((event.clientY - rect.top) * scaleY) / CHASE_CAMERA_ZOOM + state.camera.y;
    pointer.active = true;
}

window.addEventListener("error", (event) => {
    showFatalError("Runtime error", event.error || event.message);
});
window.addEventListener("unhandledrejection", (event) => {
    showFatalError("Promise error", event.reason);
});

document.addEventListener("keydown", (event) => safelyRun("Keyboard input", () => onKeyChange(event, true)));
document.addEventListener("keyup", (event) => safelyRun("Keyboard input", () => onKeyChange(event, false)));

if (canvas) {
    canvas.addEventListener("pointermove", (event) => safelyRun("Pointer move", () => updatePointerPosition(event)));
    canvas.addEventListener("pointerdown", (event) => {
        safelyRun("Pointer down", () => {
            updatePointerPosition(event);
            if (state.started && !state.over && event.button === 0) {
                triggerAttack();
            }
        });
    });
    canvas.addEventListener("pointerleave", () => {
        pointer.active = false;
    });
}

document.querySelectorAll("[data-action]").forEach((button) => {
    const action = button.dataset.action;
    const startPress = (event) => {
        event.preventDefault();
        handleMoveButton(action, true);
    };
    const endPress = (event) => {
        event.preventDefault();
        handleMoveButton(action, false);
    };

    button.addEventListener("pointerdown", startPress);
    button.addEventListener("pointerup", endPress);
    button.addEventListener("pointerleave", endPress);
    button.addEventListener("pointercancel", endPress);
});

if (ui.restartButton) {
    ui.restartButton.addEventListener("click", () => safelyRun("Restart Run", () => {
        clearSavedRun();
        resetGame();
        openHome();
    }));
}
if (ui.clearLogButton) {
    ui.clearLogButton.addEventListener("click", () => safelyRun("Clear Log", () => {
        state.log = [];
        if (ui.combatLog) {
            ui.combatLog.innerHTML = "";
        }
    }));
}
if (ui.startButton) {
    ui.startButton.addEventListener("click", () => safelyRun("Open Home", () => openHome()));
}
if (ui.homeContinueButton) {
    ui.homeContinueButton.addEventListener("click", () => safelyRun("Continue", handleContinue));
}
if (ui.homeContinueLargeButton) {
    ui.homeContinueLargeButton.addEventListener("click", () => safelyRun("Continue", handleContinue));
}
if (ui.homeInstallButton) {
    ui.homeInstallButton.addEventListener("click", () => safelyRun("Install App", handleInstallApp));
}
if (ui.homeDemoButton) {
    ui.homeDemoButton.addEventListener("click", () => safelyRun("Play Demo", () => {
        requestFullscreenPlay();
        startGame("quest", 0, "world1");
    }));
}
if (ui.homeBuyPremiumButton) {
    ui.homeBuyPremiumButton.addEventListener("click", () => safelyRun("Open Premium Ticket", () => showHomePanel("premium")));
}
if (ui.homeMultiplayerButton) {
    ui.homeMultiplayerButton.addEventListener("click", () => safelyRun("Open Multiplayer", () => showHomePanel("multiplayer")));
}
if (ui.homePveButton) {
    ui.homePveButton.addEventListener("click", () => safelyRun("Play Quests", () => {
        requestFullscreenPlay();
        startGame("quest", 0, "world1");
    }));
}
if (ui.homeBossRushButton) {
    ui.homeBossRushButton.addEventListener("click", () => safelyRun("Boss Rush", () => {
        requestFullscreenPlay();
        startBossRush();
    }));
}
if (ui.homePremiumNightmareButton) {
    ui.homePremiumNightmareButton.addEventListener("click", () => safelyRun("Premium Nightmare", () => {
        requestFullscreenPlay();
        startPremiumNightmare();
    }));
}
if (ui.homePremiumAlienButton) {
    ui.homePremiumAlienButton.addEventListener("click", () => safelyRun("Premium Alien Gauntlet", () => {
        requestFullscreenPlay();
        startPremiumAlienGauntlet();
    }));
}
if (ui.homePremiumLegendButton) {
    ui.homePremiumLegendButton.addEventListener("click", () => safelyRun("Premium Legend Boss Rush", () => {
        requestFullscreenPlay();
        startPremiumLegendRush();
    }));
}
if (ui.homePremiumDragonButton) {
    ui.homePremiumDragonButton.addEventListener("click", () => safelyRun("Premium Dragon Storm", () => {
        requestFullscreenPlay();
        startPremiumDragonStorm();
    }));
}
if (ui.homePremiumZombieButton) {
    ui.homePremiumZombieButton.addEventListener("click", () => safelyRun("Premium Zombie Last Stand", () => {
        requestFullscreenPlay();
        startPremiumZombieLastStand();
    }));
}
if (ui.homePremiumChaosButton) {
    ui.homePremiumChaosButton.addEventListener("click", () => safelyRun("Premium Chaos Arena", () => {
        requestFullscreenPlay();
        startPremiumChaosArena();
    }));
}
if (ui.homeZombieButton) {
    ui.homeZombieButton.addEventListener("click", () => safelyRun("Zombie Apocalypse", () => {
        requestFullscreenPlay();
        startGame("zombie");
    }));
}
if (ui.homeSurvivalButton) {
    ui.homeSurvivalButton.addEventListener("click", () => safelyRun("Endless Survival", () => {
        requestFullscreenPlay();
        startGame("pve");
    }));
}
if (ui.homeTrainingButton) {
    ui.homeTrainingButton.addEventListener("click", () => safelyRun("Training", () => {
        requestFullscreenPlay();
        startTraining();
    }));
}
if (ui.homePremiumTicketButton) {
    ui.homePremiumTicketButton.addEventListener("click", () => safelyRun("Premium Ticket", () => showHomePanel("premium")));
}
if (ui.homeReviewsButton) {
    ui.homeReviewsButton.addEventListener("click", () => safelyRun("Reviews", () => showHomePanel("reviews")));
}
if (ui.homeCreatorButton) {
    ui.homeCreatorButton.addEventListener("click", () => safelyRun("About The Creator", () => showHomePanel("creator")));
}
if (ui.homeStoreButton) {
    ui.homeStoreButton.addEventListener("click", () => safelyRun("Open Store", () => showHomePanel("store")));
}
if (ui.homeEditButton) {
    ui.homeEditButton.addEventListener("click", () => safelyRun("Open Editor", () => showHomePanel("editor")));
}
if (ui.homeChatButton) {
    ui.homeChatButton.addEventListener("click", () => safelyRun("Open Chat", () => showHomePanel("chat")));
}
if (ui.premiumTicketBuyButton) {
    ui.premiumTicketBuyButton.addEventListener("click", () => safelyRun("Buy Premium Ticket", () => purchaseItem("premium-ticket")));
}
if (ui.multiplayerJoinButton) {
    ui.multiplayerJoinButton.addEventListener("click", () => safelyRun("Join Multiplayer", joinMultiplayerRoom));
}
document.querySelectorAll("[data-home-back]").forEach((button) => {
    button.addEventListener("click", () => safelyRun("Back", () => showHomePanel("main")));
});
if (ui.playerNameInput) {
    ui.playerNameInput.addEventListener("input", savePlayerIdentity);
}
if (ui.creatorAboutInput) {
    ui.creatorAboutInput.addEventListener("input", savePlayerIdentity);
}
if (ui.lookSkin) {
    ui.lookSkin.addEventListener("change", savePlayerIdentity);
}
if (ui.lookHair) {
    ui.lookHair.addEventListener("change", savePlayerIdentity);
}
if (ui.lookArmor) {
    ui.lookArmor.addEventListener("change", savePlayerIdentity);
}
if (ui.lookBuild) {
    ui.lookBuild.addEventListener("change", savePlayerIdentity);
}
if (ui.lookVisor) {
    ui.lookVisor.addEventListener("change", savePlayerIdentity);
}
if (ui.lookHelmet) {
    ui.lookHelmet.addEventListener("change", savePlayerIdentity);
}
if (ui.lookRider) {
    ui.lookRider.addEventListener("change", savePlayerIdentity);
}
if (ui.dialogueWhatButton) {
    ui.dialogueWhatButton.addEventListener("click", () => safelyRun("Dialogue", () => confirmWitnessDialogue("what")));
}
if (ui.dialogueWhereButton) {
    ui.dialogueWhereButton.addEventListener("click", () => safelyRun("Dialogue", () => confirmWitnessDialogue("where")));
}
if (ui.dialogueWhoButton) {
    ui.dialogueWhoButton.addEventListener("click", () => safelyRun("Dialogue", () => confirmWitnessDialogue("who")));
}
if (ui.dialogueCloseButton) {
    ui.dialogueCloseButton.addEventListener("click", () => safelyRun("Close Dialogue", closeDialogue));
}
if (ui.chatSendButton) {
    ui.chatSendButton.addEventListener("click", () => safelyRun("Send Chat", sendChatMessage));
}
if (ui.chatInput) {
    ui.chatInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendChatMessage();
        }
    });
}
if (ui.homeChatSendButton) {
    ui.homeChatSendButton.addEventListener("click", () => safelyRun("Send Home Chat", sendHomeChatMessage));
}
if (ui.reviewSubmitButton) {
    ui.reviewSubmitButton.addEventListener("click", () => safelyRun("Submit Review", submitReview));
}
if (ui.homeChatInput) {
    ui.homeChatInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendHomeChatMessage();
        }
    });
}
if (ui.reviewFeedbackInput) {
    ui.reviewFeedbackInput.addEventListener("keydown", (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
            event.preventDefault();
            submitReview();
        }
    });
}
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement && !state.started) {
        leaveFullscreenPlay();
    }
});

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    appInstall.deferredPrompt = event;
    updateInstallUi();
});

window.addEventListener("appinstalled", () => {
    appInstall.installed = true;
    appInstall.deferredPrompt = null;
    updateInstallUi();
});

window.addEventListener("beforeunload", () => {
    savePlayerProfile();
    saveCurrentRun();
});

safelyRun("Initial boot", () => {
    registerAppShell();
    resetProgressOnce();
    resetGame();
    if (!restoreSavedRun()) {
        openHome();
    }
    requestAnimationFrame(gameLoop);
});
