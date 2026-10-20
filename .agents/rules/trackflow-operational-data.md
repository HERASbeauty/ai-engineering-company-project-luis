# Regla de desarrollo: datos operativos de TrackFlow

## Alcance de aplicación

**ALWAYS ACTIVE** para agentes de código que trabajen en este repositorio. Aplica al crear, leer, transformar, mostrar, documentar o probar datos operativos de TrackFlow en:

- `uis/website/`
- `uis/backoffice/`
- `services/`
- `shared/`
- `packages/`
- `data/`, `workflows/` y `mcps/` cuando manejen datos operativos.
- Futuros agentes y skills de producto en `agents/` y `skills/` cuando manejen datos operativos.

Esta regla complementa `AGENTS.md`; no sustituye su flujo general, sus protecciones ni las README aplicables. Declara el alcance previsto de la regla, pero no afirma que Copilot u otro entorno ya la cargue o aplique automáticamente.

## Guardas obligatorias

1. No presentes como reales datos inventados de envíos, inventario, entregas o devoluciones.
2. Identifica de forma visible cualquier dato de ejemplo, simulado, ficticio o de demostración, tanto en interfaces como en documentación y pruebas.
3. No afirmes que existen integraciones de transportistas, almacenes, tracking, tickets o devoluciones si solo están planificadas.
4. Distingue un dato no disponible de un estado de negocio confirmado. Por ejemplo, la falta de datos de tracking no significa que el envío se haya entregado.
5. En interfaces que muestran datos operativos, incluye estados comprensibles de carga, resultado vacío y error; no sustituyas esos estados por datos inventados.
6. No inventes contratos de API, esquemas, credenciales, endpoints ni capacidades de transportistas.
7. Solicita aprobación explícita del desarrollador antes de introducir o cambiar contratos de datos compartidos, reglas operativas de negocio o arquitectura de integraciones.
8. Mantén identificables los hechos documentados, las decisiones técnicas aprobadas y las suposiciones. Marca las suposiciones y no las presentes como hechos.
9. Respeta el contexto internacional de TrackFlow — Estados Unidos y España, dos entornos regulatorios y dos stacks tecnológicos que se deben unificar — sin inventar leyes, obligaciones regulatorias ni arquitecturas no documentadas.

## Ejemplo

**No aceptable:** mostrar `Envío TF-10482: entregado` como un registro real cuando ese envío y su estado fueron simulados.

**Aceptable:** mostrar `DEMO — Envío ficticio DEMO-001 — Estado simulado: en reparto` y dejar claro que no representa un envío real de TrackFlow.
