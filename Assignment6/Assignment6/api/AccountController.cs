using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Assignment6.DataModels;
using Assignment6.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Assignment6
{
  [Produces("application/json")]
  [Route("api/account")]
  public class AccountController : Controller
  {
    private readonly Assignment6Context _context;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly SignInManager<ApplicationUser> _signInManager;


    public AccountController(Assignment6Context context, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
    {
      _context = context;
      _userManager = userManager;
      _signInManager = signInManager;
    }
    
    [HttpPost("register")]
    //public async Task<IActionResult> Register([FromBody] string email, [FromBody] string password, [FromBody] string name)
    public async Task<IActionResult> Register([FromBody] User dtoUser)
    {
      var newUser = new ApplicationUser
      {
        UserName = dtoUser.Email,
        Email = dtoUser.Email,
        Name = dtoUser.Name,
      };

      var userCreationResult = await _userManager.CreateAsync(newUser, dtoUser.Password);
      if (userCreationResult.Succeeded)
      {
        return Ok(new Token { Value = GenerateToken(dtoUser.Email) });
      }
      foreach (var error in userCreationResult.Errors)
        ModelState.AddModelError(string.Empty, error.Description);
      return BadRequest(ModelState);
    }

  
    [Authorize]

    [HttpPost("logout")]
    public async Task<IActionResult> Logout()
    {
      await _signInManager.SignOutAsync();
      return Ok();
    }

    [HttpPost("login")]
    public async Task<IActionResult> JWTlogin([FromBody]UserDto dtoUser)
    {
      var user = await _userManager.FindByEmailAsync(dtoUser.Email);
      if (user == null)
      {
        ModelState.AddModelError(string.Empty, "Invalid login");
        return BadRequest(ModelState);
      }
      var passwordSignInResult = await _signInManager.CheckPasswordSignInAsync(user, dtoUser.Password, false);
      if (passwordSignInResult.Succeeded)
        return new ObjectResult(new Token { Value = GenerateToken(dtoUser.Email) });
      return BadRequest("Invalid login");
    }
    
    private string GenerateToken(string username)
    {
      var claims = new Claim[]
      {
                new Claim(ClaimTypes.Email, username),
                new Claim(JwtRegisteredClaimNames.Nbf, new DateTimeOffset(DateTime.Now).ToUnixTimeSeconds().ToString()),
                new Claim(JwtRegisteredClaimNames.Exp, new DateTimeOffset(DateTime.Now.AddDays(1)).ToUnixTimeSeconds().ToString()),
      };

      var token = new JwtSecurityToken(
          new JwtHeader(new SigningCredentials(
              new SymmetricSecurityKey(Encoding.UTF8.GetBytes("the secret that needs to be at least 16 characeters long for HmacSha256")),
                                       SecurityAlgorithms.HmacSha256)),
          new JwtPayload(claims));

      return new JwtSecurityTokenHandler().WriteToken(token);
    }
  }
}
