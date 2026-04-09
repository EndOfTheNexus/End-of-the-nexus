...         player["xp"] += enemy["xp"]
...         player["gold"] += enemy["gold"]
...         print(f"+{enemy['xp']} XP, +{enemy['gold']\
} Gold")
...         check_level_up()
...     else:
...         print("\n💀 You were defeated...")
...         player["hp"] = player["max_hp"] // 2
... 
... # QUEST SYSTEM
... def quest():
...     print("\n📜 Quest: The Flooded Cavern")
...     choice = input("Do you FIGHT, SNEAK, or NEGOTI\
ATE? ").lower()
... 
...     if choice == "fight":
...         print("You chose to fight!")
...         fight()
...         player["xp"] += 50
... 
...     elif choice == "sneak":
...         print("You rescued villagers silently!")
...         player["xp"] += 40
...         player["gold"] += 20
... 
...     elif choice == "negotiate":
...         print("You made peace with the creatures!"\
)
...         player["xp"] += 60
... 
...     else:
...         print("Invalid choice.")
... 
...     check_level_up()
... 
... # GAME LOOP
... def game():
...     print("🎮 Welcome to NEXUS of HERO'S: The Grin\
d")
... 
...     while True:
...         print("\n--- MENU ---")
...         print("1. Fight")
...         print("2. Quest")
...         print("3. Stats")
...         print("4. Quit")
... 
...         choice = input("Choose: ")
... 
...         if choice == "1":
...             fight()
...         elif choice == "2":
...             quest()
...         elif choice == "3":
...             print(player)
...         elif choice == "4":
...             print("Goodbye!")
...             break
...         else:
...             print("Invalid choice.")
... 
... # START GAME
... game()player = {
...     "name": "Hero",
...     "hp": 100,
...     "max_hp": 100,
...     "xp": 0,
...     "level": 1,
...     "gold": 200,
...     "weapon": "Basic Sword",
...     "damage": 10,
...     "armor": 0,
...     "inventory": []
... }shop_items = {
...     "1": {"name": "Iron Sword", "cost": 50, "type"\
: "weapon", "damage": 15},
...     "2": {"name": "Fire Sword", "cost": 100, "type\
": "weapon", "damage": 25},
...     "3": {"name": "Heavy Armor", "cost": 150, "typ\
e": "armor", "armor": 10},
...     "4": {"name": "Health Potion", "cost": 25, "ty\
pe": "potion", "heal": 30},
...     "5": {"name": "100 XP", "cost": 100, "type": "\
xp", "xp": 100}
... }def shop():
...     while True:
...         print("\n🛒 SHOP")
...         print(f"Gold: {player['gold']}")
... 
...         for key, item in shop_items.items():
...             print(f"{key}. {item['name']} - {item[\
'cost']} gold")
... 
...         print("6. Exit Shop")
... 
...         choice = input("Buy what? ")
... 
...         if choice == "6":
...             break
... 
...         if choice in shop_items:
...             item = shop_items[choice]
... 
...             if player["gold"] >= item["cost"]:
...                 player["gold"] -= item["cost"]
... 
...                 if item["type"] == "weapon":
...                     player["weapon"] = item["name"\
]
...                     player["damage"] = item["damag\
e"]
...                     print(f"⚔️ You equipped {item[\
'name']}!")
... 
...                 elif item["type"] == "armor":
...                     player["armor"] += item["armor\
"]
...                     print(f"🛡️ Armor increased by \
{item['armor']}!")
... 
...                 elif item["type"] == "potion":
...                     player["inventory"].append(ite\
m)
...                     print("🧪 Potion added to inve\
ntory!")
... 
...                 elif item["type"] == "xp":
...                     player["xp"] += item["xp"]
...                     print(f"✨ Gained {item['xp']}\
 XP!")
... 
...                 print("✅ Purchase successful!")
...             else:
...                 print("❌ Not enough gold!")
...         else:
...             print("Invalid choice.")action = input\
("\nAttack, Heal, or Potion? ").lower()
... 
... if action == "potion":
...     if player["inventory"]:
...         potion = player["inventory"].pop()
...         player["hp"] = min(player["hp"] + potion["\
heal"], player["max_hp"])
...         print(f"🧪 You used a potion and healed {p\
otion['heal']} HP!")
...     else:
...         print("No potions!")print("1. Fight")
... print("2. Quest")
... print("3. Shop")
... print("4. Stats")
... print("5. Quit")elif choice == "3":
...     shop()
... elif choice == "4":
...     print(player)
... elif choice == "5":
...     breakdef create_player2():
...     name = input("Enter Player 2 name: ")
...     return {
...         "name": name,
...         "hp": 100,
...         "max_hp": 100,
...         "damage": 10,
...         "armor": 0,
...         "xp": 0,
...         "gold": 100
...     }def pvp():
...     player2 = create_player2()
... 
...     print(f"\n⚔️ {player['name']} vs {player2['nam\
e']} BEGINS!")
... 
...     turn = 1
... 
...     while player["hp"] > 0 and player2["hp"] > 0:
... 
...         if turn % 2 == 1:
...             attacker = player
...             defender = player2
...         else:
...             attacker = player2
...             defender = player
... 
...         print(f"\n🎯 {attacker['name']}'s turn")
... 
...         action = input("Attack or Block? ").lower(\
)
... 
...         if action == "attack":
...             damage = random.randint(5, attacker["d\
amage"])
...             damage -= defender.get("armor", 0)
...             damage = max(1, damage)
... 
...             defender["hp"] -= damage
...             print(f"{attacker['name']} hits {defen\
der['name']} for {damage} damage!")
... 
...         elif action == "block":
...             print(f"{attacker['name']} blocks and \
prepares!")
... 
...         print(f"{player['name']} HP: {player['hp']\
} | {player2['name']} HP: {player2['hp']}")
... 
...         turn += 1
... 
...     # WINNER
...     if player["hp"] > 0:
...         print(f"\n🏆 {player['name']} WINS!")
...         player["xp"] += 100
...         player["gold"] += 50
...     else:
...         print(f"\n🏆 {player2['name']} WINS!")
... 
...     # Reset HP after fight
...     player["hp"] = player["max_hp"]print("1. Fight\
")
... print("2. Quest")
... print("3. Shop")
... print("4. PvP")
... print("5. Stats")
... print("6. Quit")elif choice == "4":
...     pvp()
... elif choice == "5":
...     print(player)
... elif choice == "6":
...     breakplayer.update({
...     "ability": "fire",   # fire, lightning, shadow
...     "wins": 0,
...     "streak": 0
... })def use_ability(attacker, defender):
...     if attacker["ability"] == "fire":
...         print("🔥 Fire Blast!")
...         defender["hp"] -= 20
... 
...     elif attacker["ability"] == "lightning":
...         print("⚡ Lightning Strike!")
...         defender["hp"] -= 15
...         print("⚡ Extra quick attack!")
...         defender["hp"] -= 10
... 
...     elif attacker["ability"] == "shadow":
...         print("🌑 Shadow Steal!")
...         defender["hp"] -= 15
...         attacker["hp"] += 10
... 
...     else:
...         print("No ability equipped!")def calculate\
_damage(attacker, defender):
...     damage = random.randint(5, attacker["damage"])
... 
...     # CRIT SYSTEM
...     if random.random() < 0.2:
...         print("💥 CRITICAL HIT!")
...         damage *= 2
... 
...     damage -= defender.get("armor", 0)
...     return max(1, damage)def special_move(attacker\
, defender):
...     print("⚡ SPECIAL MOVE ATTEMPT!")
...     if random.random() < 0.15:
...         print("💀 ONE HIT KO!!!")
...         defender["hp"] = 0
...     else:
...         print("❌ Missed special move!")def update\
_rank():
...     if player["streak"] >= 10:
...         player["rank"] = "Legend"
...     elif player["streak"] >= 5:
...         player["rank"] = "Champion"
...     elif player["streak"] >= 3:
...         player["rank"] = "Warrior"
...     else:
...         player["rank"] = "Newbie"def pvp():
...     player2 = create_player2()
... 
...     print(f"\n⚔️ {player['name']} vs {player2['nam\
e']} BEGINS!")
... 
...     turn = 1
... 
...     while player["hp"] > 0 and player2["hp"] > 0:
... 
...         if turn % 2 == 1:
...             attacker = player
...             defender = player2
...         else:
...             attacker = player2
...             defender = player
... 
...         print(f"\n🎯 {attacker['name']}'s turn")
...         action = input("Attack / Ability / Special\
 / Block: ").lower()
