# Instrucciones para agentes de código: TrackFlow

## Identidad y alcance

Este repositorio es el monorepo de TrackFlow, una empresa de logística de última milla y gestión de almacenes que opera entre Estados Unidos y España. Es un proyecto de varios hitos; cada cambio debe respetar el contexto común y los límites de cada directorio.

El foco actual es la infraestructura de Milestone 1 y las aplicaciones iniciales `uis/website` y `uis/backoffice`. Que estas rutas sean destinos del proyecto no significa que las aplicaciones o sus servicios ya existan.

Estas instrucciones rigen a los **agentes de código** que ayudan a desarrollar el repositorio. No definen el comportamiento del futuro **agente de Experiencia del Cliente** de TrackFlow ni autorizan a implementarlo. Ese agente es una visión de largo plazo; el Customer Experience Intelligence Dashboard es una extensión opcional y queda fuera de Milestone 1.

## Inicio obligatorio de sesión

Antes de proponer o realizar cambios, lee:

1. `CONTEXT.md`.
2. `memory-bank/projectbrief.md`.
3. `memory-bank/techContext.md`.
4. `memory-bank/progress.md`.
5. Para trabajar en Milestone 1 o en el sitio web público, `docs/milestone-1/BRIEFING.md`, antes de planificar o modificar código relacionado.
6. El `README.md` de cada directorio afectado y las reglas aplicables bajo `.agents/rules/`, si existen.

Consulta también `company-choice.md` cuando el alcance dependa del foco elegido por el estudiante. Si una fuente contradice a otra, conserva la ambigüedad y señala la discrepancia; no elijas una versión por inferencia.

## Flujo obligatorio antes de cada commit

Sigue estos pasos en orden para cada conjunto de cambios que se pretenda preparar para commit:

1. **Leer contexto:** revisar el contexto empresarial y técnico obligatorio y localizar las restricciones pertinentes.
2. **Inspeccionar el área:** leer el código existente, los README aplicables y las reglas con alcance sobre los archivos afectados.
3. **Definir el cambio:** declarar alcance, archivos que se modificarían y criterios de aceptación verificables; respetar la autorización recibida.
4. **Implementar con alcance limitado:** cambiar solo lo aprobado y no ampliar el trabajo sin autorización.
5. **Validar y revisar:** ejecutar las comprobaciones adecuadas, revisar el diff y confirmar que los cambios cumplen los criterios y no incluyen modificaciones ajenas.
6. **Informar y pedir autorización:** resumir cambios, resultados y limitaciones; solicitar aprobación explícita del desarrollador antes de hacer stage o commit.

Que las validaciones pasen **no** autoriza a preparar ni crear un commit. La aprobación para implementar tampoco equivale a autorización para stage, commit, push o Pull Request.

## Archivos y acciones protegidos

No realices estas acciones sin autorización explícita del desarrollador, específica para el alcance solicitado:

- Modificar `CONTEXT.md` o `company-choice.md`.
- Cambiar los README de la plantilla.
- Modificar `.devcontainer/`, infraestructura o configuración de despliegue.
- Eliminar o reestructurar carpetas existentes.
- Añadir dependencias o cambiar gestores de paquetes.
- Cambiar interfaces públicas, esquemas o arquitectura.
- Preparar archivos con stage, hacer commits, push o crear Pull Requests.
- Ejecutar operaciones Git destructivas, como resetear, descartar o reescribir cambios existentes.

No sobrescribas ni descartes cambios ajenos. Si el estado del repositorio impide trabajar sin afectar cambios existentes, detente e informa al desarrollador.

## Límites del monorepo

Respeta la responsabilidad de cada directorio y las instrucciones de su README:

- `uis/website/`: sitio web público de TrackFlow.
- `uis/backoffice/`: aplicación interna de la empresa.
- `services/`: servicios backend; la plantilla recomienda una API centralizada con FastAPI, pero no presupongas que exista ni conviertas esa recomendación en una decisión aprobada.
- `.agents/rules/` y `.agents/skills/`: configuración del agente de código, cuando se autorice y exista. No afirmes que estas rutas, reglas o skills ya están implementadas.
- `agents/` y `skills/`: capacidades de IA a nivel de producto dentro del monorepo; no son sustitutos de `.agents/`.

Reutiliza la infraestructura existente cuando corresponda. No dupliques servicios, configuraciones, paquetes ni capacidades entre directorios sin una necesidad aprobada. Documenta nuevas aplicaciones, servicios, agentes o pipelines en su propio ámbito siguiendo el README correspondiente.

## Guardas específicas de TrackFlow

- No inventes estados de envío, datos de tracking, niveles de inventario ni integraciones con transportistas.
- Si hacen falta datos ficticios para una interfaz o demostración, márcalos de forma visible como datos de ejemplo; no los presentes como datos reales de TrackFlow.
- No describas APIs, sistemas, conexiones o capacidades planificadas como si ya existieran.
- Conserva las ambigüedades documentadas, incluida la discrepancia sobre la dirección ejecutiva, hasta que una fuente autorizada la resuelva.
- Ten en cuenta la operación bilingüe y transfronteriza, los dos entornos regulatorios y el reto de unificar dos stacks tecnológicos. No infieras leyes, controles de cumplimiento, arquitectura ni correspondencia entre stack y país que las fuentes no especifiquen.
- Mantén separado el alcance actual de Milestone 1 de la visión futura del agente de CX. El dashboard de inteligencia de CX es opcional y no forma parte de este hito.

## Mantenimiento de la memoria

Cuando una decisión arquitectónica sea aprobada, una capacidad se implemente, aparezca un bloqueo o cambie el estado de un hito, actualiza el archivo pertinente de `memory-bank/` dentro del alcance autorizado. Distingue siempre decisiones aprobadas de propuestas y trabajo planificado; no registres como completado algo que solo se haya discutido.
