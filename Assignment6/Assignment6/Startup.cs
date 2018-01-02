using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Assignment6.DataModels;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Assignment6.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Swashbuckle.AspNetCore.Swagger;

namespace Assignment6
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new Info { Title = "My API", Version = "v1" });
        c.OperationFilter<AddRequiredHeaderParameter>();

      });

//      services.AddDbContext<Assignment6Context>(options =>
//        options.UseSqlServer(Configuration.GetConnectionString("Assignment6Debug")));
       services.AddDbContext<Assignment6Context>(options =>
        options.UseSqlServer(Configuration.GetConnectionString("Assignment6Context")));

      services.AddIdentity<ApplicationUser, IdentityRole>()
        .AddEntityFrameworkStores<Assignment6Context>();

      services.Configure<IdentityOptions>(options => {
        options.Password.RequireDigit = false;
        options.Password.RequiredLength = 6;
        options.Password.RequireLowercase = false;
        options.Password.RequireNonAlphanumeric = false;
        options.Password.RequireUppercase = false;
        options.User.RequireUniqueEmail = true;
      });

      services.AddAuthentication(options =>
      {
        options.DefaultAuthenticateScheme = "Jwt";
        options.DefaultChallengeScheme = "Jwt";
      }).AddJwtBearer("Jwt", options =>
      {
        options.TokenValidationParameters = new TokenValidationParameters
        {
          ValidateAudience = false,
          //ValidAudience = "the audience you want to validate",
          ValidateIssuer = false,
          //ValidIssuer = "the isser you want to validate",

          ValidateIssuerSigningKey = true,
          IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("the secret that needs to be at least 16 characeters long for HmacSha256")),

          ValidateLifetime = true, //validate the expiration and not before values in the token

          ClockSkew = TimeSpan.FromMinutes(30) //5 minute tolerance for the expiration date
        };
      });

      services.AddCors();
      services.AddMvc();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      app.UseAuthentication();
      app.UseSwagger();

      // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), specifying the Swagger JSON endpoint.
      app.UseSwaggerUI(c =>
      {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");

      });
      app.UseCors(builder =>
        builder.WithOrigins("*")
          .AllowAnyMethod()
          .AllowAnyHeader()
          .AllowCredentials()
      );
      app.Use(async (context, next) =>
      {
        await next();
        if (context.Response.StatusCode == 404 &&
            !Path.HasExtension(context.Request.Path.Value) &&
            !context.Request.Path.Value.StartsWith("/api/"))
        {
          context.Request.Path = "/index.html";
          await next();
        }
      });

      app.UseMvcWithDefaultRoute();
      app.UseDefaultFiles();
      app.UseStaticFiles();
      app.UseMvc();
    }
  }
}