... 
...         if action == "attack":
...             damage = calculate_damage(attacker, de\
fender)
...             defender["hp"] -= damage
...             print(f"{attacker['name']} hits for {d\
amage} damage!")
... 
...         elif action == "ability":
...             use_ability(attacker, defender)
... 
...         elif action == "special":
...             special_move(attacker, defender)
... 
...         elif action == "block":
...             print("🛡️ Blocking reduces next damage\
!")
...             attacker["armor"] += 5
... 
...         print(f"{player['name']} HP: {player['hp']\
} | {player2['name']} HP: {player2['hp']}")
... 
...         turn += 1
... 
...     # RESULT
...     if player["hp"] > 0:
...         print(f"\n🏆 {player['name']} WINS!")
...         player["xp"] += 150
...         player["gold"] += 75
...         player["streak"] += 1
...     else:
...         print(f"\n🏆 {player2['name']} WINS!")
...         player["streak"] = 0
... 
...     update_rank()
... 
...     print(f"🔥 Win Streak: {player['streak']} | Ra\
nk: {player['rank']}")
... 
...     # Reset HP
...     player["hp"] = player["max_hp"]def choose_abil\
ity():
...     print("\nChoose Ability:")
...     print("1. Fire")
...     print("2. Lightning")
...     print("3. Shadow")
... 
...     choice = input("Pick: ")
... 
...     if choice == "1":
...         player["ability"] = "fire"
...     elif choice == "2":
...         player["ability"] = "lightning"
...     elif choice == "3":
...         player["ability"] = "shadow"
... 
...     print(f"You equipped {player['ability']} abili\
ty!")print("1. Fight")
... print("2. Quest")
... print("3. Shop")
... print("4. PvP")
... print("5. Choose Ability")
... print("6. Stats")
... print("7. Quit")elif choice == "5":
...     choose_ability()
... elif choice == "6":
...     print(player)
... elif choice == "7":
...     breakplayer["dragons"] = {
...     "fire": 0,
...     "ice": 0,
...     "lightning": 0,
...     "earth": 0
... }def summon_dragon(type, attacker, defender):
...     if player["dragons"][type] <= 0:
...         print("❌ No dragon summons left!")
...         return
... 
...     player["dragons"][type] -= 1
... 
...     if type == "fire":
...         print("🐉🔥 Fire Dragon summoned!")
...         defender["hp"] -= 30
... 
...     elif type == "ice":
...         print("🐉❄️ Ice Dragon summoned!")
...         defender["hp"] -= 20
...         print("❄️ Enemy slowed (skip next turn!)")
...         defender["skip"] = True
... 
...     elif type == "lightning":
...         print("🐉⚡ Lightning Dragon summoned!")
...         defender["hp"] -= 25
...         print("⚡ Double strike!")
...         defender["hp"] -= 15
... 
...     elif type == "earth":
...         print("🐉🌍 Earth Dragon summoned!")
...         attacker["hp"] += 20
...         attacker["armor"] += 5
... 
...     print(f"{type.capitalize()} dragon used!")acti\
on = input("Attack / Ability / Special / Dragon / Bloc\
k: ").lower()elif action == "dragon":
...     print("Choose dragon: fire, ice, lightning, ea\
rth")
...     d = input("Type: ").lower()
...     if d in player["dragons"]:
...         summon_dragon(d, attacker, defender)
...     else:
...         print("Invalid dragon!")shop_items["6"] = \
{"name": "Fire Dragon Summon", "cost": 200, "type": "d\
ragon", "dragon": "fire"}
... shop_items["7"] = {"name": "Ice Dragon Summon", "c\
ost": 200, "type": "dragon", "dragon": "ice"}
... shop_items["8"] = {"name": "Lightning Dragon Summo\
n", "cost": 250, "type": "dragon", "dragon": "lightnin\
g"}
... shop_items["9"] = {"name": "Earth Dragon Summon", \
"cost": 200, "type": "dragon", "dragon": "earth"}elif \
item["type"] == "dragon":
...     dragon_type = item["dragon"]
...     player["dragons"][dragon_type] += 1
...     print(f"🐉 You got a {dragon_type} dragon summ\
on!")player["dragons"] = {
...     "fire": {"count": 0, "xp": 0, "level": 1},
...     "ice": {"count": 0, "xp": 0, "level": 1},
...     "lightning": {"count": 0, "xp": 0, "level": 1}\
,
...     "earth": {"count": 0, "xp": 0, "level": 1}
... }def evolve_dragon(type):
...     dragon = player["dragons"][type]
... 
...     if dragon["xp"] >= dragon["level"] * 50:
...         dragon["xp"] = 0
...         dragon["level"] += 1
...         print(f"🐉✨ Your {type} dragon evolved to\
 level {dragon['level']}!")def summon_dragon(type, att\
acker, defender):
...     dragon = player["dragons"][type]
... 
...     if dragon["count"] <= 0:
...         print("❌ No summons left!")
...         return
... 
...     dragon["count"] -= 1
...     level = dragon["level"]
... 
...     print(f"\n🐉 {type.upper()} DRAGON (Lv {level}\
) SUMMONED!")
... 
...     if type == "fire":
...         damage = 20 + (level * 5)
...         defender["hp"] -= damage
...         print(f"🔥 Fire blast deals {damage} damag\
e!")
... 
...     elif type == "ice":
...         damage = 15 + (level * 4)
...         defender["hp"] -= damage
...         defender["skip"] = True
...         print(f"❄️ Ice freeze deals {damage} damag\
e and freezes enemy!")
... 
...     elif type == "lightning":
...         damage = 18 + (level * 5)
...         defender["hp"] -= damage
...         defender["hp"] -= 10
...         print(f"⚡ Lightning strikes twice for {da\
mage + 10} damage!")
... 
...     elif type == "earth":
...         heal = 15 + (level * 5)
...         attacker["hp"] += heal
...         attacker["armor"] += level * 2
...         print(f"🌍 Earth shield heals {heal} and a\
dds armor!")
... 
...     # Gain XP for dragon
...     dragon["xp"] += 25
...     evolve_dragon(type)player["dragons"][dragon_ty\
pe]["count"] += 1def view_dragons():
...     print("\n🐉 DRAGON STATS")
...     for d, data in player["dragons"].items():
...         print(f"{d.upper()} - Level: {data['level'\
]} | XP: {data['xp']} | Summons: {data['count']}")prin\
t("6. View Dragons")elif choice == "6":
...     view_dragons()4elif choice == "6":
...     view_dragons()def unlock_tsar():
...     if player["xp"] >= 1000 and player["level"] >=\
 10:
