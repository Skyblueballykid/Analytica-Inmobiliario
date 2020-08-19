
-- ADD INDEX TO IMPORTANT COLUMNS???
-- Successfully run. Total query runtime: 7 secs 258 msec.
-- 1543 rows affected.
-- SELECT * FROM public.properties
-- WHERE codigo_postal = '16080';


-- Successfully run. Total query runtime: 3 secs 248 msec.
-- 2478371 rows affected.
-- select codigo_postal FROM public.properties;


-- Successfully run. Total query runtime: 9 secs 285 msec.
-- 2478371 rows affected.
-- select * FROM public.properties;

--NEED TO EXPLICITLY CAST VALOR VARIABLE OR 
-- SET THE COLUMN TYPE AS NUMERIC INSTEAD OF VARCHAR???
-- select * FROM public.properties
-- WHERE codigo_postal = '16080' AND valor_unitario_suelo > '10000000';

-- fid, call_numero, codigo_postal, 
-- colonia_predio, superficie_terreno,
-- superficie_construccion,  uso_construccion, 
-- clave_rango_nivel, anio_construccion,
-- instalaciones_especiales, valor_unitario_suelo,     
-- valor_suelo, clave_valor_unitario_suelo, 
-- colonia_cumpliemiento, alcaldia_cumplimiento,
-- subsidio

-- SELECT fid, call_numero, codigo_postal, 
-- colonia_predio, superficie_terreno,
-- superficie_construccion,  uso_construccion, 
-- clave_rango_nivel, anio_construccion,
-- instalaciones_especiales, valor_unitario_suelo,     
-- valor_suelo, clave_valor_unitario_suelo, 
-- colonia_cumpliemiento, alcaldia_cumplimiento,
-- subsidio
-- FROM public.properties

-- Successfully run. Total query runtime: 1 secs 494 msec.
-- 1434 rows affected.
-- SELECT colonia_cumpliemiento
-- FROM public.properties
-- GROUP BY colonia_cumpliemiento

-- SELECT * FROM public.properties

SELECT codigo_postal
FROM public.properties
GROUP BY codigo_postal


