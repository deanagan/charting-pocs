package com.recipes.recipes.model;


import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface RecipeRepository extends CrudRepository<Recipe, Long> {


}
