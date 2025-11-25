import pygame
import random

pygame.init()

# INIZIALIZZAZIONE SCHERMATA
WIDTH, HEIGHT = 800, 600
window = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Giochino easy")

# COLORI
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)

# MAPPA
MAP_MAX_X = 775
MAP_MAX_Y = 575
MAP_MIN_X = 0
MAP_MIN_Y = 0

# PLAYER
player_size = 25
player_x = 0
player_y = 0
player_speed = 5
point = 0

# BOT
bot_size = 15
bot_x = 0
bot_y = 0
bot_list = []
bot_speed = 5
bot_last_spawn = 0
bot_interval = 5 

# FUNZIONE PER LA CREAZIONE DEL BOT
def create_bot():
    global bot_x, bot_y, bot_list, bot_size, point, bot_speed
    point += 1
    print(f"Sei ora ha {point} punti!")
    bot_f = random.randint(bot_speed, 10)
    bot_s = random.randint(bot_size, 50)
    bot_x = random.randint(MAP_MIN_X, MAP_MAX_X)
    bot_y = random.randint(MAP_MIN_Y, MAP_MAX_Y)
    dot_x = random.choice([-1, 0, 1])
    dot_y = random.choice([-1, 0, 1])
    bot_list.append([bot_x, bot_y, dot_x, dot_y, bot_s, bot_f])

clock = pygame.time.Clock()

running = True

# GIOCO IN SE
while running:
    dt = clock.tick(60) / 1000
    window.fill(WHITE)
    # DEFINIZIONE DEL PLAYER COME RECT
    player_rect = pygame.Rect(player_x, player_y, player_size, player_size)

    # SE SI PREME X SI ESCE DAL GIOCO
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # EVENTI PER SPOSTARE IL PLAYER
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT] and player_x > MAP_MIN_X:
        player_x -= player_speed
    if keys[pygame.K_RIGHT] and player_x < MAP_MAX_X:
        player_x += player_speed
    if keys[pygame.K_UP] and player_y > MAP_MIN_Y:
        player_y -= player_speed
    if keys[pygame.K_DOWN] and player_y < MAP_MAX_Y:
        player_y += player_speed

    # I BOT SPAWNANO OGNI 5 SECONDI
    bot_last_spawn += dt
    if bot_last_spawn >= bot_interval:
        create_bot()
        bot_last_spawn = 0

    # SPAWN EFFETTIVO DEI BOT + MOVIMENTO
    for bot in bot_list:
        bot[0] += bot[2] * bot[5]
        bot[1] += bot[3] * bot[5]

        if bot[0] < MAP_MIN_X:
            bot[0] = MAP_MIN_X
            bot[2] *= -1
        if bot[0] > MAP_MAX_X:
            bot[0] = MAP_MAX_X
            bot[2] *= -1
        if bot[1] < MAP_MIN_Y:
            bot[1] = MAP_MIN_Y
            bot[3] *= -1
        if bot[1] > MAP_MAX_Y:
            bot[1] = MAP_MAX_Y
            bot[3] *= -1

        bot_rect = pygame.Rect(bot[0], bot[1], bot[4], bot[4])
        if player_rect.colliderect(bot_rect):
            running = False
            print(f"Hai totalizzato {point} punti")
        pygame.draw.rect(window, RED, (bot[0], bot[1], bot[4], bot[4]))


    # DISEGNIAMO IL PLAYER
    pygame.draw.rect(window, BLACK, (player_x, player_y, player_size, player_size))

    # INZIALIZZIAMO IL GIOCO
    pygame.display.flip()

# CHIUDIAMO IL GIOCO
pygame.quit()