package com.by.css.exception;

import lombok.EqualsAndHashCode;
import lombok.Getter;

@EqualsAndHashCode(callSuper = true)
public class BaseException extends RuntimeException{

    @Getter
    private Integer code;

    public BaseException(String msg) {
        super(msg);
        this.code = 500;
    }

    public BaseException(String msg,Integer code) {
        super(msg);
        this.code = code;
    }
}
