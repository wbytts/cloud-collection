package com.by.ccs.controller;

import com.by.ccs.model.User;
import com.by.ccs.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/user/queryAll")
    public List<User> queryAllUsers() {
        return userService.queryAllUser();
    }

}
