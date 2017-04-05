class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def displayHealth(self):
        print "Name:", self.name
        print "Health:", self.health
        return self
animal1 = Animal("John")
animal1.walk().walk().walk().run().run().displayHealth()

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150
    def pet(self):
        self.health += 5
        return self
dog1 = Dog("Ralph")
dog1.walk().walk().walk().run().run().pet().displayHealth()

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170
    def fly(self):
        self.health -= 10
        return self
    def displayHealth(self):
        print "This is a dragon!"
        super(Dragon, self).displayHealth()
dragon1 = Dragon("Smaug")
dragon1.walk().walk().walk().run().run().fly().fly().displayHealth()

# animal2 = Animal("Timmy")
# animal2.pet()
# animal2.fly()
# animal2.displayHealth()

# dog2 = Dog("Sebastian")
# dog2.fly()

