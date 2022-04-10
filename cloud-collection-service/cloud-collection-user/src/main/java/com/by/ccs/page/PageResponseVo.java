package com.by.ccs.page;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PageResponseVo<T>{
    private long total;

    private List<T> items;

    private long page;

    private long count;
}

