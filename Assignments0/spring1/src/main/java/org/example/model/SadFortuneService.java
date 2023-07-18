package org.example.model;
import org.springframework.stereotype.Component;

@Component
public class SadFortuneService implements FortuneService{

	@Override
	public String getDailyFortune() {
		// TODO Auto-generated method stub
		return "to day is your bad day";
	}

}