using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Web_Seminario_DL.Pages
{
    public class ContactanosModel : PageModel
    {
        private readonly ILogger<ContactanosModel> _logger;

        public ContactanosModel(ILogger<ContactanosModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}
