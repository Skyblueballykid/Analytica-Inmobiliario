defmodule BackendWeb.PropertyController do
  use BackendWeb, :controller
  use Filterable.Phoenix.Controller

  import Ecto.Query

  alias Backend.Properties
  alias Backend.Properties.Property
  alias Backend.Repo

  action_fallback BackendWeb.FallbackController


  # filterable do
  #   @ options param: :q
  #   filter codigo_postal(query, value, _conn) do
  #     query |> where(codigo_postal: ^value)
  #   end
  # end

  # def index(conn, params) do
  #   {query, filter_values} = apply_filters!(Property, conn)
  #   properties = Properties.list_properties()
  #   render(conn, "index.json", properties: Repo.all(properties), meta: filter_values)
  # end

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


  def index(conn, _params) do
    properties = Properties.list_properties()
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
