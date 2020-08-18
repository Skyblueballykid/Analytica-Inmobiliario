defmodule Backend.Properties.Property do
  use Ecto.Schema
  import Ecto.Changeset

  schema "properties" do
    field :alcaldia_cumplimiento, :string
    field :anio_construccion, :string
    field :call_numero, :string
    field :clave_rango_nivel, :string
    field :clave_valor_unitario_suelo, :string
    field :codigo_postal, :string
    field :colonia_cumpliemiento, :string
    field :colonia_predio, :string
    field :fid, :string
    field :instalaciones_especiales, :string
    field :subsidio, :string
    field :superficie_construccion, :string
    field :superficie_terreno, :string
    field :uso_construccion, :string
    field :valor_suelo, :string
    field :valor_unitario_suelo, :string

    timestamps()
  end

  @doc false
  def changeset(property, attrs) do
    property
    |> cast(attrs, [:fid, :call_numero, :codigo_postal, :colonia_predio, :superficie_terreno, :superficie_construccion, :uso_construccion, :clave_rango_nivel, :anio_construccion, :instalaciones_especiales, :valor_unitario_suelo, :valor_suelo, :clave_valor_unitario_suelo, :colonia_cumpliemiento, :alcaldia_cumplimiento, :subsidio])
    |> validate_required([:fid, :call_numero, :codigo_postal, :colonia_predio, :superficie_terreno, :superficie_construccion, :uso_construccion, :clave_rango_nivel, :anio_construccion, :instalaciones_especiales, :valor_unitario_suelo, :valor_suelo, :clave_valor_unitario_suelo, :colonia_cumpliemiento, :alcaldia_cumplimiento, :subsidio])
  end
end
