class MathDojo
    def add *x
        sum = 0
        for count in x
            sum += x[count]
        end
        self
    end
end
puts challenge1 = MathDojo.new.add(1).add(2).result