using Microsoft.AspNetCore.Identity;

namespace Assignment6.DataModels
{
  public class ApplicationUser : IdentityUser
  {
    public string Name { get; set; }
    public string OfficeNo { get; set; }
  }
}
