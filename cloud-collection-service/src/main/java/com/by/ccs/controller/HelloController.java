package com.by.ccs.controller;

import com.by.ccs.mapper.TestMapper;
import com.by.ccs.model.Test;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@Api(tags = "测试Controller")
@RestController
public class HelloController {

    @Resource
    private TestMapper testMapper;

    @ApiOperation(value = "测试接口hello")
    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public List<Test> hello() {
        List<Test> list = testMapper.queryAll();
        System.out.println(list);
        return list;
    }

    @ApiOperation(value = "testPost")
    @RequestMapping(value = "/test-post", method = RequestMethod.POST)
    public String testPost() {
        return "测试post请求 - 12341237123";
    }

}