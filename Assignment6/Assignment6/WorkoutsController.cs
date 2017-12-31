using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Assignment6.DataModels;
using Assignment6.Models;

namespace Assignment6
{
    [Produces("application/json")]
    [Route("api/Workouts")]
    public class WorkoutsController : Controller
    {
        private readonly Assignment6Context _context;

        public WorkoutsController(Assignment6Context context)
        {
            _context = context;
        }

        // GET: api/Workouts
        [HttpGet]
        public IEnumerable<Workout> GetWorkout()
        {
            return _context.Workout;
        }

        // GET: api/Workouts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetWorkout([FromRoute] int id)
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

            return Ok(workout);
        }

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
        [HttpPost]
        public async Task<IActionResult> PostWorkout([FromBody] Workout workout)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Workout.Add(workout);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkout", new { id = workout.WorkoutId }, workout);
        }

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
