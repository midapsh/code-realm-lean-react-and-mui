import React, { useState, useEffect } from "react";

import { Header, Footer } from "../../components/Layouts";
import Exercises from "../../components/Exercises";

import {
    muscles, exercises
} from "../../services/store";

export default function Dashboard() {
    const [clientExercises, setClientExercises] = useState(exercises);
    const [exercisesByMuscles, setExercisesByMuscles] = useState([]);
    const [category, setCategory] = useState("");
    const [exercise, setExercise] = useState({});

    useEffect(() => {
        async function loadExercisesByMuscles() {
            // setExercisesByMuscles(Object.entries(groupBy(exercises)));
            setExercisesByMuscles(Object.entries(
                clientExercises.reduce((exercises, exercise) => {
                    const { muscles } = exercise

                    exercises[muscles] = exercises[muscles]
                        ? [...exercises[muscles], exercise]
                        : [exercise];

                    return exercises;
                }, {})
            ));
        }
        loadExercisesByMuscles();
    }, [clientExercises]);

    async function handleCategorySelected(category) {
        setCategory(category);
    }

    async function handleExerciseSelected(id) {
        setExercise(clientExercises.find(ex => ex.id === id));
    }

    async function handleExerciseCreated(exercise) {
        setClientExercises([...clientExercises, exercise]);
    }

    return (
        <>
            <Header muscles={muscles} onExerciseCreate={handleExerciseCreated} />
            <Exercises
                exercise={exercise}
                category={category}
                exercisesByMuscles={exercisesByMuscles}
                onSelect={handleExerciseSelected}
            />
            <Footer
                category={category}
                muscles={muscles}
                onSelect={handleCategorySelected}
            />
        </>
    );
}
