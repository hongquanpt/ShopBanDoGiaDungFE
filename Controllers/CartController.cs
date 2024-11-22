
using Microsoft.AspNetCore.Mvc;


namespace QuanLyShopDoGiaDung.Controllers
{
    public class CartController : Controller
    {
   
      
        public CartController()
        {
            
        }

         public IActionResult Index()
            {
               
                
                return View();
            }

        
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}