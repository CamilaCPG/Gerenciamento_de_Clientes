using GerenciamentoClientesAPI;
using GerenciamentoClientesAPI.Data;
using GerenciamentoClientesAPI.Repositorios.Interface;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IClienteRepositorio, ClienteRepositorio>();

builder.Services.AddEntityFrameworkSqlServer()
                .AddDbContext<EsteticaDbContext>(
                    option => option.UseSqlServer(builder.Configuration.GetConnectionString("SqlServer"))
                );

var app = builder.Build();

// aplica migrações ao subir
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<EsteticaDbContext>();
    db.Database.Migrate();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();
app.Run();