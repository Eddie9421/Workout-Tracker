import { useState } from "react";
import Workout from "./Workout.jsx";

export default function WorkoutList() {
  function addWorkout() {}
  const [workouts, setWorkouts] = useState([]);

  return (
    <>
      <h2 className="flex justify-center">Workouts</h2>
      <button onClick={addWorkout}>Add Workouts</button>
    </>
  );
}
