package enum2;

public class Days {
	 public enum Weekend {
		    Saturday,
		    Sunday
		  }

		  public static void main(String[] args) {
		    Weekend day1 = Weekend.Saturday;
		    Weekend day2 = Weekend.Sunday;

		    System.out.println("First day of the weekend: " + day1);
		    System.out.println("Second day of the weekend: " + day2);
		  }
}
