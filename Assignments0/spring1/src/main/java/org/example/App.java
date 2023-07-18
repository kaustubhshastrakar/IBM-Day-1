package org.example;

import org.example.model.Coach;
import org.example.model.Person;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App 
{
    public static void main( String[] args )
    {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        Coach myCoach = context.getBean(Coach.class);
        System.out.println(myCoach.getDailyWorkOut());
        System.out.println(myCoach.getDailyFortune());
    }
}