defmodule Backend.Filters do
import Ecto.Query
import Ecto.Repo

alias Backend.Repo
alias Backend.Properties.Property

# Repo.get_by(Property, id: "1")

# Repo.get_by(Property, fid: "1156091.0")


# query = from p in Property, select: p.id
# Repo.all(query)

# query = from p in Property, select: p.fid
# Repo.all(query)

# query = from p in Property, where: p.id> 1000000, select: p.fid
# Repo.all(query)

# query = from p in Property, where: p.id> 2400000, select: p.id
# Repo.all(query)

# query = from p in Property, where: p.alcaldia_cumplimiento=="XOCHIMILCO", select: p.valor_suelo
# Repo.all(query) |> Enum.count()
# # 67182

# query = from p in Property, where: p.alcaldia_cumplimiento=="XOCHIMILCO" or p.alcaldia_cumplimiento== "MIGUEL HIDALGO", select: p.alcaldia_cumplimiento
# Repo.all(query) |> Enum.count()
# 254446

# TYPE ERROR
# query = from p in Property, where: p.valor_suelo>4000, select: p.id

# This works but doesn't filter. Need to set types
# query = from p in Property, where: p.valor_suelo>"400000", select: p.valor_suelo

@doc """
################
### GROUP BY ###
################


##########ALCALDIA CUMPLIMIENTO############
# query = from(p in Property,
#     group_by: p.alcaldia_cumplimiento,
#     select: {p.alcaldia_cumplimiento, count(p.id)}
# )
# Repo.all(query)
"""

'''
# [
#   {"ALVARO OBREGON", 180236},
#   {"AZCAPOTZALCO", 117590},
#   {"BENITO JUAREZ", 251934},
#   {"COYOACAN", 173295},
#   {"CUAJIMALPA DE MORELOS", 69131},
#   {"CUAUHTEMOC", 257316},
#   {"GUSTAVO A. MADERO", 258038},
#   {"IZTACALCO", 103854},
#   {"IZTAPALAPA", 389890},
#   {"MAGDALENA CONTRERAS", 42969},
#   {"MIGUEL HIDALGO", 187264},
#   {"MILPA ALTA", 13071},
#   {"TLAHUAC", 74768},
#   {"TLALPAN", 168260},
#   {"VENUSTIANO CARRANZA", 123573},
#   {"XOCHIMILCO", 67182}
# ]
'''

@doc """
############CODIGO POSTAL################
# query = from(p in Property,
#     group_by: p.codigo_postal,
#     select: {p.codigo_postal, count(p.id)}
# )
# Repo.all(query)
"""

'''
# [
#   {"0", 7570},
#   {"1", 6},
#   {"10", 1},
#   {"1000", 2314},
#   {"10000", 1331},
#   {"10001", 1},
#   {"10010", 1732},
#   {"10016", 3},
#   {"10020", 979},
#   {"10030", 29},
#   {"10040", 1},
#   {"10042", 1},
#   {"10050", 1},
#   {"1009", 1},
#   {"10090", 1},
#   {"1010", 2172},
#   {"10100", 2741},
#   {"10101", 1},
#   {"10103", 11},
#   {"10110", 78},
#   {"10120", 4},
#   {"10130", 94},
#   {"1017", 1},
#   {"1018", 20},
#   {"1020", 7498},
#   {"10200", 5732},
#   {"10201", 1},
#   {"10210", 23},
#   {"1030", 3565},
#   {"10300", 2972},
#   {"10304", 1},
#   {"10309", 1},
#   {"10310", 189},
#   {"10320", 1142},
#   {"10330", 1543},
#   {"10336", 1},
#   {"10340", 890},
#   {"10350", 1239},
#   {"10360", 1132},
#   {"10368", 43},
#   {"10369", 520},
#   {"10370", 521},
#   {"10378", 51},
#   {"10379", 159},
#   {"10380", 643},
#   {"1039", 195},
#   {"1040", 882},
#   {"10400", 1969},
#   {"1049", ...},
#   {...},
#   ...
# ]
'''

@doc """
########COLONIA PREDIO########

# query = from(p in Property,
#             group_by: p.colonia_predio,
#             select: {p.colonia_predio, count(p.id)}
# )
# Repo.all(query)
"""

# [
#   {"#araje San Juan", 1},
#   {"(DEPORTIVO) LEYES DE REFORMA 3RA. SECC", 1},
#   {"(huitzico) Campestre Potrero", 1},
#   {"(san Bernabe Ocotepec) las Cruces", 1},
#   {"(tlalpan) la Fama", 1},
#   {"(zedec) Campestre Potrero", 5},
#   {"(zedec) Lomas de la Estancia", 1},
#   {",artires de Rio Blanco", 1},
#   {",gertrudis Sanchez", 1},
#   {"-", 7408},
#   {"-.M.Nacional", 4},
#   {"-Ampliacion Isidro Fabela", 1},
#   {"-Ex  Rosario", 1},
#   {"-Ex- Hacienda de Coapa", 1},
#   {"-Lorenzo Boturini", 1},
#   {"-PANTITLAN", 1},
#   {".", 48},
#   {". Miguel Hidalgo 2da Seccion", 1},
#   {". San Lorenzo Tezonco", 1},
#   {". Sta. Martha Acatitla", 1},
#   {".....", 1},
#   {".gertrudis Sanchez", 1},
#   {".h.vicente Guerrero", 1},
#   {".san Lorenzo T.", 1},
#   {"/m.///uj/m", 1},
#   {"/ui/./i//u,j", 1},
#   {"0", 28},
#   {"00000000000     VA", 1},
#   {"000san Miguel Ajusco", 1},
#   {"0505 Va", 3},
#   {"09227abeza de Juarez Iii", 1},
#   {"0brera", 12},
#   {"0brero Popular", 2},
#   {"0jardin Balbuena", 1},
#   {"0livar Del Conde 1ra Secc", 3},
#   {"0livar del C0nde", 20},
#   {"0livar del Conde", 1},
#   {"0livar del Conde 1a.secc.", 2},
#   {"0sidro Fabela", 1},
#   {"0xtopulco Universidad", 1},
#   {"1", 2},
#   {"1 AMPLIACION SANTIAGO ACAHUALTEPEC", 1},
#   {"1 Amp Presidentes", 1},
#   {"1 Ampl Preseidentes", 1},
#   {"1 Ampl Presidentes", 2},
#   {"1 Ampl Santiago Acahualtepec", 1},
#   {"1 Ampl. Jalalpa Tepito", 1},
#   {"1 Ampl. Presidentes", 16},
#   {"1 Ampl. Santiago Acahualtepec", ...},
#   {...},
#   ...
# ]

