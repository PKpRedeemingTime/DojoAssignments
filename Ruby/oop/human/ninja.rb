require_relative "human"

class Ninja < Human
    def initialize
        super
        @stealth = 175
    end
    def steal(obj)
        attack(obj)
        @health += 10
        self
    end
    def get_away
        @health -= 15
        self
    end
    def display_stats
        puts "Ninja strength is #{@strength}."
        puts "Ninja intelligence is #{@intelligence}."
        puts "Ninja stealth is #{@stealth}."
        puts "Ninja health is #{@health}."
        self
    end
end

snake_eyes = Ninja.new
storm_shadow = Ninja.new
snake_eyes.steal(storm_shadow)
storm_shadow.get_away.display_stats
snake_eyes.display_stats