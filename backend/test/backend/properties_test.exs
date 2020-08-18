defmodule Backend.PropertiesTest do
  use Backend.DataCase

  alias Backend.Properties

  describe "properties" do
    alias Backend.Properties.Property

    @valid_attrs %{alcaldia_cumplimiento: "some alcaldia_cumplimiento", anio_construccion: "some anio_construccion", call_numero: "some call_numero", clave_rango_nivel: "some clave_rango_nivel", clave_valor_unitario_suelo: "some clave_valor_unitario_suelo", codigo_postal: "some codigo_postal", colonia_cumpliemiento: "some colonia_cumpliemiento", colonia_predio: "some colonia_predio", fid: "some fid", instalaciones_especiales: "some instalaciones_especiales", subsidio: "some subsidio", superficie_construccion: "some superficie_construccion", superficie_terreno: "some superficie_terreno", uso_construccion: "some uso_construccion", valor_suelo: "some valor_suelo", valor_unitario_suelo: "some valor_unitario_suelo"}
    @update_attrs %{alcaldia_cumplimiento: "some updated alcaldia_cumplimiento", anio_construccion: "some updated anio_construccion", call_numero: "some updated call_numero", clave_rango_nivel: "some updated clave_rango_nivel", clave_valor_unitario_suelo: "some updated clave_valor_unitario_suelo", codigo_postal: "some updated codigo_postal", colonia_cumpliemiento: "some updated colonia_cumpliemiento", colonia_predio: "some updated colonia_predio", fid: "some updated fid", instalaciones_especiales: "some updated instalaciones_especiales", subsidio: "some updated subsidio", superficie_construccion: "some updated superficie_construccion", superficie_terreno: "some updated superficie_terreno", uso_construccion: "some updated uso_construccion", valor_suelo: "some updated valor_suelo", valor_unitario_suelo: "some updated valor_unitario_suelo"}
    @invalid_attrs %{alcaldia_cumplimiento: nil, anio_construccion: nil, call_numero: nil, clave_rango_nivel: nil, clave_valor_unitario_suelo: nil, codigo_postal: nil, colonia_cumpliemiento: nil, colonia_predio: nil, fid: nil, instalaciones_especiales: nil, subsidio: nil, superficie_construccion: nil, superficie_terreno: nil, uso_construccion: nil, valor_suelo: nil, valor_unitario_suelo: nil}

    def property_fixture(attrs \\ %{}) do
      {:ok, property} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Properties.create_property()

      property
    end

    test "list_properties/0 returns all properties" do
      property = property_fixture()
      assert Properties.list_properties() == [property]
    end

    test "get_property!/1 returns the property with given id" do
      property = property_fixture()
      assert Properties.get_property!(property.id) == property
    end

    test "create_property/1 with valid data creates a property" do
      assert {:ok, %Property{} = property} = Properties.create_property(@valid_attrs)
      assert property.alcaldia_cumplimiento == "some alcaldia_cumplimiento"
      assert property.anio_construccion == "some anio_construccion"
      assert property.call_numero == "some call_numero"
      assert property.clave_rango_nivel == "some clave_rango_nivel"
      assert property.clave_valor_unitario_suelo == "some clave_valor_unitario_suelo"
      assert property.codigo_postal == "some codigo_postal"
      assert property.colonia_cumpliemiento == "some colonia_cumpliemiento"
      assert property.colonia_predio == "some colonia_predio"
      assert property.fid == "some fid"
      assert property.instalaciones_especiales == "some instalaciones_especiales"
      assert property.subsidio == "some subsidio"
      assert property.superficie_construccion == "some superficie_construccion"
      assert property.superficie_terreno == "some superficie_terreno"
      assert property.uso_construccion == "some uso_construccion"
      assert property.valor_suelo == "some valor_suelo"
      assert property.valor_unitario_suelo == "some valor_unitario_suelo"
    end

    test "create_property/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Properties.create_property(@invalid_attrs)
    end

    test "update_property/2 with valid data updates the property" do
      property = property_fixture()
      assert {:ok, %Property{} = property} = Properties.update_property(property, @update_attrs)
      assert property.alcaldia_cumplimiento == "some updated alcaldia_cumplimiento"
      assert property.anio_construccion == "some updated anio_construccion"
      assert property.call_numero == "some updated call_numero"
      assert property.clave_rango_nivel == "some updated clave_rango_nivel"
      assert property.clave_valor_unitario_suelo == "some updated clave_valor_unitario_suelo"
      assert property.codigo_postal == "some updated codigo_postal"
      assert property.colonia_cumpliemiento == "some updated colonia_cumpliemiento"
      assert property.colonia_predio == "some updated colonia_predio"
      assert property.fid == "some updated fid"
      assert property.instalaciones_especiales == "some updated instalaciones_especiales"
      assert property.subsidio == "some updated subsidio"
      assert property.superficie_construccion == "some updated superficie_construccion"
      assert property.superficie_terreno == "some updated superficie_terreno"
      assert property.uso_construccion == "some updated uso_construccion"
      assert property.valor_suelo == "some updated valor_suelo"
      assert property.valor_unitario_suelo == "some updated valor_unitario_suelo"
    end

    test "update_property/2 with invalid data returns error changeset" do
      property = property_fixture()
      assert {:error, %Ecto.Changeset{}} = Properties.update_property(property, @invalid_attrs)
      assert property == Properties.get_property!(property.id)
    end

    test "delete_property/1 deletes the property" do
      property = property_fixture()
      assert {:ok, %Property{}} = Properties.delete_property(property)
      assert_raise Ecto.NoResultsError, fn -> Properties.get_property!(property.id) end
    end

    test "change_property/1 returns a property changeset" do
      property = property_fixture()
      assert %Ecto.Changeset{} = Properties.change_property(property)
    end
  end
end
