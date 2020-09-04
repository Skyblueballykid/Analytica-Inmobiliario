defmodule BackendWeb.PropertyController do
  use BackendWeb, :controller
  use Filterable.Phoenix.Controller

  import Ecto.Query

  alias Backend.Properties
  alias Backend.Properties.Property
  alias Backend.Repo

  action_fallback BackendWeb.FallbackController



    def filter_by_alcaldia(query) do
        from p in Property,
          group_by: p.alcaldia_cumplimiento,
          select: %{:alcaldia_cumplimiento=>p.alcaldia_cumplimiento,:count=> count(p.alcaldia_cumplimiento)}
    end

    def filter_alcaldia(conn, _params) do
    properties = Properties
                  |> filter_by_alcaldia()
                  |> Repo.all()
    render(conn, "alcaldia.json", properties: properties)
    end


    def filter_by_codigo(query) do
        from p in Property,
          group_by: p.codigo_postal,
          select: %{:codigo_postal=> p.codigo_postal, :count=> count(p.codigo_postal)}
    end

    def filter_codigo(conn, _params) do
    properties = Properties
                  |> filter_by_codigo()
                  |> Repo.all()
                  |> Enum.sort()
    render(conn, "codigo.json", properties: properties)
    end


    def filter_by_colonia(query) do
        from p in Property,
            group_by: p.colonia_predio,
            select: %{:colonia_predio=> p.colonia_predio, :count=> count(p.id)}
    end

    def filter_colonia(conn, _params) do
    properties = Properties
                  |> filter_by_colonia()
                  |> Repo.all()
    render(conn, "colonia.json", properties: properties)
    end


    def filter_by_colonia_cumpliemiento(query) do
        from p in Property,
            group_by: p.colonia_cumpliemiento,
            select: %{:colonia_cumpliemiento=> p.colonia_cumpliemiento, :count=> count(p.id)}
    end

    def filter_colonia_cumpliemiento(conn, _params) do
    properties = Properties
                  |> filter_by_colonia_cumpliemiento()
                  |> Repo.all()
    render(conn, "colonia_cumpliemiento.json", properties: properties)
    end

    def filter_by_anio(query) do
        from p in Property,
            group_by: p.anio_construccion,
            select: %{:anio_construccion=> p.anio_construccion, :count=> count(p.id)}
    end

    def filter_anio(conn, _params) do
    properties = Properties
                  |> filter_by_anio()
                  |> Repo.all()
    render(conn, "anio.json", properties: properties)
    end


  def index(conn, params) do
    properties = Properties.list_properties(params)
    render(conn, "index.json", properties: properties)
  end

  def create(conn, %{"property" => property_params}) do
    with {:ok, %Property{} = property} <- Properties.create_property(property_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.property_path(conn, :show, property))
      |> render("show.json", property: property)
    end
  end

  def show(conn, %{"id" => id}) do
    property = Properties.get_property!(id)
    render(conn, "show.json", property: property)
  end


  def update(conn, %{"id" => id, "property" => property_params}) do
    property = Properties.get_property!(id)

    with {:ok, %Property{} = property} <- Properties.update_property(property, property_params) do
      render(conn, "show.json", property: property)
    end
  end

  def delete(conn, %{"id" => id}) do
    property = Properties.get_property!(id)

    with {:ok, %Property{}} <- Properties.delete_property(property) do
      send_resp(conn, :no_content, "")
    end
  end
end
