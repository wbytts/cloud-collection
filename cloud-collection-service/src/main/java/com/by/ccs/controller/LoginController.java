package com.by.ccs.controller;

import com.by.ccs.model.Response;
import com.by.ccs.model.User;
import com.by.ccs.service.UserService;
import com.by.ccs.utils.JwtUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> params) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        HashMap<Object, Object> map = new HashMap<>();
        // 通过 username 从数据库中查询到 User 对象
        User user = userService.queryByUsername(params.get("username"));
        map.put("userId", user.getId());
        String json = mapper.writeValueAsString(map);
        String token = JwtUtil.createToken(json);
        return token;
    }

    @PostMapping("/getTokenInfo")
    public String getTokenInfo(@RequestBody Map<String, String> params) {
        String s = JwtUtil.validateToken(params.get("token"));
        return s;
    }



//    @RequestMapping(value = "/login", method = RequestMethod.POST)
//    public Response login(@RequestBody Map<String, String> person) {
//        String username = person.get("username");
//        String password = person.get("password");
//        if (username != null && password != null) {        //判断用户名，密码是否为空
//            List<User> users = userService.queryByUsername(username);
//            if (users != null && users.size() > 0) {          //判断密码是否正确
//                User user = users.get(0);
//                if (password == user.getPassword()) {   //判断密码正确登录
//                    return new Response("登录成功", 1, true);
//                }
//            }
//        }
//        return null;
//    }
}
