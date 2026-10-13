# Contexto técnico: TrackFlow

## Estado del monorepo

El repositorio parte de una plantilla de monorepo con documentación y directorios por responsabilidad. Actualmente existen estas áreas principales:

- `.devcontainer/`: configuración de Codespaces y script de post-creación.
- `uis/website/`: sitio corporativo público de TrackFlow.
- `uis/backoffice/`: dashboard interno de operaciones, limitado a una demostración con datos ficticios.
- `services/`: solo contiene la guía; no hay una API o worker implementado.
- `agents/`: incluye `_template/` y `tools/`; no hay un agente de TrackFlow implementado.
- `skills/`: incluye `_template/`, `code-review/`, `data-analysis/` y `research/`.
- `data/`: `raw/`, `pipelines/`, `process/` y `eval/`.
- `packages/shared/`: paquete de tipos compartidos y su fuente `types/index.ts`.
- También existen `docs/`, `infra/`, `internal/`, `mcps/`, `scripts/`, `shared/` y `workflows/`, con guías de la plantilla.

No hay un runner de workspace JavaScript en la raíz. El `package.json` de `@repo/shared-types` es privado, no define scripts y no configura por sí mismo un workspace.

## Tecnologías y configuraciones confirmadas

- **Interfaces:** tanto `uis/website/` como `uis/backoffice/` son aplicaciones independientes de React + Vite + TypeScript. Cada una mantiene su propio `package.json` y `pnpm-lock.yaml`; no necesitan un workspace JavaScript en la raíz.
- **Rutas y puertos:** ambas aplicaciones se sirven desde `/`. El sitio público usa el puerto 3000 y el backoffice el 3001; los scripts de desarrollo y preview se definen en los manifiestos locales de cada aplicación.
- **Backoffice de demostración:** los registros operativos ficticios se mantienen en módulos de datos locales separados de los componentes de UI. Las búsquedas y los filtros se ejecutan solo en el cliente. El dashboard distingue los hechos documentados de TrackFlow de sus valores operativos simulados.
- **Límites actuales de las interfaces:** no hay backend operativo, autenticación real, almacenamiento persistente ni integraciones externas con sistemas de negocio. El sitio público es informativo y no ofrece tracking, inventario, integraciones de transportistas ni formulario de contacto funcional.
- **Validación configurada:** los scripts `pnpm build` de ambas aplicaciones ejecutan `tsc --noEmit` antes de generar los recursos de producción con Vite. Sus manifiestos no configuran scripts de lint o test.
- **TypeScript compartido:** hay un archivo de tipos compartidos y metadatos de paquete en `packages/shared/`; no forman un runner de workspace ni una dependencia compartida entre las aplicaciones.
- **Python:** el contenedor configura una ruta de intérprete Python; existen scripts Python en la plantilla. No se ha implementado el backend de TrackFlow.
- **Devcontainer:** usa `mcr.microsoft.com/devcontainers/universal:2`, configura extensiones de VS Code y reenvía los puertos 3000, 8000 y 5678.
- El puerto 3001 del backoffice no está incluido explícitamente en `forwardPorts` en `.devcontainer/devcontainer.json`. La configuración del devcontainer no se ha cambiado como parte de la implementación de las interfaces.
- **Script de post-creación:** intenta habilitar Corepack y `pnpm`, actualizar `pip`, instalar `uv` y ejecutar `uv sync`. Son pasos del entorno de desarrollo; no acreditan que el monorepo tenga un workspace pnpm o un proyecto Python configurado en la raíz.
- No hay `package.json` raíz, archivo de workspace pnpm ni manifiesto Python de dependencias en la raíz. Los comandos de instalación, desarrollo, build y preview de las interfaces están definidos por separado en sus respectivos directorios.

## Ubicaciones de aplicaciones

- `uis/website/`: sitio informativo público, en inglés, sobre TrackFlow, sus servicios documentados y su contexto empresarial.
- `uis/backoffice/`: interfaz interna de demostración con secciones de operaciones, pedidos, almacenes, coordinación de transportistas y devoluciones. No es un sistema de operaciones conectado.
- `services/`: servicios backend de soporte. No hay una API o worker de TrackFlow implementado. La guía de la plantilla recomienda una API centralizada con FastAPI y desaconseja empezar con muchos microservicios; esto sigue siendo una recomendación, no una decisión arquitectónica aprobada ni un servicio implementado.

## Restricciones e integración del dominio

El briefing describe dos almacenes con sistemas de gestión diferentes (software comercial en uno y una hoja de cálculo avanzada en otro), un ERP corporativo antiguo, scripts de Python punto a punto sin documentación y bases de datos alojadas en dos proveedores cloud. Las integraciones existentes no están bien documentadas y no hay telemetría centralizada. La mayor parte del seguimiento de envíos consulta portales de transportistas por separado; el briefing menciona ocho transportistas y plantea integrar sus datos, pero no documenta APIs, contratos ni credenciales disponibles.

El briefing caracteriza la operación transfronteriza como dos entornos regulatorios y dos stacks tecnológicos separados que hay que unificar. No concreta los requisitos regulatorios ni describe cómo se distribuyen los componentes entre los stacks; no se deben inferir obligaciones o arquitecturas específicas.

Los pedidos entrantes llegan por email en formatos distintos; inventario global, historial de rendimiento de transportistas, gestión de tickets y base de conocimiento no están consolidados según el briefing. La operación abarca dos países y dos idiomas y el servicio se describe como continuo. No se especifican políticas de acceso, modelos de datos ni acuerdos de disponibilidad técnica.

No se presuponen APIs, credenciales, esquemas, permisos, proveedores de integración ni conexiones existentes. Antes de diseñar integraciones, habrá que verificar qué sistemas y datos de prueba están realmente disponibles.

## Personalización de agentes frente a producto

`.agents/` se reserva para personalización del entorno de desarrollo asistido (por ejemplo, reglas y skills que guían herramientas o agentes de código); esa ruta no existe actualmente. `agents/` y `skills/` son directorios de producto del monorepo: la guía asigna al primero los agentes de la empresa y al segundo capacidades reutilizables del proyecto. No son rutas intercambiables.

## Decisiones técnicas abiertas

- Requisitos y aprobación de futuros servicios, autenticación y contratos de datos para cada interfaz; no están implementados.
- Cómo integrar de forma segura los sistemas de almacén, ERP, transportistas, tickets y fuentes de conocimiento, una vez verificados su disponibilidad, permisos y entornos de prueba.
- Si las interfaces compartirán componentes, tipos o infraestructura y cómo hacerlo sin añadir un runner de workspace no acordado.
- Disponibilidad real de sistemas de almacén, ERP, transportistas, tickets y fuentes de conocimiento; formatos, permisos y entornos de prueba.
- Arquitectura y tecnología de backend. FastAPI es la recomendación del README raíz, pendiente de confirmar para la implementación.
- Estrategia de persistencia, observabilidad, despliegue, seguridad y soporte bilingüe.

Estas necesidades son trabajo futuro y deben resolverse con requisitos y evidencia disponibles, no asumirse a partir de la plantilla o de los valores ficticios del backoffice. No se deben describir sistemas, integraciones o capacidades planificadas como existentes.
