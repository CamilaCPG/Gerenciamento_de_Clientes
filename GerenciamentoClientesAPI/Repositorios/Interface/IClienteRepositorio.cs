using GerenciamentoClientesAPI.Models;

namespace GerenciamentoClientesAPI.Repositorios.Interface
{
    public interface IClienteRepositorio
    {
        Task<ClienteModel> AddCliente(ClienteModel cliente);
        Task<List<ClienteModel>> GetCliente();
    }
}