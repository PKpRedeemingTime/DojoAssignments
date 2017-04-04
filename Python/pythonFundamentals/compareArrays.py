def compareArrays(list_one,list_two):
    sum = 0 #creates a variable 'sum'
    count = 0 #creates a variable count
    if len(list_one) <> len(list_two): #a fast fail, if the lists are not the same size, they are not the same
        print "The lists are not the same" #if the above statement is true, print the text
    while count < len(list_one): #if the parameters pass the fast fail, creates a while loop which will run the length of the array
        if list_one[count] == list_two[count]: #if the value in each position of the two arrays are equal...
            sum += 1 #add one to sum
        count += 1 #after the if statement is tested, increment count
    if sum == len(list_one): #after the while loop has run,compare the value of sum with the array length
        print "The lists are the same." #if they match, that means every value in each array was the same
    else: #if they don't match
        print "The lists are not the same." #that means at least one value was different
compareArrays([1,2,5,6,2],[1,2,5,6,5,3])