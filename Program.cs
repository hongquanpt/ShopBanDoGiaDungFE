﻿using Microsoft.AspNetCore.Authentication.Cookies;

using System.Security.Authentication;
using System.Security.Cryptography;

var builder = WebApplication.CreateBuilder(args);

// Thêm dịch vụ để hỗ trợ compile Razor runtime
builder.Services.AddControllersWithViews().AddRazorRuntimeCompilation();

// Cấu hình Authentication Cookie
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.LoginPath = "/Access/Login";
        options.ExpireTimeSpan = TimeSpan.FromMinutes(20);
        options.Cookie.HttpOnly = true;
        options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
        options.Cookie.SameSite = SameSiteMode.Lax;
    });

// Cấu hình Session
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
    options.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest; // Linh hoạt hơn
    options.Cookie.SameSite = SameSiteMode.Lax;
});

builder.Services.AddHttpContextAccessor();

// Cấu hình Kestrel để sử dụng TLS 1.2 và TLS 1.3
builder.WebHost.ConfigureKestrel(options =>
{
    options.ConfigureHttpsDefaults(httpsOptions =>
    {
        httpsOptions.SslProtocols = SslProtocols.Tls12 | SslProtocols.Tls13;
    });
});

var app = builder.Build();

// Cấu hình pipeline HTTP
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}
app.Use(async (context, next) =>
{
    context.Response.Headers["Cache-Control"] = "no-store";
    context.Response.Headers["Pragma"] = "no-cache";
    await next.Invoke();
});
// Sử dụng HTTPS
app.UseHttpsRedirection();

// Phục vụ các file tĩnh
app.UseStaticFiles();

// Sử dụng Session
app.UseSession();

// Thiết lập routing
app.UseRouting();

// Thiết lập xác thực và ủy quyền
app.UseAuthentication();
app.UseAuthorization();

// Thêm các header bảo mật
app.Use(async (context, next) =>
{

    context.Response.Headers.Add("X-Content-Type-Options", "nosniff");
    context.Response.Headers.Add("X-Frame-Options", "DENY");
    context.Response.Headers.Add("Referrer-Policy", "no-referrer");
    await next();
});
app.Use(async (context, next) =>
{
    try
    {
        await next();
    }
    catch (CryptographicException)
    {
        context.Response.Cookies.Delete(".AspNetCore.Session"); // Xóa session cookie bị lỗi
        context.Response.Redirect(context.Request.Path); // Reload lại trang
    }
});

// Cấu hình các tuyến ứng dụng
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.UseHsts();

app.Run();
