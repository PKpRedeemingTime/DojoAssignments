def scoresAndGrades():
    def rando():
        import random
        return(random.randint(60,100))
    for count in range (10):
        x = rando()
        if x <= 69:
            print "Score: {}; Your grade is D".format(x)
        elif x >= 70 and x <= 79:
            print "Score: {}; Your grade is C".format(x)
        elif x >= 80 and x <= 89:
            print "Score: {}; Your grade is B".format(x)
        else:
            print "Score: {}; Your grade is A".format(x)
    print "End of program. Bye!"
scoresAndGrades()
