
using Microsoft.AspNetCore.Mvc;


namespace QuanLyShopDoGiaDung.ViewComponents
{
    public class TimKiemKhacViewComponent : ViewComponent
    {
      
        public TimKiemKhacViewComponent()
        {
           
        }

        public IViewComponentResult Invoke()
        {
            
            return View();
        }
    }
}