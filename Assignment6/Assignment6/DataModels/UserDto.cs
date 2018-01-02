using System.ComponentModel.DataAnnotations;

namespace Assignment6
{
  public class UserDto
  {
    [Required, EmailAddress, MaxLength(256)]
    public string Email { get; set; }
    [Required, MinLength(6), MaxLength(56), DataType(DataType.Password)]
    public string Password { get; set; }
  }
}
