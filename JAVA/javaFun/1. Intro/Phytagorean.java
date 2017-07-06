import java.lang.Math;
class Phytagorean {
    public static double calculateHypotenuse(int legA, int legB){
        double c = Math.sqrt((legA*legA)+(legB*legB));
        return c;
    }
}
