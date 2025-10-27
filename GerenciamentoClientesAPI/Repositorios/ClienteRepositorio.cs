using GerenciamentoClientesAPI.Data;
using GerenciamentoClientesAPI.Models;
using GerenciamentoClientesAPI.Repositorios.Interface;
using Microsoft.EntityFrameworkCore;

namespace GerenciamentoClientesAPI;

public class ClienteRepositorio : IClienteRepositorio
{

    private readonly EsteticaDbContext _dbContext;

    public ClienteRepositorio(EsteticaDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<ClienteModel> AddCliente(ClienteModel cliente)
    {
        await _dbContext.Clientes.AddAsync(cliente);
        await _dbContext.SaveChangesAsync();

        return cliente;
    }

    public async Task<List<ClienteModel>> GetCliente()
    {
        return await _dbContext.Clientes.ToListAsync();
    }
}
