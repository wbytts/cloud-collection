package com.by.ccs.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.by.ccs.model.Response;
import com.by.ccs.model.User;
import com.by.ccs.page.PageResponseVo;
import com.by.ccs.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Map;

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


}

