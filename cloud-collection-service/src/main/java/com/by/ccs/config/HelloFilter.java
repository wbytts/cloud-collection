//package com.by.ccs.config;
//
//import com.by.ccs.utils.JwtUtil;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.core.annotation.Order;
//
//import javax.servlet.*;
//import javax.servlet.annotation.WebFilter;
//import javax.servlet.annotation.WebInitParam;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.io.PrintWriter;
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
//
//@Slf4j
//@Order(1)
//@WebFilter(filterName = "piceaFilter", urlPatterns = "/*", initParams = {
//    @WebInitParam(name = "URL", value = "http://localhost:8080")})
//public class HelloFilter implements Filter {
//
//    private String url;
//
//    /**
//     * 可以初始化Filter在web.xml里面配置的初始化参数
//     * filter对象只会创建一次，init方法也只会执行一次。
//     *
//     * @param filterConfig
//     * @throws ServletException
//     */
//    @Override
//    public void init(FilterConfig filterConfig) throws ServletException {
//        this.url = filterConfig.getInitParameter("URL");
//        log.info("我是过滤器的初始化方法！URL=" + this.url + "，请求开始.........");
//    }
//
//    /**
//     * 主要的业务代码编写方法
//     *
//     * @param filterChain
//     * @throws IOException
//     * @throws ServletException
//     */
//    @Override
//    public void doFilter(ServletRequest req, ServletResponse res, FilterChain filterChain) throws IOException, ServletException {
//        try {
//            doFilter((HttpServletRequest) req, (HttpServletResponse) res, filterChain);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
//
//    public void doFilter(HttpServletRequest req, HttpServletResponse res, FilterChain filterChain) throws Exception {
//        log.info("我是过滤器的执行方法，客户端向Servlet发送的请求被我拦截到了");
//
//        List<String> whiteUrls = new ArrayList<>();
//        whiteUrls.add("/login"); // 登录接口
//        whiteUrls.add("/register"); // 注册接口
//
//        String requestPath = req.getRequestURI();
//        log.info("请求的接口为：" + requestPath);
//
//        // 判断请求是否在白名单中
//        if(whiteUrls.contains(requestPath)) {
//            log.info("请求的接口在白名单中，直接放行");
//            filterChain.doFilter(req, res);
//            log.info("我是过滤器的执行方法，Servlet向客户端发送的响应被我拦截到了");
//        } else {
//            log.info("请求的接口不在白名单中，开始验证token");
//            try {
//                String token = req.getHeader("token");
//                log.info("请求头中携带的token为：" + token);
//                String validateResult = JwtUtil.validateToken(token);
//                log.info("token验证结果：" + validateResult);
//                filterChain.doFilter(req, res);
//            } catch (Exception e) {
//                // e.printStackTrace();
//                log.error("token无效！！！");
//                HashMap<String, Object> result = new HashMap<>();
//                result.put("msg", "token无效，请重新登录");
//                responseOutWithJson(res, result);
//            } finally {
//                log.info("我是过滤器的执行方法，Servlet向客户端发送的响应被我拦截到了");
//            }
//        }
//
//
//
//    }
//
//    protected void responseOutWithJson(HttpServletResponse response, Object responseObject) throws Exception {
//        ObjectMapper mapper = new ObjectMapper();
//        String jsonStr = mapper.writeValueAsString(responseObject);
//        response.setCharacterEncoding("UTF-8");
//        response.setContentType("application/json; charset=utf-8");
//        PrintWriter out = null;
//        try {
//            out = response.getWriter();
//            out.append(jsonStr);
//        } catch (IOException e) {
//            e.printStackTrace();
//        } finally {
//            if (out != null) {
//                out.close();
//            }
//        }
//    }
//
//    /**
//     * 在销毁Filter时自动调用。
//     */
//    @Override
//    public void destroy() {
//        log.info("我是过滤器的被销毁时调用的方法！，活不下去了................");
//    }
//}