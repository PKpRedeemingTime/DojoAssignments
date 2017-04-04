def findCharacters(arr):
    count = 0
    newArr = []
    while count < len(arr):
        if arr[count].find('o') == 1:
            newArr.append(arr[count])
        count += 1
    print newArr
findCharacters(['hello','world','my','name','is','anna'])
