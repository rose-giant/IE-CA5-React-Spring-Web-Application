package Mizdooni.Model.Review;

import java.util.ArrayList;

public class ReviewRepository {
    private static ReviewRepository instance;
    private ArrayList<Review> reviews = new ArrayList<>();

    public ReviewRepository() throws Exception {
        ReviewDAO dao = new ReviewDAO();
        reviews = dao.getFromAPI();
    }

    public static ReviewRepository getInstance() throws Exception {
        if(instance == null)
            instance = new ReviewRepository();
        return instance;
    }

    public ArrayList<Review> getAll() {
        return reviews;
    }
}
