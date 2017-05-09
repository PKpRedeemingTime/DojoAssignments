def guess_number guess
    number = 25
    if guess == 25
        puts "You got it!"
    elsif guess > 25
        puts "Your guess was too high!"
    elsif guess < 25
        puts "Your guess was too low!"
    end
end

guess_number 25