class Bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    def displayInfo(self):
        print "Price:", self.price
        print "Maximum Speed:", self.max_speed, "mph"
        if self.miles >= 0:
            print "Total miles:", self.miles
        else:
            print "Total miles: 0"
        return self
    def ride(self):
        print "Riding..."
        self.miles += 10
        return self
    def reverse(self):
        print "Reversing"
        self.miles -= 5
        return self
bike1 = Bike(2500, 152)
bike2 = Bike(700, 79)
bike3 = Bike(200, 35)
bike1.ride().ride().ride().reverse().displayInfo()
bike2.ride().ride().reverse().reverse().displayInfo()
bike3.reverse().reverse().reverse().displayInfo()