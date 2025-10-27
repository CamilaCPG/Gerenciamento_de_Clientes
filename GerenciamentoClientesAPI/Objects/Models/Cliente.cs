namespace GerenciamentoClientesAPI.Objects.Models;

public class Cliente
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public int? Idade { get; set; }

    // Campos que você pode usar depois na ficha
    public string? Telefone { get; set; }
    public DateTime? DataNascimento { get; set; }
}
