package com.by.cloudcollectionservice;

import com.by.ccs.mapper.UserMapper;
import com.by.ccs.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;
import java.util.List;

@SpringBootTest
class CloudCollectionServiceApplicationTests {
    @Resource
    private UserMapper mapper;
	@Test
	void contextLoads() {
        List<User> userList = mapper.selectList(null);  //测试
        for(User user:userList) {
            System.out.println(user);
        }
	}

}
