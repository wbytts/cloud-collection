package com.by.ccs.model;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName(value = "role")
public class Role {
    /**
     * 角色id
     */
    @TableId
    private String id;
    /**
     * 角色
     */
    private String roleName;
    /**
     * 角色类型
     */
    private Integer roleType;

    private Date genTime;

    private String desciption;

    @ApiModelProperty(value = "创建者id")
    private Long createId;

    @ApiModelProperty(value = "创建时间")
    private Date createTime;

    @ApiModelProperty(value = "修改id")
    private Long updateId;

    @ApiModelProperty(value = "修改时间")
    private Date updateTime;

}
