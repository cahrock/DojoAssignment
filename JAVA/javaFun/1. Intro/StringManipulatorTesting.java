import java.util.Scanner;

class StringManipulatorTesting{
    public static void main(String[] args) {
        System.out.println(StringManipulator.trimAndConcat(getStrInput("Insert your first string :"), getStrInput("Insert your second string :")));

        System.out.println(StringManipulator.getIndexOrNull("Hello world", 'w'));

        System.out.println(StringManipulator.getIndexOrNull(getStrInput("Insert your string :"), getStrInput("Insert your string to indexOf() :")));

        System.out.println(StringManipulator.concatSubstring(getStrInput("Insert your string :"), getIntInput("Gimme an index number of 1st string :"), getIntInput("Gimme an index number inserted to 2nd string :"), getStrInput("Insert your 2nd string :")));

    }

    public static String getStrInput(String prompt){
        Scanner input = new Scanner(System.in);
        System.out.println(prompt);
        return input.nextLine();
    }

    public static int getIntInput(String prompt){
        Scanner input = new Scanner(System.in);
        System.out.println(prompt);
        return input.nextInt();
    }
}
