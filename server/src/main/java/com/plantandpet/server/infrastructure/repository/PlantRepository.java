package com.plantandpet.server.infrastructure.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.plantandpet.server.domain.model.Plant;

@Repository
public interface PlantRepository extends JpaRepository<Plant, Long> {}
