#Print 1-255
num = 1
while num < 256:
    print num
    num += 1

#Print Ints and Sum 1-255
sum = 0
for num in range(0,256):
    sum += num
    print num
    print sum

#Find and Print Max
count = 0
max = 0
while count < len(arr):
    if max < arr[count]:
        max = arr[count]
    count += 1
print 

#Print Odds 1 - 255
num = 1
while num < 256:
    print num
    num += 2

#Array with Odds
oddArray = []
for num in range(1, 256):
    if num % 2 not 0:
        oddArray.append num
    print oddArray

#Iterate and Print Array
for num in range(0, len(arr)):
    print arr[num]

#Get and Print Average
count = 0
sum = 0
avg = 0
while count < len(arr):
    sum += arr[count]
    count += 1
avg = sum / len(arr)
print avg

#Greater Than Y 
count = 0
sum = 0
while count < len(arr):
    if arr[count] > Y:
        sum += 1
        count += 1
print sum

#Max, Min, Avg
count = 0
max = 0
min = 0
avg = 0
sum = 0
while count < len(arr):
    if max < arr[count]:
        max = arr[count]
    elif
