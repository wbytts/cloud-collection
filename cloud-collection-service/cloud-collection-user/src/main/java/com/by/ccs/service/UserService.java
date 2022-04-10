package com.by.ccs.service;

import com.by.ccs.mapper.UserMapper;
import com.by.ccs.model.User;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.github.xiaoymin.knife4j.core.util.StrUtil;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService extends ServiceImpl<UserMapper, User> {

    @Resource
    private UserMapper userMapper;

    public IPage<User> queryAllUser(User user) {    //验证用户


//        @ApiModelProperty(value = "性别 1=男，2=女)")
//        private Integer gender;
//
//        @ApiModelProperty(value = "用户状态")
//        private Integer status;
//        QueryWrapper<User> wrapper = new QueryWrapper<>();
        // 对用户进行分页查询
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        // 对昵称进行模糊查询
        queryWrapper.like(StrUtil.isNotBlank(user.getUserName()), User::getUserName, user.getUserName());
        // 对登录账号进行模糊查询
        queryWrapper.like(StrUtil.isNotBlank(user.getLoginName()), User::getLoginName, user.getLoginName());
        // 对用户性别进行查询
        queryWrapper.eq(null != user.getStatus(), User::getStatus, user.getStatus());
        // 设置分页参数
        Page<User> page = new Page<>(1, 2);
        // 进行分页查询
        Map<String, Object> map = new HashMap<>();
        map.put("user_name", user.getUserName());

        List<User> users = userMapper.selectByMap(map);
        IPage<User> userPage = userMapper.selectPage(page, queryWrapper);
        return userPage;
    }


    // add，update,delete,selectById,select


    public  User queryByUsername(String username){
        // List <User> userList = userMapper.queryByUsername(username);
        QueryWrapper<User> wrapper = new QueryWrapper<>();
        wrapper.eq("user_name", username);
        User user = userMapper.selectOne(wrapper);
        return user;
    }






}