...         player["dragons"]["tsar"]["unlocked"] = Tr\
ue
...         print("🌌🐉 TSAR BOMBA DRAGON UNLOCKED!")e\
lif type == "tsar":
...     dragon = player["dragons"]["tsar"]
... 
...     if not dragon["unlocked"]:
...         print("❌ Tsar Dragon is locked!")
...         return
... 
...     if dragon["count"] <= 0:
...         print("❌ No Tsar summons!")
...         return
... 
...     dragon["count"] -= 1
... 
...     print("\n🌌🐉 TSAR BOMBA DRAGON AWAKENS...")
...     print("💀 THE FIELD IS ERUPTING WITH POWER 💀"\
)
... 
...     # MASSIVE DAMAGE
...     damage = 80 + (dragon["level"] * 20)
... 
...     # 50% chance instant wipe
...     if random.random() < 0.5:
...         print("☢️ NUCLEAR ANNIHILATION!!!")
...         defender["hp"] = 0
...     else:
...         defender["hp"] -= damage
...         print(f"💥 Tsar blast deals {damage} damag\
e!")
... 
...     # recoil (balanced)
...     attacker["hp"] -= 20
...     print("⚠️ The power hurts you too (-20 HP)")
... 
...     # XP gain
...     dragon["xp"] += 100
...     evolve_dragon("tsar")shop_items["10"] = {
...     "name": "Tsar Bomba Dragon Summon",
...     "cost": 1000,
...     "type": "dragon",
...     "dragon": "tsar"
... }if type == "tsar" and dragon["level"] == 5:
...     print("🌌👑 TSAR DRAGON FINAL FORM UNLOCKED: W\
ORLD BREAKER")if type == "tsar" and dragon["level"] ==\
 5:
...     print("🌌👑 TSAR DRAGON FINAL FORM UNLOCKED: W\
ORLD BREAKER")import random
... 
... current_arena = "normal"
... 
... def choose_arena():
...     global current_arena
...     print("\nChoose Arena:")
...     print("1. Normal میدان")
...     print("2. Obsidian Rift 🌌")
... 
...     choice = input("Pick: ")
... 
...     if choice == "2":
...         current_arena = "obsidian"
...         print("🌌 Entering the Obsidian Rift...")
...     else:
...         current_arena = "normal"def apply_arena_ef\
fects(attacker, defender, damage):
...     if current_arena == "obsidian":
...         print("🔥 Obsidian Rift boosts fire power!\
")
... 
...         # Fire buff (if using fire ability/dragon)
...         if attacker.get("ability") == "fire":
...             damage = int(damage * 1.2)
... 
...         # Random eruption
...         if random.random() < 0.2:
...             print("🌋 VOLCANIC ERUPTION!")
...             attacker["hp"] -= 10
...             defender["hp"] -= 10
... 
...     return damage



























oss, damage)
...             boss["hp"] -= damage
...             print(f"You deal {damage} damage!")
... 
...         elif action == "ability":
...             use_ability(player, boss)
... 
...         elif action == "dragon":
...             d = input("Choose dragon: fire, ice, l\
ightning, earth, tsar: ").lower()
...             summon_dragon(d, player, boss)
... 
...         elif action == "special":
...             special_move(player, boss)
... 
...         # BOSS TURN
...         if boss["hp"] > 0:
... 
...             # Dragon summon every 3 turns
...             if boss["turns"] % 3 == 0:
...                 print("🐉 Kael summons a dragon!")
...                 player["hp"] -= 25
... 
...             # Flame Collapse (AOE)
...             elif random.random() < 0.3:
...                 print("🔥 Flame Collapse!")
...                 player["hp"] -= 30
... 
...             # Shadow Bind
...             elif random.random() < 0.2:
...                 print("🌑 Shadow Bind! You are fro\
zen!")
...                 player["skip"] = True
... 
...             else:
...                 damage = random.randint(10, boss["\
damage"])
...                 damage -= player.get("armor", 0)
...                 damage = max(1, damage)
... 
...                 player["hp"] -= damage
...                 print(f"Kael hits you for {damage}\
!")
... 
...     # RESULT
...     if player["hp"] > 0:
...         print("\n🏆 You defeated Kael Vantor!")
...         player["xp"] += 500
...         player["gold"] += 300
... 
...         # Reward dragon
...         dragon_type = random.choice(["fire", "ice"\
, "lightning", "earth"])
...         player["dragons"][dragon_type]["count"] +=\
 1
...         print(f"🐉 You gained a {dragon_type} drag\
on!")
... 
...         unlock_tsar()
... 
...     else:
...         print("\n💀 You were defeated by Kael...")
...         player["hp"] = player["max_hp"]damage = ca\
lculate_damage(attacker, defender)
... damage = apply_arena_effects(attacker, defender, d\
amage)



























oss, damage)
...             boss["hp"] -= damage
...             print(f"You deal {damage} damage!")
... 
...         elif action == "ability":
...             use_ability(player, boss)
... 
...         elif action == "dragon":
...             d = input("Choose dragon: fire, ice, l\
ightning, earth, tsar: ").lower()
...             summon_dragon(d, player, boss)
... 
...         elif action == "special":
...             special_move(player, boss)
... 
...         # BOSS TURN
...         if boss["hp"] > 0:
... 
...             # Dragon summon every 3 turns
...             if boss["turns"] % 3 == 0:
...                 print("🐉 Kael summons a dragon!")
...                 player["hp"] -= 25
... 
...             # Flame Collapse (AOE)
...             elif random.random() < 0.3:
...                 print("🔥 Flame Collapse!")
...                 player["hp"] -= 30
... 
...             # Shadow Bind
...             elif random.random() < 0.2:
...                 print("🌑 Shadow Bind! You are fro\
zen!")
...                 player["skip"] = True
... 
...             else:
...                 damage = random.randint(10, boss["\
damage"])
...                 damage -= player.get("armor", 0)
...                 damage = max(1, damage)
... 
...                 player["hp"] -= damage
...                 print(f"Kael hits you for {damage}\
!")
... 
...     # RESULT
...     if player["hp"] > 0:
...         print("\n🏆 You defeated Kael Vantor!")
...         player["xp"] += 500
...         player["gold"] += 300
... 
...         # Reward dragon
...         dragon_type = random.choice(["fire", "ice"\
, "lightning", "earth"])
...         player["dragons"][dragon_type]["count"] +=\
 1
