package com.example.quizcreatorreactspring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.example.quizcreatorreactspring.Model")
@SpringBootApplication
public class QuizCreatorReactSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuizCreatorReactSpringApplication.class, args);
	}

}
