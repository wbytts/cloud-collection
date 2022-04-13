package com.by.ccs.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.by.ccs.model.Test;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface TestMapper extends BaseMapper<Test> {
    @Select("select * from test")
    List<Test> queryAll();
}
