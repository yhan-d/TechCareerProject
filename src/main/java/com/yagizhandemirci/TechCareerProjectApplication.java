package com.yagizhandemirci;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

//exclude:dahil etmemek
@SpringBootApplication(exclude = {
        org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class,
        org.springframework.boot.actuate.autoconfigure.security.servlet.ManagementWebSecurityAutoConfiguration.class
}
)
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class TechCareerProjectApplication {

    public static void main(String[] args) {

        SpringApplication.run(TechCareerProjectApplication.class, args);
        System.setProperty("java.awt.headless","false");
    }


}
