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
        [HttpPut]
        [Route("EditPlayer/{id}")]
        public IActionResult PutPlayer(int id,Player p){
            // Player pl=context.Players.Find(id);
            // if(ModelState.IsValid){
            //     //  pl.Id=p.Id;
            //     pl.Name=p.Name;
            //     pl.Age=p.Age;
            //     pl.BiddingPrice=p.BiddingPrice;
            //     pl.Category=p.Category;
            //     context.SaveChanges();
            // }
                // Player player = new Player{};

                var player = new Player
            {
                Id= 1,
                Name = "John Doe",
                Age= 24,
                BiddingPrice= 25,
                Category="asd"
            };
                return Ok();

           
        }     
        //   [HttpPut]
        // [Route("EditPlayer/{id}")]
        // public IActionResult PutPlayer(int id ,Player players)
        // {
        //     var data = context.Players.Find(id);
 
        //     if(ModelState.IsValid)
        //     {
        //         player.Age = players.Age;
        //         player.Name = players.Name;
        //         player.Category = players.Category;
        //         player.BiddingPrice = players.BiddingPrice;
        //         context.SaveChanges();
        //     }
        //     return Ok();                
           
        // }

        [HttpDelete]
        [Route("DeletePlayer/{id}")]
        public IActionResult DeletePlayer(int id,Player p){
            var data=context.Players.Find(id);
            context.Players.Remove(data);
            context.SaveChanges();
            return Ok();
        }
    }
}