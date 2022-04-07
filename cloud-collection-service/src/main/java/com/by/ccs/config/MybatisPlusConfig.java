package com.by.ccs.config;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import com.baomidou.mybatisplus.extension.spring.MybatisSqlSessionFactoryBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class MybatisPlusConfig {
    // 若果使用的mybatis-plus是旧版本，那么还要把MybatisConfiguration这个类注入到spring容器中
    // 并且配置其中的属性useDeprecatedExecutor的值为false
    // <bean id="configuration" class="com.baomidou.mybatisplus.core.MybatisConfiguration">
    // <!-- 需配置该值为false,避免1或2级缓存可能出现问题,该属性会在旧插件移除后一同移除 -->
    // <property name="useDeprecatedExecutor" value="false"/>
    // </bean>

    /**
     * 配置内部分页拦截器
     * 用来指定方言，当然也可以省略
     *
     * @return PaginationInnerInterceptor
     */
    @Bean
    public PaginationInnerInterceptor paginationInnerInterceptor() {
        // 对于单一数据库类型来说,都建议配置该值,避免每次分页都去抓取数据库类型
        return new PaginationInnerInterceptor(DbType.MYSQL);
    }

    /**
     * 配置MybatisPlus的分页插件
     *
     * @param paginationInnerInterceptor 内部分页拦截器
     * @return MybatisPlusInterceptor
     */
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor(PaginationInnerInterceptor paginationInnerInterceptor) {
        MybatisPlusInterceptor mybatisPlusInterceptor = new MybatisPlusInterceptor();
        // 将内部分页插件添加到MybatisPlus的分页插件中
        mybatisPlusInterceptor.addInnerInterceptor(paginationInnerInterceptor);
        return mybatisPlusInterceptor;
    }

    /**
     * 初始化MyBatis Plus会话工厂，将MyBatis Plus工厂放入spring容器
     *
     * @param dataSource 数据源
     * @return 返回MyBatis Plus Sql会话工厂
     */
    @Bean
    public MybatisSqlSessionFactoryBean MyBatisSqlSessionFactoryBean(DataSource dataSource, MybatisPlusInterceptor mybatisPlusInterceptor) {
        // 床架SQL会话工厂类
        MybatisSqlSessionFactoryBean mybatisSqlSessionFactoryBean = new MybatisSqlSessionFactoryBean();
        // 配置数据源
        mybatisSqlSessionFactoryBean.setDataSource(dataSource);
        // 配置domain的别名
        mybatisSqlSessionFactoryBean.setTypeAliasesPackage("com.by.ccs.model");
        // 添加mybatis插件，可变参数数组
        mybatisSqlSessionFactoryBean.setPlugins(mybatisPlusInterceptor);
        return mybatisSqlSessionFactoryBean;
    }

}
