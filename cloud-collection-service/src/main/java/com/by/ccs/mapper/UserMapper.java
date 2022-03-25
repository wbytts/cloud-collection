package com.by.ccs.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.by.ccs.model.User;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface UserMapper extends BaseMapper<User> {

    @Select("SELECT * FROM `user` WHERE username = #{username}")   //用于登陆时，验证用户
    List<User> queryByUsername(String username);

    int addUser( String username,int password,String phone);    //用于注册时，添加用户

}