...         print(f"🐉 You gained a {dragon_type} drag\
on!")
... 
...         unlock_tsar()
... 
...     else:
...         print("\n💀 You were defeated by Kael...")
...         player["hp"] = player["max_hp"]print("8. F\
ight Kael Vantor (Boss)")elif choice == "8":
...     choose_arena()
...     kael_vantor()def create_character():
...     name = input("Enter your character name: ")
... 
...     character = {
...         "name": name,
...         "class": "Adventurer",
... 
...         # CORE STATS
...         "level": 1,
...         "xp": 0,
...         "gold": 100,
... 
...         # HEALTH & COMBAT
...         "hp": 100,
...         "max_hp": 100,
...         "damage": 10,
...         "armor": 0,
... 
...         # EQUIPMENT
...         "weapon": "Basic Sword",
...         "ability": "none",
... 
...         # SYSTEMS
...         "inventory": [],
...         "dragons": {
...             "fire": {"count": 0, "xp": 0, "level":\
 1},
...             "ice": {"count": 0, "xp": 0, "level": \
1},
...             "lightning": {"count": 0, "xp": 0, "le\
vel": 1},
...             "earth": {"count": 0, "xp": 0, "level"\
: 1},
...             "tsar": {"count": 0, "xp": 0, "level":\
 1, "unlocked": False}
...         },
... 
...         # PVP SYSTEM
...         "streak": 0,
...         "rank": "Newbie",
... 
...         # STATUS EFFECTS
...         "skip": False
...     }
... 
...     print(f"\n🎮 Character '{name}' created!")
...     return characterdef choose_class(character):
...     print("\nChoose a class:")
...     print("1. Warrior (High HP & Armor)")
...     print("2. Rogue (Fast & High Damage)")
...     print("3. Mage (Abilities stronger)")
... 
...     choice = input("Pick: ")
... 
...     if choice == "1":
...         character["class"] = "Warrior"
...         character["hp"] += 30
...         character["armor"] += 5
... 
...     elif choice == "2":
...         character["class"] = "Rogue"
...         character["damage"] += 10
... 
...     elif choice == "3":
...         character["class"] = "Mage"
...         character["ability"] = "fire"
... 
...     print(f"⚔️ You are now a {character['class']}!\
")def show_character(character):
...     print("\n📊 CHARACTER STATS")
...     print(f"Name: {character['name']}")
...     print(f"Class: {character['class']}")
...     print(f"Level: {character['level']} | XP: {cha\
racter['xp']}")
...     print(f"HP: {character['hp']}/{character['max_\
hp']}")
...     print(f"Damage: {character['damage']} | Armor:\
 {character['armor']}")
...     print(f"Gold: {character['gold']}")
...     print(f"Weapon: {character['weapon']}")
...     print(f"Ability: {character['ability']}")
...     print(f"Rank: {character['rank']} | Streak: {c\
haracter['streak']}")player = create_character()
... choose_class(player)elif choice == "stats":
...     show_character(player)def choose_class(charact\
er):
...     print("\nChoose a class:")
...     print("1. Warrior 🛡️")
...     print("2. Rogue ⚔️")
...     print("3. Mage 🔥")
...     print("4. Necromancer 💀")
...     print("5. Dragon Knight 🐉")
... 
...     choice = input("Pick: ")
... 
...     if choice == "1":
...         character["class"] = "Warrior"
...         character["hp"] += 30
...         character["armor"] += 5
... 
...     elif choice == "2":
...         character["class"] = "Rogue"
...         character["damage"] += 10
... 
...     elif choice == "3":
...         character["class"] = "Mage"
...         character["ability"] = "fire"
... 
...     elif choice == "4":
...         character["class"] = "Necromancer"
...         character["hp"] -= 10
...         character["damage"] += 5
...         character["ability"] = "shadow"
...         character["souls"] = 0   # NEW RESOURCE
... 
...     elif choice == "5":
...         character["class"] = "Dragon Knight"
...         character["hp"] += 20
...         character["damage"] += 5
...         character["ability"] = "fire"
...         character["dragon_boost"] = True  # buffs \
dragons
... 
...     print(f"⚔️ You are now a {character['class']}!\
")def necromancer_ability(attacker, defender):
...     print("💀 Soul Drain!")
...     damage = 15
...     defender["hp"] -= damage
... 
...     # heal from damage
...     attacker["hp"] += 10
... 
...     # collect souls
...     attacker["souls"] += 1
...     print(f"💀 Souls collected: {attacker['souls']\
}")def summon_undead(attacker):
...     if attacker.get("souls", 0) >= 3:
...         print("🧟 Summoning Undead Minion!")
...         attacker["souls"] -= 3
...         return {"name": "Undead", "damage": 10}
...     else:
...         print("❌ Not enough souls!")
...         return None# inside summon_dragon()
... if attacker.get("dragon_boost"):
...     print("🐉🔥 Dragon Knight boost activated!")
...     level += 1def use_ability(attacker, defender):
... 
...     # CLASS-SPECIFIC
...     if attacker["class"] == "Necromancer":
...         necromancer_ability(attacker, defender)
...         return
... 
...     # NORMAL ABILITIES
...     if attacker["ability"] == "fire":
...         print("🔥 Fire Blast!")
...         defender["hp"] -= 20
... 
...     elif attacker["ability"] == "lightning":
...         print("⚡ Lightning Strike!")
...         defender["hp"] -= 25
... 
...     elif attacker["ability"] == "shadow":
...         print("🌑 Shadow Strike!")
...         defender["hp"] -= 15
...         attacker["hp"] += 10elif action == "summon\
":
...     if attacker["class"] == "Necromancer":
...         undead = summon_undead(attacker)
...         if undead:
...             defender["hp"] -= undead["damage"]
...             print(f"🧟 Undead hits for {undead['da\
mage']}!")action = input("Attack / Ability / Special /\
 Dragon / Summon / Block: ").lower()action = input("At\
tack / Ability / Special / Dragon / Summon / Block: ")\
.lower()def create_overlord():
...     return {
...         "name": "The Overlord",
...         "hp": 500,
...         "max_hp": 500,
...         "damage": 30,
...         "armor": 15,
...         "phase": 1,
...         "cooldown": 0
...     }def overlord_ability(boss, player):
...     import random
... 
...     move = random.choice(["shadow", "storm", "gaze\
"])
... 
...     if move == "shadow":
...         print("🌑 Shadowstep Strike!")
...         dmg = 25
...         player["hp"] -= dmg
... 
...     elif move == "storm":
...         print("⛈️ Dark Storm unleashed!")
...         player["hp"] -= 20
...         boss["hp"] += 10  # lifesteal
... 
...     elif move == "gaze":
...         print("👁️ Golden Gaze activated!")
...         player["skip"] = Truedef check_phase(boss)\
:
...     if boss["hp"] <= 300 and boss["phase"] == 1:
...         boss["phase"] = 2
...         boss["damage"] += 10
...         print("\n💀 PHASE 2: The Overlord grows st\
ronger...")
... 
...     elif boss["hp"] <= 150 and boss["phase"] == 2:
...         boss["phase"] = 3
...         boss["damage"] += 15
...         print("\n☠️ FINAL PHASE: TRUE POWER UNLEAS\
HED!")









