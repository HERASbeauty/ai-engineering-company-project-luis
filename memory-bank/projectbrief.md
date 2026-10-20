# Brief del proyecto: TrackFlow

## Identidad y modelo de negocio

TrackFlow presta logística de última milla y gestión de almacenes a marcas de comercio electrónico. Almacena inventario, prepara y empaqueta pedidos, coordina su envío con transportistas y gestiona devoluciones. El servicio cubre el ciclo desde la recepción del pedido hasta su entrega o devolución.

El briefing sitúa su fundación en 2009, en Los Ángeles, y describe unos 130 empleados e ingresos anuales aproximados de 9 millones de euros. La dirección ejecutiva tiene una discrepancia de nombres en la fuente; véase «Observaciones pendientes».

## Operación geográfica y logística

La empresa opera en Estados Unidos y España, con almacenes en Los Ángeles y Zaragoza. Los equipos de operaciones, ventas y atención al cliente están distribuidos entre ambos países; la mayor parte del equipo tecnológico trabaja desde Zaragoza. La operación incluye recepción de pedidos, preparación de paquetes, coordinación de transportistas, seguimiento de entregas y logística inversa.

El briefing caracteriza esta operación transfronteriza como dos entornos regulatorios y dos stacks tecnológicos separados que TrackFlow debe unificar. No detalla los requisitos regulatorios ni la composición de cada stack.

Los dos almacenes usan sistemas distintos y no comparten una vista global del inventario. El briefing describe ocho transportistas en los dos mercados, asignación y seguimiento principalmente manuales y consultas separadas en los portales de cada transportista. No hay métricas históricas estructuradas de su rendimiento.

## Áreas y retos principales

- **Operaciones de almacén:** los pedidos llegan por correo en formatos distintos y se transcriben manualmente; el picking usa listas impresas; las discrepancias de inventario se detectan tarde. No hay visibilidad global del stock en tiempo real.
- **Última milla y transportistas:** elegir transportista, consultar tracking y gestionar incidencias como pérdidas, entregas fallidas o direcciones incorrectas requiere trabajo manual. No hay datos históricos estructurados sobre puntualidad, incidencias por ruta o coste por kilogramo.
- **Logística inversa:** las devoluciones representan entre el 18 % y el 25 % del volumen, según cliente y país. La aprobación, inspección y decisión sobre recogida, reacondicionamiento o descarte dependen de revisión humana; la inspección es subjetiva y no hay análisis consolidado de motivos o productos.
- **Experiencia del cliente (CX):** 15 agentes atienden a marcas (B2B) y consumidores finales (B2C) por correo, WhatsApp y teléfono, sin un sistema unificado de tickets ni una base de conocimiento. El briefing estima que el 80 % de las consultas podría resolverse automáticamente y señala que no hay cobertura fuera del horario de oficina.
- **Comercial y relación con clientes:** la gestión de cuentas e informes depende de hojas de cálculo y consolidaciones manuales; no hay CRM ni visibilidad del riesgo de renovación.
- **Tecnología:** conviven dos sistemas de almacén, un ERP de principios de los años 2010, scripts de Python punto a punto y bases de datos en dos proveedores cloud. Las integraciones no están bien documentadas y no existe telemetría centralizada.
- **Dirección ejecutiva:** los informes semanales se ensamblan manualmente a partir de datos de distintos sistemas; no hay una visión unificada por país y los datos pueden llegar con uno o dos días de antigüedad.

## Objetivos y oportunidades de AI Engineering

La oportunidad general es reducir la fragmentación, el trabajo repetitivo, los errores y los retrasos de información mediante sistemas e integraciones que den soporte a la operación de dos países. El briefing plantea, entre otras posibilidades, inventario unificado, ingesta automatizada de pedidos, seguimiento agregado, métricas de transportistas, gestión de devoluciones configurable, conocimiento semántico para CX, automatización de consultas y dashboards operativos y ejecutivos.

Estas son necesidades y oportunidades descritas, no funcionalidades existentes. La fuente también señala complejidad transfronteriza, dos idiomas y disponibilidad continua como consideraciones para los sistemas futuros. No se han definido aquí reglas, interfaces ni integraciones concretas.

## Foco seleccionado

La elección del estudiante prioriza **Experiencia del Cliente** y **Operaciones de Almacén**. El primer interés de automatización es responder consultas sobre seguimiento de envíos y estado de devoluciones. El foco de almacén incluye la fragmentación de inventario, la transcripción de pedidos entrantes y la visibilidad operativa.

## Visión a largo plazo

La visión es un **agente de Experiencia del Cliente** que pueda contestar consultas de seguimiento y devoluciones con información operativa actual y conocimiento interno. La idea del estudiante contempla responder casos sencillos y escalar los complejos a una persona con contexto suficiente. Para hacerlo realidad se necesitarían fuentes de datos e integraciones apropiadas; la fuente no confirma que existan hoy un sistema unificado de tracking, un sistema de tickets ni una base RAG.

### Extensión opcional, fuera de Milestone 1

Un **Customer Experience Intelligence Dashboard** podría ser una extensión futura para analizar la actividad y el rendimiento de CX. Es opcional y no forma parte del alcance de Milestone 1; no se presupone que esté implementado ni que se haya definido su diseño.

## Observaciones pendientes

El briefing presenta a Thomas Harry como fundador y CEO, y más adelante dice que Thomas dirige el negocio y los informes ejecutivos. En otra sección identifica a Daniel Espinoza como CEO y afirma que creó TrackFlow Tech. Se conserva la discrepancia sin elegir una versión como hecho definitivo.

## Fuentes del proyecto

- `CONTEXT.md`: briefing de empresa y retos por departamento.
- `company-choice.md`: selección de TrackFlow, focos de interés e idea del agente de CX.
