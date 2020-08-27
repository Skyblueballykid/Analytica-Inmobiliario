defmodule BackendWeb.PropertyResolver do
    
    # To get properties from the Repo
    alias Backend.Properties
    alias BackendWeb.PropertyController

    def all_properties(_root, _args, _info) do
        {:ok, Properties.list_properties_all()}
    end

    def get_properties(_root, %{id: id}, _info) do
    case Property.get_property!(id) do
    nil ->
        {:error, "Property ID #{id} not found"}
    property ->
        {:ok, property}
    end
    end

    def filter_codigo(_root, _args, _info) do
     {:ok, PropertyController.filter_codigo()}
     end

end