import { useState } from "react";

function AddWorkoutButton({ workouts }) {
  const [workoutName, setWorkoutName] = useState({});
  function addWorkout() {}

  return (
    <>
      <button onClick={addWorkout}>Add Workout</button>
    </>
  );
}
