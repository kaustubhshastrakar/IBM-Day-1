package exercise4;

public class Main {
 public static void main(String[] args) {
     Bank bank = new Bank();
     SavingsAccount savingsAccount = new SavingsAccount(1000, 1.25);
     System.out.println("Savings Account:\nInitial Deposit: 11000.\nInterest rate: 1.25%");  
     CurrentAccount currentAccount = new CurrentAccount(5000, 1000);
     System.out.println("\nCurrent Account:\nInitial Deposit: 5000\nOverdraftLimit: 1000");
		bank.addAccount(savingsAccount);
     bank.addAccount(currentAccount);
		System.out.println("\nNow deposit 100 to Savings Account.");
     bank.deposit(savingsAccount, 100);
     System.out.println("Now deposit 400 to Current Account.");
		bank.deposit(currentAccount, 400);	
		System.out.println("Withdraw 200 from Savings Account.\n");
     bank.withdraw(savingsAccount, 200);
     System.out.println("\nSavings Account and Current Account.:");
		bank.printAccountBalances();
     savingsAccount.applyInterest();
     System.out.println("\nAfter applying interest on Savings Account for 1 year:");
		System.out.println("Savings Account and Current Account:");
     bank.printAccountBalances();
 }
}

