package Mizdooni.Controller;


import Mizdooni.Model.User.User;
import Mizdooni.Model.User.UserRepository;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthController.class);
    private final UserRepository userRepo;

    @Autowired
    public UserController() throws Exception {
        userRepo = UserRepository.getInstance();
    }

    @GetMapping("")
    public ArrayList<User> getAll() {
        LOGGER.info("get all users API requested");
        return userRepo.getAll();
    }
}