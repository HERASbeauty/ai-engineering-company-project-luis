---
name: trackflow-ui-validation
description: Valida una interfaz existente de TrackFlow contra su propósito, ejecución técnica y requisitos de integridad de datos operativos.
---

# Skill: validación de interfaces de TrackFlow

## Identidad y uso

- **Nombre:** `trackflow-ui-validation`.
- **Objetivo:** validar una interfaz de usuario existente de TrackFlow según su propósito documentado, ejecución técnica e integridad de los datos operativos.
- **Cuándo usarla:** al revisar una implementación existente en `uis/website/` o `uis/backoffice/`. No crea ni implementa aplicaciones.

## Entradas

Antes de validar, identifica y registra:

- Ruta de la aplicación objetivo.
- Ruta o punto de entrada esperado.
- Audiencia prevista y propósito de negocio documentado.
- Comandos disponibles para iniciar, compilar, aplicar lint y probar, obtenidos de los README y manifiestos reales del proyecto.
- Criterios de aceptación aplicables y su fuente.

Si falta una entrada, no la inventes: anótala como pendiente de aclaración o no verificable.

## Procedimiento

1. Lee `CONTEXT.md`, `AGENTS.md`, los documentos pertinentes de `memory-bank/`, la regla `.agents/rules/trackflow-operational-data.md` si existe y la documentación de la aplicación objetivo.
2. Determina el stack real y los comandos disponibles a partir de archivos y documentación presentes. No presupongas framework, gestor de paquetes ni comando.
3. Inspecciona la estructura de la aplicación y localiza su punto de entrada; confirma la ruta esperada con la documentación o los criterios proporcionados.
4. Comprueba la ruta y el contenido de negocio visible. Verifica la interfaz en ejecución cuando haya un entorno disponible y su uso esté autorizado.
5. Revisa los estados de carga, resultado vacío y error donde la interfaz presente datos operativos.
6. Confirma que los datos mock, simulados o de demostración estén identificados claramente y que ninguna integración inexistente se presente como operativa.
7. Ejecuta los comandos aplicables de build, lint o test solo si están documentados o configurados y su ejecución está autorizada. No instales dependencias ni inicies servicios sin autorización explícita.
8. Informa los resultados, limitaciones y recomendaciones de corrección con evidencia.

## Criterios de aceptación

Registra cada criterio como **PASS**, **FAIL**, **NO VERIFICABLE** o **NO APLICA**, e incluye evidencia:

- **Obligatorio:** existe el punto de entrada documentado de la aplicación.
- **Obligatorio cuando se pueda verificar:** la ruta objetivo está disponible en ejecución. Si no puede comprobarse por falta de entorno, comandos o autorización, márcala **NO VERIFICABLE**.
- **Obligatorio:** el contenido visible corresponde a la audiencia y al propósito de negocio documentados.
- **Obligatorio:** la estructura y disposición de la interfaz son coherentes y permiten identificar el contenido y las acciones principales.
- **Cuando haya datos de ejemplo:** están identificados como mock, simulados o demostración, y no aparentan ser datos operativos reales.
- **Obligatorio:** no se afirman como implementadas integraciones que no existen o solo están planificadas.
- **Cuando existan comprobaciones aplicables y autorizadas:** los comandos de build, lint y test terminan correctamente. Informa cuáles se ejecutaron, omitieron o no estaban disponibles.
- **Obligatorio:** el veredicto final está respaldado por resultados y evidencia; toda limitación queda indicada.

No emitas **PASS** si falla un criterio obligatorio o si alguno no puede verificarse. Usa **FAIL** cuando la evidencia confirme un incumplimiento y **BLOCKED** cuando no sea posible verificar un criterio obligatorio. Los criterios condicionales que no correspondan pueden marcarse **NO APLICA**, con una breve justificación.

## Salidas

Entrega:

- Resumen de validación y aplicación/ruta examinada.
- Checklist de criterios aprobados, fallidos, no verificables y no aplicables.
- Comandos ejecutados y resultado de cada uno; indica también los comandos omitidos o no disponibles.
- Problemas identificados, cada uno con severidad, evidencia y archivos afectados.
- Veredicto final: **PASS**, **FAIL** o **BLOCKED**, sustentado por los criterios.

## Límites de actuación

Esta skill valida trabajo existente. Por sí sola no modifica archivos, no instala dependencias, no inicia servicios y no prepara cambios con stage, hace commits o push. Cada una de esas acciones requiere autorización explícita del desarrollador conforme a `AGENTS.md`.

## Ejemplo de invocación futura

Ejemplo de solicitud; no implica que la aplicación exista ni que esta validación se haya ejecutado:

> Usa `trackflow-ui-validation` para revisar la aplicación existente en `uis/website/`. La ruta esperada es `/tracking`; la audiencia son destinatarios de envíos. Usa los criterios de aceptación adjuntos y ejecuta únicamente los comandos autorizados y documentados.
