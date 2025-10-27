using GerenciamentoClientesAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace GerenciamentoClientesAPI.Data;

public class EsteticaDbContext : DbContext
{
    public EsteticaDbContext(DbContextOptions<EsteticaDbContext> options)
        : base(options) { }

    public DbSet<ClienteModel> Clientes { get; set; }
}