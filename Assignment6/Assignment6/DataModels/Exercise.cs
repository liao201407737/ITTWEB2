using Newtonsoft.Json;

namespace Assignment6.DataModels
{
  public class Exercise
  {
    [JsonProperty(PropertyName = "_id")]
    public int ExerciseId { get; set; }
    [JsonProperty(PropertyName = "refId")]
    public int WorkoutId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int Reps { get; set; }
    public int Sets { get; set; }
  }
}
