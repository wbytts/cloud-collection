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

    @ApiOperation(value = "查询所有用户")
    @GetMapping("/queryAll")
    public IPage<User> queryAllUsers() {
        User user = new User();
        IPage<User> userIPage = userService.queryAllUser(user);
        return userIPage;
    }


    @ApiOperation(value = "编辑用户信息")
    @RequestMapping("/update")
    public User UpdateUser(User user){

        UpdateWrapper<User> updateWrapper = new UpdateWrapper<>();
        updateWrapper.eq("user_name","小壹");
        User users = new User();
        user.setPassword("1234");
        userService.update(user, updateWrapper);
        return  user;
    }


}

