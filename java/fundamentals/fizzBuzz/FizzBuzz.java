public class FizzBuzz {
    public String fizzBuzz(int number) {
        String fB;
        if(number % 3 == 0 && number % 5 == 0) {
            fB = "FizzBuzz";
            return fB;
        } else if(number % 3 == 0) {
            fB = "Fizz";
            return fB;
        } else if(number % 5 == 0) {
            fB = "Buzz";
            return fB;
        } else {
            String nFB = String.format("%d",number);
            return nFB;
        }
    }
}