
using Microsoft.AspNetCore.Mvc;


namespace ShopBanDoGiaDung.Controllers
{
    public class AccessController : Controller
    {
        

        public AccessController()
        {
           
        }
       
        public IActionResult Login()
        {
           
            return View();
        }

        
        public ActionResult Logout()
        {

           
            return RedirectToAction("Index", "Home");
        }

    }
}
