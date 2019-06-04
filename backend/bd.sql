USE [master]
GO
/****** Object:  Database [TP2]    Script Date: 2/6/2019 8:17:27 p. m. ******/
CREATE DATABASE [TP2]
 CONTAINMENT = NONE

 GO
ALTER DATABASE [TP2] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [TP2] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [TP2] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [TP2] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [TP2] SET ARITHABORT OFF 
GO
ALTER DATABASE [TP2] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [TP2] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [TP2] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [TP2] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [TP2] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [TP2] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [TP2] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [TP2] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [TP2] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [TP2] SET  DISABLE_BROKER 
GO
ALTER DATABASE [TP2] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [TP2] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [TP2] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [TP2] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [TP2] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [TP2] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [TP2] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [TP2] SET RECOVERY FULL 
GO
ALTER DATABASE [TP2] SET  MULTI_USER 
GO
ALTER DATABASE [TP2] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [TP2] SET DB_CHAINING OFF 
GO
ALTER DATABASE [TP2] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [TP2] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [TP2] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'TP2', N'ON'
GO
USE [TP2]
GO
/****** Object:  User [tp2]    Script Date: 2/6/2019 8:17:27 p. m. ******/
CREATE USER [tp2] WITHOUT LOGIN WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Funciones]    Script Date: 2/6/2019 8:17:27 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Funciones](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Horario] [varchar](255) NOT NULL,
	[PeliculaId] [int] NOT NULL,
	[SalaId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Peliculas]    Script Date: 2/6/2019 8:17:27 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Peliculas](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Titulo] [varchar](255) NOT NULL,
	[Duracion] [varchar](255) NULL,
	[Clasificacion] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Salas]    Script Date: 2/6/2019 8:17:27 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Salas](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CantidadFilas] [int] NOT NULL,
	[ButacasFila] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Funciones] ON 

GO
INSERT [dbo].[Funciones] ([ID], [Horario], [PeliculaId], [SalaId]) VALUES (1, N'14:00', 1, 2)
GO
INSERT [dbo].[Funciones] ([ID], [Horario], [PeliculaId], [SalaId]) VALUES (2, N'14:00', 2, 1)
GO
INSERT [dbo].[Funciones] ([ID], [Horario], [PeliculaId], [SalaId]) VALUES (3, N'18:00', 4, 1)
GO
INSERT [dbo].[Funciones] ([ID], [Horario], [PeliculaId], [SalaId]) VALUES (4, N'18:00', 5, 2)
GO
SET IDENTITY_INSERT [dbo].[Funciones] OFF
GO
SET IDENTITY_INSERT [dbo].[Peliculas] ON 

GO
INSERT [dbo].[Peliculas] ([ID], [Titulo], [Duracion], [Clasificacion]) VALUES (1, N'Hulk', N'35', N'M')
GO
INSERT [dbo].[Peliculas] ([ID], [Titulo], [Duracion], [Clasificacion]) VALUES (2, N'Batman', N'45', N'T')
GO
INSERT [dbo].[Peliculas] ([ID], [Titulo], [Duracion], [Clasificacion]) VALUES (3, N'El padrino', N'50', N'RP')
GO
INSERT [dbo].[Peliculas] ([ID], [Titulo], [Duracion], [Clasificacion]) VALUES (4, N'Unknown', N'64', N'T')
GO
INSERT [dbo].[Peliculas] ([ID], [Titulo], [Duracion], [Clasificacion]) VALUES (5, N'Pokemon', N'48', N'E')
GO
SET IDENTITY_INSERT [dbo].[Peliculas] OFF
GO
SET IDENTITY_INSERT [dbo].[Salas] ON 

GO
INSERT [dbo].[Salas] ([ID], [CantidadFilas], [ButacasFila]) VALUES (1, 12, 10)
GO
INSERT [dbo].[Salas] ([ID], [CantidadFilas], [ButacasFila]) VALUES (2, 8, 5)
GO
INSERT [dbo].[Salas] ([ID], [CantidadFilas], [ButacasFila]) VALUES (3, 32, 16)
GO
SET IDENTITY_INSERT [dbo].[Salas] OFF
GO
ALTER TABLE [dbo].[Funciones]  WITH CHECK ADD FOREIGN KEY([PeliculaId])
REFERENCES [dbo].[Peliculas] ([ID])
GO
ALTER TABLE [dbo].[Funciones]  WITH CHECK ADD FOREIGN KEY([SalaId])
REFERENCES [dbo].[Salas] ([ID])
GO
USE [master]
GO
ALTER DATABASE [TP2] SET  READ_WRITE 
GO
