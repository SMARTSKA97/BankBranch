using BankBranchWebAPI.BAL.IServices;
using BankBranchWebAPI.BAL.Services;
using BankBranchWebAPI.DAL.IRepository;
using BankBranchWebAPI_DAL.Data;
using BankBranchWebAPI_DAL.Models;
using BankBranchWebAPI_DAL.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<IBankService, BankService>();
builder.Services.AddScoped<IBranchService, BranchService>();
builder.Services.AddScoped<IBankRepository, BankRepository>();
builder.Services.AddScoped<IBranchRepository, BranchRepository>();
//services.AddControllers()
//    .AddJsonOptions(options =>
//    {
//        options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve;
//    });


//Registering Database
builder.Services.AddDbContext<ApplicationDbContext>(option => {
    option.UseNpgsql(builder.Configuration.GetConnectionString("DefaultSQLConnection"));
});

builder.Services.AddControllers();
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

app.UseAuthorization();

app.MapControllers();

app.Run();
