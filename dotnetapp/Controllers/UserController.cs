﻿using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{
    

    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public UserController(ApplicationDbContext _context)
        {
            context = _context;
        }
         public IActionResult Register(User u){
            context.Users.Add(u);
            context.SaveChanges();
            return Ok();
        }
        public IActionResult Login(User u){
            if(ModelSatate.IsValid){
                

            }
            return Ok();
        }

        
    }
}