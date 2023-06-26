import java.util.Scanner;

public class StringReversal {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter a string: ");
        String originalString = input.nextLine();

        String reversedString = reverseString(originalString);

        System.out.println("Reversed string: " + reversedString);
    }

    public static String reverseString(String str) {
        int length = str.length();
        StringBuilder reversed = new StringBuilder();

        for (int i = length - 1; i >= 0; i--) {
            reversed.append(str.charAt(i));
        }

        return reversed.toString();
    }
}
