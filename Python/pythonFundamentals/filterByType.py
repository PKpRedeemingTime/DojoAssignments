#in the following code 'x' will stand for all test cases
def filterByType(x):
    if isinstance(x, int) == True: #creates an if statement to test if x is an integer
        if x >= 100: #testing if the value of the number is 100 or greater
            print "That's a big number!" #if it is, prints the given text
        else: 
            print "That's a small number." #if the first if statement was false, prints this given statement
    elif isinstance(x, str) == True: #creates an if statement to test if x is a string
        if len(x) >= 50: #testing if the string has 50 or more characters
            print "Long sentence." #if it is, prints the given text
        else: 
            print "Short sentence." #if the first if statement was false, prints this given statement
    elif isinstance(x, list) == True: #creates an if statement to test if x is a list
        if len(x) >= 10: #testing if the list has 10 or more values
            print "Big list!!" #if it is, prints the given text
        else:
            print "Short list." #if the first if statement was false, prints this given statement
filterByType([4,34,22,68,9,13,3,5,7,9,2,12,45,923])