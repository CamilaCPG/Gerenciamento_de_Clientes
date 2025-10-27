-- =========================================
-- CRIAÇÃO DO BANCO DE DADOS
-- =========================================
CREATE DATABASE [estetica-bd];
GO USE [estetica-bd];
GO -- =========================================
    -- CRIAÇÃO DA TABELA CLIENTES
    -- =========================================
    CREATE TABLE clientes (
        id INT IDENTITY(1, 1) PRIMARY KEY,
        -- INFORMAÇÕES PESSOAIS
        nome NVARCHAR(150) NOT NULL,
        data_nascimento DATE NULL,
        telefone NVARCHAR(20) NULL,
        cep NVARCHAR(15) NULL,
        estado NVARCHAR(50) NULL,
        cidade NVARCHAR(100) NULL,
        bairro NVARCHAR(100) NULL,
        rua NVARCHAR(120) NULL,
        numero NVARCHAR(10) NULL,
        complemento NVARCHAR(100) NULL,
        informacoes_adicionais NVARCHAR(MAX) NULL,
        -- AVALIAÇÃO (Sim/Não e Perguntas abertas)
        utiliza_lentes BIT NULL,
        epilepsia_convulsoes BIT NULL,
        intestino_regulador BIT NULL,
        tratamento_facial_anterior NVARCHAR(255) NULL,
        toma_agua_frequente NVARCHAR(100) NULL,
        ingere_bebidas_alcoolicas NVARCHAR(100) NULL,
        boa_qualidade_sono NVARCHAR(100) NULL,
        -- AVALIAÇÃO DE PELE
        oleosidade NVARCHAR(50) NULL,
        espessura_pele NVARCHAR(50) NULL,
        fototipo NVARCHAR(10) NULL,
        hidratacao NVARCHAR(50) NULL,
        -- METADADOS
        data_registro DATETIME DEFAULT GETDATE()
    );
GO -- =========================================
    -- INSERÇÃO DE EXEMPLO (Chiarelli)
    -- =========================================
INSERT INTO clientes (
        nome,
        data_nascimento,
        telefone,
        cep,
        estado,
        cidade,
        bairro,
        rua,
        numero,
        complemento,
        informacoes_adicionais,
        utiliza_lentes,
        epilepsia_convulsoes,
        intestino_regulador,
        tratamento_facial_anterior,
        toma_agua_frequente,
        ingere_bebidas_alcoolicas,
        boa_qualidade_sono,
        oleosidade,
        espessura_pele,
        fototipo,
        hidratacao
    )
VALUES (
        N'Chiarelli',
        '1993-09-21',
        N'(11) 97777-6666',
        N'04560-200',
        N'SP',
        N'São Paulo',
        N'Jardins',
        N'Avenida das Rosas',
        N'120',
        N'Apto 32',
        N'Cliente novo, primeira avaliação facial.',
        1,
        0,
        1,
        N'Sim, há 1 mês',
        N'Sim, diariamente',
        N 'Não',
        N'Sim, dorme bem',
        N 'Normal',
        N'Fina',
        N'2',
        N 'Normal'
    );
GO -- =========================================
    -- CONSULTA DE TESTE
    -- =========================================
SELECT *
FROM clientes;
GO