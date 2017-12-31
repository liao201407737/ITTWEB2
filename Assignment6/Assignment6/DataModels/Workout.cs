using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment6.DataModels
{
  public class Workout
  {
    public int WorkoutId { get; set; }
    public string Name { get; set; }
    public ICollection<Exercise> Exercises { get; protected set; }
  }
}
