defmodule BackendWeb.Api.Schema do
    use Absinthe.Schema

    alias BackendWeb.PropertyResolver

    @desc "A property in CDMX"
    object :property do
    field :id, non_null(:id)
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
    end


    query do
    @desc "Get all properties"
    field :all_properties, non_null(list_of(:property)) do
        resolve(&PropertyResolver.all_properties/3)
    end

    @desc "Get some properties"
    field :some_properties, non_null(list_of(:property)) do
        resolve(&PropertyResolver.some_properties/3)
    end

    @desc "Get one property"
    field :get_property, :property do
        arg(:id, non_null(:id))
        resolve(&PropertyResolver.get_property/2)
    end
    

    @desc "Filter by Codigo Postal"
    field :filter_codigo, non_null(list_of(:property)) do
        resolve(&PropertyResolver.filter_codigo/3)
    end

    @desc "Simple Hello World"
    field :hello, :string do
        resolve fn _, _ ->
            {:ok, "Hello World!"}
        end
    end

    # Get property by ID
    # {
    # property(id: "1") {
    #     id
    #     callNumero
    # }
    # }
    end
end