import React, { useState, useEffect } from "react";

import { Header, Footer } from "../../components/Layouts";
import Exercises from "../../components/Exercises";

import {
    muscles, exercises
} from "../../services/store";

export default function Dashboard() {
    const [exercisesByMuscles, setExercisesByMuscles] = useState([]);

    useEffect(() => {
        async function loadExercisesByMuscles() {
            // setExercisesByMuscles(Object.entries(groupBy(exercises)));
            setExercisesByMuscles(Object.entries(
                exercises.reduce((exercises, exercise) => {
                    const { muscles } = exercise

                    exercises[muscles] = exercises[muscles]
                        ? [...exercises[muscles], exercise]
                        : [exercise];

                    return exercises;
                }, {})
            ));
        }
        loadExercisesByMuscles();
    }, []);

    return (
        <>
            <Header />
            <Exercises
                exercisesByMuscles={exercisesByMuscles}
            />
            <Footer
                muscles={muscles}
            // onSelect={handleCategorySelected}
            />
        </>
    );
}
