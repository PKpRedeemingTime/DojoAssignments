require_relative "human"

class Wizard < Human
    def initialize
        super
        @intelligence = 25
        @health = 50
    end
    def heal
        @health += 10
        self
    end
    def fireball(obj)
        if obj.class.ancestors.include?(Human)
            obj.health -= 20
            true
        else
            false
        end
        self
    end
    def display_stats
        puts "Wizard strength is #{@strength}."
        puts "Wizard intelligence is #{@intelligence}."
        puts "Wizard stealth is #{@stealth}."
        puts "Wizard health is #{@health}."
        self
    end
end

gandalf = Wizard.new
dumbledore = Wizard.new
gandalf.fireball(dumbledore)
dumbledore.display_stats