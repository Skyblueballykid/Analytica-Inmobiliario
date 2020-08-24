defmodule BackendWeb.Router do
  use BackendWeb, :router
  use Pow.Phoenix.Router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug CORSPlug, origin: "http://localhost:3000"
    plug :accepts, ["json"]
  end

  pipeline :protected do
    plug Pow.Plug.RequireAuthenticated,
      error_handler: Pow.Phoenix.PlugErrorHandler
  end

  scope "/" do
    pipe_through :browser

    pow_routes()
  end

  scope "/", BackendWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api" do
    pipe_through :api

    get "/properties/filter_anio", BackendWeb.PropertyController, :filter_anio
    get "/properties/filter_alcaldia", BackendWeb.PropertyController, :filter_alcaldia
    get "/properties/filter_codigo", BackendWeb.PropertyController, :filter_codigo
    get "/properties/filter_colonia", BackendWeb.PropertyController, :filter_colonia
    get "/properties/filter_colonia_cumpliemiento", BackendWeb.PropertyController, :filter_colonia_cumpliemiento
    
    resources "/properties", BackendWeb.PropertyController, except: [:new, :edit]

    get "/", Absinthe.Plug.GraphiQL, schema: BackendWeb.Api.Schema, interface: :playground
    post "/", Absinthe.Plug, schema: BackendWeb.Api.Schema
  end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser
      live_dashboard "/dashboard", metrics: BackendWeb.Telemetry
    end
  end
end
