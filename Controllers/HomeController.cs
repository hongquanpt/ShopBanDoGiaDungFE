
using Microsoft.AspNetCore.Mvc;


namespace ShopBanDoGiaDung.Controllers
{
    public class HomeController : Controller
    {


        public HomeController()
        {

        }

      /*  [CustomAuthorize("khach")]*/
        public async Task<IActionResult> Index()
        {
            return View();
        }


        
         public async Task<IActionResult> ProductDetail()
        {

            return View();
        }




        public async Task<IActionResult> AllProduct2()
        {   

           
            return View();
        }

    


        public async Task<IActionResult> profile()
        {
          
            return View();
        }
        

       


         public async Task<ActionResult> MyOrder()
        {
           
           
            
            return View();
        }





    }
}