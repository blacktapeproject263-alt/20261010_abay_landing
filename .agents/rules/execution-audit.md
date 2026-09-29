---
description: Global Execution Audit & Traceability Manifest for logging and tracking all agent actions.
trigger: always_on
---

# Execution Audit & Traceability Manifest

## 1. Core Directives
- **Zero Ephemeral Code**: Запрещено выполнять логику через однострочники (`python -c "..."`, длинные конвейеры `powershell -Command "..."`). Любая логика сложнее 1 команды обязана быть оформлена отдельным скриптом и сохранена на диске.
- **Mandatory Pre- & Post-Logging**: Ни одно действие, скрипт или CLI-команда не запускаются без предварительной фиксации намерения и последующей фиксации результата в журнале аудита.
- **Fail-Safe Logging**: Вывод всех выполняемых команд (`stdout` и `stderr`) перенаправляется в файлы логов. Сессии не должны завершаться с пустым выводом.
- **Atomic State Transitions**: Каждое завершенное логическое изменение фиксируется в системе контроля версий (Git).

---

## 2. Directory Structure Conventions
Перед началом работы убедись в наличии следующей структуры в корне проекта. Если каталоги отсутствуют — создай их:

```text
.audit/
├── timeline.md             # Хронологический реестр всех действий, решений и результатов
├── scripts/                # Все сгенерированные утилиты, парсеры и тестовые скрипты
│   └── S{NNN}_{action}.{ext}
├── logs/                   # Сырые логи выполнения консоли и скриптов
│   └── S{NNN}_{action}.log
└── checkpoints/            # Промежуточные дампы состояния или диффы (при необходимости)
```

Правило именования шагов: `S001`, `S002`, `S003` и т.д. Нумерация сквозная и непрерывная.

---

## 3. Timeline Protocol (`.audit/timeline.md`)
Перед выполнением любого шага агент обязан дописать секцию `[PLAN]`, а после завершения команды — обновить её блоком `[RESULT]`.

### Шаблон записи:
```markdown
## [S{NNN}] - YYYY-MM-DD HH:mm:ss (Local Time)
- **Цель / Контекст**: Что именно решается и почему выбран данный путь.
- **Файлы скрипта**: `.audit/scripts/S{NNN}_{name}.py` (или `*.ps1`)
- **Запуск**: `powershell -ExecutionPolicy Bypass -File .audit/scripts/S{NNN}_{name}.ps1`
- **Файл лога**: `.audit/logs/S{NNN}_{name}.log`
- **План**: Что планируется сделать и проверить.
- **Результат**:
  - Exit Code: 0 / 1 / error
  - Ключевые метрики / вывод: (краткая выжимка фактов)
- **Архитектурные решения / Развилки**: Почему отброшены альтернативы, какие сайд-эффекты возникли.
- **Git Commit**: `<hash>` (если применимо)
---
```

---

## 4. Execution & Shell Rules

### PowerShell
* Запрещено подавлять ошибки (`$ErrorActionPreference = 'SilentlyContinue'` запрещен).
* При запуске команд в терминале всегда дублировать потоки вывода в лог:
```powershell
<команда> 2>&1 | Tee-Object -FilePath .audit/logs/S{NNN}_{name}.log -Append
```
* Либо направлять вывод скрипта напрямую в файл лога:
```powershell
powershell -ExecutionPolicy Bypass -File .\.audit\scripts\S{NNN}_{name}.ps1 *`> .\.audit\logs\S{NNN}_{name}.log
```
* Для сложных последовательностей создавать скрипт `.audit/scripts/S{NNN}_{name}.ps1` и запускать его целиком.

### Python
* Любой вспомогательный скрипт в `.audit/scripts/` обязан настраивать стандартный логгер с выводом в консоль и в файл:
```python
import logging, sys
from pathlib import Path

log_path = Path(".audit/logs/S{NNN}_{name}.log")
log_path.parent.mkdir(parents=True, exist_ok=True)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(log_path, encoding="utf-8"),
        logging.StreamHandler(sys.stdout)
    ]
)
```

---

## 5. Git Commit Protocol
* После успешного прогона шага и обновления `.audit/timeline.md` агент выполняет атомарный коммит:
```bash
git add .
git commit -m "trace(S{NNN}): <краткое описание действия>"
```
* Запрещено коммитить нерабочий код без явной пометки `fixup:` или `wip:`.

---

## 6. Self-Verification Checklist Before Every Response
Прежде чем отдавать ответ пользователю, агент сверяет выполнение следующих пунктов:
1. [ ] Скрипт сохранен физически в `.audit/scripts/`?
2. [ ] Лог выполнения записан в `.audit/logs/` и не пуст?
3. [ ] Шаг внесен в `.audit/timeline.md` с фиксацией логики и принятых решений?
4. [ ] Изменения зафиксированы в Git (при наличии репозитория)?

---

## 7. Project Initialization & Git Rules
1. Создать структуру каталогов `.audit/logs`, `.audit/scripts`, `.audit/checkpoints`, `.antigravity`.
2. Создать `.audit/timeline.md` с заголовком `# Execution Timeline`.
3. Добавить `.audit/logs/` в `.gitignore`, чтобы не засорять удаленный репозиторий тяжелыми сырыми логами, сохраняя при этом `.audit/timeline.md` и `.audit/scripts/` под версионированием.
