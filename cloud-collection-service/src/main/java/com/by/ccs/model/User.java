package com.by.ccs.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    /**
     * 用户id
     */
    private String id;
    /**
     * —昵称
     */
    private String userName;
    /**
     * —账号
     */
    private String loginName;
    /**
     * —头像（登记过就显示）
     */
    private String avatarUrl; // 那个后端的朋友粗心了哈哈
    /**
     * —性别（1=男，2=女)
     */
    private Integer gender;
    /**
     * —密码
     */
    private String password;
    /**
     * —电话
     */
    private String phone;
    /**
     * —邮箱(账号框可用）
     */
    private String email;
    /**
     * —封禁
     */
    private Integer status;

    /**
     * 创建者id
     */
    private Long createId;
    /**
     * —创建时间
     */
    private Date createTime;

    private Long updateId;
    /**
     * —创新时间
     */
    private Date updateTime;

}
