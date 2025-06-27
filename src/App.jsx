import WorkoutList from "./components/WorkoutList.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Workout Tracker</h1>
      <WorkoutList />
    </div>
  );
}
