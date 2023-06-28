package enum5;

public class Year {
	public enum Months {
	     January,
	     February,
	     March,
	     April,
	     May,
	     June,
	     July,
	     August,
	     September,
	     October,
	     November,
	     December
	   }

	   public static void main(String[] args) {
	     Months currentMonth = Months.June;
	     System.out.println("Current month: " + currentMonth);
	   }
}
