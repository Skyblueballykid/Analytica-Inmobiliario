defmodule Backend.Properties do
  @moduledoc """
  The Properties context.
  """

  import Ecto.Query, warn: false
  alias Backend.Repo

  alias Backend.Properties.Property

  @doc """
  Returns the list of properties. Paginate using Scrivener.Ecto. 

  ## Examples

      iex> list_properties()
      [%Property{}, ...]

  """
  def list_properties(params) do
    Property
    |> order_by(desc: :id)
    |> Repo.paginate(params)
  end


  def list_properties_all do
      Repo.all(Property)
  end


  @doc """
  Gets a single property.

  Raises `Ecto.NoResultsError` if the Property does not exist.

  ## Examples

      iex> get_property!(123)
      %Property{}

      iex> get_property!(456)
      ** (Ecto.NoResultsError)

  """
  def get_property(id), do: Repo.get(Property, id)

  def get_property_by_fid(fid), do: Repo.get_by(Property, fid: fid)


  def get_property_by_name(call_numero), do: Repo.get_by(Property, call_numero: call_numero)


  def get_property_by_name_where(call_numero) do
    query = from p in "properties",
    where: p.call_numero == ^call_numero,
    select: {p.call_numero, p.id, p.alcaldia_cumplimiento, p.valor_unitario_suelo, p.valor_suelo}
    Repo.all(query)
  end

  @doc """
  Creates a property.

  ## Examples

      iex> create_property(%{field: value})
      {:ok, %Property{}}

      iex> create_property(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_property(attrs \\ %{}) do
    %Property{}
    |> Property.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a property.

  ## Examples

      iex> update_property(property, %{field: new_value})
      {:ok, %Property{}}

      iex> update_property(property, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_property(%Property{} = property, attrs) do
    property
    |> Property.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a property.

  ## Examples

      iex> delete_property(property)
      {:ok, %Property{}}

      iex> delete_property(property)
      {:error, %Ecto.Changeset{}}

  """
  def delete_property(%Property{} = property) do
    Repo.delete(property)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking property changes.

  ## Examples

      iex> change_property(property)
      %Ecto.Changeset{data: %Property{}}

  """
  def change_property(%Property{} = property, attrs \\ %{}) do
    Property.changeset(property, attrs)
  end

end
