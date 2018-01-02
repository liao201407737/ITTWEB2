using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Assignment6.DataModels
{
  public class Workout
  {
    [JsonProperty(PropertyName = "_id")]
    public int WorkoutId { get; set; }
    public string Name { get; set; }
    [JsonProperty(PropertyName = "exercises")]
    public ICollection<Exercise> Exercises { get; protected set; }
  }
  public class WorkoutDto
  {
    [JsonProperty(PropertyName = "_id")]
    public int WorkoutId { get; set; }
    public string Name { get; set; }
    [JsonProperty(PropertyName = "exercise")]
    public ICollection<Exercise> Exercises { get; set; }

    //[JsonProperty(PropertyName = "__v")]
    //public int Count { get; set; }
  }
}
