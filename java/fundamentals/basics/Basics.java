import java.util.ArrayList;

public class Basics {
    public void oneToTwoFiftyFive() {
        for(int i = 1; i < 256; i++) {
            System.out.println(i);
        }
    }
    public void oneToTwoFiftyFiveOdds() {
        for(int i = 1; i < 256; i = i+2) {
            System.out.println(i);
        }
    }
    public void printSum() {
        int sum = 0;
        for(int i = 0; i < 256; i++) {
            sum = sum + i;
            System.out.println("New number: " + i + " New sum: " + sum);
        }
    }
    public void iterateArray(int[] arr) {
        for(int i = 0; i < arr.length; i++) {
           System.out.println(arr[i]); 
        }
    }
    public void findMax(int[] arr) {
        int max = arr[0];
        for(int i = 0; i < arr.length; i++) {
            if(arr[i] > max) {
                max = arr[i];
            }
        }
        System.out.println(max);
    }
    public void findAvg(int[] arr) {
        int sum = 0;
        int avg;
        for(int i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        avg = sum / arr.length;
        System.out.println(avg);
    }
    public void arrayWithOdds() {
        ArrayList<Integer> arr = new ArrayList<Integer>();
        for(int i = 1; i < 256; i = i+2) {
            arr.add(i);
        }
        System.out.println(arr);
    }
    public void greaterThanY(int[] arr, int y) {
        int sum = 0;
        for(int i = 0; i < arr.length; i++) {
            if(arr[i] > y) {
                sum++;
            }
        }
        System.out.println(sum);
    }
    public void squareTheValues(int[] arr2) {
        for(int i = 0; i < arr2.length; i++) {
            arr2[i]*=arr2[i];
        }
        System.out.println(arr2);
    }
    public void eliminateNegatives(int [] arr2) {
        for(int i = 0; i < arr2.length; i++) {
            if(arr2[i] < 0) {
                arr2[i] = 0;
            }
        }
        System.out.println(arr2[1]);
    }
    public void maxMinAvg(int [] arr2) {
        int max = arr2[0];
        int min = arr2[0];
        double sum = 0;
        double avg;
        for(int i = 0; i < arr2.length; i++) {
            if(arr2[i] > max) {
                max = arr2[i];
            }
            if(arr2[i] < min) {
                min = arr2[i];
            }
            sum+=arr2[i];
        }
        avg = sum / arr2.length;
        System.out.println("Max is: " + max);
        System.out.println("Min is: " + min);
        System.out.println("Average is: " + avg);
    }
    public void shiftArray(int[] arr) {
        for(int i = 0; i < arr.length-1; i++) {
            arr[i] = arr[i+1];
        }
        arr[arr.length-1] = 0;
        System.out.println(arr);
    }
}