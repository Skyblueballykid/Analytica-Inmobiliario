import React, { Component } from "react";
import http from "./http-common";

class API {
  getAll(params) {
    return http.get("/properties", { params });
  }

  // other CRUD methods
}

export default new API();