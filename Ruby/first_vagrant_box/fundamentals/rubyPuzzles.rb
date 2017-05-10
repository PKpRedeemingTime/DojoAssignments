arr = [3,5,1,2,7,9,8,13,25,32]
def firstPuzzle(arr)
    overTen = []
    sum = 0
    i = 0
    while i < arr.length do
        sum += arr[i]
        i += 1
    end
    overTen.push(arr.find_all { |num| num > 10 })
    puts sum
    p overTen
end
firstPuzzle(arr)

arr = ["John","KB","Oliver","Cory","Matthew","Christopher"]
def secondPuzzle(arr)
    p arr.shuffle
    p arr.find_all { |name| name.length > 5 }
end
secondPuzzle(arr)

arr = Array("a".."z").to_a
def thirdPuzzle(arr)
    arr.shuffle!
    puts arr[0]
    puts arr[25]
    vowels = "aeiou"
    if vowels.include?(arr[0])
        puts "The first index in the array is a vowel!"
    end
end
thirdPuzzle(arr)

def fourthPuzzle()
    arr = (55..100).sort_by{rand}[1..10]
    p arr
end
fourthPuzzle

def fifthPuzzle()
    arr = (55..100).sort_by{rand}[1..10]
    arr.sort!
    p arr
    puts arr.min
    puts arr.max
end
fifthPuzzle

def sixthPuzzle()
    p (1..5).map {(65+rand(26)).chr }.join
end
sixthPuzzle

def seventhPuzzle()
    10.times {p (1..5).map {(65+rand(26)).chr }.join}
end
seventhPuzzle