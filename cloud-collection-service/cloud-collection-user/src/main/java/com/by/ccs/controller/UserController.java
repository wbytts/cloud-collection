package com.by.ccs.controller;

import com.by.ccs.model.User;
import com.by.ccs.service.UserService;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Api(tags = "用户管理")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @ApiOperation(value = "查询所有用户分页")
    @GetMapping("/queryAll")
    public IPage<User> queryAllUsers() {
        User user = new User();
        IPage<User> userIPage = userService.queryAllUser(user);
        return userIPage;
    }


    @ApiOperation(value = "根据用户Id修改用户信息")
    @GetMapping("/update")
    public String update() {
        User user = new User("06","张三","123456","aaa",1,"123456","123","1234",1);
        String userId = userService.UpdateUser(user);
        return userId;
    }



}

