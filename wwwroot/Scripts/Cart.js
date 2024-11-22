////var cart = {
////     init: function () {
////          cart.regEvents();
////     },
////     regEvents: function () {
////          $('#btnContinue').off('click').on('click', function () {
////               window.location.href = "/Home/Allproduct";
////          });
////          $('#btnPayment').off('click').on('click', function () {
////               window.location.href = "/Cart/Payment";
////          });
////          $('#btnUpdate').off('click').on('click', function () {
////               var listProduct = $('.txtQuantity');
////               var cartList = [];
////               $.each(listProduct, function (i, item) {
////                    cartList.push({
////                         Quantity: $(item).val(),
////                         Product: {
////                              ID: $(item).data('id')
////                         }
////                    });
////               });

////               $.ajax({
////                    url: '/Cart/Update',
////                    data: { cartModel: JSON.stringify(cartList) },
////                    dataType: 'json',
////                    type: 'POST',
////                    success: function (res) {
////                         if (res.status == true) {
////                              window.location.href = "/Cart";
////                         }
////                    }
////               })
////          });

////          $('#btnDeleteAll').off('click').on('click', function () {
////               $.ajax({
////                    url: '/Cart/DeleteAll',
////                    dataType: 'json',
////                    type: 'POST',
////                    success: function (res) {
////                         if (res.status == true) {
////                              window.location.href = "/Cart";
////                         }
////                    }
////               })
////          });

////          $('.btn-delete').off('click').on('click', function (e) {
////               e.preventDefault();
////               $.ajax({
////                    data: { id: $(this).data('id') },
////                    url: '/Cart/Delete',
////                    dataType: 'json',
////                    type: 'POST',
////                    success: function (res) {
////                         if (res.status == true) {
////                              window.location.href = "/Cart";
////                         }
////                    }
////               })
////          });
////          $('.txtQuantity').off('keyup').on('keyup', function () {
////               var quantity = parseInt($(this).val());
////               var productid = parseInt($(this).data('id'));
////               var price = parseFloat($(this).data('price'));
////               if (isNaN(quantity) == false) {

////                    var amount = quantity * price;

////                    $('#amount_' + productid).text(numeral(amount).format('0,0'));
////               }
////               else {
////                    $('#amount_' + productid).text(0);
////               }

////               $('#lblTotalOrder').text(numeral(cart.getTotalOrder()).format('0,0'));


////               cart.updateAll();

////          });
////     }
////}
//cart.init();

//////function incrementValue() {

//////     const quantity = document.querySelectorAll("#quantity");
//////     const gia = document.querySelectorAll("#gia");
//////     const tong = document.querySelectorAll("#tong");
//////     for (let i = 0; i < moneylist.length; i++) {
//////          tong[i].innerHTML = quantity[i] * gia[i];
//////     }
//////     //var value = parseInt(document.getElementById("quantity").value);
//////     //var tien = parseInt(document.getElementById("gia").value);
//////     //value = isNaN(value) ? 0 : value;
//////     //value++;
//////     /*document.getElementById("tong").innerHTML = value * tien;*/
//////}


//var cart = {
//     init: function () {
//          cart.registerEvent();
//     },
//     registerEvent: function () {

//     },
//     loadData: function () {
//          $.ajax({
//               url:'/Cart/GetAll

//          })
//     }

//}
//cart.init();



//var cart = {
//     init: function () {
//          cart.loadData();
//          cart.registerEvent();
//     },
//     registerEvent: function () {
//          $('#frmPayment').validate({
//               rules: {
//                    name: "required",
//                    address: "required",
//                    email: {
//                         required: true,
//                         email: true
//                    },
//                    phone: {
//                         required: true,
//                         number: true
//                    }
//               },
//               messages: {
//                    name: "Yêu cầu nhập tên",
//                    address: "Yêu cầu nhập địa chỉ",
//                    email: {
//                         required: "Bạn cần nhập email",
//                         email: "Định dạng email chưa đúng"
//                    },
//                    phone: {
//                         required: "Số điện thoại được yêu cầu",
//                         number: "Số điện thoại phải là số."
//                    }
//               }
//          });
//          $('.btnDeleteItem').off('click').on('click', function (e) {
//               e.preventDefault();
//               var productId = parseInt($(this).data('id'));
//               cart.deleteItem(productId);
//          });
//          $('.txtQuantity').off('keyup').on('keyup', function () {
//               var quantity = parseInt($(this).val());
//               var productid = parseInt($(this).data('id'));
//               var price = parseFloat($(this).data('price'));
//               if (isNaN(quantity) == false) {

//                    var amount = quantity * price;

