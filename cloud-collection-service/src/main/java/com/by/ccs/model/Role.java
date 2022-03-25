package com.by.ccs.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Role {
    /**
     * 角色id
     */
    private String id;
    /**
     * 角色
     */
    private String roleName;

    private Date genTime;

    private String desciption;


}
