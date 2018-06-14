import java.lang.Math;
public class PythagoreanTheorem {
    public double calculateHypotenuse(int legA, int legB) {
        double c = ((legA*legA) + (legB * legB));
        double hypotenuse = Math.sqrt(c);
        return hypotenuse;
    }
}