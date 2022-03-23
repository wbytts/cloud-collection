package com.by.ccs.controller;

import com.by.ccs.mapper.TestMapper;
import com.by.ccs.model.Test;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
public class HelloController {

    @Resource
    private TestMapper testMapper;

    @RequestMapping("/hello")
    @ResponseBody
    public List<Test> hello() {
        List<Test> list = testMapper.queryAll();
        System.out.println(list);
        return list;
    }

    @RequestMapping(value = "/test-post", method = RequestMethod.POST)
    @ResponseBody
    public String testPost() {
        return "测试post请求 - 12341237123";
    }

}