... 
...         check_phase(boss)
... 
...         print(f"\nYour HP: {player['hp']} | Overlo\
rd HP: {boss['hp']}")
... 
...         # PLAYER TURN
...         if player.get("skip"):
...             print("❌ You are paralyzed by the Gol\
den Gaze!")
...             player["skip"] = False
...         else:
...             action = input("Attack / Ability / Dra\
gon / Special: ").lower()
... 
...             if action == "attack":
...                 damage = calculate_damage(player, \
boss)
...                 boss["hp"] -= damage
...                 print(f"You deal {damage} damage!"\
)
... 
...             elif action == "ability":
...                 use_ability(player, boss)
... 
...             elif action == "dragon":
...                 d = input("Choose dragon: fire, ic\
e, lightning, earth, tsar: ").lower()
...                 summon_dragon(d, player, boss)
... 
...             elif action == "special":
...                 special_move(player, boss)
... 
...         # BOSS TURN
...         if boss["hp"] > 0:
...             if boss["cooldown"] == 0:
...                 overlord_ability(boss, player)
...                 boss["cooldown"] = 2
...             else:
...                 damage = random.randint(15, boss["\
damage"])
...                 damage -= player.get("armor", 0)
...                 damage = max(1, damage)
... 
...                 player["hp"] -= damage
...                 print(f"⚔️ Overlord strikes for {d\
amage}!")
... 
...                 boss["cooldown"] -= 1
... 
...     # RESULT
...     if player["hp"] > 0:
...         print("\n🏆 YOU DEFEATED THE OVERLORD!")
...         player["xp"] += 1000
...         player["gold"] += 500
... 
...         print("🌌 You are now a LEGENDARY PLAYER!"\
)
... 
...     else:
...         print("\n💀 The Overlord has defeated you.\
..")
...         player["hp"] = player["max_hp"]print("9. F\
inal Boss: The Overlord")elif choice == "9":
...     fight_overlord()# server.py
... import socket
... import threading
... 
... host = "0.0.0.0"
... port = 5555
... 
... server = socket.socket(socket.AF_INET, socket.SOCK\
_STREAM)
... server.bind((host, port))
... server.listen()
... 
... clients = []
... usernames = []
... 
... def broadcast(message):
...     for client in clients:
...         client.send(message)
... 
... def handle_client(client):
...     while True:
...         try:
...             message = client.recv(1024)
...             broadcast(message)
...         except:
...             index = clients.index(client)
...             clients.remove(client)
...             client.close()
...             username = usernames[index]
...             broadcast(f"{username} left the chat."\
.encode())
...             usernames.remove(username)
...             break
... 
... def receive():
...     print("💬 Server is running...")
... 
...     while True:
...         client, address = server.accept()
...         print(f"Connected with {address}")
... 
...         client.send("USERNAME".encode())
...         username = client.recv(1024).decode()
... 
...         usernames.append(username)
...         clients.append(client)
... 
...         print(f"{username} joined!")
...         broadcast(f"{username} joined the chat!".e\
ncode())
... 
...         thread = threading.Thread(target=handle_cl\
ient, args=(client,))
...         thread.start()
... 
... receive()# client.py
... import socket
... import threading
... 
... host = "127.0.0.1"  # change to server IP for real\
 multiplayer
... port = 5555
... 
... client = socket.socket(socket.AF_INET, socket.SOCK\
_STREAM)
... client.connect((host, port))
... 
... username = input("Choose a name: ")
... 
... def receive():
...     while True:
...         try:
...             message = client.recv(1024).decode()
...             if message == "USERNAME":
...                 client.send(username.encode())
...             else:
...                 print(message)
...         except:
...             print("Disconnected")
...             client.close()
...             break
... 
... def write():
...     while True:
...         message = f"{username}: {input('')}"
...         client.send(message.encode())
... 
... threading.Thread(target=receive).start()
... threading.Thread(target=write).start()host = "127.\
0.0.1"def create_team(team_name):
...     print(f"\nCreate {team_name}")
... 
...     p1 = create_character()
...     p2 = create_character()
... 
...     return [p1, p2]def team_alive(team):
...     return any(player["hp"] > 0 for player in team\
)def choose_target(enemy_team):
...     print("\nChoose target:")
...     for i, enemy in enumerate(enemy_team):
...         if enemy["hp"] > 0:
...             print(f"{i}. {enemy['name']} (HP: {ene\
my['hp']})")
... 
...     choice = int(input("Target #: "))
...     return enemy_team[choice]














