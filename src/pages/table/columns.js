const COLUMNS = [
    {
      title: "Alcaldia",
      dataIndex: "alcaldia_cumplimiento",
      key: "alcaldia_cumplimiento",
      ...this.getColumnSearchProps('alcaldia_cumplimiento'),
    },
    {
      title: "Calle",
      dataIndex: "call_numero",
      key: "call_numero",
      ...this.getColumnSearchProps('call_numero'),
    },
    {
      title: "Codigo Postal",
      dataIndex: "codigo_postal",
      key: "codigo_postal",
      ...this.getColumnSearchProps('codigo_postal'),
    },
    {
      title: "Colonia",
      dataIndex: "colonia_cumpliemiento",
      key: "colonia_cumpliemiento",
      ...this.getColumnSearchProps('colonia_cumpliemiento'),
    },
    {
      title: "Superficie Construccion",
      dataIndex: "superficie_construccion",
      key: "superficie_construccion",
      ...this.getColumnSearchProps('superficie_construccion'),
    },
    {
      title: "Superficie Terreno",
      dataIndex: "superficie_terreno",
      key: "superficie_terreno",
      ...this.getColumnSearchProps('superficie_terreno'),
    },
    {
      title: "Valor Suelo",
      dataIndex: "valor_suelo",
      key: "valor_suelo",
      ...this.getColumnSearchProps('valor_suelo'),
    },
    {
      title: "Valor Unitario Suelo",
      dataIndex: "valor_unitario_suelo",
      key: "valor_unitario_suelo",
      ...this.getColumnSearchProps('valor_unitario_suelo'),
    }
  ];

export default COLUMNS;