// using Microsoft.EntityFrameworkCore;
// using dotnetapp.Models;
// using Microsoft.AspNetCore.Cors;



// var builder = WebApplication.CreateBuilder(args);
// builder.Services.AddControllers();
// var connectionString=builder.Configuration.GetConnectionString("mycon");
// builder.Services.AddDbContext<ApplicationDbContext>(options=>options.UseSqlServer(connectionString));

// // Add services to the container.
// builder.Services.AddCors(
   
//     options=>{
//         options.AddDefaultPolicy(
       
//         builder=>{
//             builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
       
 
//     });
   
// });
// // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

// var app = builder.Build();

// // Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

// app.UseHttpsRedirection();
// app.UseCors();
// app.UseAuthorization();

// app.MapControllers();

// app.Run();


using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
using Microsoft.AspNetCore.Cors;
 
 
 
var builder = WebApplication.CreateBuilder(args);
 
// Add services to the container.
 
builder.Services.AddControllers();
 
var connectionString = builder.Configuration.GetConnectionString("mycon");
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(connectionString));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddCors(
    options => {
        options.AddDefaultPolicy(
        builder => {
            builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
        });
    });
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
 
var app = builder.Build();
 
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
 
app.UseHttpsRedirection();
app.UseCors();
app.UseAuthorization();
 
app.MapControllers();
 
app.Run();
 