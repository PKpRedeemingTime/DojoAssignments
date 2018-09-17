import java.util.*;

public class Greeter {
	public String greet(String name) {
		return createGreeting(name);
	}
	public String greet() {
		return createGreeting("world");
	}
	public String greet(String firstName, String lastName) {
		return createGreeting(firstName +  " " + lastName);
	}
	private String createGreeting(String toBeGreeted) {
		return "Hello, " + toBeGreeted + ", welcome to MassLight!";
	}
}