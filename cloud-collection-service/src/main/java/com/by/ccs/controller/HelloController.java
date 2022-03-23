package com.by.ccs.controller;

import com.by.ccs.mapper.TestMapper;
import com.by.ccs.model.Test;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
public class HelloController {

    @Resource
    private TestMapper testMapper;

    @RequestMapping("/hello")
    @ResponseBody
    public String hello() {
        Test test = testMapper.selectById(1);
        System.out.println(test);
        return "Hello World!!!, test=" + test;
    }

}