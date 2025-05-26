package com.plantandpet.server.application.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.plantandpet.server.domain.model.Plant;
import com.plantandpet.server.infrastructure.repository.PlantRepository;

@Service
public class PlantService {
    private final PlantRepository repo;

    public PlantService(PlantRepository repo) {
        this.repo = repo;
    }

    public List<Plant> getAll() {
        return repo.findAll();
    }

    public Plant create(Plant plant) {
        return repo.save(plant);
    }
}
