using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GerenciamentoClientesAPI.Models
{
    [Table("clientes")]
    public class ClienteModel
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        // INFORMAÇÕES PESSOAIS
        [Required]
        [Column("nome")]
        [MaxLength(150)]
        public string? Nome { get; set; }

        [Column("data_nascimento")]
        public DateTime? DataNascimento { get; set; }

        [Column("telefone")]
        [MaxLength(20)]
        public string? Telefone { get; set; }

        [Column("cep")]
        [MaxLength(15)]
        public string? Cep { get; set; }

        [Column("estado")]
        [MaxLength(50)]
        public string? Estado { get; set; }

        [Column("cidade")]
        [MaxLength(100)]
        public string? Cidade { get; set; }

        [Column("bairro")]
        [MaxLength(100)]
        public string? Bairro { get; set; }

        [Column("rua")]
        [MaxLength(120)]
        public string? Rua { get; set; }

        [Column("numero")]
        [MaxLength(10)]
        public string? Numero { get; set; }

        [Column("complemento")]
        [MaxLength(100)]
        public string? Complemento { get; set; }

        [Column("informacoes_adicionais")]
        public string? InformacoesAdicionais { get; set; }

        // AVALIAÇÃO
        [Column("utiliza_lentes")]
        public bool? UtilizaLentes { get; set; }

        [Column("epilepsia_convulsoes")]
        public bool? EpilepsiaConvulsoes { get; set; }

        [Column("intestino_regulador")]
        public bool? IntestinoRegulador { get; set; }

        [Column("tratamento_facial_anterior")]
        [MaxLength(255)]
        public string? TratamentoFacialAnterior { get; set; }

        [Column("toma_agua_frequente")]
        [MaxLength(100)]
        public string? TomaAguaFrequente { get; set; }

        [Column("ingere_bebidas_alcoolicas")]
        [MaxLength(100)]
        public string? IngereBebidasAlcoolicas { get; set; }

        [Column("boa_qualidade_sono")]
        [MaxLength(100)]
        public string? BoaQualidadeSono { get; set; }

        // AVALIAÇÃO DE PELE
        [Column("oleosidade")]
        [MaxLength(50)]
        public string? Oleosidade { get; set; }

        [Column("espessura_pele")]
        [MaxLength(50)]
        public string? EspessuraPele { get; set; }

        [Column("fototipo")]
        [MaxLength(10)]
        public string? Fototipo { get; set; }

        [Column("hidratacao")]
        [MaxLength(50)]
        public string? Hidratacao { get; set; }

        // METADADOS
        [Column("data_registro")]
        public DateTime DataRegistro { get; set; } = DateTime.Now;
    }
}
