require_relative "human"

class Samurai < Human
    @@count = 0
    def initialize
        super
        @strength = strength
        @intelligence = intelligence
        @stealth = stealth
        @health = 200
        @@count += 1
    end
    def death_blow(obj)
        if obj.class.ancestors.include?(Human)
            obj.health = 0
            true
        else
            false
        end
        self
    end
    def meditate
        @health = 200
        self
    end
    def how_many
        puts "There are #{@@count} samurai."
        self
    end
    def display_stats
        puts "Samurai strength is #{@strength}."
        puts "Samurai intelligence is #{@intelligence}."
        puts "Samurai stealth is #{@stealth}."
        puts "Samurai health is #{@health}."
        self
    end
end

hanzo = Samurai.new
matsui = Samurai.new
hanzo.how_many