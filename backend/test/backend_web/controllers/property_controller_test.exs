defmodule BackendWeb.PropertyControllerTest do
  use BackendWeb.ConnCase

  alias Backend.Properties
  alias Backend.Properties.Property

  @create_attrs %{
     : "some  ",
    alcaldia_cumplimiento: "some alcaldia_cumplimiento",
    anio_construccion: "some anio_construccion",
    call_numero: "some call_numero",
    clave_rango_nivel: "some clave_rango_nivel",
    clave_valor_unitario_suelo: "some clave_valor_unitario_suelo",
    codigo_postal: "some codigo_postal",
    colonia_cumpliemiento: "some colonia_cumpliemiento",
    colonia_predio: "some colonia_predio",
    fid: "some fid",
    instalaciones_especiales: "some instalaciones_especiales",
    subsidio: "some subsidio",
    superficie_construccion: "some superficie_construccion",
    superficie_terreno: "some superficie_terreno",
    uso_construccion: "some uso_construccion",
    valor_suelo: "some valor_suelo",
    valor_unitario_suelo: "some valor_unitario_suelo"
  }
  @update_attrs %{
     : "some updated  ",
    alcaldia_cumplimiento: "some updated alcaldia_cumplimiento",
    anio_construccion: "some updated anio_construccion",
    call_numero: "some updated call_numero",
    clave_rango_nivel: "some updated clave_rango_nivel",
    clave_valor_unitario_suelo: "some updated clave_valor_unitario_suelo",
    codigo_postal: "some updated codigo_postal",
    colonia_cumpliemiento: "some updated colonia_cumpliemiento",
    colonia_predio: "some updated colonia_predio",
    fid: "some updated fid",
    instalaciones_especiales: "some updated instalaciones_especiales",
    subsidio: "some updated subsidio",
    superficie_construccion: "some updated superficie_construccion",
    superficie_terreno: "some updated superficie_terreno",
    uso_construccion: "some updated uso_construccion",
    valor_suelo: "some updated valor_suelo",
    valor_unitario_suelo: "some updated valor_unitario_suelo"
  }
  @invalid_attrs %{" ": nil, alcaldia_cumplimiento: nil, anio_construccion: nil, call_numero: nil, clave_rango_nivel: nil, clave_valor_unitario_suelo: nil, codigo_postal: nil, colonia_cumpliemiento: nil, colonia_predio: nil, fid: nil, instalaciones_especiales: nil, subsidio: nil, superficie_construccion: nil, superficie_terreno: nil, uso_construccion: nil, valor_suelo: nil, valor_unitario_suelo: nil}

  def fixture(:property) do
    {:ok, property} = Properties.create_property(@create_attrs)
    property
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all properties", %{conn: conn} do
      conn = get(conn, Routes.property_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create property" do
    test "renders property when data is valid", %{conn: conn} do
      conn = post(conn, Routes.property_path(conn, :create), property: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.property_path(conn, :show, id))

      assert %{
               "id" => id,
               " " => "some  ",
               "alcaldia_cumplimiento" => "some alcaldia_cumplimiento",
               "anio_construccion" => "some anio_construccion",
               "call_numero" => "some call_numero",
               "clave_rango_nivel" => "some clave_rango_nivel",
               "clave_valor_unitario_suelo" => "some clave_valor_unitario_suelo",
               "codigo_postal" => "some codigo_postal",
               "colonia_cumpliemiento" => "some colonia_cumpliemiento",
               "colonia_predio" => "some colonia_predio",
               "fid" => "some fid",
               "instalaciones_especiales" => "some instalaciones_especiales",
               "subsidio" => "some subsidio",
               "superficie_construccion" => "some superficie_construccion",
               "superficie_terreno" => "some superficie_terreno",
               "uso_construccion" => "some uso_construccion",
               "valor_suelo" => "some valor_suelo",
               "valor_unitario_suelo" => "some valor_unitario_suelo"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.property_path(conn, :create), property: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update property" do
    setup [:create_property]

    test "renders property when data is valid", %{conn: conn, property: %Property{id: id} = property} do
      conn = put(conn, Routes.property_path(conn, :update, property), property: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.property_path(conn, :show, id))

      assert %{
               "id" => id,
               " " => "some updated  ",
               "alcaldia_cumplimiento" => "some updated alcaldia_cumplimiento",
               "anio_construccion" => "some updated anio_construccion",
               "call_numero" => "some updated call_numero",
               "clave_rango_nivel" => "some updated clave_rango_nivel",
               "clave_valor_unitario_suelo" => "some updated clave_valor_unitario_suelo",
               "codigo_postal" => "some updated codigo_postal",
               "colonia_cumpliemiento" => "some updated colonia_cumpliemiento",
               "colonia_predio" => "some updated colonia_predio",
               "fid" => "some updated fid",
               "instalaciones_especiales" => "some updated instalaciones_especiales",
               "subsidio" => "some updated subsidio",
               "superficie_construccion" => "some updated superficie_construccion",
               "superficie_terreno" => "some updated superficie_terreno",
               "uso_construccion" => "some updated uso_construccion",
               "valor_suelo" => "some updated valor_suelo",
               "valor_unitario_suelo" => "some updated valor_unitario_suelo"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, property: property} do
      conn = put(conn, Routes.property_path(conn, :update, property), property: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete property" do
    setup [:create_property]

    test "deletes chosen property", %{conn: conn, property: property} do
      conn = delete(conn, Routes.property_path(conn, :delete, property))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.property_path(conn, :show, property))
      end
    end
  end

  defp create_property(_) do
    property = fixture(:property)
    %{property: property}
  end
end
