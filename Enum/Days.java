package enum1; 
	public class Days {
public enum Days_Of_Week {
	Sunday,
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday
  }
  public static void main(String[] args) {
    Days_Of_Week today = Days_Of_Week.Monday;
    System.out.println("Today is " + today);
  }
}
