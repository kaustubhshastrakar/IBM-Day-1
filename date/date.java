package date;

import java.util.Scanner;

public class Date {
    private int year;
    private int month;
    private int day;

    public Date(int year, int month, int day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    public boolean isValidDate() {
        if (!(1 <= month && month <= 12)) {
            return false;
        }

        int[] daysInMonth = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

        if (!(1 <= day && day <= daysInMonth[month - 1])) {
            return false;
        }

        return true;
    }

    public Date getNextDay() {
        if (!isValidDate()) {
            return null;
        }

        int[] daysInMonth = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

        if (day == daysInMonth[month - 1]) {
            
            if (month == 12) {
                
                year++;
                month = 1;
                day = 1;
            } else {
                
                month++;
                day = 1;
            }
        } else {
            
            day++;
        }

        return this;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the year: ");
        int year = scanner.nextInt();

        System.out.println("Enter the month: ");
        int month = scanner.nextInt();

        System.out.println("Enter the day: ");
        int day = scanner.nextInt();

         Date myDate = new Date(year, month, day);

        if (myDate.isValidDate()) {
            System.out.println("Date is valid.");
        } else {
            System.out.println("Date is invalid.");
            scanner.close();
            return;
        }
        Date nextDay = myDate.getNextDay();
        System.out.println("The next day is: " + nextDay.year + "-" + nextDay.month + "-" + nextDay.day);

        scanner.close();
    }
}
