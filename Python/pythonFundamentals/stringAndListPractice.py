Find and replace
def findAndReplace():
    sentence = "It's Thanksgiving day. It's also my birthday"
    sentence2 = sentence.replace("day", "month")
    print sentence2
findAndReplace()

def minMax(arr):
    x = [2,54,-2,7,12,98]
    print(min(x))
    print(max(x))
minMax([2,54,-2,7,12,98])

def fAl(arr):
    print arr[0]
    print arr[-1]
fAl(['hello',2,54,-2,7,12,98,'world'])

def nL(arr):
    arr.sort()
    newArr = arr[0:len(arr)/2]
    del arr[0:len(arr)/2]
    arr.insert(0,newArr)
    print arr
nL([19,2,54,-2,7,12,98,32,10,-3,6])