#!/usr/bin/env python
# -*- coding: utf-8 -*-


def body_mass_index(weight, height):
    return weight / (height**2)


def body_mass_shape(bmi):
    shapes = {
        'тежко недохранване': 0,
        'средно недохранване': 15,
        'леко недохранване': 16,
        'нормално тегло': 18.5,
        'наднормено тегло': 25,
        'затлъстяване I степен': 30,
        'затлъстяване II степен': 35,
        'затлъстяване III степен': 40
    }

    for shape in shapes.values():
        if bmi > shape[1]:
            return shape[0]
    return ' '


def shape_of(weight, height):
    return body_mass_shape(body_mass_index(weight, height)
