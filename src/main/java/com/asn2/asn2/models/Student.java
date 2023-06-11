package com.asn2.asn2.models;

public class Student {
    private String name;
    private double height;
    private double weight;
    private String hairColor;
    private double gpa;

    public Student() {
    }

    public Student(String name, double height, double weight, String hairColor, double gpa) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.hairColor = hairColor;
        this.gpa = gpa;
    }

    public String getName() {
        return name;
    }

    public double getHeight() {
        return height;
    }

    public double getWeight() {
        return weight;
    }

    public String getHairColor() {
        return hairColor;
    }

    public double getGpa() {
        return gpa;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public void setHairColor(String hairColor) {
        this.hairColor = hairColor;
    }

    public void setGpa(double gpa) {
        this.gpa = gpa;
    }
}

// connect js with java