package com.example.quizcreatorreactspring.Repository;

import com.example.quizcreatorreactspring.Model.Question;
import com.example.quizcreatorreactspring.Model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizRepository extends CrudRepository<Question ,Integer> {

}

