import java.util.*;

public class GreeterTest {
	public static void main(String[] args) {
		Greeter g = new Greeter();
		String greeting = g.greet();
		String greetingWithName = g.greet("Patrick", "Kilpatrick");
		System.out.println(greetingWithName);
//		if(greeting.equals("Hello world") || greetingWithName.contentEquals("Hello Eduardo")) {
//			System.out.println("Test successful");
//		}
//		else {
//			System.out.println("Test failed");
//		}
	}
}