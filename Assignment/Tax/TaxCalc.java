package tax;

import java.util.Scanner;

public class TaxCalc {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the income amount: ");
        double income = scanner.nextDouble();
        
        double taxAmount = calculateIncomeTax(income);
        System.out.println("Income tax is: " + taxAmount);
    }
    
    public static double calculateIncomeTax(double income) {
        double taxAmount = 0;
        
        if (income <= 50000) {
            taxAmount = 0;
        } else if (income <= 60000) {
            taxAmount = (income - 50000) * 0.1;
        } else if (income <= 150000) {
            taxAmount = (10000 * 0.1) + (income - 60000) * 0.2;
        } else {
            taxAmount = (10000 * 0.1) + (90000 * 0.2) + (income - 150000) * 0.3;
        }
        
        return taxAmount;
    }
}
