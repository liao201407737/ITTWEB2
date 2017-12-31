namespace Assignment6.DataModels
{
  public class Exercise
  {
    public int ExerciseId { get; set; }
    public int WorkoutId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int Reps { get; set; }
    public int Sets { get; set; }
    public Progression Progression { get; protected set; }
  }
}
