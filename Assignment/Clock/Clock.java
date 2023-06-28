package time;


import java.util.Scanner;

public class Clock {
    private int hours;
    private int minutes;
    private int seconds;
    private String timeMode;

    public Clock(int hours, int minutes, int seconds) {
        setTime(hours, minutes, seconds);
    }

    public void setTime(int hours, int minutes, int seconds) {
        if (isValidTime(hours, minutes, seconds)) {
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
            this.timeMode = (hours < 12) ? "AM" : "PM";
        } else {
            System.out.println("Invalid time!");
        }
    }

    private boolean isValidTime(int hours, int minutes, int seconds) {
        return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60 && seconds >= 0 && seconds < 60;
    }

    public void displayTime() {
        System.out.printf("%02d:%02d:%02d %s\n", hours, minutes, seconds, timeMode);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter hours: ");
        int hours = scanner.nextInt();

        System.out.print("Enter minutes: ");
        int minutes = scanner.nextInt();

        System.out.print("Enter seconds: ");
        int seconds = scanner.nextInt();

        Clock clock = new Clock(hours, minutes, seconds);
        clock.displayTime();

        scanner.close();
    }
}

