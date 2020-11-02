defmodule BackendWeb.Api.Schema do
    use Absinthe.Schema

    alias BackendWeb.PropertyResolver

    @desc "A property in CDMX"
    object :property do
    field :id, :id
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
    # Times out
     @desc "Get all properties"
    field :all_properties, non_null(list_of(:property)) do
        resolve(&PropertyResolver.all_properties/3)
    end

    # Not working
    @desc "Get some properties"
    field :some_properties, non_null(list_of(:property)) do
        resolve(&PropertyResolver.some_properties/3)
    end

    # Working
    @desc "Get one property"
    field :get_property_by_id, :property do
        arg(:id, non_null(:id))
        resolve(&PropertyResolver.get_property/2)
    end

    @desc "Get one property by fid"
    field :get_property_by_fid, :property do
        arg(:fid, non_null(:string))
        resolve(&PropertyResolver.get_property_by_fid/2)
    end


    # Working
    @desc "Get one property by name"
    field :get_property_by_name, :property do
        arg(:call_numero, non_null(:string))
        resolve(&PropertyResolver.get_property_by_name/2)
    end

    # Working
    @desc "Get property by name where clause"
    field :get_property_by_name_where, list_of(:property) do
        arg(:call_numero, non_null(:string))
        resolve(&PropertyResolver.get_property_by_name_where/2)
    end
    
    # Not working, need to define objects to return
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
    # property(id: 1) {
    #     id
    #     callNumero
    # }
    # }

    # Get property by street name
#     query {
#   getPropertyByName(callNumero: "Guanabana 236") {
#     id
#     callNumero
#     alcaldiaCumplimiento
#     anioConstruccion
#     claveRangoNivel
#     codigoPostal
#     coloniaPredio
#     coloniaCumpliemiento
#     claveValorUnitarioSuelo
#     fid
#     instalacionesEspeciales
#     superficieTerreno
#     superficieConstruccion
#     valorSuelo
#     valorUnitarioSuelo
# 	}
# }
    end
end

