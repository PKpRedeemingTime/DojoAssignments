def draw_stars(arr):
    count = 0
    while count < len(arr):
        line = ""
        for num in range (0,arr[count]):
            line += "*"
            num += 1
        print line
        count += 1
draw_stars([4,6,1,3,5,7,25])

def starsAndLetters(arr):
    count = 0
    while count < len(arr):
        if isinstance(arr[count], int):
            line = ""
            for num in range (0,arr[count]):
                line += "*"
                num += 1
            print line
            count += 1
        else:
            line = ""
            for lett in range(0, len(arr[count])):
                x = arr[count][0]
                line += x.lower()
                lett += 1
            print line
            count += 1

starsAndLetters([4,"Tom",1,"Michael",5,7,"Jimmy Smith"])