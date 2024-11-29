using Microsoft.AspNetCore.Mvc;

namespace ShopBanDoGiaDung.Controllers

{
    public class AdminController : Controller
    {
       
        public AdminController()
        {
           
        }
        public IActionResult Index()
        {
           
            return View();
        }
       
        #region Quản lý
        #region Quản lý quyền hạn
        public IActionResult QuanLyQH()
        {
           
            return View();

        }
        public IActionResult QuanLyCV()
        {

            return View();

        }
        #endregion
        #region Quản lý tài khoản
        public IActionResult QuanLyTK()
        {
           
            return View();
        }

        public IActionResult SuaCV()
        {
           
            return View();
        }
      

        #endregion
        #region Quản lý sản phẩm
        public IActionResult QuanLySP()
        {
           
                return View();
            
        }
 
        public IActionResult ThemSP()
        {
           
            return View();
        }


      
        public IActionResult SuaSP()
        {
            return View();
            
        }

      

        public IActionResult ThongBaoRong()
        {
            return View();
        }

        #endregion
        #region Quản lý hãng
        public IActionResult QuanLyHang()
        {

            return View();
        }
       
        public IActionResult SuaHang()
        {
            
            return View();
        }
        
        #endregion
        #region Quản lý danh mục
        public IActionResult QuanLyDM( )
        {
           

            return View();
        }
       
      
        public IActionResult SuaDM()
        {
            
            return PartialView();
        }
      
        #endregion
        #region Quản lý đơn hàng
        public IActionResult QuanLyDH()
        {
          
            return View();
        }


    
        public IActionResult MyOrderDetail()
        {
           
            return PartialView();
        }
        #endregion
        #endregion
        #region Thống kê
        #region Thống kê doanh số bán ra
       
     
        #endregion
        #region Thống kê sản phẩm
        #endregion
        #endregion
    }
}
