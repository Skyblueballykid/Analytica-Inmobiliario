defmodule BackendWeb.PropertyResolver do
    
    # To get properties from the Repo
    alias Backend.Properties
    alias BackendWeb.PropertyController

    def all_properties(_root, _args, _info) do
        {:ok, Properties.list_properties_all()}
    end

    def some_properties(_root, %{params: params}, _info) do
        {:ok, Properties.list_properties(params)}
    end

    def get_property(%{id: id}, _context) do
        {:ok, Properties.get_property(id)}
    end

    def filter_codigo(_root, _args, _info) do
     {:ok, PropertyController.filter_codigo()}
     end

end