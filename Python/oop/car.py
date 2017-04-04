class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price > 10000:
            self.tax = .15
        else:
            self.tax = .12
        self.display_all()
    def display_all(self):
        print "Price:", self.price
        print "Speed:", self.speed, "mph"
        print "Fuel:", self.fuel
        print "Mileage:", self.mileage, "mpg"
        print "Tax:", self.tax
        return self
car1 = Car(200000, 435, "Full", 16)
car2 = Car(100000, 280, "Full", 27)
car3 = Car(75000, 210, "3/4 Tank", 45)
car4 = Car(20000, 180, "1/2 Tank", 32)
car5 = Car(9000, 120, "1/4 Tank", 22)
car6 = Car(3000, 85, "Almost Empty", 12)