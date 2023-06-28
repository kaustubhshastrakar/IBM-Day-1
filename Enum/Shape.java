package enum3;

public class Geometry {
	public enum Shape {
Square,
Circle,
Rectangle,
Triangle,
Hexagon
	  }

 public static void main(String[] args) {
	  Shape shape1 = Shape.Circle;
	  Shape shape2 = Shape.Square;

	  System.out.println("First shape: " + shape1);
	  System.out.println("Second shape: " + shape2);
	  }
}
