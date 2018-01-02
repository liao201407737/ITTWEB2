using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Assignment6.DataModels;
using Assignment6.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

namespace Assignment6
{
  [Produces("application/json")]
  [Route("api/workout")]
  public class WorkoutsController : Controller
  {
    private readonly Assignment6Context _context;
    private readonly UserManager<ApplicationUser> _userManager;


    public WorkoutsController(Assignment6Context context, UserManager<ApplicationUser> userManager)
    {
      _context = context;
      _userManager = userManager;
    }

    // GET: api/Workouts
    [HttpGet]
    public IEnumerable<Workout> GetWorkout()
    {
      //return _context.Workout;
      var result = _context.Workout.Include(id => id.Exercises).ToList();

      var result1 = new List<WorkoutDto>();
      foreach (var item in result)
      {
        result1.Add(new WorkoutDto
        {
          Name = item.Name,
          Exercises = item.Exercises,
          //Count = item.Exercises.Count,
          WorkoutId = item.WorkoutId
        });
      }
      return result;
    }


    // GET: api/Workouts/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetWorkout([FromRoute] int id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      var workout = await _context.Workout.Where(i => i.WorkoutId == id).Include(x => x.Exercises)
        .FirstOrDefaultAsync();
      if (workout == null)
      {
        return NotFound();
      }

      return Ok(workout);
    }

    [Authorize]

    // PUT: api/Workouts/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutWorkout([FromRoute] int id, [FromBody] Workout workout)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      if (id != workout.WorkoutId)
      {
        return BadRequest();
      }

      _context.Entry(workout).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!WorkoutExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Workouts
    [Authorize]
    [HttpPost]
    public async Task<IActionResult> PostWorkout([FromBody] Workout workout)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      _context.Workout.Add(workout);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetWorkout", new {id = workout.WorkoutId}, workout);
    }

    [Authorize]

    // DELETE: api/Workouts/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteWorkout([FromRoute] int id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var workout = await _context.Workout.SingleOrDefaultAsync(m => m.WorkoutId == id);
      if (workout == null)
      {
        return NotFound();
      }

      _context.Workout.Remove(workout);
      await _context.SaveChangesAsync();

      return Ok(workout);
    }

    private bool WorkoutExists(int id)
    {
      return _context.Workout.Any(e => e.WorkoutId == id);
    }
  }
}