...                 continue
... 
...             print(f"\n🔵 {player['name']}'s turn")
...             target = choose_target(team2)
... 
...             action = input("Attack / Ability / Dra\
gon / Special: ").lower()
... 
...             if action == "attack":
...                 damage = calculate_damage(player, \
target)
...                 target["hp"] -= damage
...                 print(f"{player['name']} hits {tar\
get['name']} for {damage}")
... 
...             elif action == "ability":
...                 use_ability(player, target)
... 
...             elif action == "dragon":
...                 d = input("Dragon: ").lower()
...                 summon_dragon(d, player, target)
... 
...             elif action == "special":
...                 special_move(player, target)
... 
...         # Team 2 turn
...         for player in team2:
...             if player["hp"] <= 0:
...                 continue
... 
...             print(f"\n🔴 {player['name']}'s turn")
...             target = choose_target(team1)
... 
...             action = input("Attack / Ability / Dra\
gon / Special: ").lower()
... 
...             if action == "attack":
...                 damage = calculate_damage(player, \
target)
...                 target["hp"] -= damage
...                 print(f"{player['name']} hits {tar\
get['name']} for {damage}")
... 
...             elif action == "ability":
...                 use_ability(player, target)
... 
...             elif action == "dragon":
...                 d = input("Dragon: ").lower()
...                 summon_dragon(d, player, target)
... 
...             elif action == "special":
...                 special_move(player, target)
... 
...         turn += 1
... 
...     # RESULT
...     if team_alive(team1):
...         print("\n🏆 TEAM 1 WINS!")
...         for p in team1:
...             p["xp"] += 200
...             p["gold"] += 100
...     else:
...         print("\n🏆 TEAM 2 WINS!")print("10. Team \
Arena (2v2)")def create_ai(name="AI"):
...     return {
...         "name": name,
...         "class": "AI Fighter",
...         "level": 1,
...         "xp": 0,
...         "gold": 0,
...         "hp": 100,
...         "max_hp": 100,
...         "damage": 10,
...         "armor": 2,
...         "weapon": "AI Blade",
...         "ability": "fire",
...         "inventory": [],
...         "dragons": {
...             "fire": {"count": 1, "xp": 0, "level":\
 1},
...             "ice": {"count": 0, "xp": 0, "level": \
1},
...             "lightning": {"count": 0, "xp": 0, "le\
vel": 1},
...             "earth": {"count": 0, "xp": 0, "level"\
: 1},
...             "tsar": {"count": 0, "xp": 0, "level":\
 1, "unlocked": False}
...         },
...         "streak": 0,
...         "rank": "Bot",
...         "skip": False
...     }import random
... 
... def ai_action(ai, allies, enemies):
...     # pick a target
...     target = random.choice([e for e in enemies if \
e["hp"] > 0])
... 
...     # decision making
...     if ai["hp"] < 30 and random.random() < 0.3:
...         return "defend", target
... 
...     if ai["dragons"]["fire"]["count"] > 0 and rand\
om.random() < 0.3:
...         return "dragon", target
... 
...     if random.random() < 0.3:
...         return "ability", target
... 
...     return "attack", targetdef run_ai_turn(ai, all\
ies, enemies):
...     if ai["hp"] <= 0:
...         return
... 
...     if ai.get("skip"):
...         print(f"❌ {ai['name']} is stunned!")
...         ai["skip"] = False
...         return
... 
...     action, target = ai_action(ai, allies, enemies\
)
... 
...     print(f"\n🤖 {ai['name']} chooses {action} on \
{target['name']}")
... 
...     if action == "attack":
...         damage = calculate_damage(ai, target)
...         target["hp"] -= damage
...         print(f"{ai['name']} hits for {damage}")
... 
...     elif action == "ability":
...         use_ability(ai, target)
... 
...     elif action == "dragon":
...         summon_dragon("fire", ai, target)
... 
...     elif action == "defend":
...         ai["armor"] += 3
...         print(f"{ai['name']} defends (+armor)")def\
 create_team_with_ai(team_name):
...     print(f"\n{team_name}")
... 
...     mode = input("Solo or Duo? ").lower()
... 
...     if mode == "solo":
...         player = create_character()
...         ai = create_ai("AI Teammate")
...         return [player, ai]
... 
...     else:
...         p1 = create_character()
...         p2 = create_character()
...         return [p1, p2]for player in team1:
...     if "AI" in player["name"]:
...         run_ai_turn(player, team1, team2)
...     else:
...         # your normal player turnfor player in tea\
m1:
...     if "AI" in player["name"]:
...         run_ai_turn(player, team1, team2)
...     else:
...         # your normal player turndef create_boss_a\
i(name="Boss AI"):
...     return {
...         "name": name,
...         "class": "Overlord AI",
...         "hp": 150,
...         "max_hp": 150,
...         "damage": 15,
...         "armor": 5,
...         "ability": "shadow",
...         "dragons": {
...             "fire": {"count": 1, "xp": 0, "level":\
 2},
...             "ice": {"count": 1, "xp": 0, "level": \
2},
...             "lightning": {"count": 0, "xp": 0, "le\
vel": 1},
...             "earth": {"count": 0, "xp": 0, "level"\
: 1},
...             "tsar": {"count": 1, "xp": 0, "level":\
 1, "unlocked": True}
...         },
...         "skip": False,
...         "rage": 0   # increases over time
...     }def pick_target(enemies):
...     # target weakest player
...     alive = [e for e in enemies if e["hp"] > 0]
...     return min(alive, key=lambda x: x["hp"])import\
 random
... 
... def boss_ai_decision(ai, enemies):
...     target = pick_target(enemies)
... 
...     # FINISHING MOVE
...     if target["hp"] < 25:
...         return "attack", target
... 
...     # USE TSAR if losing badly
...     if ai["hp"] < 40 and ai["dragons"]["tsar"]["co\
unt"] > 0:
...         return "tsar", target
... 
...     # FREEZE strong enemy
...     strong = max(enemies, key=lambda x: x["damage"\
])
...     if random.random() < 0.2:
...         return "ice", strong
... 
...     # RAGE BUILD
...     if ai["rage"] >= 3:
...         return "special", target
... 
...     # ABILITY USAGE
...     if random.random() < 0.3:
...         return "ability", target
... 
...     # DEFAULT
...     return "attack", targetimport random
... 
... def boss_ai_decision(ai, enemies):
...     target = pick_target(enemies)
... 
...     # FINISHING MOVE
...     if target["hp"] < 25:
...         return "attack", target
... 
...     # USE TSAR if losing badly
...     if ai["hp"] < 40 and ai["dragons"]["tsar"]["co\
unt"] > 0:
...         return "tsar", target
... 
...     # FREEZE strong enemy
...     strong = max(enemies, key=lambda x: x["damage"\
])
...     if random.random() < 0.2:
...         return "ice", strong
... 
...     # RAGE BUILD
...     if ai["rage"] >= 3:
...         return "special", target
... 
...     # ABILITY USAGE
...     if random.random() < 0.3:
...         return "ability", target
... 
...     # DEFAULT
...     return "attack", targetimport random
... 
... def boss_ai_decision(ai, enemies):
...     target = pick_target(enemies)
... 
...     # FINISHING MOVE
...     if target["hp"] < 25:
...         return "attack", target
... 
...     # USE TSAR if losing badly
...     if ai["hp"] < 40 and ai["dragons"]["tsar"]["co\
unt"] > 0:
...         return "tsar", target
... 
...     # FREEZE strong enemy
...     strong = max(enemies, key=lambda x: x["damage"\
])
...     if random.random() < 0.2:
...         return "ice", strong
... 
...     # RAGE BUILD
...     if ai["rage"] >= 3:
...         return "special", target
... 
...     # ABILITY USAGE
...     if random.random() < 0.3:
...         return "ability", target
... 
...     # DEFAULT
...     return "attack", targetimport random
... 
... def boss_ai_decision(ai, enemies):
...     target = pick_target(enemies)
... 
...     # FINISHING MOVE
...     if target["hp"] < 25:
...         return "attack", target
... 
...     # USE TSAR if losing badly
...     if ai["hp"] < 40 and ai["dragons"]["tsar"]["co\
unt"] > 0:
...         return "tsar", target
... 
...     # FREEZE strong enemy
...     strong = max(enemies, key=lambda x: x["damage"\
])
...     if random.random() < 0.2:
...         return "ice", strong
... 
...     # RAGE BUILD
...     if ai["rage"] >= 3:
...         return "special", target
... 
...     # ABILITY USAGE
...     if random.random() < 0.3:
...         return "ability", target
... 
...     # DEFAULT
...     return "attack", targetdef run_boss_ai(ai, all\
ies, enemies):
...     if ai["hp"] <= 0:
...         return
... 
...     if ai.get("skip"):
...         print(f"❌ {ai['name']} is stunned!")
...         ai["skip"] = False
...         return
... 
...     action, target = boss_ai_decision(ai, enemies)
... 
...     print(f"\n👑 {ai['name']} uses {action.upper()\
} on {target['name']}")
... 
...     if action == "attack":
...         damage = calculate_damage(ai, target)
...         target["hp"] -= damage
...         print(f"💀 Boss hits for {damage}")
... 
...     elif action == "ability":
...         use_ability(ai, target)
... 
...     elif action == "ice":
...         summon_dragon("ice", ai, target)
... 
...     elif action == "tsar":
...         summon_dragon("tsar", ai, target)
... 
...     elif action == "special":
...         special_move(ai, target)
...         ai["rage"] = 0
... 
...     # Build rage every turn
...     ai["rage"] += 1if player["class"] == "Overlord\
 AI":
