package com.atasilyas.crud.backend.controller;

import com.atasilyas.crud.backend.dto.PageRequest;
import com.atasilyas.crud.backend.model.User;
import com.atasilyas.crud.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("http://localhost:4200")
public class UserController {

    private final UserService userService;

    @GetMapping("findAll")
    public ResponseEntity<List<User>> getAllUser(@RequestParam(defaultValue = "0") Integer pageNo,
                                                @RequestParam(defaultValue = "10") Integer pageSize,
                                                @RequestParam(defaultValue = "id") String sortBy){
        List<User> list = userService.findAll(PageRequest.builder().pageNo(pageNo).pageSize(pageSize).sortBy(sortBy).build());
        return new ResponseEntity<List<User>>(list , HttpStatus.OK);
    }


    @PostMapping("addUser")
    public ResponseEntity<?> saveUser(@RequestBody User user){
        userService.save(user);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
