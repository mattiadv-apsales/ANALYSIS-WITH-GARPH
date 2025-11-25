import pygame
import sys
import random

pygame.init()

WIDTH, HEIGHT = 1000, 800
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
GREEN = (50, 200, 50)
BROWN = (139, 69, 19)
colors = {
    "green": GREEN,
    "brown": BROWN
}
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Giochino figo")
font = pygame.font.SysFont("Consolas", 20)

ROWS_MAP, COLUMN_MAP = 20, 20
SIZE = 25
map_grid = [[random.choice(list(colors.keys())) for _ in range(COLUMN_MAP)] for _ in range(ROWS_MAP)]

def draw_maps():
    for y in range(ROWS_MAP):
        for x in range(COLUMN_MAP):
            terrain = map_grid[y][x]
            color = colors[terrain]
            pygame.draw.rect(screen, color, (x*SIZE, y*SIZE, SIZE, SIZE))
            pygame.draw.rect(screen, color, (x*SIZE, y*SIZE, SIZE, SIZE), 1)

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill(WHITE)
    draw_maps()
    text = font.render("Benvenuto nel simulatore di civiltà!", True, BLACK)
    screen.blit(text, (550, 50))
    pygame.display.flip()

pygame.quit()
sys.exit()