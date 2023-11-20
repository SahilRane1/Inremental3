using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public AdminController(ApplicationDbContext _context)
        {
            context = _context;
        }
        public IActionResult GetPlayers(){
            var data=context.Players.ToList();
            return Ok(data);            
        }
        public IActionResult GetTeams(){
            var data=context.Teams.ToList();
            return Ok(data);
        }
        public IActionResult PutPlayer(int id,Player p){
            Player pl=context.Players.Find(id);
            pl.Id=p.Id;
            pl.Name=p.Name;
            pl.Age=p.Age;
            pl.BiddingPrice=p.BiddingPrice;
            pl.Category=p.Category;
            ContextBoundObject.SaveChanges();
            return Ok();
            

        }
   

        
    }
}