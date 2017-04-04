def odd_even():
    for count in range(1,2001):
        if count % 2 == 0:
            print "Number is {}. This is an even number.".format(count)
        else:
            print "Number is {}. This is an odd number.".format(count)
odd_even()

def multiply(arr, x):
    for count in range(len(arr)):
        arr[count] *= x
    print arr
multiply([2,4,10,16], 5)

def hackerChallenge(arr, x):
    y = multiply(arr, x)
    arrNew = []
    for count in range(len(arr)):
        line = []
        sum = 0
        while sum < arr[count]:
            line.append(1)
            sum += 1
        arrNew.append(line)
    print arrNew
hackerChallenge([2,4,5],3)
