using GerenciamentoClientesAPI.Objects.Models;

namespace GerenciamentoClientesAPI.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Cliente> Clientes => Set<Cliente>();

    protected override void OnModelCreating(ModelBuilder b)
    {
        b.Entity<Cliente>(e =>
        {
            e.Property(p => p.Nome).HasMaxLength(120).IsRequired();
        });
    }
}
