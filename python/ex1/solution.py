from itertools import chain


def rotate_left(image):
    return [[image[row][col] for row in range(len(image))]
            for col in range(len(image[0])-1, -1, -1)]


def rotate_right(image):
    return [[image[row][col] for row in range(len(image)-1, -1, -1)]
            for col in range(0, len(image[0])-1)]


def invert_pixel(pixel):
    return tuple(255 - color for color in pixel)


def invert(image):
    return [[invert_pixel(pixel) for pixel in row] for row in image]


def lighten_pixel(coef, pixel):
    return tuple(90 + int(coef * (255 - color)) for color in pixel)


def lighten(image, c):
    return [[lighten_pixel(c, pixel) for pixel in row] for row in image]


def darken_pixel(coef, pixel):
    return tuple(color - int(coef * (color - 0)) for color in pixel)


def darken(image, c):
    return [[darken_pixel(c, pixel) for pixel in row] for row in image]
