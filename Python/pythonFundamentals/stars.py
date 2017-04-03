def draw_stars(arr):
    count = 0
    while count < len(arr):
        x = arr[count]
        newArr = []
        for num in range (0,x):
            newArr.append('*')
        count += 1
    return newArr
