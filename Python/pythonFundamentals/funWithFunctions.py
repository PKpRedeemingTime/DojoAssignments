def odd_even():
    for count in range(1,2001):
        if count % 2 == 0:
            print "Number is {}. This is an even number.".format(count)
        else:
            print "Number is {}. This is an odd number.".format(count)
odd_even()