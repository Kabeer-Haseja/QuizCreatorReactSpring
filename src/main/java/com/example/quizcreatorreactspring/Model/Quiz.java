package com.example.quizcreatorreactspring.Model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
@Table(name="quiz")
public class Quiz {
    @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int q_id;
    public String q_title;

    public int q_timeAllowed;
    public String q_datetime;
    public int q_totalpoints;
@OneToMany(cascade = CascadeType.ALL)
    private Set<Question> questionSet;
}


