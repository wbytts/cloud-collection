package com.by.css.model;

import lombok.Data;

import java.util.Date;

@Data
public class BaseEntity {

    private Long createId;

    private Date createTime;

    private Long updateId;

    private Date updateTime;
}