...     run_boss_ai(player, team, enemies)
... else:
...     run_ai_turn(player, team, enemies)world_map = \
{
...     "1": {
...         "name": "Greenvale 🌿",
...         "desc": "A peaceful village with beginner \
quests.",
...         "type": "town"
...     },
...     "2": {
...         "name": "Shadow Forest 🌲",
...         "desc": "Dark woods filled with enemies.",
...         "type": "battle"
...     },
...     "3": {
...         "name": "Obsidian Rift 🌌",
...         "desc": "A volcanic arena of chaos.",
...         "type": "arena"
...     },
...     "4": {
...         "name": "Dragon Peak 🐉",
...         "desc": "Home of ancient dragons.",
...         "type": "dragon"
...     },
...     "5": {
...         "name": "Overlord’s Throne 👑",
...         "desc": "Final battle location.",
...         "type": "boss"
...     }
... }world_map = {
...     "1": {
...         "name": "Greenvale 🌿",
...         "desc": "A peaceful village with beginner \
quests.",
...         "type": "town"
...     },
...     "2": {
...         "name": "Shadow Forest 🌲",
...         "desc": "Dark woods filled with enemies.",
...         "type": "battle"
...     },
...     "3": {
...         "name": "Obsidian Rift 🌌",
...         "desc": "A volcanic arena of chaos.",
...         "type": "arena"
...     },
...     "4": {
...         "name": "Dragon Peak 🐉",
...         "desc": "Home of ancient dragons.",
...         "type": "dragon"
...     },
...     "5": {
...         "name": "Overlord’s Throne 👑",
...         "desc": "Final battle location.",
...         "type": "boss"
...     }
... }def show_map():
...     print("\n🌍 WORLD MAP")
... 
...     for key, location in world_map.items():
...         print(f"{key}. {location['name']}")
...         print(f"   {location['desc']}")def travel(\
):
...     show_map()
...     choice = input("\nWhere do you want to go? ")
... 
...     if choice in world_map:
...         location = world_map[choice]
...         print(f"\n🚶 Traveling to {location['name'\
]}...")
...         enter_location(location)
...     else:
...         print("Invalid location.")def enter_locati\
on(location):
...     loc_type = location["type"]
... 
...     if loc_type == "town":
...         print("🏘️ You are in a town.")
...         shop()
... 
...     elif loc_type == "battle":
...         print("⚔️ Enemies appear!")
...         fight()
... 
...     elif loc_type == "arena":
...         print("🏟️ Entering Arena!")
...         team_arena()
... 
...     elif loc_type == "dragon":
...         print("🐉 Dragon encounter!")
...         d = input("Choose dragon to summon: ")
...         summon_dragon(d, player, {"hp": 100})
... 
...     elif loc_type == "boss":
...         print("👑 FINAL BOSS AWAITS...")
...         fight_overlord()print("11. World Map")elif\
 choice == "11":
...     travel()if player["level"] < 10 and location["\
type"] == "boss":
...     print("❌ You must be level 10 to enter!")
...     returnimport random
... 
... def random_encounter():
...     roll = random.random()
... 
...     if roll < 0.4:
...         return "enemy"
...     elif roll < 0.65:
...         return "treasure"
...     elif roll < 0.85:
...         return "dragon"
...     else:
...         return "boss"def handle_encounter():
...     event = random_encounter()
... 
...     print("\n🎲 A random encounter appears!")
... 
...     if event == "enemy":
...         print("⚔️ Ambushed by enemies!")
...         fight()
... 
...     elif event == "treasure":
...         gold = random.randint(20, 100)
...         player["gold"] += gold
...         print(f"💰 You found treasure! +{gold} gol\
d")
... 
...     elif event == "dragon":
...         print("🐉 A wild dragon appears!")
...         d = random.choice(["fire", "ice", "lightni\
ng", "earth"])
...         print(f"It is a {d} dragon!")
... 
...         # reward summon
...         player["dragons"][d]["count"] += 1
...         print(f"🐉 You gained a {d} dragon summon!\
")
... 
...     elif event == "boss":
...         print("👑 A roaming boss attacks!")
...         kael_vantor()def travel():
...     show_map()
...     choice = input("\nWhere do you want to go? ")
... 
...     if choice in world_map:
...         location = world_map[choice]
... 
...         print("\n🚶 Traveling...")
... 
...         # 50% chance encounter while traveling
...         if random.random() < 0.5:
...             handle_encounter()
... 
...         print(f"\n📍 Arrived at {location['name']}\
")
...         enter_location(location)
... 
...     else:
...         print("Invalid location.")choice = input("\
Fight or Run? ").lower()
... 
... if choice == "run":
...     print("🏃 You escaped!")
...     returnchoice = input("Fight or Run? ").lower()
... 
... if choice == "run":
...     print("🏃 You escaped!")
...     returnplayer["quest"] = "start"def show_quest(\
):
...     q = story_quests[player["quest"]]
... 
...     print("\n📖 CURRENT QUEST")
...     print(f"{q['name']}")
...     print(f"{q['desc']}")
...     print(f"📍 Location: {q['location']}")def comp\
lete_quest():
...     q = story_quests[player["quest"]]
... 
...     print(f"\n✅ Quest Complete: {q['name']}")
... 
...     player["xp"] += q["reward"]["xp"]
...     player["gold"] += q["reward"]["gold"]
... 
...     print(f"+{q['reward']['xp']} XP, +{q['reward']\
['gold']} Gold")
... 
...     if q["next"]:
...         player["quest"] = q["next"]
...         print("➡️ New quest unlocked!")
...     else:
...         print("🎉 STORY COMPLETE!")def enter_locat\
ion(location):
...     loc_type = location["type"]
...     current_q = story_quests[player["quest"]]
... 
...     if loc_type == "town":
...         shop()
... 
...     elif loc_type == "battle":
...         fight()
...         if current_q["type"] == "fight":
...             complete_quest()
... 
...     elif loc_type == "arena":
...         team_arena()
...         if current_q["type"] == "arena":
...             complete_quest()
... 
...     elif loc_type == "boss":
...         if player["quest"] == "kael":
...             kael_vantor()
...             complete_quest()
...         elif player["quest"] == "overlord":
...             fight_overlord()
...             complete_quest()print("12. View Quest"\
)elif choice == "12":
...     show_quest()player["morality"] = 0   # -100 (e\
vil) → +100 (good)player["morality"] += 10player["mora\
lity"] -= 10choice = input("Help villagers or steal fr\
om them? ").lower()
... 
... if choice == "help":
...     print("😇 You helped them.")
...     player["morality"] += 10
...     player["gold"] += 20
... 
... elif choice == "steal":
...     print("😈 You robbed them.")
...     player["morality"] -= 10
...     player["gold"] += 50def ending():
...     print("\n🎬 FINAL ENDING...")
import random