//                    $('#amount_' + productid).text(numeral(amount).format('0,0'));
//               }
//               else {
//                    $('#amount_' + productid).text(0);
//               }

//               $('#lblTotalOrder').text(numeral(cart.getTotalOrder()).format('0,0'));


//               cart.updateAll();

//          });
//          $('#btnContinue').off('click').on('click', function (e) {
//               e.preventDefault();
//               window.location.href = "/";
//          });
//          $('#btnDeleteAll').off('click').on('click', function (e) {
//               e.preventDefault();
//               cart.deleteAll();
//          });
//          $('#btnCheckout').off('click').on('click', function (e) {
//               e.preventDefault();
//               $('#divCheckout').show();
//          });
//          $('#chkUserLoginInfo').off('click').on('click', function () {
//               if ($(this).prop('checked'))
//                    cart.getLoginUser();
//               else {
//                    $('#txtName').val('');
//                    $('#txtAddress').val('');
//                    $('#txtEmail').val('');
//                    $('#txtPhone').val('');
//               }
//          });
//          $('#btnCreateOrder').off('click').on('click', function (e) {
//               e.preventDefault();
//               var isValid = $('#frmPayment').valid();
//               if (isValid) {
//                    cart.createOrder();
//               }

//          });

//          $('input[name="paymentMethod"]').off('click').on('click', function () {
//               if ($(this).val() == 'NL') {
//                    $('.boxContent').hide();
//                    $('#nganluongContent').show();
//               }
//               else if ($(this).val() == 'ATM_ONLINE') {
//                    $('.boxContent').hide();
//                    $('#bankContent').show();
//               }
//               else {
//                    $('.boxContent').hide();
//               }
//          });
//     },
//     getLoginUser: function () {
//          $.ajax({
//               url: '/ShoppingCart/GetUser',
//               type: 'POST',
//               dataType: 'json',
//               success: function (response) {
//                    if (response.status) {
//                         var user = response.data;
//                         $('#txtName').val(user.FullName);
//                         $('#txtAddress').val(user.Address);
//                         $('#txtEmail').val(user.Email);
//                         $('#txtPhone').val(user.PhoneNumber);
//                    }
//               }
//          });
//     },

//     createOrder: function () {
//          var order = {
//               CustomerName: $('#txtName').val(),
//               CustomerAddress: $('#txtAddress').val(),
//               CustomerEmail: $('#txtEmail').val(),
//               CustomerMobile: $('#txtPhone').val(),
//               CustomerMessage: $('#txtMessage').val(),
//               PaymentMethod: $('input[name="paymentMethod"]:checked').val(),
//               BankCode: $('input[groupname="bankcode"]:checked').prop('id'),
//               Status: false
//          }
//          $.ajax({
//               url: '/ShoppingCart/CreateOrder',
//               type: 'POST',
//               dataType: 'json',
//               data: {
//                    orderViewModel: JSON.stringify(order)
//               },
//               success: function (response) {
//                    if (response.status) {
//                         if (response.urlCheckout != undefined && response.urlCheckout != '') {

//                              window.location.href = response.urlCheckout;
//                         }
//                         else {
//                              console.log('create order ok');
//                              $('#divCheckout').hide();
//                              cart.deleteAll();
//                              setTimeout(function () {
//                                   $('#cartContent').html('Cảm ơn bạn đã đặt hàng thành công. Chúng tôi sẽ liên hệ sớm nhất.');
//                              }, 2000);
//                         }

//                    }
//                    else {
//                         $('#divMessage').show();
//                         $('#divMessage').text(response.message);
//                    }
//               }
//          });
//     },
//     getTotalOrder: function () {
//          var listTextBox = $('.txtQuantity');
//          var total = 0;
//          $.each(listTextBox, function (i, item) {
//               total += parseInt($(item).val()) * parseFloat($(item).data('price'));
//          });
//          return total;
//     },
//     deleteAll: function () {
//          $.ajax({
//               url: '/ShoppingCart/DeleteAll',
//               type: 'POST',
//               dataType: 'json',
//               success: function (response) {
//                    if (response.status) {
//                         cart.loadData();

