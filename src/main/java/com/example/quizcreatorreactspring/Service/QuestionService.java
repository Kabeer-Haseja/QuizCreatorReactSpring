package com.example.quizcreatorreactspring.Service;

import com.example.quizcreatorreactspring.Model.Question;
import com.example.quizcreatorreactspring.Repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class QuestionService {
    @Autowired
    private QuizRepository quizRepository;

    public Question saveQuestion( Question question)
    {
        return quizRepository.save(question);
    }
    public Iterable<Question> getAll(){
        return quizRepository.findAll();
    }

}
