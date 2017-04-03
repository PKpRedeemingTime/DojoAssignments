count = 0
newArr = []
while count < len(l):
    if l[count].find('o') == 1:
        arrNew.append(l[count])
    count += 1
print newArr
