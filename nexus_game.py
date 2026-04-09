import pygame
import random
import os

pygame.init()

# ─── WINDOW ───
WIDTH, HEIGHT = 900, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Nexus of Heroes")

clock = pygame.time.Clock()

# ─── LOAD SPRITES ───
def load_sprite(path, size, fallback_color):
    if os.path.exists(path):
        return pygame.transform.scale(pygame.image.load(path), size)

    # Fallback shapes keep the game playable when assets are missing.
    surface = pygame.Surface(size, pygame.SRCALPHA)
    surface.fill(fallback_color)
    return surface


player_img = load_sprite("assets/player.png", (64, 64), (80, 180, 255))
enemy_img = load_sprite("assets/enemy.png", (64, 64), (220, 80, 80))
boss_img = load_sprite("assets/boss.png", (120, 120), (180, 60, 180))
sword_img = load_sprite("assets/sword.png", (50, 20), (240, 240, 120))

# ─── PLAYER ───
player = {
    "x": 100,
    "y": 300,
    "hp": 100,
    "max_hp": 100,
    "damage": 15,
    "speed": 5,
    "attack_timer": 0,
    "attack_landed": False
}

# ─── ENEMIES ───
def spawn_enemy():
    return {
        "x": random.randint(400, 800),
        "y": random.randint(100, 500),
        "hp": 50,
        "speed": 2
    }

enemies = [spawn_enemy() for _ in range(3)]

# ─── BOSS ───
boss = {
    "active": False,
    "x": 600,
    "y": 250,
    "hp": 300,
    "speed": 1.5
}

# ─── DRAW HP BAR ───
def draw_bar(x, y, hp, max_hp):
    ratio = max(0, min(1, hp / max_hp))
    pygame.draw.rect(screen, (200, 50, 50), (x, y, 60, 6))
    pygame.draw.rect(screen, (50, 200, 50), (x, y, 60 * ratio, 6))

# ─── GAME LOOP ───
running = True
while running:
    screen.fill((20, 20, 30))

    keys = pygame.key.get_pressed()

    # ─── MOVEMENT ───
    if keys[pygame.K_LEFT]:
        player["x"] -= player["speed"]
    if keys[pygame.K_RIGHT]:
        player["x"] += player["speed"]
    if keys[pygame.K_UP]:
        player["y"] -= player["speed"]

    # ─── ATTACK ───
    if keys[pygame.K_DOWN]:
        player["y"] += player["speed"]

    player["x"] = max(0, min(WIDTH - 64, player["x"]))
    player["y"] = max(0, min(HEIGHT - 64, player["y"]))

    if keys[pygame.K_SPACE] and player["attack_timer"] <= 0:
        player["attack_timer"] = 15
        player["attack_landed"] = False

    if player["attack_timer"] > 0:
        player["attack_timer"] -= 1

    # ─── PLAYER RECT ───
    player_rect = pygame.Rect(player["x"], player["y"], 64, 64)

    # ─── ATTACK HITBOX ───
    attack_rect = pygame.Rect(player["x"] + 40, player["y"], 50, 40)

    # ─── DRAW PLAYER ───
    screen.blit(player_img, (player["x"], player["y"]))
    draw_bar(player["x"], player["y"] - 10, player["hp"], player["max_hp"])

    # ─── ATTACK ANIMATION ───
    if player["attack_timer"] > 5:
        screen.blit(sword_img, (attack_rect.x, attack_rect.y))

    # ─── ENEMIES ───
    for enemy in enemies[:]:
        # AI movement
        if enemy["x"] < player["x"]:
            enemy["x"] += enemy["speed"]
        elif enemy["x"] > player["x"]:
            enemy["x"] -= enemy["speed"]

        if enemy["y"] < player["y"]:
            enemy["y"] += enemy["speed"]
        elif enemy["y"] > player["y"]:
            enemy["y"] -= enemy["speed"]

        enemy_rect = pygame.Rect(enemy["x"], enemy["y"], 64, 64)

        # Enemy hits player
        if player_rect.colliderect(enemy_rect):
            player["hp"] -= 0.2

        # Player hits enemy
        if (
            player["attack_timer"] > 5
            and not player["attack_landed"]
            and attack_rect.colliderect(enemy_rect)
        ):
            enemy["hp"] -= player["damage"]
            player["attack_landed"] = True

        # Draw enemy
        screen.blit(enemy_img, (enemy["x"], enemy["y"]))
        draw_bar(enemy["x"], enemy["y"] - 10, enemy["hp"], 50)

        # Enemy dies
        if enemy["hp"] <= 0:
            enemies.remove(enemy)
            enemies.append(spawn_enemy())

    # ─── BOSS SPAWN ───
    if not boss["active"] and random.random() < 0.002:
        boss["active"] = True
        print("🔥 BOSS APPEARS!")

    # ─── BOSS LOGIC ───
    if boss["active"]:
        if boss["x"] < player["x"]:
            boss["x"] += boss["speed"]
        elif boss["x"] > player["x"]:
            boss["x"] -= boss["speed"]

        if boss["y"] < player["y"]:
            boss["y"] += boss["speed"]
        elif boss["y"] > player["y"]:
            boss["y"] -= boss["speed"]

        boss_rect = pygame.Rect(boss["x"], boss["y"], 120, 120)

        if player_rect.colliderect(boss_rect):
            player["hp"] -= 0.5

        if (
            player["attack_timer"] > 5
            and not player["attack_landed"]
            and attack_rect.colliderect(boss_rect)
        ):
            boss["hp"] -= player["damage"]
            player["attack_landed"] = True

        screen.blit(boss_img, (boss["x"], boss["y"]))
        draw_bar(boss["x"], boss["y"] - 10, boss["hp"], 300)

        if boss["hp"] <= 0:
            print("👑 BOSS DEFEATED!")
            boss["active"] = False
            boss["hp"] = 300

    # ─── GAME OVER ───
    if player["hp"] <= 0:
        print("💀 GAME OVER")
        running = False

    # ─── EVENTS ───
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    pygame.display.update()
    clock.tick(60)

pygame.quit()
