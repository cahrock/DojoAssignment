import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.lang.Math;
import java.util.Random;

class PuzzleJava{
    Random rnd = new Random();

    public static ArrayList<Integer> sumNum(int[] arr){
        ArrayList<Integer> myArr = new ArrayList<Integer>();
        int sum = 0;
        int num = 0;
        for(int i = 0; i < arr.length; i++){
            sum += arr[i];
            if(arr[i] > 10){
                myArr.add(arr[i]);
            }
        }
        System.out.println(sum);
        return myArr;
    }

    public static ArrayList<String> nameJap(ArrayList<String> arr){
        ArrayList<String> myArr = new ArrayList<String>();
        Collections.shuffle(arr);
        for(int i = 0; i < arr.size(); i++){
            if(arr.get(i).length() > 5){
                myArr.add(arr.get(i));
            }
            System.out.println(arr.get(i));
        }
        return myArr;
    }

    public void alphabets(char[] arr){
        char[] vowels = {'a','e','i','o','u'};
        ArrayList<String> myArr = new ArrayList<String>();
        int ind;
        char chr;
        for (int i = 0; i < arr.length; i++) {
            ind = rnd.nextInt(arr.length);
            chr = arr[i];
            arr[ind] = chr;
            arr[i] = arr[ind];

        }
        for (int y = 0; y < vowels.length; y++) {
            if(arr[0] == vowels[ys]){
                System.out.println("This is a vowell");
            }
        }
        System.out.println(arr[arr.length - 1]);
        System.out.println(arr[0]);
    }

}
