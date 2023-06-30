package exercise1;

public class Main {
    public static void main(String[] args) {
        
		Rectangle rectangle = new Rectangle(10, 12);
        Circle circle = new Circle(3);
		Triangle triangle = new Triangle(4, 6);

        System.out.println("Area of the Rectangle: " + rectangle.getArea());
        System.out.println("Area of the Circle: " + circle.getArea());
        System.out.println("Area of the Triangle: " + triangle.getArea());
    }
}
