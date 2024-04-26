package Mizdooni;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.EventListener;

//@SpringBootApplication
//public class MizdooniApplication {
//
//	public static void main(String[] args) {
//		SpringApplication.run(MizdooniApplication.class, args);
//	}
//
//}
@SpringBootApplication
public class MizdooniApplication extends SpringBootServletInitializer {
	public static void main(String[] args) {
		SpringApplication.run(MizdooniApplication.class, args);
	}
}
//
//@SpringBootConfiguration
//public class MizdooniApplication {
//
//	@Bean
//	MyBean myBean() {
//		return new MyBean();
//	}
//
//	@Bean
//	ApplicationRunner appRunner() {
//		return new MyAppRunner();
//	}
//
//	@Bean
//	ExitCodeExceptionMapper exitCodeExceptionMapper() {
//		return exception -> {
//
//			if (exception.getCause() instanceof MyException) {
//				return 10;
//			}
//			return 1;
//		};
//	}
//
//	public static void main(String[] args) {
//		SpringApplication.run(MizdooniApplication.class, args);
//	}
//
//	private static class MyAppRunner implements ApplicationRunner {
//
//		@Override
//		public void run(ApplicationArguments args) throws Exception {
//			System.out.println("in command line");
//			if (true) throw new MyException("test");
//		}
//	}
//
//	private static class MyBean {
//
//		@EventListener
//		public void exitEvent(ExitCodeEvent event) {
//			System.out.println("-- ExitCodeEvent --");
//			System.out.println("exit code: " + event.getExitCode());
//		}
//	}
//
//	private static class MyException extends RuntimeException {
//
//		public MyException(String message) {
//			super(message);
//		}
//
//	}
//}
