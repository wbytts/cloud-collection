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

    public List<User> queryAllUser() {
        QueryWrapper<User> wrapper = new QueryWrapper<>();
        List<User> users = userMapper.selectList(wrapper);
        return users;
    }
    
}
