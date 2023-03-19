package com.example.demo.test;

import com.example.demo.post.Dto.DataModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@Controller
@RestController
public class TestConroller {

    @Autowired
    private UserRepository userRepository;


    @RequestMapping("/")
    public String home() {
        return "Hello World!";
    }

    @RequestMapping(value = "/api/test", method = RequestMethod.GET)
    public List<User> test() {
        List<User> test = userRepository.search();
        System.out.println(" ttt :: "+test.size());
        return test;
    }






}