using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using UmLugar.Models;

namespace UmLugar.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
