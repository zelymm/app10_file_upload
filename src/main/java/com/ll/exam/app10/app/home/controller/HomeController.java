package com.ll.exam.app10.app.home.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
public class HomeController {
    @RequestMapping("/")
    public String main() {
        return "home/main";
    }
}
