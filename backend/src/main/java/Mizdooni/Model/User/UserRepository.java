package Mizdooni.Model.User;

import java.util.ArrayList;

public class UserRepository {

    private static UserRepository instance;
    private ArrayList<User> users = new ArrayList<>();

    public static UserRepository getInstance() {
        if(instance == null)
            return new UserRepository();
        else return instance;
    }

    public void UserRepository() {
        users.add(new User("role", "username", "password", "email", "city", "country"));
    }


    public ArrayList<User> getAll() {
        return users;
    }
}
