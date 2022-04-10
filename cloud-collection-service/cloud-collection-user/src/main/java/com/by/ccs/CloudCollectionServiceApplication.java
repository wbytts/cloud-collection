package com.by.ccs;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@SpringBootApplication
@MapperScan("com.by.ccs.mapper")
@ServletComponentScan
public class CloudCollectionServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CloudCollectionServiceApplication.class, args);
	}

}
