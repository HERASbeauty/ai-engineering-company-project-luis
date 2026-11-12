# Progreso del proyecto: TrackFlow

## Estado

Milestone 1 se integró en `main` mediante el Pull Request #1 (rama `feature/agent-memory-bank`, commit de merge `d16e88e`). Milestone 2 («Desarrollando scripts para automatizar tareas») está en curso en la rama `feature/domain-models`, creada desde `main` en ese commit. La implementación está completa y validada en local; falta el Pull Request.

## Completado

### Milestone 0 y Milestone 1

- **Milestone 0:** selección de TrackFlow documentada en `company-choice.md`.
- Banco de memoria inicial creado en `memory-bank/projectbrief.md`, `memory-bank/techContext.md` y `memory-bank/progress.md`.
- `AGENTS.md` creado en la raíz, revisado y aprobado. Contiene seis pasos ordenados antes de cada commit, exige autorización explícita para stage, commit, push y Pull Request, y define archivos protegidos, límites del monorepo y guardas específicas de TrackFlow.
- `.agents/rules/trackflow-operational-data.md` creada y revisada. Declara el alcance **ALWAYS ACTIVE** para agentes de código y establece guardas sobre la veracidad y el etiquetado de datos operativos.
- `.agents/skills/trackflow-ui-validation/SKILL.md` creada y revisada como procedimiento reutilizable para validar `uis/website/` y `uis/backoffice/`.
- **Sitio corporativo público:** aplicación React + Vite + TypeScript bajo `uis/website/`, servida en `/` por el puerto 3000. Build con TypeScript y comprobación HTTP superados; revisión visual manual reportada por el desarrollador.
- **Backoffice interno:** aplicación React + Vite + TypeScript bajo `uis/backoffice/`, servida en `/` por el puerto 3001, con cinco secciones y registros ficticios DEMO. Build con TypeScript y comprobaciones HTTP superados; revisión manual en navegador reportada por el desarrollador. No está conectado a backend, autenticación, almacenamiento persistente ni sistemas externos.
- Pull Request #1 fusionado en `main`.

### Milestone 2 (rama `feature/domain-models`)

- Fuente de requisitos: briefing de TrackFlow para Milestone 2 (`trackflow-BRIEFING`, publicado por 4Geeks en el repositorio del temario, no incluido en este repositorio).
- `src/types/models.ts`: interfaces `Product`, `Dimensions`, `Shipment`, `Destination`, `Carrier` e `InventoryMovement` y sus tipos (`ProductCategory`, `WarehouseLocation`, `ProductStatus`, `Country`, `ShipmentPriority`, `ShipmentStatus`, `MovementType`) con los nombres exactos del briefing.
- `src/utils/collections.ts`: filtros por almacén, categoría y stock bajo; ordenación por stock y por fiabilidad del transportista sin mutar el arreglo original.
- `src/utils/search.ts`: búsqueda lineal por SKU (sin distinguir mayúsculas) y por ID de envío; búsqueda binaria por peso que devuelve el índice o `-1`.
- `src/utils/transformations.ts`: coste de envío con recargo por prioridad, puntuación de transportista (0-100), selección del mejor transportista e informes (conteo por categoría, valor total de inventario, distancia media, agrupación por estado y transportistas más usados).
- `src/utils/validations.ts`: validaciones de `Product`, `Shipment` y `Carrier` según las reglas del briefing, con resultado `{ valid, errors }`.
- `src/demo.ts`: ejecuta todas las funciones con los datos de ejemplo del briefing y registros adicionales marcados como ficticios (`DEMO-SH-*` y registros inválidos).
- `package.json` y `tsconfig.json` en la raíz (aprobados por el desarrollador) con `npm run typecheck` y `npm run demo`; `.gitignore` excluye `node_modules/`. Comandos documentados en `src/README.md`.
- Validación en Codespaces: `npm run typecheck` sin errores y `npm run demo` con resultados que coinciden con las fórmulas del briefing.

## En curso

Preparación del Pull Request de Milestone 2 desde `feature/domain-models` hacia `main`.

## Pendiente

- Abrir el Pull Request con la descripción requerida: funcionalidades implementadas, desafíos encontrados y cómo se resolvieron.
- Entregar el enlace del Pull Request en la plataforma de 4Geeks.
- Hacer merge a `main` tras la aprobación.

## Observaciones

- Con las reglas de puntuación del briefing, un transportista que no opera en el país de destino puede superar el umbral de 50 puntos y resultar elegido por coste. Con los datos de ejemplo, UPS (solo Estados Unidos) obtiene 76,4 puntos y es el seleccionado para un envío a Madrid. Se implementó la regla tal como está escrita; cualquier cambio queda pendiente de confirmación con el mentor.
- Un Codespace nuevo arrancó en modo de recuperación por falta de espacio en disco al construir la imagen del devcontainer; se resolvió con «Full Rebuild» sin modificar `.devcontainer/` (detalle en `techContext.md`).
