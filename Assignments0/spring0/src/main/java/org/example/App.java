package org.example;

import java.util.Random;

import org.example.model.Department;
import org.example.model.Employee;
import org.example.model.Location;
import org.example.model.SpringConfig;
import org.example.model.Student;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
       try {
    	   
			/*
			 * ApplicationContext context=new
			 * ClassPathXmlApplicationContext("applicationContext.xml"); Employee
			 * e=context.getBean("employee",Employee.class); Department
			 * d=context.getBean("department",Department.class); Location
			 * l=context.getBean("location",Location.class); l.setLocationId(100);
			 * l.setLocationName("Hyd"); l.setCounty("India"); d.setDepartmentId(101); //
			 * d.setDepartmentName("Sales"); d.setLocation(l); e.setEmployeeId(new
			 * Random().nextInt(10000)); // e.setEmloyeeName("John Doe");
			 * //e.setSalary(20000); e.setDepartment(d); System.out.println(e);
			 * 
			 * Student student=context.getBean("s",Student.class);
			 * System.out.println(student); Student
			 * student1=context.getBean("s",Student.class); System.out.println(student1);
			 * Student student2=context.getBean("s",Student.class);
			 * System.out.println(student2); System.out.println(student==student1 &&
			 * student==student2);
			 */
    	   ApplicationContext context=new AnnotationConfigApplicationContext(SpringConfig.class);
    	   Student student=context.getBean("s",Student.class);
    	   student.setId(1);
    	 
    	   System.out.println(student);
    	   
    	   Employee e=context.getBean("employee",Employee.class);
    	   System.out.println(e);
    	   
		
	} catch (Exception e) {
		// TODO: handle exception
		
		e.printStackTrace();
	}
    }
}