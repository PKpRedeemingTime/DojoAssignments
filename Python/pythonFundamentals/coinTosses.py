def coinTosses():
    sumT = 0
    sumH = 0
    def rando():
        import random
        return(random.randint(0,1))
    for count in range(1,5001):
        x = rando()
        if x == 0:
            sumT += 1
            print "Attempt #{}: Throwing a coin... It's a tail! Got {} head(s) so far and {} tail(s) so far.".format(count,sumH,sumT)
        else:
            sumH += 1
            print "Attempt#{}: Throwing a coin... It's a head! Got {} head(s) so far and {} tails() so far.".format(count,sumH,sumT)
    print "Ending the program, thank you!"
coinTosses()