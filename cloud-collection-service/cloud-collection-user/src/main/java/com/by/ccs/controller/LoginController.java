package com.by.ccs.controller;

//import com.by.ccs.model.Response;

import com.by.ccs.model.User;
import com.by.ccs.service.UserService;

import com.by.ccs.utils.JwtUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Api(tags = "登陆相关")
@RestController
public class LoginController {

      @Autowired
    private UserService userService;

    @ApiOperation(value = "登录")
    @ApiImplicitParams({
        @ApiImplicitParam(name = "username", value = "用户名", required = true),
        @ApiImplicitParam(name = "password", value = "密码", required = true)
    })
    @ApiResponses({
        @ApiResponse(code = 200, message = "登录成功！"),
        @ApiResponse(code = 500, message = "登录失败！")
    })
    @PostMapping("/login")
    public Map<String, Object> login(@RequestParam String username,
                                     @RequestParam String password) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        // 定义一个map存放最终返回给前端的结果
        Map<String, Object> result = new HashMap<>();
        // 通过 username 从数据库中查询到 User 对象
        User user = userService.queryByUsername(username);
        if (user == null) {
            result.put("result", false);
            result.put("message", "用户名不存在");
            result.put("data", null);
        } else {
            // 如果用户名存在，则判断密码是否正确
            if (user.getPassword().equals(password)) {
                // 如果密码验证成功，则生成token并返回
                HashMap<Object, Object> map = new HashMap<>();
                map.put("userId", user.getId());
                String json = mapper.writeValueAsString(map);
                String token = JwtUtil.createToken(json);
                result.put("result", true);
                result.put("message", "登陆成功");
                result.put("data", token);
            } else {
                result.put("result", false);
                result.put("message", "密码错误");
                result.put("data", null);
            }
        }

        return result;
    }

    @ApiOperation(value = "获取token的信息")
    @PostMapping("/getTokenInfo")
    public String getTokenInfo(
        @ApiParam(value = "请求参数，里面包含token字段")
        @RequestBody Map<String, String> params) {
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
