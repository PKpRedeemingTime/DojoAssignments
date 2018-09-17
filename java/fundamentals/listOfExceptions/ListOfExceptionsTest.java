import java.util.*;

public class ListOfExceptionsTest {
    public static void main(String[] args) {
        ListOfExceptions listOfExceptions = new ListOfExceptions();
        ArrayList<Object> arr = new ArrayList<Object>();
        arr.add("13");
        arr.add("Hello World");
        arr.add(48);
        arr.add("Goodbye World");
        listOfExceptions.exceptions(arr);
    }
}
