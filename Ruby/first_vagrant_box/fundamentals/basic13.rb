# def print1_255
#     i = 1
#     num = 256
#     while i < num do
#         puts i
#         i += 1
#     end
# end
# print1_255

# def printOdds1_255
#     puts (1..256).find_all { |num| num %2 != 0}
# end
# printOdds1_255

# def printSum
#     i = 0
#     num = 256
#     sum = 0
#     while i < num do
#         sum = sum + i
#         puts "New number: #{i} Sum: #{sum}"
#         i += 1
#     end
# end
# printSum

#Iterating through an array

# def iterateArray(arr)
#     i = 0
#     while i < arr.length do
#         puts arr[i]
#         i += 1
#     end
# end
# iterateArray([1,2,3,4,5])

# def findMax(arr)
#     puts arr.max
# end
# findMax([1,2,3,4,5])
# findMax([-1,-2,-3,-4,-5])
# findMax([-1,-2,3,-4,0])

# def getAverage(arr)
#     i = 0
#     sum = 0
#     avg = 0
#     while i < arr.length do
#         sum += arr[i]
#         i += 1
#     end
#     puts sum / arr.length
# end
# getAverage([1,2,3,4,5])
# getAverage([-1,2,3,-4,5])

# def oddNumberArray
#     arr = []
#     for i in 1..255
#         if i %2 != 0
#             arr.push(i)
#         end
#     end
#     p arr
# end
# oddNumberArray

# def greaterThanY(arr, y)
#     count = 0
#     for i in 0..arr.length
#         if i > y
#             count += 1
#         end
#     end
#     puts count
# end
# greaterThanY([1,2,3,4,5], 2)

# def squareTheValues(arr)
#     i = 0
#     while i < arr.length do
#         arr[i] = arr[i] * arr[i]
#         i += 1
#     end
#     p arr
# end
# squareTheValues([1,5,10,-2])

# def elimNegNum(arr)
#     i = 0
#     while i < arr.length do
#         if arr[i] < 0
#           arr[i] = 0
#         end
#         i += 1
#     end
#     p arr
# end
# elimNegNum([1,5,10,-2])

# def maxMinAvg(arr)
#     i = 0
#     sum = 0
#     avg = 0
#     while i < arr.length do
#         sum += arr[i]
#         i += 1
#     end
#     avg = sum / arr.length
#     hash = { "Max" => arr.max, "Min" => arr.min, "Average" => avg}
#     puts hash
# end
# maxMinAvg([1,2,3,4,5])

# def shiftValues(arr)
#     i = 0
#     num = arr.length - 1
#     while i < num do
#         arr[i] = arr[i+1]
#         i += 1
#     end
#     arr[arr.length - 1] = 0
#     p arr
# end
# shiftValues([1,5,10,7,-2])

# def numberToString(arr)
#     i = 0
#     while i < arr.length do
#         if arr[i] < 0
#             arr[i] = "Dojo"
#         end
#         i += 1
#     end
#     p arr
# end
# numberToString([-1,-3,2])