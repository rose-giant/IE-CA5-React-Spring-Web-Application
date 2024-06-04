package Mizdooni.Controller;

import Mizdooni.Model.Restaurant.Restaurant;
import Mizdooni.Model.Restaurant.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;

@RestController
@RequestMapping("/restaurants")
public class RestaurantController {
    private static final Logger LOGGER = LoggerFactory.getLogger(RestaurantController.class);
    private final RestaurantRepository restaurantRepo;
    @Autowired
    public RestaurantController() throws Exception {
        restaurantRepo = RestaurantRepository.getInstance();
    }
    @GetMapping("")
    public ArrayList<Restaurant> getAll() {
        LOGGER.info("get all restaurants API requested");
        return restaurantRepo.getAll();
    }
    
}
