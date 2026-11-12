# Progreso del proyecto: TrackFlow

## Estado

- **Milestone 1** está completado: el Pull Request #1 (rama `feature/agent-memory-bank`: banco de memoria, `AGENTS.md`, reglas y skill de agentes) y el Pull Request #2 (rama `feature/trackflow-public-website`: sitio público completo) se integraron en `main`. El PR #2 fue revisado y aprobado por el profesor de 4Geeks antes del merge.
- **Milestone 2** («Desarrollando scripts para automatizar tareas») está en curso en la rama `feature/domain-models`, Pull Request #3 hacia `main`. La implementación está completa y validada; el PR está pendiente de revisión.

## Completado

### Milestone 0 y Milestone 1

- **Milestone 0:** selección de TrackFlow documentada en `company-choice.md`.
- El briefing oficial de Milestone 1 está disponible en `docs/milestone-1/BRIEFING.md`.
- Banco de memoria inicial creado en `memory-bank/projectbrief.md`, `memory-bank/techContext.md` y `memory-bank/progress.md`.
- `AGENTS.md` creado en la raíz, revisado y aprobado. Contiene seis pasos ordenados antes de cada commit, exige autorización explícita para stage, commit, push y Pull Request, y define archivos protegidos, límites del monorepo y guardas específicas de TrackFlow.
- `.agents/rules/trackflow-operational-data.md` creada y revisada. Declara el alcance **ALWAYS ACTIVE** para agentes de código y establece guardas sobre la veracidad y el etiquetado de datos operativos.
- `.agents/skills/trackflow-ui-validation/SKILL.md` creada y revisada como procedimiento reutilizable para validar `uis/website/` y `uis/backoffice/`.
- **Sitio corporativo público** (`uis/website/`, React + Vite + TypeScript + Tailwind CSS v4): landing en `/`, formulario de solicitud en `/application.html` con validación en el cliente y envío simulado, y página de privacidad en `/privacy.html`. Validación reportada en el PR #2: build de producción correcto, revisión visual de escritorio y móvil, QA manual del formulario y Lighthouse móvil (rendimiento 83, accesibilidad 91, buenas prácticas 100, SEO 61). Desplegado en Cloudflare Pages: `https://trackflow-2s1.pages.dev/`.
- **Backoffice interno** (`uis/backoffice/`, React + Vite + TypeScript, puerto 3001): cinco secciones con registros ficticios DEMO, búsquedas y filtros en el cliente. Build y comprobaciones HTTP superados; revisión manual en navegador reportada por el desarrollador. No está conectado a backend, autenticación, almacenamiento persistente ni sistemas externos.

### Milestone 2 (rama `feature/domain-models`, PR #3)

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

Revisión del Pull Request #3 de Milestone 2.

## Pendiente

- Entregar el enlace del Pull Request #3 en la plataforma de 4Geeks.
- Hacer merge del Pull Request #3 a `main` tras su aprobación.

## Observaciones

- Con las reglas de puntuación del briefing de Milestone 2, un transportista que no opera en el país de destino puede superar el umbral de 50 puntos y resultar elegido por coste. Con los datos de ejemplo, UPS (solo Estados Unidos) obtiene 76,4 puntos y es el seleccionado para un envío a Madrid. Se implementó la regla tal como está escrita; cualquier cambio queda pendiente de confirmación con el mentor.
- Cloudflare Pages usa `feature/trackflow-public-website` como rama de producción, no `main`. Los cambios futuros del sitio integrados en `main` no se desplegarán hasta que se cambie esa configuración.
- Un Codespace nuevo arrancó en modo de recuperación por falta de espacio en disco al construir la imagen del devcontainer; se resolvió con «Full Rebuild» sin modificar `.devcontainer/` (detalle en `techContext.md`).
- `CONTEXT.md` identifica a Thomas Harry como fundador y CEO, pero otra sección identifica a Daniel Espinoza como CEO y dice que creó TrackFlow Tech. La fuente no resuelve la diferencia.
- `README.md` de la plantilla todavía describe `CONTEXT.md` como placeholder y menciona un `docker-compose.yml` que no existe en el repositorio.
- La configuración del devcontainer intenta ejecutar `uv sync`, pero no hay un manifiesto Python en la raíz.
