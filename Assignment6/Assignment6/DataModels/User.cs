using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment6.DataModels
{
    public class User
    {
      [Required,EmailAddress, MaxLength(256)]
      public string Email { get; set; }
      [Required, MinLength(6),MaxLength(56),DataType(DataType.Password)]
      public string Password { get; set; }
      public string Name { get; set; }
  }
}
