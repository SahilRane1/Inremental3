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
       
        [HttpPost]
        [Route("AddPlayer")]
        public IActionResult PostPlayer(Player p){
            context.Players.Add(p);
            context.SaveChanges();
            return Created("Player Added Successfully",p);
        }
        [HttpPost]
        [Route("AddTeam")]
        public IActionResult PostTeam(Team t){
            context.Teams.Add(t);
            context.SaveChanges();
            return Created("Team Added Successfully",t);
        }

        [HttpGet]
        [Route("ShowPlayers")]
        public IActionResult GetPlayers(){
            var data=context.Players.ToList();
            return Ok(data);            
        }
        [HttpGet]
        [Route("ShowTeams")]
        public IActionResult GetTeams(){
            var data=context.Teams.ToList();
            return Ok(data);
        }
        [HttpPut]
        [Route("EditPlayer/{id}")]
        public IActionResult PutPlayer(int id,Player p){
            Player pl=context.Players.Find(id);
                pl.Name=p.Name;
                pl.Age=p.Age;
                pl.BiddingPrice=p.BiddingPrice;
                pl.Category=p.Category;
                context.SaveChanges();
                return Ok();
            // }
            // Player pl=context.Players.Find(id);
            // if(ModelState.IsValid){
            //     var player = new Player
            // {
            //     Id= 1,
            //     Name = "John Doe",
            //     Age= 24,
            //     BiddingPrice= 25,
            //     Category="asd"
            // };
            // }
                // return Ok();

           
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
        public IActionResult DeletePlayer(int id)
        {
            try
            {
                
                var data = context.Players.Find(id);
                context.Players.Remove(data);
                context.SaveChanges();
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        [Route("ListTeam/{id}")]
        public IActionResult Get(int id)
        {
            // var data=context.Teams.ToList();
            if(id==null)
            {
                return BadRequest("Id cannot be null");
            }
            var data=(from m in context.Teams where m.TeamId==id select m).FirstOrDefault();
            // var data=context.Teams.Find(id);
            if(data==null)
            {
                return NotFound($"Movie {id} not found");
            }
            return Ok(data);
           
        }
        [HttpGet]
 
        [Route("ListPlayer/{id}")]
        public IActionResult GetOnePlayer(int id)
        {
            // var data=context.Teams.ToList();
            if(id==null)
            {
                return BadRequest("Id cannot be null");
            }
            var data=(from m in context.Players where m.Id==id select m).FirstOrDefault();
            // var data=context.Teams.Find(id);
            if(data==null)
            {
                return NotFound($"Player {id} not found");
            }
            return Ok(data);
        }
          [HttpPut]
        [Route("EditTeam/{id}")]
        public IActionResult Put(int id, Team Team)
        {
            if(ModelState.IsValid)
            {
                Team mv = context.Teams.Find(id);
                mv.TeamName = Team.TeamName;
                context.SaveChanges();
                return Ok();
               
 
 
 
            }
            return BadRequest("Unable to Edit Record");
        }
        [HttpDelete]
        [Route("DeleteTeam/{id}")]
        public IActionResult Delete(int id)
        {
 
                var data=context.Teams.Find(id);
                context.Teams.Remove(data);
                context.SaveChanges();
                return Ok();
 
           
        }
        
    }
}