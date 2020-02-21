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
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        async function loadExercisesByMuscles() {
            // setExercisesByMuscles(Object.entries(groupBy(exercises)));
            const initExercises = muscles.reduce((exercises, category) => ({
                ...exercises,
                [category]: [],
            }), {});
            setExercisesByMuscles(Object.entries(
                clientExercises.reduce((exercises, exercise) => {
                    const { muscles } = exercise

                    exercises[muscles] = [...exercises[muscles], exercise];

                    return exercises;
                }, initExercises)
            ));
        }
        loadExercisesByMuscles();
    }, [clientExercises]);

    async function handleCategorySelect(category) {
        setCategory(category);
    }

    async function handleExerciseSelect(id) {
        setExercise(clientExercises.find(ex => ex.id === id));
    }

    async function handleExerciseCreate(exercise) {
        setClientExercises([...clientExercises, exercise]);
    }

    async function handleExerciseDelete(id) {
        setClientExercises(clientExercises.filter(ex => ex.id !== id));
    }

    async function handleExerciseSelectEdit(id) {
        setExercise(clientExercises.find(ex => ex.id === id));
        setEditMode(true);
    }

    return (
        <>
            <Header muscles={muscles} onExerciseCreate={handleExerciseCreate} />
            <Exercises
                exercise={exercise}
                category={category}
                exercisesByMuscles={exercisesByMuscles}
                onSelect={handleExerciseSelect}
                onDelete={handleExerciseDelete}
                onSelectEdit={handleExerciseSelectEdit}
            />
            <Footer
                category={category}
                muscles={muscles}
                onSelect={handleCategorySelect}
            />
        </>
    );
}
