# def oneToTwoFiftyFive
#     i = 1
#     while i < 256 do
#         puts "#{i}"
#         i += 1
#     end
# end

# oneToTwoFiftyFive

# def oddOneToTwoFiftyFive
#     i = 1
#     while i < 256 do
#         if i % 2 != 0
#             puts "#{i}"
#         end
#         i += 1
#     end
# end

# oddOneToTwoFiftyFive

# def sum
#     i = 0
#     sum = 0
#     while i < 256 do
#         sum += i
#         puts "New number: #{i} Sum: #{sum}"
#         i += 1
#     end
# end

# sum

# def iterate arr
#     for i in 0...arr.length do
#         puts "#{arr[i]}"
#     end
# end

# iterate [1,3,5,7,9,13]

# def max arr
#     puts Max:#{arr.max}
# end

# max [1,3,5,13,7,9,11]

# def average arr
#     sum = 0
#     for i in 0...arr.length do
#         sum += arr[i]
#     end
#     puts "Average:#{sum/arr.length}"
# end

# average [1,2,3,4,5]

# def oddArray
#     arr = []
#     for i in 1..255 do
#         if i % 2 != 0
#             arr.push(i)
#         end
#     end
#     puts arr
# end

# oddArray

# def greaterThanY arr, y
#     count = 0
#     for i in 0...arr.length do
#         if arr[i] > y
#             count += 1
#         end
#     end
#     puts count
# end

# greaterThanY [1,3,5,7], 3

# def squareArray arr
#     for i in 0...arr.length do
#         arr[i]*=arr[i]
#     end
#     return arr
# end

# puts squareArray [1,2,3,4,5]

# def noNegatives arr
#     for i in 0...arr.length do
#         if arr[i] < 0
#             arr[i] = 0
#         end
#     end
#     return arr
# end

# puts noNegatives [1,-2,3,-4,5,-6]

# def maxMinAvg arr
#     sum = 0
#     for i in 0...arr.length do
#         sum+=arr[i]
#     end
#     return "Max: #{arr.max}; Min: #{arr.min}; Avg: #{sum/arr.length}"
# end

# puts maxMinAvg [5,3,1,4,2]

# def shiftArray arr
#     for i in 0...arr.length-1 do
#         arr[i] = arr[i+1]
#     end
#     arr[arr.length-1] = 0
#     return arr
# end

# puts shiftArray [1,2,3,4,5]

# def numberToString arr
#     for i in 0...arr.length do
#         if arr[i] < 0
#             arr[i] = "Dojo"
#         end
#     end
#     return arr
# end

# puts numberToString [1,-2,3,-4,5,-6]

