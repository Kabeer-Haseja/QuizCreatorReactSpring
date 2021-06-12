package com.example.quizcreatorreactspring.Model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.awt.*;
import java.util.HashSet;
import java.util.Set;
@Data
@NoArgsConstructor
@Entity
@Table(name="Question")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int ques_id;
    @Column(name="Question_Text")
    public  String Question_Text;
    @Column (name="Question_Points")
    public  String Question_Points;
    @OneToMany(cascade = CascadeType.ALL)
    Set<Choice> choices=new HashSet<Choice>();

}
