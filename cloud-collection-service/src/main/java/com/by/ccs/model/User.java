package com.by.ccs.model;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@ApiModel(value = "用户实体类", description = "用户信息描述类")
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName(value = "user")
public class User {
    @ApiModelProperty(value = "用户id")
    @TableId
    private String id;

    @ApiModelProperty(value = "昵称")
    private String userName;

    @ApiModelProperty(value = "账号")
    private String loginName;

    @ApiModelProperty(value = "头像")
    private String avatarUrl; // 那个后端的朋友粗心了哈哈

    @ApiModelProperty(value = "性别 1=男，2=女)")
    private Integer gender;

    @ApiModelProperty(value = "密码")
    private String password;

    @ApiModelProperty(value = "电话")
    private String phone;

    @ApiModelProperty(value = "邮箱(账号框可用）")
    private String email;

    @ApiModelProperty(value = "用户状态")
    private Integer status;

    @ApiModelProperty(value = "创建者id")
    private Long createId;

    @ApiModelProperty(value = "创建时间")
    private Date createTime;

    @ApiModelProperty(value = "修改id")
    private Long updateId;

    @ApiModelProperty(value = "修改时间")
    private Date updateTime;

}
