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
    [Route("api/Progressions")]
    public class ProgressionsController : Controller
    {
        private readonly Assignment6Context _context;

        public ProgressionsController(Assignment6Context context)
        {
            _context = context;
        }

        // GET: api/Progressions
        [HttpGet]
        public IEnumerable<Progression> GetProgression()
        {
            return _context.Progression;
        }

        // GET: api/Progressions/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProgression([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var progression = await _context.Progression.SingleOrDefaultAsync(m => m.ProgressionId == id);

            if (progression == null)
            {
                return NotFound();
            }

            return Ok(progression);
        }

        // PUT: api/Progressions/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProgression([FromRoute] int id, [FromBody] Progression progression)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != progression.ProgressionId)
            {
                return BadRequest();
            }

            _context.Entry(progression).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProgressionExists(id))
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

        // POST: api/Progressions
        [HttpPost]
        public async Task<IActionResult> PostProgression([FromBody] Progression progression)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Progression.Add(progression);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProgression", new { id = progression.ProgressionId }, progression);
        }

        // DELETE: api/Progressions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProgression([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var progression = await _context.Progression.SingleOrDefaultAsync(m => m.ProgressionId == id);
            if (progression == null)
            {
                return NotFound();
            }

            _context.Progression.Remove(progression);
            await _context.SaveChangesAsync();

            return Ok(progression);
        }

        private bool ProgressionExists(int id)
        {
            return _context.Progression.Any(e => e.ProgressionId == id);
        }
    }
}