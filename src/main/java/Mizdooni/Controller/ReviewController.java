package Mizdooni.Controller;


import Mizdooni.Model.Review.Review;
import Mizdooni.Model.Review.ReviewRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;


@RestController
@RequestMapping("/reviews")
public class ReviewController {
    private static final Logger LOGGER = LoggerFactory.getLogger(AuthController.class);
    private final ReviewRepository reviewRepo;
    @Autowired
    public ReviewController() throws Exception {
        reviewRepo = ReviewRepository.getInstance();
    }
    @GetMapping("")
    public ArrayList<Review> getAll() {
        LOGGER.info("get all reviews API requested");
        return reviewRepo.getAll();
    }
}