# =========================
# PLAYER SETUP
# =========================
def create_player():
    return {
        "name": "Hero",
        "class": "Adventurer",
        "hp": 100,
        "max_hp": 100,
        "damage": 10,
        "armor": 0,
        "xp": 0,
        "level": 1,
        "gold": 100,
        "weapon": "Basic Sword",
        "ability": "none",
        "inventory": [],
        "dragons": {
            "fire": {"count": 0, "xp": 0, "level": 1},
            "ice": {"count": 0, "xp": 0, "level": 1},
            "lightning": {"count": 0, "xp": 0, "level": 1},
            "earth": {"count": 0, "xp": 0, "level": 1},
        },
        "streak": 0,
        "rank": "Newbie",
        "skip": False
    }

player = create_player()

# =========================
# LEVEL SYSTEM
# =========================
def check_level_up():
    if player["xp"] >= player["level"] * 100:
        player["xp"] = 0
        player["level"] += 1
        player["max_hp"] += 20
        player["damage"] += 5
        print(f"✨ LEVEL UP! You are now level {player['level']}")

# =========================
# COMBAT
# =========================
def calculate_damage(attacker, defender):
    damage = random.randint(5, attacker["damage"])
    
    if random.random() < 0.2:
        print("💥 CRITICAL HIT!")
        damage *= 2

    damage -= defender.get("armor", 0)
    return max(1, damage)

def use_ability(attacker, defender):
    if attacker["ability"] == "fire":
        print("🔥 Fire Blast!")
        defender["hp"] -= 20

    elif attacker["ability"] == "lightning":
        print("⚡ Lightning Strike!")
        defender["hp"] -= 25

    elif attacker["ability"] == "shadow":
        print("🌑 Shadow Strike!")
        defender["hp"] -= 15
        attacker["hp"] += 10

    else:
        print("No ability equipped!")

def fight():
    enemy = {
        "name": "Goblin",
        "hp": 50,
        "damage": 8,
        "armor": 2,
        "xp": 30,
        "gold": 20
    }

    print(f"\n⚔️ A wild {enemy['name']} appears!")

    while player["hp"] > 0 and enemy["hp"] > 0:

        action = input("Attack / Ability / Block: ").lower()

        if action == "attack":
            dmg = calculate_damage(player, enemy)
            enemy["hp"] -= dmg
            print(f"You deal {dmg} damage!")

        elif action == "ability":
            use_ability(player, enemy)

        elif action == "block":
            player["armor"] += 3
            print("🛡️ You brace for impact!")

        # Enemy turn
        if enemy["hp"] > 0:
            dmg = calculate_damage(enemy, player)
            player["hp"] -= dmg
            print(f"Enemy hits for {dmg}")

        print(f"Your HP: {player['hp']} | Enemy HP: {enemy['hp']}")

    if player["hp"] > 0:
        print("🏆 Victory!")
        player["xp"] += enemy["xp"]
        player["gold"] += enemy["gold"]
        print(f"+{enemy['xp']} XP, +{enemy['gold']} Gold")
        check_level_up()
    else:
        print("💀 You lost...")
        player["hp"] = player["max_hp"] // 2

# =========================
# SHOP
# =========================
shop_items = {
    "1": {"name": "Iron Sword", "cost": 50, "type": "weapon", "damage": 15},
    "2": {"name": "Armor", "cost": 50, "type": "armor", "armor": 5},
    "3": {"name": "Potion", "cost": 25, "type": "potion", "heal": 30}
}

def shop():
    while True:
        print("\n🛒 SHOP")
        print(f"Gold: {player['gold']}")

        for k, v in shop_items.items():
            print(f"{k}. {v['name']} ({v['cost']}g)")
        print("4. Exit")

        choice = input("Buy: ")

        if choice == "4":
            break

        if choice in shop_items:
            item = shop_items[choice]

            if player["gold"] >= item["cost"]:
                player["gold"] -= item["cost"]

                if item["type"] == "weapon":
                    player["weapon"] = item["name"]
                    player["damage"] = item["damage"]

                elif item["type"] == "armor":
                    player["armor"] += item["armor"]

                elif item["type"] == "potion":
                    player["inventory"].append(item)

                print("✅ Purchased!")
            else:
                print("❌ Not enough gold")

# =========================
# QUEST
# =========================
def quest():
    print("\n📜 Quest: Flooded Cavern")
    choice = input("Fight / Sneak / Negotiate: ").lower()

    if choice == "fight":
        fight()
        player["xp"] += 50

    elif choice == "sneak":
        player["xp"] += 40
        player["gold"] += 20

    elif choice == "negotiate":
        player["xp"] += 60

    else:
        print("Invalid choice")

    check_level_up()

# =========================
# PVP
# =========================
def create_enemy_player():
    return {
        "name": "Rival",
        "hp": 100,
        "damage": 10,
        "armor": 2
    }

def pvp():
    enemy = create_enemy_player()

    print("\n⚔️ PvP Battle!")

    while player["hp"] > 0 and enemy["hp"] > 0:

        action = input("Attack / Ability: ").lower()

        if action == "attack":
            dmg = calculate_damage(player, enemy)
            enemy["hp"] -= dmg

        elif action == "ability":
            use_ability(player, enemy)

        if enemy["hp"] > 0:
            dmg = calculate_damage(enemy, player)
            player["hp"] -= dmg

        print(f"You: {player['hp']} | Enemy: {enemy['hp']}")

    if player["hp"] > 0:
        print("🏆 You win!")
        player["xp"] += 100
        player["gold"] += 50
    else:
        print("💀 You lost")

    player["hp"] = player["max_hp"]

# =========================
# MAIN GAME LOOP
# =========================
def game():
    print("🎮 NEXUS OF HEROES")

    while True:
        print("\n--- MENU ---")
        print("1. Fight")
        print("2. Quest")
        print("3. Shop")
        print("4. PvP")
        print("5. Stats")
        print("6. Quit")

        choice = input("Choose: ")

        if choice == "1":
            fight()
        elif choice == "2":
            quest()
        elif choice == "3":
            shop()
        elif choice == "4":
            pvp()
        elif choice == "5":
            print(player)
        elif choice == "6":
            break
        else:
            print("Invalid choice")

# START
game()