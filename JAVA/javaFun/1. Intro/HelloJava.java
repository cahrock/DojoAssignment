import java.util.Arrays;
/*from   w  ww.j a  v a2s  .c om*/
public class HelloJava {
  public static void main(String[] args) {
    int[] origNum = { 1, 2, 3 };
    System.out.println("Before method  call:" + Arrays.toString(origNum));

    // Pass the array to the method
    tryArrayChange(origNum);

    System.out.println("After method  call:" + Arrays.toString(origNum));
  }

  public static void tryArrayChange(int[] num) {
    System.out.println("Inside method-1:" + Arrays.toString(num));
    // Create and store a new int array in num
    num = new int[] { 10, 20 };

    System.out.println("Inside method?2:" + Arrays.toString(num));
  }

  
}
