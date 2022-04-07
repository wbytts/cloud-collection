package com.by.ccs.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.by.ccs.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
@Mapper
public interface UserMapper extends BaseMapper<User> {





    @Select("SELECT * FROM `user` WHERE username = #{username}")   //用于登陆时，验证用户
    List<User> queryByUsername(String username);

    int addUser( String username,int password,String phone);    //用于注册时，添加用户

}
