import java.util.Scanner;

public class VowelFinder {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter a string: ");
        String str = input.nextLine();

        String vowels = findVowels(str);

        System.out.println("Vowels in the string: " + vowels);
    }

    public static String findVowels(String str) {
        str = str.toLowerCase();
        StringBuilder vowels = new StringBuilder();

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);

            if (isVowel(ch)) {
                vowels.append(ch);
            }
        }

        return vowels.toString();
    }

    public static boolean isVowel(char ch) {
        return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';
    }
}
