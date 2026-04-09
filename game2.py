import pygame
import random
import os

pygame.init()

# ─── WINDOW ───
WIDTH, HEIGHT = 900, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Real-Time RPG (Sprite Edition)")

clock = pygame.time.Clock()

# ─── COLORS ───
WHITE = (255, 255, 255)
RED = (200, 50, 50)
GREEN = (50, 200, 50)

# ─── LOAD IMAGES ───
def load_image(name, w, h):
    try:
        img = pygame.image.load(name).convert_alpha()
        return pygame.transform.scale(img, (w, h))
    except:
        # fallback if image missing
        surf = pygame.Surface((w, h))
        surf.fill((random.randint(50,255), random.randint(50,255), random.randint(50,255)))
        return surf

player_img = load_image("player.png", 64, 64)
enemy_img = load_image("enemy.png", 48, 48)
attack_img = load_image("slash.png", 64, 64)
bg_img = load_image("background.png", WIDTH, HEIGHT)

# ─── PLAYER ───
player = {
    "x": 100,
    "y": 300,
    "speed": 5,
    "hp": 100,
    "max_hp": 100,
    "damage": 20,
    "attack_cd": 0,
    "facing": 1  # 1 right, -1 left
}

# ─── ENEMIES ───
def spawn_enemy():
    return {
        "x": random.randint(400, 850),
        "y": random.randint(50, 550),
        "hp": 50,
        "speed": random.uniform(1.5, 2.5),
        "damage": 5
    }

enemies = [spawn_enemy() for _ in range(4)]

# ─── HEALTH BAR ───
def draw_bar(x, y, hp, max_hp):
    ratio = hp / max_hp
    pygame.draw.rect(screen, RED, (x, y, 50, 6))
    pygame.draw.rect(screen, GREEN, (x, y, 50 * ratio, 6))

# ─── GAME LOOP ───
running = True
while running:
    screen.blit(bg_img, (0, 0))

    keys = pygame.key.get_pressed()

    # ─── MOVEMENT ───
    if keys[pygame.K_LEFT]:
        player["x"] -= player["speed"]
        player["facing"] = -1
    if keys[pygame.K_RIGHT]:
        player["x"] += player["speed"]
        player["facing"] = 1
    if keys[pygame.K_UP]:
        player["y"] -= player["speed"]

    # ─── ATTACK ───
    if keys[pygame.K_DOWN] and player["attack_cd"] <= 0:
        player["attack_cd"] = 20

    # attack hitbox
    attack_rect = pygame.Rect(
        player["x"] + (40 * player["facing"]),
        player["y"],
        50,
        50
    )

    if player["attack_cd"] > 0:
        player["attack_cd"] -= 1

    player_rect = pygame.Rect(player["x"], player["y"], 64, 64)

    # ─── DRAW PLAYER ───
    flipped = pygame.transform.flip(player_img, player["facing"] == -1, False)
    screen.blit(flipped, (player["x"], player["y"]))
    draw_bar(player["x"], player["y"] - 10, player["hp"], player["max_hp"])

    # ─── DRAW ATTACK EFFECT ───
    if player["attack_cd"] > 10:
        screen.blit(attack_img, (attack_rect.x, attack_rect.y))

    # ─── ENEMIES ───
    for enemy in enemies[:]:
        enemy_rect = pygame.Rect(enemy["x"], enemy["y"], 48, 48)

        # AI movement (chase)
        if enemy["x"] < player["x"]:
            enemy["x"] += enemy["speed"]
        elif enemy["x"] > player["x"]:
            enemy["x"] -= enemy["speed"]

        if enemy["y"] < player["y"]:
            enemy["y"] += enemy["speed"]
        elif enemy["y"] > player["y"]:
            enemy["y"] -= enemy["speed"]

        # damage player
        if player_rect.colliderect(enemy_rect):
            player["hp"] -= 0.2

        # damage enemy
        if player["attack_cd"] > 10 and attack_rect.colliderect(enemy_rect):
            enemy["hp"] -= player["damage"]

        # draw enemy sprite
        screen.blit(enemy_img, (enemy["x"], enemy["y"]))
        draw_bar(enemy["x"], enemy["y"] - 8, enemy["hp"], 50)

        # enemy death
        if enemy["hp"] <= 0:
            enemies.remove(enemy)
            enemies.append(spawn_enemy())

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
