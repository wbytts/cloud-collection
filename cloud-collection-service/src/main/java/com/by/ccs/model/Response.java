package com.by.ccs.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Response {     //返回接口调用信息描述（成功与否）

   private String msg;
   private int code;
   private Boolean isSuc = true;
}
