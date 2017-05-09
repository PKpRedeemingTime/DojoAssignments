class User
    attr_accessor :first_name, :last_name
    def initialize(f_name, l_name)
        @first_name = f_name
        @last_name = l_name
    end
end
patrick = User.new("Patrick", "Kilpatrick")
puts patrick.first_name + " " + patrick.last_name

class CodingDojo 
  @@no_of_branches = 0
  def initialize(id, name, address) 
    @branch_id = id 
    @branch_name = name 
    @branch_address = address 
    @@no_of_branches += 1 
    puts "Created branch #{@@no_of_branches}"
  end
  def hello 
    puts "Hello CodingDojo!"
  end
  def display_all
    puts "Branch ID: #{@branch_id}"
    puts "Branch Name: #{@branch_name}" 
    puts "Branch Address: #{@branch_address}"
  end 
end
seattle = CodingDojo.new(1, "Seattle", "123 Seattle Avenue")
san_jose = CodingDojo.new(2, "San Jose", "456 San Jose Boulevard")
burbank = CodingDojo.new(3, "Burbank", "789 Burbank Street")
burbank.num_of_branches