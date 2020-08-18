defmodule Backend.Repo.Migrations.CreateProperties do
  use Ecto.Migration

  def change do
    create table(:properties) do
      add :fid, :string
      add :call_numero, :string
      add :codigo_postal, :string
      add :colonia_predio, :string
      add :superficie_terreno, :string
      add :superficie_construccion, :string
      add :uso_construccion, :string
      add :clave_rango_nivel, :string
      add :anio_construccion, :string
      add :instalaciones_especiales, :string
      add :valor_unitario_suelo, :string
      add :valor_suelo, :string
      add :clave_valor_unitario_suelo, :string
      add :colonia_cumpliemiento, :string
      add :alcaldia_cumplimiento, :string
      add :subsidio, :string

      timestamps()
    end

  end
end
