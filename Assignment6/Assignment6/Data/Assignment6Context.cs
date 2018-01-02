using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Assignment6.DataModels;

namespace Assignment6.Models
{
    public class Assignment6Context : DbContext
    {
        public Assignment6Context (DbContextOptions<Assignment6Context> options)
            : base(options)
        {
        }
      public DbSet<ApplicationUser> ApplicationUser { get; set; }

    public DbSet<Assignment6.DataModels.Workout> Workout { get; set; }

        public DbSet<Assignment6.DataModels.Exercise> Exercise { get; set; }

        public DbSet<Assignment6.DataModels.Progression> Progression { get; set; }
    }
}
