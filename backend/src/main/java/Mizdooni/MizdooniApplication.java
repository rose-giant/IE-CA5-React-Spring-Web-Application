package Mizdooni;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class MizdooniApplication extends SpringBootServletInitializer {
	public static void main(String[] args) {
		SpringApplication.run(MizdooniApplication.class, args);
	}
}
