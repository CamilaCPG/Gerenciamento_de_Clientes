namespace GerenciamentoClientesAPI.Objects.DTOs;

public class ClienteListDto
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string? Telefone { get; set; }
}

public class ClienteCreateDto
{
    // Campos mínimos para criar — ajusta se quiser mais
    public required string Nome { get; set; }
    public string? Telefone { get; set; }
    public DateTime? DataNascimento { get; set; }

    // Pode incluir os demais campos depois (CEP, etc.)
}

public class ClienteUpdateDto : ClienteCreateDto
{
    public int Id { get; set; }
}
