count = 0 #creating a variable 'count' for a while statement
number = 0 #creating a container for a sum of all integers in a given list
sentence = "" #creating an empty string to concatenate all strings in a given list
while count < len(x): #creates a while statement to run through the list
    if isinstance(x[count], int) == True: #checks if each value in the list is an integer
        number += x[count] #if the value is an integer, the value of the integer is added to our integer variable 'number'
    elif isinstance(x[count], float) == True:
        number += x[count] #if the value is a number with a decimal, the value of the integer is added to our integer variable 'number'
    elif isinstance(x[count], str) == True: #checks if each value in the list is a string
        sentence = sentence + " " + x[count] #if the value is a string it concatenates that value into our string variable 'sentence'
        count += 1
if number > 0 and sentence == "": #if there is a value in 'number' and no value in 'sentence', all values were integers
    print "The array you entered is of integer type." #prints the given sentence
    print "Sum: ", number #prints the sum of all values in the list
elif number == 0 and sentence != "": #if there is a value in 'sentence' and no value in 'number', all values were strings
    print "The array you entered is of string type." #prints the given sentence
    print "String: ", sentence #prints the concatenation of all values in the list
else: #if there is a value in 'numbers' and a value in 'sentence' there were both integers and strings in the list
    print "The array you entered is of mixed type."#prints the given sentence
    print "Sum: ", number #prints the sum of all values in the list
    print "String: ", sentence #prints the concatenation of all values in the list