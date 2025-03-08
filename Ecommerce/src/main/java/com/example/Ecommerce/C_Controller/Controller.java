package com.example.Ecommerce.C_Controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;
import com.example.Ecommerce.C_Entite.Entite;
import com.example.Ecommerce.C_Repository.Repository_ji;

@RestController
@CrossOrigin
@RequestMapping("/api/create")
public class Controller {

    private static final Logger logger = LoggerFactory.getLogger(Controller.class);

    @Autowired
    private Repository_ji ControllerRepository;

    @PostMapping
    public Entite create(@RequestBody Entite controlEntity) {
        logger.info("Received JSON: {}", controlEntity);
        return ControllerRepository.save(controlEntity);
    }

    @GetMapping
    public List<Entite> getAllC_Entities() {
        return ControllerRepository.findAll();
    }

    @PutMapping("/{id}")
    public Entite update(@PathVariable Long id, @RequestBody Entite controlEntity) {
        controlEntity.setId(id);
        return ControllerRepository.save(controlEntity);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        ControllerRepository.deleteById(id);
    }
}