@doc """
###########colonia_cumpliemiento############
# query = from(p in Property,
#     group_by: p.colonia_cumpliemiento,
#     select: {p.colonia_cumpliemiento, count(p.id)}
# )
# Repo.all(query)
"""


# [
#   {"10 DE ABRIL", 131},
#   {"10 DE MAYO", 1096},
#   {"12 DE DICIEMBRE", 538},
#   {"15 DE AGOSTO", 491},
#   {"16 DE SEPTIEMBRE", 419},
#   {"1RA AMPLIACION PRESIDENTES", 548},
#   {"1RA SECCION CAĂŻÂżÂœADA", 206},
#   {"1RA VICTORIA", 834},
#   {"1RO DE MAYO", 41},
#   {"1o DE MAYO", 425},
#   {"2 DE OCTUBRE", 718},
#   {"20 DE NOVIEMBRE", 2421},
#   {"24 DE ABRIL", 126},
#   {"25 DE JULIO", 594},
#   {"2DA AMPLIACION PRESIDENTES", 735},
#   {"2DA DEL MORAL DEL PUEBLO TETELPAN", 209},
#   {"2DA SECCION CAĂŻÂżÂœADA", 116},
#   {"2DO REACOMODO TLACUITLAPA", 814},
#   {"4 ARBOLES", 1724},
#   {"5 DE MAYO", 762},
#   {"5ïżœ TRAMO 20 DE NOVIEMBRE", 20},
#   {"5ĂŻÂżÂœ TRAMO 20 DE NOVIEMBRE", 1806},
#   {"6 DE JUNIO", 405},
#   {"7 DE JULIO", 1025},
#   {"7 DE NOVIEMBRE", 889},
#   {"8 DE AGOSTO", 1754},
#   {"A M S A", 221},
#   {"AARON SAENZ", 114},
#   {"ABDIAS GARCIA SOTO", 293},
#   {"ABRAHAM M GONZALEZ", 72},
#   {"ACACIAS", 3611},
#   {"ACTIPAN", 2348},
#   {"ACUEDUCTO", 243},
#   {"ACUEDUCTO DE GUADALUPE", 4274},
#   {"ACUILOTLA", 96},
#   {"ADOLFO LOPEZ MATEOS", 2484},
#   {"ADOLFO RUIZ CORTINEZ", 1920},
#   {"AERONAUTICA MILITAR", 744},
#   {"AGRICOLA METROPOLITANA", 953},
#   {"AGRICOLA ORIENTAL", 23084},
#   {"AGRICOLA PANTITLAN", 23753},
#   {"AGRICULTURA", 1392},
#   {"AGUA BENDITA", 29},
#   {"AGUILERA", 333},
#   {"AHUATENCO", 100},
#   {"AHUEHUETES", 632},
#   {"AHUEHUETES ANAHUAC", 621},
#   {"AJUSCO", 4574},
#   {"ALAMOS", ...},
#   {...},
#   ...
# ]


@doc """
query = from(p in Property,
    group_by: p.anio_construccion,
    select: {p.anio_construccion, count(p.id)}
)
Repo.all(query)
"""


# [
#   {"0.0", 428},
#   {"1.0", 1},
#   {"1190.0", 4},
#   {"1191.0", 3},
#   {"1654.0", 1},
#   {"1712.0", 1},
#   {"1777.0", 8},
#   {"1816.0", 1},
#   {"1853.0", 2},
#   {"1864.0", 6},
#   {"1867.0", 6},
#   {"1882.0", 1},
#   {"1887.0", 1},
#   {"1896.0", 2},
#   {"1898.0", 1},
#   {"1900.0", 2},
#   {"1902.0", 1},
#   {"1903.0", 3},
#   {"1904.0", 4},
#   {"1905.0", 4},
#   {"1906.0", 5},
#   {"1907.0", 2},
#   {"1908.0", 4},
#   {"1909.0", 8},
#   {"1910.0", 7},
#   {"1911.0", 1},
#   {"1912.0", 14},
#   {"1913.0", 12},
#   {"1914.0", 15},
#   {"1915.0", 16},
#   {"1916.0", 24},
#   {"1917.0", 4},
#   {"1918.0", 12},
#   {"1919.0", 5},
#   {"1920.0", 104},
#   {"1921.0", 25},
#   {"1922.0", 19},
#   {"1923.0", 10},
#   {"1924.0", 7},
#   {"1925.0", 22},
#   {"1926.0", 6},
#   {"1927.0", 13},
#   {"1928.0", 17},
#   {"1929.0", 61},
#   {"1930.0", 88},
#   {"1931.0", 55},
#   {"1932.0", 78},
#   {"1933.0", 174},
#   {"1934.0", ...},
#   {...},
#   ...
# ]

end
