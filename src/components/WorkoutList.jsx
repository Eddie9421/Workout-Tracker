import { useState } from "react";
import Workout from "./Workout.jsx";

export default function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);

  return (
    <>
      <h2 className="flex justify-center">Workouts</h2>
    </>
  );
}
