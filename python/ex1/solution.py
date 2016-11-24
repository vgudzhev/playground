def rotate_left(img):
    return [img[row][col] for row in range(len(img)) for col in range(len(img[0])-1, -1, -1)]
    
