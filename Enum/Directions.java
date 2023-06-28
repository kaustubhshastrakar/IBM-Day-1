package enum4;

public class Cardinal {
	 public enum Direction {
		    North,
		    South,
		    East,
		    West
		  }

		  public static void main(String[] args) {
		    Direction direction1 = Direction.North;
		    Direction direction2 = Direction.West;

		    System.out.println("First direction: " + direction1);
		    System.out.println("Second direction: " + direction2);
		  }
}
