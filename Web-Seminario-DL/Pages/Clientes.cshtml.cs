using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Web_Seminario_DL.Pages
{
    public class ClientesModel : PageModel
    {
        private readonly ILogger<ClientesModel> _logger;

        public ClientesModel(ILogger<ClientesModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}
