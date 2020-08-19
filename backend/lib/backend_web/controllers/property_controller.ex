defmodule BackendWeb.PropertyController do
  use BackendWeb, :controller
  use Filterable.Phoenix.Controller

  import Ecto.Query

  alias Backend.Properties
  alias Backend.Properties.Property

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
