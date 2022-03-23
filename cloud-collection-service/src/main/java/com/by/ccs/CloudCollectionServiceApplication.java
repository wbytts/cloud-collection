package com.by.ccs;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.by.ccs.mapper")
public class CloudCollectionServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CloudCollectionServiceApplication.class, args);
	}

}
