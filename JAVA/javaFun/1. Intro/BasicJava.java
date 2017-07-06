import java.util.ArrayList;
import java.util.*;

class BasicJava{
    public static void printAllNumbers(){
        // int num;
        for(int i = 1; i <= 255; i++){
            System.out.println(i);
        }
    }
    public static void printOddNumbers(){
        int num;
        for(int i = 1; i <= 255; i++){
            if(i % 2 != 0){
                num = i;
                System.out.println("Odd number :" + num);
            }
        }
    }

    public static void printSum(){
        int sum = 0 ;
         for(int i = 1 ; i <= 255 ; i++){
             for(int j = 1 ; j <= i; j++ ){
                sum = sum + j ;
             }
             System.out.println("Sum index of "+ i + " is: " + sum) ;
             sum = 0 ;
         }

    }

    public static void iterateArray(){
        int[] arr;
        arr = new int[6];
        arr[0] = 1;
        arr[1] = 3;
        arr[2] = 4;
        arr[3] = 10;
        arr[4] = 5;
        arr[5] = 2;

        for(int i = 0; i < arr.length; i++){
            System.out.println(arr[i]);
        }
    }

    public static void findMax(){
        int[] arr;
        arr = new int[6];
        arr[0] = 1;
        arr[1] = 3;
        arr[2] = -4;
        arr[3] = 10;
        arr[4] = 5;
        arr[5] = 2;

        int maxval = arr[0];
        for(int i = 0; i < arr.length; i++){
            if(arr[i] > maxval){
                maxval = arr[i];
            }
        }
        System.out.println("The max value in the array is :" + maxval);
    }

    public static void getAverage(){
        int[] arr = {1,3,7,10,9,23};

        int sum = 0;
        float average = 0;
        for(int i = 0; i < arr.length; i++){
            sum += arr[i];
            average = sum / arr.length;
        }

        System.out.println("The average is " + String.format("%.2f", average));
    }

    public static void arrOddNumber(){
        ArrayList<Integer> myArr = new ArrayList<Integer>();
        for(int i = 1; i <= 255; i +=2){
            if(i % 2 == 1){
                myArr.add(i);
            }
        }
        System.out.println(myArr);
    }

    public static void gTY(int[] arr, int y){
        int count = 0;
        for(int i = 0; i < arr.length; i++){
            if(arr[i] > y){
                count ++;
            }
        }
        System.out.println(count);
    }

    public static void squareTheValue(int[] arr){
        ArrayList<Integer> myArr = new ArrayList<Integer>();
        int sqr = 0;
        for(int i = 0; i < arr.length; i++){
            sqr = arr[i] * arr[i];
            myArr.add(sqr);
        }
        System.out.println(myArr);
    }

    public static void elmNegNumber(int[] arr){
        ArrayList<Integer> myArr = new ArrayList<Integer>();
        for(int i = 0; i < arr.length; i++){
            if(arr[i] < 0){
                arr[i] = 0;
                myArr.add(arr[i]);
            }else{
                myArr.add(arr[i]);
            }
        }
        System.out.println(myArr);
    }

    public static void maxMinAvg(int[] arr){

        int min = arr[0];
        int max = arr[0];
        int sum = 0;
        int avg = 0;
        for(int i = 0; i < arr.length; i++){
            if(min > arr[i]){
                min = arr[i];
            }
            if(arr[i] > max){
                max = arr[i];
            }
            sum += arr[i];
            avg = sum / arr.length;
        }
        int[] newArr = {min, max, avg};
        System.out.println(Arrays.toString(newArr));
    }

    public static void shiftingValues(int[] arr){
        ArrayList<Integer> myArr = new ArrayList<Integer>();
        for(int i = 0; i < arr.length; i++){
            try{
                arr[i] = arr[i + 1];
            }catch(ArrayIndexOutOfBoundsException e){
                arr[i] = 0;
            }
        }
        System.out.println(Arrays.toString(arr));
    }
}