//                    }
//               }
//          });
//     },
//     updateAll: function () {
//          var cartList = [];
//          $.each($('.txtQuantity'), function (i, item) {
//               cartList.push({
//                    ProductId: $(item).data('id'),
//                    Quantity: $(item).val()
//               });
//          });
//          $.ajax({
//               url: '/ShoppingCart/Update',
//               type: 'POST',
//               data: {
//                    cartData: JSON.stringify(cartList)
//               },
//               dataType: 'json',
//               success: function (response) {
//                    if (response.status) {
//                         cart.loadData();
//                         console.log('Update ok');
//                    }
//               }
//          });
//     },
//     deleteItem: function (productId) {
//          $.ajax({
//               url: '/ShoppingCart/DeleteItem',
//               data: {
//                    productId: productId
//               },
//               type: 'POST',
//               dataType: 'json',
//               success: function (response) {
//                    if (response.status) {
//                         cart.loadData();
//                    }
//               }
//          });
//     },
//     loadData: function () {
//          $.ajax({
//               url: '/ShoppingCart/GetAll',
//               type: 'GET',
//               dataType: 'json',
//               success: function (res) {
//                    if (res.status) {
//                         var template = $('#tplCart').html();
//                         var html = '';
//                         var data = res.data;
//                         $.each(data, function (i, item) {
//                              html += Mustache.render(template, {
//                                   ProductId: item.ProductId,
//                                   ProductName: item.Product.Name,
//                                   Image: item.Product.Image,
//                                   Price: item.Product.Price,
//                                   PriceF: numeral(item.Product.Price).format('0,0'),
//                                   Quantity: item.Quantity,
//                                   Amount: numeral(item.Quantity * item.Product.Price).format('0,0')
//                              });
//                         });

//                         $('#cartBody').html(html);

//                         if (html == '') {
//                              $('#cartContent').html('Không có sản phẩm nào trong giỏ hàng.');
//                         }
//                         $('#lblTotalOrder').text(numeral(cart.getTotalOrder()).format('0,0'));
//                         cart.registerEvent();
//                    }
//               }
//          })
//     }
//}
//cart.init();


