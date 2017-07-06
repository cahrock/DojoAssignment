import java.util.*;

class PuzzleJavaTest{
    public static void main(String[] args) {
        int[] arr = {3,5,1,2,7,9,8,13,25,32};
        // String[] arr2 = { 'Nancy', 'Jinichi', 'Fujibayashi', 'Momochi', 'Ishikawa'};
        char[] alphabet = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
        // ArrayList<String> arr2 = new ArrayList<>();
        // arr2.add("Nancy");
        // arr2.add("Jinichi");
        // arr2.add("Fujibayashi");
        // arr2.add("Fujibayashi");
        // arr2.add("Momochi");
        // arr2.add("Ishikawa");
        // System.out.println(PuzzleJava.sumNum(arr));
        // System.out.println(PuzzleJava.nameJap(arr2));
        PuzzleJava alp = new PuzzleJava();
        // char[] newArr = alp.alphabets();
        alp.alphabets(alphabet);
        // System.out.println(PuzzleJava.alphabets(alphabet));
    }
}
