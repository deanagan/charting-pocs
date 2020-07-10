package com.recipes.recipes.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;


@Data
@Entity

public class Recipe {
    private @Id @GeneratedValue Long id;
    private String name;
    private String description;
    private String author;

    private Recipe() {}

    public Recipe(String name, String description, String author) {
        this.name = name;
        this.description = description;
        this.author = author;
    }


}
