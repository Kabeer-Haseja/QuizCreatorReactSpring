package com.example.quizcreatorreactspring.Repository;

import com.example.quizcreatorreactspring.Model.Question;
import org.springframework.data.repository.CrudRepository;

public interface QuestionRepo extends CrudRepository<Question,Integer> {

}
