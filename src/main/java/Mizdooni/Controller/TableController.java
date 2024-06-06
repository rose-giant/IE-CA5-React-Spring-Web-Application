package Mizdooni.Controller;

import Mizdooni.Model.Table.Table;
import Mizdooni.Model.Table.TableRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/tables")
public class TableController {
    private static final Logger LOGGER = LoggerFactory.getLogger(AuthController.class);
    private final TableRepository tableRepo;
    @Autowired
    public TableController() throws Exception {
        tableRepo = TableRepository.getInstance();
    }
    @GetMapping("")
    public ArrayList<Table> getAll() {
        LOGGER.info("get all tables API requested");
        return tableRepo.getAll();
    }
}
