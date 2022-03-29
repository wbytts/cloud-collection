//package com.by.ccs.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import springfox.documentation.builders.ApiInfoBuilder;
//import springfox.documentation.builders.PathSelectors;
//import springfox.documentation.builders.RequestHandlerSelectors;
//import springfox.documentation.service.Contact;
//import springfox.documentation.spi.DocumentationType;
//import springfox.documentation.spring.web.plugins.Docket;
//
///**
// * @author wangjiahao
// * @since 2022/3/23 8:51 下午
// */
//@Configuration
//public class Knife4jConfiguration {
//    @Bean(value = "defaultApi2")
//    public Docket defaultApi2() {
//        return new Docket(DocumentationType.SWAGGER_2)
//            .apiInfo(new ApiInfoBuilder()
//                .title("cloud-collection-service RESTful APIs")
//                .description("# cloud-collection-service RESTful APIs")
//                .termsOfServiceUrl("https://gitee.com/wbytts/cloud-collection.git")
//                .contact(new Contact("wangby",
//                    "https://gitee.com/wbytts/cloud-collection.git",
//                    "kikofranklin@163.com"))
//                .version("1.0")
//                .build())
//            //分组名称
//            .groupName("1.X版本")
//            .select()
//            //这里指定Controller扫描包路径
//            .apis(RequestHandlerSelectors.basePackage("com.by.ccs.controller"))
//            .paths(PathSelectors.any())
//            .build();
//    }
//}
