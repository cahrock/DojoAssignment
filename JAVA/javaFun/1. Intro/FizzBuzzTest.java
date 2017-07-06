import java.util.Scanner;

class FizzBuzzTest{
    public static void main(String[] args) {
        System.out.println(FizzBuzz.fizzNum(getIntInput("Enter the number :")));
    }

    public static int getIntInput(String prompt){
        Scanner input = new Scanner(System.in);
        System.out.println(prompt);
        return input.nextInt();
    }
}
