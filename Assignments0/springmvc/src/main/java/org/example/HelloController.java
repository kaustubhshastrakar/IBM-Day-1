package org.example;

import javax.servlet.http.HttpServletRequest;

import org.example.model.Employee;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HelloController {

    @GetMapping
    public String goHome() {
        return "home";
    }

    @GetMapping("/showForm")
    public String showForm() {
        return "showForm";
    }

    @PostMapping("/addEmployee")
    public String addEmployee(HttpServletRequest request, Model theModel) {
        String name = request.getParameter("t1");
        String ageStr = request.getParameter("t2");

        if (name.isEmpty()) {
            theModel.addAttribute("nameError", "Name is required.");
            return "showForm";
        }

        if (ageStr.isEmpty()) {
            theModel.addAttribute("ageError", "Age is required.");
            return "showForm";
        }

        double age;
        try {
            age = Double.parseDouble(ageStr);
        } catch (NumberFormatException e) {
            theModel.addAttribute("ageError", "Invalid age format.");
            return "showForm";
        }

        theModel.addAttribute("emp", new Employee(name, age));
        return "success";
    }
}
