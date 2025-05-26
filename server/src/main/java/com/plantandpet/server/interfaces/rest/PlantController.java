package com.plantandpet.server.interfaces.rest;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.plantandpet.server.application.service.PlantService;
import com.plantandpet.server.domain.model.Plant;

@RestController
@RequestMapping("/api/plants")
public class PlantController {

    private final PlantService service;

    public PlantController(PlantService service) {
        this.service = service;
    }

    @GetMapping
    public List<Plant> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Plant create(@RequestBody Plant plant) {
        return service.create(plant);
    }
}
