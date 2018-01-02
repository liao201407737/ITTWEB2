using System.Collections.Generic;
using System.Reflection.Metadata;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Assignment6
{
  public class AddRequiredHeaderParameter : IOperationFilter
  {
    void IOperationFilter.Apply(Operation operation, OperationFilterContext context)
    {
      if (operation.Parameters == null)
        operation.Parameters = new List<IParameter>();

      operation.Parameters.Add(new Parameter
      {
        Name = "Authorization",
        In = "header",
        Type = "string",
        Required = false
      });
    }
  }
  public class Parameter : IParameter
  {
    public string Description { get; set; }

    public Dictionary<string, object> Extensions { get; }

    public string In { get; set; }

    public string Name { get; set; }

    public bool Required { get; set; }

    public string Type { get; set; }
  }

}
