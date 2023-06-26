package palindrome;
import java.util.Scanner;
public class Palindrome {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		
		System.out.println("Enter a number: ");
		int number = input.nextInt();
		
		if (isPalindrome(number)) {
			System.out.println(number + " is a palindrome number.");
			} else {
				System.out.println(number + " is not a palindrome number.");
			}
	}
		public static boolean isPalindrome(int number) {
			int originalNumber = number;
			int reversedNumber = 0;
			
			while (number !=0) {
				int remainder = number % 10;
				reversedNumber = reversedNumber * 10 + remainder;
				number /= 10;
			}
			
			return originalNumber == reversedNumber;
		}
	
	

}
