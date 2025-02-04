defmodule BackendWeb.PropertyView do
  use BackendWeb, :view
  alias BackendWeb.PropertyView

  def render("index.json", %{properties: properties}) do
    %{data: render_many(properties, PropertyView, "property.json")}
  end

  def render("show.json", %{property: property}) do
    %{data: render_one(property, PropertyView, "property.json")}
  end

  def render("property.json", %{property: property}) do
    %{id: property.id,
      fid: property.fid,
      call_numero: property.call_numero,
      codigo_postal: property.codigo_postal,
      colonia_predio: property.colonia_predio,
      superficie_terreno: property.superficie_terreno,
      superficie_construccion: property.superficie_construccion,
      uso_construccion: property.uso_construccion,
      clave_rango_nivel: property.clave_rango_nivel,
      anio_construccion: property.anio_construccion,
      instalaciones_especiales: property.instalaciones_especiales,
      valor_unitario_suelo: property.valor_unitario_suelo,
      valor_suelo: property.valor_suelo,
      clave_valor_unitario_suelo: property.clave_valor_unitario_suelo,
      colonia_cumpliemiento: property.colonia_cumpliemiento,
      alcaldia_cumplimiento: property.alcaldia_cumplimiento,
      subsidio: property.subsidio}
  end

  def render("alcaldia.json", %{properties: properties}) do
    %{data: render_many(properties, PropertyView, "alcaldia.json")}
  end

  def render("alcaldia.json", %{property: property}) do
    %{alcaldia_cumplimiento: property.alcaldia_cumplimiento,
    count: property.count}
  end

  def render("codigo.json", %{properties: properties}) do
    %{data: render_many(properties, PropertyView, "codigo.json")}
  end

  def render("codigo.json", %{property: property}) do
    %{codigo_postal: property.codigo_postal,
    count: property.count}
  end

  def render("colonia.json", %{properties: properties}) do
    %{data: render_many(properties, PropertyView, "colonia.json")}
  end

  def render("colonia.json", %{property: property}) do
    %{colonia_predio: property.colonia_predio,
    count: property.count}
  end

  def render("colonia_cumpliemiento.json", %{properties: properties}) do
    %{data: render_many(properties, PropertyView, "colonia_cumpliemiento.json")}
  end

  def render("colonia_cumpliemiento.json", %{property: property}) do
    %{colonia_cumpliemiento: property.colonia_cumpliemiento,
    count: property.count}
  end

  def render("anio.json", %{properties: properties}) do
    %{data: render_many(properties, PropertyView, "anio.json")}
  end

  def render("anio.json", %{property: property}) do
    %{anio: property.anio_construccion,
    count: property.count}
  end
end
