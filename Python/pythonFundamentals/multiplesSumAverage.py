#Print the odds from 1 - 1000 using a for loop and don't use a list
def pO():
    for count in range(1,1001): #this creates a loop from 1 to 1000 (the loop stops when it reaches the upperlimit and does not include that value)
        if count % 2 != 0: #finds only odd numbers
            print count #prints the numbers that pass the if test
pO()

#Print multiples of five from 5 - 1,000,000
def pMf():
    for count in range(5,1000001): #this creates the loop from 1 to 1000
        if count % 5 == 0: #finds multiples of 5
            print count #prints the numbers that pass the if test
pMf()

#Print the sum of all the values in a list
def sOl(arr):
    count = 0 #creates the variable for the while statement
    sum = 0 #creates a variable to hold the sum of our numbers
    while count < len(arr): #creates a while statement that will run the length of our list
        sum += arr[count] #adds the value of the place in the list represented by the variable "count"
        count += 1 #increments the value of count so we can move through our array
    print sum #prints the value of sum after the while loop is broken (the answer is 276)
sOl([1,2,5,10,255,3])

#print the average of the values in the given list
def aL(arr):
    count = 0 #creates the variable for the while statement
    sum = 0 #creates a variable to hold the sum of our numbers
    avg = 0 #creates a variable to store the avg of the numbers
    while count < len(arr): #creates a while statement that will run the length of our list
        sum += arr[count] #adds the value of the place in the list represented by the variable "count"
        count += 1 #increments the value of count so we can move through our array
    avg = sum / len(arr) #finds the average of our values by dividing the sum by the length of the list
    print avg #prints the average (the answer is 46)
aL([1,2,5,10,255,3])