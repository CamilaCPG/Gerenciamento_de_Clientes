using GerenciamentoClientesAPI.Models;
using GerenciamentoClientesAPI.Repositorios.Interface;
using Microsoft.AspNetCore.Mvc;

namespace GerenciamentoClientesAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ClientesController : ControllerBase
{
    private readonly IClienteRepositorio _clienteRepositorio;

    public ClientesController(IClienteRepositorio clienteRepositorio)
    {
        _clienteRepositorio = clienteRepositorio;
    }

    [HttpPost]
    public async Task<ActionResult> RegistrarCliente([FromBody] ClienteModel cliente)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        try
        {
            await _clienteRepositorio.AddCliente(cliente);
            return Ok(new { Success = true, Message = "Cliente registrado com sucesso", Cliente = cliente });
        }
        catch (Exception ex)
        {
            return BadRequest(new { Error = "Erro ao registrar cliente", Details = ex.Message });
        }
    }

    [HttpGet]
    public async Task<ActionResult<List<ClienteModel>>> GetClientes()
    {
        try
        {
            var clientes = await _clienteRepositorio.GetCliente();
            return Ok(clientes);
        }
        catch (Exception ex)
        {
            return BadRequest(new { Error = "Erro ao buscar clientes", Details = ex.Message });
        }
    }
}
