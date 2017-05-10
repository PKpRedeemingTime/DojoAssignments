class AppleTree
    attr_accessor :age
    attr_reader :height, :apple_count
    def initialize
        @age = 0
        @height = 3
        @apple_count = 0
    end
    def year_gone_by
        @age += 1
        @height = @height*1.1
        if @age > 2 and @age < 11
            @apple_count += 2
        end
    end
    def pick_apples
        @apple_count = 0
    end
end