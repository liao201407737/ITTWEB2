using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Assignment6.DataModels
{
    public class Token
    {
    [JsonProperty(PropertyName = "token")]
      public string Value { get; set; }
    }
}
