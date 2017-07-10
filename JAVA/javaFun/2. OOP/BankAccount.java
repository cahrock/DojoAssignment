import java.util.Random;

public class BankAccount{
    private String _acctNumber;
    private Long _checkingBalance;
    private Long _savingBalance;
    private static int _numAccount = 0;
    private static int totalAmount = 0;
    private static Random rnd = new Random();

    public BankAccount(){
        _acctNumber = BankAccount.accountNum();
        _numAccount++;
    }

    private static int accountNum(){
        return rnd.nextInt(1000000000)+1000000000;
    }

    public static void main(String[] args) {
        BankAccount.accountNum()
    }

   //  public double getBalance() {
   //    return this.balance;
   // }
}
