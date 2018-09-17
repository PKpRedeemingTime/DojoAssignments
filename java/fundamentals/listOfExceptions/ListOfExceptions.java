import java.util.*;

public class ListOfExceptions {
    public void exceptions(ArrayList<Object> arr) {
    	for(int i = 0; i < arr.size(); i++) {
    		try {
    			Integer castedValue = (Integer) arr.get(i);
        		arr.set(i, castedValue);
    		}
    		catch(ClassCastException e) {
    			System.out.println ("ERROR ON INDEX # " + i);
    			System.out.println("Value: " + arr.get(i));
    			System.out.println("Error message: " + e.getMessage());
    		}
    	}
    }
}