package project1;
import java.util.Scanner;
public class tester {

	public static void main(String[] args) {
		Scanner input =new Scanner(System.in);
				
				System.out.println("Enter the first number; ");
				int num1 = input.nextInt();
				
				System.out.println("Enter the second number: ");
				int num2 = input.nextInt();
				
				System.out.println("Enter the third number: ");
				int num3 = input.nextInt();
				
				System.out.println("Enter the fourth number: ");
				int num4 = input.nextInt();
				
			int greatest = num1;
			
			if (num2 > greatest) {
				greatest = num2;
				}
			
			if (num3 > greatest) {
				greatest = num3;
			}
	
			if (num4 > greatest) {
				greatest = num4;
			}
			
			System.out.println("The greatest number is: " + greatest);
	}

}