var cart = {
     init: function () {
       /*   cart.loadData();*/
          cart.regEvents();
     },
     regEvents: function () {
          $('#frmPayment').validate({
               rules: {
                    Ten: "required",
                    DiaChi: "required",
                    //email: {
                    //     required: true,
                    //     email: true
                    //},
                    SDT: {
                         required: true,
                         number: true
                    }
               },
               messages: {
                    name: "Yêu cầu nhập tên",
                    address: "Yêu cầu nhập địa chỉ",
                    //email: {
                    //     required: "Bạn cần nhập email",
                    //     email: "Định dạng email chưa đúng"
                    //},
                    SDT: {
                         required: "Số điện thoại được yêu cầu",
                         number: "Số điện thoại phải là số."
                    }
               }
          });

          $('#btnCheckout').off('click').on('click', function (e) {
               e.preventDefault();
               $('#divCheckout').show();
          });

          $('#btnContinue').off('click').on('click', function (e) {
               e.preventDefault();
               window.location.href = "/Home/AllProduct";
          });

          //$('#btnUpdate').on('click', function () {
          //     var listProDuct = $('.txtQuantity');
          //     var cartList = [];
          //     $.each(listProDuct, function (i, item) {
          //          cartList.push({
          //               soluong: $(item).val(),
          //               sanpham: {
          //                    MaSP: $(item).data('id')
          //               }
          //          });
          //     });

          //     $.ajax({
          //          url: 'Cart/Update',
          //          data: { cartModel: JSON.stringify(cartList) },
          //          dataType: 'json',
          //          type: 'POST',
          //          success: function (res) {
          //               if (res.status == true) {
          //                    window.location.href = "/Cart/Index";
          //               }
          //          }
          //     });
          //});
          //$('#btnAdd').off('click').on('click', function (e) {             
          //     e.preventDefault();
          //     var productid = parseInt($(this).data('id'));
          //     cart.addItem(productid);
          //});
          $('.btn-delete').off('click').on('click', function (e) {
               e.preventDefault();
               $.ajax({
                    data: { id: $(this).data('id') },
                    url: '/Cart/Delete',
                    dataType: 'json',
                    type: 'POST',
                    success: function (res) {
                         if (res.status == true) {
                              window.location.href = "/Cart";
                         }
                    }
               })
          });
          // $('#btnDeleteAll').off('click').on('click', function () {
          //      Swal.fire({
          //           title: 'Bạn có chắc chắn muốn xóa giỏ hàng ?',
          //          showCancelButton: true,
          //          confirmButtonText: 'Xóa',
          //          denyButtonText: `Hủy`
          //       }).then((result)=> {
          //           if(result.isConfirmed){
          //                $.ajax({
          //                     url: '/Cart/DeleteAll',
          //                     dataType: 'json',
          //                     type: 'POST',
          //                     success: function (res) {
          //                          if (res.status == true) {
          //                               window.location.href = "/Cart";
          //                          }
          //                     }
          //                })
          //           }
          //       })
              
          // });
          $('.txtQuantity').off('click').on('change', function () {
               var quantity = parseInt($(this).val());
               var productid = parseInt($(this).data('id'));
               var price = parseFloat($(this).data('price'));
               if (isNaN(quantity) == false) {

                    var amount = quantity * price;

                    $('#amount_' + productid).text(amount);
               }
               else {
                    $('#amount_' + productid).text(0);
               }
               cart.updateAll();
             /*  $('#lblTotalOrder').text(cart.getTotalOrder());*/
          });

     },
     getTotalOrder: function () {
          var listTextBox = $('.txtQuantity');
          var total = 0;
          $.each(listTextBox, function (i, item) {
               total += parseInt($(item).val()) * parseFloat($(item).data('price'));
          });
          return total;
     },
     //addItem: function (productId) {
     //     $.ajax({
     //          url: '/Cart/AddItem',
     //          data: {
     //               productId : productId                  
     //          },
     //          type: 'POST',
     //          dataType: 'json',
     //          success: function (res) {
     //               if (res.status == true) {
     //                    Swal.fire({
     //                         position: 'center',
     //                         icon: 'success',
     //                         title: 'Thêm sản phẩm vào giỏ hàng thành công',
     //                         showConfirmButton: false,
     //                         timer: 1500
     //                    })
     //                    /*alert('Thêm sản phẩm vào giỏ hàng thành công');*/
     //               }
     //               if (res.status == false) {
     //                    Swal.fire({
     //                         position: 'center',
     //                         icon: 'success',
     //                         title: 'Xin lỗi, sản phẩm đang tạm hết hàng',
     //                         showConfirmButton: false,
     //                         timer: 1500
     //                    })
     //                    /*alert('Thêm sản phẩm vào giỏ hàng thành công');*/
     //               }
     //          }
     //     });
     //},
     updateAll: function () {
          var cartList = [];
          $.each($('.txtQuantity'), function (i, item) {
               cartList.push({
                    sanpham: {
                         MaSP: $(item).data('id')
                    },
                    soluong: $(item).val()
               });
          });
          $.ajax({
               url: '/Cart/Update',
               type: 'POST',
               data: {
                    cartModel: JSON.stringify(cartList)
               },
               dataType: 'json',
               success: function (response) {
                    if (response.status) {
                         window.location.href ="/Cart/Index";
                         //cart.loadData();
                         console.log('Update ok');
                    }
               }
          });
     },
     //loadData: function () {
     //     $.ajax({
     //          url: '/Cart/GetAll',
     //          type: 'GET',
     //          dataType: 'json',
     //          success: function (res) {
     //               if (res.status == true) {
     //                    /*var template = $('#tplCart').html();*/
     //                    var html = '';
     //                    var data = res.data;
     //                    $.each(data, function (i, item) {
     //                         html +=

     //                              <tr>
     //                                   <td>item.sanpham.MaSP</td>
     //                                   <td>item.sanpham.TenSP</td>
     //                                   <td><img class="img-responsive" src="~/Assets/BigShopee/images/item.sanpham.Anh1" /></td>
     //                                   <td><input type="number" min="1" class="txtQuantity" id="quantity" data-id="item.sanpham.MaSP" value="item.soluong" /></td>
     //                                   <td id="gia" data-price="item.sanpham.GiaTien">@item.sanpham.GiaTien.ToString("N0")</td>
     //                                   <td id="amount_item.sanpham.MaSP">((item.sanpham.GiaTien * item.soluong).ToString("N0"))</td>
     //                                   <td><a href="#" data-id="@item.sanpham.MaSP" class="btn-delete">Xoá</a></td>
     //                              </tr>
                                                                                                 
     //                         //html += Mustache.render(template, {
     //                         //     ProductId: item.sanpham.MaSP,
     //                         //     ProductName: item.sanpham.TenSP,
     //                         //     Image: item.sanpham.Anh1,
     //                         //     Price: item.sanpham.GiaTien,
     //                         //     PriceF: numeral(item.sanpham.GiaTien).format('0,0'),
     //                         //     Quantity: item.soluong,
     //                         //     Amount: numeral(item.soluong * item.sanpham.GiaTien).format('0,0')
     //                         //});
     //                    });

     //                    $('#cartBody').html(html);

     //                    if (html == '') {
     //                         $('#cartContent').html('Không có sản phẩm nào trong giỏ hàng.');
     //                    }
     //                    $('#lblTotalOrder').text(numeral(cart.getTotalOrder()).format('0,0'));
     //                    cart.regEvents();
     //               }
     //          }
     //     })
     //}
}
cart.init();
