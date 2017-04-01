#Find and replace
str = "It's Thanksgiving Day. It's also my birthday"
print(str.index("day"))
str.replace("day", "month")

#Min and Man
x = [2,54,-2,7,12,98]
print(min(x))
print(max(x))

#First and Last
x = ["hello",2,54,-2,7,12,98,"world"]
print x[0]
print x[-1]

#New List
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
newArr = x[0:lex(x)/2]
del x[0:len(x)/2]
x.insert(0,newArr)