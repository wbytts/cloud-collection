package com.by.ccs.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.by.ccs.mapper.UserMapper;
import com.by.ccs.model.User;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class UserService {

    @Resource
    private UserMapper userMapper;

    public List<User> queryAllUser() {    //验证用户
        QueryWrapper<User> wrapper = new QueryWrapper<>();
        List<User> users = userMapper.selectList(wrapper);
        return users;
    }

    public  User queryByUsername(String username){
        // List <User> userList = userMapper.queryByUsername(username);
        QueryWrapper<User> wrapper = new QueryWrapper<>();
        wrapper.eq("user_name", username);
        User user = userMapper.selectOne(wrapper);
        return user;
    }
    
}
