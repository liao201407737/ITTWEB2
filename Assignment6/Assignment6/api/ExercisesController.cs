using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
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
    [Route("api/exercise")]
    public class ExercisesController : Controller
    {
        private readonly Assignment6Context _context;
      private readonly UserManager<ApplicationUser> _userManager;

      public ExercisesController(Assignment6Context context, UserManager<ApplicationUser> userManager)
      {
        _context = context;
        _userManager = userManager;
      }

        // GET: api/Exercises
        [HttpGet]
        public IEnumerable<Exercise> GetExercise()
        {
            return _context.Exercise;
        }

        // GET: api/Exercises/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetExercise([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var exercise = await _context.Exercise.SingleOrDefaultAsync(m => m.ExerciseId == id);

            if (exercise == null)
            {
                return NotFound();
            }

            return Ok(exercise);
        }

      [Authorize]
        // PUT: api/Exercises/5
    [HttpPut("{id}")]
        public async Task<IActionResult> PutExercise([FromRoute] int id, [FromBody] Exercise exercise)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != exercise.ExerciseId)
            {
                return BadRequest();
            }

            _context.Entry(exercise).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExerciseExists(id))
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
      [Authorize]

    // POST: api/Exercises
    [HttpPost]
        public async Task<IActionResult> PostExercise([FromBody] Exercise exercise)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Exercise.Add(exercise);
            await _context.SaveChangesAsync();
            return Ok();
        }
      [Authorize]

    // DELETE: api/Exercises/5
    [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExercise([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var exercise = await _context.Exercise.SingleOrDefaultAsync(m => m.ExerciseId == id);
            if (exercise == null)
            {
                return NotFound();
            }

            _context.Exercise.Remove(exercise);
            await _context.SaveChangesAsync();

            return Ok(exercise);
        }

        private bool ExerciseExists(int id)
        {
            return _context.Exercise.Any(e => e.ExerciseId == id);
        }
    }
}
