import java.util.*;

public class PuzzleJava {
    public static ArrayList<Integer> sum10(ArrayList<Integer> arr) {
    	int sum = 0;
    	ArrayList<Integer> newArr = new ArrayList<Integer>();
    	for(int i = 0; i < arr.size(); i++) {
    		sum+=arr.get(i);
    		if(arr.get(i) > 10) {
    			newArr.add(arr.get(i));
    		}
    	}
    	System.out.println(sum);
    	return newArr;
    }
    public static ArrayList<String> shuffleArray(ArrayList<String> arr) {
    	ArrayList<String> newArr = new ArrayList<String>();
    	Collections.shuffle(arr);
    	for(int i = 0; i < arr.size(); i++) {
    		if(arr.get(i).length() > 5) {
    			newArr.add(arr.get(i));
    		}
    		System.out.println(arr.get(i));
    	}
    	return newArr;
    }
    public void alphabet(ArrayList<String> arr) {
    	ArrayList<String> vowels = new ArrayList<String>();
    	Collections.addAll(vowels, "a","e","i","o","u");
    	Collections.shuffle(arr);
    	System.out.println(arr.get(arr.size()-1));
    	System.out.println(arr.get(0));
    	if(vowels.contains(arr.get(0))) {
    		System.out.println("The first letter is a vowel!");
    	}
    }
    public static ArrayList<Integer> random10() {
    	ArrayList<Integer> arr = new ArrayList<Integer>();
    	Random r = new Random();
    	for(int i = 1; i < 11; i++) {
    		arr.add(r.nextInt(101-55) + 55);
    	}
    	return arr;
    }
    public void random10Sort() {
    	ArrayList<Integer> arr = new ArrayList<Integer>();
    	Random r = new Random();
    	for(int i = 1; i < 11; i++) {
    		arr.add(r.nextInt(101-55) + 55);
    	}
    	Collections.sort(arr);
    	System.out.println("Begin list");
    	for(int i = 0; i < arr.size(); i++) {
    		System.out.println(arr.get(i));
    	}
    	System.out.println("End list");
    	System.out.println("The minimum value in the list is" + arr.get(0));
    	System.out.println("The maximum value in the list is" + arr.get(arr.size()-1));
    }
    public void randomString() {
    	ArrayList<String> alphabet = new ArrayList<String>();
    	Collections.addAll(alphabet, "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
    	Random r = new Random();
    	String randomString = "";
    	for(int i = 0; i < 5; i++) {
    		randomString = randomString.concat(alphabet.get(r.nextInt(26)));
    	}
    	System.out.println(randomString);
    }
    public static ArrayList<String> randomStringArray() {
    	ArrayList<String> alphabet = new ArrayList<String>();
    	Collections.addAll(alphabet, "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
    	Random r = new Random();
    	ArrayList<String> randomArr = new ArrayList<String>();
    	for(int i = 0; i < 5; i++) {
    		String randomString = "";
    		for(int x = 0; x < 5; x++) {
    			randomString = randomString.concat(alphabet.get(r.nextInt(26)));
    		}
    		randomArr.add(randomString);
    	}
    	return randomArr;
    }
}