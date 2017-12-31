using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Assignment6.Models;

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
            services.AddMvc();

            services.AddDbContext<Assignment6Context>(options =>
                    options.UseSqlServer(Configuration.GetConnectionString("Assignment6Context")));

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
          app.UseCors(builder =>
            builder.WithOrigins("*")
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials()
          );
          app.Use(async (context, next) => {
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
        }
    }
}
