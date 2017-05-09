require_relative "mammal"

class Dog < Mammal
    def initialize
        super
        @health = health
    end
    def pet
        @health += 5
        self
    end
    def walk
        @health -= 1
        self
    end
    def run
        @health -= 10
        self
    end
    def display_health
        puts "#{@health}"
        self
    end
end

roofus = Dog.new
roofus.walk.walk.walk.run.run.pet.display_health
