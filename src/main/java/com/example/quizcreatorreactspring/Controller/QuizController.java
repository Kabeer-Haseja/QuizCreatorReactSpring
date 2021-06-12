package com.example.quizcreatorreactspring.Controller;

import com.example.quizcreatorreactspring.Model.Question;
import com.example.quizcreatorreactspring.Service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class QuizController {
    @Autowired
    QuestionService questionService;
    @PostMapping("/question")
    public Question saveQuestion(@RequestBody @Valid Question question){
 return questionService.saveQuestion(question);
         
    }
    @GetMapping("/question")
    public Iterable<Question> getQuestions(){
        return questionService.getAll();
    }



}
