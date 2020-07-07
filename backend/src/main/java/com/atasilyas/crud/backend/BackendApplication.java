package com.atasilyas.crud.backend;

import com.atasilyas.crud.backend.dao.UserDao;
import com.atasilyas.crud.backend.model.User;
import com.atasilyas.crud.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication  implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Autowired
    private UserDao userDao;

    @Override
    public void run(String... args) throws Exception {

        for (int i = 0; i < 100; i++){
            userDao.save(User.builder().password(i+"12dsds").mail(i+".ilyas@hotmail.com").username(i+"ilyas").build());
        }

    }
}
