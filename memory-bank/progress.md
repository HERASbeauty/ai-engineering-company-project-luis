# Progreso del proyecto: TrackFlow

## Estado

Milestone 1 está en curso en la rama `feature/agent-memory-bank`, creada desde `main` en el commit `4faf32e71fd9054da7c8f3c3cbe9cf7f7dc897d0`. Las aplicaciones iniciales de UI están implementadas y sus validaciones formales se completaron; la entrega del hito aún no se ha cerrado.

## Completado

- **Milestone 0:** selección de TrackFlow documentada en `company-choice.md`.
- Inspección inicial del repositorio completada: identidad, Git, documentación, estructura, tecnologías y configuraciones existentes revisadas.
- Rama de trabajo `feature/agent-memory-bank` creada y activada desde `main`.
- Banco de memoria inicial creado en `memory-bank/projectbrief.md`, `memory-bank/techContext.md` y `memory-bank/progress.md`; las omisiones detectadas en la revisión se corrigieron.
- `AGENTS.md` creado en la raíz, revisado y aprobado. Contiene seis pasos ordenados antes de cada commit, exige autorización explícita para stage, commit, push y Pull Request, y define archivos protegidos, límites del monorepo y guardas específicas de TrackFlow.
- `.agents/rules/trackflow-operational-data.md` creada y revisada. Declara el alcance **ALWAYS ACTIVE** para agentes de código y establece guardas de TrackFlow sobre la veracidad y el etiquetado de datos operativos, los estados no confirmados, las integraciones planificadas y los cambios de contratos o arquitectura.
- `.agents/skills/trackflow-ui-validation/SKILL.md` creada y revisada como procedimiento reutilizable para validar interfaces existentes. Documenta entradas, pasos, salidas y criterios de aceptación verificables para `uis/website/` y `uis/backoffice/`.
- **Sitio corporativo público:** aplicación React + Vite + TypeScript independiente bajo `uis/website/`, servida en `/` por el puerto 3000. Se implementó como sitio informativo en inglés y se completó la validación formal. El build con TypeScript y la comprobación HTTP de `/` pasaron. El desarrollador informó haber revisado capturas de escritorio y móvil, secciones, enlaces y navegación móvil; estos controles visuales son evidencia manual reportada, no pruebas automatizadas del navegador.
- **Backoffice interno:** aplicación React + Vite + TypeScript independiente bajo `uis/backoffice/`, servida en `/` por el puerto 3001. Se implementaron cinco secciones y registros ficticios DEMO con búsquedas y filtros en el cliente. Se completó la validación formal; el build con TypeScript y las comprobaciones HTTP pasaron. El desarrollador informó que revisó en navegador las cinco secciones, navegación, filtros, estados vacíos, uso móvil y consola sin errores. Son controles manuales reportados, no pruebas automatizadas del navegador.
- El backoffice separa hechos documentados de valores de demostración y no está conectado a backend operativo, autenticación real, almacenamiento persistente ni sistemas externos de negocio.
- No se han realizado commits, pushes ni Pull Requests.

## En curso

Preparación de la auditoría final de repositorio y de la lista de verificación de Milestone 1. Aún no se ha declarado completada la entrega del hito.

## Pendiente

- Ejecutar una auditoría final del repositorio y de los requisitos/checklist de Milestone 1.
- Implementar únicamente las correcciones que se aprueben como resultado de esa auditoría.
- Preparar stage y commit solo después de recibir autorización explícita del desarrollador.
- Hacer push y crear un Pull Request solo después de recibir autorización explícita del desarrollador.
- Adjuntar al Pull Request la evidencia requerida: una captura del sitio público, una captura del backoffice y un enlace directo al `AGENTS.md` de la raíz.

Los screenshots requeridos para el Pull Request y el propio Pull Request no se consideran completados. Los builds y HTTP checks de ambas aplicaciones pasaron durante sus tareas de validación; no se afirma que se hayan ejecutado pruebas automatizadas en navegador. La creación de los archivos de regla y skill no implica que Copilot los haya cargado automáticamente. El backend y las integraciones operativas siguen fuera de la implementación actual; no se han afirmado como existentes.

## Observaciones pendientes

- `README.md` de la plantilla todavía describe `CONTEXT.md` como placeholder, aunque el archivo actual contiene el briefing real de TrackFlow; también afirma que aún no existe un `AGENTS.md` raíz, aunque ya fue creado y aprobado.
- El README raíz menciona un `docker-compose.yml` de orquestación que no aparece en el inventario del repositorio.
- `CONTEXT.md` identifica a Thomas Harry como fundador y CEO, pero otra sección identifica a Daniel Espinoza como CEO y dice que creó TrackFlow Tech. La fuente no resuelve la diferencia.
- La configuración del devcontainer intenta ejecutar `uv sync`, pero no se encontró un manifiesto Python en la raíz que documente ese proyecto.

Estas observaciones no se han corregido ni se tratan como decisiones resueltas.
