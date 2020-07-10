package com.recipes.recipes.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitialLoader implements CommandLineRunner{
    private final RecipeRepository repository;
    @Autowired
    public InitialLoader(RecipeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Recipe ("No Bake Fudge", "A no bake brownie recipe with 4 ingredients", "Dean"));
    }
}
