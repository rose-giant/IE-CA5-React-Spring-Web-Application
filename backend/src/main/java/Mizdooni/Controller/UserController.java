package Mizdooni.Controller;


import Mizdooni.Model.User.User;
import Mizdooni.Model.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepo;
    @Autowired
    public UserController() {
        this.userRepo = UserRepository.getInstance();
    }
    @GetMapping
    public ArrayList<User> getAll() {
        return userRepo.getAll();
    }
//
//    @GetMapping("/{id}")
//    public LiveStream findById(@PathVariable String id) throws LiveStreamNotFoundException {
//        return repository.findById(id);
//    }
//
//    @ResponseStatus(HttpStatus.CREATED)
//    @PostMapping
//    public LiveStream create(@Valid @RequestBody LiveStream stream) {
//        return repository.create(stream);
//    }
//
//    @ResponseStatus(HttpStatus.NO_CONTENT)
//    @PutMapping("/{id}")
//    public void update(@RequestBody LiveStream stream, @PathVariable String id) {
//        repository.update(stream,id);
//    }
//
//    @ResponseStatus(HttpStatus.NO_CONTENT)
//    @DeleteMapping("/{id}")
//    public void delete(@PathVariable String id) {
//        repository.delete(id);
//    }

}
